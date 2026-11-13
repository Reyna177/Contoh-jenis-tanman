
// ==========================================
// RUANG HIJAU - JAVASCRIPT
// ==========================================

// DAFTAR TANAMAN DAN FOTO

const dataTanaman = [

  // ========================================
  // 1. TANAMAN DAUN (12 TANAMAN)
  // ========================================

  {
    nama: "Monstera",
    kategori: "daun",
    deskripsi: "Monstera memiliki daun lebar dengan lubang alami yang memberikan kesan tropis.",
    perawatan: "Letakkan di tempat terang tanpa sinar matahari langsung. Siram saat tanah mulai kering.",
    gambar: "https://loremflickr.com/600/400/monstera?lock=101"
  },

  {
    nama: "Lidah Mertua",
    kategori: "daun",
    deskripsi: "Tanaman dengan daun tegak dan corak hijau kekuningan.",
    perawatan: "Siram secukupnya dan letakkan di tempat dengan cahaya terang.",
    gambar: "https://loremflickr.com/600/400/sansevieria?lock=102"
  },

  {
    nama: "Aglonema",
    kategori: "daun",
    deskripsi: "Aglonema memiliki perpaduan warna hijau, merah, dan merah muda.",
    perawatan: "Letakkan di tempat teduh yang terang dan jaga tanah sedikit lembap.",
    gambar: "https://loremflickr.com/600/400/aglaonema?lock=103"
  },

  {
    nama: "Sirih Gading",
    kategori: "daun",
    deskripsi: "Tanaman merambat dengan daun berbentuk hati.",
    perawatan: "Siram ketika tanah mulai kering dan berikan cahaya tidak langsung.",
    gambar: "https://loremflickr.com/600/400/pothos?lock=104"
  },

  {
    nama: "Calathea",
    kategori: "daun",
    deskripsi: "Calathea memiliki motif daun unik dengan warna hijau yang menarik.",
    perawatan: "Jaga kelembapan tanah dan hindari sinar matahari langsung.",
    gambar: "https://loremflickr.com/600/400/calathea?lock=105"
  },

  {
    nama: "Philodendron",
    kategori: "daun",
    deskripsi: "Tanaman hias dengan bentuk daun beragam dan warna hijau segar.",
    perawatan: "Berikan cahaya tidak langsung dan siram secara teratur.",
    gambar: "https://loremflickr.com/600/400/philodendron?lock=106"
  },

  {
    nama: "Kuping Gajah",
    kategori: "daun",
    deskripsi: "Memiliki daun besar berbentuk hati dengan tulang daun yang jelas.",
    perawatan: "Sediakan tempat teduh dan jaga media tanam tetap lembap.",
    gambar: "https://loremflickr.com/600/400/anthurium?lock=107"
  },

  {
    nama: "Pilea",
    kategori: "daun",
    deskripsi: "Tanaman dengan daun bulat yang tersusun menarik pada batangnya.",
    perawatan: "Berikan cahaya terang tidak langsung dan siram secukupnya.",
    gambar: "https://loremflickr.com/600/400/pilea?lock=108"
  },

  {
    nama: "Pakis Boston",
    kategori: "daun",
    deskripsi: "Tanaman dengan daun kecil memanjang yang tumbuh rimbun.",
    perawatan: "Jaga kelembapan dan hindari paparan matahari langsung.",
    gambar: "https://loremflickr.com/600/400/bostonfern?lock=109"
  },

  {
    nama: "Karet Kebo",
    kategori: "daun",
    deskripsi: "Memiliki daun tebal dan mengilap berwarna hijau pekat.",
    perawatan: "Letakkan di tempat terang dan siram ketika tanah mulai kering.",
    gambar: "https://loremflickr.com/600/400/rubberplant?lock=110"
  },

  {
    nama: "Dieffenbachia",
    kategori: "daun",
    deskripsi: "Tanaman dengan corak hijau dan krem pada permukaan daunnya.",
    perawatan: "Berikan cahaya tidak langsung. Getahnya dapat menyebabkan iritasi.",
    gambar: "https://loremflickr.com/600/400/dieffenbachia?lock=111"
  },

  {
    nama: "Puring",
    kategori: "daun",
    deskripsi: "Puring memiliki daun berwarna hijau, kuning, merah, dan jingga.",
    perawatan: "Sukai tempat terang dan siram ketika tanah mulai mengering.",
    gambar: "https://loremflickr.com/600/400/crotonplant?lock=112"
  },


  // ========================================
  // 2. TANAMAN BUNGA (10 TANAMAN)
  // ========================================

  {
    nama: "Mawar",
    kategori: "bunga",
    deskripsi: "Bunga mawar memiliki kelopak berlapis dengan warna yang beragam.",
    perawatan: "Berikan sinar matahari cukup dan siram pada bagian tanah.",
    gambar: "https://loremflickr.com/600/400/roseflower?lock=201"
  },

  {
    nama: "Melati",
    kategori: "bunga",
    deskripsi: "Bunga putih kecil yang memiliki aroma harum.",
    perawatan: "Letakkan di tempat yang mendapat sinar matahari cukup.",
    gambar: "https://loremflickr.com/600/400/jasmineflower?lock=202"
  },

  {
    nama: "Anggrek",
    kategori: "bunga",
    deskripsi: "Anggrek memiliki bentuk kelopak unik dan warna yang menarik.",
    perawatan: "Gunakan media tanam khusus anggrek dan berikan cahaya tidak langsung.",
    gambar: "https://loremflickr.com/600/400/orchidflower?lock=203"
  },

  {
    nama: "Bunga Matahari",
    kategori: "bunga",
    deskripsi: "Bunga berwarna kuning cerah dengan bagian tengah berwarna gelap.",
    perawatan: "Letakkan di area yang mendapat sinar matahari dan siram teratur.",
    gambar: "https://loremflickr.com/600/400/sunflower?lock=204"
  },

  {
    nama: "Tulip",
    kategori: "bunga",
    deskripsi: "Tulip memiliki bentuk kelopak menyerupai cangkir.",
    perawatan: "Gunakan media tanam dengan drainase baik.",
    gambar: "https://loremflickr.com/600/400/tulipflower?lock=205"
  },

  {
    nama: "Lavender",
    kategori: "bunga",
    deskripsi: "Bunga berwarna ungu dengan aroma khas.",
    perawatan: "Sukai sinar matahari dan tanah yang tidak terlalu lembap.",
    gambar: "https://loremflickr.com/600/400/lavenderflower?lock=206"
  },

  {
    nama: "Kembang Sepatu",
    kategori: "bunga",
    deskripsi: "Memiliki kelopak lebar dengan warna yang mencolok.",
    perawatan: "Berikan sinar matahari cukup dan siram saat tanah mulai kering.",
    gambar: "https://loremflickr.com/600/400/hibiscusflower?lock=207"
  },

  {
    nama: "Bougenville",
    kategori: "bunga",
    deskripsi: "Tanaman hias dengan warna merah muda, ungu, putih, dan jingga.",
    perawatan: "Letakkan di tempat yang terkena sinar matahari.",
    gambar: "https://loremflickr.com/600/400/bougainvillea?lock=208"
  },

  {
    nama: "Teratai",
    kategori: "bunga",
    deskripsi: "Bunga air dengan daun lebar yang mengapung di permukaan air.",
    perawatan: "Tanam di wadah berisi air dengan sinar matahari cukup.",
    gambar: "https://loremflickr.com/600/400/waterlily?lock=209"
  },

  {
    nama: "Krisan",
    kategori: "bunga",
    deskripsi: "Bunga dengan banyak lapisan kelopak dan pilihan warna beragam.",
    perawatan: "Berikan cahaya matahari pagi dan jaga tanah tetap lembap.",
    gambar: "https://loremflickr.com/600/400/chrysanthemum?lock=210"
  },


  // ========================================
  // 3. TANAMAN SUKULEN (8 TANAMAN)
  // ========================================

  {
    nama: "Echeveria",
    kategori: "sukulen",
    deskripsi: "Sukulen dengan susunan daun menyerupai bentuk bunga mawar.",
    perawatan: "Letakkan di tempat terang dan siram ketika media tanam kering.",
    gambar: "https://loremflickr.com/600/400/echeveria?lock=301"
  },

  {
    nama: "Haworthia",
    kategori: "sukulen",
    deskripsi: "Tanaman kecil dengan daun tebal dan corak putih yang khas.",
    perawatan: "Sukai cahaya terang tidak langsung dan penyiraman secukupnya.",
    gambar: "https://loremflickr.com/600/400/haworthia?lock=302"
  },

  {
    nama: "Lidah Buaya",
    kategori: "sukulen",
    deskripsi: "Memiliki daun tebal memanjang yang menyimpan air.",
    perawatan: "Berikan cahaya cukup dan gunakan tanah dengan drainase baik.",
    gambar: "https://loremflickr.com/600/400/aloevera?lock=303"
  },

  {
    nama: "Kaktus Mini",
    kategori: "sukulen",
    deskripsi: "Kaktus berukuran kecil yang cocok menjadi hiasan meja.",
    perawatan: "Letakkan di tempat terang dan hindari penyiraman berlebihan.",
    gambar: "https://loremflickr.com/600/400/minicactus?lock=304"
  },

  {
    nama: "Jade Plant",
    kategori: "sukulen",
    deskripsi: "Memiliki daun kecil, tebal, dan mengilap.",
    perawatan: "Sediakan cahaya terang dan siram setelah tanah mengering.",
    gambar: "https://loremflickr.com/600/400/jadeplant?lock=305"
  },

  {
    nama: "Sedum",
    kategori: "sukulen",
    deskripsi: "Tanaman sukulen dengan daun kecil yang tumbuh rapat.",
    perawatan: "Sukai sinar matahari dan media tanam yang tidak menahan air.",
    gambar: "https://loremflickr.com/600/400/sedum?lock=306"
  },

  {
    nama: "Graptopetalum",
    kategori: "sukulen",
    deskripsi: "Memiliki daun tebal yang tersusun membentuk roset.",
    perawatan: "Letakkan di tempat terang dan siram ketika media tanam kering.",
    gambar: "https://loremflickr.com/600/400/graptopetalum?lock=307"
  },

  {
    nama: "Kalanchoe",
    kategori: "sukulen",
    deskripsi: "Tanaman dengan daun tebal dan bunga kecil yang menarik.",
    perawatan: "Berikan cahaya terang dan siram secukupnya.",
    gambar: "https://loremflickr.com/600/400/kalanchoe?lock=308"
  }

];


