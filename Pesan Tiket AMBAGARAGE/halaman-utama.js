const texts = ["Servis Ringan ", "Servis Berat ", "Full Servis ", "Ganti Oli ", "Tune UP "];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 200; // Kecepatan tiap karakter
const delay = 1000; // Delay saat selesai ketik

function animateText() {
    const animatedText = document.getElementById("animated-text");

    if (!animatedText) return;

    const currentText = texts[index];

    if (isDeleting) {
        animatedText.textContent = currentText.substring(0, charIndex--); // Hapus karakter
    } else {
        animatedText.textContent = currentText.substring(0, charIndex++); // Tambah karakter
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(animateText, delay); // Tunggu sebelum menghapus
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Pindah ke teks berikutnya
        setTimeout(animateText, speed); // Tunggu sebelum menulis lagi
    } else {
        setTimeout(animateText, speed); // Lanjut animasi
    }
}

document.addEventListener("DOMContentLoaded", animateText);
