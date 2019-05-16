console.log('=======문제 1=======');
console.log('양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.');

function circleArea(radius) {
  return Math.PI * (radius ** 2);
};

console.log(circleArea(10)); // 314.1592653589793

console.log('');
console.log('=======문제 2=======');
console.log('두 정수 `min`, `max` 를 입력받아, `min` 이상 `max` 미만인 임의의 정수를 반환하는 함수를 작성하세요.');

function minToMax(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
};

console.log(minToMax(2, 8)); // 2 ~ 7 중 랜덤의 수
console.log(minToMax(-2, 8));

console.log('');
console.log('=======문제 3=======');
console.log('정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.');

function ceilBy5(int) {
  let result = 0;
  if (int % 5 === 0) {
    result = int;
  } else if ((int % 10) < 5) {
    result = int + (5 - (int % 10));
  } else if ((int % 10) > 5) {
    result = int + (10 - (int % 10));
  }
  return result;
};

console.log(ceilBy5(30)); // 30
console.log(ceilBy5(32)); // 35
console.log(ceilBy5(37)); // 40

console.log('');
console.log('=======문제 4=======');
console.log('임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.');

function htmlHexCode() {
  let random = (Math.round(Math.random() * 0xFFFFFF)).toString(16);
  random = (random.length < 6) ? '0' + random : random;
  return `#${random.toLocaleUpperCase()}`;
};

console.log(htmlHexCode()); // #92F01A
console.log(htmlHexCode()); // #00FF12

console.log('');
console.log('=======문제 5=======');
console.log('rgb색상코드를 랜덤으로 반환하는 함수를 작성하세요.');

function randomRgbCode() {
  return `rgb(${Math.floor(Math.random() * 0xFF)}, ${Math.floor(Math.random() * 0xFF)}, ${Math.floor(Math.random() * 0xFF)})`;
};

console.log(randomRgbCode()); // rgb(123, 44, 254);
console.log(randomRgbCode()); // rgb(12, 3, 223);

console.log('');
console.log('=======문제 6=======');
console.log('소수인 숫자와, 자릿수를 받아서 소수를 자리수만큼만 자른 뒤 반환하는 함수를 작성하세요.');

function fixFloat(decimal, digit) {
  return decimal.toFixed(digit);
};

console.log(fixFloat(10.12345, 2)); // 10.12
console.log(fixFloat(15.5678, 1)); // 15.6

console.log('');
console.log('=======문제 7=======');
console.log('Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.');

function camelToSnake(str) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < upper.length; i++) {
    str = str.replace(upper[i], `_${upper[i].toLocaleLowerCase()}`);
  }
  return str;
};

console.log(camelToSnake('helloWorld')); // 'hello_world'

console.log('');
console.log('=======문제 8=======');
console.log('Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.');

function snakeToCamel(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '_') {
      newStr += str[i + 1].toLocaleUpperCase();
      i++;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(snakeToCamel('hello_world_javascript')); // 'helloWorldJavascript'

console.log('');
console.log('=======문제 9=======');
console.log('2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?');
console.log('두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.');
console.log('요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다.');
console.log('예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.');
console.log('제한 조건');
console.log('1. 2016년은 윤년입니다.');
console.log('2. 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)');

function getDay(a, b) {
  let result = '';
  if (a < 1 || a > 12 || b < 1 || b > 31) {
    result = '날짜를 잘못 입력하셨습니다.';
  } else {
    const dayNames = {
      0: 'SUN',
      1: 'MON',
      2: 'TUE',
      3: 'WED',
      4: 'THU',
      5: 'FRI',
      6: 'SAT'
    };
    let today = new Date();
    today.setFullYear(2016, a - 1, b);
    let year = today.getDay();
    result = dayNames[year];
  }
  return result;
};

console.log(getDay(5, 24)); // 'TUE'
console.log(getDay(5, 32)); // '날짜를 잘못 입력하셨습니다.'
console.log(getDay(0, 24)); // '날짜를 잘못 입력하셨습니다.'

console.log('');
console.log('=======문제 10=======');

console.log('전화번호가 문자열 phone_number로 주어졌을 때,');
console.log('전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수를');
console.log('`String.prototype.repeat`, `String.prototype.replace`, `String.prototype.substring`등의 String 관련 메소드를 활용해서 작성하세요.');
console.log('제한 조건');
console.log('s는 길이 4 이상, 20이하인 문자열입니다.');

function hidePhoneNumber(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.substring(phone_number.length - 4);
};

console.log(hidePhoneNumber('01033334444')); // '*******4444'
console.log(hidePhoneNumber('027778888')); // '*****8888'
