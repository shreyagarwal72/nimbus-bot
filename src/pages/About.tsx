import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, Zap, Shield, MessageSquare } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2 ml-4">
            <Bot className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NimbusBot.ai
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Bot className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">About NimbusBot.ai</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your intelligent AI companion powered by Google Gemini, designed with an iOS-inspired interface for seamless conversations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-border/50 shadow-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Experience real-time AI responses powered by Google Gemini 2.5 Flash, optimized for speed and accuracy
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Secure & Private</CardTitle>
              <CardDescription>
                Your conversations are protected with enterprise-grade security and privacy measures
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Unlimited Conversations</CardTitle>
              <CardDescription>
                Chat as much as you want with no message limits or restrictions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 shadow-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>iOS-Inspired Design</CardTitle>
              <CardDescription>
                Beautiful, intuitive interface that feels native on all your devices
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="border-border/50 shadow-lg animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Sign Up</h3>
                <p className="text-sm text-muted-foreground">
                  Create your free account in seconds with just your email
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Start Chatting</h3>
                <p className="text-sm text-muted-foreground">
                  Begin conversations with NimbusBot on any topic you want
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Get Instant Answers</h3>
                <p className="text-sm text-muted-foreground">
                  Receive intelligent, helpful responses powered by advanced AI
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Link to="/">
            <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-200">
              Start Chatting Now
            </Button>
          </Link>
        </div>
      </main>

      <footer className="border-t border-border mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 NimbusBot.ai. All rights reserved.</p>
          <p className="mt-2">Powered by Google Gemini AI</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
