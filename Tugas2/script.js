// Data produk
const produk = [
  {
    nama: "Laptop Gaming",
    harga: 15000000,
    deskripsi: "Laptop dengan performa tinggi untuk gaming dan editing.",
    gambar: "https://images.unsplash.com/photo-1658262530868-f7460e2f071f?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    kategori: "Elektronik"
  },
  {
    nama: "Smartphone",
    harga: 5000000,
    deskripsi: "HP canggih dengan kamera 108MP dan baterai tahan lama.",
    gambar: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    kategori: "Elektronik"
  },
  {
    nama: "Headset",
    harga: 800000,
    deskripsi: "Headset dengan kualitas suara jernih dan bass mantap.",
    gambar: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    kategori: "Aksesoris"
  },
  {
    nama: "Tas Ransel",
    harga: 300000,
    deskripsi: "Tas ransel stylish cocok untuk kuliah atau kerja.",
    gambar: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    kategori: "Fashion"
  }
];

const produkList = document.getElementById("produkList");
const filterSelect = document.getElementById("filterKategori");

// Fungsi render produk
function renderProduk(filter = "Semua") {
  produkList.innerHTML = ""; // hapus produk lama

  produk
    .filter(item => filter === "Semua" || item.kategori === filter)
    .forEach(item => {
      const card = document.createElement("div");
      card.className = "produk";
      card.innerHTML = `
        <img src="${item.gambar}" alt="${item.nama}">
        <h3>${item.nama}</h3>
        <p>${item.deskripsi}</p>
        <div class="harga">Rp ${item.harga.toLocaleString()}</div>
      `;
      produkList.appendChild(card);
    });
}

// Pertama kali tampil semua produk
renderProduk();

// Jalankan filter ketika dropdown berubah
filterSelect.addEventListener("change", e => {
  renderProduk(e.target.value);
});
