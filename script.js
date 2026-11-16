
// ========================================
// FLORAVERSE - PLANT ENCYCLOPEDIA
// ========================================

// 1. KONFIGURASI API
// Masukkan API Key Pl@ntNet milikmu di sini.
const API_KEY = "MASUKKAN_API_KEY_KAMU";

// ========================================
// 2. DATABASE TANAMAN
// ========================================

const plants = [
    {
        name: "Monstera",
        scientific: "Monstera deliciosa",
        category: "Hias",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=700",
        family: "Araceae",
        origin: "Amerika Tengah",
        habitat: "Hutan tropis lembap",
        description: "Tanaman hias tropis dengan daun besar dan memiliki lubang atau belahan alami.",
        characteristics: "Daun hijau lebar, batang merambat, dan akar udara.",
        benefits: "Digunakan sebagai tanaman dekoratif dan penghias ruangan.",
        light: "Cahaya terang tidak langsung.",
        water: "Siram ketika lapisan atas tanah mulai mengering.",
        soil: "Tanah gembur dengan drainase baik.",
        temperature: "18–30°C",
        care: "Hindari sinar matahari langsung yang terlalu terik. Berikan ruang untuk pertumbuhan daun."
    },
    {
        name: "Lidah Mertua",
        scientific: "Dracaena trifasciata",
        category: "Hias",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=700",
        family: "Asparagaceae",
        origin: "Afrika Barat",
        habitat: "Daerah tropis dan kering",
        description: "Tanaman hias dengan daun tegak, panjang, dan memiliki corak hijau serta kuning.",
        characteristics: "Daun kaku, runcing, tebal, dan tumbuh tegak.",
        benefits: "Tanaman dekoratif yang relatif mudah dirawat.",
        light: "Cahaya tidak langsung hingga terang.",
        water: "Siram setelah tanah mengering.",
        soil: "Media berpori dan tidak mudah menahan air.",
        temperature: "15–30°C",
        care: "Jangan terlalu sering menyiram karena akarnya rentan membusuk."
    },
    {
        name: "Monstera Adansonii",
        scientific: "Monstera adansonii",
        category: "Hias",
        image: "https://images.unsplash.com/photo-1597055181300-b3b4b9f7f6e9?w=700",
        family: "Araceae",
        origin: "Amerika Tengah dan Selatan",
        habitat: "Hutan tropis",
        description: "Tanaman merambat yang terkenal dengan daun berlubang menyerupai jaring.",
        characteristics: "Daun berbentuk oval dengan lubang alami.",
        benefits: "Tanaman koleksi dan dekorasi ruangan.",
        light: "Cahaya terang tidak langsung.",
        water: "Jaga tanah tetap sedikit lembap.",
        soil: "Media organik dengan drainase baik.",
        temperature: "18–28°C",
        care: "Sediakan penyangga rambatan dan kelembapan yang cukup."
    },
    {
        name: "Sirih Gading",
        scientific: "Epipremnum aureum",
        category: "Hias",
        image: "https://images.unsplash.com/photo-1600411832986-5a4471bca0b5?w=700",
        family: "Araceae",
        origin: "Kepulauan Pasifik",
        habitat: "Hutan tropis",
        description: "Tanaman merambat dengan daun berbentuk hati dan corak hijau kekuningan.",
        characteristics: "Batang panjang, daun berbentuk hati, dan akar udara.",
        benefits: "Tanaman dekorasi gantung dan rambat.",
        light: "Cahaya terang tidak langsung.",
        water: "Siram ketika tanah bagian atas mulai kering.",
        soil: "Tanah gembur.",
        temperature: "18–30°C",
        care: "Pangkas bagian yang terlalu panjang dan hindari genangan air."
    },
    {
        name: "Kaktus",
        scientific: "Cactaceae",
        category: "Hias",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=700",
        family: "Cactaceae",
        origin: "Amerika",
        habitat: "Daerah kering dan gurun",
        description: "Kelompok tanaman sukulen yang mampu menyimpan air dalam batangnya.",
        characteristics: "Batang tebal, duri, dan daun yang mengalami modifikasi.",
        benefits: "Tanaman hias yang memiliki beragam bentuk unik.",
        light: "Cahaya terang dan sebagian jenis membutuhkan matahari langsung.",
        water: "Siram setelah media tanam benar-benar mengering.",
        soil: "Media khusus kaktus dengan drainase sangat baik.",
        temperature: "18–35°C",
        care: "Hindari penyiraman berlebihan dan gunakan pot berlubang."
    },
    {
        name: "Mawar",
        scientific: "Rosa spp.",
        category: "Bunga",
        image: "https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=700",
        family: "Rosaceae",
        origin: "Asia dan wilayah lain di belahan bumi utara",
        habitat: "Kebun dan daerah beriklim sedang",
        description: "Tanaman berbunga dengan kelopak berlapis dan beragam warna.",
        characteristics: "Memiliki batang berduri, daun majemuk, dan bunga beraroma.",
        benefits: "Tanaman hias, bahan parfum, dan bunga potong.",
        light: "Membutuhkan sinar matahari sekitar 6 jam sehari.",
        water: "Siram secara teratur pada bagian tanah.",
        soil: "Tanah subur dan memiliki drainase baik.",
        temperature: "15–28°C",
        care: "Pangkas bunga layu dan lakukan pemupukan sesuai kebutuhan."
    },
    {
        name: "Bunga Matahari",
        scientific: "Helianthus annuus",
        category: "Bunga",
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=700",
        family: "Asteraceae",
        origin: "Amerika Utara",
        habitat: "Lahan terbuka yang terkena matahari",
        description: "Tanaman berbunga besar dengan bagian tengah berwarna cokelat dan kelopak kuning.",
        characteristics: "Batang tegak, daun lebar, dan bunga besar.",
        benefits: "Tanaman hias serta sumber biji bunga matahari.",
        light: "Membutuhkan sinar matahari penuh.",
        water: "Siram teratur terutama ketika masih muda.",
        soil: "Tanah subur dan tidak tergenang.",
        temperature: "18–30°C",
        care: "Sediakan ruang tumbuh dan penyangga jika diperlukan."
    },
    {
        name: "Anggrek Bulan",
        scientific: "Phalaenopsis amabilis",
        category: "Bunga",
        image: "https://images.unsplash.com/photo-1566907225472-514a9b5e7f35?w=700",
        family: "Orchidaceae",
        origin: "Asia Tenggara dan kawasan sekitarnya",
        habitat: "Hutan tropis sebagai tanaman epifit",
        description: "Anggrek dengan bunga putih elegan yang tumbuh pada tangkai panjang.",
        characteristics: "Daun tebal, akar berdaging, dan bunga berkelompok.",
        benefits: "Tanaman hias dan koleksi anggrek.",
        light: "Cahaya terang tidak langsung.",
        water: "Siram ketika media tanam mulai mengering.",
        soil: "Kulit pinus, arang, atau media khusus anggrek.",
        temperature: "20–30°C",
        care: "Jaga sirkulasi udara dan jangan membiarkan akar terendam."
    },
    {
        name: "Lidah Buaya",
        scientific: "Aloe vera",
        category: "Obat",
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d7c9f5?w=700",
        family: "Asphodelaceae",
        origin: "Semenanjung Arab",
        habitat: "Daerah kering dan tropis",
        description: "Tanaman sukulen dengan daun tebal yang menyimpan gel di bagian dalam.",
        characteristics: "Daun berdaging, tersusun melingkar, dan tepi bergerigi.",
        benefits: "Digunakan dalam produk kosmetik dan perawatan kulit.",
        light: "Cahaya terang.",
        water: "Siram setelah tanah mengering.",
        soil: "Media tanam berpasir dengan drainase baik.",
        temperature: "18–30°C",
        care: "Hindari genangan air. Penggunaan gel harus memperhatikan keamanan dan kebersihan."
    },
    {
        name: "Jahe",
        scientific: "Zingiber officinale",
        category: "Obat",
        image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f6?w=700",
        family: "Zingiberaceae",
        origin: "Asia Tenggara",
        habitat: "Daerah tropis lembap",
        description: "Tanaman rimpang yang banyak digunakan sebagai bumbu dan bahan minuman tradisional.",
        characteristics: "Daun panjang, batang semu, dan rimpang beraroma khas.",
        benefits: "Bumbu masakan dan bahan minuman.",
        light: "Cahaya matahari sebagian.",
        water: "Jaga kelembapan tanah.",
        soil: "Tanah gembur dan kaya bahan organik.",
        temperature: "20–30°C",
        care: "Pastikan media tanam tidak tergenang dan berikan ruang untuk pertumbuhan rimpang."
    },
    {
        name: "Mangga",
        scientific: "Mangifera indica",
        category: "Buah",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=700",
        family: "Anacardiaceae",
        origin: "Asia Selatan",
        habitat: "Daerah tropis dan subtropis",
        description: "Pohon buah tropis yang menghasilkan buah dengan rasa manis hingga sedikit asam.",
        characteristics: "Pohon berkayu, daun memanjang, dan buah berdaging.",
        benefits: "Buah konsumsi yang mengandung vitamin dan serat.",
        light: "Matahari penuh.",
        water: "Siram teratur terutama saat pertumbuhan awal.",
        soil: "Tanah subur dengan drainase baik.",
        temperature: "24–35°C",
        care: "Lakukan pemangkasan dan pemupukan sesuai umur pohon."
    },
    {
        name: "Jambu Biji",
        scientific: "Psidium guajava",
        category: "Buah",
        image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=700",
        family: "Myrtaceae",
        origin: "Amerika Tropis",
        habitat: "Daerah tropis",
        description: "Pohon buah yang menghasilkan buah berwarna hijau atau kuning dengan daging putih atau merah muda.",
        characteristics: "Daun berhadapan, batang berkayu, dan buah berbiji banyak.",
        benefits: "Sumber vitamin C dan serat.",
        light: "Matahari penuh.",
        water: "Siram teratur, terutama saat pohon masih muda.",
        soil: "Tanah gembur dan subur.",
        temperature: "23–32°C",
        care: "Pangkas cabang kering dan jaga kebersihan area tumbuh."
    },
    {
        name: "Cabai",
        scientific: "Capsicum annuum",
        category: "Sayuran",
        image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=700",
        family: "Solanaceae",
        origin: "Amerika",
        habitat: "Lahan pertanian tropis",
        description: "Tanaman sayuran yang menghasilkan buah dengan tingkat kepedasan beragam.",
        characteristics: "Batang bercabang, daun hijau, dan buah memanjang atau membulat.",
        benefits: "Bumbu masakan dan sumber vitamin.",
        light: "Matahari penuh.",
        water: "Siram secara teratur tanpa membuat tanah tergenang.",
        soil: "Tanah gembur dan kaya nutrisi.",
        temperature: "20–30°C",
        care: "Berikan pupuk sesuai kebutuhan dan perhatikan hama."
    },
    {
        name: "Tomat",
        scientific: "Solanum lycopersicum",
        category: "Sayuran",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=700",
        family: "Solanaceae",
        origin: "Amerika Selatan",
        habitat: "Lahan pertanian",
        description: "Tanaman sayuran yang menghasilkan buah merah, kuning, atau jingga.",
        characteristics: "Batang lunak, daun majemuk, dan buah berdaging.",
        benefits: "Sumber vitamin dan bahan berbagai masakan.",
        light: "Matahari penuh.",
        water: "Siram secara konsisten pada bagian tanah.",
        soil: "Tanah subur dengan drainase baik.",
        temperature: "18–30°C",
        care: "Gunakan penyangga batang dan perhatikan kondisi daun."
    },
    {
        name: "Bayam",
        scientific: "Amaranthus tricolor",
        category: "Sayuran",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=700",
        family: "Amaranthaceae",
        origin: "Asia",
        habitat: "Lahan pertanian tropis",
        description: "Tanaman sayuran daun yang memiliki daun hijau dan beberapa varietas berwarna merah.",
        characteristics: "Daun lunak, batang tegak, dan pertumbuhan relatif cepat.",
        benefits: "Sumber serat, folat, dan mineral.",
        light: "Matahari cukup.",
        water: "Jaga tanah tetap lembap.",
        soil: "Tanah gembur dan kaya bahan organik.",
        temperature: "20–30°C",
        care: "Panen daun sesuai usia tanaman dan jaga kelembapan tanah."
    },
    {
        name: "Pohon Kelor",
        scientific: "Moringa oleifera",
        category: "Obat",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=700",
        family: "Moringaceae",
        origin: "India",
        habitat: "Daerah tropis dan kering",
        description: "Pohon yang daunnya banyak dimanfaatkan sebagai bahan pangan.",
        characteristics: "Daun majemuk kecil, batang berkayu, dan buah berbentuk polong.",
        benefits: "Daunnya mengandung berbagai nutrisi dan digunakan sebagai bahan makanan.",
        light: "Matahari penuh.",
        water: "Siram secukupnya setelah tanaman tumbuh kuat.",
        soil: "Tanah dengan drainase baik.",
        temperature: "20–35°C",
        care: "Pangkas secara berkala dan hindari genangan air."
    },
    {
        name: "Pandan",
        scientific: "Pandanus amaryllifolius",
        category: "Obat",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=700",
        family: "Pandanaceae",
        origin: "Asia Tenggara",
        habitat: "Daerah tropis lembap",
        description: "Tanaman berdaun panjang yang memiliki aroma khas dan sering digunakan sebagai pewangi makanan.",
        characteristics: "Daun panjang, sempit, dan tumbuh berumpun.",
        benefits: "Pewangi alami makanan dan bahan masakan.",
        light: "Cahaya terang tidak langsung.",
        water: "Jaga tanah tetap lembap.",
        soil: "Tanah subur dan kaya bahan organik.",
        temperature: "22–32°C",
        care: "Siram secara teratur dan lakukan pemisahan anakan jika rumpun terlalu padat."
    },
    {
        name: "Bougenville",
        scientific: "Bougainvillea glabra",
        category: "Bunga",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700",
        family: "Nyctaginaceae",
        origin: "Amerika Selatan",
        habitat: "Daerah tropis",
        description: "Tanaman hias berbunga dengan bagian pelindung bunga berwarna cerah.",
        characteristics: "Batang berkayu, memiliki duri, dan tumbuh merambat.",
        benefits: "Tanaman penghias taman dan pagar.",
        light: "Matahari penuh.",
        water: "Siram secukupnya dan biarkan tanah agak mengering.",
        soil: "Tanah berdrainase baik.",
        temperature: "20–35°C",
        care: "Pangkas cabang secara teratur dan hindari terlalu banyak air."
    }
];

