
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Database, Plus, Settings, User, LogOut } from 'lucide-react';

const Dashboard = () => {
  // Mock data for agents
  const agents = [
    {
      id: 1,
      name: "Customer Support RAG",
      type: "RAG Agent",
      createdAt: "2024-01-15",
      status: "Active"
    },
    {
      id: 2,
      name: "Sales Analytics SQL",
      type: "SQL Agent", 
      createdAt: "2024-01-10",
      status: "Draft"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-wednes-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900">WEDNES.AI</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </Link>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-gray-600">
            Continue building your AI agents or create a new one
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link to="/create-agent">
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-wednes-gradient rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Plus className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Create New Agent
                </h3>
                <p className="text-gray-600">
                  Build a new RAG or SQL agent
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/my-agents">
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  My Agents
                </h3>
                <p className="text-gray-600">
                  View and manage your agents
                </p>
              </CardContent>
            </Card>
          </Link>

          <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Data Sources
              </h3>
              <p className="text-gray-600">
                Manage your data connections
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Agents */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Agents</h2>
            <Link to="/my-agents">
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <Card key={agent.id} className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{agent.name}</CardTitle>
                      <CardDescription>{agent.type}</CardDescription>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      agent.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {agent.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Created on {new Date(agent.createdAt).toLocaleDateString()}
                  </p>
                  <div className="flex space-x-2">
                    <Link to={`/agent/${agent.id}`}>
                      <Button size="sm" className="flex-1">View</Button>
                    </Link>
                    <Button size="sm" variant="outline" className="flex-1">Edit</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
