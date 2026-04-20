// Convert string "25" to a number
let strInput = "25";
let numInput = Number(strInput);
console.log("Converted number:", numInput);

// Test truthy and falsy values
let values = [0, "", "hello", null, undefined, NaN];

for (let i = 0; i < values.length; i++) {
  if (values[i]) {
    console.log(values[i], "is TRUTHY");
  } else {
    console.log(String(values[i]), "is FALSY");
  }
}