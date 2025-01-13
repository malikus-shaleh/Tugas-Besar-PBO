document.querySelectorAll('.btn-pesan').forEach(button => {
    button.addEventListener('click', function() {
        const service = this.getAttribute('data-service');
        // Menyimpan jenis layanan yang dipilih ke localStorage
        localStorage.setItem('selectedService', service);

        // Arahkan ke halaman pesan layanan
        window.location.href = '../pesanan/pesanan.html';  // Mengarahkan ke halaman pengisian nama
    });
});
