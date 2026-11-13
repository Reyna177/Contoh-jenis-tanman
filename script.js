
const dataTanaman = [
  // TANAMAN DAUN
  {
    nama: "Monstera",
    kategori: "daun",
    deskripsi: "Tanaman berdaun lebar dengan lubang alami dan tampilan tropis.",
    perawatan: "Letakkan di tempat terang tanpa matahari langsung. Siram saat tanah mulai kering.",
    gambar: "https://loremflickr.com/600/400/monstera,plant?lock=101"
  },
  {
    nama: "Lidah Mertua",
    kategori: "daun",
    deskripsi: "Memiliki daun tegak dengan corak hijau kekuningan.",
    perawatan: "Siram secukupnya dan letakkan di tempat terang.",
    gambar: "https://loremflickr.com/600/400/sansevieria,plant?lock=102"
  },
  {
    nama: "Aglonema",
    kategori: "daun",
    deskripsi: "Tanaman dengan kombinasi warna hijau, merah, dan merah muda.",
    perawatan: "Letakkan di tempat teduh yang terang dan jaga tanah sedikit lembap.",
    gambar: "https://loremflickr.com/600/400/aglaonema,plant?lock=103"
  },
  {
    nama: "Sirih Gading",
    kategori: "daun",
    deskripsi: "Tanaman merambat dengan daun berbentuk hati.",
    perawatan: "Siram saat tanah mulai kering dan berikan cahaya tidak langsung.",
    gambar: "https://loremflickr.com/600/400/golden,pothos?lock=104"
  },
  {
    nama: "Calathea",
    kategori: "daun",
    deskripsi: "Memiliki motif daun unik dengan warna hijau yang menarik.",
    perawatan: "Jaga kelembapan dan hindari tanah terlalu kering.",
    gambar: "https://loremflickr.com/600/400/calathea,plant?lock=105"
  },
  {
    nama: "Philodendron",
    kategori: "daun",
    deskripsi: "Tanaman hias dengan bentuk daun yang beragam.",
    perawatan: "Berikan cahaya tidak langsung dan siram secara teratur.",
    gambar: "https://loremflickr.com/600/400/philodendron,plant?lock=106"
  },
  {
    nama: "Kuping Gajah",
    kategori: "daun",
    deskripsi: "Memiliki daun besar berbentuk hati dengan tulang daun jelas.",
    perawatan: "Sediakan tempat teduh dan media tanam lembap.",
    gambar: "https://loremflickr.com/600/400/anthurium,crystallinum?lock=107"
  },
  {
    nama: "Pilea",
    kategori: "daun",
    deskripsi: "Tanaman dengan daun bulat yang tersusun menarik.",
    perawatan: "Berikan cahaya terang tidak langsung dan siram secukupnya.",
    gambar: "https://loremflickr.com/600/400/pilea,peperomioides?lock=108"
  },
  {
    nama: "Pakis Boston",
    kategori: "daun",
    deskripsi: "Daun kecil memanjang yang tumbuh rimbun dan menjuntai.",
    perawatan: "Jaga kelembapan dan hindari sinar matahari langsung.",
    gambar: "https://loremflickr.com/600/400/boston,fern?lock=109"
  },
  {
    nama: "Karet Kebo",
    kategori: "daun",
    deskripsi: "Memiliki daun tebal dan mengilap berwarna hijau pekat.",
    perawatan: "Letakkan di tempat terang dan siram saat tanah mengering.",
    gambar: "https://loremflickr.com/600/400/rubber,plant?lock=110"
  },
  {
    nama: "Dieffenbachia",
    kategori: "daun",
    deskripsi: "Memiliki corak hijau dan krem pada permukaan daunnya.",
    perawatan: "Berikan cahaya tidak langsung dan siram secukupnya. Getahnya dapat menyebabkan iritasi.",
    gambar: "https://loremflickr.com/600/400/dieffenbachia,plant?lock=111"
  },
  {
    nama: "Puring",
    kategori: "daun",
    deskripsi: "Daunnya memiliki perpaduan warna hijau, kuning, merah, dan jingga.",
    perawatan: "Sukai tempat terang dan siram ketika tanah mulai mengering.",
    gambar: "https://loremflickr.com/600/400/croton,plant?lock=112"
  },

  // TANAMAN BUNGA
  {
    nama: "Mawar",
    kategori: "bunga",
    deskripsi: "Bunga dengan kelopak berlapis dan warna yang beragam.",
    perawatan: "Berikan sinar matahari cukup dan siram pada bagian tanah.",
    gambar: "https://loremflickr.com/600/400/rose,flower?lock=201"
  },
  {
    nama: "Melati",
    kategori: "bunga",
    deskripsi: "Bunga putih kecil yang memiliki aroma harum.",
    perawatan: "Letakkan di tempat yang mendapat sinar matahari dan jaga tanah tetap lembap.",
    gambar: "https://loremflickr.com/600/400/jasmine,flower?lock=202"
  },
  {
    nama: "Anggrek",
    kategori: "bunga",
    deskripsi: "Bunga dengan bentuk kelopak unik dan warna menarik.",
    perawatan: "Gunakan media tanam khusus anggrek dan berikan cahaya tidak langsung.",
    gambar: "https://loremflickr.com/600/400/orchid,flower?lock=203"
  },
  {
    nama: "Bunga Matahari",
    kategori: "bunga",
    deskripsi: "Bunga kuning cerah dengan bagian tengah berwarna gelap.",
    perawatan: "Letakkan di area yang mendapat sinar matahari dan siram teratur.",
    gambar: "https://loremflickr.com/600/400/sunflower,flower?lock=204"
  },
  {
    nama: "Tulip",
    kategori: "bunga",
    deskripsi: "Bunga dengan bentuk kelopak menyerupai cangkir.",
    perawatan: "Gunakan media tanam dengan drainase baik.",
    gambar: "https://loremflickr.com/600/400/tulip,flower?lock=205"
  },
  {
    nama: "Lavender",
    kategori: "bunga",
    deskripsi: "Bunga ungu yang memiliki aroma khas.",
    perawatan: "Sukai sinar matahari dan tanah yang tidak terlalu lembap.",
    gambar: "https://loremflickr.com/600/400/lavender,flower?lock=206"
  },
  {
    nama: "Kembang Sepatu",
    kategori: "bunga",
    deskripsi: "Memiliki kelopak lebar dengan warna yang mencolok.",
    perawatan: "Berikan sinar matahari cukup dan siram saat tanah mulai kering.",
    gambar: "https://loremflickr.com/600/400/hibiscus,flower?lock=207"
  },
  {
    nama: "Bougenville",
    kategori: "bunga",
    deskripsi: "Tanaman hias dengan warna bunga merah muda, ungu, putih, atau jingga.",
    perawatan: "Letakkan di tempat yang terkena sinar matahari.",
    gambar: "https://loremflickr.com/600/400/bougainvillea,flower?lock=208"
  },
  {
    nama: "Teratai",
    kategori: "bunga",
    deskripsi: "Bunga air dengan daun lebar yang mengapung di permukaan air.",
    perawatan: "Tanam di wadah berisi air dengan sinar matahari yang cukup.",
    gambar: "https://loremflickr.com/600/400/water,lily,flower?lock=209"
  },
  {
    nama: "Krisan",
    kategori: "bunga",
    deskripsi: "Bunga dengan banyak lapisan kelopak dan warna beragam.",
    perawatan: "Berikan cahaya matahari pagi dan jaga tanah tetap lembap.",
    gambar: "https://loremflickr.com/600/400/chrysanthemum,flower?lock=210"
  },

  // SUKULEN
  {
    nama: "Echeveria",
    kategori: "sukulen",
    deskripsi: "Sukulen dengan susunan daun menyerupai bunga mawar.",
    perawatan: "Letakkan di tempat terang dan siram ketika media tanam kering.",
    gambar: "https://loremflickr.com/600/400/echeveria,succulent?lock=301"
  },
  {
    nama: "Haworthia",
    kategori: "sukulen",
    deskripsi: "Tanaman kecil dengan daun tebal dan corak putih.",
    perawatan: "Sukai cahaya terang tidak langsung dan penyiraman secukupnya.",
    gambar: "https://loremflickr.com/600/400/haworthia,succulent?lock=302"
  },
  {
    nama: "Lidah Buaya",
    kategori: "sukulen",
    deskripsi: "Memiliki daun tebal memanjang yang menyimpan air.",
    perawatan: "Berikan cahaya cukup dan gunakan tanah dengan drainase baik.",
    gambar: "https://loremflickr.com/600/400/aloe,vera,plant?lock=303"
  },
  {
    nama: "Kaktus Mini",
    kategori: "sukulen",
    deskripsi: "Kaktus berukuran kecil yang cocok menjadi hiasan meja.",
    perawatan: "Letakkan di tempat terang dan hindari penyiraman berlebihan.",
    gambar: "https://loremflickr.com/600/400/mini,cactus?lock=304"
  },
  {
    nama: "Jade Plant",
    kategori: "sukulen",
    deskripsi: "Memiliki daun kecil, tebal, dan mengilap.",
    perawatan: "Sediakan cahaya terang dan siram setelah tanah mengering.",
    gambar: "https://loremflickr.com/600/400/jade,plant?lock=305"
  },
  {
    nama: "Sedum",
    kategori: "sukulen",
    deskripsi: "Tanaman dengan daun kecil yang tumbuh rapat.",
    perawatan: "Sukai sinar matahari dan media tanam yang tidak menahan air.",
    gambar: "https://loremflickr.com/600/400/sedum,succulent?lock=306"
  },
  {
    nama: "Graptopetalum",
    kategori: "sukulen",
    deskripsi: "Memiliki daun tebal tersusun membentuk roset.",
    perawatan: "Letakkan di tempat terang dan siram ketika media tanam kering.",
    gambar: "https://loremflickr.com/600/400/graptopetalum,succulent?lock=307"
  },
  {
    nama: "Kalanchoe",
    kategori: "sukulen",
    deskripsi: "Tanaman berdaun tebal yang beberapa jenisnya menghasilkan bunga kecil.",
    perawatan: "Berikan cahaya terang dan siram secukupnya.",
    gambar: "https://loremflickr.com/600/400/kalanchoe,succulent?lock=308"
  }
];

