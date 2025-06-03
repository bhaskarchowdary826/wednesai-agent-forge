
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Database, Upload, ArrowRight, ArrowLeft, CheckCircle, Bot, Layers, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const AgentBuilder = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [agentType, setAgentType] = useState('');
  const [formData, setFormData] = useState({
    source: '',
    chunkSize: '',
    embedding: '',
    vectorStore: '',
    llm: '',
    apiKey: '',
    ui: '',
    sqlType: '',
    sqlGenerator: ''
  });

  const ragSteps = [
    { number: 1, title: "Agent Type", description: "Choose your agent", icon: Bot },
    { number: 2, title: "Data Source", description: "Select source type", icon: Upload },
    { number: 3, title: "Chunking Strategy", description: "Configure chunks", icon: Layers },
    { number: 4, title: "Embedding Model", description: "Choose embedding", icon: Zap },
    { number: 5, title: "Vector Store", description: "Select knowledge base", icon: Database },
    { number: 6, title: "LLM & API Key", description: "Configure model", icon: Bot },
    { number: 7, title: "UI Preview", description: "Choose interface", icon: FileText },
    { number: 8, title: "Build Agent", description: "Create your agent", icon: CheckCircle }
  ];

  const sqlSteps = [
    { number: 1, title: "Agent Type", description: "Choose your agent", icon: Bot },
    { number: 2, title: "Structured Data", description: "Select data source", icon: Database },
    { number: 3, title: "LLM & API Key", description: "Configure model", icon: Bot },
    { number: 4, title: "SQL Generator", description: "Choose toolkit", icon: Zap },
    { number: 5, title: "UI Preview", description: "Choose interface", icon: FileText },
    { number: 6, title: "Build Agent", description: "Create your agent", icon: CheckCircle }
  ];

  const currentSteps = agentType === 'rag' ? ragSteps : agentType === 'sql' ? sqlSteps : ragSteps;
  const maxSteps = agentType === 'rag' ? 8 : agentType === 'sql' ? 6 : 8;

  const nextStep = () => {
    if (currentStep < maxSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    navigate('/my-agents');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/dashboard" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-wednes-gradient rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white animate-shimmer bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%]">
                WEDNES.AI
              </span>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" className="hover:scale-105 transition-all duration-300">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Create Your AI Agent
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Build powerful {agentType === 'rag' ? 'RAG' : agentType === 'sql' ? 'SQL' : 'AI'} agents with our visual workflow
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 animate-slide-up">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Step {currentStep} of {maxSteps}
            </span>
            <div className="w-full max-w-md bg-gray-200 dark:bg-gray-700 rounded-full h-2 ml-4">
              <div 
                className="bg-wednes-gradient h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / maxSteps) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {currentSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className={`text-center transition-all duration-300 ${
                  currentStep === step.number 
                    ? 'scale-110' 
                    : currentStep > step.number 
                      ? 'opacity-75' 
                      : 'opacity-50'
                }`}>
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    currentStep === step.number 
                      ? 'bg-wednes-gradient text-white shadow-lg transform scale-110' 
                      : currentStep > step.number 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                  }`}>
                    {currentStep > step.number ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                  </div>
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-300 hidden md:block">
                    {step.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-600 shadow-xl animate-expand">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900 dark:text-white">
              {currentSteps[currentStep - 1]?.title}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              {currentSteps[currentStep - 1]?.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step Content */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                    agentType === 'rag' ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'hover:shadow-xl'
                  }`}
                  onClick={() => setAgentType('rag')}
                >
                  <CardContent className="p-8 text-center">
                    <FileText className="w-20 h-20 mx-auto mb-6 text-blue-500 animate-float" />
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">RAG Agent</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Create agents that understand and query documents using retrieval-augmented generation
                    </p>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      Perfect for document analysis, knowledge bases, and Q&A systems
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                    agentType === 'sql' ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-900/20' : 'hover:shadow-xl'
                  }`}
                  onClick={() => setAgentType('sql')}
                >
                  <CardContent className="p-8 text-center">
                    <Database className="w-20 h-20 mx-auto mb-6 text-purple-500 animate-float delay-300" />
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">SQL Agent</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Build agents that query databases and provide intelligent insights from structured data
                    </p>
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                      Ideal for data analysis, reporting, and business intelligence
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* RAG Agent Steps */}
            {agentType === 'rag' && currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Select Data Source</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { type: 'pdf', label: 'PDF Files', icon: FileText },
                    { type: 'html', label: 'HTML/Web', icon: Upload },
                    { type: 'text', label: 'Text Files', icon: FileText },
                    { type: 'api', label: 'API/Database', icon: Database }
                  ].map(({ type, label, icon: Icon }) => (
                    <Card 
                      key={type}
                      className={`cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                        formData.source === type ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''
                      }`}
                      onClick={() => setFormData({...formData, source: type})}
                    >
                      <CardContent className="p-6 text-center">
                        <Icon className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                        <div className="font-medium text-gray-900 dark:text-white">{label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {agentType === 'rag' && currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Configure Chunking Strategy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="chunk-size">Chunk Size</Label>
                    <Select onValueChange={(value) => setFormData({...formData, chunkSize: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select chunk size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="512">512 tokens</SelectItem>
                        <SelectItem value="1024">1024 tokens</SelectItem>
                        <SelectItem value="2048">2048 tokens</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="overlap">Overlap</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select overlap" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50">50 tokens</SelectItem>
                        <SelectItem value="100">100 tokens</SelectItem>
                        <SelectItem value="200">200 tokens</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {agentType === 'rag' && currentStep === 4 && (
              <div className="space-y-4">
                <Label>Choose Embedding Model</Label>
                <Select onValueChange={(value) => setFormData({...formData, embedding: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select embedding model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sentence-transformers">SentenceTransformers</SelectItem>
                    <SelectItem value="openai">OpenAI Embeddings</SelectItem>
                    <SelectItem value="cohere">Cohere Embeddings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {agentType === 'rag' && currentStep === 5 && (
              <div className="space-y-4">
                <Label>Choose Vector Store</Label>
                <Select onValueChange={(value) => setFormData({...formData, vectorStore: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vector store" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="faiss">FAISS</SelectItem>
                    <SelectItem value="chromadb">ChromaDB</SelectItem>
                    <SelectItem value="pinecone">Pinecone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* SQL Agent Steps */}
            {agentType === 'sql' && currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Select Structured Data Source</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { type: 'postgresql', label: 'PostgreSQL' },
                    { type: 'sqlite', label: 'SQLite' },
                    { type: 'csv', label: 'CSV Files' }
                  ].map(({ type, label }) => (
                    <Card 
                      key={type}
                      className={`cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                        formData.sqlType === type ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-900/20' : ''
                      }`}
                      onClick={() => setFormData({...formData, sqlType: type})}
                    >
                      <CardContent className="p-6 text-center">
                        <Database className="w-12 h-12 mx-auto mb-3 text-purple-500" />
                        <div className="font-medium text-gray-900 dark:text-white">{label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Common LLM Step */}
            {((agentType === 'rag' && currentStep === 6) || (agentType === 'sql' && currentStep === 3)) && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Configure LLM & API Key</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select LLM Provider</Label>
                    <Select onValueChange={(value) => setFormData({...formData, llm: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose LLM provider" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="openai">OpenAI GPT-4</SelectItem>
                        <SelectItem value="anthropic">Claude</SelectItem>
                        <SelectItem value="google">Gemini</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>API Key</Label>
                    <Input 
                      type="password" 
                      placeholder="Enter your API key"
                      value={formData.apiKey}
                      onChange={(e) => setFormData({...formData, apiKey: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* SQL Generator Step */}
            {agentType === 'sql' && currentStep === 4 && (
              <div className="space-y-4">
                <Label>Choose SQL Generator Toolkit</Label>
                <Select onValueChange={(value) => setFormData({...formData, sqlGenerator: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select SQL toolkit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pandasai">PandasAI</SelectItem>
                    <SelectItem value="langchain">LangChain SQL Agent</SelectItem>
                    <SelectItem value="custom">Custom Tools</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* UI Preview Step */}
            {((agentType === 'rag' && currentStep === 7) || (agentType === 'sql' && currentStep === 5)) && (
              <div className="space-y-4">
                <Label>Select UI for Preview</Label>
                <Select onValueChange={(value) => setFormData({...formData, ui: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose interface" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="streamlit">Streamlit</SelectItem>
                    <SelectItem value="gradio">Gradio</SelectItem>
                    <SelectItem value="terminal">Terminal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Build Agent Step */}
            {((agentType === 'rag' && currentStep === 8) || (agentType === 'sql' && currentStep === 6)) && (
              <div className="space-y-6 text-center">
                <div className="space-y-4">
                  <CheckCircle className="w-20 h-20 mx-auto text-green-500 animate-pulse" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to Build!</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your {agentType === 'rag' ? 'RAG' : 'SQL'} agent configuration is complete
                  </p>
                </div>
                
                <Button 
                  onClick={handleComplete}
                  size="lg" 
                  className="bg-wednes-gradient hover:opacity-90 text-white px-8 py-4 text-lg animate-pulse"
                >
                  Build My Agent
                </Button>
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
            className="hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          <Button 
            onClick={nextStep}
            disabled={currentStep === maxSteps || (currentStep === 1 && !agentType)}
            className="bg-wednes-gradient hover:opacity-90 text-white hover:scale-105 transition-all duration-300"
          >
            {currentStep === maxSteps ? 'Complete' : 'Next'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgentBuilder;
