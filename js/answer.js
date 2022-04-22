const userName = "occhi";

let questionNum;
$(document).ready(function(){
    //処理
    reize();

  });
  
  
  $(function() {
  
    $(window).resize(function() {
      //リサイズされたときの処理
      reize();
    });
  
  });
  
  
  function reize(){
    let intViewportHeight = window.innerHeight;
    let boxHeight = intViewportHeight * 0.85;
    $('.box').height(intViewportHeight);
    $('.chara-img').height(boxHeight*1.01);
  }
  