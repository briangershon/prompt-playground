import { writeHaiku } from './lib/ai';

async function main() {
  const topic = 'Love me Tender';
  const result = await writeHaiku(topic);
  console.log(result);
}

main();
