function doortellen(getal) {
  if (getal >= 100) {
    console.log("Het getal is 100 of meer");
    return;
  }
  let output = "";
  for (getal; getal <= 100; getal++) {
    output += `${getal} `;
  }
  console.log(output);
}

doortellen(100);
doortellen(98);
doortellen(89);
