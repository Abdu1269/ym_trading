export function truncateAfterThreeDigits(text: string) {
  // Use a regular expression to find the first three digits
  const match = text.match(/(\d{3})(.*)/);

  // If there are at least three digits, truncate the string after them
  if (match) {
    return match[0].substring(0, match?.index || 0);
  }

  // If there are no three consecutive digits, return the original text
  return text;
}

// Example usage:
// const originalText = "The number is 123456789 and it should be truncated.";
// const truncatedText = truncateAfterThreeDigits(originalText);

// console.log(truncatedText); // Output: "The number is 123"
