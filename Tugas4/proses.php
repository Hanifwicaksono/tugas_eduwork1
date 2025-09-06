<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars($_POST['nama']);
    $harga = htmlspecialchars($_POST['harga']);
    $deskripsi = htmlspecialchars($_POST['deskripsi']);

    echo "<h2>Produk Berhasil Ditambahkan</h2>";
    echo "<p><strong>Nama Produk:</strong> $nama</p>";
    echo "<p><strong>Harga:</strong> Rp " . number_format($harga, 0, ',', '.') . "</p>";
    echo "<p><strong>Deskripsi:</strong> $deskripsi</p>";
    echo "<p><a href='index.html'>Tambah produk lagi</a></p>";
} else {
    echo "Form belum diisi!";
}
?>
