function max(numbers) {
  let result = '';
  for (let i=0; i < numbers.length; i++) {
    if (numbers[i] > result) {
      result = numbers[i]
    }
  }
  return result
}

function findPosition(numbers, taget) {
  let position = numbers.indexOf(taget);
  return position;
}

console.log(max([1,2,4,5]));
console.log(max([5,2,7,1,6]));

console.log(findPosition([5,2,7,1,6],5));
console.log(findPosition([5,2,7,1,6],7));
console.log(findPosition([5,2,7,7,7,1,6],7));
console.log(findPosition([5,2,7,1,6],8));