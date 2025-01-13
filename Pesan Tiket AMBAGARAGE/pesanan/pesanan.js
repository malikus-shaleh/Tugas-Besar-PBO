document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('order-form');
    const customerNameInput = document.getElementById('nama-customer');
    const platKendaraanInput = document.getElementById('plat-kendaraan');
    const nomorHpInput = document.getElementById('nomor-telepon');

    // Event listener untuk tombol pesan layanan
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const customerName = customerNameInput.value.trim();
        const platKendaraan = platKendaraanInput.value.trim();
        const nomorHp = nomorHpInput.value.trim();
        const queueNumber = parseInt(localStorage.getItem('queueNumber')) || 1;

        if (customerName && platKendaraan && nomorHp) {
            // Simpan data ke localStorage
            localStorage.setItem('customerName', customerName);
            localStorage.setItem('customerMotor', platKendaraan);
            localStorage.setItem('nomorHp', nomorHp);
            localStorage.setItem('queueNumber', queueNumber);

            // Tambahkan nomor antrian berikutnya
            localStorage.setItem('queueNumber', queueNumber + 1);

            // Redirect ke halaman hasil
            window.location.href = '../hasil-pesanan/hasil-pesanan.html';
        } else {
            alert('Nama, Nomor Telepon, dan Plat Kendaraan harus diisi!');
        }
    });
});

// Fungsi untuk mereset antrian
function resetAntrian() {
    if (confirm('Apakah Anda yakin ingin mereset antrian? Semua data akan dihapus.')) {
        // Hapus semua data terkait antrian dari localStorage
        localStorage.removeItem('queueNumber');
        localStorage.removeItem('customerName');
        localStorage.removeItem('customerMotor');
        localStorage.removeItem('nomorHp');
        localStorage.removeItem('selectedService');

        alert('Antrian berhasil direset. Mulai dari nomor 1.');
    }
}
