document.addEventListener('DOMContentLoaded', function () {
    // Mengambil data dari localStorage
    const customerName = localStorage.getItem('customerName');
    const queueNumber = localStorage.getItem('queueNumber');
    const customerMotor = localStorage.getItem('customerMotor');
    const nomorHp = localStorage.getItem('nomorHp'); // Ambil nomor telepon
    const selectedService = localStorage.getItem('selectedService') || 'Tidak disebutkan';

    // Memastikan bahwa data tidak kosong dan memuatnya ke elemen HTML
    if (customerName && queueNumber && customerMotor && nomorHp) {
        document.getElementById('name').textContent = customerName;
        document.getElementById('nomor-hp').textContent = nomorHp; // Tampilkan nomor telepon
        document.getElementById('queue-number').textContent = queueNumber - 1; // Nomor terakhir
        document.getElementById('plat-motor').textContent = customerMotor;
        document.getElementById('service').textContent = selectedService;
    } else {
        alert('Data pesanan tidak ditemukan!');
    }
});
