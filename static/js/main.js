let addedApps = new Set(JSON.parse(localStorage.getItem('addedApps') || '[]'));

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const appCards = document.querySelectorAll('.app-card');
            
            appCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const replaces = card.querySelector('.replaces').textContent.toLowerCase();
                const tagline = card.querySelector('.tagline').textContent.toLowerCase();
                
                if (title.includes(query) || replaces.includes(query) || tagline.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            // Hide/Show empty categories
            document.querySelectorAll('.category-pane').forEach(pane => {
                const visibleCards = pane.querySelectorAll('.app-card[style="display: block;"], .app-card:not([style])');
                if (visibleCards.length === 0) {
                    pane.style.display = 'none';
                } else {
                    pane.style.display = 'block';
                }
            });
        });
    }
});

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
