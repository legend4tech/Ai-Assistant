import { Code, Database, Rocket, Shield, Cpu, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Code,
      title: "Smart Code Generation",
      description:
        "Generate high-quality code snippets and complete functions with AI assistance.",
    },
    {
      icon: Database,
      title: "Blockchain Integration",
      description:
        "Seamlessly integrate with Solana blockchain and Web3 technologies.",
    },
    {
      icon: Rocket,
      title: "Rapid Development",
      description:
        "Accelerate your development process with intelligent suggestions and automation.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Built with security best practices and reliable infrastructure.",
    },
    {
      icon: Cpu,
      title: "Advanced AI Models",
      description:
        "Powered by state-of-the-art language models for superior performance.",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description:
        "Access your AI assistant from anywhere, anytime with cloud-based infrastructure.",
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Powerful </span>
            <span className="text-purple-500">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the capabilities that make our AI assistant the perfect
            companion for your development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="w-18 h-18 rounded-2xl bg-purple-600 p-5 mb-8 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
