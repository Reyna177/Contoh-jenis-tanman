
/* ======================================
   FLORAVERSE - MAIN JAVASCRIPT
   ====================================== */

// MASUKKAN API KEY PLANTNET DI SINI
const API_KEY = "MASUKKAN_API_KEY_KAMU";

const API_URL = "https://my-api.plantnet.org/v2/identify/all";

// ELEMEN HTML
const video = document.getElementById("camera");
const canvas = document.getElementById("canvas");
const preview = document.getElementById("preview");
const placeholder = document.getElementById("cameraPlaceholder");

const startCameraBtn = document.getElementById("startCamera");
const captureBtn = document.getElementById("captureBtn");
const scanBtn = document.getElementById("scanBtn");
const resetBtn = document.getElementById("resetBtn");

const imageInput = document.getElementById("imageInput");
const statusText = document.getElementById("status");
const resultBox = document.getElementById("result");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const plantGrid = document.getElementById("plantGrid");

let cameraStream = null;
let selectedImage = null;
let previewURL = null;

// ======================================
// 1. DATA KATALOG TANAMAN
// ======================================

const plants = [
    {
        name: "Monstera",
        scientific: "Monstera deliciosa",
        category: "hias",
        description: "Tanaman hias dengan daun besar dan berlubang.",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600"
    },
    {
        name: "Lidah Mertua",
        scientific: "Dracaena trifasciata",
        category: "hias",
        description: "Tanaman hias dengan daun tegak dan panjang.",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=600"
    },
    {
        name: "Mawar",
        scientific: "Rosa",
        category: "hias",
        description: "Bunga hias yang memiliki beragam warna.",
        image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600"
    },
    {
        name: "Anggrek",
        scientific: "Orchidaceae",
        category: "hias",
        description: "Tanaman berbunga dengan bentuk yang unik.",
        image: "https://images.unsplash.com/photo-1566907225472-514f4e3c2b2e?w=600"
    },
    {
        name: "Mangga",
        scientific: "Mangifera indica",
        category: "buah",
        description: "Pohon buah tropis dengan rasa manis.",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600"
    },
    {
        name: "Jambu Biji",
        scientific: "Psidium guajava",
        category: "buah",
        description: "Buah tropis yang kaya akan vitamin C.",
        image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=600"
    },
    {
        name: "Lidah Buaya",
        scientific: "Aloe vera",
        category: "obat",
        description: "Tanaman yang dikenal dalam perawatan kulit.",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600"
    },
    {
        name: "Jahe",
        scientific: "Zingiber officinale",
        category: "obat",
        description: "Rimpang yang sering digunakan sebagai rempah.",
        image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f5?w=600"
    }
];

// ======================================
// 2. MENAMPILKAN KATALOG
// ======================================

function displayPlants() {
    const keyword = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;

    plantGrid.innerHTML = "";

    const filteredPlants = plants.filter(plant => {
        const matchName =
            plant.name.toLowerCase().includes(keyword) ||
            plant.scientific.toLowerCase().includes(keyword);

        const matchCategory =
            category === "all" || plant.category === category;

        return matchName && matchCategory;
    });

    if (filteredPlants.length === 0) {
        plantGrid.textContent = "Tanaman tidak ditemukan.";
        return;
    }

    filteredPlants.forEach(plant => {
        const card = document.createElement("article");
        card.className = "plant-card";

        const img = document.createElement("img");
        img.src = plant.image;
        img.alt = plant.name;
        img.loading = "lazy";
        img.onerror = () => {
            img.alt = "Gambar tidak tersedia";
        };

        const info = document.createElement("div");
        info.className = "plant-info";

        const title = document.createElement("h3");
        title.textContent = plant.name;

        const scientific = document.createElement("p");
        scientific.textContent = plant.scientific;

        const description = document.createElement("p");
        description.textContent = plant.description;

        const label = document.createElement("span");
        label.className = "category-label";
        label.textContent = "Tanaman " + plant.category;

        info.append(title, scientific, description, label);
        card.append(img, info);
        plantGrid.appendChild(card);
    });
}

searchInput.addEventListener("input", displayPlants);
categoryFilter.addEventListener("change", displayPlants);

displayPlants();

// ======================================
// 3. STATUS WEBSITE
// ======================================

function showStatus(message) {
    statusText.textContent = message;
}

// ======================================
// 4. MEMBUKA KAMERA
// ======================================

async function startCamera() {
    try {
        if (!navigator.mediaDevices ||
            !navigator.mediaDevices.getUserMedia) {
            throw new Error(
                "Kamera membutuhkan HTTPS atau localhost."
            );
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

        showStatus("Kamera berhasil dibuka. Arahkan ke tanaman.");

    } catch (error) {
        console.error("Camera error:", error);

        showStatus("Kamera gagal dibuka: " + error.message);
    }
}

// ======================================
// 5. MENGHENTIKAN KAMERA
// ======================================

function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }

    video.srcObject = null;
    captureBtn.disabled = true;
}

