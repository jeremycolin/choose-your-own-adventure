import { Choice, PageData } from "../models/page";
import { raw } from "./raw";
import { mkdirSync, rmdirSync, writeFileSync } from "fs";

const OUTPUT_DIR = "./src/adventures/alone-against-the-flames/generated-pages/";

function parseContent() {
  rmdirSync(OUTPUT_DIR, { recursive: true });
  mkdirSync(OUTPUT_DIR);

  // split pages, ignoring START line
  const splitted = raw.split(/\n(\d{1,3})\n/g).slice(1);

  let expectNewPage = true;
  const pagesMap = splitted.reduce((pages, line, index) => {
    if (expectNewPage && line.length > 4) {
      console.error("NOOOO: ", line);
    } else if (expectNewPage) {
      pages.set(line, splitted[index + 1]);
      expectNewPage = false;
    } else {
      expectNewPage = true;
    }
    return pages;
  }, new Map<string, string>());

  pagesMap.forEach((content, page) => {
    const choices: Array<Choice> = [];
    const textLines: Array<string> = [];
    const lines = content.split("\n");

    lines.forEach((line) => {
      const found = line.match(/[Gg]o to (\d{1,3})/);
      if (found) {
        choices.push({ label: `TODO LABEL - ${found.input}`, actions: [{ page: found[1] }] });
      } else {
        textLines.push(line);
      }
    });

    const pageModel: PageData = {
      title: page,
      text: textLines.join(" ").trim().replaceAll(/[’‘]/g, "'"),
      choices,
    };

    const fileContent = `import { PageData } from "../../../models/page";

export const page: PageData = ${JSON.stringify(pageModel)};
`;

    writeFileSync(`${OUTPUT_DIR}/${page}.ts`, fileContent);
  });
}

parseContent();
