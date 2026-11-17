
// ==========================================
// FLORAVERSE - SCRIPT.JS
// Katalog 50 Tanaman + Scan Tanaman
// ==========================================

// 1. API KEY PLANTNET
const API_KEY = "MASUKKAN_API_KEY_KAMU";

// 2. DATA 50 TANAMAN
const daftarTanaman = [
  // TANAMAN HIAS (20)
  { nama: "Monstera", latin: "Monstera deliciosa", kategori: "hias", cari: "Monstera deliciosa", deskripsi: "Tanaman hias berdaun lebar dengan bentuk daun berlubang yang unik." },
  { nama: "Lidah Mertua", latin: "Dracaena trifasciata", kategori: "hias", cari: "Dracaena trifasciata", deskripsi: "Tanaman hias dengan daun tegak dan corak hijau kekuningan." },
  { nama: "Mawar", latin: "Rosa", kategori: "hias", cari: "Rosa flower", deskripsi: "Bunga yang dikenal dengan kelopak indah dan beragam warna." },
  { nama: "Anggrek", latin: "Orchidaceae", kategori: "hias", cari: "Orchid flower", deskripsi: "Tanaman berbunga dengan bentuk dan warna yang beragam." },
  { nama: "Lavender", latin: "Lavandula", kategori: "hias", cari: "Lavandula", deskripsi: "Tanaman berbunga ungu dengan aroma khas." },
  { nama: "Bunga Matahari", latin: "Helianthus annuus", kategori: "hias", cari: "Helianthus annuus", deskripsi: "Bunga berukuran besar dengan warna kuning cerah." },
  { nama: "Kaktus", latin: "Cactaceae", kategori: "hias", cari: "Cactus plant", deskripsi: "Tanaman yang memiliki kemampuan menyimpan air pada batangnya." },
  { nama: "Aglaonema", latin: "Aglaonema commutatum", kategori: "hias", cari: "Aglaonema commutatum", deskripsi: "Tanaman hias dengan daun bercorak dan warna menarik." },
  { nama: "Bougenville", latin: "Bougainvillea", kategori: "hias", cari: "Bougainvillea", deskripsi: "Tanaman hias dengan bunga semu berwarna cerah." },
  { nama: "Melati", latin: "Jasminum sambac", kategori: "hias", cari: "Jasminum sambac", deskripsi: "Bunga putih yang memiliki aroma harum." },
  { nama: "Kuping Gajah", latin: "Anthurium crystallinum", kategori: "hias", cari: "Anthurium crystallinum", deskripsi: "Tanaman dengan daun lebar berbentuk hati." },
  { nama: "Keladi", latin: "Caladium", kategori: "hias", cari: "Caladium plant", deskripsi: "Tanaman hias dengan daun berwarna dan bermotif unik." },
  { nama: "Sirih Gading", latin: "Epipremnum aureum", kategori: "hias", cari: "Epipremnum aureum", deskripsi: "Tanaman merambat dengan daun hijau bercorak kuning." },
  { nama: "Peace Lily", latin: "Spathiphyllum", kategori: "hias", cari: "Spathiphyllum", deskripsi: "Tanaman hias dengan daun hijau dan bunga putih." },
  { nama: "Puring", latin: "Codiaeum variegatum", kategori: "hias", cari: "Codiaeum variegatum", deskripsi: "Tanaman dengan daun berwarna-warni." },
  { nama: "Palem Kuning", latin: "Dypsis lutescens", kategori: "hias", cari: "Dypsis lutescens", deskripsi: "Tanaman palem dengan batang ramping dan daun menjuntai." },
  { nama: "Pakis", latin: "Nephrolepis exaltata", kategori: "hias", cari: "Nephrolepis exaltata", deskripsi: "Tanaman berdaun kecil yang tumbuh rimbun." },
  { nama: "Pucuk Merah", latin: "Syzygium myrtifolium", kategori: "hias", cari: "Syzygium myrtifolium", deskripsi: "Tanaman dengan pucuk daun muda berwarna kemerahan." },
  { nama: "Bunga Kertas", latin: "Zinnia elegans", kategori: "hias", cari: "Zinnia elegans", deskripsi: "Tanaman berbunga dengan warna yang beragam." },
  { nama: "Aglonema Merah", latin: "Aglaonema", kategori: "hias", cari: "Red Aglaonema plant", deskripsi: "Tanaman hias dengan perpaduan warna hijau dan merah." },

  // TANAMAN BUAH (15)
  { nama: "Mangga", latin: "Mangifera indica", kategori: "buah", cari: "Mangifera indica", deskripsi: "Pohon buah tropis yang menghasilkan buah manis dan segar." },
  { nama: "Jambu Biji", latin: "Psidium guajava", kategori: "buah", cari: "Psidium guajava", deskripsi: "Buah tropis dengan daging putih atau merah muda." },
  { nama: "Jeruk", latin: "Citrus sinensis", kategori: "buah", cari: "Citrus sinensis", deskripsi: "Buah dengan rasa manis hingga asam dan kaya vitamin C." },
  { nama: "Stroberi", latin: "Fragaria × ananassa", kategori: "buah", cari: "Fragaria ananassa", deskripsi: "Buah kecil berwarna merah dengan rasa manis dan sedikit asam." },
  { nama: "Pisang", latin: "Musa", kategori: "buah", cari: "Musa banana plant", deskripsi: "Buah tropis yang memiliki banyak jenis dan mudah ditemukan." },
  { nama: "Pepaya", latin: "Carica papaya", kategori: "buah", cari: "Carica papaya", deskripsi: "Buah tropis dengan daging berwarna oranye." },
  { nama: "Kelapa", latin: "Cocos nucifera", kategori: "buah", cari: "Cocos nucifera", deskripsi: "Tanaman tropis yang hampir seluruh bagiannya bermanfaat." },
  { nama: "Rambutan", latin: "Nephelium lappaceum", kategori: "buah", cari: "Nephelium lappaceum", deskripsi: "Buah tropis dengan kulit berambut dan daging buah manis." },
  { nama: "Durian", latin: "Durio zibethinus", kategori: "buah", cari: "Durio zibethinus", deskripsi: "Buah tropis dengan kulit berduri dan aroma khas." },
  { nama: "Alpukat", latin: "Persea americana", kategori: "buah", cari: "Persea americana", deskripsi: "Buah dengan tekstur lembut dan rasa gurih." },
  { nama: "Nanas", latin: "Ananas comosus", kategori: "buah", cari: "Ananas comosus", deskripsi: "Buah tropis dengan rasa manis dan asam." },
  { nama: "Anggur", latin: "Vitis vinifera", kategori: "buah", cari: "Vitis vinifera", deskripsi: "Buah kecil yang tumbuh dalam bentuk tandan." },
  { nama: "Jambu Air", latin: "Syzygium aqueum", kategori: "buah", cari: "Syzygium aqueum", deskripsi: "Buah dengan kandungan air tinggi dan rasa menyegarkan." },
  { nama: "Sirsak", latin: "Annona muricata", kategori: "buah", cari: "Annona muricata", deskripsi: "Buah tropis dengan daging putih dan rasa asam manis." },
  { nama: "Belimbing", latin: "Averrhoa carambola", kategori: "buah", cari: "Averrhoa carambola", deskripsi: "Buah berbentuk bintang saat dipotong melintang." },

  // TANAMAN OBAT (15)
  { nama: "Lidah Buaya", latin: "Aloe vera", kategori: "obat", cari: "Aloe vera", deskripsi: "Tanaman dengan daun tebal yang memiliki gel di bagian dalam." },
  { nama: "Jahe", latin: "Zingiber officinale", kategori: "obat", cari: "Zingiber officinale", deskripsi: "Rimpang yang sering digunakan sebagai bumbu dan minuman tradisional." },
  { nama: "Kunyit", latin: "Curcuma longa", kategori: "obat", cari: "Curcuma longa", deskripsi: "Rimpang berwarna kuning yang sering digunakan sebagai bumbu." },
  { nama: "Sirih", latin: "Piper betle", kategori: "obat", cari: "Piper betle", deskripsi: "Tanaman merambat dengan daun berbentuk hati." },
  { nama: "Temulawak", latin: "Curcuma xanthorrhiza", kategori: "obat", cari: "Curcuma xanthorrhiza", deskripsi: "Tanaman rimpang yang banyak dikenal dalam jamu tradisional." },
  { nama: "Kumis Kucing", latin: "Orthosiphon aristatus", kategori: "obat", cari: "Orthosiphon aristatus", deskripsi: "Tanaman berbunga dengan benang sari panjang." },
  { nama: "Kencur", latin: "Kaempferia galanga", kategori: "obat", cari: "Kaempferia galanga", deskripsi: "Tanaman rimpang yang sering digunakan dalam bumbu dan jamu." },
  { nama: "Serai", latin: "Cymbopogon citratus", kategori: "obat", cari: "Cymbopogon citratus", deskripsi: "Tanaman beraroma segar yang sering digunakan sebagai bumbu." },
  { nama: "Daun Mint", latin: "Mentha", kategori: "obat", cari: "Mentha plant", deskripsi: "Tanaman beraroma segar yang sering digunakan dalam minuman." },
  { nama: "Kemangi", latin: "Ocimum basilicum", kategori: "obat", cari: "Ocimum basilicum", deskripsi: "Tanaman beraroma khas yang sering digunakan sebagai lalapan." },
  { nama: "Sambiloto", latin: "Andrographis paniculata", kategori: "obat", cari: "Andrographis paniculata", deskripsi: "Tanaman herbal dengan rasa sangat pahit." },
  { nama: "Daun Dewa", latin: "Gynura pseudochina", kategori: "obat", cari: "Gynura pseudochina", deskripsi: "Tanaman herbal yang dikenal dalam penggunaan tradisional." },
  { nama: "Pegagan", latin: "Centella asiatica", kategori: "obat", cari: "Centella asiatica", deskripsi: "Tanaman kecil dengan daun berbentuk bundar." },
  { nama: "Rosella", latin: "Hibiscus sabdariffa", kategori: "obat", cari: "Hibiscus sabdariffa", deskripsi: "Tanaman dengan kelopak bunga merah yang sering diolah menjadi minuman." },
  { nama: "Salam", latin: "Syzygium polyanthum", kategori: "obat", cari: "Syzygium polyanthum", deskripsi: "Pohon dengan daun aromatik yang sering digunakan sebagai bumbu." }
];

