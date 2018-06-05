function DnaTranscriber () {

}
DnaTranscriber.prototype.toRna = function (dna) {
  var rna = ''
  for (let i = 0; i < dna.length; i++) {
    let char = dna[i];
    if (char === 'C') {
      rna += 'G'
    }
    else if(char === 'G'){
      rna += 'C'
    }
    else if (char === 'A') {
      rna += 'U'
    }
    else if (char === 'T') {
      rna += 'A'
    }
    else {
      throw new Error('Invalid input');
    }
  }
  return rna;
}
module.exports = DnaTranscriber;
