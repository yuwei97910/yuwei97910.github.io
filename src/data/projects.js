// Each entry renders as a card on the Projects page (and featured ones on Home).
const projects = [
  {
    title: 'Edge AI Enablement Platform',
    description:
      'An edge AI application enablement platform concept with Python SDKs, control APIs, MCP capabilities, device-control flows, and event streams.',
    tags: ['Product Ownership', 'MCP', 'Python SDK', 'Kafka', 'MQTT', 'IPC-CFX'],
    image: '/images/safe-edge-ai-architecture.svg',
    imageAlt: 'Public-safe Edge AI platform architecture diagram',
    repo: null,
    link: null,
    featured: true,
  },
  {
    title: 'Production Intelligence Services',
    description:
      'Real-time equipment status and production indicator services for OEE, UPH, cycle time, ATT, utilization, and direct-pass rate.',
    tags: ['Golang', 'Redis', 'MongoDB', 'REST APIs', 'OEE', 'Manufacturing'],
    image: '/images/safe-production-intelligence.svg',
    imageAlt: 'Public-safe production intelligence data architecture diagram',
    repo: null,
    link: null,
    featured: true,
  },
  {
    title: 'Golang Edge API',
    description:
      'Unified edge application API pattern for production-line information, equipment status monitoring, upstream notifications, and device-control workflows.',
    tags: ['Golang', 'Gin', 'PostgreSQL', 'RabbitMQ', 'Keycloak', 'OAuth2'],
    image: '/images/safe-edge-api.svg',
    imageAlt: 'Public-safe Golang Edge API architecture diagram',
    repo: null,
    link: null,
    featured: false,
  },
  {
    title: 'AI Bottleneck Analysis',
    description:
      'Prototype pattern combining production indicators, equipment events, feature engineering, automated modeling, and LLM-generated root-cause reports.',
    tags: ['LLM', 'Kafka', 'AutoML', 'Feature Engineering', 'Bottleneck Analysis'],
    image: '/images/safe-ai-bottleneck-pipeline.svg',
    imageAlt: 'Public-safe AI bottleneck analysis pipeline diagram',
    repo: null,
    link: null,
    featured: false,
  },
  {
    title: 'Travel Assistant Database App',
    description:
      'Django and MySQL travel search application backed by 1M+ scraped records across users, comments, accommodations, restaurants, and tourist information, with query optimization through indexes, stored procedures, and triggers.',
    tags: ['Django', 'MySQL', 'GCP', 'Web Scraping', 'Database Design'],
    image: '/images/safe-travel-assistant.svg',
    imageAlt: 'Travel Assistant database architecture diagram',
    repo: 'https://github.com/yuwei97910/Travel-Assistant',
    link: null,
    featured: false,
  },
  {
    title: 'Classic Movie Recommender',
    description:
      'Python and Dash recommendation app using KNN classification and SVD, with model comparison and hyperparameter tuning using RMSE.',
    tags: ['Python', 'Dash', 'KNN', 'SVD', 'Recommendation Systems'],
    image: '/images/recommender-architecture.svg',
    imageAlt: 'Movie recommender architecture diagram',
    repo: 'https://github.com/yuwei97910/Classical-Movie-Recommend-System',
    link: null,
    featured: false,
  },
  {
    title: 'Operations Analytics Competition',
    description:
      'Team analytics project using Python and R for feature engineering, hypothesis testing, visualization, and machine learning models including random forest and XGBoost.',
    tags: ['Python', 'R', 'XGBoost', 'Random Forest', 'Data Analysis'],
    image: '/images/analytics-modeling-flow.svg',
    imageAlt: 'Analytics and modeling workflow diagram',
    repo: null,
    link: null,
    featured: false,
  },
  {
    title: 'Manufacturing Data Science Learning',
    description:
      'Course project and analysis repository connecting manufacturing data science concepts with notebooks, exploratory analysis, and process-oriented modeling practice.',
    tags: ['Jupyter Notebook', 'Manufacturing Data Science', 'Python', 'Analysis'],
    repo: 'https://github.com/yuwei97910/Data-Science-for-Manufacturing-Learning',
    link: null,
    featured: false,
  },
  {
    title: 'THSR and Housing Price Analysis',
    description:
      'Econometrics term paper studying high-speed rail location effects on housing prices using spatial features, fixed effects, hedonic pricing, and Box-Cox transformation.',
    tags: ['R', 'Econometrics', 'Spatial Analysis', 'Regression'],
    repo: 'https://github.com/yuwei97910/Econometrics_TermPaper',
    link: null,
    featured: false,
  },
  {
    title: 'Viterbi Algorithm in Python',
    description:
      'Python implementation of the Viterbi algorithm, built as a compact exercise in probabilistic sequence modeling and dynamic programming.',
    tags: ['Python', 'Algorithms', 'Dynamic Programming', 'NLP'],
    repo: 'https://github.com/yuwei97910/viterbi-algorithm-with-python',
    link: null,
    featured: false,
  },
  {
    title: 'CS438 Networking Practice',
    description:
      'C++ networking coursework repository covering HTTP client/server behavior and TCP-like transport protocol implementation practice.',
    tags: ['C++', 'Networking', 'HTTP', 'Transport Protocols'],
    repo: 'https://github.com/yuwei97910/cs438_working_repositry',
    link: null,
    featured: false,
  },
  {
    title: 'CC Board Game',
    description:
      'Python board-game project connected to interactive behavioral-game experimentation and partial-information decision-making.',
    tags: ['Python', 'Board Games', 'Experiment Design', 'AI Players'],
    repo: 'https://github.com/yuwei97910/CC-Board-Game',
    link: null,
    featured: false,
  },
  {
    title: 'Statistical Learning Coursework',
    description:
      'Coursework repository with projects, notes, assignments, and model practice across statistical learning topics.',
    tags: ['Jupyter Notebook', 'Statistical Learning', 'Machine Learning'],
    repo: 'https://github.com/yuwei97910/StatisticalLearning',
    link: null,
    featured: false,
  },
  {
    title: 'Text Mining Practice',
    description:
      'Notebook-based text mining practice connected to NLP, feature extraction, and applied analytics fundamentals.',
    tags: ['Jupyter Notebook', 'Text Mining', 'NLP', 'Analytics'],
    repo: 'https://github.com/yuwei97910/Text-Mining-Practice',
    link: null,
    featured: false,
  },
  {
    title: 'MapleCrush',
    description:
      'A simple C++ game project that captures early object-oriented programming and interactive application practice.',
    tags: ['C++', 'Game', 'OOP'],
    repo: 'https://github.com/yuwei97910/MapleCrush',
    link: null,
    featured: false,
  },
  {
    title: 'Personal Website',
    description:
      'This site, built with React, Vite, and Material UI, deployed to GitHub Pages with a Dockerized local preview workflow.',
    tags: ['React', 'Vite', 'Material UI', 'GitHub Pages', 'Docker'],
    repo: 'https://github.com/yuwei97910/yuwei97910.github.io',
    link: 'https://yuwei97910.github.io',
    featured: false,
  },
];

export default projects;
