// 1. Animação de Digitação (Typewriter)
const textElement = document.getElementById('typing-text');
const phrases = ["Cientista de Dados.", "Especialista em Floresta 4.0.", "Engenheiro de Software.", "Criador de Soluções."];
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
        setTimeout(type, 2000); // Pausa quando termina de escrever
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}
document.addEventListener('DOMContentLoaded', type);


// 2. Dados dos Projetos (Com Imagens Reais via Unsplash)
const projects = [
    {
        category: "Visão Computacional",
        title: "Monitoramento Florestal com YOLO",
        description: "Sistema autônomo que utiliza imagens de drones para contar mudas e detectar falhas. Pipeline de retreino automático para evitar Data Drift.",
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop", // Imagem de Floresta/Drone
        tags: ["Python", "YOLOv8", "AWS S3", "MLOps"]
    },
    {
        category: "Engenharia de Dados",
        title: "Data Lake Operacional",
        description: "Centralização de dados SAP e INFLOR no Databricks. Orquestração via Airflow processando dados da Torre de Controle 24/7.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // Imagem de Dashboards/Dados
        tags: ["Databricks", "Airflow", "Spark", "ETL"]
    },
    {
        category: "Data Science",
        title: "Predição de Manutenção em Frotas",
        description: "Modelo de regressão multivariada para prever sujidade e falhas mecânicas em caminhões, reduzindo custos operacionais.",
        image: "https://images.unsplash.com/photo-1580901368919-7738ef31f9ea?q=80&w=800&auto=format&fit=crop", // Imagem de Caminhão/Indústria
        tags: ["Scikit-learn", "Python", "Estatística", "Power BI"]
    }
];

// 3. Renderizar Projetos
const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card', 'hidden'); // Começa oculto para animação
    
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

// 4. Animação de Scroll (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