// ==========================================
// 3. MENGAMBIL ELEMEN HTML
// ==========================================

const kamera = document.getElementById("camera");
const preview = document.getElementById("preview");
const placeholder = document.getElementById("placeholder");
const canvas = document.getElementById("canvas");

const cameraBtn = document.getElementById("cameraBtn");
const captureBtn = document.getElementById("captureBtn");
const imageInput = document.getElementById("imageInput");
const identifyBtn = document.getElementById("identifyBtn");
const resetBtn = document.getElementById("resetBtn");

const statusText = document.getElementById("status");
const result = document.getElementById("result");
const searchInput = document.getElementById("searchInput");
const plantGrid = document.getElementById("plantGrid");

let streamKamera = null;
let fotoTerpilih = null;

// ==========================================
// 4. GAMBAR PENGGANTI
// ==========================================

function gambarPengganti(nama) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="350" viewBox="0 0 500 350">
      <rect width="500" height="350" fill="#e7eee5"/>
      <circle cx="250" cy="145" r="90" fill="#d2e1d0"/>
      <path d="M250 220 C245 150 190 95 145 105 C145 165 190 215 250 220Z" fill="#648b68"/>
      <path d="M250 220 C255 150 310 95 355 105 C355 165 310 215 250 220Z" fill="#83a987"/>
      <path d="M250 220 Q250 150 250 85" stroke="#456b4b" stroke-width="8" fill="none" stroke-linecap="round"/>
      <text x="250" y="300" text-anchor="middle" font-size="22" fill="#456b4b" font-family="Arial">${nama}</text>
    </svg>
  `;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// ==========================================
// 5. MENCARI FOTO TANAMAN
// ==========================================

async function cariFotoTanaman(tanaman) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent("filetype:bitmap " + tanaman.cari)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url&iiurlwidth=500&format=json&origin=*`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Foto tidak ditemukan");

    const data = await response.json();
    const halaman = Object.values(data.query?.pages || {});

    const foto = halaman.find(item => item.imageinfo?.[0]?.thumburl);
    return foto?.imageinfo?.[0]?.thumburl || null;
  } catch (error) {
    console.warn("Gagal mengambil foto:", tanaman.nama);
    return null;
  }
}

