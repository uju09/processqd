export const servicesData = [
  {
    id: 'implementation-integration',
    title: 'Implementation & Integration',
    icon: 'fa-network-wired',
    description: 'Seamlessly deploy ProcessQ Dynamics within your existing ecosystem. Our architects specialize in integrating our platforms with legacy SCADA systems, EMRs, proprietary historians, and complex cloud architectures with zero operational downtime.',
    features: [
      { title: 'Architecture Design & Validation', description: 'Comprehensive system architecture planning and validation' },
      { title: 'Legacy System Data Migration', description: 'Secure migration from legacy systems and databases' },
      { title: 'Custom API & Webhook Development', description: 'Tailored integration solutions for unique requirements' }
    ],
    ctaText: 'Learn about implementation'
  },
  {
    id: 'applied-ai-custom-modeling',
    title: 'Applied AI & Custom Modeling',
    icon: 'fa-brain',
    description: 'Out-of-the-box algorithms are a starting point. Our data science team works directly with your subject matter experts to fine-tune our predictive models using your proprietary historical data, ensuring hyper-accurate anomaly detection.',
    features: [
      { title: 'Custom ML Pipeline Creation', description: 'End-to-end machine learning pipeline development' },
      { title: 'Model Tuning for Industrial Assets', description: 'Fine-tuning for niche industrial equipment and processes' },
      { title: 'Algorithmic Drift Monitoring', description: 'Continuous monitoring and recalibration of models' }
    ],
    ctaText: 'Explore custom AI solutions'
  },
  {
    id: 'managed-intelligence-operations',
    title: 'Managed Intelligence Operations',
    icon: 'fa-headset',
    description: 'Augment your internal teams with our 24/7 managed services. We monitor your ProcessQ instances, triage predictive alerts, and actively update your CAPA frameworks so your team can focus on strategic growth instead of daily operations.',
    features: [
      { title: '24/7/365 Proactive Monitoring', description: 'Round-the-clock system surveillance and alerting' },
      { title: 'Level 1 and Level 2 Incident Triage', description: 'Multi-tier support for rapid issue resolution' },
      { title: 'Dedicated Technical Account Management', description: 'Personalized support and optimization guidance' }
    ],
    ctaText: 'View managed service tiers'
  },
  {
    id: 'digital-transformation-consulting',
    title: 'Digital Transformation Consulting',
    icon: 'fa-map-marked-alt',
    description: 'Before deploying software, you need a strategy. Our consultants help map your organizational journey from siloed, reactive operations to a fully contextualized, proactive digital enterprise, complete with ROI modeling.',
    features: [
      { title: 'Data Maturity & Readiness Assessments', description: 'Comprehensive evaluation of organizational capabilities' },
      { title: 'Change Management & User Adoption', description: 'Strategies for smooth transition and user onboarding' },
      { title: 'Enterprise-Wide Deployment Roadmapping', description: ' phased implementation planning and execution' }
    ],
    ctaText: 'Schedule an assessment'
  }
];

export const methodologySteps = [
  {
    step: 1,
    title: 'Discovery & Design',
    description: 'We audit your current data architecture, identify critical operational bottlenecks, and design a tailored deployment blueprint with clear success metrics.'
  },
  {
    step: 2,
    title: 'Data Integration',
    description: 'Securely connecting our platforms to your live telemetry, historical databases, and unstructured engineering documentation.'
  },
  {
    step: 3,
    title: 'Model Tuning',
    description: 'Training our predictive engines and context graphs on your specific environmental variables to ensure high-fidelity, low-noise alerting.'
  },
  {
    step: 4,
    title: 'Go-Live & Optimize',
    description: 'Transitioning to active monitoring, training your personnel, and continuously refining system parameters based on real-world operational feedback.'
  }
];

export const getServiceById = (id) => servicesData.find(s => s.id === id);