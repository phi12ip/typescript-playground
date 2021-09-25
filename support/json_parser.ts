/**
 * JSON 
 */
export class JSONParser {

  /**
   * Take a JSON string and return an Object representation
   * @param json string representation of a JSON object ( not checked )
   * @returns object representation of the JSON string
   */
  static toInterface<T>(json: string): T {
    let obj: T = JSON.parse(json.trim().replaceAll("\0", ""));
    return obj;
  }
}
