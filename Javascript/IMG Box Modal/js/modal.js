// #img-modal Code
$(".img-list img").click(function () {
  // 변수에 .img-list img(this)의 src, alt 값 저장
  let 이미지경로 = $(this).attr("src");
  let 대체텍스트 = $(this).attr("alt");

  // #img-modal-box img의 src, alt 속성을 내가 클릭하는 이미지의 src, alt로 변경
  $("#img-modal-box img").attr({
    src : 이미지경로,
    alt : 대체텍스트
  });
  // .img-list img를 클릭했을 때 #img-modal을 천천히 나타나게 해라
  $("#img-modal").fadeIn();
})

$("#img-modal-btn").click(function() {
  // .img-list img를 클릭했을 때 #img-modal을 천천히 사라지게 해라
  $("#img-modal").fadeOut();
});


// #modal Code
$("#open-btn").click(function() {
  $("#modal").fadeIn();
  $("#modal-box").delay(400).animate({opacity: 1});
});

$("#modal-close").click(function() {
  // #modal-box에 delay가 안먹고 바로 사라지는 이유는 #modal-box의 부모인 
  // #modal이 먼저 fadeOut 되면서 자식요소인 #modal-box도 같이 사라지기 때문
  // fadeIn 될 때는 부모요소 먼저 나타나고 그 다음에 자식 요소가 차례대로 나타날 수 있으므로 delay 적용 
  // 둘 다 delay 적용 시키고 싶다면
  // $('#modal, #modal-box').delay(500).animate({opacity: 0});
  
  // 원래 코드
  // $("#modal").fadeOut();
  // $("#modal-box").delay(400).animate({opacity: 0});

  // #modal-box가 먼저 사라지고 뒤에 배경은 후에 사라지게 하고 싶으면 #modal에게 delay 적용
  $("#modal").delay(400).fadeOut();
  $("#modal-box").animate({opacity: 0});
});