
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FileText, Database, Settings, MessageSquare, Download, Share } from 'lucide-react';

const AgentDetails = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'user', content: 'What is the main purpose of this system?' },
    { role: 'agent', content: 'Based on the documentation, this system is designed to help users manage their customer support operations efficiently.' }
  ]);

  // Mock agent data
  const agent = {
    id: 1,
    name: "Customer Support RAG",
    type: "RAG Agent",
    status: "Active",
    description: "Handles customer inquiries using company documentation",
    createdAt: "2024-01-15",
    dataSource: "PDF Documents",
    embedding: "all-MiniLM-L6-v2",
    vectorStore: "FAISS",
    llmProvider: "OpenAI",
    systemPrompt: "You are a helpful customer support assistant...",
    userPrompt: "Answer the following question based on the context: {context}"
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { role: 'user', content: message }]);
      setMessage('');
      // Simulate agent response
      setTimeout(() => {
        setChatHistory(prev => [...prev, { 
          role: 'agent', 
          content: 'I understand your question. Let me search through the available information to provide you with an accurate response.' 
        }]);
      }, 1000);
    }
  };

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
            <Link to="/my-agents">
              <Button variant="outline">Back to My Agents</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Agent Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
              agent.type === 'RAG Agent' ? 'bg-blue-100' : 'bg-purple-100'
            }`}>
              {agent.type === 'RAG Agent' ? 
                <FileText className="h-8 w-8 text-blue-600" /> :
                <Database className="h-8 w-8 text-purple-600" />
              }
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{agent.name}</h1>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant={agent.status === 'Active' ? 'default' : 'secondary'}>
                  {agent.status}
                </Badge>
                <span className="text-gray-600">{agent.type}</span>
                <span className="text-gray-500">Created {new Date(agent.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button variant="outline">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button className="bg-wednes-gradient hover:opacity-90 text-white">
              <Download className="w-4 h-4 mr-2" />
              Deploy
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="preview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="preview">Live Preview</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
            <TabsTrigger value="deploy">Deploy & Export</TabsTrigger>
          </TabsList>

          {/* Live Preview Tab */}
          <TabsContent value="preview" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chat with Your Agent
                </CardTitle>
                <CardDescription>
                  Test your agent's responses in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Chat History */}
                  <div className="bg-gray-50 rounded-lg p-4 h-80 overflow-y-auto space-y-4">
                    {chatHistory.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.role === 'user'
                              ? 'bg-wednes-gradient text-white'
                              : 'bg-white border border-gray-200'
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="flex space-x-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask your agent a question..."
                      className="flex-1"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage}>Send</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Configuration Tab */}
          <TabsContent value="configuration" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Data Source */}
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
                <CardHeader>
                  <CardTitle>Data Source</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Type:</span>
                    <span className="text-gray-600">{agent.dataSource}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Files:</span>
                    <span className="text-gray-600">5 documents</span>
                  </div>
                </CardContent>
              </Card>

              {/* Embedding Model */}
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
                <CardHeader>
                  <CardTitle>Embedding Model</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Model:</span>
                    <span className="text-gray-600">{agent.embedding}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Dimensions:</span>
                    <span className="text-gray-600">384</span>
                  </div>
                </CardContent>
              </Card>

              {/* Vector Store */}
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
                <CardHeader>
                  <CardTitle>Vector Store</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Provider:</span>
                    <span className="text-gray-600">{agent.vectorStore}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Index Size:</span>
                    <span className="text-gray-600">1,245 vectors</span>
                  </div>
                </CardContent>
              </Card>

              {/* LLM Provider */}
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
                <CardHeader>
                  <CardTitle>LLM Provider</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Provider:</span>
                    <span className="text-gray-600">{agent.llmProvider}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Model:</span>
                    <span className="text-gray-600">GPT-3.5-turbo</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Prompts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
                <CardHeader>
                  <CardTitle>System Prompt</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">{agent.systemPrompt}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
                <CardHeader>
                  <CardTitle>User Prompt Template</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">{agent.userPrompt}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Deploy & Export Tab */}
          <TabsContent value="deploy" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Deploy Options */}
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
                <CardHeader>
                  <CardTitle>Deploy Agent</CardTitle>
                  <CardDescription>
                    Host your agent on our platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-wednes-gradient hover:opacity-90 text-white h-12">
                    Deploy to Production
                  </Button>
                  <div className="text-sm text-gray-600">
                    <p>• Automatic scaling</p>
                    <p>• 99.9% uptime SLA</p>
                    <p>• Analytics dashboard</p>
                  </div>
                </CardContent>
              </Card>

              {/* Export Options */}
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
                <CardHeader>
                  <CardTitle>Export Code</CardTitle>
                  <CardDescription>
                    Download your agent's source code
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full h-12">
                    <Download className="w-4 h-4 mr-2" />
                    Download Python Code
                  </Button>
                  <div className="text-sm text-gray-600">
                    <p>• Complete source code</p>
                    <p>• Requirements.txt included</p>
                    <p>• Docker configuration</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* API Integration */}
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
              <CardHeader>
                <CardTitle>API Integration</CardTitle>
                <CardDescription>
                  Integrate your agent via REST API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <p>curl -X POST https://api.wednes.ai/agents/{id}/query \</p>
                  <p>  -H "Authorization: Bearer YOUR_API_KEY" \</p>
                  <p>  -H "Content-Type: application/json" \</p>
                  <p>  -d '{`"message": "Your question here"`}'</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AgentDetails;
