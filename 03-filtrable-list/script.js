// Get the search input and item list elements
const searchInput = document.getElementById('search-input');
const itemList = document.getElementById('item-list');

// Function to filter the list based on the search input
function filterList() {
    const searchTerm = searchInput.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Event listener for search input
searchInput.addEventListener('input', filterList);
