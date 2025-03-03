document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("show");
});

// Função para alternar entre os temas
const toggleTheme = () => {
  const currentTheme = document.body.getAttribute("data-theme");
  const themeToggleButton = document.getElementById("theme-toggle");
  const icon = themeToggleButton.querySelector("i");

  if (currentTheme === "dark") {
    document.body.setAttribute("data-theme", "light");
    icon.classList.remove("fas", "fa-sun");
    icon.classList.add("fas", "fa-moon");
  } else {
    document.body.setAttribute("data-theme", "dark");
    icon.classList.remove("fas", "fa-moon");
    icon.classList.add("fas", "fa-sun");
  }
};

// Adicionando o evento de clique ao botão
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Detecta quando a seção entra na tela
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      section.classList.add("visible");
    }
  });
});

// carrossel icons linguagens
const icons = [
  { src: "assets/icons/html.png", alt: "HTML" },
  { src: "assets/icons/css-3.png", alt: "CSS3" },
  { src: "assets/icons/js.png", alt: "JavaScript" },
  { src: "assets/icons/bootstrap.png", alt: "Bootstrap" },
  { src: "assets/icons/typescript.png", alt: "TypeScript" },
  { src: "assets/icons/github.png", alt: "GitHub" },
  { src: "assets/icons/c-.png", alt: "C-" },
  { src: "assets/icons/c-sharp.png", alt: "C#" },
  { src: "assets/icons/nodejs.png", alt: "Node.js" },
  { src: "assets/icons/mysql.png", alt: "MySQL" },
];

// Função para duplicar os ícones
const duplicatedIcons = [
  ...icons,
  ...icons,
  ...icons,
  ...icons,
  ...icons,
  ...icons,
  ...icons,
];

// Seleciona o elemento onde as imagens serão inseridas
const carouselTrack = document.querySelector(".carousel-track");

// Cria os elementos de imagem e os adiciona ao carrossel
duplicatedIcons.forEach((icon) => {
  const img = document.createElement("img");
  img.src = icon.src;
  img.alt = icon.alt;
  img.classList.add("carousel-icon");
  carouselTrack.appendChild(img);
});

function verMais() {
  const texto = document.getElementById("sobre-texto");
  const botao = document.getElementById("ver-mais-btn");

  // Verificar se o texto já está expandido
  if (texto.textContent.length > 200) {
    texto.textContent =
      "Olá! Sou um desenvolvedor web apaixonado por tecnologia e design. Trabalho com HTML, CSS, JavaScript e sempre busco melhorar minhas habilidades. Gosto de criar experiências únicas para os usuários e tenho um grande interesse em criar interfaces dinâmicas e funcionais.";
    botao.textContent = "Ver Mais";
  } else {
    texto.textContent +=
      " Tenho experiência com frameworks como React, Node.js, e sou entusiasta em aprendizado contínuo. Estou sempre buscando aprender novas tecnologias e melhorar meu trabalho.";
    botao.textContent = "Ver Menos";
  }
}

// carrosel projects
const projects = [
  {
    src: "https://i.pinimg.com/236x/b2/a7/8b/b2a78b7520577fc3664213e22bffd2c3.jpg",
    alt: "PageJapan",
    title: "PageJapan",
    link: "https://pagejapan.vercel.app/",
    gitlink: "https://github.com/AngelRafaelTopsapp/pagejapan",
    description:
      "Um site de notícias em tempo real, que busca as notícias mais faladas do mundo.",
  },
  {
    src: "https://i.pinimg.com/474x/82/60/a6/8260a65b6bc2fd5046cda5f2012edd4c.jpg",
    alt: "Get Restaurant",
    title: "Get Restaurant",
    link: "https://tabernadodragao.vercel.app/",
    gitlink: "",
    description:
      "App web de gerenciamento de um restaurante, onde você pode ter o controle total na sua mão: controle de mesas ativas, pratos, kanban de produção e relatório dos pedidos feitos no expediente.",
  },
  {
    src: "https://i.pinimg.com/236x/4a/26/d9/4a26d9400862feea033b091c68a6b9ba.jpg",
    alt: "Blog Recomenda",
    title: "Blog Recomenda",
    link: "https://timpilim.vercel.app/",
    gitlink: "",
    description:
      "Um blog com lista de promoções e recomendações, integrado a uma API do Mercado Livre e Amazon.",
  },
  {
    src: "https://i.pinimg.com/236x/d6/f9/50/d6f950db1c4c7371ce807db45e32dd25.jpg",
    alt: "Utilitários QKD3",
    title: "Utilitários QKD3",
    link: "https://utilitarios-qkd3.vercel.app/",
    gitlink: "",
    description:
      "Hub web de aplicativos com diversas funções, incluindo cálculo de combustível, cálculo de importação e muito mais.",
  },
  {
    src: "https://i.pinimg.com/236x/64/83/8b/64838ba04fc7ad81e311d47107fe3d4e.jpg",
    alt: "ReadFish",
    title: "ReadFish",
    link: "https://rafaelprofmgz.github.io/avaliacao3/",
    gitlink: "https://github.com/RafaelProfMgz/avaliacao3",
    description:
      "Um app web para gestão de uma biblioteca, permitindo gerenciar a entrada de livros, livros alugados, além de gerar relatórios de livros devolvidos e extraviados.",
  },
];

