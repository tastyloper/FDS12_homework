/**
 * 12. 중복 요소 제거
 * 인수로 전달된 배열의 요소 중에서 중복된 요소를 제외하고 유니크한 요소만을 반환하는 함수를 작성하라.
 * for 문 대신 forEach를 사용하도록 하자.
 */

function uniq(array) {
  // forEach
  // let uniqArr = [];
  // array.forEach(val => {
  //   if (!uniqArr.includes(val)) uniqArr[uniqArr.length] = val;
  // });
  // return uniqArr;

  // reduce
  return array.reduce((pre, val) => {
    if (!pre.includes(val)) pre[pre.length] = val;
    return pre;
  }, []);
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]