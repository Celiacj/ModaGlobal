// contacte.js
document.getElementById('contacteForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que es recarregui la pàgina
    alert('Formulari enviat! Nom: ' + 
          document.getElementById('nom').value +
          ', Email: ' + document.getElementById('email').value +
          ', Missatge: ' + document.getElementById('missatge').value);
});
