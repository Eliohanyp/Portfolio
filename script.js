// --- DADOS DOS PROJETOS (Centralizado) ---
const projectsData = [
    {
        id: "dx-forest",
        category: "Plataforma Web / Machine Learning",
        title: "DX AI - Forest Vision",
        description: "Plataforma completa de inteligência geográfica para monitoramento de qualidade e sobrevivência florestal, desenvolvida integralmente por mim (backend, frontend e modelos de visão computacional).",
        fullDescription: "Desenvolvi sozinho uma solução Web GIS completa para o ciclo de qualidade florestal, desde o backend FastAPI até o frontend com Leaflet, além de todos os pipelines de visão computacional. A plataforma permite inputar talhão, recortar ortomosaicos, rodar todo o processamento (detecção de plantas, análise de heterogeneidade, falhas, linhas/entrelinhas e matocompetição), editar manualmente os resultados no mapa e analisar indicadores em dashboard, com possibilidade de compartilhamento via relatórios PDF. Todo o fluxo – talhão -> recortar -> processar -> editar -> analisar -> compartilhar – foi desenhado e implementado por mim, integrando banco de dados espacial, algoritmos geométricos e modelos de deep learning.",
        technicalSolution: "Projetei e implementei uma arquitetura **FastAPI** com **SQLite/SpatiaLite** para dados espaciais, utilizando **SQLAlchemy + GeoAlchemy2** para modelagem de Unidades/Fazendas/Talhões e camadas derivadas. No frontend, construí uma aplicação **HTML/JavaScript** usando **Leaflet** e **Turf.js** para visualização e edição vetorial em mapas interativos. Desenvolvi pipelines de visão computacional com **YOLOv8 (Ultralytics)** para detecção censitária de plantas, modelos de segmentação em **PyTorch/Segmentation Models** para detecção e segmentação de linhas e entrelinhas, e rotinas com **GeoPandas/Rasterio/Shapely** para: análise de heterogeneidade das plantas (variação de copa/densidade), cálculo de falhas de plantio ao longo das linhas (gaps vs espaçamento esperado) e mapeamento de matocompetição, removendo previamente a copa das árvores para isolar apenas o mato. Todo o processamento pesado roda em tarefas assíncronas via **BackgroundTask** do Starlette, garantindo responsividade da API mesmo em grandes ortomosaicos.",
        image: "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_5.png",
        images: [
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_2.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_3.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb.png",

            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_5.png",

            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_7.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_6.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_8.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/dxforestvision_thumb_4.png"
        ],
        imageTitles: [
            "Tela de Login",
            "Visualização de Mapas",
            "Análise e Estatisticas Gerais",
            "Detecção de Plantas, Falhas e Heterogeneidade",
            "Detecção de Matocompetição",
            "Detecção de Linhas de Plantio",
            "Distinção das Linhas e Entrelinhas",
            "Resultados em PDF"
        ],
        results: "Consegui consolidar, em um único produto, todo o processo de análise de qualidade florestal que antes era manual e fragmentado em diversas ferramentas. A automação da contagem de plantas, da análise de heterogeneidade, da detecção de falhas e da matocompetição em linhas/entrelinhas reduziu drasticamente o tempo de análise e padronizou o processo técnico, permitindo que qualquer analista parta diretamente de ortomosaicos brutos até insights acionáveis e relatórios formais em poucos cliques.",
        architecture: "Desenhei um sistema monolítico com **backend FastAPI** expondo APIs REST para gestão de usuários, unidades, fazendas, talhões, uploads de ortomosaicos e camadas derivadas, usando **SQLite/SpatiaLite** como banco espacial local (com opção de migração para **Databricks SQL** em produção). O frontend é um cliente **HTML/JS** estático que consome essas APIs, com **Leaflet** para renderização de ortomosaicos (GeoTIFF/COG), vetores (talhões, linhas, deteções, falhas, matocompetição) e ferramentas de desenho/edição. Implementei todo o pipeline assíncrono (clipping de talhão em grids, detecção de plantas, segmentação de linhas, análise de falhas, geração de máscaras de matocompetição e cálculo de estatísticas) em funções Python orquestradas por **BackgroundTask**, além da geração de relatórios PDF customizados com gráficos e mapas.",
        technologies: {
            "Backend": ["FastAPI", "Python", "SQLite", "SpatiaLite", "SQLAlchemy", "GeoAlchemy2", "Pydantic", "Starlette BackgroundTask"],
            "Frontend": ["HTML5", "JavaScript", "Leaflet", "Leaflet.Draw", "Turf.js"],
            "ML/AI & Geoespacial": ["YOLOv8 (Ultralytics)", "PyTorch", "Segmentation Models PyTorch", "GeoPandas", "Rasterio", "rioxarray", "Shapely", "PyProj", "scikit-image", "OpenCV"],
            "Relatórios & Utilitários": ["ReportLab", "Matplotlib", "NumPy", "SciPy", "NetworkX", "python-dotenv"],
            "DevOps / Integrações": ["boto3 (AWS S3)", "Databricks SQL Connector"]
        },
        tags: ["Web GIS","Python","JavaScript","OpenCV","PyTorch","scikit-image", "FastAPI", "YOLOv8", "Leaflet", "PostGIS", "GeoPandas","Matplotlib","SQLAlchemy"]
    },
    {
        id: "monitoring-adult-forests",
        category: "Plataforma Web / Análise Geoespacial",
        title: "Sistema de Classificação de Florestas Adultas",
        description: "Plataforma completa de inteligência geoespacial para monitoramento e classificação de saúde florestal em florestas adultas, desenvolvida integralmente por mim (pipeline de análise estatística, processamento de dados de satélite e interface web interativa).",
        fullDescription: "Desenvolvi sozinho uma solução Web GIS completa para monitoramento contínuo de florestas adultas, desde o pipeline de processamento de dados de satélite Sentinel-2 até a interface web interativa com mapas e dashboards. A plataforma permite filtrar talhões por múltiplos critérios (Unidade, Fazenda, Quadra, Material Genético, Solo, período), visualizar classificações em mapas interativos com camadas de satélite, analisar indicadores de conformidade em dashboards com gráficos de séries históricas e distribuições, e explorar dados detalhados de cada talhão. Todo o fluxo – aquisição de dados Sentinel-2 -> pré-processamento -> análise PCA -> geração de benchmarks hierárquicos -> classificação estatística -> visualização interativa – foi desenhado e implementado por mim, integrando processamento de big data geoespacial, análise estatística multivariada e visualização web interativa.",
        technicalSolution: "Projetei e implementei uma arquitetura **Streamlit** para frontend web com **Folium** e **streamlit-folium** para renderização de mapas interativos com múltiplas camadas (CartoDB, Google Satellite, Esri Satellite) e ferramentas de visualização geoespacial. No backend, construí um pipeline completo de análise estatística usando **Pandas** e **GeoPandas** para manipulação de dados geoespaciais massivos (centenas de milhares de registros), **scikit-learn** para **PCA (Análise de Componentes Principais)** para reduzir multicolinearidade entre índices de vegetação (NDVI, EVI, SAVI, etc.) e extrair componentes de Vigor (PC1) e Variabilidade (PC2), e **SciPy** para cálculos estatísticos avançados (distribuição-t, margem de erro). Desenvolvi um sistema hierárquico de 4 níveis de benchmarks estatísticos com fallback automático: Nível 1 (Solo + Material Genético + Sazonalidade), Nível 2 (Solo + Sazonalidade), Nível 3 (Material Genético + Sazonalidade) e Nível 4 (Global Sazonal), garantindo 100% de cobertura mesmo com dados limitados. O sistema processa dados históricos completos de ciclos e rotações, vinculando cada imagem de satélite à sua rotação vigente correta, e classifica talhões em 4 categorias (Superávit, Conforme, Alerta, Crítico) baseado em resíduos estatísticos e detecção de quedas significativas de performance. Todo o processamento pesado roda com cache otimizado via **@st.cache_data** e armazenamento eficiente em **Parquet/GeoParquet**.",
        image: "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/moni_adult_thumb_3.png",
        images: [
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/moni_adult_thumb_10.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/moni_adult_thumb_3.png",

            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/moni_adult_thumb_9.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/moni_adult_thumb_4.png"
        ],
        imageTitles: [
            "Tela Principal",
            "Visualização das Classificações",
            "Estatisticas Gerais",
            "Dados Detalhados"
        ],
        results: "Consegui consolidar, em um único produto web, todo o processo de monitoramento de florestas adultas que antes era fragmentado e manual. A automação da análise estatística multivariada, da geração de benchmarks hierárquicos adaptativos e da classificação baseada em resíduos reduziu drasticamente o tempo de análise e padronizou o processo técnico, permitindo que qualquer analista parta diretamente de dados brutos de satélite até insights acionáveis e visualizações interativas em poucos cliques. O sistema processa mais de 136 mil registros históricos, vinculando corretamente cada imagem à sua rotação vigente, e gera classificações estatisticamente robustas mesmo para talhões com dados limitados, graças ao sistema de fallback hierárquico.",
        architecture: "Desenhei um sistema monolítico com **frontend Streamlit** expondo interface web interativa com filtros dinâmicos (Unidade, Fazenda, Quadra, Classificação, Material Genético, Solo, Ano-Mês), mapas Folium com múltiplas camadas de tiles e visualização de geometrias classificadas por cor, e dashboards com **Plotly** para gráficos de barras empilhadas, gráficos de pizza e séries históricas. O backend processa dados massivos em **Parquet/GeoParquet** (mais de 400MB de dados geoespaciais), utilizando **GeoPandas** para manipulação espacial e **Pandas** para agregações complexas. Implementei todo o pipeline de análise estatística (unificação de dados históricos, filtragem por janela de idade, PCA, geração de benchmarks hierárquicos com margem de erro estatística, classificação baseada em resíduos e detecção de quedas) em funções Python modulares, além de relatórios de validação automáticos e visualizações de insights do PCA (scree plots, heatmaps de loadings).",
        technologies: {
            "Frontend": ["Streamlit", "Folium", "streamlit-folium", "Plotly Express", "HTML/CSS"],
            "Backend & Processamento": ["Python", "Pandas", "GeoPandas", "NumPy", "SciPy"],
            "Machine Learning & Estatística": ["scikit-learn (PCA, StandardScaler)", "SciPy.stats (distribuição-t)"],
            "Geoespacial": ["GeoPandas", "Shapely", "WKT", "Parquet/GeoParquet"],
            "Visualização": ["Plotly", "Matplotlib", "Seaborn"],
            "Dados": ["Parquet", "GeoParquet", "CSV", "Sentinel-2 (COPERNICUS/S2_SR_HARMONIZED)"],
            "DevOps": ["Streamlit Cloud/Server"]
        },
        tags: [
            "Web GIS",
            "Streamlit",
            "PCA",
            "Folium",
            "GeoPandas",
            "Monitoramento Florestal",
            "Análise Estatística",
            "Sentinel-2",
            "Benchmarks Hierárquicos",
            "Classificação de Saúde Florestal",
            "Análise de Séries Temporais",
            "Projeto Solo"
        ]
        },
    {
        id: "sujidade-cargas",
        category: "Visão Computacional / IoT / Analytics",
        title: "Sistema de AI para monitoramento de sujidade das cargas de madeira",
        description: "Solução Interna de visão computacional e IoT para monitoramento automático de sujidade (folhas, galhos e cascas) em caminhões de madeira, integrando hardware na portaria e processamento em nuvem.",
        fullDescription: "Em 2024, a sujidade foi considerada o maior ofensor responsável pelas paradas da fábrica. A pedido dos diretores da área florestal e da fábrica, surgiu a necessidade de criar uma forma de monitorar e acompanhar a entrada de sujeira na linha de produção. Para isso, implementei um sistema Full-Stack de monitoramento da qualidade da madeira na entrada da fábrica. O projeto automatizou a detecção dos principais ofensores de qualidade (folhas, galhos e cascas), que antes eram avaliados de forma subjetiva ou manual. A solução captura imagens dos caminhões por meio de um pórtico instrumentado, processa a segmentação das toras e resíduos utilizando modelos de Deep Learning e disponibiliza os dados em uma plataforma web para gestão logística e de qualidade. O sistema garante a rastreabilidade da carga desde a fazenda até a linha de produção, permitindo correlacionar a qualidade da madeira com as paradas de fábrica.",
        technicalSolution: "A arquitetura de hardware consiste em um poste equipado com **câmeras**, iluminação LED dedicada e sensores de gatilho (trigger) conectados a um **Computador** local. No backend, o processamento ocorre em servidor **AWS**, onde algoritmos de segmentação analisam a carga entre 30 a 90 segundos. Para a validação estatística, evoluí o modelo inicial de **Regressão Linear Simples** para uma **Regressão Multivariada**, o que permitiu capturar relações não lineares em dados dispersos, elevando a explicabilidade (R²) do modelo de 27% para 73% e reduzindo o erro médio. O sistema integra dados de pesagem e classificação visual para calibração contínua.",
        image: "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_3.png",
        images: [
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_7.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_9.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_3.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_8.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_2.jpg",


            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_4.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_5.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/sujidade_thumb_6.png",

            
        ],
        imageTitles: [
            "Fluxo Visual",
            "Infraestrutura Simples na Portaria",
            "Exemplo de Detecção da Sujidade",
            "Carga Diurna",
            "Carga Noturna",
            "Power BI (Visualização da Detecção)",
            "Power BI (Entrada de Sujeira nas Linhas de Produção)",
            "Power BI (Análise de Sujidade por Fazenda e Talhão)"

        ],
        results: "A solução validou a premissa de 'Melhor madeira no melhor momento', atingindo 91,6% rastreabilidade completa das cargas pelo sistema. A mudança na abordagem estatística para regressão multivariada resultou em uma melhoria de 46% na explicabilidade da variável de sujidade. O sistema processou milhares de toneladas e com as aberturas de carga (921 toneladas em auditoria física), provamos a correlação entre a imagem processada e a realidade física, permitindo um gerenciamento de pátio otimizado baseado na qualidade real da matéria-prima.",
        architecture: "O sistema opera em uma arquitetura de Borda-Nuvem (Edge-to-Cloud). Na borda (Edge), a infraestrutura de portaria captura e pré-processa os eventos de entrada de caminhões. Os dados são transmitidos para a nuvem **AWS**, onde reside o pipeline de **Visão Computacional** e a base de dados. A camada de apresentação é feita através da plataforma web para operação em tempo real e **Dashboards em Power BI** para análise estratégica (Séries temporais de sujidade, análise por fazenda/talhão e correlação com paradas de fábrica). O sistema prevê integração via API com sistemas legados de gestão florestal (INFLOR).",
        technologies: {
            "Hardware & IoT": ["Câmeras IP", "Sensores Trigger", "Iluminação LED"],
            "Backend & Cloud": ["AWS (Amazon Web Services)", "Python", "Processamento de Imagens", "APIs REST"],
            "Machine Learning & Estatística": ["Regressão Multivariada", "Segmentação de Imagens (Deep Learning)", "Análise de Dispersão"],
            "Frontend & Visualização": ["Plataforma Web", "Power BI / Dashboards"],
            "Integrações": ["INFLOR (Planejado)", "Sistemas de Balança"]
        },
        tags: [
            "Visão Computacional",
            "Monitoramento Logístico",
            "Indústria 4.0",
            "Machine Learning",
            "AWS",
            "Gestão de Pátio",
            "Controle de Qualidade",
            "IoT",
            "Regressão Estatística",
            "Inovação Florestal"
        ]
    },
    {
        id: "melhoramento-genetico",
        category: "Desenvolvimento Web",
        title: "Sistema de Análise de Melhoramento Genético com Análise Geoespacial",
        description: "Plataforma completa de análise estatística e geoespacial para experimentos de melhoramento genético florestal, desenvolvida integralmente por mim (pipeline de processamento de dados experimentais, análise de volumes e IMA, processamento de croqui espacial e interface web interativa com visualizações avançadas).",
        fullDescription: "Desenvolvi sozinho uma solução web completa para análise de experimentos de melhoramento genético florestal, desde o processamento de dados brutos de campo até análises estatísticas avançadas e visualizações geoespaciais interativas. A plataforma permite fazer upload de dados experimentais (DAP, Altura, Idade, Códigos de qualidade), processar e calcular automaticamente volumes (CC e SC), Incremento Médio Anual (IMA), percentuais de códigos de qualidade (A, B, F, I, L, M, Q), ganho relativo por material genético comparado à testemunha, e gerar múltiplas bases de dados processadas. O sistema integra análise geoespacial através de croqui de campo, mapeando parcelas experimentais em coordenadas espaciais, permitindo visualização do layout do campo, análise por parcela com filtros dinâmicos, e visualização individual de árvores dentro de cada parcela usando grids customizáveis (3x3, 5x1, 10x4, etc.). Todo o fluxo – upload de dados → processamento estatístico → cálculo de volumes e IMA → processamento de croqui → integração espacial → visualizações interativas → exportação de bases processadas – foi desenhado e implementado por mim, integrando análise estatística experimental, processamento geoespacial e visualização web interativa.",
        technicalSolution: "Desenvolvi sozinho uma solução web completa para análise de experimentos de melhoramento genético florestal, desde o processamento de dados brutos de campo até análises estatísticas avançadas e visualizações geoespaciais interativas. A plataforma permite fazer upload de dados experimentais (DAP, Altura, Idade, Códigos de qualidade), processar e calcular automaticamente volumes (CC e SC), Incremento Médio Anual (IMA), percentuais de códigos de qualidade (A, B, F, I, L, M, Q), ganho relativo por material genético comparado à testemunha, e gerar múltiplas bases de dados processadas. O sistema integra análise geoespacial através de croqui de campo, mapeando parcelas experimentais em coordenadas espaciais, permitindo visualização do layout do campo, análise por parcela com filtros dinâmicos, e visualização individual de árvores dentro de cada parcela usando grids customizáveis (3x3, 5x1, 10x4, etc.). Todo o fluxo – upload de dados → processamento estatístico → cálculo de volumes e IMA → processamento de croqui → integração espacial → visualizações interativas → exportação de bases processadas – foi desenhado e implementado por mim, integrando análise estatística experimental, processamento geoespacial e visualização web interativa.",
    technicalSolution: "Projetei e implementei uma arquitetura **Streamlit** para frontend web com interface interativa para upload de arquivos Excel, processamento de dados e visualizações. No backend, construí um pipeline completo de análise estatística usando **Pandas** para manipulação de dados experimentais massivos, **NumPy** para cálculos vetorizados de volumes florestais (fórmulas específicas para Volume CC e SC baseadas em DAP e Altura), e agregações complexas por Material e Bloco. Desenvolvi funções especializadas para cálculo de volumes usando equações alométricas específicas, cálculo de IMA (Incremento Médio Anual) considerando espaçamento e idade, e processamento de códigos de qualidade florestal (A, B, F, I, L, M, Q) com cálculo de percentuais. Implementei um sistema de processamento de croqui espacial que lê arquivos Excel com layout de campo, identifica automaticamente blocos e parcelas, mapeia coordenadas espaciais (x, y) para cada parcela, e determina o bloco de cada parcela baseado em posição espacial. O sistema gera visualizações interativas com **Plotly Express** e **Plotly Graph Objects** incluindo gráficos de barras agrupadas (IMA por Material), gráficos de ganho relativo com linha de referência, heatmaps de IMA por Material e Bloco, gráficos de radar para códigos de qualidade, histogramas, scatter plots com regressão linear, boxplots, e mapas de dispersão geoespaciais. Desenvolvi um sistema avançado de visualização intra-parcela com grids customizáveis que permite organizar árvores individuais dentro de cada parcela em diferentes configurações (3x3, 5x1, 1x5, 10x4, 4x10), com detecção automática de excesso de árvores e sugestão de grids adequados. Todo o processamento pesado roda com cache otimizado via **@st.cache_data** e exportação eficiente de múltiplas bases processadas em Excel usando **xlsxwriter**.",
        image: "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_4.png",
        images: [
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_2.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_3.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_4.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_5.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_6.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_7.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_8.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_9.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_10.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/melhoramento_thum_11.png"
        ],
        imageTitles: [
            "Interface Principal e Upload de Dados",
            "Preview CROQUI e Input de Dados da Testemunha",
            "Download dos Dados Processados, Estatisticas Básicas e Gráfico IMA",
            "Ganho Relativo à Testemunha e HotSpot de IMA por Bloco",
            "Grafico Interativo deMétricas Médias e Radar de Qualidade",
            "Visualização da Distribuição de Variáveis por Histograma",
            "Visualização da Distribuição de Variáveis por Dispersão",
            "Visualização da Distribuição de Variáveis por BoxPlot",
            "Visualização dos Dados em Croqui Espacial",
            "Croqui Interativo com Grid Customizável",
            "Comparação dos Resultados de Forma Interativa e Visual"
        ],
        results: "Consegui consolidar, em um único produto web, todo o processo de análise de experimentos de melhoramento genético que antes era fragmentado e manual. A automação do processamento estatístico, do cálculo de volumes e IMA, da análise de códigos de qualidade, e da integração geoespacial reduziu drasticamente o tempo de análise e padronizou o processo técnico, permitindo que qualquer analista parta diretamente de dados brutos de campo até insights acionáveis e visualizações interativas em poucos cliques. O sistema processa dados experimentais completos, calcula automaticamente todas as métricas florestais relevantes, integra informações espaciais do croqui de campo, e gera múltiplas bases processadas prontas para análise. A visualização geoespacial avançada com grids customizáveis permite análise detalhada intra-parcela, identificando padrões espaciais de performance que não seriam visíveis em análises tradicionais, enquanto as visualizações estatísticas (ganho relativo, heatmaps, gráficos de radar) facilitam a comparação entre materiais genéticos e tomada de decisão.",
        architecture: "Desenhei um sistema monolítico com **frontend Streamlit** expondo interface web interativa com upload de arquivos Excel (dados experimentais e croqui), seleção dinâmica de testemunha a partir dos materiais únicos do arquivo, e processamento on-demand com validação de inputs. O backend processa dados em **Pandas DataFrames**, utilizando funções especializadas para cada etapa: adicionar colunas de códigos de qualidade, calcular fustes válidos, calcular volumes CC e SC usando equações alométricas, calcular IMA considerando espaçamento e idade, agregar dados por Material e Bloco, calcular percentuais e métricas por hectare, e calcular ganho relativo comparado à testemunha. Implementei processamento de croqui espacial que lê Excel com layout de campo, identifica blocos e parcelas, mapeia coordenadas espaciais, e integra com dados experimentais via merge por Parcela. O sistema gera 4 bases processadas principais (Base_01: dados individuais, Base_02: agregações brutas, Base_03: métricas por hectare e percentuais, Base_FINAL: ganho relativo) além de Base_Espacial quando croqui está disponível. Implementei visualizações interativas com **Plotly** organizadas em 5 abas principais: IMA por Material (barras agrupadas CC vs SC), Ganho Relativo (barras com linha de referência e heatmap por blocos), Métricas por Material (seletor dinâmico e gráfico de radar), Distribuição de Variáveis (histogramas, scatter plots com regressão, boxplots), e Análise Geoespacial (visão geral do campo, análise por parcela com filtros, visualização intra-parcela com grids customizáveis). Todo o processamento utiliza cache via **@st.cache_data** e session_state para gerenciar estado da aplicação.",
        technologies: {
            "Frontend": ["Streamlit", "Plotly Express", "Plotly Graph Objects", "HTML/CSS"],
            "Backend & Processamento": ["Python", "Pandas", "NumPy"],
            "Análise Estatística": ["NumPy (cálculos vetorizados)", "Pandas (agregações complexas)", "Regressão Linear (np.polyfit)"],
            "Visualização": ["Plotly Express", "Plotly Graph Objects", "Matplotlib", "Seaborn"],
            "Dados": ["Excel (xlsxwriter)", "CSV", "BytesIO"],
            "Geoespacial": ["Processamento de Croqui", "Mapeamento de Coordenadas", "Análise Espacial"],
            "DevOps": ["Streamlit Server"]
        },
        tags: [
            "Melhoramento Genético",
            "Streamlit",
            "Análise Experimental",
            "Análise Geoespacial",
            "Plotly",
            "Pandas",
            "Análise Florestal",
            "Volume Florestal",
            "IMA",
            "Cálculo Alométrico",
            "Visualização Interativa",
            "Processamento de Croqui",
            "Análise Intra-Parcela",
            "Grid Customizável"
        ]
    },
    {
        id: "florestal-microplanejamento",
        category: "Plataforma Web&Mobile / Offline-First",
        title: "Sistema de Microplanejamento Florestal",
        description: "Plataforma completa de microplanejamento florestal desenvolvida integralmente por mim, com arquitetura híbrida WEB (React) e MOBILE OFFLINE (React + Capacitor + IndexedDB), backend FastAPI com PostgreSQL/PostGIS, sistema de sincronização incremental multi-dispositivo com resolução de conflitos, mapeamento geoespacial interativo com Leaflet, geração de relatórios PDF com mapas e dados cadastrais, e autenticação JWT robusta. O sistema permite criação de projetos florestais, mapeamento de subáreas (Segurança, Meio Ambiente, Estradas, etc.), edição offline completa em campo, sincronização inteligente com merge de dados, e exportação de relatórios técnicos.",
        fullDescription: "Desenvolvi sozinho uma plataforma completa de microplanejamento florestal para florestas, com um painel web (React + FastAPI) para administradores/planejadores e um app mobile offline (React + Capacitor + IndexedDB) para equipes de campo.O backend em FastAPI expõe APIs REST com JWT, usa PostgreSQL/PostGIS para dados geoespaciais em grande escala, versionamento de projetos e fila assíncrona (Redis) para geração de PDFs.O front web traz mapas interativos (Leaflet), desenho e edição de features, filtros por região/fazenda/quadra, estilos de mapeamento e suporte a PWA.O app mobile é offline-first, com sincronização incremental baseada em log de operações, detecção e resolução de conflitos multi-dispositivo e cache de tiles de satélite.A plataforma gera relatórios técnicos em PDF (compilado, planejamento e subáreas) com mapas geoespaciais de alta qualidade e integra grandes bases de inventário florestal corporativo de forma performática.",
        technicalSolution: "Projetei e implementei uma arquitetura multi-camada para uma plataforma de microplanejamento florestal, separando backend em Python, frontend em React (compartilhado entre Web e Mobile) e camada de dados centralizada. No backend, criei APIs organizadas por domínio (autenticação, projetos, sincronização, exportação, dados), com segurança em múltiplas camadas, controle de acesso por perfil (admin/usuário) e trilha de auditoria de todas as operações feitas nos projetos. Os projetos são armazenados em banco relacional com suporte geoespacial e campos flexíveis para geometrias, nomes, filtros e observações, sempre versionados para permitir histórico e sincronização confiável. A sincronização incremental permite que várias equipes e dispositivos trabalhem offline em campo e, depois, enviem suas alterações, com detecção de conflitos entre versões e ferramentas para resolvê-los de forma segura. No frontend, desenvolvi uma aplicação única em React usada tanto no navegador quanto no aplicativo mobile, com telas para login, gestão de projetos, planejamento em mapa e acompanhamento do status das subáreas. No app mobile, implementei uma arquitetura offline-first, com armazenamento local, sincronização em segundo plano, cache de mapas por projeto, criptografia de dados sensíveis e uma interface adaptada para uso em campo (toque, uso com pouca conectividade e indicadores claros de sincronização).",
        image: "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_9.png",
        images: [
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_4.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_3.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_2.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_5.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_1.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_6.png",

            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_11.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_7.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_8.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_9.png",
            "https://raw.githubusercontent.com/Eliohanyp/Portfolio/refs/heads/main/Imagens/microplan_thumb_10.png",
        ],
        imageTitles: [
            "Tela Login",
            "Tela de Projetos",
            "Seleção de Subáreas",
            "Galeria de Estilos",
            "Tela de Edição de Projeto",
            "Modal de Estilos",
            "Extração dePDF",

            "Login Mobile",
            "Tela de Projetos Mobile",
            "Tela de Edição de Projeto Mobile",
            "Visualização de Legenda e Mapa Mobile",
            "Modal de Estilos Mobile",

        ],
        results: "Consegui consolidar, em uma única plataforma unificada, todo o fluxo de microplanejamento florestal que antes era fragmentado entre sistemas desktop, planilhas Excel e processos manuais. A arquitetura offline-first do mobile permite que equipes de campo trabalhem completamente desconectadas por dias ou semanas, mapeando subáreas, desenhando features geoespaciais (pontos de segurança, estradas, áreas de preservação, etc.), completando categorias, e adicionando observações, tudo persistido localmente com garantia de não-perda de dados mesmo em caso de crash ou bateria descarregada. Quando há conectividade, a sincronização incremental envia apenas as operações realizadas (deltas), não o projeto completo, reduzindo drasticamente uso de banda e tempo de sync mesmo para projetos com milhares de features. O sistema de versionamento e detecção de conflitos garante que múltiplos dispositivos possam editar o mesmo projeto simultaneamente sem perda de dados, com UI clara para resolução manual quando necessário. A geração assíncrona de PDFs via job queue permite que usuários solicitem relatórios e continuem trabalhando enquanto o processamento acontece em background, recebendo notificação quando pronto. O processamento de dados massivos (centenas de milhares de quadras) é otimizado com índices geoespaciais no PostgreSQL, queries eficientes usando PostGIS para filtros espaciais, e cache de dados frequentes no frontend. A plataforma web permite que administradores criem projetos, definam filtros de região/fazenda, acompanhem progresso de mapeamento em tempo real, e exportem relatórios técnicos completos para documentação e planejamento operacional. A experiência do usuário mobile é fluida mesmo offline, com mapas interativos carregando tiles do cache, desenho responsivo, e feedback imediato de todas as ações, criando uma experiência nativa-like apesar de ser tecnologia web.",
        architecture: "Desenhei uma arquitetura **híbrida cliente-servidor** com separação clara de responsabilidades. **BACKEND**: FastAPI rodando em uvicorn (ou Gunicorn + UvicornWorker em produção) expondo APIs RESTful na porta 8000, estrutura modular com routers separados (auth.py para autenticação JWT, projects.py para CRUD de projetos, sync.py para sincronização incremental, export.py para geração de PDFs, data.py para consultas de quadras/estilos), services layer com lógica de negócio (project_storage.py para persistência PostgreSQL com merge inteligente, sync_service.py para processamento de operações, pdf_generator.py para geração de relatórios, subarea_service.py para gestão de status de subáreas), database layer com pool de conexões thread-safe e circuit breaker, e background workers processando fila de jobs Redis para PDFs pesados. A segurança implementa middleware em camadas: CORS configurável por ambiente (desenvolvimento permite *, produção exige origens específicas), TrustedHost para prevenir host header attacks, Rate Limiting via slowapi (60 req/min configurável), logging estruturado JSON com request_id para rastreabilidade, e autenticação JWT com refresh token rotation. O banco PostgreSQL usa schema com tabelas principais: `projects` (project_id TEXT PK, project_name, filters_json JSONB, observations_json JSONB, elements_geojson JSONB, names_json JSONB, metadata_json JSONB, server_version INTEGER, created_at, updated_at), `project_operations` (id SERIAL PK, project_id, op_id UNIQUE, device_id, entity_type, entity_id, action, payload JSONB, metadata JSONB, client_version, server_version, status, created_at) com índices em project_id e server_version para queries rápidas, `subarea_mapping_status` (project_id, mapping_category PK, status, completed_at, user_id) para tracking de progresso, `users` (id, email UNIQUE, password_hash, full_name, unidade, role, security_question_hash, security_answer_hash) com migrations automáticas. **FRONTEND WEB**: Build estático React servido por Nginx (ou qualquer servidor web) com SPA routing (todas as rotas redirecionam para index.html), Service Worker para cache de assets (PWA), proxy reverso no Nginx para /api/* apontando para backend FastAPI, e CDN opcional para assets estáticos. O estado da aplicação gerencia auth (tokens em localStorage, refresh automático), currentProject (projeto em edição com todas as features), allQuadras (cache de quadras carregadas), styles (estilos de mapeamento), offlineMode (flag para modo visitante), e sync status (pending operations, last sync time). Os mapas Leaflet renderizam GeoJSON de quadras como camada base, features desenhados como overlays interativos, e tiles de satélite como background opcional, com controles de zoom, pan, e ferramentas de desenho integradas. **FRONTEND MOBILE**: Build React idêntico ao web com flag `REACT_APP_BUILD_TARGET=MOBILE` ativando comportamentos offline, empacotado via Capacitor gerando projeto Android nativo, assets (HTML/CSS/JS) copiados para `android/app/src/main/assets/public/`, configuração Android permitindo cleartext HTTP em dev e HTTPS em prod, e possibilidade de adicionar plugins nativos (câmera, GPS, etc.) no futuro. O IndexedDB (Dexie) persiste dados localmente com schema versionado permitindo migrações automáticas, transações ACID para operações atômicas, queries indexadas para performance, e limites de quota respeitados (geralmente 50-80% do disco disponível). A sincronização offline implementa state machine: `idle` (sem operações pendentes) → `pending` (operações aguardando sync) → `syncing` (enviando/recebendo) → `applied` (sucesso) ou `conflict` (requer resolução) ou `failed` (retry com backoff exponencial). O cache de tiles funciona com estratégia de pré-cacheamento: ao baixar projeto, calcula área de interesse (bounds das quadras), determina tiles necessários para zoom levels 12-16 (cobertura completa da área), baixa cada tile via fetch, armazena blob no IndexedDB com chave `project_id + url`, e custom Leaflet tile layer consulta IndexedDB antes de fazer HTTP request, fallback para online se tile não encontrado no cache.",
        technologies: {
"Backend": [
            "FastAPI (async web framework)",
            "Python 3.10+",
            "PostgreSQL 12+ com PostGIS",
            "psycopg2-binary (driver PostgreSQL)",
            "SQLAlchemy (ORM opcional)",
            "Uvicorn/Gunicorn (ASGI server)",
            "Redis (job queue)",
            "python-jose[cryptography] (JWT)",
            "passlib[bcrypt] (password hashing)",
            "pydantic-settings (configuração)",
            "slowapi (rate limiting)",
            "jaydebeapi (JDBC para bancos corporativos)"
        ],
        "Frontend Web": [
            "React 18.2",
            "React Router DOM 7.9",
            "Zustand 5.0 (state management)",
            "Leaflet 1.9.4 (mapas)",
            "react-leaflet 4.0 (bindings React)",
            "leaflet-draw 1.0.4 (desenho)",
            "react-leaflet-draw 0.20.4",
            "@turf/bbox (cálculos geoespaciais)",
            "react-modal (modais)",
            "Service Worker (PWA)",
            "HTML5/CSS3"
        ],
        "Frontend Mobile": [
            "React 18.2 (mesmo código do web)",
            "Capacitor 7.4 (wrapper nativo)",
            "@capacitor/android",
            "@capacitor/core",
            "Dexie.js 4.2 (IndexedDB wrapper)",
            "crypto-js 4.2 (criptografia)",
            "leaflet.offline 3.1 (cache de tiles)",
            "Android SDK (build nativo)"
        ],
        "Processamento de Dados": [
            "Pandas (manipulação de dados)",
            "GeoPandas (dados geoespaciais)",
            "NumPy (computação numérica)",
            "pyproj (transformação de coordenadas)",
            "Shapely (geometrias)",
            "contextily (tiles de satélite para PDFs)"
        ],
        "Geração de PDFs": [
            "ReportLab (layout de PDFs)",
            "Matplotlib (gráficos e mapas)",
            "Pillow/PIL (processamento de imagens)",
            "GeoPandas (renderização geoespacial)"
        ],
        "Banco de Dados": [
            "PostgreSQL 12+ (dados relacionais)",
            "PostGIS (extensão geoespacial)",
            "JSONB (dados flexíveis de projetos)",
            "Índices GIST (queries espaciais)",
            "Índices B-tree (queries por ID/versão)"
        ],
        "Infraestrutura": [
            "Docker & Docker Compose (containerização)",
            "Nginx (reverse proxy e servidor web)",
            "Redis (fila de jobs)",
            "Systemd (gerenciamento de serviços Linux)",
            "Let's Encrypt (SSL/TLS)",
            "Git (controle de versão)"
        ],
        "DevOps & Deploy": [
            "Dockerfile multi-stage (otimização de imagem)",
            "docker-compose.yml (orquestração)",
            "Environment variables (.env)",
            "Health checks (monitoramento)",
            "Logging estruturado JSON",
            "Circuit breaker pattern",
            "Connection pooling"
        ],
        "Segurança": [
            "JWT (JSON Web Tokens)",
            "bcrypt (hash de senhas)",
            "CORS (Cross-Origin Resource Sharing)",
            "Rate Limiting",
            "Trusted Host validation",
            "Checksum SHA256 (integridade de dados)",
            "Criptografia AES (dados sensíveis mobile)",
            "HTTPS/TLS (comunicação criptografada)"
        ]

        },
        tags: [
            "FastAPI",
            "React",
            "PostgreSQL",
            "PostGIS",
            "IndexedDB",
            "Dexie.js",
            "Capacitor",
            "Leaflet",
            "Offline-First",
            "Sincronização Multi-Dispositivo",
            "GIS",
            "GeoJSON",
            "Microplanejamento Florestal",
            "Mapeamento Geoespacial",
            "Cache de Tiles",
            "React Router",
            "Zustand",
            "ReportLab",
            "GeoPandas",
            "Matplotlib",
            "Redis",
            "Docker",
        ]
    }
];

