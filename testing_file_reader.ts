import { FileReader } from "./support/file_reader.ts";
import { JSONParser } from "./support/json_parser.ts";

const fileName = "test.json";

// Interface for JSON object
interface Format {
  course: string;
}

// Read file
let fr = new FileReader();

try {
  await fr.readFile(fileName);
} catch (err: any) {
  throw new Error(err);
}

let content = fr.getContents();
// let content = await FileReader.readFile(file);

// Convert JSON to Object
let obj: Format = JSONParser.toInterface<Format>(content);

console.log();