// ========================================
// 3. FUNGSI KEAMANAN HTML
// ========================================

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

// ========================================
// 4. MENAMPILKAN TANAMAN
// ========================================

const plantGrid = document.getElementById("plantGrid");
const searchInput = document.getElementById("searchInput");
const plantCount = document.getElementById("plantCount");

let selectedCategory = "Semua";

function renderPlants() {
    const keyword = searchInput.value.toLowerCase().trim();

    const filteredPlants = plants.filter(plant => {
        const matchCategory =
            selectedCategory === "Semua" ||
            plant.category === selectedCategory;

        const matchSearch =
            plant.name.toLowerCase().includes(keyword) ||
            plant.scientific.toLowerCase().includes(keyword) ||
            plant.family.toLowerCase().includes(keyword);

        return matchCategory && matchSearch;
    });

    plantCount.textContent =
        `${filteredPlants.length} tanaman ditemukan`;

    if (filteredPlants.length === 0) {
        plantGrid.innerHTML = `
            <div class="no-result">
                <h3>Tanaman tidak ditemukan 🌱</h3>
                <p>Coba gunakan nama tanaman yang berbeda.</p>
            </div>
        `;
        return;
    }

    plantGrid.innerHTML = filteredPlants.map((plant, index) => `
        <article class="plant-card">
            <img
                src="${escapeHTML(plant.image)}"
                alt="${escapeHTML(plant.name)}"
                loading="lazy"
                onerror="this.src='https://placehold.co/600x400/eaf3eb/244f3b?text=Plant+Image'"
            >

            <div class="plant-info">
                <span class="plant-tag">
                    ${escapeHTML(plant.category)}
                </span>

                <h3>${escapeHTML(plant.name)}</h3>

                <p class="scientific">
                    ${escapeHTML(plant.scientific)}
                </p>

                <p>${escapeHTML(plant.description)}</p>

                <button
                    class="detail-button"
                    data-plant="${plants.indexOf(plant)}"
                >
                    Lihat Informasi →
                </button>
            </div>
        </article>
    `).join("");
}

