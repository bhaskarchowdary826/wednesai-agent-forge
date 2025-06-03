
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Database, Plus, User, LogOut } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

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

  const handleLogout = () => {
    // Clear any authentication data here
    navigate('/');
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 relative transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-wednes-gradient rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                WEDNES.AI
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="hover:scale-105 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="hover:scale-105 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 animate-fade-in">
            Welcome back! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300 animate-slide-up">
            Continue building your AI agents or create a new one
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link to="/create-agent">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-300 dark:hover:border-blue-600">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-16 h-16 bg-wednes-gradient rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                  <Plus className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Create New Agent
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Build a new RAG or SQL agent
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/my-agents">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-300 dark:hover:border-blue-600">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-16 h-16 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  My Agents
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  View and manage your agents
                </p>
              </CardContent>
            </Card>
          </Link>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group relative overflow-hidden hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:border-purple-300 dark:hover:border-purple-600">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="p-6 text-center relative">
              <div className="w-16 h-16 bg-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Data Sources
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Manage your data connections
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Agents */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white animate-fade-in">Recent Agents</h2>
            <Link to="/my-agents">
              <Button variant="outline" className="hover:scale-105 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">View All</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <Card 
                key={agent.id} 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-300 dark:hover:border-blue-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-gray-900 dark:text-white">{agent.name}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">{agent.type}</CardDescription>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      agent.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}>
                      {agent.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Created on {new Date(agent.createdAt).toLocaleDateString()}
                  </p>
                  <div className="flex space-x-2">
                    <Link to={`/agent/${agent.id}`}>
                      <Button size="sm" className="flex-1 hover:scale-105 transition-all duration-300">View</Button>
                    </Link>
                    <Button size="sm" variant="outline" className="flex-1 hover:scale-105 transition-all duration-300">Edit</Button>
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
