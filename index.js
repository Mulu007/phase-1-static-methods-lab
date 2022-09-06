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
  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}
// let formatter = new Formatter.titleize("THE BOY")
// console.log(formatter)