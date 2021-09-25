/**
 * File Reader Example
 *
 * This sample file
 */
export class FileReader {
  private fileHandler: Deno.File | undefined;
  private fileContents: string = "";
  private hasContents: boolean = false;

  /**
   * Open the filename passed as a parameter and and return the fileHandler
   * @param fileName file to be opened
   * @returns file handler
   */
  private async openFile(fileName: string) {
    if (!fileName) throw new Error("Please provide a filename.");

    try {
      this.fileHandler = await Deno.open(fileName);
    } catch (e) {
      throw new Error("Error opening file.");
    }
  }

  /**
   * Read the contents of the file at the file handler and decode them into a string
   * @param file file handler
   * @returns string representation of the file
   */
  async readFile(filename: string) {
    await this.openFile(filename);
    if (this.fileHandler == undefined) {
      throw new Error("Cannot read file. fileHandler is undefined");
    }
    const decoder = new TextDecoder();
    let buf = new Uint8Array(1024);
    const numOfByteRead = await Deno.read(this.fileHandler!.rid, buf);
    this.fileContents = decoder.decode(buf);
    this.hasContents = true;
  }

  /**
   * Returns the file's contents
   * @returns file contents
   */
  getContents() {
    return this.fileContents;
  }
}
