import { Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="text-purple-500">SolanaAI</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We&apos;re an emerging startup building the future of AI-assisted
              development for the Solana ecosystem. Our mission is to empower
              developers with intelligent tools that accelerate innovation and
              simplify complex blockchain development.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600 p-3 flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-400">
                    To democratize blockchain development through AI-powered
                    assistance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600 p-3 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-400">
                    Building the next generation of developer tools for Web3.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-purple-600 p-3 flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Our Commitment
                  </h3>
                  <p className="text-gray-400">
                    Dedicated to delivering cutting-edge AI solutions with
                    transparency and quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">
                    New
                  </div>
                  <div className="text-gray-400">Startup</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">
                    Beta
                  </div>
                  <div className="text-gray-400">Phase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">
                    AI
                  </div>
                  <div className="text-gray-400">Powered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">
                    Open
                  </div>
                  <div className="text-gray-400">Source</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
