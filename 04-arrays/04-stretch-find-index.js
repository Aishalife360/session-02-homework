// =============================================
// 4. ARRAYS — STRETCH: Find the index
// =============================================
// Find the index of target in the array WITHOUT .indexOf().
// Print "Nizwa is at index 3", or "Ibri not found" if it is not in the array.
// Test with target = "Ibri" too.
//
// Expected output:
//   Nizwa is at index 3

const cities = ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur"];
const target = "Nizwa";

// your code here

let index = -1

for (let i = 0; i < cities.length; i++){
    if(cities[i] === target){
        index = i    
    }           
}
console.log(index !== -1 ? `${target} is at index ${index}` : `${target} not found`)

