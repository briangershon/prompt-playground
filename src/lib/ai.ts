import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';
import 'dotenv/config';

export async function writeHaiku(topic: string): Promise<string> {
  const { text, usage } = await generateText({
    model: anthropic('claude-3-5-haiku-20241022'),
    prompt: `Create a haiku for ${topic}`,
  });
  console.info({ text, usage });
  return text;
}
