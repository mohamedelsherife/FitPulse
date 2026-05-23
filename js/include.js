function loadComponent(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;

      // بعد تحميل الهيدر، لوّن الرابط الحالي
      if (id === 'header') {
        highlightActiveLink();
      }
    })
    .catch(err => console.error('Error loading component:', err));
}

function highlightActiveLink() {
  const currentPage = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('#header nav a');
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// تحميل الهيدر والفوتر تلقائياً
loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');