// ==========================================
// 6. MENAMPILKAN KATALOG TANAMAN
// ==========================================

function buatKartuTanaman(tanaman) {
  const kartu = document.createElement("div");
  kartu.className = "plant-card";

  const gambar = document.createElement("img");
  gambar.src = gambarPengganti(tanaman.nama);
  gambar.alt = tanaman.nama;
  gambar.loading = "lazy";

  const isi = document.createElement("div");
  isi.className = "plant-info";

  const nama = document.createElement("h3");
  nama.textContent = tanaman.nama;

  const latin = document.createElement("p");
  latin.className = "plant-latin";
  latin.textContent = tanaman.latin;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = tanaman.deskripsi;

  const kategori = document.createElement("span");
  kategori.className = "plant-category";
  kategori.textContent = tanaman.kategori === "hias"
    ? "Tanaman Hias"
    : tanaman.kategori === "buah"
      ? "Tanaman Buah"
      : "Tanaman Obat";

  isi.append(nama, latin, deskripsi, kategori);
  kartu.append(gambar, isi);

  // Gambar asli akan menggantikan gambar pengganti jika berhasil ditemukan.
  cariFotoTanaman(tanaman).then(url => {
    if (!url) return;

    const fotoAsli = new Image();
    fotoAsli.onload = () => {
      gambar.src = url;
    };
    fotoAsli.onerror = () => {
      gambar.src = gambarPengganti(tanaman.nama);
    };
    fotoAsli.src = url;
  });

  return kartu;
}

