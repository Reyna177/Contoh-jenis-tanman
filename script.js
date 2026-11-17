
const API_KEY = "MASUKKAN_API_KEY_PLANTNET";

const camera = document.getElementById("camera");
const preview = document.getElementById("preview");
const placeholder = document.getElementById("placeholder");
const canvas = document.getElementById("canvas");

const cameraBtn = document.getElementById("cameraBtn");
const captureBtn = document.getElementById("captureBtn");
const imageInput = document.getElementById("imageInput");
const identifyBtn = document.getElementById("identifyBtn");
const resetBtn = document.getElementById("resetBtn");

const statusBox = document.getElementById("status");
const resultBox = document.getElementById("result");

let stream = null;
let selectedImage = null;

function showStatus(message) {
  statusBox.textContent = message;
}

function showPreview(file) {
  if (!file || !file.type.startsWith("image/")) {
    showStatus("Pilih foto dengan format gambar yang benar.");
    return;
  }

  selectedImage = file;
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";
  placeholder.style.display = "none";
  camera.style.display = "none";

  identifyBtn.disabled = false;
  resultBox.innerHTML = "";

  showStatus("Foto berhasil dipilih. Tekan tombol Identifikasi Tanaman.");
}

cameraBtn.addEventListener("click", async () => {
  try {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }

    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" },
      audio: false
    });

    camera.srcObject = stream;
    camera.style.display = "block";
    preview.style.display = "none";
    placeholder.style.display = "none";
    captureBtn.hidden = false;

    showStatus("Kamera siap. Silakan ambil foto tanaman.");
  } catch (error) {
    console.error(error);
    showStatus("Kamera tidak dapat dibuka. Periksa izin kamera.");
  }
});

captureBtn.addEventListener("click", () => {
  if (!camera.videoWidth) {
    showStatus("Kamera belum siap. Coba lagi.");
    return;
  }

  canvas.width = camera.videoWidth;
  canvas.height = camera.videoHeight;

  const context = canvas.getContext("2d");
  context.drawImage(camera, 0, 0);

  canvas.toBlob(blob => {
    if (!blob) {
      showStatus("Foto gagal diambil.");
      return;
    }

    const file = new File([blob], "foto-tanaman.jpg", {
      type: "image/jpeg"
    });

    showPreview(file);

    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      stream = null;
    }

    camera.srcObject = null;
    camera.style.display = "none";
    captureBtn.hidden = true;
  }, "image/jpeg", 0.9);
});

imageInput.addEventListener("change", event => {
  showPreview(event.target.files[0]);
});

identifyBtn.addEventListener("click", async () => {
  if (!selectedImage) {
    showStatus("Silakan ambil atau unggah foto terlebih dahulu.");
    return;
  }

  if (
    !API_KEY ||
    API_KEY === "MASUKKAN_API_KEY_PLANTNET"
  ) {
    showStatus("API Key belum diisi. Masukkan API Key Pl@ntNet di script.js.");
    return;
  }

  identifyBtn.disabled = true;
  showStatus("Sedang mengenali tanaman. Mohon tunggu...");
  resultBox.innerHTML = "";

  try {
    const formData = new FormData();
    formData.append("images", selectedImage);
    formData.append("organs", "auto");

    const response = await fetch(
      `https://my-api.plantnet.org/v2/identify/all?api-key=${encodeURIComponent(API_KEY)}&lang=id`,
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || `Terjadi kesalahan (${response.status})`
      );
    }

    if (!data.results || data.results.length === 0) {
      showStatus("Tanaman belum berhasil dikenali. Coba foto yang lebih jelas.");
      return;
    }

    tampilkanHasil(data.results);
    showStatus("Tanaman berhasil dikenali!");
  } catch (error) {
    console.error(error);
    showStatus("Pemindaian gagal: " + error.message);
  } finally {
    identifyBtn.disabled = false;
  }
});

