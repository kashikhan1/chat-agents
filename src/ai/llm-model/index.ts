import { tools } from "@/ai/tools";
import { llm } from "./ollama";

export const model = llm.bindTools(tools);