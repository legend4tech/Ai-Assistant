import type { Message as MessageType } from "ai";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { User, Bot } from "lucide-react";

interface MessageProps {
  message: MessageType;
}

export default function Message({ message }: MessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex items-end space-x-4 mb-8",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <Avatar className="w-12 h-12 bg-purple-600">
          <AvatarFallback className="bg-transparent">
            <Bot className="h-6 w-6 text-white" />
          </AvatarFallback>
        </Avatar>
      )}

      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-6 py-4 text-base relative overflow-hidden",
          isUser
            ? "bg-purple-600 text-white"
            : "bg-slate-700/60 text-gray-100 border border-purple-500/30"
        )}
      >
        <div className="relative z-10">
          {message.content.split("\n").map((line, index) => (
            <p key={index} className="mb-2 last:mb-0 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>

      {isUser && (
        <Avatar className="w-12 h-12 bg-slate-600">
          <AvatarFallback className="bg-transparent">
            <User className="h-6 w-6 text-white" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
