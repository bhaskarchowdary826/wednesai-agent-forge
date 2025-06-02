
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Database, MoreVertical, Edit, Upload, FileCheck } from 'lucide-react';

const MyAgents = () => {
  // Mock data for agents
  const agents = [
    {
      id: 1,
      name: "Customer Support RAG",
      type: "RAG Agent",
      createdAt: "2024-01-15",
      status: "Active",
      description: "Handles customer inquiries using company documentation",
      dataSource: "PDF Documents"
    },
    {
      id: 2,
      name: "Sales Analytics SQL",
      type: "SQL Agent", 
      createdAt: "2024-01-10",
      status: "Draft",
      description: "Analyzes sales data and generates reports",
      dataSource: "PostgreSQL Database"
    },
    {
      id: 3,
      name: "Product Knowledge Base",
      type: "RAG Agent",
      createdAt: "2024-01-08",
      status: "Active",
      description: "Answers product-related questions from documentation",
      dataSource: "Web Scraping"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-wednes-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900">WEDNES.AI</span>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Agents</h1>
            <p className="text-gray-600">Manage and monitor your AI agents</p>
          </div>
          <Link to="/create-agent">
            <Button className="bg-wednes-gradient hover:opacity-90 text-white">
              <FileText className="w-4 h-4 mr-2" />
              Create New Agent
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                  <p className="text-sm text-gray-600">Total Agents</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <FileCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                  <p className="text-sm text-gray-600">Active</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <Edit className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                  <p className="text-sm text-gray-600">Draft</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Upload className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-sm text-gray-600">Total Queries</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Card key={agent.id} className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      agent.type === 'RAG Agent' ? 'bg-blue-100' : 'bg-purple-100'
                    }`}>
                      {agent.type === 'RAG Agent' ? 
                        <FileText className={`h-6 w-6 ${agent.type === 'RAG Agent' ? 'text-blue-600' : 'text-purple-600'}`} /> :
                        <Database className={`h-6 w-6 ${agent.type === 'RAG Agent' ? 'text-blue-600' : 'text-purple-600'}`} />
                      }
                    </div>
                    <div>
                      <CardTitle className="text-lg">{agent.name}</CardTitle>
                      <CardDescription>{agent.type}</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{agent.description}</p>
                
                <div className="flex items-center justify-between">
                  <Badge variant={agent.status === 'Active' ? 'default' : 'secondary'}>
                    {agent.status}
                  </Badge>
                  <span className="text-xs text-gray-500">{agent.dataSource}</span>
                </div>
                
                <p className="text-xs text-gray-500">
                  Created on {new Date(agent.createdAt).toLocaleDateString()}
                </p>
                
                <div className="flex space-x-2">
                  <Link to={`/agent/${agent.id}`} className="flex-1">
                    <Button size="sm" className="w-full">
                      View Details
                    </Button>
                  </Link>
                  <Button size="sm" variant="outline" className="flex-1">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {agents.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No agents yet</h3>
            <p className="text-gray-600 mb-6">Create your first AI agent to get started</p>
            <Link to="/create-agent">
              <Button className="bg-wednes-gradient hover:opacity-90 text-white">
                Create Your First Agent
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAgents;
