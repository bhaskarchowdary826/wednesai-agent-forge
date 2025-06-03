
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play } from 'lucide-react';

const Demo = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <nav className="bg-black/50 backdrop-blur-md border-b border-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-wednes-gradient rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-white animate-shimmer bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%]">
                WEDNES.AI Demo
              </span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Demo Video Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Video Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-24 h-24 bg-wednes-gradient rounded-full mx-auto mb-6 flex items-center justify-center transform transition-all duration-300 hover:scale-110 cursor-pointer group">
                  <Play className="h-12 w-12 text-white ml-1" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  WEDNES.AI Platform Demo
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  Watch how easy it is to build AI agents without coding
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
            </div>
          </div>
          
          {/* Demo Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="font-semibold mb-2">Quick Setup</h3>
              <p className="text-gray-400 text-sm">Create agents in minutes</p>
            </div>
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="font-semibold mb-2">AI Powered</h3>
              <p className="text-gray-400 text-sm">Advanced RAG & SQL agents</p>
            </div>
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2">Live Preview</h3>
              <p className="text-gray-400 text-sm">Test before deployment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
