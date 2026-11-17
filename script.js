
/* =====================================
   FLORAVERSE - JAVASCRIPT
===================================== */

const API_KEY = "MASUKKAN_API_KEY_PLANTNET";
const API_URL = "https://my-api.plantnet.org/v2/identify/all";

const $ = id => document.getElementById(id);

const video = $("camera");
const canvas = $("canvas");
const preview = $("preview");
const placeholder = $("placeholder");

const cameraBtn = $("cameraBtn");
const captureBtn = $("captureBtn");
const identifyBtn = $("identifyBtn");
const resetBtn = $("resetBtn");

const imageInput = $("imageInput");
const statusText = $("status");
const resultBox = $("result");
const plantGrid = $("plantGrid");
const searchInput = $("searchInput");
const categoryFilter = $("categoryFilter");
const plantCount = $("plantCount");

let cameraStream = null;
let selectedImage = null;
let previewURL = null;

// =====================================
// 1. DATA TANAMAN
// Foto disimpan di folder assets
// =====================================

const plants = [
  {
    name: "Monstera",
    scientific: "Monstera deliciosa",
    category: "hias",
    description: "Tanaman hias tropis dengan daun besar yang berlubang.",
    image: "assets/monstera.jpg"
  },
  {
    name: "Lidah Mertua",
    scientific: "Dracaena trifasciata",
    category: "hias",
    description: "Tanaman dengan daun tegak dan corak yang khas.",
    image: "assets/lidah-mertua.jpg"
  },
  {
    name: "Mawar",
    scientific: "Rosa",
    category: "hias",
    description: "Bunga dengan beragam warna dan aroma yang khas.",
    image: "assets/mawar.jpg"
  },
  {
    name: "Anggrek",
    scientific: "Orchidaceae",
    category: "hias",
    description: "Tanaman berbunga dengan bentuk kelopak yang indah.",
    image: "assets/anggrek.jpg"
  },
  {
    name: "Lavender",
    scientific: "Lavandula",
    category: "hias",
    description: "Tanaman berbunga ungu dengan aroma khas.",
    image: "assets/lavender.jpg"
  },
  {
    name: "Bunga Matahari",
    scientific: "Helianthus annuus",
    category: "hias",
    description: "Bunga berwarna kuning yang tumbuh menghadap cahaya.",
    image: "assets/matahari.jpg"
  },
  {
    name: "Mangga",
    scientific: "Mangifera indica",
    category: "buah",
    description: "Buah tropis yang memiliki rasa manis dan segar.",
    image: "assets/mangga.jpg"
  },
  {
    name: "Jambu Biji",
    scientific: "Psidium guajava",
    category: "buah",
    description: "Buah tropis yang dikenal kaya vitamin C.",
    image: "assets/jambu.jpg"
  },
  {
    name: "Jeruk",
    scientific: "Citrus × sinensis",
    category: "buah",
    description: "Buah dengan rasa segar dan kandungan vitamin C.",
    image: "assets/jeruk.jpg"
  },
  {
    name: "Stroberi",
    scientific: "Fragaria × ananassa",
    category: "buah",
    description: "Buah berwarna merah dengan rasa manis dan sedikit asam.",
    image: "assets/stroberi.jpg"
  },
  {
    name: "Lidah Buaya",
    scientific: "Aloe vera",
    category: "obat",
    description: "Tanaman sukulen yang banyak digunakan dalam perawatan kulit.",
    image: "assets/lidah-buaya.jpg"
  },
  {
    name: "Jahe",
    scientific: "Zingiber officinale",
    category: "obat",
    description: "Rimpang aromatik yang sering digunakan sebagai rempah.",
    image: "assets/jahe.jpg"
  },
  {
    name: "Kunyit",
    scientific: "Curcuma longa",
    category: "obat",
    description: "Rimpang berwarna kuning yang digunakan sebagai bumbu.",
    image: "assets/kunyit.jpg"
  },
  {
    name: "Daun Sirih",
    scientific: "Piper betle",
    category: "obat",
    description: "Tanaman merambat dengan daun berbentuk hati.",
    image: "assets/sirih.jpg"
  }
];

// =====================================
// 2. KATALOG TANAMAN
// =====================================

