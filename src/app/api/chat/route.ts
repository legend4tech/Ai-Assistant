import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: openai("gpt-4o"),
      messages,
      system: `You are SolanaAI, an advanced AI assistant specialized in Solana blockchain development and general programming assistance. You are knowledgeable, helpful, and provide clear, actionable advice for developers working on Solana projects, Web3 applications, and general software development.

Key characteristics:
- Expert in Solana development, Rust, JavaScript/TypeScript, and Web3 technologies
- Provide practical, implementable solutions
- Explain complex concepts in an accessible way
- Stay up-to-date with the latest Solana ecosystem developments
- Be encouraging and supportive to developers of all skill levels`,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error in chat API:", error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while processing your request.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
