function kleinLetters(tekst) {
  return tekst.split("").every((letter) => letter === letter.toLowerCase());
}

console.log(kleinLetters("bart"));
console.log(kleinLetters("Bart"));
console.log(kleinLetters("BaRt"));
