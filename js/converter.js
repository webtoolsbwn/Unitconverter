function convertLength() {
  let meters = document.getElementById("meters").value;
  let feet = meters * 3.28084;
  document.getElementById("lengthResult").innerText = `${meters} m = ${feet.toFixed(2)} ft`;
}

function convertWeight() {
  let kg = document.getElementById("kg").value;
  let pounds = kg * 2.20462;
  document.getElementById("weightResult").innerText = `${kg} kg = ${pounds.toFixed(2)} lbs`;
}

function convertTemp() {
  let c = document.getElementById("celsius").value;
  let f = (c * 9/5) + 32;
  document.getElementById("tempResult").innerText = `${c} °C = ${f.toFixed(2)} °F`;
}

function convertCurrency() {
  let usd = document.getElementById("usd").value;
  let pkr = usd * 280; // Example fixed rate
  document.getElementById("currencyResult").innerText = `$${usd} = Rs ${pkr.toFixed(2)}`;
}

function convertArea() {
  let sqm = document.getElementById("sqm").value;
  let sqft = sqm * 10.7639;
  document.getElementById("areaResult").innerText = `${sqm} m² = ${sqft.toFixed(2)} ft²`;
}

function convertVolume() {
  let liters = document.getElementById("liters").value;
  let gallons = liters * 0.264172;
  document.getElementById("volumeResult").innerText = `${liters} L = ${gallons.toFixed(2)} gal`;
}

function convertSpeed() {
  let kmh = document.getElementById("kmh").value;
  let mph = kmh * 0.621371;
  document.getElementById("speedResult").innerText = `${kmh} km/h = ${mph.toFixed(2)} mph`;
}

function convertTime() {
  let hours = document.getElementById("hours").value;
  let minutes = hours * 60;
  document.getElementById("timeResult").innerText = `${hours} hr = ${minutes} min`;
}

function convertStorage() {
  let mb = document.getElementById("mb").value;
  let gb = mb / 1024;
  document.getElementById("storageResult").innerText = `${mb} MB = ${gb.toFixed(2)} GB`;
}

function convertEnergy() {
  let joules = document.getElementById("joules").value;
  let calories = joules / 4.184;
  document.getElementById("energyResult").innerText = `${joules} J = ${calories.toFixed(2)} cal`;
}
