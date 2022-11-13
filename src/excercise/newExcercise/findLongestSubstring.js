const findLongestSubstring = (givenString) => {
  let start = 0;
  let longest = 0;
  let seen = {};

  for (let i = 0; i < givenString.length; i++) {
    const char = givenString[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;
    console.log('seen:', seen);
  }

  return longest;
};

// const result = findLongestSubstring("rithmschool");
// const result = findLongestSubstring("thisisawesome");
const result = findLongestSubstring("longestsubstring");

console.log("longest".length);
