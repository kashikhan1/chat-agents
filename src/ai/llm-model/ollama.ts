import { ChatOllama } from "@langchain/ollama";

export const llm = new ChatOllama({
  model: process.env.MODEL_NAME,
  baseUrl: process.env.OLLAMA_BASE_URL,
  temperature: 0,
});