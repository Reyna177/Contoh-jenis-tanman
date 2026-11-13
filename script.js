
const photoLinks = [
  "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=85"
];

const dataTanaman = [
  ["Monstera","daun","Daun lebar dengan lubang alami.","Tanaman tropis dengan daun besar dan lubang alami.","Terang tidak langsung","Saat media mulai kering","Dalam ruangan","Gunakan media gembur dan beri penyangga."],
  ["Lidah Mertua","daun","Daun tegak dengan corak hijau kekuningan.","Tanaman berdaun tegak yang mudah dirawat.","Cahaya terang","Setelah media kering","Dalam atau luar ruangan","Jangan terlalu sering menyiram."],
  ["Aglaonema","daun","Daun dekoratif dengan kombinasi warna.","Tanaman hias daun dengan banyak variasi warna.","Cahaya teduh","Saat media mulai kering","Dalam ruangan","Hindari sinar matahari langsung."],
  ["Sirih Gading","daun","Daun berbentuk hati dan menjuntai.","Tanaman merambat dengan daun berbentuk hati.","Terang tidak langsung","Saat bagian atas media kering","Dalam ruangan","Pangkas batang yang terlalu panjang."],
  ["Calathea","daun","Daun bermotif unik dengan warna hijau.","Tanaman hias daun dengan pola yang menarik.","Cahaya tidak langsung","Jaga media sedikit lembap","Dalam ruangan teduh","Hindari media terlalu kering."],
  ["Philodendron","daun","Tanaman tropis dengan bentuk daun beragam.","Tanaman tropis dengan banyak variasi bentuk daun.","Terang tidak langsung","Saat media mulai kering","Dalam ruangan","Gunakan media gembur."],
  ["Palem Kuning","daun","Daun ramping dengan kesan tropis.","Palem hias dengan daun panjang dan batang kekuningan.","Terang tidak langsung","Saat media mulai kering","Dalam atau luar ruangan","Hindari genangan air."],
  ["Ficus Elastica","daun","Daun lebar, tebal, dan mengilap.","Tanaman karet kebo dengan daun mengilap.","Cahaya terang tidak langsung","Saat media mulai kering","Dalam ruangan","Bersihkan daun secara berkala."],
  ["Lili Paris","daun","Daun panjang bergaris hijau dan putih.","Tanaman berdaun ramping yang tumbuh menjuntai.","Cahaya tidak langsung","Secukupnya","Dalam ruangan","Pangkas daun yang mengering."],
  ["Paku Sarang Burung","daun","Daun panjang bergelombang.","Tanaman paku dengan daun lebar yang tumbuh dari pusat tanaman.","Teduh terang","Jaga media agak lembap","Teras teduh","Hindari matahari langsung."],
  ["Kuping Gajah","daun","Daun lebar berbentuk hati.","Tanaman tropis dengan daun besar dan tulang daun jelas.","Terang tidak langsung","Teratur secukupnya","Teras teduh","Gunakan media kaya bahan organik."],
  ["Pilea","daun","Daun bulat kecil yang menarik.","Tanaman hias berdaun bundar yang cocok untuk meja.","Terang tidak langsung","Saat media mulai kering","Dalam ruangan","Putar pot agar tumbuh merata."],

const dataBunga = [
    nama: "Bunga Mawar",
    kategori: "Bunga",
    deskripsi: "Bunga mawar memiliki kelopak yang indah dan aroma yang khas.",
    image: "https://loremflickr.com/600/400/rose?lock=101"
    nama: "Bunga Melati",
    kategori: "Bunga",
    deskripsi: "Melati merupakan bunga putih kecil yang memiliki aroma harum.",
    image: "https://loremflickr.com/600/400/jasmine?lock=102"
    nama: "Bunga Anggrek",
    kategori: "Bunga",
    deskripsi: "Anggrek memiliki bentuk kelopak yang unik dan beragam warna.",
    image: "https://loremflickr.com/600/400/orchid?lock=103"
    nama: "Bunga Matahari",
    kategori: "Bunga",
    deskripsi: "Bunga matahari memiliki kelopak kuning cerah dan bagian tengah berwarna cokelat.",
    image: "https://loremflickr.com/600/400/sunflower?lock=104"
    nama: "Bunga Tulip",
    kategori: "Bunga",
    deskripsi: "Tulip dikenal dengan bentuk kelopaknya yang menyerupai cangkir.",
    image: "https://loremflickr.com/600/400/tulip?lock=105"
    nama: "Bunga Lavender",
    kategori: "Bunga",
    deskripsi: "Lavender memiliki warna ungu dan aroma yang menenangkan.",
    image: "https://loremflickr.com/600/400/lavender?lock=106"
    nama: "Bunga Kembang Sepatu",
    kategori: "Bunga",
    deskripsi: "Kembang sepatu memiliki kelopak lebar dengan warna yang mencolok.",
    image: "https://loremflickr.com/600/400/hibiscus?lock=107"
    nama: "Bunga Bougenville",
    kategori: "Bunga",
    deskripsi: "Bougenville dikenal dengan warna bunganya yang cerah dan menarik.",
    image: "https://loremflickr.com/600/400/bougainvillea?lock=108"
    nama: "Bunga Teratai",
    kategori: "Bunga",
    deskripsi: "Teratai merupakan tanaman air dengan bunga yang indah.",
    image: "https://loremflickr.com/600/400/lotus-flower?lock=109"
    nama: "Bunga Krisan",
    kategori: "Bunga",
    deskripsi: "Krisan memiliki banyak lapisan kelopak dan pilihan warna.",
    image: "https://loremflickr.com/600/400/chrysanthemum?lock=110"
  ["Echeveria","sukulen","Daun tebal tersusun menyerupai bunga.","Sukulen dengan daun tebal berbentuk roset.","Terang","Setelah media kering","Area terang","Gunakan media khusus sukulen."],
  ["Kaktus","sukulen","Tanaman unik yang menyimpan air.","Kelompok tanaman sukulen dengan bentuk beragam.","Matahari cukup","Setelah media kering","Area terang","Hindari genangan air."],
  ["Haworthia","sukulen","Sukulen kecil dengan bentuk daun unik.","Sukulen kecil dengan susunan daun yang khas.","Terang tidak langsung","Setelah media kering","Dalam ruangan","Gunakan pot berlubang."],
  ["Lidah Buaya","sukulen","Daun tebal memanjang berisi gel.","Tanaman sukulen dengan daun berdaging dan tepi bergerigi.","Matahari pagi","Setelah media kering","Teras","Hindari air menggenang."],
  ["Sedum","sukulen","Daun kecil yang tumbuh rapat.","Kelompok sukulen dengan bentuk daun yang beragam.","Cahaya terang","Setelah media kering","Area terang","Gunakan media berpori."],
  ["Jade Plant","sukulen","Daun bulat tebal dengan batang kokoh.","Sukulen yang dapat tumbuh menyerupai semak kecil.","Cahaya terang","Saat media kering","Dekat jendela","Putar pot sesekali."],
  ["Kalanchoe","sukulen","Sukulen berbunga dengan warna cerah.","Tanaman sukulen dengan bunga kecil berkelompok.","Cahaya terang","Saat media mulai kering","Dalam ruangan","Hindari penyiraman berlebihan."],
  ["Gasteria","sukulen","Daun tebal dengan corak unik.","Sukulen dengan daun tebal dan corak berbintik.","Terang tidak langsung","Setelah media kering","Dalam ruangan","Gunakan media yang cepat mengalirkan air."]
];

const plants = dataTanaman.map((item, index) => ({
  id: "tanaman-" + index,
  name: item[0],
  category: item[1],
  label: item[1] === "daun" ? "TANAMAN DAUN" :
         item[1] === "bunga" ? "TANAMAN BUNGA" : "SUKULEN",
  image: photoLinks[index % photoLinks.length],
  short: item[2],
  description: item[3],
  light: item[4],
  water: item[5],
  place: item[6],
  tip: item[7]
}));

// Gambar cadangan jika foto internet gagal dimuat
function fallbackImage(name) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
    <rect width="800" height="600" fill="#eaf0e8"/>
    <circle cx="400" cy="250" r="170" fill="#dce8d9"/>
    <path d="M400 470 L400 180" stroke="#527b58" stroke-width="18" stroke-linecap="round"/>
    <path d="M400 340 Q210 290 260 150 Q380 160 400 340" fill="#789b70"/>
    <path d="M400 290 Q590 250 540 120 Q420 130 400 290" fill="#91ad83"/>
    <path d="M400 420 Q260 400 280 300 Q390 310 400 420" fill="#5f875f"/>
    <path d="M400 420 Q540 400 520 300 Q410 310 400 420" fill="#a2b995"/>
    <text x="400" y="555" font-size="32" text-anchor="middle"
      font-family="Arial" fill="#315c45">${name}</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function pasangGambarCadangan(root = document) {
  root.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      if (img.dataset.fallbackUsed) return;
      img.dataset.fallbackUsed = "yes";
      img.src = fallbackImage(img.alt || "Tanaman hias");
    });
  });
}

