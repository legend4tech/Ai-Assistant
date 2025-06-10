import Chat from "@/components/chat/Chat";
import Navigation from "@/components/landing/Navigation";

export default function ChatPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Subtle background for chat page */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/4 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <div className="flex-1 flex items-center justify-center p-6 pt-24">
          <Chat />
        </div>
      </div>
    </main>
  );
}
