export const servicesData = [
  {
    id: 'autonomous-industrial-intelligence',
    title: 'Autonomous Industrial Intelligence',
    icon: 'fas fa-industry',
    heroTitle: 'Autonomous Industrial Intelligence',
    heroSubtitle: 'AI-Driven Industrial Operations',
    description: 'Deploy AI-driven systems for predictive maintenance, anomaly detection, process optimization, and operational intelligence across manufacturing and process industries.',
    image: 'https://images.unsplash.com/photo-1561471828-96e54774b225?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      { title: 'Predictive Maintenance', description: 'AI-powered equipment failure prediction to reduce unplanned downtime.' },
      { title: 'Process Optimization', description: 'Real-time optimization of industrial processes for maximum efficiency.' },
      { title: 'Asset Performance Management', description: 'Comprehensive monitoring and management of critical industrial assets.' }
    ],
    outcomes: ['Reduced unplanned downtime', 'Improved operational efficiency', 'Enhanced asset reliability']
  },
  {
    id: 'agentic-ai-knowledge-systems',
    title: 'Agentic AI & Knowledge Systems',
    icon: 'fas fa-brain',
    heroTitle: 'Agentic AI & Knowledge Systems',
    heroSubtitle: 'Industrial Document Intelligence',
    description: 'Transform industrial documents such as SOPs, P&IDs, PFDs, manuals, and datasheets into intelligent AI copilots using Agentic RAG, knowledge graphs, and domain-aware language models.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      { title: 'Agentic RAG', description: 'Retrieval-augmented generation with autonomous agent capabilities.' },
      { title: 'Knowledge Graphs', description: 'Structured knowledge representation for industrial domains.' },
      { title: 'Industrial Copilot', description: 'AI-powered assistants specialized for industrial environments.' }
    ],
    outcomes: ['Instant document access', 'Intelligent search', 'Automated compliance']
  },
  {
    id: 'predictive-prescriptive-optimization',
    title: 'Predictive & Prescriptive Optimization',
    icon: 'fas fa-chart-line',
    heroTitle: 'Predictive & Prescriptive Optimization',
    heroSubtitle: 'Data-Driven Decision Making',
    description: 'Leverage forecasting, anomaly detection, and optimization models to improve throughput, reduce downtime, enhance quality, and drive measurable operational ROI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      { title: 'Time-Series Forecasting', description: 'Accurate predictions using advanced multivariate models.' },
      { title: 'Anomaly Detection', description: 'Real-time identification of deviations from normal operations.' },
      { title: 'Yield Optimization', description: 'Data-driven approaches to maximize production output.' }
    ],
    outcomes: ['Improved throughput', 'Reduced defects', 'Measurable ROI']
  },
  {
    id: 'quantum-inspired-decision-intelligence',
    title: 'Quantum-Inspired Decision Intelligence',
    icon: 'fas fa-atom',
    heroTitle: 'Quantum-Inspired Decision Intelligence',
    heroSubtitle: 'Advanced Optimization',
    description: 'Apply advanced optimization techniques and quantum-inspired algorithms to solve complex industrial scheduling, resource allocation, and operational planning problems.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      { title: 'QUBO-inspired Optimization', description: 'Quantum-inspired formulations for complex optimization problems.' },
      { title: 'Scheduling', description: 'Intelligent scheduling for industrial operations.' },
      { title: 'Resource Allocation', description: 'Optimal distribution of resources across operations.' }
    ],
    outcomes: ['Optimal scheduling', 'Resource efficiency', 'Cost reduction']
  },
];

export const getServiceById = (id) => servicesData.find(s => s.id === id);
