
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Play, Bot, Zap, Database } from 'lucide-react';

const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-wednes-gradient rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white animate-shimmer bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%]">
                WEDNES.AI Demo
              </span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="hover:scale-105 transition-all duration-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="animate-shimmer bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%]">
              Platform Demo
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Watch how easy it is to build AI agents without coding. Experience the power of visual AI development.
          </p>
        </div>

        {/* Demo Video Section */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-600 shadow-2xl mb-12 animate-expand">
          <CardContent className="p-8">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-center z-10">
                <div className="w-24 h-24 bg-wednes-gradient rounded-full mx-auto mb-6 flex items-center justify-center transform transition-all duration-300 hover:scale-110 cursor-pointer group animate-pulse">
                  <Play className="h-12 w-12 text-white ml-1" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  WEDNES.AI Platform Demo
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  See how our visual workflow makes AI agent creation effortless
                </p>
                <Button 
                  size="lg" 
                  className="bg-wednes-gradient hover:opacity-90 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Play Demo Video
                </Button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute top-4 left-12 w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-4 left-20 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-600"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full opacity-40 animate-float delay-1000"></div>
            </div>
          </CardContent>
        </Card>
        
        {/* Demo Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-xl mx-auto mb-6 flex items-center justify-center animate-float">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Setup</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create powerful AI agents in minutes with our intuitive drag-and-drop interface
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up delay-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-xl mx-auto mb-6 flex items-center justify-center animate-float delay-300">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">AI Powered</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced RAG & SQL agents with support for multiple LLM providers and embedding models
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up delay-400">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-xl mx-auto mb-6 flex items-center justify-center animate-float delay-600">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Live Preview</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Test your agents in real-time before deployment with our integrated preview system
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Build Your Own Agent?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button 
                size="lg" 
                className="bg-wednes-gradient hover:opacity-90 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                Get Started Free
              </Button>
            </Link>
            <Link to="/docs">
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300"
              >
                View Documentation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
