var alphabet = 'abcdefghijfklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ#_.';
var word = [];

alphabet = alphabet.split('');

for (var i = 0; i < 5; i += 1) {
  for (var j = 0, max = alphabet.length; j < 64; j += 1) {
    word.push(alphabet[Math.round(Math.random() * max)]);
  }
  console.log(word.join(''));
  word = [];
};