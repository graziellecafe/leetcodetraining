var constainsDuplicate = function (nums) {
  var seen = new Set();

  for (const x of nums) {
    if (seen.has(x)) {
      return true;
    }
    seen.add(x);
  }

  return false;
};

const nums2 = [1, 2, 3, 1];
var result = constainsDuplicate(nums2);
console.log(result);

const nums3 = [1, 2, 3, 4];
var result1 = constainsDuplicate(nums3);
console.log(result1);
