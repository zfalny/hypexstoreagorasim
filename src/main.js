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

      // *** ALTERAÇÃO APLICADA AQUI ***
      // Verifica qual página de instruções deve ser carregada
      if (window.location.hash === '#instructions') {
        app.appendChild(createInstructionsPage()); // Guia Spoofer Original
      } else if (window.location.hash === '#instructions2') {
        app.appendChild(createInstructionsPage2()); // Novo Guia Spoofer+Bypass
      } else {
        app.appendChild(createHero());
        app.appendChild(createProductsSection());
      }

      app.appendChild(createFooter());

      // Initialize functionalities
      initializeAnimations();
      initializeScrollEffects();
      initializeNavigation();
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
      <a href="#home" class="logo-link" data-page="home" style="text-decoration: none;">
        <div class="logo-container">
          <img src="https://i.postimg.cc/2yrD1y8X/PNG.png" alt="Hypex Logo" class="logo" style="width: 80px; height: 80px;">
        </div>
      </a>
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

// INSTRUÇÕES PÁGINA 1 (#instructions)
function createInstructionsPage() {
  const page = document.createElement('div');
  page.className = 'instructions-page';
  page.innerHTML = `
    <div class="instructions-container">
      <aside class="instructions-sidebar">
        <h3>Guia do Spoofer</h3>
        <ul>
          <li><a href="#clean-install" class="sidebar-link active">1. Preparação</a></li>
          <li><a href="#bios-flash" class="sidebar-link">2. Flash da BIOS</a></li>
          <li><a href="#bios-config" class="sidebar-link">3. Configuração da BIOS</a></li>
          <li><a href="#spoofer-process" class="sidebar-link">4. Processo do Spoofer</a></li>
          <li><a href="#final-steps" class="sidebar-link">5. Passos Finais</a></li>
        </ul>
        <div class="community-feedback">
          <h4>Ainda com dúvidas?</h4>
          <p>Nossa comunidade no Discord está pronta para ajudar!</p>
          <a href="${DISCORD_LINK}" target="_blank" rel="noopener noreferrer">Entrar no Discord</a>
        </div>
      </aside>
      <main class="instructions-content">
        <h1 class="page-title">Guia de Instalação do Spoofer 📁</h1>
        <p class="powered-by">Powered by Hypex Support</p>

        <section id="clean-install" class="instruction-section">
          <h2><span class="section-icon">🧹</span> 1. Preparação do Sistema</h2>
          <p>Para garantir que o spoofer funcione corretamente, é crucial começar com um sistema limpo para remover quaisquer traços de banimentos anteriores.</p>
          <div class="instruction-box">
            <div class="instruction-icon">💿</div>
            <div class="instruction-details">
              <h3>Reinstalação Limpa do Windows</h3>
              <p>Você deve realizar uma reinstalação limpa do Windows. Recomendamos usar uma ISO oficial da Microsoft. <strong>Após a instalação, NÃO LOGUE EM NENHUMA CONTA MICROSOFT.</strong></p>
            </div>
          </div>
          <div class="instruction-box">
            <div class="instruction-icon">🛡️</div>
            <div class="instruction-details">
              <h3>Desativar Antivírus</h3>
              <p>Desative todos os antivírus. Para o Windows Defender, use o <a href="https://www.sordum.org/files/downloads.php?st-defender-control" target="_blank" rel="noopener noreferrer">Control Defender</a> para desativação permanente. (Senha do arquivo: <strong>sordum</strong>)</p>
            </div>
          </div>
          <div class="instruction-box">
            <div class="instruction-icon">🔄</div>
            <div class="instruction-details">
              <h3>Desabilitar Windows Update</h3>
              <p>Use o <a href="https://www.sordum.org/files/downloads.php?st-windows-update-blocker" target="_blank" rel="noopener noreferrer">WUB (Windows Update Blocker)</a> para evitar atualizações automáticas que possam interferir no processo. (Senha do arquivo: <strong>sordum</strong>)</p>
            </div>
          </div>
        </section>

        <section id="bios-flash" class="instruction-section">
          <h2><span class="section-icon">⚡</span> 2. Flash da BIOS</h2>
          <p>Fazer o "flash" da BIOS é um passo essencial. Você deve instalar uma versão <strong>diferente</strong> da atual (superior ou inferior). Nunca use a mesma versão.</p>
          <div class="instruction-box">
            <div class="instruction-icon">📥</div>
            <div class="instruction-details">
              <h3>Como Fazer o Flash</h3>
              <p>Baixe o arquivo da BIOS diretamente do site oficial do fabricante da sua placa-mãe. Coloque o arquivo em um pendrive e siga o procedimento de flash. Assista a um tutorial em vídeo se não tiver certeza.</p>
            </div>
          </div>
          <div class="bios-grid">
            <a href="https://youtu.be/Em7SRaG3L_0" target="_blank" rel="noopener noreferrer" class="bios-card video-link"><h3>ASUS</h3><p>Ver tutorial em vídeo</p></a>
            <a href="https://youtu.be/dUCWRqOdLUw" target="_blank" rel="noopener noreferrer" class="bios-card video-link"><h3>ASROCK</h3><p>Ver tutorial em vídeo</p></a>
            <a href="https://youtu.be/DIIde3s02kM" target="_blank" rel="noopener noreferrer" class="bios-card video-link"><h3>GIGABYTE/AORUS</h3><p>Ver tutorial em vídeo</p></a>
            <a href="https://youtu.be/sKMub20CUNI" target="_blank" rel="noopener noreferrer" class="bios-card video-link"><h3>MSI</h3><p>Ver tutorial em vídeo</p></a>
            <a href="https://www.youtube.com/watch?v=EBb0zH5FN6k&t" target="_blank" rel="noopener noreferrer" class="bios-card video-link"><h3>BIOSTAR</h3><p>Ver tutorial em vídeo</p></a>
            <a href="https://www.youtube.com/watch?v=RnI53zsoAoM&t" target="_blank" rel="noopener noreferrer" class="bios-card video-link"><h3>X99 / X79</h3><p>Ver tutorial em vídeo</p></a>
          </div>
        </section>

        <section id="bios-config" class="instruction-section">
          <h2><span class="section-icon">⚙️</span> 3. Configuração da BIOS</h2>
          <p>Após o flash, entre na BIOS novamente para fazer as seguintes alterações. Salve e saia ao concluir.</p>
          <div class="bios-grid">
            <div class="bios-card">
              <h3 class="bios-title">Processadores AMD</h3>
              <ul class="bios-list">
                <li><strong>TPM 2.0:</strong> Desabilitado</li>
                <li><strong>Trusted Computing:</strong> Desabilitado</li>
                <li><strong>Secure Boot:</strong> Desabilitado</li>
                <li><strong>CSM:</strong> Desabilitado</li>
                <li><strong>SVM (Virtualization):</strong> Desabilitado</li>
              </ul>
            </div>
              <div class="bios-card">
              <h3 class="bios-title">Processadores Intel</h3>
              <ul class="bios-list">
                <li><strong>PTT / TPM:</strong> Desabilitado</li>
                <li><strong>Trusted Computing:</strong> Desabilitado</li>
                <li><strong>Secure Boot:</strong> Desabilitado</li>
                <li><strong>CSM:</strong> Desabilitado</li>
                <li><strong>VT-x / VT-d (Virtualization):</strong> Desabilitado</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="spoofer-process" class="instruction-section">
          <h2><span class="section-icon">🚀</span> 4. Processo do Spoofer</h2>
          <p>Agora vamos para a parte mais importante. Siga os passos com atenção.</p>
          <ol class="process-list">
            <li>Baixe a versão mais atualizada do Spoofer.</li>
            <li>Abra o Spoofer, vá na <strong>segunda opção</strong> e tire uma print do seu HWID para comparação futura.</li>
            <li>Vá na <strong>terceira opção</strong> e clique em "SPOOF". Aguarde cerca de 1 minuto.</li>
            <li>Quando solicitado, escolha seu pendrive e clique em "EFI" até receber uma mensagem de confirmação.</li>
            <li><strong>Reinicie o PC.</strong> Ao iniciar o Windows, um CMD deve aparecer confirmando a alteração do MAC.</li>
            <li>Abra o Spoofer novamente e verifique seu HWID. Compare com a print para confirmar que os valores mudaram.</li>
          </ol>
        </section>

        <section id="final-steps" class="instruction-section">
          <h2><span class="section-icon">🎮</span> 5. Passos Finais</h2>
          <p>Seu sistema está quase pronto para o jogo.</p>
          <div class="instruction-box">
            <div class="instruction-icon">🌐</div>
            <div class="instruction-details">
              <h3>Instale o WARP</h3>
              <p>Baixe e instale o <a href="https://www.warp.dev/download" target="_blank" rel="noopener noreferrer">WARP</a>. Ele ajuda a proteger sua conexão.</p>
            </div>
          </div>
          <div class="instruction-box">
            <div class="instruction-icon">🔫</div>
            <div class="instruction-details">
              <h3>Instale e Jogue Valorant</h3>
              <p>Baixe o Valorant. Antes de abrir o jogo, <strong>ligue o WARP</strong>. Você pode mantê-lo ligado ou desligá-lo quando estiver no lobby do jogo. Pronto!</p>
            </div>
          </div>
        </section>

        <div class="last-updated">
          Última atualização: ${new Date().toLocaleDateString('pt-BR')}
        </div>
      </main>
    </div>
  `;
  return page;
}

