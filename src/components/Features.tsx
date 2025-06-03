
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Workflow, GitBranch, Code, Eye } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Workflow,
      title: "Visual Pipeline Builder",
      description: "Drag-and-drop nodes to define data ingestion, embedding, indexing, and chat query steps without writing code."
    },
    {
      icon: GitBranch,
      title: "Dual Agent Support",
      description: "Build semantic RAG chatbots for Q&A over documents or analytical agents for conversational analytics over structured data."
    },
    {
      icon: Code,
      title: "One-Click Code Generation",
      description: "Automatically produce a ready-to-run codebase, complete with Dockerfiles, .env files, and CI/CD workflows."
    },
    {
      icon: Eye,
      title: "Inline Preview",
      description: "Instantly test your chatbot within the WEDNES.AI dashboard via embedded Gradio or Streamlit apps."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for
            <span className="block bg-wednes-gradient bg-clip-text text-transparent">
              AI Agent Building
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to create, configure, and deploy intelligent AI agents without writing a single line of code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-300 dark:hover:border-blue-600"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-16 h-16 bg-wednes-gradient rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Explore More Features Button */}
        <div className="text-center">
          <Link to="/docs">
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 relative overflow-hidden group border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">
                Explore More Features
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
