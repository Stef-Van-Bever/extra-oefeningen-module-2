function doortellen(getal, printOneven) {
  if (getal >= 100) {
    console.log("Het getal is 100 of meer");
    return;
  }

  function isOneven(num) {
    if (num % 2 === 1) {
      return true;
    } else {
      return false;
    }
  }

  let output = "";

  for (getal; getal <= 100; getal++) {
    if (printOneven && isOneven(getal)) {
      output += `${getal} `;
    } else if (!printOneven && !isOneven(getal)) {
      output += `${getal} `;
    }
  }
  console.log(output);
}

doortellen(89, true);
doortellen(89, false);
