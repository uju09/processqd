export const solutionsData = [
  {
    id: 'health-monitoring',
    title: 'Next-Generation Health Monitoring',
    category: 'Revolutionizing Care',
    subtitle: 'Next-Generation Health Monitoring',
    description: [
      'At ProcessQ Dynamics, we believe healthcare shouldn\'t be reactive. Waiting for symptoms to escalate is a legacy approach. We are shifting the paradigm from crisis management to continuous, intelligent, and proactive care.',
      'Our state-of-the-art platform bridges the gap between patients and providers, transforming raw physiological data into actionable, life-saving insights in real time to provide a 24/7 safety net.'
    ],
    features: [
      {
        icon: 'fa-heartbeat',
        title: 'Continuous, Clinical-Grade Tracking',
        description: 'Seamlessly monitor vital signs—including HRV, blood oxygenation, ECG trends, and respiratory metrics—without disrupting the patient\'s daily routine.'
      },
      {
        icon: 'fa-chart-line',
        title: 'Predictive Anomaly Detection',
        description: 'Smart algorithms analyze historical baselines to detect subtle deviations before they turn into emergencies, significantly reducing hospital readmissions.'
      },
      {
        icon: 'fa-bell',
        title: 'Proactive Clinical Alerts',
        description: 'Filter out noise and send high-priority, contextual alerts to care teams only when immediate intervention is needed.'
      },
      {
        icon: 'fa-user-shield',
        title: 'Empowered Patient Autonomy',
        description: 'An intuitive dashboard gives patients a clear, jargon-free understanding of their health trends, fostering better adherence to care plans.'
      }
    ],
    graphicType: 'health-monitoring'
  },
  {
    id: 'crowd-tracking',
    title: 'Next-Generation Crowd Tracking',
    category: 'Intelligent Spatial Dynamics',
    subtitle: 'Next-Generation Crowd Tracking',
    description: [
      'Managing physical spaces has never been more complex. From airports to smart cities, understanding how people move is key to operational excellence and public safety.',
      'Moving beyond simple legacy foot-traffic counters, our advanced Crowd Tracking platform fuses machine vision, sensor networks, and predictive analytics to provide a comprehensive, privacy-first understanding of crowd dynamics.'
    ],
    features: [
      {
        icon: 'fa-map-marked-alt',
        title: 'Real-Time Flow & Density Mapping',
        description: 'Visualize crowd movement instantly with dynamic heatmaps and directional flow vectors to manage spatial capacity actively.'
      },
      {
        icon: 'fa-people-arrows',
        title: 'Predictive Queue Management',
        description: 'Move from reactive control to proactive management. Alert staff to growing lines at checkpoints minutes before they stall.'
      },
      {
        icon: 'fa-user-secret',
        title: 'Privacy-First Architecture',
        description: 'Built with privacy by design. Process behavioural telemetry without ever storing personally identifiable information (PII) or facial data.'
      },
      {
        icon: 'fa-broadcast-tower',
        title: 'Operational Trigger Alerts',
        description: 'Seamlessly integrate to trigger automated responses—dispatching staff, opening lanes, or updating digital signage.'
      }
    ],
    graphicType: 'crowd-tracking'
  },
  {
    id: 'autonomous-sre',
    title: 'Autonomous Intelligence SRE',
    category: 'True Operational Self-Healing',
    subtitle: 'Autonomous Intelligence SRE',
    description: [
      'In modern IT, finding a glitch is easy—but preventing it is an uphill battle. Traditional tools swamp teams with alerts, creating a reactive cycle of putting out fires.',
      'We\'ve built the industry\'s first Autonomous Intelligence Site Reliability Engineer (AISRE). Fusing advanced machine learning with a rigorous CAPA framework, our digital SRE permanently eliminates systemic operational failures.'
    ],
    features: [
      {
        icon: 'fa-microchip',
        title: 'Intelligent Root Cause Diagnostics',
        description: 'Correlate millions of system events, telemetry, and past tickets to isolate exact technical root causes in seconds, bypassing hours of manual bridge calls.'
      },
      {
        icon: 'fa-tools',
        title: 'Automated Corrective Actions',
        description: 'Securely execute precise, deterministic remediation scripts—like rollback deployments or resource throttling—to restore services autonomously.'
      },
      {
        icon: 'fa-shield-alt',
        title: 'Dynamic Preventive Engineering',
        description: 'Analyze long-term failure trends to flag vulnerabilities, proactively recommending or drafting Infrastructure-as-Code (IaC) updates.'
      },
      {
        icon: 'fa-file-alt',
        title: 'Self-Generated Post-Mortems',
        description: 'Automatically document the entire incident lifecycle into clean, compliance-ready CAPA reports.'
      }
    ],
    graphicType: 'autonomous-sre'
  },
  {
    id: 'contextualized-data',
    title: 'Contextualized Data Processing',
    category: 'Giving Data a Sense of Place',
    subtitle: 'Contextualized Data Processing',
    description: [
      'Modern industrial plants are drowning in data, yet starving for context. A sensor reading of 180°C on an asset is meaningless in isolation. It only matters if you know what that asset is and its operating limits.',
      'We solve the industrial "context gap." Our engine ingests, parses, and fuses your unstructured engineering documents (P&IDs, SOPs) with live telemetry, transforming isolated silos into an interconnected semantic map.'
    ],
    features: [
      {
        icon: 'fa-file-invoice',
        title: 'Automated Document Ingestion',
        description: 'Powered by domain-aware vision and language models, we read complex schematics, extracting assets, tags, and connections with pinpoint accuracy.'
      },
      {
        icon: 'fa-project-diagram',
        title: 'Dynamic Knowledge Graph',
        description: 'Build a living digital twin where every live sensor tag is permanently mapped to its technical specs, safety limits, and physical process flow.'
      },
      {
        icon: 'fa-layer-group',
        title: 'Context-Aware Enrichment',
        description: 'A single anomaly alert is automatically packaged with relevant P&ID views, troubleshooting guides, and recent shift logs.'
      },
      {
        icon: 'fa-brain',
        title: 'Downstream AI Readiness',
        description: 'By cleaning and contextualizing data structurally, we provide the ground-truth foundation required for Agentic RAG and autonomous applications.'
      }
    ],
    graphicType: 'contextualized-data'
  }
];

export const getSolutionById = (id) => solutionsData.find(s => s.id === id);