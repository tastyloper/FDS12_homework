/**
 * 1. 짝수와 홀수
 */

// if문
// function evenOrOdd(num) {
//   let result = 'Odd';
//   if (num % 2 === 0)result = 'Even';
//   return result;
// }

// // 삼항 연산자
function evenOrOdd(num) {
  return (num % 2 === 0) ? 'Even' : 'Odd';
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(1000));


/**
 * 2. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
 */
// function getCount8() {
//   let sum = 0;
//   for (let i = 1; i <= 10000; i++) {
//     const isIn = i.toString().match(/8/g);
//     sum += isIn ? isIn.length : 0;
//   }
//   return sum;
// }
function getCount8() {
  let sum = 0;
  let sumStr = '';
  for (let i = 1; i <= 10000; i++) {
    sumStr += i;
  }
  for (let j = 0; j < sumStr.length; j++) {
    sum += (sumStr[j] === '8') ? 1 : 0;
  }
  return sum;
}

console.log(getCount8());


/**
 * 3. 문자열 다루기
 */

function alphaString46(s) {
  return !!+s && s.length > 3 && s.length < 7;
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false
console.log(alphaString46()); // false
