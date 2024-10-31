// Tableau des objets galactiques
const galacticObjects = [
    { name: "Jupiter", size: 139820, mass: 1.898e27, distance: 778500000 },
    { name: "Soleil", size: 1392684, mass: 1.989e30, distance: 0 },
    { name: "Mars", size: 6779, mass: 6.4171e23, distance: 225000000 },
    { name: "Vénus", size: 12104, mass: 4.8675e24, distance: 108200000 },
    { name: "Saturne", size: 116460, mass: 5.683e26, distance: 1427000000 },
    { name: "Pluton", size: 2376, mass: 1.303e22, distance: 5900000000 },
];

// Fonction pour générer et afficher les objets galactiques dans le DOM
function displayGalacticObjects(objects) {
    const galaxySection = document.getElementById('galaxy');
    galaxySection.innerHTML = ''; // Vider la section avant de la remplir
    objects.forEach(object => {
        const objectDiv = document.createElement('div');
        objectDiv.classList.add('galactic-object');
        
        objectDiv.innerHTML = `
            <h2>${object.name}</h2>
            <p><strong>Taille :</strong> ${object.size} km</p>
            <p><strong>Masse :</strong> ${object.mass.toExponential(2)} kg</p>
            <p><strong>Distance de la Terre :</strong> ${object.distance.toLocaleString()} km</p>
        `;
        galaxySection.appendChild(objectDiv);
    });
}

// Fonction pour trier les objets par taille, masse, ou distance
function sortObjectsBy(property) {
    // write here ...
}

// Fonction de recherche par nom
function searchObjects(query) {
    // write here ...
}

// Événements pour les boutons de tri
document.getElementById('sort-size').addEventListener('click', () => sortObjectsBy('size'));
document.getElementById('sort-mass').addEventListener('click', () => sortObjectsBy('mass'));
document.getElementById('sort-distance').addEventListener('click', () => sortObjectsBy('distance'));

// Événement pour la recherche dynamique
document.getElementById('search-input').addEventListener('input', (e) => {
    // write here ...
});

// Affichage initial des objets galactiques
displayGalacticObjects(galacticObjects);
