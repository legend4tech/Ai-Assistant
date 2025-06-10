import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="relative mb-8">
          <h1 className="relative text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">AI-Powered</span>
            <br />
            <span className="text-purple-500">Solana Assistant</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          Experience the next generation of development with our AI assistant.
          Built for the Solana ecosystem, designed for the future of blockchain
          innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link href="/chat">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white border-0 px-10 py-5 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center">
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-500/50 bg-transparent text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-300 px-10 py-5 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Learn More
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-purple-600 p-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Lightning Fast
            </h3>
            <p className="text-gray-400">
              Get instant responses powered by advanced AI models
            </p>
          </div>

          <div className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-purple-600 p-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Smart Assistance
            </h3>
            <p className="text-gray-400">
              Intelligent code suggestions and development guidance
            </p>
          </div>

          <div className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-purple-600 p-4">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Solana Ready</h3>
            <p className="text-gray-400">
              Optimized for Solana blockchain development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
