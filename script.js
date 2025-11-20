const projects = [
    {
        title: "Monitoramento Florestal com YOLO",
        description: "Sistema de Visão Computacional para contagem de mudas e deteção de falhas utilizando imagens de drones. Pipeline automatizado com retreino baseado em gatilhos de data drift.",
        tags: ["Python", "YOLOv8", "AWS S3", "MLOps"]
    },
    {
        title: "Data Lake Operacional",
        description: "Arquitetura de dados centralizada no Databricks integrando SAP e INFLOR. Orquestração de ETL via Airflow reduzindo tempo de processamento em 80%.",
        tags: ["Databricks", "Airflow", "Spark", "Engenharia de Dados"]
    },
    {
        title: "Predição de Sujidade em Frotas",
        description: "Modelo de regressão multivariada para prever necessidade de manutenção em caminhões, reduzindo custos operacionais com alertas preditivos.",
        tags: ["Scikit-learn", "Estatística", "Python", "Power BI"]
    }
];

const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    
    let tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join('');

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">${tagsHtml}</div>
    `;
    
    projectList.appendChild(card);
});