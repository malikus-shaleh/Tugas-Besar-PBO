OUTPUT KODE PROGRAM

![Deskripsi Gambar](https://github.com/malikus-shaleh/Tugas-Besar-PBO/blob/main/output/1.jpg)

Gambar diatas adalah tampilan pada saat memasuki halaman pertama web atau pada saat baru masuk web


![Deskripsi Gambar](https://github.com/malikus-shaleh/Tugas-Besar-PBO/blob/main/output/2.jpg)

Gambar diatas adalah tampilan ketika kita menekan nomor antrian dan masuk ke bagian menu, di bagian ini adalah tempat untuk memilih menu  servis yang ddiinginkan baik itu servis berat, servis ringan, full servis, ganti oli maupun tune up

![Deskripsi Gambar](https://github.com/malikus-shaleh/Tugas-Besar-PBO/blob/main/output/3.jpg)

setelah memilih layanan maka langkah selanjutnya adalah memasukkan nama dan no handphone sebagai identitas diri dan memasukan no plat kendaraan agar waktu pelayanan tidak terjadi kesalahan saat memilih motor

![Deskripsi Gambar](https://github.com/malikus-shaleh/Tugas-Besar-PBO/blob/main/output/6.jpg)

jika sudah selesai memasukkan data diri dan no plat kendaraan maka akan keluar tampilan nomor antrian yang didapatkan seperti gambar diatas

![Deskripsi Gambar](https://github.com/malikus-shaleh/Tugas-Besar-PBO/blob/main/output/4.jpg)
![Deskripsi Gambar](https://github.com/malikus-shaleh/Tugas-Besar-PBO/blob/main/output/5.jpg)

dua gambar diatas adalah bagian dari sistem yang dimana admin bisa mereset ulang nomor antrian jika sudah penuh atau bengkel sudah tutup

========================================================================================================================================================================================

DIAGRAM UML

1. USE CASE DIAGRAM

![Deskripsi Gambar](https://github.com/malikus-shaleh/Tugas-Besar-PBO/blob/main/UML/use%20case.jpg)

Gambar tersebut adalah  USE CASE DIAGRAM yang dimana untuk admin memiliki beberapa akses ke dalam aplikasi, akses yang dimiliki admin adalah melakukan registrasi, memilih servis, memasukkan no plat, jadwal servis, nomor antrian dan mereset antrian, sedangkan untuk pelanggan hanya memiliki beberapa akses saja yaitu memberikan nama dan nomor telepon, memilih menu servis, memasukkan no plat kendaraan dan melihat detail dari nomor antrian yang didapatkan.

2. CLASS DIAGRAM

![Deskripsi Gambar](https://github.com/malikus-shaleh/Tugas-Besar-PBO/blob/main/UML/class%20diagram.jpg)

Gambar tersebut adalah CLASS DIAGRAM yang dimana pelanggan memiliki atribut berupa nama, nomor telepon dan nomor plat kendaraan, untuk admin memiliki atribut id, nama dan nomor telepon, dan untuk servis memiliki atribut id servis, layanan dan mekanik sedangkan antrian yang merupakan turunan dari servis memiliki atribut nomor antrian, id servis dan sisa antrian.

3. CLASS DIAGRAM
   
![Deskripsi Gambar](https://github.com/malikus-shaleh/Tugas-Besar-PBO/blob/main/UML/activity%20diagram.jpg)

Gambar tersebut adalah Activity Diagram dimana langkah awal yaitu masuk ke dalam website, setelah itu pilih layanan servis yang diinginkan dan masukkan data diri serta Nomor Plat, setelah itu sistem mengecek apakah sudah benar atau belum, jika sudah maka akan keluar nomor antrian dan jika salah akan mengulang ke menu utama

4. DEPLOYMENT DIAGRAM

![Deskripsi Gambar](https://github.com/malikus-shaleh/Tugas-Besar-PBO/blob/main/UML/deployment%20diagram.jpg)

Gambar tersebut adalah DEPLOYMENT DIAGRAM yang menjelaskan setiap tampilan atau fungsi yang digunakan pada web, yang dimana ada web browser, web server, database server dan work situation. pada web server menggunakan JSS, HTML dan CSS, untuk web browser menggunakan JSS, HTML dan CSS dan untuk database server menggunakan mysql
