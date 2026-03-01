import { AppStore, db } from './appstore.js';

const appStore = AppStore.getInstance();

document.addEventListener('DOMContentLoaded', async () => {
    await appStore.init();
    await updateUI();

    // Auto-trigger build if redirected from "Next" button
    if (window.location.pathname.includes('/install') && 
        sessionStorage.getItem('homelabinator_auto_build') === 'true') {
        sessionStorage.removeItem('homelabinator_auto_build');
        window.getDownloadLink();
    }
    
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const wrappers = document.querySelectorAll('.app-card-wrapper');
            const showMoreContainers = document.querySelectorAll('.show-more-container');
            
            if (query.length > 0) {
                // Hide "Show More" buttons during search
                showMoreContainers.forEach(c => c.style.display = 'none');
                
                wrappers.forEach(wrapper => {
                    const card = wrapper.querySelector('.app-card');
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const replaces = card.querySelector('.replaces').textContent.toLowerCase();
                    const tagline = card.querySelector('.tagline').textContent.toLowerCase();
                    
                    if (title.includes(query) || replaces.includes(query) || tagline.includes(query)) {
                        wrapper.style.display = 'block';
                        wrapper.classList.remove('hidden-app');
                    } else {
                        wrapper.style.display = 'none';
                    }
                });
            } else {
                // Reset to initial state when search is cleared
                wrappers.forEach(wrapper => {
                    wrapper.style.display = 'block';
                    const index = parseInt(wrapper.dataset.index);
                    if (index >= 5) {
                        wrapper.classList.add('hidden-app');
                    } else {
                        wrapper.classList.remove('hidden-app');
                    }
                });

                showMoreContainers.forEach(c => {
                    const pane = c.closest('.category-pane');
                    const hiddenApps = pane.querySelectorAll('.app-card-wrapper.hidden-app');
                    if (hiddenApps.length > 0) {
                        c.style.display = 'block';
                    } else {
                        c.style.display = 'none';
                    }
                });
            }

            // Hide/Show empty categories
            document.querySelectorAll('.category-pane').forEach(pane => {
                const visibleWrappers = Array.from(pane.querySelectorAll('.app-card-wrapper')).filter(w => w.style.display !== 'none');
                if (visibleWrappers.length === 0) {
                    pane.style.display = 'none';
                } else {
                    pane.style.display = 'block';
                }
            });
        });
    }
});

window.toggleCategory = function(button) {
    const pane = button.closest('.category-pane');
    const hiddenApps = Array.from(pane.querySelectorAll('.app-card-wrapper.hidden-app'));
    
    // Show next 5 apps
    for (let i = 0; i < 5 && i < hiddenApps.length; i++) {
        hiddenApps[i].classList.remove('hidden-app');
    }
    
    // Hide button if no more hidden apps
    if (pane.querySelectorAll('.app-card-wrapper.hidden-app').length === 0) {
        button.closest('.show-more-container').style.display = 'none';
    }
}

window.addApp = async function(slug) {
    const app = await appStore.getApp(slug);
    if (app) {
        const isInstalled = app.installed === 1;
        await appStore.setAppInstalled(slug, !isInstalled);
        await updateUI();
    } else {
        console.error(`App ${slug} not found in store.`);
    }
}

async function updateUI() {
    const installedApps = await db.apps.where('installed').equals(1).toArray();
    const installedSlugs = new Set(installedApps.map(a => a.name));

    const nextButton = document.getElementById('next-button');
    if (nextButton) {
        if (installedSlugs.size > 0) {
            nextButton.classList.remove('hidden');
        } else {
            nextButton.classList.add('hidden');
        }
    }

    // Update app cards to show "Added" instead of "Add"
    document.querySelectorAll('.app-card').forEach(card => {
        const slug = card.dataset.slug;
        const addButton = card.querySelector('.add-button');
        if (addButton) {
            if (installedSlugs.has(slug)) {
                addButton.textContent = 'Added';
                addButton.classList.add('added');
            } else {
                addButton.textContent = 'Add';
                addButton.classList.remove('added');
            }
        }
    });
}

window.getDownloadLink = async function() {
    const isInstallPage = window.location.pathname.includes('/install');
    
    if (!isInstallPage) {
        console.log("Initiating build and navigating to install page...");
        try {
            const config = await appStore.generateConfig();
            sessionStorage.setItem('homelabinator_config', config);
            sessionStorage.setItem('homelabinator_auto_build', 'true');
            window.location.href = "/install";
        } catch (error) {
            console.error("Error generating config:", error);
        }
        return;
    }
    
    // On Install Page
    const config = sessionStorage.getItem('homelabinator_config');
    const downloadBtn = Array.from(document.querySelectorAll('.action-btn'))
        .find(btn => btn.textContent.trim() === 'Download');
    
    if (!downloadBtn) {
        console.error("Download button not found.");
        return;
    }

    if (!config) {
        console.error("No config found in session storage.");
        downloadBtn.textContent = "Error: No Config";
        return;
    }

    const originalContent = downloadBtn.innerHTML;
    downloadBtn.disabled = true;
    downloadBtn.style.display = 'inline-flex';
    downloadBtn.style.alignItems = 'center';
    downloadBtn.style.justifyContent = 'center';
    downloadBtn.innerHTML = `
        <svg class="spinner" viewBox="0 0 50 50" style="width: 20px; height: 20px; margin-right: 10px; animation: rotate 2s linear infinite;">
            <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-dasharray="90,150" stroke-dashoffset="0" stroke-linecap="round" style="animation: dash 1.5s ease-in-out infinite;"></circle>
        </svg>
        Your ISO is being built...
    `;

    // Add styles for spinner if not present
    if (!document.getElementById('spinner-style')) {
        const style = document.createElement('style');
        style.id = 'spinner-style';
        style.innerHTML = `
            @keyframes rotate { 100% { transform: rotate(360deg); } }
            @keyframes dash {
                0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
                50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
                100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
            }
        `;
        document.head.appendChild(style);
    }

    try {
        const formData = new FormData();
        const blob = new Blob([config], { type: 'text/plain' });
        formData.append('file', blob, 'text-snippet.txt');

        const response = await fetch('https://api.homelabinator.com/generate-iso', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) throw new Error('API request failed');

        const data = await response.json();
        if (data.url) {
            downloadBtn.innerHTML = 'Download Ready';
            downloadBtn.disabled = false;
            downloadBtn.onclick = (e) => {
                e.preventDefault();
                window.location.href = data.url;
            };
        } else {
            throw new Error('No URL in response');
        }
    } catch (error) {
        console.error("Error building ISO:", error);
        downloadBtn.innerHTML = 'Error Building ISO';
        downloadBtn.disabled = false;
        setTimeout(() => { downloadBtn.innerHTML = originalContent; }, 3000);
    }
}

window.showAppInfo = function(slug) {
    // In a real app this might open a modal
    // For now we can redirect to the single app page
    window.location.href = `/apps/${slug}`;
}

window.addAppAndReturn = async function(slug) {
    await window.addApp(slug);
    window.location.href = '/';
}

let carouselIndex = 0;
window.moveCarousel = function(n) {
    const items = document.querySelectorAll('.carousel-item');
    if (items.length === 0) return;
    items[carouselIndex].classList.remove('active');
    carouselIndex = (carouselIndex + n + items.length) % items.length;
    items[carouselIndex].classList.add('active');
}
