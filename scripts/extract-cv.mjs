import fs from "node:fs";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const source = "../cv/haniyeh_ahmadi_cv___Job.pdf";
const pdf = await getDocument({ data: new Uint8Array(fs.readFileSync(source)) }).promise;
for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
  const page = await pdf.getPage(pageNumber);
  const content = await page.getTextContent();
  console.log(`\n--- PAGE ${pageNumber} ---\n`);
  console.log(content.items.map((item) => item.str).join(" "));
}
