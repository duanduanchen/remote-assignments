function countAandB(input) {
    let array = input;
    let count = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'a')
          count++; 
        else if (array[i] === 'b') 
          count++;
      }
    
    return count
}

function toNumber(input) {
  let array = input;
  
  for (let i = 0; i < array.length; i++) {
      if (array[i] === 'a')
        array[i] === 1; 
      else if (array[i] === 'b') 
        array[i] === 2; 
      else if (array[i] === 'c') 
        array[i] === 3;   
      else if (array[i] === 'd') 
        array[i] === 4; 
      else if (array[i] === 'e') 
        array[i] === 5; 
    }
  
  return array
}

let input = ['a','b','c']
console.log(countAandB(input))
console.log(toNumber(input))