// Задание 1
const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]))
//// Задание 2
function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);
  return resultArr;
}
console.log(advancedFilter([-10, -21, 12, 123]));