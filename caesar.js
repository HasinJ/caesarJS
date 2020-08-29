const caesar = function(string, shift) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let alphabetCapped = alphabet.join('').toUpperCase()
  alphabetCapped=Array.from(alphabetCapped)
  string = Array.from(string)

  string = string.map(letter => {
    let index = alphabet.indexOf(letter)

    if (index==-1) {
      index=alphabetCapped.indexOf(letter)
      if (index==-1) return letter //means it's not a letter (punctuation or space)
      return alphabetCapped[index+=shift]
    }else {  return alphabet[index+shift]}
  })

  return string.join('')


}



//26 letters in alphabet

module.exports = caesar
