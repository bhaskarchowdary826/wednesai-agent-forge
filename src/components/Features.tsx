
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Upload, FileCode, FileCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "RAG Agents",
      description: "Create intelligent agents that can understand and query your documents using advanced retrieval techniques."
    },
    {
      icon: Upload,
      title: "Multiple Data Sources",
      description: "Upload PDFs, connect APIs, or import CSV files. Support for various data formats and sources."
    },
    {
      icon: FileCode,
      title: "SQL Agents",
      description: "Build agents that can query your databases and provide intelligent insights from your data."
    },
    {
      icon: FileCheck,
      title: "Live Preview",
      description: "Test your agents in real-time with our interactive chat interface before deployment."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block bg-wednes-gradient bg-clip-text text-transparent">
              AI Agent Building
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, configure, and deploy intelligent AI agents without writing a single line of code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/70 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-wednes-gradient rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
