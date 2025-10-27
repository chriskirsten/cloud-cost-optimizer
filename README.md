# Cloud Cost Optimizer

An AI-powered cloud cost optimization tool that analyzes infrastructure spending and provides actionable recommendations for reducing costs across multi-cloud environments.

![Cloud Cost Optimizer](https://img.shields.io/badge/React-18.x-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC) ![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Live Demo

[Coming Soon - Deployed Application Link]

## 📋 Overview

This application demonstrates enterprise-scale cloud infrastructure expertise through an interactive cost optimization platform. Built to showcase real-world experience managing multi-million dollar cloud infrastructure budgets and optimizing workloads across Oracle Cloud Infrastructure (OCI), AWS, Azure, and Google Cloud Platform.

### Key Features

- **Multi-Cloud Support**: Analyze costs across OCI, AWS, Azure, and GCP
- **Workload-Specific Analysis**: Tailored recommendations for:
  - Compute/VM Instances
  - GPU/AI Workloads (H100/H200 optimization)
  - Block Storage
  - Database Services
- **AI-Powered Recommendations**: Priority-ranked cost savings opportunities
- **Real-World Insights**: Based on actual enterprise infrastructure deployments
- **Export Functionality**: Generate detailed cost optimization reports

## 🛠️ Technology Stack

- **Frontend**: React 18.x
- **Styling**: Tailwind CSS 3.x
- **Routing**: React Router DOM 6.x
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 💡 Project Background

This tool was developed to demonstrate technical program management and cloud infrastructure expertise gained from:

- Leading **NVIDIA H200 GPU supercluster** deployments across OCI commercial regions (76% memory bandwidth increase, 1.9× LLM performance improvement)
- Orchestrating **OCI E5 Compute Instance** launches with AMD EPYC processors (33% performance-per-core gains)
- Managing **Exadata X11M** delivery across multiple cloud providers (55% faster AI vector search)
- Operating **Xbox Live infrastructure** serving 65M+ monthly active users

## 🎯 Cost Optimization Strategies

The application showcases six proven optimization strategies:

1. **Right-Sizing** (25-40% savings) - Analyze utilization and downsize overprovisioned resources
2. **Reserved Capacity** (30-60% savings) - Long-term commitments for predictable workloads
3. **Spot/Preemptible Instances** (60-90% savings) - Interruptible capacity for fault-tolerant workloads
4. **Storage Tiering** (40-70% savings) - Lifecycle policies for cold data
5. **Auto-Scaling** (15-35% savings) - Dynamic capacity based on demand
6. **Multi-Cloud Strategy** (20-45% savings) - Workload placement optimization

## 📊 Features in Detail

### Analysis Engine
- Input current monthly spend and resource counts
- Select cloud provider and workload type
- Receive customized cost-saving recommendations
- View utilization scores and waste detection metrics

### Strategy Library
- Comprehensive cost optimization approaches
- Impact vs. effort analysis
- Implementation examples for each strategy
- Realistic savings percentages based on enterprise deployments

### Infrastructure Insights
- Real-world learnings from managing enterprise cloud infrastructure
- GPU optimization techniques for AI/ML workloads
- Multi-cloud deployment strategies
- Gaming-scale infrastructure management (65M+ MAU)

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/chriskirsten/cloud-cost-optimizer.git

# Navigate to project directory
cd cloud-cost-optimizer

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

## 📁 Project Structure
```
cloud-cost-optimizer/
├── src/
│   ├── components/
│   │   ├── Home.jsx              # Main layout with navigation
│   │   ├── Dashboard.jsx          # Dashboard view
│   │   ├── CostOptimizer.jsx      # Cost analysis tool
│   │   ├── Login.jsx              # Authentication
│   │   └── PrivateRoute.jsx       # Route protection
│   ├── contexts/
│   │   └── AuthContext.js         # Authentication state management
│   ├── App.js                     # Root component
│   └── index.js                   # Application entry point
├── public/
├── package.json
└── README.md
```

## 🎨 Key Design Decisions

### Architecture
- **Component-based architecture** for modularity and reusability
- **Context API** for state management (authentication)
- **Protected routes** for secure navigation
- **Responsive design** with Tailwind CSS utilities

### User Experience
- **Tab-based navigation** for organized content presentation
- **Visual feedback** with loading states and color-coded priorities
- **Actionable insights** with specific dollar-value impact estimates
- **Export capability** for sharing analysis results

## 🔮 Future Enhancements

- [ ] Integration with cloud provider APIs for real-time data
- [ ] Historical cost trend analysis and forecasting
- [ ] PDF report generation
- [ ] Team collaboration features
- [ ] Budget alerting and monitoring
- [ ] Terraform/IaC recommendations

## 👤 Author

**Chris Kirsten**
- Principal Technical Program Manager
- Cloud Infrastructure & AI/ML Specialist
- [LinkedIn](https://linkedin.com/in/chris-kirsten/)
- [Portfolio](https://chriskirsten.com)
- Email: chriskir@gmail.com

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

This project draws on real-world experience from:
- Oracle Cloud Infrastructure (OCI) deployments
- Microsoft Xbox Live infrastructure operations
- Enterprise-scale capacity planning and cost optimization
- GPU infrastructure management for AI/ML workloads

---

**Note**: This is a demonstration project showcasing cloud infrastructure and technical program management expertise. The cost analysis engine uses simulated data and algorithms based on real-world patterns, but is not connected to actual cloud provider billing APIs.