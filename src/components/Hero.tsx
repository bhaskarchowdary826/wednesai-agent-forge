
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['No Code AI', 'Semantic RAG', 'Analytical SQL', 'Smart Agents', 'Data Pipelines'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full border border-gray-200 dark:border-gray-700 mb-8 animate-bounce relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 relative">
              🚀 Now in Beta - Free to Use
            </span>
          </div>

          {/* Main Headline with shimmer animation only on title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            <span className="relative">
              <span className="animate-shimmer bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%]">
                Build AI Agents
              </span>
            </span>
            <span className="block text-gray-900 dark:text-white animate-float">
              <span 
                key={currentWordIndex}
                className="inline-block animate-expand bg-wednes-gradient bg-clip-text text-transparent"
              >
                {words[currentWordIndex]}
              </span>
            </span>
          </h1>

          {/* Updated Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto animate-slide-up leading-relaxed">
            Wednes.AI empowers you to build and deploy both semantic RAG chatbots and analytical agents through an intuitive, no-code interface. Select sources, models, and UI components, then click Build to generate a complete project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-wednes-gradient hover:opacity-90 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group border-2 border-transparent hover:border-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </Link>
            <Link to="/demo">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 relative overflow-hidden group border-gray-300 dark:border-gray-600 hover:border-purple-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </span>
              </Button>
            </Link>
          </div>

          {/* Hero Video - Made smaller */}
          <div className="relative max-w-3xl mx-auto animate-float">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 rounded-xl h-40 md:h-48 flex items-center justify-center relative border-2 border-transparent group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-wednes-gradient rounded-xl mx-auto mb-4 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Interactive Demo</h3>
                  <p className="text-gray-500 dark:text-gray-400">See WEDNES.AI in action</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements with star animations */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/4 -right-8 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
