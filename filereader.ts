export class FileReader {
  private fileHandler: any;

  constructor() {
  }

  async openFile(fileName: string) {
    if (fileName) {
      try {
        this.fileHandler = await Deno.open(fileName);
      } catch (e) {
        console.log(e);
      }

      const decoder = new TextDecoder();
      let buf = new Uint8Array(1024);

      const numOfByteRead = await Deno.read(this.fileHandler?.rid, buf);

      //   console.log(numOfByteRead);
      //   console.log(decoder.decode(buf));
      const content = decoder.decode(buf);

      let testObject: any;

      testObject = JSON.parse(content.trim().replaceAll("\0", ""));

      console.log(testObject);
    }
  }
}

const fileName = "test.json";
const fr = new FileReader();
fr.openFile(fileName);