// Pencarian
searchInput.addEventListener("input", renderPlants);

// Kategori
document.querySelectorAll(".category-card").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".category-card").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        renderPlants();
    });
});

// ========================================
// 5. DETAIL TANAMAN
// ========================================

const plantModal = document.getElementById("plantModal");
const modalContent = document.getElementById("modalContent");

plantGrid.addEventListener("click", event => {
    const button = event.target.closest(".detail-button");

    if (!button) return;

    const index = Number(button.dataset.plant);
    const plant = plants[index];

    if (!plant) return;

    showPlantDetail(plant);
});

function showPlantDetail(plant) {
    const fields = [
        ["Nama ilmiah", plant.scientific],
        ["Kategori", plant.category],
        ["Keluarga tanaman", plant.family],
        ["Asal tanaman", plant.origin],
        ["Habitat", plant.habitat],
        ["Ciri-ciri", plant.characteristics],
        ["Deskripsi", plant.description],
        ["Manfaat", plant.benefits],
        ["Kebutuhan cahaya", plant.light],
        ["Kebutuhan air", plant.water],
        ["Jenis tanah", plant.soil],
        ["Suhu ideal", plant.temperature],
        ["Cara perawatan", plant.care]
    ];

    modalContent.innerHTML = `
        <img
            src="${escapeHTML(plant.image)}"
            alt="${escapeHTML(plant.name)}"
            onerror="this.src='https://placehold.co/600x400/eaf3eb/244f3b?text=Plant+Image'"
        >

        <span class="plant-tag">
            ${escapeHTML(plant.category)}
        </span>

        <h2>${escapeHTML(plant.name)}</h2>

        <p class="scientific">
            ${escapeHTML(plant.scientific)}
        </p>

        ${fields.map(([title, content]) => `
            <div class="detail-group">
                <h4>${escapeHTML(title)}</h4>
                <p>${escapeHTML(content)}</p>
            </div>
        `).join("")}
    `;

    plantModal.classList.add("open");
    plantModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closePlantDetail() {
    plantModal.classList.remove("open");
    plantModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.getElementById("closeModal").addEventListener(
    "click",
    closePlantDetail
);

plantModal.addEventListener("click", event => {
    if (event.target === plantModal) {
        closePlantDetail();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closePlantDetail();
    }
});

// ========================================
// 6. FITUR KAMERA
// ========================================

const camera = document.getElementById("camera");
const canvas = document.getElementById("canvas");
const previewImage = document.getElementById("previewImage");
const cameraPlaceholder = document.getElementById("cameraPlaceholder");

const startCameraButton = document.getElementById("startCamera");
const capturePhotoButton = document.getElementById("capturePhoto");
const imageInput = document.getElementById("imageInput");
const identifyButton = document.getElementById("identifyButton");
const scanStatus = document.getElementById("scanStatus");

let cameraStream = null;
let selectedImageBlob = null;

function showPreview(blob) {
    selectedImageBlob = blob;

    const url = URL.createObjectURL(blob);

    previewImage.src = url;
    previewImage.classList.add("show");

    camera.classList.remove("show");
    cameraPlaceholder.hidden = true;

    identifyButton.disabled = false;
}

function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }

    camera.srcObject = null;
    capturePhotoButton.hidden = true;
}

