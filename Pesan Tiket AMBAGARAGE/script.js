// Ambil semua elemen menu
const menuLinks = document.querySelectorAll('.nav-menu a');

// Fungsi untuk mengatur menu aktif saat load
function setActiveMenuOnLoad() {
  menuLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Set menu aktif saat halaman pertama kali dimuat
setActiveMenuOnLoad();
