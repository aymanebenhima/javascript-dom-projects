// Récupération des éléments du DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submitBtn = document.getElementById('submitBtn');

// Désactive le bouton de soumission si tous les champs ne sont pas valides
function toggleSubmitButton() {
  // TODO: Implement logic to enable/disable the submit button based on form validity
}

// Affiche un message d'erreur et applique la classe 'error'
function showError(input, message) {
  // TODO: Implement logic to show an error message and add 'error' class to the form control
}

// Affiche une bordure de succès en appliquant la classe 'success'
function showSuccess(input) {
  // TODO: Implement logic to add 'success' class to the form control
}

// Vérifie si l'email est valide
function checkEmail(input) {
  // TODO: Implement logic to check if the email is valid using regex
}

// Vérifie que tous les champs requis sont remplis
function checkRequired(input) {
  // TODO: Implement logic to check if required fields are filled
}

// Vérifie la longueur du champ (min et max)
function checkLength(input, min, max) {
  // TODO: Implement logic to check if the input length is within the specified range
}

// Vérifie si les mots de passe correspondent
function checkPasswordsMatch(input1, input2) {
  // TODO: Implement logic to check if both password fields match
}

// Retourne le nom du champ avec la première lettre en majuscule
function getFieldName(input) {
  // TODO: Implement logic to return the field name with the first letter capitalized
}

// Ajoute les événements de validation sur le focus et le blur
// TODO: Add event listeners to validate fields on focusout

// Validation finale lors de la soumission du formulaire
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche l'envoi par défaut du formulaire
  
  // TODO: Implement final form validation and display SweetAlert if the form is valid
});