// Membuka kamera
startCameraButton.addEventListener("click", async () => {
    try {
        stopCamera();

        scanStatus.textContent = "Sedang membuka kamera...";

        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: { ideal: "environment" }
            },
            audio: false
        });

        camera.srcObject = cameraStream;
        camera.classList.add("show");

        previewImage.classList.remove("show");
        cameraPlaceholder.hidden = true;

        await camera.play();

        capturePhotoButton.hidden = false;
        identifyButton.disabled = true;

        selectedImageBlob = null;

        scanStatus.textContent = "Kamera siap. Arahkan ke tanaman.";

    } catch (error) {
        console.error(error);

        scanStatus.textContent =
            "Kamera tidak dapat dibuka. Izinkan akses kamera atau gunakan upload foto.";
    }
});

// Mengambil foto
capturePhotoButton.addEventListener("click", () => {
    if (!cameraStream || !camera.videoWidth) {
        scanStatus.textContent = "Kamera belum siap.";
        return;
    }

    canvas.width = camera.videoWidth;
    canvas.height = camera.videoHeight;

    const context = canvas.getContext("2d");

    context.drawImage(
        camera,
        0,
        0,
        canvas.width,
        canvas.height
    );

    canvas.toBlob(blob => {
        if (!blob) {
            scanStatus.textContent = "Gagal mengambil foto.";
            return;
        }

        showPreview(blob);
        stopCamera();

        scanStatus.textContent =
            "Foto berhasil diambil. Silakan identifikasi tanaman.";
    }, "image/jpeg", 0.9);
});

