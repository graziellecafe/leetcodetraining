var twoSum = function (nums, target) {
  var hashmap = {};

  for (const [i, num] of nums.entries()) {
    var number_we_need = target - num;
    if (number_we_need in hashmap) {
      return [hashmap[number_we_need], i];
    }
    hashmap[num] = i;
  }
};

const hashmap = [1, 2, 3, 4, 5, 7, 10, 12];
var result = twoSum(hashmap, 9);
console.log(" O target sendo 9 encontra-se no vetor: " + result);
