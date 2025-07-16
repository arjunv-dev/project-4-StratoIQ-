import React, { useState } from 'react';
import { Brain, Target, TrendingUp, Users, FileText, Download, Lightbulb, BarChart3, Map, Rocket } from 'lucide-react';

interface StrategyReport {
  vision: {
    title: string;
    mission: string;
    vision: string;
    values: string[];
    northStar: string;
  };
  tam: {
    totalMarket: string;
    servicableMarket: string;
    reachableMarket: string;
    growthRate: string;
    keyDrivers: string[];
  };
  pmf: {
    targetCustomer: string;
    problemStatement: string;
    solution: string;
    valueProposition: string;
    validationSteps: string[];
  };
  gtm: {
    strategy: string;
    channels: string[];
    pricing: string;
    timeline: string[];
    metrics: string[];
  };
}

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [productIdea, setProductIdea] = useState('');
  const [businessModel, setBusinessModel] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [strategyReport, setStrategyReport] = useState<StrategyReport | null>(null);

  const productSuggestions = [
    "AI-powered personal finance assistant for young professionals",
    "Virtual interior design platform using AR technology",
    "Sustainable meal planning app with local sourcing",
    "Remote team collaboration tool with async video messaging",
    "Smart home energy optimization system",
    "Mental health support platform for remote workers",
    "Blockchain-based supply chain transparency tool",
    "AI-driven code review and optimization platform",
    "Social learning platform for professional skills",
    "Automated customer support chatbot for e-commerce"
  ];

  const steps = [
    { title: 'Product Idea', icon: Lightbulb },
    { title: 'Business Model', icon: Target },
    { title: 'Strategy Generation', icon: Brain },
    { title: 'Strategic Report', icon: FileText }
  ];

  const businessModels = [
    {
      id: 'consumer',
      title: 'Consumer',
      description: 'B2C products with mass market appeal',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      id: 'b2b',
      title: 'B2B',
      description: 'Enterprise solutions and business tools',
      icon: BarChart3,
      color: 'bg-purple-500'
    },
    {
      id: 'platform',
      title: 'Platform',
      description: 'Multi-sided marketplaces and ecosystems',
      icon: Map,
      color: 'bg-green-500'
    }
  ];

  const generateStrategy = async () => {
    setIsGenerating(true);
    
    // Simulate AI strategy generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockStrategy: StrategyReport = {
      vision: {
        title: `${productIdea} - Strategic Vision`,
        mission: `To revolutionize how people interact with ${productIdea.toLowerCase()} by creating an intuitive, scalable solution that addresses core market needs.`,
        vision: `To become the leading platform in the ${productIdea.toLowerCase()} space, serving millions of users globally by 2027.`,
        values: ['Innovation', 'User-Centricity', 'Scalability', 'Excellence'],
        northStar: `10M active users with 95% satisfaction rate`
      },
      tam: {
        totalMarket: '$45.2B',
        servicableMarket: '$12.8B',
        reachableMarket: '$3.2B',
        growthRate: '23% CAGR',
        keyDrivers: ['Digital transformation', 'Remote work adoption', 'Mobile-first behavior', 'AI integration']
      },
      pmf: {
        targetCustomer: businessModel === 'consumer' ? 'Tech-savvy millennials and Gen Z users' : 
                       businessModel === 'b2b' ? 'Mid-market companies with 50-500 employees' : 
                       'Platform creators and service providers',
        problemStatement: `Current solutions in the ${productIdea.toLowerCase()} space are fragmented, expensive, and difficult to use.`,
        solution: `A unified, AI-powered platform that simplifies ${productIdea.toLowerCase()} management with intelligent automation.`,
        valueProposition: 'Reduce operational costs by 40% while improving user experience and scalability.',
        validationSteps: ['User interviews', 'MVP testing', 'Beta program', 'Pilot partnerships', 'Market validation']
      },
      gtm: {
        strategy: businessModel === 'consumer' ? 'Viral growth with social media marketing' :
                 businessModel === 'b2b' ? 'Sales-led growth with enterprise partnerships' :
                 'Platform-driven growth with ecosystem partnerships',
        channels: businessModel === 'consumer' ? ['Social media', 'App stores', 'Influencer partnerships'] :
                 businessModel === 'b2b' ? ['Direct sales', 'Partner channels', 'Content marketing'] :
                 ['API partnerships', 'Developer community', 'Platform integrations'],
        pricing: businessModel === 'consumer' ? 'Freemium with premium tiers' :
                businessModel === 'b2b' ? 'Subscription-based with enterprise licensing' :
                'Transaction-based with platform fees',
        timeline: ['Q1: MVP launch', 'Q2: User acquisition', 'Q3: Feature expansion', 'Q4: Scale & optimize'],
        metrics: ['User acquisition cost', 'Monthly recurring revenue', 'Customer lifetime value', 'Net promoter score']
      }
    };

    setStrategyReport(mockStrategy);
    setIsGenerating(false);
    setCurrentStep(3);
  };

  const exportReport = () => {
    const reportData = JSON.stringify(strategyReport, null, 2);
    const blob = new Blob([reportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${productIdea}-strategy-report.json`;
    a.click();
  };

  const StepNavigation = () => (
    <div className="flex justify-between mb-12">
      {steps.map((step, index) => (
        <div 
          key={index}
          className={`flex flex-col items-center ${
            index <= currentStep ? 'text-blue-600' : 'text-gray-400'
          }`}
        >
          <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 ${
            index <= currentStep ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
          }`}>
            <step.icon className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium">{step.title}</span>
        </div>
      ))}
    </div>
  );

  const ProductIdeaStep = () => (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What's your product idea?</h2>
      <p className="text-gray-600 mb-8 text-center">
        Describe your 0→1 product idea in a single line. Our AI will transform it into a comprehensive strategy.
      </p>
      
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Need inspiration? Try these ideas:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            {productSuggestions.slice(0, 6).map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setProductIdea(suggestion)}
                className="text-left p-3 text-sm text-gray-600 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors border border-transparent hover:border-blue-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => {
                const randomSuggestion = productSuggestions[Math.floor(Math.random() * productSuggestions.length)];
                setProductIdea(randomSuggestion);
              }}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              🎲 Get random suggestion
            </button>
          </div>
        </div>
        
        <textarea
          value={productIdea}
          onChange={(e) => setProductIdea(e.target.value)}
          placeholder="Describe your product idea here... or click a suggestion above"
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 bg-white"
          style={{ direction: 'ltr', textAlign: 'left', unicodeBidi: 'normal' }}
          autoFocus
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setCurrentStep(1)}
            disabled={!productIdea.trim()}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Continue to Business Model
          </button>
        </div>
      </div>
    </div>
  );

  const BusinessModelStep = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Choose your business model</h2>
      <p className="text-gray-600 mb-8 text-center">
        Select the model that best fits your product idea. This will customize your strategy generation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {businessModels.map((model) => (
          <div
            key={model.id}
            onClick={() => setBusinessModel(model.id)}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
              businessModel === model.id 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className={`w-12 h-12 ${model.color} rounded-lg flex items-center justify-center mb-4`}>
              <model.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{model.title}</h3>
            <p className="text-gray-600">{model.description}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <button
          onClick={() => setCurrentStep(0)}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          ← Back to Product Idea
        </button>
        <button
          onClick={() => setCurrentStep(2)}
          disabled={!businessModel}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Generate Strategy
        </button>
      </div>
    </div>
  );

  const StrategyGenerationStep = () => (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Generating your strategy</h2>
      <p className="text-gray-600 mb-8">
        Our AI is analyzing your idea and creating a comprehensive strategic framework...
      </p>
      
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-6">
          <Brain className="w-16 h-16 mx-auto text-blue-600 animate-pulse" />
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Vision Document</span>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full animate-pulse" style={{ width: '100%' }}></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">TAM Analysis</span>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-600 rounded-full animate-pulse" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">PMF Playbook</span>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-600 rounded-full animate-pulse" style={{ width: '50%' }}></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">GTM Strategy</span>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-orange-600 rounded-full animate-pulse" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={() => setCurrentStep(1)}
            disabled={isGenerating}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            ← Back to Business Model
          </button>
          <button
            onClick={generateStrategy}
            disabled={isGenerating}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? 'Generating...' : 'Generate Strategy Report'}
          </button>
        </div>
      </div>
    </div>
  );

  const StrategyReportStep = () => (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentStep(2)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            ← Back to Generation
          </button>
          <h2 className="text-3xl font-bold text-gray-900">Strategic Report</h2>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setCurrentStep(0);
              setProductIdea('');
              setBusinessModel('');
              setStrategyReport(null);
            }}
            className="px-4 py-2 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
          >
            New Strategy
          </button>
          <button
            onClick={exportReport}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>
      
      {strategyReport && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Document */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Vision Document</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Mission</h4>
                <p className="text-gray-600">{strategyReport.vision.mission}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Vision</h4>
                <p className="text-gray-600">{strategyReport.vision.vision}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">North Star</h4>
                <p className="text-gray-600">{strategyReport.vision.northStar}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Core Values</h4>
                <div className="flex flex-wrap gap-2">
                  {strategyReport.vision.values.map((value, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TAM Analysis */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">TAM Analysis</h3>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Total Market</h4>
                  <p className="text-2xl font-bold text-purple-600">{strategyReport.tam.totalMarket}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Growth Rate</h4>
                  <p className="text-2xl font-bold text-green-600">{strategyReport.tam.growthRate}</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Serviceable Market</h4>
                <p className="text-xl font-semibold text-gray-900">{strategyReport.tam.servicableMarket}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Reachable Market</h4>
                <p className="text-xl font-semibold text-gray-900">{strategyReport.tam.reachableMarket}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Key Drivers</h4>
                <div className="space-y-1">
                  {strategyReport.tam.keyDrivers.map((driver, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-600">{driver}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PMF Playbook */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">PMF Playbook</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Target Customer</h4>
                <p className="text-gray-600">{strategyReport.pmf.targetCustomer}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Problem Statement</h4>
                <p className="text-gray-600">{strategyReport.pmf.problemStatement}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Solution</h4>
                <p className="text-gray-600">{strategyReport.pmf.solution}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Value Proposition</h4>
                <p className="text-gray-600">{strategyReport.pmf.valueProposition}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Validation Steps</h4>
                <div className="space-y-1">
                  {strategyReport.pmf.validationSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* GTM Strategy */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">GTM Strategy</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Strategy</h4>
                <p className="text-gray-600">{strategyReport.gtm.strategy}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Channels</h4>
                <div className="flex flex-wrap gap-2">
                  {strategyReport.gtm.channels.map((channel, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Pricing Model</h4>
                <p className="text-gray-600">{strategyReport.gtm.pricing}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Timeline</h4>
                <div className="space-y-1">
                  {strategyReport.gtm.timeline.map((milestone, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-2">
                  {strategyReport.gtm.metrics.map((metric, index) => (
                    <div key={index} className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">OmniStrat</h1>
                <p className="text-sm text-gray-600">Unified AI Strategy Brain</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Powered by</span>
              <span className="font-semibold text-blue-600">Claude 3 + GPT-4</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <StepNavigation />
        
        {currentStep === 0 && <ProductIdeaStep />}
        {currentStep === 1 && <BusinessModelStep />}
        {currentStep === 2 && <StrategyGenerationStep />}
        {currentStep === 3 && <StrategyReportStep />}
      </main>
    </div>
  );
}

export default App;