function greetingBot(name, isMorning) {
  if (isMorning) {
    return `Good morning, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greetingBot("Alice", true));
console.log(greetingBot("Bob", false));
console.log(greetingBot("Sara", true));
