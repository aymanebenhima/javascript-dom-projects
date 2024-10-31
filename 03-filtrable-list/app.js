// Accéder aux élements du DOM
const searchInput = document.getElementById('search-input');
const itemList = document.getElementById('item-list');

// Créer une fonction pour filterer les items
function filterList() {
    // Convertir le terme de recherche en minuscules pour la comparaison
    const searchTerm = searchInput.value.toLowerCase();
    // Obtenir tous les éléments de la liste
    const items = itemList.getElementsByTagName('li');
    let hasResults = false

    // Parcourir chaque élément de la liste
    Array.from(items).forEach(item => {
        // Text de l'item en minuscules
        const itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            const startIndex = itemText.indexOf(searchTerm)
            const endIndex = startIndex + searchTerm.length
            const originalText = item.textContent

            // mettre en Highlighting le texte correspondant au terme de recherche
            item.innerHTML = `${originalText.substring(0, startIndex)}<span class="highlight">${originalText.substring(startIndex, endIndex)}</span>${originalText.substring(endIndex)}`

            item.classList.remove('hidden') // Afficher l'élément
            hasResults = true
        } else {
            item.classList.add('hidden') // Cacher l'élément
        }
    })

    // Afficher un message si aucun résultat n'est trouvé
    if (!hasResults && searchTerm !== '') {
        if(!document.getElementById('no-results')) {
            const noResultsMessage = document.createElement('li')
            noResultsMessage.id = 'no-results'
            noResultsMessage.textContent = 'Aucun résultat trouvé.'
            noResultsMessage.classList.add('no-results')
            itemList.appendChild(noResultsMessage)
        }
    } else {
        const noResultsMessage = document.getElementById('no-results')
        if (noResultsMessage) {
            // Supprimer le message si des résultats sont trouvés
            noResultsMessage.remove()
        }
    }
} 

// Ajouter un écouteur d'événement pour le champ de recherche
searchInput.addEventListener('input', filterList);