// --- FUNÇÃO 1: Home Page (Digitação e Listagem) ---
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa collapse de descrições em todas as páginas
    initRoleDescriptionCollapse();
    
    // Apenas roda se estiver na Home (tem o elemento typing-text)
    if(document.getElementById('typing-text')) {
        runTypewriter();
        renderProjectsHome();
        initScrollAnimation();
    }
});

function runTypewriter() {
    const textElement = document.getElementById('typing-text');
    const phrases = ["Cientista de Dados.", "Especialista em Floresta 4.0", "Engenheiro de Machine Learning.", "Data Steward (DATABRICKS)", "Desenvolvedor de Software.", "Analista de Dados.", "Especialista em Visão Computacional."];
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

// --- FUNÇÃO: Inicializar Collapse/Expand das Descrições de Cargos ---
function initRoleDescriptionCollapse() {
    const roleDescriptions = document.querySelectorAll('.role-description');
    
    roleDescriptions.forEach((desc) => {
        // Verifica se a descrição é longa o suficiente para precisar de collapse
        const contentHeight = desc.scrollHeight;
        const collapsedHeight = 150; // altura máxima quando colapsado
        
        if (contentHeight > collapsedHeight) {
            // Adiciona classe collapsed por padrão
            desc.classList.add('collapsed');
            
            // Cria botão de toggle
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'role-toggle-btn';
            toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Ver mais';
            toggleBtn.setAttribute('aria-label', 'Expandir descrição');
            
            // Adiciona evento de clique
            toggleBtn.addEventListener('click', () => {
                const isCollapsed = desc.classList.contains('collapsed');
                
                if (isCollapsed) {
                    desc.classList.remove('collapsed');
                    desc.classList.add('expanded');
                    toggleBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Ver menos';
                    toggleBtn.setAttribute('aria-label', 'Minimizar descrição');
                } else {
                    desc.classList.remove('expanded');
                    desc.classList.add('collapsed');
                    toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Ver mais';
                    toggleBtn.setAttribute('aria-label', 'Expandir descrição');
                }
            });
            
            // Adiciona botão após a descrição
            desc.parentElement.appendChild(toggleBtn);
        }
    });
}

// --- FUNÇÃO 2: Página de Detalhes (Carregar Projeto com Navegação) ---
function loadProjectDetails() {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    
    // Encontra o índice do projeto atual no array
    const currentIndex = projectsData.findIndex(p => p.id === projectId);
    const project = projectsData[currentIndex];

    if (project) {
        // 1. Preenche os dados do projeto atual
        document.getElementById('detail-title').innerText = project.title;
        document.getElementById('detail-bg').style.backgroundImage = `url('${project.image}')`;
        
        const formatText = (text) => text ? text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') : '';
        document.getElementById('detail-desc').innerHTML = formatText(project.fullDescription);
        document.getElementById('detail-tech').innerHTML = formatText(project.technicalSolution);
        
        document.getElementById('detail-desc').classList.add('tech-description');
        document.getElementById('detail-tech').classList.add('tech-description');

        // Galeria de Imagens
        const galleryContainer = document.getElementById('detail-gallery');
        if (galleryContainer && project.images && project.images.length > 0) {
            galleryContainer.innerHTML = '';
            project.images.forEach((img, index) => {
                const imgDiv = document.createElement('div');
                imgDiv.className = 'gallery-item';
                
                // Suporta tanto string (URL) quanto objeto {url, title}
                let imgUrl, imgTitle;
                if (typeof img === 'string') {
                    imgUrl = img;
                    imgTitle = project.imageTitles && project.imageTitles[index] ? project.imageTitles[index] : `Imagem ${index + 1}`;
                } else {
                    imgUrl = img.url || img;
                    imgTitle = img.title || `Imagem ${index + 1}`;
                }
                
                imgDiv.innerHTML = `
                    <img src="${imgUrl}" alt="${project.title} - ${imgTitle}" loading="lazy" data-index="${index}">
                    <div class="gallery-item-title">${imgTitle}</div>
                `;
                
                // Adiciona event listener para abrir lightbox
                const imgElement = imgDiv.querySelector('img');
                imgElement.style.cursor = 'pointer';
                imgElement.addEventListener('click', () => {
                    openLightbox(project.images, project.imageTitles || [], index);
                });
                
                galleryContainer.appendChild(imgDiv);
            });
        } else if (galleryContainer) {
            galleryContainer.style.display = 'none';
        }

        // Resultados
        const resultsContainer = document.getElementById('detail-results');
        if (resultsContainer) {
            if (project.results) {
                resultsContainer.innerHTML = formatText(project.results);
                resultsContainer.parentElement.style.display = 'block';
            } else {
                resultsContainer.parentElement.style.display = 'none';
            }
        }

        // Arquitetura
        const archContainer = document.getElementById('detail-architecture');
        if (archContainer) {
            if (project.architecture) {
                archContainer.innerHTML = formatText(project.architecture);
                archContainer.parentElement.style.display = 'block';
            } else {
                archContainer.parentElement.style.display = 'none';
            }
        }

        // Tecnologias
        const techContainer = document.getElementById('detail-technologies');
        if (techContainer && project.technologies) {
            techContainer.innerHTML = '';
            Object.entries(project.technologies).forEach(([category, techs]) => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'tech-category';
                categoryDiv.innerHTML = `
                    <h4>${category}</h4>
                    <div class="tech-items">
                        ${techs.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                    </div>
                `;
                techContainer.appendChild(categoryDiv);
            });
            techContainer.parentElement.style.display = 'block';
        } else if (techContainer) {
            techContainer.parentElement.style.display = 'none';
        }

        const tagsContainer = document.getElementById('detail-tags');
        tagsContainer.innerHTML = ''; 
        project.tags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            tagsContainer.appendChild(span);
        });

        document.title = `${project.title} | Eliohan Portfolio`;

        // 2. Lógica das Setas (Carrossel)
        const totalProjects = projectsData.length;
        
        // Índice Anterior (se for 0, vai para o último)
        const prevIndex = (currentIndex - 1 + totalProjects) % totalProjects;
        const prevProject = projectsData[prevIndex];
        document.getElementById('prev-project').href = `projeto.html?id=${prevProject.id}`;
        
        // Índice Próximo (se for o último, vai para o 0)
        const nextIndex = (currentIndex + 1) % totalProjects;
        const nextProject = projectsData[nextIndex];
        document.getElementById('next-project').href = `projeto.html?id=${nextProject.id}`;

    } else {
        document.getElementById('detail-title').innerText = "Projeto não encontrado";
        document.querySelector('.project-nav').style.display = 'none'; // Esconde setas se der erro
    }
}

