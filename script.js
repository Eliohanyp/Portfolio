// 1. Efeito de Digitação
const textElement = document.getElementById('typing-text');
const phrases = ["Cientista de Dados.", "Especialista em Agrofloresta 4.0.", "Engenheiro de Machine Learning."];
let phraseIndex = 0; 
let charIndex = 0; 
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}
document.addEventListener('DOMContentLoaded', type);

// 2. Configuração dos Projetos (SEUS 5 PROJETOS REAIS)
const projects = [
    {
        category: "Visão Computacional",
        title: "DX Forest Vision",
        description: "Contagem automática de plantas e falhas, análise de heterogeneidade e detecção de matocompetição utilizando drones e Deep Learning.",
        image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=800&auto=format&fit=crop", // Drone/Floresta
        tags: ["YOLOv8", "Python", "OpenCV", "Edge Computing"]
    },
    {
        category: "Sensoriamento Remoto",
        title: "Monitoramento de Florestas Adultas",
        description: "Análise integrada de dados climáticos, vegetação e imagens de satélite para prever produtividade e saúde da floresta.",
        image: "https://images.unsplash.com/photo-1448375240586-dfd8f3793300?q=80&w=800&auto=format&fit=crop", // Floresta Vista de Cima
        tags: ["GIS", "Sentinel-2", "Clima", "Big Data"]
    },
    {
        category: "Infraestrutura & IA",
        title: "Análise de Sujidade de Cargas",
        description: "Sistema de Visão Computacional e hardware dedicado para monitorar a qualidade da madeira e sujidade nos caminhões.",
        image: "https://images.unsplash.com/photo-1605218427368-35197a9c051b?q=80&w=800&auto=format&fit=crop", // Logística/Cargas
        tags: ["IoT", "Deep Learning", "Hardware", "Analytics"]
    },
    {
        category: "Desenvolvimento Web",
        title: "Sistema de Melhoramento Genético",
        description: "Plataforma interativa desenvolvida em Streamlit para gestão e análise de dados de cruzamentos genéticos florestais.",
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop", // Lab/Genética
        tags: ["Streamlit", "Python", "Pandas", "Genética"]
    },
    {
        category: "Planejamento Estratégico",
        title: "Microplanejamento Florestal",
        description: "Sistema de otimização para alocação de recursos e desenho operacional de talhões, maximizando a eficiência da colheita.",
        image: "https://images.unsplash.com/photo-1581094794329-cd8085b703f3?q=80&w=800&auto=format&fit=crop", // Mapas/Planejamento
        tags: ["Otimização", "Algoritmos", "GIS", "Gestão"]
    }
];

// 3. Renderizar Projetos
const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card', 'hidden');
    
    let tagsHtml = project.tags.map(tag => `<li>${tag}</li>`).join('');

    card.innerHTML = `
        <div style="overflow: hidden;">
            <img src="${project.image}" alt="${project.title}" class="project-img">
        </div>
        <div class="project-info">
            <span class="project-cat">${project.category}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <ul class="tech-list">${tagsHtml}</ul>
        </div>
    `;
    
    projectList.appendChild(card);
});

// 4. Animação de Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
