// Product data
const products = [
  {
    id: 1,
    name: "Hypex - Internal Elevate",
    image: "https://i.postimg.cc/PJtgt72g/internal-elevate.png",
    features: {
      "🎯 AIMBOT": [
        "Enable / Auto Shoot / Trigger",
        "RCS / No Spread / Visible",
        "FOV / Show / Smooth / Bone"
      ],
      "🧠 ESP": [
        "Box 3D / Skeleton / Head",
        "Name / Weapon / Agent",
        "Health / Armor / Distance",
        "Spikeinfo"
      ],
      "🛠️ MISC": [
        "Third Person (T) / Aspect / FOV"
      ],
      "⚙️ MODS": [
        "Unlock All / Finishers",
        "Buddy Changer (ID) / Config Save & Load"
      ],
      "🎯 ESP ADICIONAL": [
        "Skills Esp",
        "Name Esp",
        "Visible Esp",
        "Skeleton"
      ]
    },
    extras: [
      "Bypass all restrictions (HVCI,TPM,Secure Boot)",
      "VANGUARD Emulator"
    ],
    requirements: [
      "Windows 10 & 11 (All Winver)",
      "AMD & Intel Processors",
      "All Resolutions Supported",
      "Supports HVCI (Core Isolation) On/Off"
    ],
    prices: [
      { period: "Diário", price: "R$ 60,00" },
      { period: "Semanal", price: "R$ 170,00" },
      { period: "Mensal", price: "R$ 260,00" },
      { period: "Lifetime", price: "R$ 400,00" }
    ]
  },
  {
    id: 2,
    name: "Hypex - Aim+ESP",
    image: "https://i.postimg.cc/kGfkDyHB/aim-esp.png",
    features: {
      "🎯 AIM": [
        "Aim",
        "Visible Check",
        "Draw FOV",
        "Recoil Control System",
        "Draw Recoil Crosshair",
        "Recoil Crosshair",
        "No Spread",
        "Aim Radius",
        "Smoothness",
        "Aim-Bone"
      ],
      "🧠 VISUALS": [
        "ESP",
        "Skeleton",
        "Snapline",
        "Health",
        "Head",
        "Distance",
        "Health-Bar",
        "Esp Distance",
        "2D Box",
        "Corner Box",
        "3D Box",
        "Weapon Name",
        "Agent Name",
        "Shield Bar",
        "Radar",
        "Chams",
        "Spike Timer"
      ]
    },
    requirements: [
      "Windows 10 & 11 (All Winver)",
      "AMD & Intel Processors",
      "All Resolutions Supported",
      "Supports HVCI (Core Isolation) On/Off"
    ],
    prices: [
      { period: "Semanal", price: "R$ 85,00" },
      { period: "Mensal", price: "R$ 175,00" },
      { period: "Lifetime", price: "R$ 280,00" }
    ]
  },
  {
    id: 3,
    name: "Hypex - Only Esp 👁️‍🗨️",
    image: "https://i.postimg.cc/Ghf5N9nw/esp.png",
    features: {
      "🎯 ESP": [
        "Skills Esp",
        "Name Esp",
        "Visible Esp",
        "Skeleton",
        "Lines",
        "Box 3D",
        "Life Esp",
        "Stream proof",
        "Save configs",
        "Web Configurável"
      ]
    },
    prices: [
      { period: "Diário", price: "R$ 40,00" },
      { period: "Semanal", price: "R$ 110,00" },
      { period: "Mensal", price: "R$ 165,00" }
    ]
  },
  {
    id: 4,
    name: "Hypex - HWID SPOOFER 🛡",
    image: "https://i.postimg.cc/W4LfNK45/spoofer.png",
    features: {
      "🛡 RECURSOS": [
        "Formatar o computador",
        "Necessidade de atualizar o BIOS",
        "ASUS, Gigabyte, ASrock, MSI, entre outros compatíveis",
        "Necessário pendrive",
        "Bypass TPM",
        "Sem suporte placas japonesas, bios antigas abaixo de 2018, acer nitro e mancer"
      ]
    },
    prices: [
      { period: "Diário", price: "R$ 80,00" },
      { period: "Mensal", price: "R$ 150,00" },
      { period: "Lifetime", price: "R$ 180,00" }
    ]
  },
  {
    id: 5,
    name: "Hypex - BYPASS + HWID Unban",
    image: "https://i.postimg.cc/YS6Dh3GM/produto-5.png",
    features: {
      "🛠️ Tested & Working On": [
        "✅ Valorant",
        "✅ Fortnite",
        "✅ Call of Duty",
        "✅ Apex Legends",
        "✅ Rainbow Six Siege",
        "✅ FiveM",
        "✅ Overwatch",
        "✅ Rust",
        "✅ League of Legends",
        "✅ Dead By Daylight",
        "✅ DayZ",
        "✅ Forza Horizon",
        "✅ Sea of Thieves",
        "✅ War Frame",
        "✅ Pub G"
      ],
      "👑 Services": [
        "HWID Unban Guide for All Games",
        "VGK Bypass - TPM / Secure Boot / HVCI",
        "IP Ban Fix",
        "Customer HWID Reset Tool"
      ],
      "🖥 Motherboards Supported": [
        "✅ Gigabyte Technology",
        "✅ Lenovo Legion",
        "✅ ASROCK",
        "✅ Biostar",
        "✅ Aorus",
        "✅ Colorful",
        "✅ Evga",
        "✅ ASUS",
        "✅ MSI",
        "✅ Alienware",
        "✅ HP",
        "✅ Dell",
        "✅ Acer"
      ]
    },
    prices: [
      { period: "HWID Unban 1 Time", price: "R$ 120,00" },
      { period: "HWID Unban Lifetime", price: "R$ 250,00" }
    ]
  }
];

