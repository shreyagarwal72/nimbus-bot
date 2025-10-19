import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Cloud, Sparkles, Zap, Shield, ArrowRight, MessageSquare, Brain, Bot } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NimbusBot.ai
            </h1>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Link to="/auth" className="hidden sm:inline-block">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">AI-Powered Assistant</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight px-4">
            Your Intelligent Cloud Companion
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Experience the power of AI with NimbusBot. Get instant answers, creative solutions, and intelligent assistance for any task.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link to="/auth" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto">
                Start Chatting Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Why Choose NimbusBot?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Powerful features designed for modern productivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 px-4">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced AI</h3>
              <p className="text-muted-foreground">
                Powered by cutting-edge AI models for accurate and contextual responses
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conversational</h3>
              <p className="text-muted-foreground">
                Natural, human-like conversations that understand context and nuance
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Get instant responses with real-time streaming for a seamless experience
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your conversations are encrypted and never shared with third parties
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Sync</h3>
              <p className="text-muted-foreground">
                Access your conversations from anywhere, on any device
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Assistant</h3>
              <p className="text-muted-foreground">
                Get help with coding, writing, analysis, and creative tasks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 sm:p-12 border border-primary/20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
            Join thousands of users experiencing the future of AI assistance
          </p>
          <Link to="/auth" className="inline-block w-full sm:w-auto px-4">
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto">
              Create Free Account
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-primary" />
              <span className="font-semibold">NimbusBot.ai</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Created by Vanshu Agarwal © 2025. All rights reserved.
            </p>
            <Link to="/about">
              <Button variant="ghost" size="sm">About</Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
