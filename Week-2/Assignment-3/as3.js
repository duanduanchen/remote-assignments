function count(input) {
    const result = input.reduce((accumulator,currentValue) => {
        if (accumulator[currentValue]){
            accumulator[currentValue] ++;
        } else {
            accumulator[currentValue] = 1;
        }
    return accumulator;
    }, {});
    return result
} 
let input1 = ['a','b','c','a','c','a','x'];
console.log(count(input1))

function groupByKey(input) {
    const result = input.reduce((accumulator,currentValue) => {
        if (accumulator[currentValue.key]) {
            accumulator[currentValue.key] += currentValue.value
        } else {
            accumulator[currentValue.key] = currentValue.value
        }
    return accumulator;
    }, {})
    return result
}

let input2 = [
    {key:'a', value: 3},
    {key:'b', value: 1},
    {key:'c', value: 2},
    {key:'a', value: 3},
    {key:'c', value: 5},
];

console.log(groupByKey(input2))