// Discord universal link
const DISCORD_LINK = "https://discord.gg/AVtMfBzK";

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Create loading screen
  const loadingScreen = createLoadingScreen();
  app.appendChild(loadingScreen);

  // Create main content
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      app.innerHTML = '';
      app.appendChild(createHeader());

      // Check if we should show instructions page
      if (window.location.hash === '#instructions') {
        app.appendChild(createInstructionsPage());
      } else {
        app.appendChild(createHero());
        app.appendChild(createProductsSection());
        //Removed Features Section
        //app.appendChild(createFeaturesSection());
      }

      app.appendChild(createFooter());

      // Initialize animations
      initializeAnimations();
      initializeScrollEffects();
      initializeNavigation();
      // Make products clickable to open modal with image and instructions
      initializeProductModals();
    }, 500);
  }, 1500);
});

function createLoadingScreen() {
  const div = document.createElement('div');
  div.className = 'loading-screen';
  div.innerHTML = '<div class="loader"></div>';
  return div;
}

function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <div class="header-content">
      <div class="logo-container">
        <img src="https://i.postimg.cc/2yrD1y8X/PNG.png" alt="Hypex Logo" class="logo">
        <span class="logo-text">Hypex</span>
      </div>
      <nav class="nav">
        <a href="#home" class="nav-link" data-page="home">Início</a>
        <a href="#products" class="nav-link" data-page="home">Produtos</a>
        <a href="${DISCORD_LINK}" target="_blank" rel="noopener noreferrer" class="discord-btn">Discord</a>
      </nav>
      <button class="mobile-menu-toggle">☰</button>
    </div>
  `;
  return header;
}

function createHero() {
  const section = document.createElement('section');
  section.className = 'hero';
  section.id = 'home';
  section.innerHTML = `
    <div class="hero-bg"></div>
    <div class="hero-content">
      <h1 class="hero-title">Bem-vindo à Hypex Store</h1>
      <p class="hero-subtitle">
        Produtos premium com tecnologia de ponta. 
        Desempenho excepcional, segurança garantida e suporte dedicado.
      </p>
      <a href="#products" class="hero-cta">
        Explorar Produtos
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
    <div class="scroll-indicator">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
      </svg>
    </div>
  `;
  return section;
}

function createProductsSection() {
  const section = document.createElement('section');
  section.className = 'products';
  section.id = 'products';

  const header = document.createElement('div');
  header.className = 'section-header';
  header.innerHTML = `
    <h2 class="section-title">Nossos Produtos</h2>
    <p class="section-subtitle">Escolha a solução perfeita para suas necessidades</p>
  `;

  const grid = document.createElement('div');
  grid.className = 'products-grid';

  products.forEach((product, index) => {
    const card = createProductCard(product);
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('stagger-in');
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Abrir detalhes do produto ${product.name}`);
    card.addEventListener('click', () => openProductModal(product));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProductModal(product);
      }
    });
    grid.appendChild(card);
  });

  section.appendChild(header);
  section.appendChild(grid);

  return section;
}

