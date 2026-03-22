document.addEventListener('DOMContentLoaded', function () {
  // Chargement du menu depuis menu.html
  var menuContainer = document.getElementById('menu-content');
  if (menuContainer) {
    fetch('menu.html')
      .then(function (response) {
        if (!response.ok) throw new Error('Erreur chargement menu');
        return response.text();
      })
      .then(function (html) {
        menuContainer.innerHTML = html;
      })
      .catch(function () {
        menuContainer.innerHTML =
          '<p style="text-align:center; color:#666;">Contactez-nous pour recevoir la carte de la quinzaine : <a href="mailto:contact@stephcooking.fr">contact@stephcooking.fr</a></p>';
      });
  }

  // Navigation mobile - toggle hamburger
  var toggle = document.querySelector('.navbar-toggle');
  var navLinks = document.querySelector('.navbar-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Fermer le menu mobile au clic sur un lien
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }
});
