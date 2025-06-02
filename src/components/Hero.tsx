
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full border border-gray-200 mb-8">
            <span className="text-sm font-medium text-gray-600">
              🚀 Now in Beta - Free to Use
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Build AI Agents
            <span className="block bg-wednes-gradient bg-clip-text text-transparent">
              Visually
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            No Code Required. Create powerful RAG Agents and SQL Agents through our intuitive drag-and-drop interface.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-wednes-gradient hover:opacity-90 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg rounded-xl border-2 hover:bg-gray-50 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Image/Video Placeholder */}
          <div className="relative max-w-5xl mx-auto animate-float">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl h-64 md:h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-wednes-gradient rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Demo</h3>
                  <p className="text-gray-500">See WEDNES.AI in action</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
