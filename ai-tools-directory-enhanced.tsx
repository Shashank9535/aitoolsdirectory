import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, ExternalLink, Sparkles, TrendingUp } from 'lucide-react';

// Enhanced AI tools data
const aiTools = [
  {
    id: 1,
    name: "Midjourney",
    category: "Image Generation",
    description: "Create stunning artwork and illustrations using advanced AI",
    features: ["Photorealistic images", "Artistic styles", "High resolution output", "Discord integration"],
    rating: 4.9,
    link: "https://midjourney.com",
    popularity: 98,
    isNew: true
  },
  {
    id: 2,
    name: "ChatGPT",
    category: "Chatbots",
    description: "Advanced language model for conversation and content creation",
    features: ["Natural conversation", "Code generation", "Content writing", "Problem solving"],
    rating: 4.9,
    link: "https://chat.openai.com",
    popularity: 99,
    isTrending: true
  },
  {
    id: 3,
    name: "Stable Diffusion",
    category: "Image Generation",
    description: "Open-source image generation model with amazing capabilities",
    features: ["Text to image", "Image editing", "Fast generation", "Local installation"],
    rating: 4.7,
    link: "https://stabilityai.com",
    popularity: 92,
    isNew: true
  },
  {
    id: 4,
    name: "Claude",
    category: "Chatbots",
    description: "Advanced AI assistant with exceptional writing and analysis capabilities",
    features: ["Long context", "Code analysis", "Academic writing", "Research"],
    rating: 4.8,
    link: "https://anthropic.com/claude",
    popularity: 94,
    isTrending: true
  },
  {
    id: 5,
    name: "ElevenLabs",
    category: "Voice Generation",
    description: "Premium AI voice generation and cloning platform",
    features: ["Voice cloning", "Multiple languages", "Emotion control", "API access"],
    rating: 4.6,
    link: "https://elevenlabs.io",
    popularity: 88
  },
  {
    id: 6,
    name: "GitHub Copilot",
    category: "Code Generation",
    description: "AI-powered code completion and generation tool",
    features: ["Code suggestions", "Multiple languages", "IDE integration", "Documentation"],
    rating: 4.8,
    link: "https://github.com/features/copilot",
    popularity: 95,
    isTrending: true
  },
  {
    id: 7,
    name: "RunwayML",
    category: "Video Generation",
    description: "Create and edit videos using AI",
    features: ["Video generation", "Motion tracking", "Green screen", "Video editing"],
    rating: 4.7,
    link: "https://runway.ml",
    popularity: 87,
    isNew: true
  },
  {
    id: 8,
    name: "Jasper",
    category: "Content Writing",
    description: "AI-powered content creation and copywriting platform",
    features: ["Blog writing", "Marketing copy", "SEO optimization", "Multiple tones"],
    rating: 4.5,
    link: "https://jasper.ai",
    popularity: 86
  },
  {
    id: 9,
    name: "Hugging Face",
    category: "AI Development",
    description: "Platform for building, training and deploying AI models",
    features: ["Model hosting", "Datasets", "Community", "Free tier"],
    rating: 4.8,
    link: "https://huggingface.co",
    popularity: 93
  }
];

const categories = ["All", "Image Generation", "Chatbots", "Voice Generation", "Code Generation", "Video Generation", "Content Writing", "AI Development"];

const AIToolsDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // Filter tools based on search and category
  const filteredTools = aiTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => b[sortBy] - a[sortBy]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="animate-spin text-white text-4xl">⭐</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/anime-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-indigo-900/90" />
        <div className="absolute inset-0 bg-[url('/sparkles.png')] bg-repeat animate-twinkle opacity-30" />
      </div>

      <div className="container mx-auto px-4 py-8 relative">
        {/* Header with floating animation */}
        <div className="text-center mb-12 animate-float">
          <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in">
            AI Tools Directory
          </h1>
          <p className="text-gray-300 text-xl">
            Discover the Perfect AI Tools for Your Creative Journey
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-8 animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-3 text-gray-400 group-hover:text-purple-400 transition-colors" size={20} />
              <input
                type="text"
                placeholder="Search AI tools..."
                className="w-full pl-10 pr-4 py-2 bg-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all hover:bg-white/30"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="px-4 py-2 bg-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all hover:bg-white/30"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>

            <select
              className="px-4 py-2 bg-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all hover:bg-white/30"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popularity" className="bg-gray-800">Most Popular</option>
              <option value="rating" className="bg-gray-800">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Tools Grid with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <div
              key={tool.id}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {tool.name}
                  </h2>
                  {tool.isNew && (
                    <span className="inline-flex items-center text-xs text-yellow-400 mt-1">
                      <Sparkles size={12} className="mr-1" /> New
                    </span>
                  )}
                  {tool.isTrending && (
                    <span className="inline-flex items-center text-xs text-green-400 mt-1 ml-2">
                      <TrendingUp size={12} className="mr-1" /> Trending
                    </span>
                  )}
                </div>
                <span className="flex items-center text-yellow-400 group-hover:scale-110 transition-transform">
                  <Star className="fill-current" size={16} />
                  <span className="ml-1">{tool.rating}</span>
                </span>
              </div>
              
              <span className="inline-block px-3 py-1 mb-3 text-sm bg-purple-500/30 rounded-full text-purple-200 group-hover:bg-purple-500/50 transition-colors">
                {tool.category}
              </span>
              
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">{tool.description}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-400 group-hover:text-gray-300 transition-colors">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="text-sm">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 group-hover:scale-105"
              >
                Visit Website
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIToolsDirectory;
