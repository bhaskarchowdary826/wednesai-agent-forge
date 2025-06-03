
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Workflow, Eye, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Settings,
      title: "Choose Your Agent Type",
      description: "Select between Semantic RAG chatbots for unstructured data or Analytical agents for structured data sources."
    },
    {
      number: "02",
      icon: Workflow,
      title: "Configure Your Pipeline",
      description: "Drag and drop components to build your data pipeline. Connect sources, processors, and models."
    },
    {
      number: "03",
      icon: Eye,
      title: "Preview & Test",
      description: "Instantly preview your chatbot within the dashboard to test functionality and fine-tune behavior."
    },
    {
      number: "04",
      icon: Rocket,
      title: "Build & Deploy",
      description: "Generate production-ready code with one click, then download or deploy directly to your environment."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How WEDNES.AI
            <span className="bg-wednes-gradient bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            From concept to deployment in minutes, WEDNES.AI streamlines the entire process of building AI agents with our visual pipeline builder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-300 dark:hover:border-blue-600">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 text-center relative">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-gray-100 dark:text-gray-800 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-wednes-gradient rounded-xl mx-auto mb-4 flex items-center justify-center -mt-12 relative z-10 shadow-lg group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] group-hover:scale-110 transition-all duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-wednes-gradient-start to-wednes-gradient-end transform -translate-y-1/2 opacity-60"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
