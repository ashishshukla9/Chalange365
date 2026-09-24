const numbers = [10, 20, 30, 40, 50];

function calculateTotal(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

const total = calculateTotal(numbers);

console.log("Numbers:", numbers);
console.log("Total:", total);