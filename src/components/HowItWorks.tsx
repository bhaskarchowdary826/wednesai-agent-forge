
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Upload, FileCode, FileCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Create RAG or SQL Agent",
      description: "Choose your agent type and define its purpose with our intuitive interface."
    },
    {
      number: "02",
      icon: Upload,
      title: "Add Data",
      description: "Upload PDFs, connect APIs, or import your data sources with drag-and-drop simplicity."
    },
    {
      number: "03",
      icon: FileCode,
      title: "Configure Embeddings & LLMs",
      description: "Select your preferred models and configure the AI pipeline with guided setup."
    },
    {
      number: "04",
      icon: FileCheck,
      title: "Live Preview & Export",
      description: "Test your agent in real-time and export or deploy with one click."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How It
            <span className="bg-wednes-gradient bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build powerful AI agents in minutes with our step-by-step workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-gray-100 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-wednes-gradient rounded-xl mx-auto mb-4 flex items-center justify-center -mt-12 relative z-10">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-wednes-gradient-start to-wednes-gradient-end transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
