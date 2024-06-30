document
  .getElementById("transaksi-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const hotel = document.getElementById("hotel").value;

    // Proses transaksi, misalnya simpan ke database atau kirim email konfirmasi
    alert(
      `Transaksi berhasil!\nNama: ${nama}\nEmail: ${email}\nHotel: ${hotel}`
    );
  });
