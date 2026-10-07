// =============================================
// 1. VARIABLES — Trip cost
// =============================================
// You drive from Muscat to Salalah.
// Create variables:
//   distance = 1000      (km)
//   fuelPer100km = 8     (liters the car uses for every 100 km)
//   fuelPrice = 0.25     (OMR per liter)
// Calculate how many liters you need and how much the fuel costs.
// Print the result using template literals.
//
// Expected output:
//   Trip: 1000 km
//   Fuel needed: 80 liters
//   Fuel cost: 20 OMR

// your code here

const distance = 1000
const fuelPer100Km = 8
const fuelPrice = 0.25

const fuelCost = (distance / 100 * fuelPer100Km) * fuelPrice;
console.log(`Trip: ${distance} km`);
console.log(`Fuel needed: ${distance / 100 * fuelPer100Km} liters`);
console.log(`Fuel cost: ${fuelCost} OMR`);




