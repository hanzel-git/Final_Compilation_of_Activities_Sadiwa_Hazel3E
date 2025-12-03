import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>`;

//No. 1
function calculateFuelCost(
  distanceLeg1Km,
  distanceLeg2Miles,
  distanceLeg3Meters,
  efficiencyKmL,
  costPerLiter
) {
  const milesToKm = 1.60934;
  const metersToKm = 1000;
  let convLeg2 = milesToKm * distanceLeg1Km;
  console.log(convLeg2);
  let convLeg3 = metersToKm * distanceLeg2Miles;
  console.log(convLeg3);
  let totalDistancekm = distanceLeg1Km + convLeg2 + convLeg3;
  console.log(totalDistancekm);
  let totalLiter = totalDistancekm / efficiencyKmL;
  console.log(totalLiter);
  let totalCost = totalLiter * costPerLiter;
  console.log(totalCost);
  console.log(`The total distance in kilometers is ${totalDistancekm}, then
  calculate the total liters needed is ${totalLiter}, and finally, return the total estimated fuel cost in pesos is ${totalCost}. `);
  return totalCost;
}
calculateFuelCost(150, 75, 150000, 12, 64);

//No. 2
function calculateFencingMeters(lengthMeters, widthFeet) {
  const FEET_TO_METER_FACTOR = 0.3048;
  let widthFeetMeters = FEET_TO_METER_FACTOR * widthFeet;
  console.log(widthFeetMeters);
  let Perimeter = 2 * (lengthMeters + widthFeet);
  console.log(Perimeter);
  let final_fencing_length = 2 * (lengthMeters + widthFeet * 0.3048);
  console.log(final_fencing_length);
  console.log(`The width in meters is ${widthFeetMeters}, then calculate the total perimeter in meters 
  ${Perimeter}, and return the final fencing length is ${final_fencing_length}.`);
  return;
}
calculateFencingMeters(15.5, 50);

//No. 3
function calculateIndividualShareWithFee(
  billSubtotal,
  tipRate,
  numberOfPeople,
  paymentfee
) {
  //const billSubtotal = 4550.0;
  //const tipRate = 0.18;
  //const numberOfPeople = 7;
  //const paymentFee = 10.5;
  let TipAmount = billSubtotal * tipRate;
  console.log(TipAmount);
  let Grand_Total = billSubtotal + TipAmount + paymentfee;
  console.log(Grand_Total);
  let Cost_Per_Person = Grand_Total / numberOfPeople;
  console.log(Cost_Per_Person);
  let Roundresult = (Cost_Per_Person * 100) / 100;
  console.log(Roundresult);
  console.log(`The tip amount is ${TipAmount}, the grand total ${Grand_Total}, and return the exact
  amount each person owes is ${Cost_Per_Person}, rounded to two decimal places is ${Roundresult} .`);
  return;
}
calculateIndividualShareWithFee(4550.0, 0.18, 7, 10.5);
