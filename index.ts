import { Command } from 'commander';
import { readFileSync, writeFileSync } from 'fs';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';

async function main() {
  const program = new Command('example');

  // Option for file to read
  program.requiredOption('-f, --file <file>', 'File to read');
  // Option for output file
  program.requiredOption('-o, --output <output>', 'Output file');

  program.action(async (options) => {
    const fileContents = readFileSync(options.file, 'utf8');

    // Taken from
    // https://www.npmjs.com/package/remark-html
    const file = await unified()
      .use(remarkParse)
      .use(remarkHtml)
      .process(fileContents);

    writeFileSync(options.output, String(file));

    console.log(`File ${options.file} written to ${options.output}`);
  });

  program.parse(process.argv);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