// ELEMEN HTML
const plantGrid = document.getElementById("plantGrid");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("plantModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

let kategoriAktif = "semua";

// MENAMPILKAN TANAMAN
function tampilkanTanaman() {
  const kataKunci = searchInput.value.toLowerCase().trim();

  const hasil = dataTanaman.filter((tanaman) => {
    const cocokKategori =
      kategoriAktif === "semua" ||
      tanaman.kategori === kategoriAktif;

    const cocokKata =
      tanaman.nama.toLowerCase().includes(kataKunci) ||
      tanaman.deskripsi.toLowerCase().includes(kataKunci);

    return cocokKategori && cocokKata;
  });

  plantGrid.innerHTML = "";

  if (hasil.length === 0) {
    plantGrid.innerHTML = `
      <div class="empty-result">
        <h3>Tanaman tidak ditemukan</h3>
        <p>Coba gunakan kata pencarian lain.</p>
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
        <span class="plant-category">${tanaman.kategori}</span>
        <h3>${tanaman.nama}</h3>
        <p>${tanaman.deskripsi}</p>
        <button class="detail-button" data-index="${index}">
          Lihat Detail
        </button>
      </div>
    `;

    plantGrid.appendChild(kartu);
  });
}

// FILTER KATEGORI
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

// PENCARIAN
searchInput.addEventListener("input", tampilkanTanaman);

// DETAIL TANAMAN
plantGrid.addEventListener("click", (event) => {
  const tombol = event.target.closest(".detail-button");

  if (!tombol) return;

  const tanaman = dataTanaman[Number(tombol.dataset.index)];

  if (!tanaman) return;

  modalBody.innerHTML = `
    <img
      src="${tanaman.gambar}"
      alt="${tanaman.nama}"
      onerror="this.onerror=null;this.src='https://placehold.co/600x400/e8f0e8/49634c?text=Foto+Tanaman';"
    >

    <span class="plant-category">${tanaman.kategori}</span>

    <h2>${tanaman.nama}</h2>

    <p>${tanaman.deskripsi}</p>

    <h3>Panduan Perawatan</h3>

    <p>${tanaman.perawatan}</p>
  `;

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
});

// TUTUP MODAL
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

// MENU HP
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

// TAHUN FOOTER
document.getElementById("year").textContent =
  new Date().getFullYear();

// JALANKAN WEBSITE
tampilkanTanaman();

console.log("RUANG HIJAU berhasil dijalankan!");
console.log("Total tanaman:", dataTanaman.length);
