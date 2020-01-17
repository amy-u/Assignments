function betterFilter() {
  numbers.filter(onlyEvens);
}

function onlyEvens(number) {
  if (number % 2 === 0) // number is even
    return true;
  else {
    return false;
}
}

function isFive(num) {
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}
var num = [1,2,3,4,5];

//betterFilter(numbers, isFive);
 console.log(isFive());