// ========================================
// 7. UPLOAD FOTO
// ========================================

imageInput.addEventListener("change", event => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        scanStatus.textContent = "File harus berupa gambar.";
        return;
    }

    if (file.size > 15 * 1024 * 1024) {
        scanStatus.textContent = "Ukuran gambar maksimal 15 MB.";
        return;
    }

    stopCamera();

    const image = new Image();
    const objectURL = URL.createObjectURL(file);

    image.onload = () => {
        const maxSide = 2000;
        const ratio = Math.min(
            1,
            maxSide / Math.max(image.width, image.height)
        );

        canvas.width = Math.round(image.width * ratio);
        canvas.height = Math.round(image.height * ratio);

        const context = canvas.getContext("2d");

        context.drawImage(
            image,
            0,
            0,
            canvas.width,
            canvas.height
        );

        canvas.toBlob(blob => {
            URL.revokeObjectURL(objectURL);

            if (!blob) {
                scanStatus.textContent = "Gagal memproses gambar.";
                return;
            }

            showPreview(blob);

            scanStatus.textContent =
                "Foto berhasil dipilih. Siap untuk diidentifikasi.";
        }, "image/jpeg", 0.9);
    };

    image.onerror = () => {
        URL.revokeObjectURL(objectURL);
        scanStatus.textContent = "Gambar tidak dapat dibaca.";
    };

    image.src = objectURL;
});

