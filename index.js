class Formatter {
  // charAt() returns the character at a specified index (position) in a string.
  static capitalize(string) {
    let firstLetter = string.charAt(0).toUpperCase;
    return string.replace(string.charAt(0), firstLetter)
  }
  // this method takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces
  static sanitize(string) {
    return string.replace(/[^-,'A-Za-z0-9]+/g, '');
  }
  // static titleize(string) {
  //   if (string = "the" || "a" || "an" || "but" || "of" || "and" || "for" || "at" || "by" || "from") {
  //     return string.toLowerCase();
  //   } else {
  //     return string.toUpperCase();
  //   }
  // }
}
