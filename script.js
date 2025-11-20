// --- DADOS DOS PROJETOS (Centralizado) ---
const projectsData = [
    {
        id: "dx-forest",
        category: "Visão Computacional",
        title: "DX Forest Vision",
        description: "Contagem automática de plantas e falhas, análise de heterogeneidade e detecção de matocompetição.",
        fullDescription: "O desafio consistia em monitorar vastas áreas de plantio florestal onde a contagem manual era inviável e imprecisa. Era necessário identificar não apenas a contagem ("Stand Count"), mas também falhas de plantio e competição com ervas daninhas.",
        technicalSolution: "Desenvolvi uma arquitetura baseada em **YOLOv8** treinado com imagens de drones (RGB e Multiespectral). O pipeline processa ortomosaicos pesados dividindo-os em 'tiles', realiza a inferência e remonta as coordenadas geográficas (GeoJSON). O sistema roda em Edge Computing para pré-processamento e envia os dados para AWS S3, onde dashboards Power BI consomem os resultados.",
        image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1200&auto=format&fit=crop",
        tags: ["YOLOv8", "Python", "OpenCV", "AWS S3", "Edge Computing"]
    },
    {
        id: "monitoramento-adultas",
        category: "Sensoriamento Remoto",
        title: "Monitoramento de Florestas Adultas",
        description: "Análise integrada de dados climáticos, vegetação e imagens de satélite.",
        fullDescription: "Em florestas adultas, o acesso físico é difícil. O objetivo era prever a produtividade e a saúde biológica da floresta sem necessidade de inventários de campo constantes.",
        technicalSolution: "Utilizei imagens de satélite **Sentinel-2** para calcular índices vegetativos (NDVI, EVI). Cruzei estes dados com estações meteorológicas locais e histórico de inventário usando algoritmos de **Random Forest** para prever o volume de madeira. O pipeline foi automatizado no Databricks.",
        image: "https://images.unsplash.com/photo-1448375240586-dfd8f3793300?q=80&w=1200&auto=format&fit=crop",
        tags: ["GIS", "Sentinel-2", "Random Forest", "Databricks", "Big Data"]
    },
    {
        id: "sujidade-cargas",
        category: "Infraestrutura & IA",
        title: "Análise de Sujidade de Cargas",
        description: "Sistema de Visão Computacional para monitorar a qualidade da madeira nos caminhões.",
        fullDescription: "Caminhões chegam à fábrica com diferentes níveis de sujidade e casca na madeira, o que afeta o processo industrial. A classificação manual era subjetiva e perigosa.",
        technicalSolution: "Implementei um sistema de câmeras industriais nos portais de entrada. Um modelo de **Segmentação Semântica (U-Net)** identifica a porcentagem de casca e barro em tempo real. O sistema integra via API com a balança rodoviária para descontar automaticamente o peso da sujeira no pagamento.",
        image: "https://images.unsplash.com/photo-1605218427368-35197a9c051b?q=80&w=1200&auto=format&fit=crop",
        tags: ["Deep Learning", "Segmentação Semântica", "IoT", "API Rest"]
    },
    {
        id: "melhoramento-genetico",
        category: "Desenvolvimento Web",
        title: "Sistema de Melhoramento Genético",
        description: "Plataforma interativa em Streamlit para gestão de cruzamentos genéticos.",
        fullDescription: "Os pesquisadores precisavam de uma ferramenta ágil para cruzar dados de milhares de clones e matrizes genéticas, visualizando a genealogia e performance.",
        technicalSolution: "Desenvolvi uma aplicação Full-Stack utilizando **Streamlit** (Python). O backend conecta-se a um banco SQL Server, realiza cálculos estatísticos de BLUP (Best Linear Unbiased Prediction) e renderiza gráficos interativos com **Plotly**. A ferramenta reduziu o tempo de análise de dias para minutos.",
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1200&auto=format&fit=crop",
        tags: ["Streamlit", "Python", "Pandas", "SQL Server", "Plotly"]
    },
    {
        id: "microplanejamento",
        category: "Planejamento Estratégico",
        title: "Microplanejamento Florestal",
        description: "Otimização para alocação de recursos e desenho operacional de talhões.",
        fullDescription: "O planejamento da colheita exige definir rotas de máquinas e alocação de recursos para minimizar custos e impacto no solo.",
        technicalSolution: "Criei um algoritmo de otimização baseado em grafos para traçar as melhores rotas de extração (baldeio) considerando a topografia (DEM). O resultado é exportado diretamente para o GPS das máquinas florestais (Harvesters/Forwarders).",
        image: "https://images.unsplash.com/photo-1581094794329-cd8085b703f3?q=80&w=1200&auto=format&fit=crop",
        tags: ["Otimização", "Algoritmos Genéticos", "GIS", "Python"]
    }
];

// --- FUNÇÃO 1: Home Page (Digitação e Listagem) ---
document.addEventListener('DOMContentLoaded', () => {
    // Apenas roda se estiver na Home (tem o elemento typing-text)
    if(document.getElementById('typing-text')) {
        runTypewriter();
        renderProjectsHome();
        initScrollAnimation();
    }
});

function runTypewriter() {
    const textElement = document.getElementById('typing-text');
    const phrases = ["Cientista de Dados.", "Especialista em Agrofloresta 4.0.", "Engenheiro de Machine Learning."];
    let phraseIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }
    type();
}

function renderProjectsHome() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = ''; // Limpa antes de renderizar

    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card', 'hidden');
        
        // Ao clicar, vai para a página de detalhes com o ID
        card.onclick = () => {
            window.location.href = `projeto.html?id=${project.id}`;
        };

        let tagsHtml = project.tags.slice(0, 3).map(tag => `<li>${tag}</li>`).join(''); // Mostra só 3 tags na home

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
}

function initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
}

// --- FUNÇÃO 2: Página de Detalhes (Carregar Projeto) ---
function loadProjectDetails() {
    // Pega o ID da URL
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    
    // Busca o projeto nos dados
    const project = projectsData.find(p => p.id === projectId);

    if (project) {
        // Preenche Títulos e Imagem de Fundo
        document.getElementById('detail-title').innerText = project.title;
        document.getElementById('detail-bg').style.backgroundImage = `url('${project.image}')`;
        
        // CORREÇÃO AQUI: Usa innerHTML para interpretar o Negrito (**) do Markdown básico
        // Converte **texto** para <strong>texto</strong>
        const formatText = (text) => text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        document.getElementById('detail-desc').innerHTML = formatText(project.fullDescription);
        document.getElementById('detail-tech').innerHTML = formatText(project.technicalSolution);
        
        // Adiciona classe para estilizar negrito via CSS
        document.getElementById('detail-desc').classList.add('tech-description');
        document.getElementById('detail-tech').classList.add('tech-description');

        // Preenche tags (Badges)
        const tagsContainer = document.getElementById('detail-tags');
        tagsContainer.innerHTML = ''; // Limpa tags antigas
        project.tags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            tagsContainer.appendChild(span);
        });

        document.title = `${project.title} | Eliohan Portfolio`;
    } else {
        document.getElementById('detail-title').innerText = "Projeto não encontrado";
        document.querySelector('.detail-content').innerHTML = "<div class='container'><p>Volte para a home e selecione um projeto válido.</p></div>";
    }
}
