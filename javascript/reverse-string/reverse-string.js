function reverseString (input) {
  // return input;
  var output = '';
  for (let i = input.length -1; i >=0; i--){
    var char = input[i];
    output += char;
  }
  return output;
}

module.exports = reverseString;
