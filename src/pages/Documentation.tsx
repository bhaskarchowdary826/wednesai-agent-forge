
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Settings, ArrowLeft, Book, Code, Database } from 'lucide-react';

const Documentation = () => {
  const sections = [
    {
      title: "Getting Started",
      icon: Book,
      items: [
        "Quick Start Guide",
        "Creating Your First Agent",
        "Understanding RAG Agents",
        "Working with SQL Agents"
      ]
    },
    {
      title: "API Reference",
      icon: Code,
      items: [
        "Authentication API",
        "Agent Management API",
        "Data Upload API",
        "Configuration API"
      ]
    },
    {
      title: "Data Sources",
      icon: Database,
      items: [
        "PDF Upload",
        "Web Scraping",
        "Database Connections",
        "API Integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-wednes-gradient rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900 animate-shimmer bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]">
                WEDNES.AI
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="animate-shimmer bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about building AI agents with WEDNES.AI
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sections.map((section, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader>
                <div className="w-12 h-12 bg-wednes-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200 hover:translate-x-2">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                Quick Start
              </CardTitle>
              <CardDescription>
                Get up and running with your first AI agent in under 5 minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Tutorial
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-600" />
                Community
              </CardTitle>
              <CardDescription>
                Join our community for support and share your experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Join Discord
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
