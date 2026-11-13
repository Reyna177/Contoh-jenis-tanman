
// ===================================
// DATA TANAMAN HIAS
// ===================================

const dataTanaman = [
  {
    nama: "Monstera",
    kategori: "daun",
    deskripsi: "Tanaman hias dengan daun lebar dan lubang alami yang unik.",
    perawatan: "Letakkan di tempat terang tanpa sinar matahari langsung. Siram saat tanah mulai kering.",
    gambar: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600"
  },
  {
    nama: "Lidah Mertua",
    kategori: "daun",
    deskripsi: "Tanaman dengan daun tegak dan corak hijau kekuningan.",
    perawatan: "Tidak membutuhkan banyak air. Siram ketika tanah benar-benar kering.",
    gambar: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600"
  },
  {
    nama: "Sirih Gading",
    kategori: "daun",
    deskripsi: "Tanaman merambat dengan daun hijau yang cantik.",
    perawatan: "Letakkan di tempat terang dan siram secara teratur.",
    gambar: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600"
  },
  {
    nama: "Peace Lily",
    kategori: "bunga",
    deskripsi: "Tanaman hias dengan bunga putih yang terlihat elegan.",
    perawatan: "Simpan di tempat teduh dan jaga kelembapan tanah.",
    gambar: "https://images.unsplash.com/photo-1509423350716-97f2360af7e4?w=600"
  },
  {
    nama: "Anggrek",
    kategori: "bunga",
    deskripsi: "Bunga hias dengan bentuk dan warna yang menarik.",
    perawatan: "Berikan cahaya tidak langsung dan jangan terlalu sering menyiram.",
    gambar: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600"
  },
  {
    nama: "Mawar",
    kategori: "bunga",
    deskripsi: "Bunga yang dikenal dengan kelopak indah dan warna beragam.",
    perawatan: "Letakkan di tempat yang mendapat sinar matahari cukup.",
    gambar: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600"
  },
  {
    nama: "Kaktus Mini",
    kategori: "sukulen",
    deskripsi: "Tanaman kecil yang cocok dijadikan hiasan meja.",
    perawatan: "Letakkan di tempat terang dan siram secukupnya.",
    gambar: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600"
  },
  {
    nama: "Echeveria",
    kategori: "sukulen",
    deskripsi: "Sukulen dengan susunan daun menyerupai bentuk bunga.",
    perawatan: "Gunakan media tanam yang tidak menahan terlalu banyak air.",
    gambar: "https://images.unsplash.com/photo-1509423350716-97f2360af7e4?w=600"
  },
  {
    nama: "Aloe Vera",
    kategori: "sukulen",
    deskripsi: "Tanaman dengan daun tebal yang menyimpan air.",
    perawatan: "Siram saat media tanam kering dan berikan cahaya yang cukup.",
    gambar: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600"
  },
  {
    nama: "Calathea",
    kategori: "daun",
    deskripsi: "Tanaman dengan corak daun yang indah dan beragam.",
    perawatan: "Jaga kelembapan tanah dan hindari sinar matahari langsung.",
    gambar: "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600"
  },
  {
    nama: "Bougenville",
    kategori: "bunga",
    deskripsi: "Tanaman berbunga dengan warna cerah yang menarik.",
    perawatan: "Letakkan di area yang mendapat sinar matahari cukup.",
    gambar: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600"
  },
  {
    nama: "Haworthia",
    kategori: "sukulen",
    deskripsi: "Tanaman mungil dengan bentuk daun yang khas.",
    perawatan: "Simpan di tempat terang dan siram secukupnya.",
    gambar: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600"
  }
];

// ===================================
// ELEMEN HTML
// ===================================

const plantGrid = document.getElementById("plantGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

const plantModal = document.getElementById("plantModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

let kategoriAktif = "semua";

// ===================================
// FOTO CADANGAN
// ===================================

const fotoCadangan =
  "https://placehold.co/600x400/e8f0e8/49634c?text=Foto+Tanaman";

// ===================================
// MENAMPILKAN TANAMAN
// ===================================

function tampilkanTanaman() {
  if (!plantGrid) return;

  const kataKunci = searchInput
    ? searchInput.value.toLowerCase()
    : "";

  const hasil = dataTanaman.filter((tanaman) => {
    const cocokKategori =
      kategoriAktif === "semua" ||
      tanaman.kategori === kategoriAktif;

    const cocokPencarian =
      tanaman.nama.toLowerCase().includes(kataKunci);

    return cocokKategori && cocokPencarian;
  });

  plantGrid.innerHTML = "";

  if (hasil.length === 0) {
    plantGrid.innerHTML = `
      <p class="empty-message">
        Tanaman tidak ditemukan.
      </p>
    `;
    return;
  }

  hasil.forEach((tanaman) => {
    const card = document.createElement("div");

    card.className = "plant-card";

    card.innerHTML = `
      <img
        src="${tanaman.gambar}"
        alt="${tanaman.nama}"
        class="plant-image"
        loading="lazy"
      >

      <div class="plant-info">
        <span class="plant-category">
          ${tanaman.kategori}
        </span>

        <h3>${tanaman.nama}</h3>

        <p>${tanaman.deskripsi}</p>

        <button class="detail-btn" type="button">
          Lihat Detail
        </button>
      </div>
    `;

    const gambar = card.querySelector("img");

    gambar.onerror = function () {
      this.onerror = null;
      this.src = fotoCadangan;
    };

    card.querySelector(".detail-btn").addEventListener("click", () => {
      tampilkanDetail(tanaman);
    });

    plantGrid.appendChild(card);
  });
}

// ===================================
// DETAIL TANAMAN
// ===================================

function tampilkanDetail(tanaman) {
  if (!plantModal || !modalBody) return;

  modalBody.innerHTML = `
    <img
      src="${tanaman.gambar}"
      alt="${tanaman.nama}"
      class="modal-image"
    >

    <h2>${tanaman.nama}</h2>

    <p>${tanaman.deskripsi}</p>

    <h3>Cara Perawatan</h3>

    <p>${tanaman.perawatan}</p>
  `;

  const gambarModal = modalBody.querySelector("img");

  gambarModal.onerror = function () {
    this.onerror = null;
    this.src = fotoCadangan;
  };

  plantModal.classList.add("active");
}

// ===================================
// MENUTUP MODAL
// ===================================

if (modalClose) {
  modalClose.addEventListener("click", () => {
    plantModal.classList.remove("active");
  });
}

if (plantModal) {
  plantModal.addEventListener("click", (event) => {
    if (event.target === plantModal) {
      plantModal.classList.remove("active");
    }
  });
}

// ===================================
// PENCARIAN TANAMAN
// ===================================

if (searchInput) {
  searchInput.addEventListener("input", tampilkanTanaman);
}

// ===================================
// FILTER KATEGORI
// ===================================

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    kategoriAktif = button.dataset.category;

    tampilkanTanaman();
  });
});

// ===================================
// MENU NAVIGASI HP
// ===================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// ===================================
// TAHUN FOOTER
// ===================================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// ===================================
// JALANKAN WEBSITE
// ===================================

tampilkanTanaman();
