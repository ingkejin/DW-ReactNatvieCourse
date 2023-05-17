/*** 두 수 사이 숫자 구하기 ***/

// 두 숫자 사이의 정수를 배열로 반환하는 함수 answer
// x랑 y라는 두 매개변수로 숫자를 입력 받는다.
function answer(x, y) {
  // 빈 배열 result 생성
  let result = [];

  // x가 y보다 값이 큰 경우 두 값을 서로 바꿔주는 코드
  // x와 y중 더 작은값이 앞에 오도록 조건문(if)를 사용해서 x,y 순서 정렬
  // 첫번째 x = 3, y = 7
  // if(x > y)이 false이기 때문에 실행 X
  // answer 함수에서 3부터 7까지 정수를 배열로 반환

  // 두번째 x = 8, y = 3
  // if(x > y)이 ture이기 x와 y의 값이 서로 바뀌게 됨.
  // answer 함수에서 3부터 8까지 정수를 배열로 반환

  // 세번째 x = 12, y = 10
  // if(x > y)이 ture이기 x와 y의 값이 서로 바뀌게 됨
  // answer 함수에서 10부터 12까지 정수를 배열로 반환
  if(x > y) {
    let t = x;
    x = y;
    y = t;
  }

  // 반복문으로 x에서 y까지의 정수를 result 배열에 추가
  for(let i = x; i <= y; i++) {
    result.push(i);
  }

  // result를 배열로 반환
  return result;
}

// x와 y와 값으로 구성된 배열(인수)
// 인수 : 함수를 호출할 때 사용되는 값
// 각 배열의 인수를 answer이라는 함수에 x,y 값으로 전달
let input = [
    [3, 7],
    [8, 3],
    [12, 10],
];

// 1. i라는 변수 0으로 초기화
// 2. i가 input의 length까지 반복
for (let i = 0; i < input.length; i++) {
  // 1. answer 함수 호출
  // 2. answer 함수 x,y에 배열값 전달
  console.log(answer(input[i][0], input[i][1]));
}

// 결과
// #1 [ 3, 4, 5, 6, 7 ]
// #2 [ 3, 4, 5, 6, 7, 8 ]
// #3 [ 10, 11, 12 ]
