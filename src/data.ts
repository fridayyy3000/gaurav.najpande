import { 
  Database, 
  Cpu, 
  Layers,
  Activity, 
  Zap,
  Terminal,
  Search,
  Code2,
  BarChart3,
  Globe,
  BookOpen,
  Box,
  Cloud,
  LineChart,
  Layout,
  Workflow,
  Server,
  Camera,
  Brain,
  PieChart,
  TrendingUp,
  Filter,
  Presentation,
  Braces,
  Settings,
  ShieldCheck,
  Microscope,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';

export const DATA = {
  basics: {
    name: "Gaurav Najpande",
    role: "Graduate Research Assistant | MS Data Science candidate @ ASU",
    location: "Tempe, AZ",
    email: "gnajpand@asu.edu",
    phone: "602-796-9191",
    linkedin: "linkedin.com/in/gauravnajpande/",
    github: "github.com/fridayyy3000",
    googleScholar: "scholar.google.com/citations?user=jLCXMWIAAAAJ&hl=en",
    summary: "MS in Data Science @ Arizona State University | Specializing in Large-Scale Data Transformation, Automated Evaluation, and Robust Table Reasoning.",
    tagline: "NLP Researcher • ML Systems Engineer • Data Scientist",
    roles: [
      "Tinkerer",
      "NLP Researcher",
      "ML Engineer",
      "AI Researcher",
      "Data Scientist"
    ],
    photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
  },
  metrics: [
    { label: "Experiments Run", value: 80000, suffix: "+" },
    { label: "Tables Processed", value: 14000, suffix: "+" },
    { label: "Students Trained", value: 2800, suffix: "+" },
    { label: "Sentence Pairs", value: 90000, suffix: "+" }
  ],
  topImpact: [
    { label: "Resolution Rate", value: "95%", icon: Zap },
    { label: "Manual Coordination", value: "-30%", icon: Activity },
    { label: "System Downtime", value: "-25%", icon: Cpu }
  ],
  news: [
    { date: "May 2025", text: "Joined CoRAl Lab as a Graduate Research Assistant at ASU." },
    { date: "Mar 2025", text: "Started as Learning Technology Communications Aide at TLC at ASU School of Life Sciences." },
    { date: "Aug 2024", text: "Started Master's in Data Science at Arizona State University." },
    { date: "May 2024", text: "Completed tenure as Project Engineer at Technoventor Innovations." },
    { date: "Dec 2023", text: "Promoted to Team Lead at Technoventor Innovations." },
    { date: "May 2023", text: "Started working as Project Engineer at Technoventor Innovations." }
  ],
  quotes: [
    { text: "I am a tinkerer and tech enthusiast with a passion for solving everyday challenges through technology.", author: "Gaurav Najpande" },
    { text: "Driven by curiosity and a hands-on approach, I am always looking for ways to push the boundaries of what technology can achieve.", author: "Gaurav Najpande" }
  ],
  about: "I am a Graduate Research Assistant at Arizona State University's CoRAl Lab, specializing in the intersection of NLP, multimodal reasoning, and scalable ML systems. My research—including work on the DRAGON and QuIeTT frameworks—focuses on making AI systems more data-efficient and robust. I bridge the gap between cutting-edge AI research and production-grade engineering, architecting distributed LLM evaluation infrastructure and agentic pipelines that handle massive datasets. My goal is to build intelligent systems that are as performant in real-world applications as they are in the research lab.",
  projects: [
    {
      title: "Automated Warehouse Planner",
      desc: "Multi-agent pathfinding and task allocation using Answer Set Programming (ASP).",
      stack: ["ASP", "Clingo", "Python"],
      github: "https://github.com/fridayyy3000/Automated-Warehouse-Planner",
      image: "https://picsum.photos/seed/robotics/800/600",
      category: "Logic Programming"
    },
    {
      title: "Yelp Data Intelligence",
      desc: "Distributed Spark SQL ETL pipelines for regional and category-level KPI generation.",
      stack: ["Apache Spark", "Spark SQL", "PostgreSQL"],
      github: "https://github.com/fridayyy3000/Yelp-Arizona-Analysis",
      image: "https://picsum.photos/seed/analytics/800/600",
      category: "Data Engineering"
    },
    {
      title: "Transformer NMT",
      desc: "English-Hindi translation system built with PyTorch and custom tokenization.",
      stack: ["PyTorch", "Transformers", "NLP"],
      github: "https://github.com/fridayyy3000/Transformer-Language-Translation-en-hi",
      image: "https://picsum.photos/seed/translation/800/600",
      category: "Deep Learning"
    },
    {
      title: "Roommate Recommendation",
      desc: "Big Five Personality based recommendation engine for student housing.",
      stack: ["Python", "Scikit-Learn", "Data Analysis"],
      github: "https://github.com/fridayyy3000/Big-Five-Personality-for-Roommate-Recommendation-System",
      image: "https://picsum.photos/seed/social/800/600",
      category: "ML Application"
    },
    {
      title: "Stock Forecast Engine",
      desc: "Time-series forecasting for market trends using advanced predictive modeling.",
      stack: ["Python", "RNN", "LSTMs"],
      github: "https://github.com/fridayyy3000/Stock_forecast",
      image: "https://picsum.photos/seed/finance/800/600",
      category: "Time Series"
    },
    {
      title: "CancerPredictML",
      desc: "Diagnostic ML system for early cancer detection using clinical datasets.",
      stack: ["Python", "Healthcare AI", "Classification"],
      github: "https://github.com/fridayyy3000/CancerPredictML",
      image: "https://picsum.photos/seed/medical/800/600",
      category: "Healthcare AI"
    },
    {
      title: "WASP-IPL Prediction",
      desc: "Cricket match outcome prediction system using historical IPL data.",
      stack: ["Python", "Data Mining", "Sports Analytics"],
      github: "https://github.com/fridayyy3000/WASP-IPL-",
      image: "https://picsum.photos/seed/cricket/800/600",
      category: "Predictive Modeling"
    },
    {
      title: "Sales Forecasting",
      desc: "Business intelligence tool for predicting retail sales trends.",
      stack: ["Python", "Pandas", "Regression"],
      github: "https://github.com/fridayyy3000/sales-forecasting",
      image: "https://picsum.photos/seed/business/800/600",
      category: "Business Intelligence"
    },
    {
      title: "Covid-19 Data Analysis",
      desc: "Global pandemic trend visualization and statistical analysis.",
      stack: ["Python", "Tableau", "Data Viz"],
      github: "https://github.com/fridayyy3000/Covid-19-data-analysis",
      image: "https://picsum.photos/seed/health/800/600",
      category: "Data Analysis"
    },
    {
      title: "ImageClassify CNN",
      desc: "Computer vision system for multi-class image recognition.",
      stack: ["CNN", "TensorFlow", "OpenCV"],
      github: "https://github.com/fridayyy3000/ImageClassify-CNN",
      image: "https://picsum.photos/seed/vision/800/600",
      category: "Computer Vision"
    },
    {
      title: "Churn Analysis ANN",
      desc: "Customer retention prediction using Artificial Neural Networks.",
      stack: ["ANN", "Deep Learning", "Keras"],
      github: "https://github.com/fridayyy3000/ChurnAnalysis-ANN",
      image: "https://picsum.photos/seed/network/800/600",
      category: "Deep Learning"
    },
    {
      title: "StockPrice RNN",
      desc: "Time-series forecasting using Recurrent Neural Networks.",
      stack: ["RNN", "Python", "Finance"],
      github: "https://github.com/fridayyy3000/StockPricePrediction-RNN",
      image: "https://picsum.photos/seed/chart/800/600",
      category: "Time Series"
    },
    {
      title: "Predictive Modeling Collection",
      desc: "A comprehensive collection of machine learning models for predicting house pricing, TV pricing, and salary values using regression techniques.",
      stack: ["Python", "Scikit-Learn", "Matplotlib", "Jupyter"],
      github: "https://github.com/fridayyy3000/Machine-Learning-Projects-Predictive-Modeling",
      image: "https://picsum.photos/seed/algorithm/800/600",
      category: "Machine Learning"
    }
  ],
  research: [
    {
      title: "DRAGON: A Benchmark for Evidence-Grounded Visual Reasoning over Diagrams",
      status: "2024",
      idea: "A benchmark for evidence-grounded diagram reasoning with 11,664 annotated QA instances across charts, maps, infographics, circuits, and scientific diagrams.",
      contribution: "Released a 2,445-instance human-verified test set and evaluation framework for VLM grounding.",
      link: "https://arxiv.org/abs/2604.25231"
    },
    {
      title: "QUIETT: Query-Independent Table Transformation for Robust Table Reasoning",
      status: "2024",
      idea: "A query-independent table transformation framework that converts semi-structured tables into lossless, SQL-ready canonical representations.",
      contribution: "Consistent cross-model improvements evaluated on four major QA benchmarks.",
      link: "https://github.com/fridayyy3000/coral-lab-asu.github.io"
    },
    {
      title: "Wearable, Non-invasive, Nano-material based Glucose Sensing: A Review",
      status: "2021",
      idea: "A comprehensive review of wearable, non-invasive glucose sensing technologies using nano-materials.",
      contribution: "Analyzed various sensing mechanisms and material properties for next-generation health monitoring.",
      link: "https://www.neuroquantology.com/"
    }
  ],
  education: [
    {
      degree: "Master of Science in Data Science, Analytics and Engineering",
      school: "Arizona State University",
      period: "2024 – 2026",
      location: "Tempe, AZ"
    },
    {
      degree: "Bachelor of Engineering in Electronics (Minor in Computer Science)",
      school: "Shri Ramdeobaba College of Engineering",
      period: "2019 – 2023",
      location: "Nagpur, India"
    }
  ],
  experience: [
    {
      role: "Graduate Research Assistant",
      org: "CoRAl Lab, Arizona State University",
      period: "May 2025 – Present",
      location: "Tempe, AZ",
      impact: [
        "Conducting research in NLP and multimodal reasoning, developing reproducible training, evaluation, and benchmarking workflows to support large-scale experimentation and peer-reviewed research.",
        "Engineered agentic data transformation pipelines standardizing 14,000+ semi-structured tables into SQL-ready schemas for scalable table-based question answering across benchmarks.",
        "Architected distributed LLM inference and evaluation infrastructure executing 80,000+ API runs and processing 100,000+ outputs across different SoTAs LLM/VLM architectures on GCP and multi-GPU/HPC clusters."
      ]
    },
    {
      role: "Project Engineer",
      org: "Technoventor Innovations Pvt. Ltd.",
      period: "May 2023 – May 2024",
      location: "Mumbai, India",
      impact: [
        "Led data-driven engineering operations for 2,800+ users across 100+ CNC and prototyping systems, analyzing utilization, scheduling, and maintenance metrics to optimize throughput and reduce downtime by 25%.",
        "Built issue-tracking and reporting workflows across engineering operations, improving coordination efficiency and reducing manual process overhead by 30%."
      ]
    },
    {
      role: "Lab Engineer (Internship)",
      org: "Makerspace, IIT Bombay",
      period: "Jan 2023 – May 2023",
      location: "Mumbai, India",
      impact: [
        "Maintained and troubleshot 3D printers, CO2 lasers, and lathes, ensuring smooth lab operations.",
        "Mentored 1400+ students on project fabrication and technical challenges using rapid prototyping tools.",
        "Collaborated with faculty and researchers to accelerate project timelines and improve research outcomes."
      ]
    },
    {
      role: "Intern and Community Volunteer",
      org: "FabLab Nagpur",
      period: "Jan 2022 – Jan 2023",
      location: "Nagpur, India",
      impact: [
        "Developed smart switch systems, image recognition modules, and a CNC 2D draw bot.",
        "Enhanced inventory and data management processes, leading to improved resource utilization efficiency."
      ]
    },
    {
      role: "Intern",
      org: "SmartKnower",
      period: "Mar 2021 – Jun 2021",
      location: "Remote",
      impact: [
        "Analyzed COVID-19 data using Pandas, NumPy, and Scikit-Learn, visualizing trends on Tableau.",
        "Trained a computer vision model with OpenCV for image recognition, achieving 76% accuracy."
      ]
    }
  ],
  skills: {
    programmingTools: [
      { name: "Python" },
      { name: "C++" },
      { name: "SQL" },
      { name: "Git" },
      { name: "Linux" },
      { name: "Docker" },
      { name: "Kubernetes" }
    ],
    mlAi: [
      { name: "PyTorch" },
      { name: "TensorFlow/Keras" },
      { name: "scikit-learn" },
      { name: "Transformers" },
      { name: "LLMs" },
      { name: "Multimodal Models" },
      { name: "Model Evaluation" },
      { name: "Distributed Training" }
    ],
    dataEngineering: [
      { name: "Apache Spark" },
      { name: "Spark SQL" },
      { name: "ETL Pipelines" },
      { name: "REST APIs" },
      { name: "Data Transformation" }
    ],
    analysisViz: [
      { name: "pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Tableau" },
      { name: "Power BI" }
    ],
    databases: [
      { name: "PostgreSQL" },
      { name: "MySQL" }
    ]
  },
  photography: [
    {
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop",
      title: "Urban Symmetry",
      location: "Cityscape",
      date: "Oct 2025",
      description: "Exploring the geometric patterns of modern architecture in the heart of the city."
    },
    {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
      title: "Golden Hour Fields",
      location: "Countryside",
      date: "Sep 2025",
      description: "The warmth of the setting sun over the rolling hills of the countryside."
    },
    {
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop",
      title: "Neon Nights",
      location: "Urban",
      date: "Aug 2025",
      description: "The vibrant energy of the city after dark, captured in neon lights."
    },
    {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
      title: "Mountain Serenity",
      location: "Highlands",
      date: "Jul 2025",
      description: "A moment of peace amidst the grand peaks of the highlands."
    },
    {
      url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1000&auto=format&fit=crop",
      title: "Steel & Glass",
      location: "Metropolis",
      date: "Jun 2025",
      description: "The cold, sharp lines of a metropolis reflecting the sky."
    },
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
      title: "River Reflections",
      location: "Nature",
      date: "May 2025",
      description: "Nature's mirror: the calm waters of a river reflecting the lush greenery."
    }
  ]
};
