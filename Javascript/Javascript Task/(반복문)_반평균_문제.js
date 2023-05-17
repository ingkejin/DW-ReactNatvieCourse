/*** 반 평균 구하기 ***/

function answer(score) {
  let average = 0;
 
  for(let i = 0; i < score.length; i++) {
    // 1. 배열 input의 모든 요소를 더한 값을 average 변수에 저장한다.
    average += score[i];
  }

  // 2. 더한 값을 반 인원수(score.length)로 나누어 평균을 계산한다.
  average /= score.length;

  // 3. average 값을 소수점 둘째 자리까지 반올림해서 반환 시킨다.
  // toFixed(소수 자릿수)
  average = average.toFixed(2);

  return average;
}


let input = [
  [80, 95, 65, 70, 100],
  [82, 77, 51, 64, 73, 90, 80],
  [100, 71, 59, 88, 72, 75, 91, 93],
];

for (let i = 0; i < input.length; i++) {
  // # i + 1을 사용해서 인덱스 번호를 0이 아니라 1부터 시작하게 한다.
  // for문으로 input의 각 배열에 접근해서 answer 함수를 호출한다.
  // answer 함수의 인자로 전달해 배열의 평균값을 구하고 그 값을 console.log로 확인한다.
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 결과
// #1 82.00
// #2 73.86
// #3 81.13