
const plants = [
  {
    id:"monstera", name:"Monstera", category:"daun", label:"TANAMAN DAUN",
    image:"https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85",
    short:"Daun lebar dengan lubang alami yang menjadi ciri khasnya.",
    description:"Monstera adalah tanaman hias tropis yang dikenal dengan daun lebar dan bentuk lubang atau sobekan alami.",
    light:"Cahaya tidak langsung", water:"Saat media mulai kering",
    place:"Dalam ruangan terang",
    tip:"Letakkan di area dengan cahaya terang tidak langsung. Gunakan media tanam dengan drainase baik."
  },
  {
    id:"sansevieria", name:"Lidah Mertua", category:"daun", label:"TANAMAN DAUN",
    image:"https://images.unsplash.com/photo-1597055181300-a8b4be6c5c7b?auto=format&fit=crop&w=800&q=85",
    short:"Daun tegak, tebal, dan memiliki corak hijau kekuningan.",
    description:"Lidah mertua memiliki daun tegak memanjang dengan corak khas dan relatif mudah dirawat.",
    light:"Terang tidak langsung", water:"Jarang, setelah media kering",
    place:"Dalam atau luar ruangan teduh",
    tip:"Jangan terlalu sering menyiram. Pastikan pot memiliki lubang drainase."
  },
  {
    id:"aglaonema", name:"Aglaonema", category:"daun", label:"TANAMAN DAUN",
    image:"https://images.unsplash.com/photo-1597055181300-a8b4be6c5c7b?auto=format&fit=crop&w=800&q=85",
    short:"Memiliki corak daun menarik dengan kombinasi warna.",
    description:"Aglaonema merupakan tanaman hias daun dengan variasi warna dan pola yang menarik.",
    light:"Cahaya teduh dan terang", water:"Saat permukaan media mengering",
    place:"Dalam ruangan",
    tip:"Hindari sinar matahari langsung yang terlalu terik."
  },
  {
    id:"pothos", name:"Sirih Gading", category:"daun", label:"TANAMAN DAUN",
    image:"https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=85",
    short:"Daun berbentuk hati dan batang yang dapat menjuntai.",
    description:"Sirih gading adalah tanaman merambat dengan daun berbentuk hati.",
    light:"Cahaya tidak langsung", water:"Saat bagian atas media mengering",
    place:"Dalam ruangan terang",
    tip:"Pangkas batang yang terlalu panjang bila diperlukan."
  },
  {
    id:"orchid", name:"Anggrek", category:"bunga", label:"TANAMAN BUNGA",
    image:"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=85",
    short:"Bunga anggun dengan bentuk dan warna yang beragam.",
    description:"Anggrek merupakan tanaman berbunga dengan bentuk bunga khas dan variasi warna yang indah.",
    light:"Terang tidak langsung", water:"Secukupnya, sesuai media",
    place:"Area teduh berventilasi",
    tip:"Gunakan media khusus anggrek dan pastikan akar mendapat sirkulasi udara."
  },
  {
    id:"rose", name:"Mawar", category:"bunga", label:"TANAMAN BUNGA",
    image:"https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=85",
    short:"Kelopak berlapis dengan warna dan aroma yang khas.",
    description:"Mawar dikenal dengan kelopak berlapis dan pilihan warna yang beragam.",
    light:"Matahari beberapa jam sehari", water:"Teratur pada media tanam",
    place:"Luar ruangan cerah",
    tip:"Berikan sinar matahari yang cukup dan pangkas bagian yang sudah kering."
  },
  {
    id:"peace-lily", name:"Lili Perdamaian", category:"bunga", label:"TANAMAN BUNGA",
    image:"https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85",
    short:"Bunga putih sederhana dengan daun hijau mengilap.",
    description:"Lili perdamaian memiliki bunga putih khas dan daun hijau mengilap.",
    light:"Cahaya teduh dan tidak langsung", water:"Saat permukaan media mulai kering",
    place:"Dalam ruangan",
    tip:"Jauhkan dari sinar matahari langsung dan hindari genangan air."
  },
  {
    id:"echeveria", name:"Echeveria", category:"sukulen", label:"SUKULEN",
    image:"https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85",
    short:"Daun tebal tersusun rapat menyerupai bentuk bunga.",
    description:"Echeveria adalah sukulen dengan daun tebal yang tersusun melingkar menyerupai roset.",
    light:"Terang, beberapa jenis tahan matahari", water:"Setelah media benar-benar kering",
    place:"Area terang dan berventilasi",
    tip:"Gunakan media khusus sukulen dan siram ke media tanam."
  },
  {
    id:"cactus", name:"Kaktus", category:"sukulen", label:"SUKULEN",
    image:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=85",
    short:"Tanaman unik yang menyimpan air pada batangnya.",
    description:"Kaktus adalah kelompok tanaman sukulen yang memiliki bentuk dan ukuran beragam.",
    light:"Terang hingga matahari langsung", water:"Jarang, setelah media kering",
    place:"Area terang",
    tip:"Pilih pot berlubang dan media yang cepat mengalirkan air."
  }
];

const grid = document.getElementById("plantGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");
let activeCategory = "semua";

function renderPlants() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = plants.filter(plant => {
    const matchesCategory =
      activeCategory === "semua" || plant.category === activeCategory;
    const matchesQuery =
      plant.name.toLowerCase().includes(query) ||
      plant.short.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
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

  resultCount.textContent = `${filtered.length} tanaman`;
  noResults.hidden = filtered.length !== 0;
}

document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  document.querySelectorAll(".filter").forEach(item =>
    item.classList.remove("active")
  );

  button.classList.add("active");
  activeCategory = button.dataset.filter;
  renderPlants();
});

searchInput.addEventListener("input", renderPlants);

document.getElementById("resetSearch").addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "semua";

  document.querySelectorAll(".filter").forEach(item => {
    item.classList.toggle("active", item.dataset.filter === "semua");
  });

  renderPlants();
});

const modal = document.getElementById("plantModal");

function openPlant(id) {
  const plant = plants.find(item => item.id === id);
  if (!plant) return;

  document.getElementById("modalImage").src = plant.image;
  document.getElementById("modalImage").alt = plant.name;
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

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

renderPlants();
