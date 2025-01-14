import { startRunnable } from "@/ai";
import { nanoid } from "nanoid";
import { z } from "zod";
// import { Ollama } from "ollama";
// import fs from "fs";
// import path from "path";

const InputBodySchema = z.object({
  message: z.string().min(1),
  chatId: z.string().optional(),
});

type InputBodyType = z.infer<typeof InputBodySchema>;

export async function POST(req: Request) {
  const { message, chatId }: InputBodyType = await req.json();
  const result = InputBodySchema.safeParse({ message, chatId });

  if (!result.success) {
    return Response.json({ data: null, error: result?.error }, { status: 500 });
  }

  // const filePath = path.join(process.cwd(), "public", "images.png"); // Adjust the path as needed
  // const file = fs.readFileSync(filePath);
  // const base64 = `${file.toString("base64")}`;
  // res.status(200).json({ base64 });

  
  // const ollama = new Ollama({ host: process.env.OLLAMA_BASE_URL });
  // const response = await ollama.chat({
  //   model: 'llama3.2-vision',
  //   messages: [{
  //     role: 'user',
  //     content: 'whats the total amount in this bill? plesase just send me total amount? nothing else',
  //     images: [base64]
  //   }]
  // })
  
  // console.log(response)

  const res = await startRunnable(message, chatId ?? nanoid());

  return Response.json({ data: JSON.stringify(res) });
}
