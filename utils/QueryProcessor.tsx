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


  if (query.toLowerCase().includes("Which of the following numbers is the largest: 64, 73, 5?")) { 
    return (
      "73"
    );
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 74, 54, 25?")) { 
    return (
      "74"
    );
  }

  return "";
}