// ========================================
// 8. IDENTIFIKASI TANAMAN DENGAN AI
// ========================================

function getCommonNames(species) {
    const names = species.commonNames || [];

    const indonesiaNames = names
        .filter(item => {
            if (typeof item === "string") return true;
            return item.lang === "id";
        })
        .map(item => typeof item === "string" ? item : item.name);

    return indonesiaNames.length
        ? indonesiaNames.join(", ")
        : "Belum tersedia dalam bahasa Indonesia";
}

function getFamily(species) {
    return species.family?.scientificNameWithoutAuthor ||
        species.family?.scientificName ||
        "Belum tersedia";
}

function getScore(score) {
    return `${(Number(score) * 100).toFixed(1)}%`;
}

identifyButton.addEventListener("click", async () => {
    if (!selectedImageBlob) {
        scanStatus.textContent = "Silakan pilih foto tanaman terlebih dahulu.";
        return;
    }

    if (
        !API_KEY ||
        API_KEY === "MASUKKAN_API_KEY_KAMU"
    ) {
        scanStatus.textContent =
            "API Key belum diisi. Masukkan API Key Pl@ntNet di script.js.";
        return;
    }

    identifyButton.disabled = true;
    scanStatus.textContent = "AI sedang menganalisis tanaman...";

    try {
        const formData = new FormData();

        formData.append(
            "images",
            selectedImageBlob,
            "tanaman.jpg"
        );

        formData.append("organs", "auto");

        const endpoint =
            "https://my-api.plantnet.org/v2/identify/all" +
            "?api-key=" + encodeURIComponent(API_KEY) +
            "&lang=id&nb-results=5";

        const response = await fetch(endpoint, {
            method: "POST",
            body: formData
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(
                data.error || data.message ||
                `Permintaan gagal (${response.status}). Periksa API Key atau kuota.`
            );
        }

        if (!data.results || data.results.length === 0) {
            throw new Error(
                "Tanaman belum berhasil dikenali. Coba foto bagian daun atau bunganya dengan lebih jelas."
            );
        }

        showIdentificationResults(data);

        scanStatus.textContent =
            "Identifikasi berhasil. Periksa hasil dan tingkat keyakinannya.";

    } catch (error) {
        console.error(error);

        scanStatus.textContent =
            "Identifikasi gagal: " + error.message;

    } finally {
        identifyButton.disabled = false;
    }
});

// ========================================
// 9. MENAMPILKAN HASIL SCAN
// ========================================

function showIdentificationResults(data) {
    const section = document.getElementById("resultSection");
    const resultContent = document.getElementById("resultContent");

    const results = data.results.slice(0, 5);

    resultContent.innerHTML = results.map((result, index) => {
        const species = result.species || {};

        const scientificName =
            species.scientificNameWithoutAuthor ||
            species.scientificName ||
            "Nama ilmiah belum tersedia";

        const commonName = getCommonNames(species);

        const family = getFamily(species);

        const score = getScore(result.score);

        return `
            <div class="result-card">
                <div>
                    <img
                        src="${escapeHTML(
                            previewImage.src || "https://placehold.co/600x400/eaf3eb/244f3b?text=Plant"
                        )}"
                        alt="Foto hasil pemindaian"
                    >
                </div>

                <div>
                    <span class="plant-tag">
                        ${index === 0 ? "Hasil paling mungkin" : "Kemungkinan lainnya"}
                    </span>

                    <h3>${escapeHTML(scientificName)}</h3>

                    <p>
                        <strong>Nama umum:</strong>
                        ${escapeHTML(commonName)}
                    </p>

                    <p>
                        <strong>Keluarga:</strong>
                        ${escapeHTML(family)}
                    </p>

                    <p>
                        <strong>Nama genus:</strong>
                        ${escapeHTML(
                            species.genus?.scientificNameWithoutAuthor || "Belum tersedia"
                        )}
                    </p>

                    <span class="confidence">
                        Tingkat keyakinan AI: ${score}
                    </span>

                    <div class="result-details">
                        <p>
                            Hasil ini merupakan prediksi berdasarkan
                            kemiripan foto dengan data spesies pada
                            layanan identifikasi.
                        </p>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    section.hidden = false;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ========================================
// 10. INISIALISASI WEBSITE
// ========================================

renderPlants();

console.log("FloraVerse berhasil dijalankan!");
console.log("Jumlah tanaman:", plants.length);
