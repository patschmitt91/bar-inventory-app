function total() {
  console.log("Begin Total");
  //Store the data of inputs
  var requiredStock = document.getElementById("requiredStock").value;
  var jackDanielsOnHand = document.getElementById("jackDaniels").value;
  var crownRoyalOnHand = document.getElementById("crownRoyal").value;
  var titosVodkaOnHand = document.getElementById("titosVodka").value;
  var jamesonOnHand = document.getElementById("jameson").value;
  var captainMorganOnHand = document.getElementById("captainMorgan").value;
  var bacardiOnHand = document.getElementById("bacardi").value;
  var patronOnHand = document.getElementById("patron").value;
  var fireballOnHand = document.getElementById("fireball").value;
  var peachSchnappsOnHand = document.getElementById("peachSchnapps").value;
  var tripleSecOnHand = document.getElementById("tripleSec").value;
  var wellVodkaOnHand = document.getElementById("wellVodka").value;
  var wellRumOnHand = document.getElementById("wellRum").value;
  var wellGinOnHand = document.getElementById("wellGin").value;
  var wellWhiskeyOnHand = document.getElementById("wellWhiskey").value;
  var wellTequilaOnHand = document.getElementById("wellTequila").value;
  var budLightOnHand = document.getElementById("budLight").value;
  var millerLightOnHand = document.getElementById("millerLight").value;
  var coorsLightOnHand = document.getElementById("coorsLight").value;
  var terrapinOnHand = document.getElementById("terrapin").value;
  var mikUltraOnHand = document.getElementById("mikUltra").value;
  var pbrOnHand = document.getElementById("pbr").value;

  // Set the variables into an array

  var inventoryOnHand = [
    jackDanielsOnHand,
    crownRoyalOnHand,
    jamesonOnHand,
    captainMorganOnHand,
    bacardiOnHand,
    titosVodkaOnHand,
    patronOnHand,
    fireballOnHand,
    peachSchnappsOnHand,
    tripleSecOnHand,
    wellVodkaOnHand,
    wellRumOnHand,
    wellGinOnHand,
    wellWhiskeyOnHand,
    wellTequilaOnHand,
    budLightOnHand,
    millerLightOnHand,
    coorsLightOnHand,
    terrapinOnHand,
    mikUltraOnHand,
    pbrOnHand
  ];
  // Make an array from from the string, by splitting on ", ", and it has to be exactly this. 
  var requiredStockArray = requiredStock.split(", ");
  
  var resultsArray = [];
  for (var counter in requiredStockArray) {
    // Getting the value from the stock array, and converting into a number for calculations.
    var requiredStockAmount = parseInt(requiredStockArray[counter]);
    // Get the corresonding item from inventoryOnHand, and make it its own variable.
    var inStockAmount = inventoryOnHand[counter];
    // Get the result
    var result = inStockAmount - requiredStockAmount;
    console.log("result: " + result);
    // Add the result to the results array.
    resultsArray.push(result);
  }
  console.log(resultsArray.length); // Prints length of the array. 
  console.log(typeof(resultsArray)); // Prints type (Object for some reason?? idk javascript)
  for (var counter in resultsArray) {
    console.log("Counter[" + counter+ "] = " + resultsArray[counter]);
  }
  
  
  // Math
  var jackDaniels = resultsArray[0];
  var crownRoyal = resultsArray[1];
  var titosVodka = resultsArray[2];
  var jameson = resultsArray[3];
  var captainMorgan = resultsArray[4];
  var bacardi = resultsArray[5];
  var patron = resultsArray[6];
  var fireball = resultsArray[7];
  var peachSchnapps = resultsArray[8];
  var tripleSec = resultsArray[9];
  var wellVodka = resultsArray[10];
  var wellRum = resultsArray[11];
  var wellGin = resultsArray[12];
  var wellWhiskey = resultsArray[13];
  var wellTequila = resultsArray[14];
  var budLight = resultsArray[15];
  var millerLight = resultsArray[16];
  var coorsLight = resultsArray[17];
  var terrapin = resultsArray[18];
  var mikUltra = resultsArray[19];
  var pbr = resultsArray[20];

// If the results are less than 0, style red to show deficit. If above, style green to show surplus.
  if (jackDaniels <= 0) {
    document.getElementById("jackDanielsReport").style.color = "Red";
  } else {
    document.getElementById("jackDanielsReport").style.color = "Green";
  }
  
  if (crownRoyal <= 0) {
    document.getElementById("crownRoyalReport").style.color = "Red";
  } else {
    document.getElementById("crownRoyalReport").style.color = "Green";
  }
  
  if (jameson <= 0) {
    document.getElementById("jamesonReport").style.color = "Red";
  } else {
    document.getElementById("jamesonReport").style.color = "Green";
  }
  
  if (captainMorgan <= 0) {
    document.getElementById("captainMorganReport").style.color = "Red";
  } else {
    document.getElementById("captainMorganReport").style.color = "Green";
  }
  
  if (bacardi <= 0) {
    document.getElementById("bacardiReport").style.color = "Red";
  } else {
    document.getElementById("bacardiReport").style.color = "Green";
  }
  
  if (titosVodka <= 0) {
    document.getElementById("titosVodkaReport").style.color = "Red";
  } else {
    document.getElementById("titosVodkaReport").style.color = "Green";
  }
  
  if (patron <= 0) {
    document.getElementById("patronReport").style.color = "Red";
  } else {
    document.getElementById("patronReport").style.color = "Green";
  }
  
  if (fireball <= 0) {
    document.getElementById("fireballReport").style.color = "Red";
  } else {
    document.getElementById("fireballReport").style.color = "Green";
  }
  
  if (peachSchnapps <= 0) {
    document.getElementById("peachSchnappsReport").style.color = "Red";
  } else {
    document.getElementById("peachSchnappsReport").style.color = "Green";
  }
  
  if (tripleSec <= 0) {
    document.getElementById("tripleSecReport").style.color = "Red";
  } else {
    document.getElementById("tripleSecReport").style.color = "Green";
  }
  
  if (wellVodka <= 0) {
    document.getElementById("wellVodkaReport").style.color = "Red";
  } else {
    document.getElementById("wellVodkaReport").style.color = "Green";
  }
  
  if (wellRum <= 0) {
    document.getElementById("wellRumReport").style.color = "Red";
  } else {
    document.getElementById("wellRumReport").style.color = "Green";
  }
  
  if (wellGin <= 0) {
    document.getElementById("wellGinReport").style.color = "Red";
  } else {
    document.getElementById("wellGinReport").style.color = "Green";
  }
  
  if (wellWhiskey <= 0) {
    document.getElementById("wellWhiskeyReport").style.color = "Red";
  } else {
    document.getElementById("wellWhiskeyReport").style.color = "Green";
  }
  
  if (wellTequila <= 0) {
    document.getElementById("wellTequilaReport").style.color = "Red";
  } else {
    document.getElementById("wellTequilaReport").style.color = "Green";
  }
  
  if (budLight <= 0) {
    document.getElementById("budLightReport").style.color = "Red";
  } else {
    document.getElementById("budLightReport").style.color = "Green";
  }
  
  if (millerLight <= 0) {
    document.getElementById("millerLightReport").style.color = "Red";
  } else {
    document.getElementById("millerLightReport").style.color = "Green";
  }
  
  if (coorsLight <= 0) {
    document.getElementById("coorsLightReport").style.color = "Red";
  } else {
    document.getElementById("coorsLightReport").style.color = "Green";
  }
  
  if (terrapin <= 0) {
    document.getElementById("terrapinReport").style.color = "Red";
  } else {
    document.getElementById("terrapinReport").style.color = "Green";
  }
  
  if (mikUltra <= 0) {
    document.getElementById("mikUltraReport").style.color = "Red";
  } else {
    document.getElementById("mikUltraReport").style.color = "Green";
  }
  
  if (pbr <= 0) {
    document.getElementById("pbrReport").style.color = "Red";
  } else {
    document.getElementById("pbrReport").style.color = "Green";
  }
  

  //Quick Validation
  if (
    (jackDanielsOnHand,
    crownRoyalOnHand,
    jamesonOnHand,
    captainMorganOnHand,
    bacardiOnHand,
    titosVodkaOnHand,
    patronOnHand,
    fireballOnHand,
    peachSchnappsOnHand,
    tripleSecOnHand,
    wellVodkaOnHand,
    wellRumOnHand,
    wellGinOnHand,
    wellWhiskeyOnHand,
    wellTequilaOnHand,
    budLightOnHand,
    millerLightOnHand,
    coorsLightOnHand,
    terrapinOnHand,
    mikUltraOnHand,
    pbrOnHand === "")
  ) {
    return window.alert("Please enter some value to use the calculator.");
    //the return will prevent the function from going on forever
  }

  document.getElementById("totalInventory").style.display = "block";

  //returns values back to HTML

  document.getElementById("jackDanielsReport").innerHTML = jackDaniels;
  document.getElementById("crownRoyalReport").innerHTML = crownRoyal;
  document.getElementById("jamesonReport").innerHTML = jameson;
  document.getElementById("captainMorganReport").innerHTML = captainMorgan;
  document.getElementById("bacardiReport").innerHTML = bacardi;
  document.getElementById("titosVodkaReport").innerHTML = titosVodka;
  document.getElementById("patronReport").innerHTML = patron;
  document.getElementById("fireballReport").innerHTML = fireball;
  document.getElementById("peachSchnappsReport").innerHTML = peachSchnapps;
  document.getElementById("tripleSecReport").innerHTML = tripleSec;
  document.getElementById("wellVodkaReport").innerHTML = wellVodka;
  document.getElementById("wellRumReport").innerHTML = wellRum;
  document.getElementById("wellGinReport").innerHTML = wellGin;
  document.getElementById("wellWhiskeyReport").innerHTML = wellWhiskey;
  document.getElementById("wellTequilaReport").innerHTML = wellTequila;
  document.getElementById("budLightReport").innerHTML = budLight;
  document.getElementById("millerLightReport").innerHTML = millerLight;
  document.getElementById("coorsLightReport").innerHTML = coorsLight;
  document.getElementById("terrapinReport").innerHTML = terrapin;
  document.getElementById("mikUltraReport").innerHTML = mikUltra;
  document.getElementById("pbrReport").innerHTML = pbr;
  console.log("End Total");
}

document.getElementById("totalInventory").style.display = "none";
document.getElementById("calculate").onclick = function() {
  total();
};