function displayPlants() {
  const keyword = searchInput.value.toLowerCase().trim();
  const category = categoryFilter.value;

  const filtered = plants.filter(plant => {
    const matchesName =
      plant.name.toLowerCase().includes(keyword) ||
      plant.scientific.toLowerCase().includes(keyword);

    const matchesCategory =
      category === "all" || plant.category === category;

    return matchesName && matchesCategory;
  });

  plantGrid.innerHTML = "";
  plantCount.textContent = `${filtered.length} PLANTS`;

  if (!filtered.length) {
    const message = document.createElement("p");
    message.textContent = "Tanaman tidak ditemukan.";
    plantGrid.appendChild(message);
    return;
  }

  filtered.forEach(plant => {
    const card = document.createElement("article");
    card.className = "plant-card";

    const image = document.createElement("img");
    image.src = plant.image;
    image.alt = plant.name;
    image.loading = "lazy";

    // Jika foto lokal belum tersedia, tampilkan
    // gambar cadangan, bukan ikon gambar rusak.
    image.onerror = () => {
      image.onerror = null;
      image.src = createFallbackImage(plant.name);
    };

    const info = document.createElement("div");
    info.className = "plant-info";

    const title = document.createElement("h3");
    title.textContent = plant.name;

    const scientific = document.createElement("p");
    scientific.className = "scientific";
    scientific.textContent = plant.scientific;

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = plant.description;

    const categoryLabel = document.createElement("span");
    categoryLabel.className = "category-label";
    categoryLabel.textContent =
      plant.category === "hias" ? "ORNAMENTAL" :
      plant.category === "buah" ? "FRUIT" : "MEDICINAL";

    info.append(title, scientific, description, categoryLabel);
    card.append(image, info);
    plantGrid.appendChild(card);
  });
}