// *** NOVA FUNÇÃO PARA A PÁGINA 2 DE INSTRUÇÕES (#instructions2) ***
function createInstructionsPage2() {
  const page = document.createElement('div');
  page.className = 'instructions-page';
  page.innerHTML = `
    <div class="instructions-container">
      <aside class="instructions-sidebar">
        <h3>Guia Spoofer+Bypass</h3>
        <ul>
          <li><a href="#requisitos" class="sidebar-link active">Requisitos</a></li>
          <li><a href="#download-iso" class="sidebar-link">Etapa 1: Baixar ISO</a></li>
          <li><a href="#criar-usb" class="sidebar-link">Etapa 2: Criar USB</a></li>
          <li><a href="#instalar-windows" class="sidebar-link">Etapa 3: Instalar Windows</a></li>
          <li><a href="#usar-spoofer" class="sidebar-link">Etapa 4: Usar Spoofer</a></li>
          <li><a href="#atualizar-bios" class="sidebar-link">Etapa 5: Atualizar BIOS</a></li>
        </ul>
        <div class="community-feedback">
          <h4>Ainda com dúvidas?</h4>
          <p>Nossa comunidade no Discord está pronta para ajudar!</p>
          <a href="${DISCORD_LINK}" target="_blank" rel="noopener noreferrer">Entrar no Discord</a>
        </div>
      </aside>
      <main class="instructions-content">
        <h1 class="page-title">🛡️ Configuração Spoofer+Bypass — Guia Completo</h1>
        <p class="powered-by">Este guia irá te orientar na criação de um ambiente de testes limpo e seguro.</p>

        <section id="requisitos" class="instruction-section">
          <h2><span class="section-icon">📦</span> Requisitos</h2>
          <ul class="bios-list" style="line-height: 1.8;">
            <li>Um pendrive USB (mínimo de 8 GB)</li>
            <li>Acesso à BIOS/UEFI do seu sistema</li>
            <li>Um segundo dispositivo para preparar o USB (recomendado)</li>
            <li>Conexão com a internet</li>
          </ul>
           <div class="instruction-box">
            <div class="instruction-icon">⚠️</div>
            <div class="instruction-details">
              <p><strong>GHOST SPECTRE É RECOMENDADO, MAS NÃO OBRIGATÓRIO.</strong> Qualquer versão do Windows 10 até o Windows 11 23h2 funciona.</p>
            </div>
          </div>
        </section>

        <section id="download-iso" class="instruction-section">
          <h2><span class="section-icon">1️⃣</span> Etapa 1: Baixar o ISO do Ghost Spectre</h2>
          <p>Recomendamos usar a edição SE (SuperLite Edition). (Não é necessário ser exatamente o Ghost Spectre)</p>
           <div class="instruction-box">
            <div class="instruction-icon">⚠️</div>
            <div class="instruction-details">
              <p>O arquivo baixado terá a extensão (.WPE64), basta renomear para .rar.</p>
            </div>
          </div>
          <a href="https://pixeldrain.com/u/kJW8WnL9" target="_blank" rel="noopener noreferrer" class="product-cta" style="display: inline-block; width: auto; padding: 0.75rem 1.5rem;">🔗 Link de Download</a>
        </section>

        <section id="criar-usb" class="instruction-section">
          <h2><span class="section-icon">2️⃣</span> Etapa 2: Criar um USB bootável usando o Rufus</h2>
          <p>🎥 Tutorial em vídeo: <a href="https://www.youtube.com/watch?v=JlUm_gi7eUE" target="_blank">Como usar o Rufus</a></p>
          <ol class="process-list">
             <li>Baixe o Rufus.</li>
             <li>Insira o seu pendrive.</li>
             <li>Abra o Rufus e selecione o ISO do Ghost Spectre.</li>
             <li>Em “Esquema de Partição”, escolha GPT (para sistemas UEFI).</li>
             <li>Clique em “Iniciar” e aguarde a conclusão.</li>
          </ol>
        </section>

        <section id="instalar-windows" class="instruction-section">
          <h2><span class="section-icon">3️⃣</span> Etapa 3: Instalar o Ghost Spectre Windows 10</h2>
          <p>🎥 Tutorial completo desde o USB até a instalação do Windows: <a href="https://www.youtube.com/watch?v=dl0erDy4Hs4" target="_blank">Ver Vídeo</a></p>
           <ol class="process-list">
             <li>Acesse a BIOS e defina o pendrive como primeiro dispositivo de boot.</li>
             <li>Reinicie o PC e entre no instalador do Ghost Spectre.</li>
             <li>Selecione seu disco e realize uma instalação limpa.</li>
             <li>Após a instalação, configure o Windows normalmente.</li>
          </ol>
        </section>

        <section id="usar-spoofer" class="instruction-section">
          <h2><span class="section-icon">4️⃣</span> Etapa 4: Usar o Spoofer</h2>
          <p>Após instalar o Windows, siga esta sequência para fazer o spoof do sistema:</p>
           <ol class="process-list">
            <li>Faça login no carregador (loader).</li>
            <li>Renove sua assinatura do spoofer, se ainda não tiver.</li>
            <li>Clique em “Spoof” e aguarde até aparecer a mensagem para reiniciar o PC.</li>
            <li>Quando o spoof for concluído e o PC reiniciar, continue para a próxima etapa.</li>
          </ol>
        </section>

        <section id="atualizar-bios" class="instruction-section">
          <h2><span class="section-icon">5️⃣</span> Etapa 5: Atualizar a BIOS</h2>
          <p>🎥 Tutorial em vídeo: <a href="https://www.youtube.com/watch?v=KqiCe0_rNII" target="_blank">Como atualizar a BIOS a partir do USB</a></p>
          <div class="instruction-box" style="border-color: var(--warning);">
            <div class="instruction-icon">⚠️</div>
            <div class="instruction-details">
              <p><strong>Sempre faça o spoof ANTES de atualizar a BIOS.</strong></p>
            </div>
          </div>
          <ol class="process-list">
            <li>Prepare um segundo pendrive com o arquivo da BIOS da sua placa-mãe.</li>
            <li>Acesse a BIOS e localize a ferramenta EZ Flash / Q-Flash / M-Flash (varia conforme a marca).</li>
            <li>Selecione o arquivo da BIOS e siga as instruções na tela.</li>
            <li>Deixe o processo de atualização terminar e reinicie o sistema.</li>
          </ol>
          <div class="instruction-box" style="border-color: var(--error);">
            <div class="instruction-icon">⚠️</div>
            <div class="instruction-details">
                <ul class="bios-list" style="line-height: 1.8;">
                    <li>O <strong>TPM</strong> DEVE ESTAR DESATIVADO APÓS A ATUALIZAÇÃO DA BIOS.</li>
                    <li>O <strong>SECURE BOOT</strong> DEVE ESTAR NO MODO PADRÃO UEFI E ATIVADO.</li>
                    <li>A <strong>VIRTUALIZAÇÃO</strong> DEVE ESTAR ATIVADA.</li>
                </ul>
            </div>
          </div>
        </section>
        
        <div class="last-updated">
          Última atualização: ${new Date().toLocaleDateString('pt-BR')}
        </div>
      </main>
    </div>
  `;
  return page;
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
        <button class="modal-close" aria-label="Fechar modal">×</button>
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
        <a href="#home" class="footer-link" data-page="home">Início</a>
        <a href="#products" class="footer-link" data-page="home">Produtos</a>
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
}

function initializeNavigation() {
  // Handle main navigation clicks
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Skip external links
    if (anchor.target === '_blank' && !anchor.classList.contains('sidebar-link')) return;

    anchor.addEventListener('click', function (e) {
      const targetHash = this.getAttribute('href');
      const onInstructionsPage = window.location.hash.startsWith('#instructions');

      if (this.dataset.page === 'instructions') {
        e.preventDefault();
        if (window.location.hash !== targetHash) {
          window.location.hash = targetHash;
          location.reload();
        }
      } else if (this.dataset.page === 'home') {
        if (onInstructionsPage) {
          e.preventDefault();
          window.location.href = window.location.pathname;
        } else {
          e.preventDefault();
          const targetElement = document.querySelector(targetHash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    });
  });

  // Handle sidebar navigation and scroll spy on the instructions page
  if (window.location.hash.startsWith('#instructions')) {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.instruction-section');

    if (!sidebarLinks.length || !sections.length) return;

    // Smooth scroll for sidebar links
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Intersection Observer for scroll spy
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          sidebarLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }
}