// ==========================================
// 7. MENAMPILKAN SEMUA TANAMAN
// ==========================================

function tampilkanTanaman(data = daftarTanaman) {
  if (!plantGrid) return;

  plantGrid.innerHTML = "";

  if (data.length === 0) {
    plantGrid.innerHTML = "<p>Tanaman tidak ditemukan.</p>";
    return;
  }

  data.forEach(tanaman => {
    plantGrid.appendChild(buatKartuTanaman(tanaman));
  });
}

// ==========================================
// 8. FITUR PENCARIAN
// ==========================================

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const kata = this.value.toLowerCase().trim();

    const hasil = daftarTanaman.filter(tanaman =>
      tanaman.nama.toLowerCase().includes(kata) ||
      tanaman.latin.toLowerCase().includes(kata) ||
      tanaman.kategori.toLowerCase().includes(kata)
    );

    tampilkanTanaman(hasil);
  });
}

// ==========================================
// 9. FITUR FILTER KATEGORI
// ==========================================

document.querySelectorAll(".filter").forEach(tombol => {
  tombol.addEventListener("click", function () {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
    });

    this.classList.add("active");

    const kategori = this.dataset.category;

    if (kategori === "semua") {
      tampilkanTanaman();
    } else {
      tampilkanTanaman(
        daftarTanaman.filter(tanaman => tanaman.kategori === kategori)
      );
    }

    if (searchInput) searchInput.value = "";
  });
});

// ==========================================
// 10. MEMBUKA KAMERA
// ==========================================

if (cameraBtn) {
  cameraBtn.addEventListener("click", async function () {
    try {
      streamKamera = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false
      });

      kamera.srcObject = streamKamera;
      kamera.style.display = "block";
      preview.style.display = "none";
      placeholder.style.display = "none";
      captureBtn.disabled = false;

      statusText.textContent = "Kamera berhasil dibuka.";
    } catch (error) {
      statusText.textContent =
        "Kamera tidak dapat dibuka. Periksa izin kamera pada browser.";
    }
  });
}

// ==========================================
// 11. MENGAMBIL FOTO DARI KAMERA
// ==========================================

if (captureBtn) {
  captureBtn.addEventListener("click", function () {
    if (!streamKamera) return;

    canvas.width = kamera.videoWidth;
    canvas.height = kamera.videoHeight;

    const context = canvas.getContext("2d");
    context.drawImage(kamera, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
      if (!blob) return;

      fotoTerpilih = blob;
      preview.src = URL.createObjectURL(blob);
      preview.style.display = "block";
      kamera.style.display = "none";

      statusText.textContent = "Foto berhasil diambil. Silakan pindai tanaman.";
    }, "image/jpeg");

    matikanKamera();
  });
}