// --- FUNÇÃO 3: Lightbox para Galeria de Imagens ---
let currentLightboxIndex = 0;
let lightboxImages = [];
let lightboxTitles = [];

function openLightbox(images, titles, index) {
    lightboxImages = images;
    lightboxTitles = titles;
    currentLightboxIndex = index;
    
    const modal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    // Suporta tanto string quanto objeto
    let imgUrl, imgTitle;
    if (typeof images[index] === 'string') {
        imgUrl = images[index];
        imgTitle = titles[index] || `Imagem ${index + 1}`;
    } else {
        imgUrl = images[index].url || images[index];
        imgTitle = images[index].title || titles[index] || `Imagem ${index + 1}`;
    }
    
    lightboxImg.src = imgUrl;
    lightboxCaption.textContent = imgTitle;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Previne scroll do body
    
    // Atualiza visibilidade das setas
    updateLightboxArrows();
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restaura scroll
}

function showNextImage() {
    if (lightboxImages.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
    updateLightboxImage();
}

function showPrevImage() {
    if (lightboxImages.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    let imgUrl, imgTitle;
    if (typeof lightboxImages[currentLightboxIndex] === 'string') {
        imgUrl = lightboxImages[currentLightboxIndex];
        imgTitle = lightboxTitles[currentLightboxIndex] || `Imagem ${currentLightboxIndex + 1}`;
    } else {
        imgUrl = lightboxImages[currentLightboxIndex].url || lightboxImages[currentLightboxIndex];
        imgTitle = lightboxImages[currentLightboxIndex].title || lightboxTitles[currentLightboxIndex] || `Imagem ${currentLightboxIndex + 1}`;
    }
    
    lightboxImg.src = imgUrl;
    lightboxCaption.textContent = imgTitle;
    updateLightboxArrows();
}

function updateLightboxArrows() {
    const prevArrow = document.querySelector('.lightbox-prev');
    const nextArrow = document.querySelector('.lightbox-next');
    
    if (lightboxImages.length <= 1) {
        prevArrow.style.display = 'none';
        nextArrow.style.display = 'none';
    } else {
        prevArrow.style.display = 'flex';
        nextArrow.style.display = 'flex';
    }
}

// Event Listeners para o Lightbox
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('lightbox-modal');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showPrevImage();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextImage();
        });
    }
    
    // Fechar ao clicar fora da imagem
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('lightbox-content')) {
                closeLightbox();
            }
        });
    }
    
    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (modal && modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
});

