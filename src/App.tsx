import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Brain, 
  Server,
  Globe,
  CreditCard,
  Banknote,
  ShoppingCart,
  ArrowUp,
  Menu,
  X,
  ChevronDown,
  Zap,
  Users,
  Shield,
  Smartphone,
  MessageSquare,
  TrendingUp,
  Layers,
  GitBranch,
  Terminal,
  Cpu,
  Cloud
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const techStack = [
    { name: 'Golang', icon: Code2, color: 'from-blue-400 to-blue-600', description: 'High-performance backend systems' },
    { name: 'Python', icon: Terminal, color: 'from-yellow-400 to-orange-500', description: 'FastAPI & AI integration' },
    { name: 'React.js', icon: Cpu, color: 'from-cyan-400 to-blue-500', description: 'Modern frontend experiences' },
    { name: 'Next.js', icon: Globe, color: 'from-gray-700 to-gray-900', description: 'Full-stack web applications' },
    { name: 'PostgreSQL', icon: Database, color: 'from-blue-500 to-indigo-600', description: 'Scalable data architecture' },
    { name: 'OpenAI', icon: Brain, color: 'from-purple-500 to-pink-600', description: 'AI-native applications' },
    { name: 'Microservices', icon: Layers, color: 'from-green-400 to-emerald-600', description: 'Distributed systems' },
    { name: 'Cloud', icon: Cloud, color: 'from-sky-400 to-blue-600', description: 'Scalable infrastructure' }
  ];

  const projects = [
    {
      title: 'Swaps',
      subtitle: 'AI-Powered Skill Exchange Platform',
      description: 'Revolutionary skill-swapping platform with intelligent matching algorithms, secure escrow transactions, and comprehensive credibility tracking system.',
      features: ['Smart AI Matching', 'Escrow Transactions', 'Real-time Messaging', 'Credibility Scoring'],
      tech: ['FastAPI', 'PostgreSQL', 'Redis', 'React Native', 'WebSockets'],
      icon: Users,
      gradient: 'from-violet-600 via-purple-600 to-blue-600',
      bgPattern: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%)'
    },
    {
      title: 'Addis-Connect',
      subtitle: 'Hyper-Local Social Network',
      description: 'Ethiopia-focused microblogging platform featuring real-time feeds, voice/video chat, trending algorithms, and AI-powered content moderation.',
      features: ['Real-time Feed', 'Voice/Video Chat', 'Trending Engine', 'Content Moderation'],
      tech: ['Go', 'Redis', 'PostgreSQL', 'WebSockets', 'Next.js'],
      icon: Globe,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      bgPattern: 'radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.3), transparent 50%), radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.3), transparent 50%)'
    },
    {
      title: 'Escrow-as-a-Service',
      subtitle: 'API-First Payment Security',
      description: 'Microservices-based escrow platform integrating multiple payment providers to create programmable trust layers for African mobile money.',
      features: ['Multi-Provider Integration', 'gRPC APIs', 'Microservices', 'Real-time Processing'],
      tech: ['Go', 'gRPC', 'PostgreSQL', 'Redis', 'Docker'],
      icon: Shield,
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      bgPattern: 'radial-gradient(circle at 40% 40%, rgba(251, 146, 60, 0.3), transparent 50%), radial-gradient(circle at 60% 60%, rgba(239, 68, 68, 0.3), transparent 50%)'
    },
    {
      title: 'Early Wage Access',
      subtitle: 'Fintech Wage Solution',
      description: 'Employee financial wellness platform enabling early wage access through employer integration and mobile money disbursement systems.',
      features: ['HR Integration', 'Mobile Money', 'Instant Disbursement', 'Employer Dashboard'],
      tech: ['Go', 'PostgreSQL', 'FastAPI', 'Mobile APIs'],
      icon: Banknote,
      gradient: 'from-indigo-600 via-blue-600 to-purple-600',
      bgPattern: 'radial-gradient(circle at 25% 75%, rgba(99, 102, 241, 0.3), transparent 50%), radial-gradient(circle at 75% 25%, rgba(147, 51, 234, 0.3), transparent 50%)'
    },
    {
      title: 'P2P E-commerce',
      subtitle: 'AI-Enhanced Marketplace',
      description: 'Next-generation marketplace with built-in escrow, real-time chat, AI-powered listing moderation, and intelligent credibility scoring.',
      features: ['AI Moderation', 'Smart Escrow', 'Real-time Chat', 'Credibility AI'],
      tech: ['Go', 'PostgreSQL', 'Redis', 'OpenAI', 'WebSockets'],
      icon: ShoppingCart,
      gradient: 'from-pink-600 via-rose-600 to-red-600',
      bgPattern: 'radial-gradient(circle at 60% 20%, rgba(236, 72, 153, 0.3), transparent 50%), radial-gradient(circle at 20% 80%, rgba(244, 63, 94, 0.3), transparent 50%)'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        ></div>
       <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-bold text-2xl">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Amar Mohammed
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Tech', 'Projects', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              {['About', 'Tech', 'Projects', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
              <Zap className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-blue-300">Available for new projects</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Amar Mohammed
              </span>
            </h1>
            
            <div className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 text-gray-300">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Full Stack Dev & AI Native
              </span>
            </div>
            
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full mb-12"></div>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Solopreneur building <span className="text-blue-400 font-semibold">AI-native applications</span> with real-world impact. 
            Specializing in <span className="text-purple-400 font-semibold">backend systems</span>, 
            <span className="text-cyan-400 font-semibold"> microservices</span>, and lean MVPs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-600 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-white transition-colors"
          >
            <ChevronDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm a <span className="text-blue-400 font-semibold">solopreneur</span> and full-stack developer 
                  passionate about building <span className="text-purple-400 font-semibold">AI-native applications</span> 
                  that solve real-world problems. My expertise lies in creating robust backend systems, 
                  scalable microservices architectures, and lean MVPs that make a meaningful impact.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-xl rounded-xl p-6 border border-blue-700/30">
                  <GitBranch className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">5+ Projects</h3>
                  <p className="text-gray-400 text-sm">Production-ready applications</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-xl rounded-xl p-6 border border-purple-700/30">
                  <Brain className="h-8 w-8 text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">AI-Native</h3>
                  <p className="text-gray-400 text-sm">Cutting-edge AI integration</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Core Expertise</h3>
                <div className="space-y-4">
                  {[
                    { icon: Server, title: 'Backend Architecture', desc: 'Scalable microservices & APIs' },
                    { icon: Brain, title: 'AI Integration', desc: 'OpenAI & custom ML solutions' },
                    { icon: Database, title: 'Data Systems', desc: 'PostgreSQL & Redis optimization' },
                    { icon: Zap, title: 'MVP Development', desc: 'Rapid prototyping & iteration' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <item.icon className="h-6 w-6 text-blue-400" />
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technologies powering modern, scalable applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tech.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI-native applications solving real-world problems with cutting-edge technology
            </p>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-700 hover:shadow-2xl ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:flex">
                  <div className="lg:w-1/2 p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                        <project.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                       <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h3>
                         <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300 text-xs font-medium">
                           In Development
                         </span>
                       </div>
                        <p className="text-lg text-gray-400">{project.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-white font-semibold mb-4">Key Features</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-300 text-sm font-medium hover:bg-gray-700/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 relative min-h-[400px]">
                    <div 
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                      style={{ background: project.bgPattern }}
                    ></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-700`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="h-32 w-32 text-white/10 group-hover:text-white/20 transition-colors duration-700" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50 text-center">
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              Ready to bring your AI-native application to life? 
              <br />
              <span className="text-blue-400">Let's discuss your next project.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a 
               href="https://github.com/am4rknvl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500/20 hover:-translate-y-1"
              >
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
                <ExternalLink className="h-4 w-4 opacity-50" />
              </a>
              <a 
               href="mailto:amurihasen@gmail.com"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-gray-500 text-lg">
            © 2025 Amar Mohammed. Building the future, one AI-native app at a time.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-300 z-40 group"
        >
          <ArrowUp className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </button>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;