// Gambar cadangan jika file lokal belum ada.
// Ini bukan pengganti foto tanaman asli.
function createFallbackImage(name) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="600" height="400">
      <rect width="100%" height="100%" fill="#dfe8d9"/>
      <text x="50%" y="46%" text-anchor="middle"
        font-size="65" fill="#65816a">❀</text>
      <text x="50%" y="67%" text-anchor="middle"
        font-size="26" fill="#425e49">${name}</text>
    </svg>
  `;

  return "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(svg);
}

searchInput.addEventListener("input", displayPlants);
categoryFilter.addEventListener("change", displayPlants);

displayPlants();

// =====================================
// 3. STATUS
// =====================================

function showStatus(message) {
  statusText.textContent = message;
}

// =====================================
// 4. KAMERA
// =====================================

async function openCamera() {
  try {
    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error("Gunakan localhost atau HTTPS untuk kamera.");
    }

    stopCamera();

    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" }
      },
      audio: false
    });

    video.srcObject = cameraStream;
    video.hidden = false;
    preview.hidden = true;
    placeholder.hidden = true;

    await video.play();

    captureBtn.disabled = false;
    identifyBtn.disabled = true;

    showStatus("Camera ready. Take a photo of your plant.");

  } catch (error) {
    console.error(error);

    showStatus(
      "Camera error: " + error.message
    );
  }
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }

  video.srcObject = null;
  captureBtn.disabled = true;
}

// =====================================
// 5. AMBIL FOTO
// =====================================

function capturePhoto() {
  if (!cameraStream || !video.videoWidth) {
    showStatus("Kamera belum siap.");
    return;
  }

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const context = canvas.getContext("2d");

  context.drawImage(
    video,
    0,
    0,
    canvas.width,
    canvas.height
  );

  canvas.toBlob(blob => {
    if (!blob) {
      showStatus("Foto gagal diambil.");
      return;
    }

    selectedImage = new File(
      [blob],
      "plant-photo.jpg",
      { type: "image/jpeg" }
    );

    showPreview();
    stopCamera();

    showStatus("Photo captured. Ready to identify!");

  }, "image/jpeg", 0.92);
}

// =====================================
// 6. UPLOAD FOTO
// =====================================

imageInput.addEventListener("change", event => {
  const file = event.target.files[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showStatus("Pilih file gambar yang benar.");
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    showStatus("Ukuran foto maksimal 10 MB.");
    return;
  }

  stopCamera();

  selectedImage = file;

  showPreview();

  showStatus("Image uploaded. Ready to identify!");
});

// =====================================
// 7. PREVIEW FOTO
// =====================================

function showPreview() {
  if (previewURL) {
    URL.revokeObjectURL(previewURL);
  }

  previewURL = URL.createObjectURL(selectedImage);

  preview.src = previewURL;
  preview.hidden = false;

  video.hidden = true;
  placeholder.hidden = true;

  identifyBtn.disabled = false;
  resultBox.innerHTML = "";
}

// =====================================
// 8. IDENTIFIKASI PLANTNET
// =====================================

async function identifyPlant() {
  if (!selectedImage) {
    showStatus("Upload atau ambil foto dahulu.");
    return;
  }

  if (!API_KEY ||
      API_KEY === "MASUKKAN_API_KEY_PLANTNET") {
    showStatus("API Key belum dimasukkan.");
    return;
  }

  identifyBtn.disabled = true;
  identifyBtn.textContent = "Identifying...";

  resultBox.innerHTML = "";

  showStatus("Analyzing your plant photo...");

  try {
    const formData = new FormData();

    formData.append("images", selectedImage);
    formData.append("organs", "auto");

    const response = await fetch(
      `${API_URL}?api-key=${encodeURIComponent(API_KEY)}&lang=id`,
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
        data.error ||
        `API Error ${response.status}`
      );
    }

    if (!data.results || data.results.length === 0) {
      throw new Error("Jenis tanaman belum berhasil dikenali.");
    }

    showResults(data.results);

    showStatus("Plant identification completed!");

  } catch (error) {
    console.error("PlantNet error:", error);

    showStatus(
      "Identification failed: " + error.message
    );

  } finally {
    identifyBtn.disabled = !selectedImage;
    identifyBtn.textContent = "Identify Plant ↗";
  }
}

// =====================================
// 9. HASIL IDENTIFIKASI
// =====================================

function showResults(results) {
  resultBox.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = "Your Plant Identification";

  resultBox.appendChild(heading);

  results.slice(0, 5).forEach((item, index) => {
    const species = item.species || {};

    const scientific =
      species.scientificNameWithoutAuthor ||
      species.scientificName ||
      "Unknown species";

    const commonNames = species.commonNames || [];

    const commonName =
      commonNames[0] || "Common name unavailable";

    const family =
      species.family?.scientificName || "Unknown family";

    const score = Math.round((item.score || 0) * 100);

    const card = document.createElement("article");
    card.className = "plant-result-card";

    const rank = document.createElement("h3");
    rank.textContent =
      index === 0 ? "BEST MATCH" : `ALTERNATIVE ${index + 1}`;

    const name = document.createElement("h2");
    name.textContent = commonName;

    const scientificName = document.createElement("p");
    scientificName.textContent = `Scientific name: ${scientific}`;

    const familyName = document.createElement("p");
    familyName.textContent = `Family: ${family}`;

    const confidence = document.createElement("p");
    confidence.textContent = `Similarity score: ${score}%`;

    const warning = document.createElement("small");
    warning.textContent =
      "Similarity score is not a guarantee of correct identification.";

    card.append(
      rank,
      name,
      scientificName,
      familyName,
      confidence,
      warning
    );

    resultBox.appendChild(card);
  });
}

// =====================================
// 10. RESET
// =====================================

function resetScanner() {
  stopCamera();

  selectedImage = null;

  if (previewURL) {
    URL.revokeObjectURL(previewURL);
    previewURL = null;
  }

  preview.removeAttribute("src");
  preview.hidden = true;

  video.hidden = true;
  placeholder.hidden = false;

  resultBox.innerHTML = "";
  imageInput.value = "";

  identifyBtn.disabled = true;

  showStatus("Choose an image to start identification.");
}

// =====================================
// 11. TOMBOL
// =====================================

cameraBtn.addEventListener("click", openCamera);
captureBtn.addEventListener("click", capturePhoto);
identifyBtn.addEventListener("click", identifyPlant);
resetBtn.addEventListener("click", resetScanner);

// =====================================
// 12. BERSIHKAN KAMERA
// =====================================

window.addEventListener("pagehide", stopCamera);
