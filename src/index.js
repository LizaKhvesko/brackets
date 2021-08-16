module.exports = function check(str, bracketsConfig) {
let openBracket = [];
  for (let j = 0; j<bracketsConfig.length; j++) {
    if (bracketsConfig[j][0] === '|') {continue}
     else {
       openBracket.push(bracketsConfig[j][0]);
     }
  }
 
  let pairs = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
  }
  
  let stack = [];
  let strArr = str.split('');
 

  for (let i = 0; i<strArr.length; i++) {
    let element = strArr[i];
     let topElement = stack[stack.length-1]
     
    if (element === '|' && topElement !== '|' || element === '7' && topElement !== '7' ||
    element === '8' && topElement !== '8') {
      stack.push(element)
      
    } else if (element === '|' && topElement === '|' || element === '7' && topElement === '7' || 
    element === '8' && topElement === '8') {
      stack.pop()
    }
     else if (openBracket.includes(element)) {
      stack.push(element)
      
    } else {
      if (stack.length === 0) {return false}
      
     
      if (pairs[element] === topElement) {
        stack.pop()
       
      } else {
        return false
      }
    }   
  }
  return stack.length === 0;
}