const grid = document.getElementById("plantGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");
let activeCategory = "semua";

function renderPlants() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = plants.filter(plant => {
    const cocokKategori =
      activeCategory === "semua" || plant.category === activeCategory;

    const cocokPencarian =
      plant.name.toLowerCase().includes(query) ||
      plant.short.toLowerCase().includes(query);

    return cocokKategori && cocokPencarian;
  });

  grid.innerHTML = filtered.map(plant => `
    <article class="plant-card">
      <img src="${plant.image}" alt="${plant.name}" loading="lazy">
      <div class="plant-info">
        <span class="plant-category">${plant.label}</span>
        <h3>${plant.name}</h3>
        <p>${plant.short}</p>
        <button class="detail-btn" data-id="${plant.id}">
          Lihat detail <span>↗</span>
        </button>
      </div>
    </article>
  `).join("");

  pasangGambarCadangan(grid);
  resultCount.textContent = filtered.length + " tanaman";
  noResults.hidden = filtered.length !== 0;
}

// Filter kategori
document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  document.querySelectorAll(".filter").forEach(item => {
    item.classList.remove("active");
  });

  button.classList.add("active");
  activeCategory = button.dataset.filter;
  renderPlants();
});

// Pencarian tanaman
searchInput.addEventListener("input", renderPlants);