function tampilkanHasil(results) {
  resultBox.innerHTML = "<h2>Hasil Identifikasi Tanaman</h2>";

  results.slice(0, 3).forEach((item, index) => {
    const species = item.species || {};
    const nama = species.commonNames?.[0] || "Nama umum belum tersedia";
    const ilmiah =
      species.scientificNameWithoutAuthor ||
      species.scientificName ||
      "Belum diketahui";

    const kecocokan = Math.round((item.score || 0) * 100);

    const card = document.createElement("div");
    card.className = "hasil-tanaman";

    const heading = document.createElement("h3");
    heading.textContent = `${index + 1}. ${nama}`;

    const scientific = document.createElement("p");
    scientific.textContent = `Nama ilmiah: ${ilmiah}`;

    const score = document.createElement("p");
    score.textContent = `Tingkat kecocokan: ${kecocokan}%`;

    card.append(heading, scientific, score);
    resultBox.appendChild(card);
  });
}

resetBtn.addEventListener("click", () => {
  selectedImage = null;

  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }

  camera.srcObject = null;
  camera.style.display = "none";
  preview.src = "";
  preview.style.display = "none";
  placeholder.style.display = "block";
  captureBtn.hidden = true;
  identifyBtn.disabled = true;
  imageInput.value = "";
  resultBox.innerHTML = "";

  showStatus("Silakan ambil atau unggah foto tanaman baru.");
});

// =====================================
// KATALOG TANAMAN
// =====================================

const plants = [
  { name: "Monstera", scientific: "Monstera deliciosa", category: "hias", image: "assets/monstera.jpg" },
  { name: "Lidah Mertua", scientific: "Dracaena trifasciata", category: "hias", image: "assets/lidah-mertua.jpg" },
  { name: "Mawar", scientific: "Rosa", category: "hias", image: "assets/mawar.jpg" },
  { name: "Anggrek", scientific: "Orchidaceae", category: "hias", image: "assets/anggrek.jpg" },
  { name: "Lavender", scientific: "Lavandula", category: "hias", image: "assets/lavender.jpg" },
  { name: "Bunga Matahari", scientific: "Helianthus annuus", category: "hias", image: "assets/matahari.jpg" },
  { name: "Mangga", scientific: "Mangifera indica", category: "buah", image: "assets/mangga.jpg" },
  { name: "Jambu Biji", scientific: "Psidium guajava", category: "buah", image: "assets/jambu.jpg" },
  { name: "Jeruk", scientific: "Citrus", category: "buah", image: "assets/jeruk.jpg" },
  { name: "Stroberi", scientific: "Fragaria × ananassa", category: "buah", image: "assets/stroberi.jpg" },
  { name: "Lidah Buaya", scientific: "Aloe vera", category: "obat", image: "assets/lidah-buaya.jpg" },
  { name: "Jahe", scientific: "Zingiber officinale", category: "obat", image: "assets/jahe.jpg" },
  { name: "Kunyit", scientific: "Curcuma longa", category: "obat", image: "assets/kunyit.jpg" },
  { name: "Sirih", scientific: "Piper betle", category: "obat", image: "assets/sirih.jpg" }
];

const plantGrid = document.getElementById("plantGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filter");

function tampilkanKatalog(category = "semua", keyword = "") {
  plantGrid.innerHTML = "";

  const filtered = plants.filter(plant => {
    const cocokKategori = category === "semua" || plant.category === category;
    const cocokNama = plant.name.toLowerCase().includes(keyword.toLowerCase()) ||
      plant.scientific.toLowerCase().includes(keyword.toLowerCase());

    return cocokKategori && cocokNama;
  });

  filtered.forEach(plant => {
    const card = document.createElement("article");
    card.className = "plant-card";

    const img = document.createElement("img");
    img.src = plant.image;
    img.alt = plant.name;
    img.loading = "lazy";
    img.onerror = () => {
      img.src = "https://placehold.co/600x400/e9eee5/506d54?text=Foto+Tanaman";
    };

    const info = document.createElement("div");
    info.className = "plant-info";

    const title = document.createElement("h3");
    title.textContent = plant.name;

    const scientific = document.createElement("p");
    scientific.textContent = plant.scientific;

    info.append(title, scientific);
    card.append(img, info);
    plantGrid.appendChild(card);
  });

  if (filtered.length === 0) {
    plantGrid.textContent = "Tanaman tidak ditemukan.";
  }
}

let kategoriAktif = "semua";

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");

    kategoriAktif = button.dataset.category;
    tampilkanKatalog(kategoriAktif, searchInput.value);
  });
});

searchInput.addEventListener("input", () => {
  tampilkanKatalog(kategoriAktif, searchInput.value);
});

tampilkanKatalog();
