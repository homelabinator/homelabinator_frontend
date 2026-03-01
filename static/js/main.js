let addedApps = new Set(JSON.parse(localStorage.getItem('addedApps') || '[]'));

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    
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

function toggleCategory(button) {
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

function addApp(slug) {
    if (addedApps.has(slug)) {
        console.log(`Removing app: ${slug}`);
        addedApps.delete(slug);
    } else {
        console.log(`Adding app: ${slug}`);
        addedApps.add(slug);
    }
    localStorage.setItem('addedApps', JSON.stringify(Array.from(addedApps)));
    updateUI();
}

function updateUI() {
    const nextButton = document.getElementById('next-button');
    if (addedApps.size > 0) {
        nextButton.classList.remove('hidden');
    } else {
        nextButton.classList.add('hidden');
    }

    // Update app cards to show "Added" instead of "Add"
    document.querySelectorAll('.app-card').forEach(card => {
        const slug = card.dataset.slug;
        const addButton = card.querySelector('.add-button');
        if (addButton) {
            if (addedApps.has(slug)) {
                addButton.textContent = 'Added';
                addButton.classList.add('added');
            } else {
                addButton.textContent = 'Add';
                addButton.classList.remove('added');
            }
        }
    });
}

function getDownloadLink() {
    console.log("Getting download link for ISO...");
    // Placeholder for backend call
    const isoLink = "https://example.com/homelab-os.iso";
    alert(`Downloading ISO from: ${isoLink}`);
    window.location.href = "/install"; // Go to install screen
}

function showAppInfo(slug) {
    // In a real app this might open a modal
    // For now we can redirect to the single app page
    window.location.href = `/apps/${slug}`;
}

function addAppAndReturn(slug) {
    addApp(slug);
    window.location.href = '/';
}

let carouselIndex = 0;
function moveCarousel(n) {
    const items = document.querySelectorAll('.carousel-item');
    if (items.length === 0) return;
    items[carouselIndex].classList.remove('active');
    carouselIndex = (carouselIndex + n + items.length) % items.length;
    items[carouselIndex].classList.add('active');
}
