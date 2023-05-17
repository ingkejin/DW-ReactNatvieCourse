/* 최솟값 구하기 */

// x와 y라는 두 개의 숫자를 매개변수로 받아서 그 중 최솟값을 반환하는 함수
function answer(x, y) {
  let min;

  // 삼항 연산자 : 조건문을 간결하게 표현한 연산자
  // x와 y중에 더 작은 값을 min이라는 변수에 할당하는 코드
  // (조건) ? value1 : value2
  // 물음표 앞에 조건이 true인 경우 : 물음표 바로 다음에 오는 value1이 실행된다.
  // false인 경우에는 value2가 실행된다.
  // 만약 x가 y보다 크면 y를, 그렇지 않을 경우 x를 min이라는 변수에 할당한다.
  min = x > y ? y : x;

  return min;
}


let input = [
  [16, 3],
  [-3, 1],
  [1000, 525],
];

// for문으로 input의 배열 요소를 순회하면서 answer 함수에게 전달한다.
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}

// 결과
// #1 3
// #2 -3
// #3 525