import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';
import { describe, expect, test } from 'vitest';
import { writeHaiku } from '../../lib/ai';

describe('test Haiku', () => {
  test('this is a valid haiku', async () => {
    const topic = 'Love me Tender';
    const result = await writeHaiku(topic);
    expect(await testValidHaiku({ poem: result })).toBeTruthy();
  });

  test('this is invalid haiku', async () => {
    const poem = 'I drink coffee';
    expect(await testValidHaiku({ poem })).toBeFalsy();
  });
});

export async function testValidHaiku({
  poem,
}: {
  poem: string;
}): Promise<boolean> {
  const prompt = `Review the following poem and evaluate if the poem is a haiku. Respond with exactly one word:
      - "pass" - if the poem is a valid haiku
      - "fail" - if the summary is not a valid haiku
      
      Poem:
      ${poem}
`;

  const { text, usage } = await generateText({
    model: anthropic('claude-3-haiku-20240307'), // less expensive model
    prompt,
  });

  console.info({
    poem,
    result: text,
    usage,
  });
  return text.toLowerCase().includes('pass');
}
