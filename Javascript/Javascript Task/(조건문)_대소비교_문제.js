/*** 대소비교 ***/
// 두 개의 숫자를 비교하여 크기를 판단하다.

// answer라는 함수에 x, y 두 개의 매개변수를 받는다.
function answer(x, y) {
  let result = "";
  
  // 1. x가 y보다 크면 result ">" 문자를 할당한다.
  // 2. x가 y보다 작으면 result "<" 문자를 할당한다.
  // 3. x와 y의 값이 같으면 result "=" 문자를 할당한다.

  if(x > y) {
    result = ">";
  } else if(x < y) {
    result = "<";
  } else if(x == y) {
    result = "=";
  }

  // result값을 반환한다.
  return result;
}


let input = [
  [3, 5],
  [7, 4],
  [2, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}

// 결과
// #1 <
// #2 >
// #3 =