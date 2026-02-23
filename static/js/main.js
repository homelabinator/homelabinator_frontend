let addedApps = new Set(JSON.parse(localStorage.getItem('addedApps') || '[]'));

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
        if (addedApps.has(slug)) {
            addButton.textContent = 'Added';
            addButton.classList.add('added');
        } else {
            addButton.textContent = 'Add';
            addButton.classList.remove('added');
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

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
});
