
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Database, Upload, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgentBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [agentType, setAgentType] = useState('');
  
  const steps = [
    { number: 1, title: "Select Agent Type", description: "Choose RAG or SQL Agent" },
    { number: 2, title: "Add Data Source", description: "Upload files or connect APIs" },
    { number: 3, title: "Configure Embedding", description: "Choose embedding model" },
    { number: 4, title: "Vector Database", description: "Select vector store" },
    { number: 5, title: "LLM Provider", description: "Configure language model" },
    { number: 6, title: "Prompt Setup", description: "Customize prompts" },
    { number: 7, title: "Live Preview", description: "Test your agent" },
    { number: 8, title: "Deploy", description: "Launch your agent" }
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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
            <Link to="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Create New Agent</h1>
            <span className="text-sm text-gray-500">Step {currentStep} of {steps.length}</span>
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentStep === step.number 
                    ? 'bg-wednes-gradient text-white' 
                    : currentStep > step.number 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-600'
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    currentStep > step.number ? 'bg-green-500 text-white' : ''
                  }`}>
                    {currentStep > step.number ? <CheckCircle className="w-4 h-4" /> : step.number}
                  </div>
                  <div className="hidden md:block">
                    <div className="font-medium text-sm">{step.title}</div>
                    <div className="text-xs opacity-75">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
          <CardHeader>
            <CardTitle>{steps[currentStep - 1].title}</CardTitle>
            <CardDescription>{steps[currentStep - 1].description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Select Agent Type */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    agentType === 'rag' ? 'ring-2 ring-wednes-blue bg-blue-50' : ''
                  }`}
                  onClick={() => setAgentType('rag')}
                >
                  <CardContent className="p-6 text-center">
                    <FileText className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                    <h3 className="text-xl font-semibold mb-2">RAG Agent</h3>
                    <p className="text-gray-600">
                      Create agents that can understand and query documents using retrieval-augmented generation
                    </p>
                  </CardContent>
                </Card>

                <Card 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    agentType === 'sql' ? 'ring-2 ring-wednes-purple bg-purple-50' : ''
                  }`}
                  onClick={() => setAgentType('sql')}
                >
                  <CardContent className="p-6 text-center">
                    <Database className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                    <h3 className="text-xl font-semibold mb-2">SQL Agent</h3>
                    <p className="text-gray-600">
                      Build agents that can query databases and provide intelligent insights from your data
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Step 2: Add Data Source */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                      <h3 className="font-semibold mb-2">Upload Files</h3>
                      <p className="text-sm text-gray-600">PDF, CSV, TXT</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <FileText className="w-12 h-12 mx-auto mb-4 text-green-500" />
                      <h3 className="font-semibold mb-2">Web URL</h3>
                      <p className="text-sm text-gray-600">Scrape website</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Database className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                      <h3 className="font-semibold mb-2">API Endpoint</h3>
                      <p className="text-sm text-gray-600">Connect API</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="url">Enter URL or API Endpoint</Label>
                  <Input id="url" placeholder="https://example.com/api/data" />
                </div>
              </div>
            )}

            {/* Step 3: Configure Embedding */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <Label htmlFor="embedding">Select Embedding Model</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose embedding model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-minilm-l6-v2">all-MiniLM-L6-v2</SelectItem>
                    <SelectItem value="text-embedding-ada-002">OpenAI text-embedding-ada-002</SelectItem>
                    <SelectItem value="sentence-transformers">sentence-transformers/all-mpnet-base-v2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Step 4: Vector Database */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <Label htmlFor="vectordb">Select Vector Database</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose vector database" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="faiss">FAISS</SelectItem>
                    <SelectItem value="pinecone">Pinecone</SelectItem>
                    <SelectItem value="milvus">Milvus</SelectItem>
                    <SelectItem value="qdrant">Qdrant</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="space-y-2">
                  <Label htmlFor="api-key">API Key (Optional)</Label>
                  <Input id="api-key" type="password" placeholder="Enter API key if required" />
                </div>
              </div>
            )}

            {/* Step 5: LLM Provider */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <Label htmlFor="llm">Select LLM Provider</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose LLM provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="openai">OpenAI</SelectItem>
                    <SelectItem value="anthropic">Anthropic</SelectItem>
                    <SelectItem value="cohere">Cohere</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="space-y-2">
                  <Label htmlFor="llm-key">API Key</Label>
                  <Input id="llm-key" type="password" placeholder="Enter your LLM API key" />
                </div>
              </div>
            )}

            {/* Step 6: Prompt Configuration */}
            {currentStep === 6 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="system-prompt">System Prompt</Label>
                  <Textarea 
                    id="system-prompt" 
                    placeholder="You are a helpful AI assistant..." 
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="user-prompt">User Prompt Template</Label>
                  <Textarea 
                    id="user-prompt" 
                    placeholder="Answer the following question based on the context: {context}" 
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            )}

            {/* Step 7: Live Preview */}
            {currentStep === 7 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Test Your Agent</h3>
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-sm font-medium text-gray-600 mb-1">You:</p>
                        <p>What is the main topic of the uploaded document?</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-600 mb-1">Agent:</p>
                        <p>Based on the document analysis, the main topic appears to be...</p>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Input placeholder="Ask your agent a question..." className="flex-1" />
                      <Button>Send</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Step 8: Deploy */}
            {currentStep === 8 && (
              <div className="space-y-6 text-center">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Your Agent is Ready!</h3>
                  <p className="text-gray-600">Choose how you'd like to deploy your agent</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="h-24 bg-wednes-gradient hover:opacity-90 text-white">
                    <div>
                      <div className="font-semibold">Deploy Agent</div>
                      <div className="text-sm opacity-75">Host on our platform</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="h-24">
                    <div>
                      <div className="font-semibold">Download Code</div>
                      <div className="text-sm text-gray-600">Get the source code</div>
                    </div>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <Button 
            onClick={nextStep}
            disabled={currentStep === steps.length}
            className="bg-wednes-gradient hover:opacity-90 text-white"
          >
            {currentStep === steps.length ? 'Complete' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgentBuilder;
