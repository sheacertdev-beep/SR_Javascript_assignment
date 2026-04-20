// Merge arrays using spread operator
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const combined = [...array1, ...array2];
console.log("Combined Array:", combined);

// star pattern
console.log("\nStar Pattern:");
for (let i = 1; i <= 5; i++) {
  let row = "";
  
  for (let space = 0; space < 5 - i; space++) {
    row += "  "; 
  }
  // Add stars separated by spaces
  for (let star = 1; star <= i; star++) {
    row += "* ";
  }
  console.log(row);
}

// Count down from 10 to 1
console.log("\nCountdown:");
let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}