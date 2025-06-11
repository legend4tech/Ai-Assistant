"use client";

import { useRef, useEffect } from "react";
import { SendHorizontal, AlertCircle, Bot } from "lucide-react";
import Message from "./Message";
import AIThinking from "./AIThinking";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: "/api/chat",
      onFinish: (message, { usage, finishReason }) => {
        console.log("Finished streaming message:", message);
        console.log("Token usage:", usage);
        console.log("Finish reason:", finishReason);
      },
      onError: (error) => {
        console.error("An error occurred:", error);
      },
      onResponse: (response) => {
        console.log("Received HTTP response from server:", response);
      },
    });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      <Card
        className="relative flex flex-col transition-all duration-500 ease-in-out bg-slate-800/60 backdrop-blur-2xl border-2 border-purple-500/30 shadow-2xl"
        style={{
          minHeight: "120px",
          maxHeight: "90vh",
          height: messages.length > 0 ? "750px" : "260px",
        }}
      >
        <CardHeader className="flex-shrink-0 border-b border-purple-500/30 bg-slate-800/50 rounded-t-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600 p-2.5">
              <Bot className="h-7 w-7 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-white">
                SolanaAI Assistant
              </CardTitle>
              <p className="text-sm text-gray-400 font-medium">
                Your intelligent development companion
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent
          className="flex-grow overflow-hidden p-8 transition-all duration-300 ease-in-out relative"
          style={{
            maxHeight: messages.length > 0 ? "calc(100% - 180px)" : "0",
          }}
        >
          <ScrollArea
            className="h-full pr-4 relative z-10"
            style={{ opacity: messages.length > 0 ? 1 : 0 }}
          >
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-purple-600/20 p-5">
                    <Bot className="w-10 h-10 text-purple-500 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Ready to assist you!
                  </h3>
                  <p className="text-gray-400">
                    Ask me anything about Solana development, coding, or AI.
                  </p>
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
            {isLoading && <AIThinking />}
            {error && (
              <Alert
                variant="destructive"
                className="mb-4 bg-red-500/10 border-red-400/30 backdrop-blur-sm"
              >
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <AlertDescription className="text-red-300">
                    {error.message}
                  </AlertDescription>
                </div>
              </Alert>
            )}
            <div ref={messagesEndRef} />
          </ScrollArea>
        </CardContent>

        <CardFooter className="flex-shrink-0 border-t border-purple-500/30 p-8 bg-slate-800/50 rounded-b-xl">
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center space-x-4"
          >
            <Input
              className="flex-grow bg-slate-700/50 border-2 border-purple-500/40 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-6 py-4 text-base transition-all duration-300"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about Solana development, AI, or anything else..."
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-purple-600 hover:bg-purple-700 text-white border-0 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <SendHorizontal className="h-5 w-5 mr-2" />
              Send
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