// Atur ulang pencarian
document.getElementById("resetSearch").addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "semua";

  document.querySelectorAll(".filter").forEach(item => {
    item.classList.toggle("active", item.dataset.filter === "semua");
  });

  renderPlants();
});

// Detail tanaman
const modal = document.getElementById("plantModal");

function openPlant(id) {
  const plant = plants.find(item => item.id === id);
  if (!plant) return;

  const modalImage = document.getElementById("modalImage");
  modalImage.dataset.fallbackUsed = "";
  modalImage.src = plant.image;
  modalImage.alt = plant.name;
  modalImage.onerror = () => {
    if (!modalImage.dataset.fallbackUsed) {
      modalImage.dataset.fallbackUsed = "yes";
      modalImage.src = fallbackImage(plant.name);
    }
  };

  document.getElementById("modalCategory").textContent = plant.label;
  document.getElementById("modalTitle").textContent = plant.name;
  document.getElementById("modalDescription").textContent = plant.description;
  document.getElementById("modalLight").textContent = plant.light;
  document.getElementById("modalWater").textContent = plant.water;
  document.getElementById("modalPlace").textContent = plant.place;
  document.getElementById("modalTip").textContent = plant.tip;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePlant() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-id]");
  if (button) openPlant(button.dataset.id);
});

document.getElementById("modalClose").addEventListener("click", closePlant);

modal.addEventListener("click", event => {
  if (event.target === modal) closePlant();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closePlant();
});

// Menu untuk tampilan HP
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

// Gambar hero dan panduan juga punya gambar cadangan
pasangGambarCadangan(document);
renderPlants();
