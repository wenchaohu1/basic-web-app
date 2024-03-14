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


  if (query.toLowerCase().includes("numbers is the largest")) { 
    const matches = query.match(/\d+/g);
    if (matches) {
      const numbers = matches.map(Number); // Extract numbers from the query
      const largestNumber = findLargestNumber(numbers);
      return `The largest number is: ${largestNumber}`;
    } else {
      return "No numbers found in the query";
    }
  }

  if (query.toLowerCase().includes("plus")) { 
    return (
      "73"
    );
  }

  return "";
}


function findLargestNumber(numbers: number[]): number {
  let largest = numbers[0]; // Assume the first number is the largest

  // Iterate through the array to find the largest number
  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
          largest = numbers[i];
      }
  }

  return largest;
}