function createProductCard(product) {
  let featuresHTML = '';
  for (const [category, items] of Object.entries(product.features)) {
    featuresHTML += `
      <div class="feature-category">${category}</div>
      <ul class="feature-list">
        ${items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }

  if (product.extras) {
    featuresHTML += `
      <div class="feature-category">🎁 Acompanha</div>
      <ul class="feature-list">
        ${product.extras.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }

  if (product.requirements) {
    featuresHTML += `
      <div class="feature-category">💻 Requisitos</div>
      <ul class="feature-list">
        ${product.requirements.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }

  const pricesHTML = product.prices.map(price => `
    <div class="price-tag">
      <span class="price-label">${price.period}:</span>
      <span class="price-value">${price.price}</span>
    </div>
  `).join('');

  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <div class="product-content">
      <h3 class="product-title">${product.name}</h3>
      <div class="product-features">
        ${featuresHTML}
      </div>
      <div class="product-prices">
        ${pricesHTML}
      </div>
      <a href="${DISCORD_LINK}" target="_blank" rel="noopener noreferrer" class="product-cta">Comprar Agora</a>
    </div>
  `;
  return card;
}

// Modal container creation and management
function initializeProductModals() {
  if (!document.getElementById('product-modal')) {
    const modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.className = 'product-modal hidden';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modal-title');
    modal.setAttribute('tabindex', '-1');
    modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-content" role="document">
        <button class="modal-close" aria-label="Fechar modal">&times;</button>
        <h2 id="modal-title" class="modal-title"></h2>
        <img src="" alt="" class="modal-image" />
        <div class="modal-instructions"></div>
        <a href="${DISCORD_LINK}" target="_blank" rel="noopener noreferrer" class="modal-buy-btn">Comprar Agora</a>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.modal-close').addEventListener('click', closeProductModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeProductModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeProductModal();
      }
    });
  }
}

function openProductModal(product) {
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  modal.querySelector('.modal-title').textContent = product.name;
  const img = modal.querySelector('.modal-image');
  img.src = product.image;
  img.alt = product.name;

  // Build instructions HTML from features, extras, requirements
  let instructionsHTML = '';
  for (const [category, items] of Object.entries(product.features)) {
    instructionsHTML += `<h3>${category}</h3><ul>`;
    items.forEach(item => {
      instructionsHTML += `<li>${item}</li>`;
    });
    instructionsHTML += `</ul>`;
  }
  if (product.extras) {
    instructionsHTML += `<h3>🎁 Acompanha</h3><ul>`;
    product.extras.forEach(item => {
      instructionsHTML += `<li>${item}</li>`;
    });
    instructionsHTML += `</ul>`;
  }
  if (product.requirements) {
    instructionsHTML += `<h3>💻 Requisitos</h3><ul>`;
    product.requirements.forEach(item => {
      instructionsHTML += `<li>${item}</li>`;
    });
    instructionsHTML += `</ul>`;
  }

  modal.querySelector('.modal-instructions').innerHTML = instructionsHTML;
  modal.classList.remove('hidden');
  modal.focus();
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = ''; // Restore scroll
}


function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer-content">
      <img src="https://i.postimg.cc/2yrD1y8X/PNG.png" alt="Hypex Logo" class="footer-logo">
      <p class="footer-text">
        Hypex Store - Produtos premium para gamers exigentes
      </p>
      <div class="footer-links">
        <a href="#home" class="footer-link">Início</a>
        <a href="#products" class="footer-link">Produtos</a>
        <a href="${DISCORD_LINK}" target="_blank" rel="noopener noreferrer" class="footer-link">Discord</a>
      </div>
      <div class="copyright">
        © 2025 Hypex Store. Todos os direitos reservados.
      </div>
    </div>
  `;
  return footer;
}

function initializeAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.stagger-in').forEach(el => {
    observer.observe(el);
  });
}

function initializeScrollEffects() {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function initializeNavigation() {
  // Handle navigation between pages
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.dataset.page;
      const hash = this.getAttribute('href');

      if (hash === '#instructions') {
        window.location.hash = 'instructions';
        location.reload();
      } else if (page === 'home') {
        window.location.hash = '';
        location.reload();
      }
    });
  });

  // Handle sidebar navigation in instructions page
  if (window.location.hash === '#instructions') {
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}
