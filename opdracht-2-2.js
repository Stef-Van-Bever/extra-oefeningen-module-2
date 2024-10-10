function uitlegBijTypeVanParameter(parameter) {
  switch (typeof parameter) {
    case "boolean":
      console.log("De mogelijke waarden zijn: false en true");
      break;
    case "number":
      console.log("Mogelijke waarden zijn: 1, 96, 3.141595");
      break;
    case "string":
      console.log("Mogelijke waarden zijn 'a', 'Bart', '3'");
      break;
    case "object":
      console.log("Mogelijke waarden zijn: [1, 2], {naam: 'Bart'}");
      break;
    case "undefind":
      console.log("De waarde is: undefined");
      break;
    case "function":
      console.log("De waarde is een functie, bv: function hihi(){}");
      break;
    default:
      console.log("Geen informatie over dit type");
      break;
  }
}

uitlegBijTypeVanParameter(true);
uitlegBijTypeVanParameter(15);
uitlegBijTypeVanParameter("Stef");
uitlegBijTypeVanParameter([1, 2]);
uitlegBijTypeVanParameter(undefined);
uitlegBijTypeVanParameter(() => {
  console.log("Hallo");
});
