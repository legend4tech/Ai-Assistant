import { Bot } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AIThinking() {
  return (
    <div className="flex items-center space-x-4 mb-8">
      <Avatar className="h-12 w-12 bg-purple-600">
        <AvatarFallback className="bg-transparent">
          <Bot className="h-6 w-6 text-white" />
        </AvatarFallback>
      </Avatar>

      <div className="flex items-center space-x-4 bg-slate-700/60 p-5 rounded-2xl border border-purple-500/30">
        <div className="flex items-center space-x-3">
          <Bot className="h-6 w-6 text-purple-400" />
          <div className="flex space-x-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <span className="text-base text-gray-200 font-medium">
            AI is thinking...
          </span>
        </div>
      </div>
    </div>
  );
}
