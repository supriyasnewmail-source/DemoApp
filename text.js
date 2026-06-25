const normalizeText = (text) => text.trim().replace(/\s+/g, " ");

const countWords = (text) => {
  const normalized = normalizeText(text);
  return normalized.length === 0 ? 0 : normalized.split(" ").length;
};

const reverseWords = (text) =>
  normalizeText(text)
    .split(" ")
    .reverse()
    .join(" ");

const titleCase = (text) =>
  normalizeText(text)
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const sampleText = "write some code and make it useful";

if (require.main === module) {
  const inputText = process.argv.slice(2).join(" ") || sampleText;
  console.log("Input:", inputText);
  console.log("Word count:", countWords(inputText));
  console.log("Reversed words:", reverseWords(inputText));
  console.log("Title case:", titleCase(inputText));
}

module.exports = { normalizeText, countWords, reverseWords, titleCase };

