import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="relative">
          <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-600 p-5">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Ready to Build the </span>
              <span className="text-purple-500">Future?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the revolution of AI-assisted development. Start building
              amazing Solana applications with our intelligent assistant today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/chat">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white border-0 px-8 py-4 text-lg transition-all duration-300"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-4 text-lg"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