// ==========================================
// 12. UNGGAH FOTO TANAMAN
// ==========================================

if (imageInput) {
  imageInput.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      statusText.textContent = "Silakan pilih file gambar.";
      return;
    }

    fotoTerpilih = file;

    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
    kamera.style.display = "none";
    placeholder.style.display = "none";

    matikanKamera();

    statusText.textContent = "Foto berhasil dipilih. Silakan pindai tanaman.";
  });
}

// ==========================================
// 13. MEMATIKAN KAMERA
// ==========================================

function matikanKamera() {
  if (streamKamera) {
    streamKamera.getTracks().forEach(track => track.stop());
    streamKamera = null;
  }

  if (kamera) kamera.srcObject = null;
}

// ==========================================
// 14. IDENTIFIKASI TANAMAN PLANTNET
// ==========================================

if (identifyBtn) {
  identifyBtn.addEventListener("click", async function () {
    if (!fotoTerpilih) {
      statusText.textContent = "Ambil atau pilih foto tanaman terlebih dahulu.";
      return;
    }

    if (!API_KEY || API_KEY === "MASUKKAN_API_KEY_KAMU") {
      statusText.textContent = "Masukkan API Key PlantNet terlebih dahulu.";
      return;
    }

    identifyBtn.disabled = true;
    statusText.textContent = "Sedang mengidentifikasi tanaman...";

    try {
      const formData = new FormData();
      formData.append("images", fotoTerpilih, "tanaman.jpg");
      formData.append("organs", "auto");

      const url = `https://my-api.plantnet.org/v2/identify/all?api-key=${encodeURIComponent(API_KEY)}&lang=id`;

      const response = await fetch(url, {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Identifikasi gagal. Periksa API Key atau koneksi internet.");
      }

      const data = await response.json();
      tampilkanHasilScan(data);

    } catch (error) {
      statusText.textContent = error.message;
    } finally {
      identifyBtn.disabled = false;
    }
  });
}

// ==========================================
// 15. MENAMPILKAN HASIL IDENTIFIKASI
// ==========================================

function tampilkanHasilScan(data) {
  const hasil = data.results || [];

  if (hasil.length === 0) {
    statusText.textContent = "Tanaman belum berhasil dikenali. Coba foto yang lebih jelas.";
    return;
  }

  const terbaik = hasil[0];
  const namaLatin = terbaik.species?.scientificNameWithoutAuthor || "Nama belum tersedia";
  const namaUmum = terbaik.species?.commonNames?.[0] || "Nama umum belum tersedia";
  const tingkat = Math.round((terbaik.score || 0) * 100);

  result.style.display = "block";
  result.innerHTML = "";

  const judul = document.createElement("h2");
  judul.textContent = "Hasil Identifikasi";

  const nama = document.createElement("h3");
  nama.textContent = namaUmum;

  const latin = document.createElement("p");
  latin.textContent = namaLatin;

  const akurasi = document.createElement("p");
  akurasi.textContent = `Tingkat kecocokan: ${tingkat}%`;

  const catatan = document.createElement("p");
  catatan.textContent = "Hasil ini merupakan perkiraan identifikasi otomatis. Periksa kembali ciri tanaman untuk memastikan jenisnya.";

  result.append(judul, nama, latin, akurasi, catatan);

  statusText.textContent = "Identifikasi selesai.";
}

// ==========================================
// 16. RESET FOTO DAN HASIL
// ==========================================

if (resetBtn) {
  resetBtn.addEventListener("click", function () {
    fotoTerpilih = null;

    matikanKamera();

    preview.src = "";
    preview.style.display = "none";

    kamera.style.display = "none";
    placeholder.style.display = "block";

    result.style.display = "none";
    result.innerHTML = "";

    captureBtn.disabled = true;
    imageInput.value = "";

    statusText.textContent = "Silakan ambil foto atau unggah gambar tanaman.";
  });
}

// ==========================================
// 17. MENJALANKAN WEBSITE
// ==========================================

tampilkanTanaman();

console.log("FLORAVERSE berhasil dijalankan.");
console.log("Jumlah tanaman:", daftarTanaman.length);
