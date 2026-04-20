

let score = 85;

// Switch statement - gets the tens digit to find the grade range
let grade;
switch (Math.floor(score / 10)) {
  case 10:
  case 9:
    grade = "A";
    break;
  case 8:
    grade = "B";
    break;
  case 7:
    grade = "C";
    break;
  case 6:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log("Grade:", grade);

// Ternary operator to check pass or fail
let result = score >= 60 ? "Passed" : "Failed";
console.log("Result:", result);