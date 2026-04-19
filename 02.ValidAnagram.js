var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sSorted = s.split("").sort().join("");
  const tSorted = t.split("").sort().join("");

  return sSorted === tSorted;
};

const s = "amor";
const t = "roma";
var result = isAnagram(s, t);
console.log("Amor e Roma são anagramas? : " + result);

const s1 = "Grazi";
const t1 = "Café";
var result1 = isAnagram(s1, t1);
console.log("Grazi e Café são anagramas? : " + result1);
