module.exports = function check(str, bracketsConfig) {
  let opening = [];
  let closing = [];
  let same = [];
  let stack = [];
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] !== bracketsConfig[i][1]) {
      opening.push(bracketsConfig[i][0]);
      closing.push(bracketsConfig[i][1]);
    } else {
      same.push(bracketsConfig[i][0]);
    }
  }
  
  for (let j = 0; j < str.length; j++) {
    if (opening.includes(str[j]) == true) {
      stack.push(str[j]);
    } else if (closing.includes(str[j]) == true) {
      if (stack.length == 0) { return false; } 
      else {
        for (let k = 0; k < bracketsConfig.length; k++) {
          if (bracketsConfig[k].includes(str[j]) && bracketsConfig[k].includes(stack[stack.length - 1])) {
            stack.pop();
          } else if (bracketsConfig[k].includes(str[j]) && !bracketsConfig[k].includes(stack[stack.length - 1])) {
            return false;
          }
        }
      }
    } else if (same.includes(str[j]) == true) {
        if (stack[stack.length - 1] == str[j]) { stack.pop(); } 
        else { stack.push(str[j]); }
    }
  }
  
  return (stack.length === 0);
}