// Carrossel de Projetos
const carouselTrackProject = document.querySelector(".carousel-track-project");
let isMoving = false;

// Função para mover o carrossel para a esquerda
function moveCarousel() {
  if (isMoving) return;
  isMoving = true;

  carouselTrackProject.classList.add("moving-left");

  setTimeout(() => {
    const firstCard = carouselTrackProject.querySelector(".project-card");
    carouselTrackProject.appendChild(firstCard);

    carouselTrackProject.classList.remove("moving-left");
    isMoving = false;
  }, 800); // Tempo da transição
}

// Chamando a função para mover o carrossel a cada 15 segundos
setInterval(moveCarousel, 15000);

// Função para criar os cards dinamicamente
function createProjectCards(projects) {
  const fragment = document.createDocumentFragment();

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    const projectImage = document.createElement("img");
    projectImage.src = project.src;
    projectImage.alt = project.alt;
    projectImage.classList.add("project-image");

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectDescription.title = project.description;

    // Criando os botões com ícones (usando Font Awesome)
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const githubButton = document.createElement("a");
    githubButton.href = project.gitlink;
    githubButton.target = "_blank"; // Abre em uma nova aba
    githubButton.classList.add("button", "github-button");
    githubButton.innerHTML = '<i class="fab fa-github"></i> GitHub'; // Ícone do GitHub

    // Se o link do GitHub for vazio, esconder o botão
    if (!project.gitlink) {
      githubButton.style.display = "none";
    }

    const siteButton = document.createElement("a");
    siteButton.href = project.link;
    siteButton.target = "_blank"; // Abre em uma nova aba
    siteButton.classList.add("button", "site-button");
    siteButton.innerHTML = '<i class="fas fa-external-link-alt"></i> Site'; // Ícone do site

    // Se o link do site for vazio, esconder o botão
    if (!project.link) {
      siteButton.style.display = "none";
    }

    // Adicionando os botões ao container
    buttonContainer.appendChild(githubButton);
    buttonContainer.appendChild(siteButton);

    // Adicionando os elementos ao card
    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(buttonContainer);

    fragment.appendChild(projectCard);
  });

  // Adicionando o fragmento ao container do carrossel
  carouselTrackProject.appendChild(fragment);
}



// Chamando a função para criar os cards
createProjectCards(projects);

// Função para animar as seções quando entrarem e saírem da tela
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // Se a seção estiver visível
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

// Seleciona todas as seções que você deseja animar
const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  observer.observe(section);
});

// Função para validar o formulário
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const formMessage = document.getElementById("formMessage");

  formMessage.textContent = "";

  if (name.trim() === "") {
    formMessage.textContent = "Por favor, preencha o campo nome.";
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.trim() === "") {
    formMessage.textContent = "Por favor, preencha o campo e-mail.";
    return false;
  } else if (!emailPattern.test(email)) {
    formMessage.textContent = "Por favor, insira um e-mail válido.";
    return false;
  }

  if (message.trim() === "") {
    formMessage.textContent = "Por favor, preencha o campo mensagem.";
    return false;
  }

  alert("Formulário enviado com sucesso!");
  document.getElementById("contactForm").reset();
  return true;
}

// Adicionando o evento de validação ao formulário
document.getElementById("contactForm").addEventListener("submit", validateForm);


