function berekenTotaal() {
  let totaal = 0;
  let i = 0;
  while (i < 10) {
    totaal += i;
    i++;
  }
  return totaal;
}

resultaat = berekenTotaal();
console.log(`Het totaal is ${resultaat}`);