// ==========================================
// MENGHUBUNGKAN JAVASCRIPT DENGAN HTML
// ==========================================

const plantGrid = document.getElementById("plantGrid");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("plantModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

let kategoriAktif = "semua";


// ==========================================
// MENAMPILKAN KARTU TANAMAN
// ==========================================

function tampilkanTanaman() {

  const kataKunci = searchInput.value.toLowerCase().trim();

  const hasil = dataTanaman.filter((tanaman) => {

    const cocokKategori =
      kategoriAktif === "semua" ||
      tanaman.kategori === kategoriAktif;

    const cocokPencarian =
      tanaman.nama.toLowerCase().includes(kataKunci) ||
      tanaman.deskripsi.toLowerCase().includes(kataKunci);

    return cocokKategori && cocokPencarian;

  });

  plantGrid.innerHTML = "";

  if (hasil.length === 0) {
    plantGrid.innerHTML = `
      <div class="empty-result">
        <h3>Tanaman Tidak Ditemukan</h3>
        <p>Silakan coba kata pencarian lainnya.</p>
      </div>
    `;
    return;
  }

  hasil.forEach((tanaman) => {

    const index = dataTanaman.indexOf(tanaman);

    const kartu = document.createElement("article");

    kartu.className = "plant-card";

    kartu.innerHTML = `
      <img
        src="${tanaman.gambar}"
        alt="${tanaman.nama}"
        loading="lazy"
        onerror="this.onerror=null;this.src='https://placehold.co/600x400/e8f0e8/49634c?text=Foto+Tanaman';"
      >

      <div class="plant-info">

        <span class="plant-category">
          ${tanaman.kategori}
        </span>

        <h3>${tanaman.nama}</h3>

        <p>${tanaman.deskripsi}</p>

        <button
          class="detail-button"
          data-index="${index}"
        >
          Lihat Detail
        </button>

      </div>
    `;

    plantGrid.appendChild(kartu);

  });

}


// ==========================================
// FITUR PENCARIAN
// ==========================================

searchInput.addEventListener("input", tampilkanTanaman);


// ==========================================
// FILTER KATEGORI
// ==========================================

document.querySelectorAll(".filter-btn").forEach((tombol) => {

  tombol.addEventListener("click", () => {

    kategoriAktif = tombol.dataset.category;

    document.querySelectorAll(".filter-btn").forEach((item) => {
      item.classList.remove("active");
    });

    tombol.classList.add("active");

    tampilkanTanaman();

  });

});


// ==========================================
// DETAIL TANAMAN
// ==========================================

plantGrid.addEventListener("click", (event) => {

  const tombol = event.target.closest(".detail-button");

  if (!tombol) return;

  const index = Number(tombol.dataset.index);
  const tanaman = dataTanaman[index];

  if (!tanaman) return;

  modalBody.innerHTML = `

    <img
      src="${tanaman.gambar}"
      alt="${tanaman.nama}"
      onerror="this.onerror=null;this.src='https://placehold.co/600x400/e8f0e8/49634c?text=Foto+Tanaman';"
    >

    <span class="plant-category">
      ${tanaman.kategori}
    </span>

    <h2>${tanaman.nama}</h2>

    <p>${tanaman.deskripsi}</p>

    <h3>Panduan Perawatan</h3>

    <p>${tanaman.perawatan}</p>

  `;

  modal.classList.add("show");

  document.body.style.overflow = "hidden";

});


// ==========================================
// MENUTUP DETAIL TANAMAN
// ==========================================

function tutupModal() {

  modal.classList.remove("show");

  document.body.style.overflow = "";

}

modalClose.addEventListener("click", tutupModal);

modal.addEventListener("click", (event) => {

  if (event.target === modal) {
    tutupModal();
  }

});

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    tutupModal();
  }

});


// ==========================================
// MENU NAVIGASI HP
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");

});

navMenu.querySelectorAll("a").forEach((link) => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

  });

});


// ==========================================
// TAHUN OTOMATIS FOOTER
// ==========================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ==========================================
// MENJALANKAN WEBSITE
// ==========================================

tampilkanTanaman();

console.log("RUANG HIJAU berhasil dijalankan!");
console.log("Total tanaman:", dataTanaman.length);
