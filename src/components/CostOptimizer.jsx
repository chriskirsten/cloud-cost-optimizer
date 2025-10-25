import React, { useState } from 'react';
import { 
  TrendingDown, 
  Server, 
  Zap, 
  CheckCircle,
  BarChart3,
  Download,
  Cpu,
  HardDrive,
  Database
} from 'lucide-react';

const CostOptimizer = () => {
  const [activeTab, setActiveTab] = useState('analyze');
  const [cloudProvider, setCloudProvider] = useState('oci');
  const [workloadType, setWorkloadType] = useState('compute');
  const [currentSpend, setCurrentSpend] = useState('');
  const [instanceCount, setInstanceCount] = useState('');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const cloudProviders = [
    { id: 'oci', name: 'Oracle Cloud (OCI)', color: 'bg-red-600' },
    { id: 'aws', name: 'Amazon Web Services', color: 'bg-orange-500' },
    { id: 'azure', name: 'Microsoft Azure', color: 'bg-blue-600' },
    { id: 'gcp', name: 'Google Cloud Platform', color: 'bg-blue-500' }
  ];

  const workloadTypes = [
    { id: 'compute', name: 'Compute/VM Instances', icon: Cpu },
    { id: 'storage', name: 'Block Storage', icon: HardDrive },
    { id: 'database', name: 'Database Services', icon: Database },
    { id: 'gpu', name: 'GPU/AI Workloads', icon: Zap }
  ];

  const optimizationStrategies = [
    {
      category: 'Right-Sizing',
      savings: '25-40%',
      impact: 'High',
      effort: 'Low',
      description: 'Analyze utilization metrics and downsize overprovisioned instances',
      implementations: [
        'CPU utilization < 40% for 30+ days',
        'Memory usage < 50% consistently',
        'Network throughput underutilized'
      ]
    },
    {
      category: 'Reserved Capacity',
      savings: '30-60%',
      impact: 'High',
      effort: 'Medium',
      description: 'Commit to 1-3 year terms for predictable workloads',
      implementations: [
        'Identify stable baseline capacity',
        'Mix reserved and on-demand',
        'Negotiate enterprise agreements'
      ]
    },
    {
      category: 'Spot/Preemptible Instances',
      savings: '60-90%',
      impact: 'High',
      effort: 'High',
      description: 'Use interruptible capacity for fault-tolerant workloads',
      implementations: [
        'Batch processing jobs',
        'CI/CD pipelines',
        'Dev/test environments'
      ]
    },
    {
      category: 'Storage Tiering',
      savings: '40-70%',
      impact: 'Medium',
      effort: 'Low',
      description: 'Move cold data to lower-cost storage tiers',
      implementations: [
        'Archive data > 90 days old',
        'Implement lifecycle policies',
        'Use object storage for backups'
      ]
    },
    {
      category: 'Auto-Scaling',
      savings: '15-35%',
      impact: 'Medium',
      effort: 'Medium',
      description: 'Dynamic capacity based on demand patterns',
      implementations: [
        'Scale down during off-hours',
        'Weekend/holiday schedules',
        'Traffic-based triggers'
      ]
    },
    {
      category: 'Multi-Cloud Strategy',
      savings: '20-45%',
      impact: 'High',
      effort: 'High',
      description: 'Leverage pricing competition and workload placement',
      implementations: [
        'Price arbitrage opportunities',
        'Geographic optimization',
        'Workload-specific provider selection'
      ]
    }
  ];

  const calculateSavings = () => {
    setLoading(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const spend = parseFloat(currentSpend) || 0;
      const instances = parseInt(instanceCount) || 0;

      // Generate realistic savings projections based on workload type
      const savingsMultipliers = {
        compute: { min: 0.25, max: 0.45 },
        storage: { min: 0.30, max: 0.55 },
        database: { min: 0.20, max: 0.40 },
        gpu: { min: 0.35, max: 0.60 }
      };

      const multiplier = savingsMultipliers[workloadType];
      const avgSavings = (multiplier.min + multiplier.max) / 2;
      const monthlySavings = spend * avgSavings;
      const annualSavings = monthlySavings * 12;

      // Generate recommendations based on analysis
      const recommendations = generateRecommendations(workloadType, instances, spend);

      setAnalysisResults({
        currentSpend: spend,
        projectedSavings: monthlySavings,
        annualSavings: annualSavings,
        savingsPercentage: (avgSavings * 100).toFixed(1),
        recommendations: recommendations,
        utilizationScore: Math.floor(Math.random() * 30) + 50, // 50-80%
        wasteScore: Math.floor(Math.random() * 40) + 20 // 20-60%
      });

      setLoading(false);
    }, 1500);
  };

  const generateRecommendations = (workload, instances, spend) => {
    const recommendations = [];

    // Workload-specific recommendations
    if (workload === 'compute') {
      recommendations.push({
        priority: 'Critical',
        action: 'Right-size overprovisioned instances',
        impact: `$${(spend * 0.15).toFixed(2)}/month`,
        description: `Analysis shows ${Math.floor(instances * 0.4)} instances running at <40% CPU utilization`
      });
      recommendations.push({
        priority: 'High',
        action: 'Implement auto-scaling groups',
        impact: `$${(spend * 0.12).toFixed(2)}/month`,
        description: 'Deploy traffic-based scaling to reduce idle capacity during off-peak hours'
      });
    }

    if (workload === 'gpu') {
      recommendations.push({
        priority: 'Critical',
        action: 'Optimize GPU utilization',
        impact: `$${(spend * 0.25).toFixed(2)}/month`,
        description: 'GPU instances show 45% idle time - implement job scheduling and queuing'
      });
      recommendations.push({
        priority: 'High',
        action: 'Consider multi-instance GPU sharing',
        impact: `$${(spend * 0.18).toFixed(2)}/month`,
        description: 'MIG (Multi-Instance GPU) can partition H100/H200 GPUs for smaller workloads'
      });
    }

    if (workload === 'storage') {
      recommendations.push({
        priority: 'High',
        action: 'Implement storage lifecycle policies',
        impact: `$${(spend * 0.20).toFixed(2)}/month`,
        description: 'Move infrequently accessed data to archive tier automatically'
      });
      recommendations.push({
        priority: 'Medium',
        action: 'Enable compression and deduplication',
        impact: `$${(spend * 0.10).toFixed(2)}/month`,
        description: 'Reduce storage footprint by 40-60% on average'
      });
    }

    if (workload === 'database') {
      recommendations.push({
        priority: 'Critical',
        action: 'Review database instance sizing',
        impact: `$${(spend * 0.18).toFixed(2)}/month`,
        description: 'Current instances appear overprovisioned for workload patterns'
      });
      recommendations.push({
        priority: 'High',
        action: 'Implement read replicas for analytics',
        impact: `$${(spend * 0.15).toFixed(2)}/month`,
        description: 'Offload reporting queries to lower-cost read replicas'
      });
    }

    // Universal recommendations
    recommendations.push({
      priority: 'High',
      action: 'Purchase reserved capacity',
      impact: `$${(spend * 0.30).toFixed(2)}/month`,
      description: '1-year commitment could save 30-40% on baseline capacity'
    });

    recommendations.push({
      priority: 'Medium',
      action: 'Tag and track resource ownership',
      impact: `$${(spend * 0.08).toFixed(2)}/month`,
      description: 'Identify and eliminate orphaned resources and unused capacity'
    });

    return recommendations.slice(0, 5); // Return top 5 recommendations
  };

  const exportReport = () => {
    if (!analysisResults) return;

    const report = {
      analysisDate: new Date().toISOString(),
      cloudProvider: cloudProviders.find(p => p.id === cloudProvider)?.name,
      workloadType: workloadTypes.find(w => w.id === workloadType)?.name,
      currentMonthlySpend: analysisResults.currentSpend,
      projectedMonthlySavings: analysisResults.projectedSavings,
      projectedAnnualSavings: analysisResults.annualSavings,
      savingsPercentage: analysisResults.savingsPercentage,
      recommendations: analysisResults.recommendations
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cost-optimization-report-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Cloud Cost Optimizer</h1>
        <p className="text-gray-600">
          AI-powered analysis to identify cost savings opportunities across your cloud infrastructure
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {['analyze', 'strategies', 'insights'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Analyze Tab */}
        {activeTab === 'analyze' && (
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Input Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cloud Provider
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {cloudProviders.map((provider) => (
                      <button
                        key={provider.id}
                        onClick={() => setCloudProvider(provider.id)}
                        className={`p-4 rounded-lg border-2 transition ${
                          cloudProvider === provider.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-3 h-3 rounded-full ${provider.color} mb-2`} />
                        <div className="text-sm font-medium text-gray-900">{provider.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Workload Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {workloadTypes.map((workload) => (
                      <button
                        key={workload.id}
                        onClick={() => setWorkloadType(workload.id)}
                        className={`p-4 rounded-lg border-2 transition flex items-center gap-3 ${
                          workloadType === workload.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <workload.icon size={20} className="text-gray-600" />
                        <div className="text-sm font-medium text-gray-900">{workload.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Monthly Spend ($)
                  </label>
                  <input
                    type="number"
                    value={currentSpend}
                    onChange={(e) => setCurrentSpend(e.target.value)}
                    placeholder="e.g., 50000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Instances/Resources
                  </label>
                  <input
                    type="number"
                    value={instanceCount}
                    onChange={(e) => setInstanceCount(e.target.value)}
                    placeholder="e.g., 150"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  onClick={calculateSavings}
                  disabled={!currentSpend || !instanceCount || loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <BarChart3 size={20} />
                      Analyze Costs
                    </>
                  )}
                </button>
              </div>

              {/* Results Panel */}
              <div>
                {analysisResults ? (
                  <div className="space-y-4">
                    {/* Savings Summary */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Potential Savings</h3>
                        <TrendingDown className="text-green-600" size={24} />
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-3xl font-bold text-green-600">
                            ${analysisResults.projectedSavings.toLocaleString()}
                            <span className="text-lg text-gray-600">/month</span>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            ${analysisResults.annualSavings.toLocaleString()}/year potential savings
                          </div>
                        </div>
                        <div className="pt-3 border-t border-green-200">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Savings Percentage</span>
                            <span className="font-semibold text-gray-900">{analysisResults.savingsPercentage}%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Utilization Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="text-sm text-gray-600 mb-1">Utilization Score</div>
                        <div className="text-2xl font-bold text-blue-600">{analysisResults.utilizationScore}%</div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                        <div className="text-sm text-gray-600 mb-1">Waste Detected</div>
                        <div className="text-2xl font-bold text-orange-600">{analysisResults.wasteScore}%</div>
                      </div>
                    </div>

                    {/* Export Button */}
                    <button
                      onClick={exportReport}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
                    >
                      <Download size={18} />
                      Export Report
                    </button>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-8">
                    <div className="text-center">
                      <BarChart3 size={48} className="text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Enter your cloud metrics to see optimization opportunities</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Recommendations */}
            {analysisResults && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Priority Recommendations</h3>
                <div className="space-y-3">
                  {analysisResults.recommendations.map((rec, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex items-start gap-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          rec.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                          rec.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {rec.priority}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{rec.action}</h4>
                            <span className="text-green-600 font-semibold">{rec.impact}</span>
                          </div>
                          <p className="text-sm text-gray-600">{rec.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Strategies Tab */}
        {activeTab === 'strategies' && (
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Optimization Strategies</h3>
              <p className="text-gray-600">
                Proven approaches to reduce cloud infrastructure costs based on enterprise-scale deployments
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {optimizationStrategies.map((strategy, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{strategy.category}</h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{strategy.savings}</div>
                      <div className="text-xs text-gray-500">Potential Savings</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{strategy.description}</p>
                  
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1">Impact</div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        strategy.impact === 'High' ? 'bg-green-100 text-green-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {strategy.impact}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1">Effort</div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        strategy.effort === 'Low' ? 'bg-green-100 text-green-700' :
                        strategy.effort === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {strategy.effort}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Implementation Examples:</div>
                    <ul className="space-y-1">
                      {strategy.implementations.map((impl, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{impl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Infrastructure Insights</h3>
              <p className="text-gray-600">
                Key learnings from managing enterprise-scale cloud infrastructure at Oracle and Microsoft
              </p>
            </div>
            <div className="space-y-6">
              {/* Insight Cards */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 rounded-lg p-3">
                    <Server className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">GPU Infrastructure at Scale</h4>
                    <p className="text-gray-700 mb-3">
                      Led global rollout of NVIDIA H200 GPU superclusters across OCI commercial regions. 
                      Key insight: GPU utilization tracking is critical—implementing job scheduling and 
                      multi-instance GPU (MIG) partitioning can reduce costs by 40-60% while improving throughput.
                    </p>
                    <div className="flex gap-3 text-sm">
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">AI/ML Workloads</span>
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">H200 GPUs</span>
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">OCI</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 rounded-lg p-3">
                    <TrendingDown className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Right-Sizing Strategy</h4>
                    <p className="text-gray-700 mb-3">
                      Through analyzing OCI E5 compute instance deployments (AMD EPYC™), discovered that 
                      40% of enterprise instances were overprovisioned. Implementing automated right-sizing 
                      recommendations saved 33% on compute costs while improving performance through better 
                      resource allocation.
                    </p>
                    <div className="flex gap-3 text-sm">
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">AMD EPYC</span>
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">Cost Optimization</span>
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">Performance</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 rounded-lg p-3">
                    <Database className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Multi-Cloud Database Strategy</h4>
                    <p className="text-gray-700 mb-3">
                      Orchestrated Exadata X11M delivery across OCI, AWS, Azure, and GCP. Key learning: 
                      Multi-cloud strategies enable 20-45% cost savings through workload placement optimization 
                      and leveraging provider-specific pricing advantages for different workload types.
                    </p>
                    <div className="flex gap-3 text-sm">
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">Multi-Cloud</span>
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">Exadata X11M</span>
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">AI Vector Search</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 rounded-lg p-3">
                    <Zap className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Infrastructure at Gaming Scale</h4>
                    <p className="text-gray-700 mb-3">
                      Managed Xbox Live infrastructure serving 65M+ monthly active users. Critical insight: 
                      Auto-scaling during peak traffic events (game launches, seasonal events) reduced 
                      infrastructure costs by 25% while maintaining 99.99% uptime through intelligent 
                      capacity planning.
                    </p>
                    <div className="flex gap-3 text-sm">
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">Xbox Live</span>
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">65M+ MAU</span>
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">Auto-Scaling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostOptimizer;