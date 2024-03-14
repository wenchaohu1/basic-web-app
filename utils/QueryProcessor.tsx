export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return (
      "wenchaoh"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "wh"
    );
  }


  if (query.toLowerCase().includes("largest")) { 
    const matches = query.match(/\d+/g);
    if (matches) {
      const numbers = matches.map(Number); // Extract numbers from the query
      const largestNumber = findLargestNumber(numbers);
      return `${largestNumber}`;
    } 
  }

  if (query.toLowerCase().includes("plus")) {  
      const matches = query.match(/\d+/g);
      if (matches && matches.length >= 2) {
        const numbers = matches.map(Number); // Extract numbers from the query
        const sum = numbers.reduce((acc, curr) => acc + curr, 0); // Add the numbers together
        return `${sum}`;
      } 
  }

  if (query.toLowerCase().includes("multiplied")) {  
    const matches = query.match(/\d+/g);
    if (matches && matches.length >= 2) {
      const numbers = matches.map(Number); // Extract numbers from the query
      const product = numbers.reduce((acc, curr) => acc * curr, 1); // Initialize accumulator with 1
      return `${product}`; 
    } 
}

  if (query.toLowerCase().includes("square")) {   
    const matches = query.match(/\d+/g);  
    if (matches && matches.length >= 2) {
      const numbers = matches.map(Number); // Extract numbers from the query
      const number = findSquareCubeNumber(numbers);  
      return `${number}`;
    } 
} 

if (query.toLowerCase().includes("power")) {   
  const matches = query.match(/\d+/g);  
  if (matches && matches.length >= 2) {
    const numbers = matches.map(Number); // Extract numbers from the query
    const res = numbers.reduce((acc, curr) => acc ** curr, 1); // Initialize accumulator with 1
    return `${res}`; 
  } 
} 

  return "";
} 

function findLargestNumber(numbers: number[]): number {
  let largest = numbers[0];  
  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
          largest = numbers[i];
      }
  }

  return largest;
} 

function findSquareCubeNumber(numbers: number[]): number {
  for (const num of numbers) {
    if (isPerfectSquare(num) && isPerfectCube(num)) {
      return num;
    }
  }
  return -1; // Return -1 if no such number is found
}

function isPerfectSquare(num: number): boolean {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}

function isPerfectCube(num: number): boolean {
  const cubeRoot = Math.cbrt(num);
  return cubeRoot === Math.floor(cubeRoot);
}