// ======================================
// 6. MENGAMBIL FOTO
// ======================================

function capturePhoto() {
    if (!cameraStream || video.videoWidth === 0) {
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
            showStatus("Gagal mengambil foto.");
            return;
        }

        selectedImage = new File(
            [blob],
            "tanaman.jpg",
            { type: "image/jpeg" }
        );

        showSelectedImage();
        stopCamera();

        showStatus("Foto berhasil diambil. Silakan scan.");
    }, "image/jpeg", 0.9);
}

// ======================================
// 7. UPLOAD FOTO
// ======================================

imageInput.addEventListener("change", event => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        showStatus("Pilih file gambar yang benar.");
        return;
    }

    if (file.size > 10 * 1024 * 1024) {
        showStatus("Ukuran gambar maksimal 10 MB.");
        return;
    }

    selectedImage = file;

    stopCamera();
    showSelectedImage();

    showStatus("Foto berhasil dipilih. Siap diidentifikasi.");
});

// ======================================
// 8. MENAMPILKAN PREVIEW
// ======================================

function showSelectedImage() {
    if (previewURL) {
        URL.revokeObjectURL(previewURL);
    }

    previewURL = URL.createObjectURL(selectedImage);

    preview.src = previewURL;
    preview.hidden = false;

    video.hidden = true;
    placeholder.hidden = true;

    scanBtn.disabled = false;
}

// ======================================
// 9. IDENTIFIKASI TANAMAN
// ======================================

async function scanPlant() {

    if (!selectedImage) {
        showStatus("Ambil foto tanaman terlebih dahulu.");
        return;
    }

    if (!API_KEY ||
        API_KEY === "MASUKKAN_API_KEY_KAMU") {
        showStatus("API Key Pl@ntNet belum dimasukkan.");
        return;
    }

    scanBtn.disabled = true;
    scanBtn.textContent = "Sedang Scan...";

    resultBox.innerHTML = "";
    showStatus("Sedang mengidentifikasi tanaman...");

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
                `Kesalahan server (${response.status})`
            );
        }

        if (!data.results || data.results.length === 0) {
            throw new Error(
                "Tidak ada jenis tanaman yang berhasil dikenali."
            );
        }

        displayResults(data.results);

        showStatus("Identifikasi selesai!");

    } catch (error) {
        console.error("Identification error:", error);

        showStatus(error.message);
    } finally {
        scanBtn.disabled = false;
        scanBtn.textContent = "Scan Tanaman";
    }
}

// ======================================
// 10. MENAMPILKAN HASIL IDENTIFIKASI
// ======================================

function displayResults(results) {

    resultBox.innerHTML = "";

    const heading = document.createElement("h2");
    heading.textContent = "Hasil Identifikasi";

    resultBox.appendChild(heading);

    results.slice(0, 5).forEach((item, index) => {

        const species = item.species || {};

        const scientificName =
            species.scientificNameWithoutAuthor ||
            species.scientificName ||
            "Tidak tersedia";

        const commonNames = species.commonNames || [];

        const localName =
            commonNames[0] || "Nama lokal belum tersedia";

        const family =
            species.family?.scientificName ||
            "Tidak diketahui";

        const score = Math.round((item.score || 0) * 100);

        const card = document.createElement("div");
        card.className = "plant-result-card";

        const rank = document.createElement("h3");
        rank.textContent =
            index === 0
                ? "Kemungkinan paling tinggi"
                : `Kemungkinan lainnya ${index + 1}`;

        const name = document.createElement("h2");
        name.textContent = localName;

        const scientific = document.createElement("p");
        scientific.textContent =
            "Nama ilmiah: " + scientificName;

        const familyText = document.createElement("p");
        familyText.textContent = "Famili: " + family;

        const confidence = document.createElement("p");
        confidence.textContent =
            "Skor kecocokan: " + score + "%";

        const note = document.createElement("small");
        note.textContent =
            "Skor bukan jaminan bahwa identifikasi pasti benar.";

        card.append(
            rank,
            name,
            scientific,
            familyText,
            confidence,
            note
        );

        resultBox.appendChild(card);
    });
}

// ======================================
// 11. MENGULANGI SCAN
// ======================================

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

    scanBtn.disabled = true;
    showStatus("Silakan buka kamera atau upload foto.");

}

// ======================================
// 12. MENGHUBUNGKAN TOMBOL
// ======================================

startCameraBtn.addEventListener("click", startCamera);
captureBtn.addEventListener("click", capturePhoto);
scanBtn.addEventListener("click", scanPlant);
resetBtn.addEventListener("click", resetScanner);

// ======================================
// 13. SAAT WEBSITE DITUTUP
// ======================================

window.addEventListener("pagehide", stopCamera);
