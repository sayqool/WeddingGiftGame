var userName = "occhi";

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
    let intViewportHeight = $('#parent').height();
    let intViewportWidth = $('#parent').width();
    let boxWidth = intViewportWidth * 0.85 / 2;
    let boxHeight = intViewportHeight * 0.85;
    $('.box').height(intViewportHeight);
    $('.chara-img').height(boxHeight);
    let statusW = $('.status-image').width();
    let statusH = $('.status-image').height();
    let bw = (boxWidth / 3);
    let staPatio = bw / statusW;
    $('.status-image').width(bw);
    $('.status-image').height(statusH * staPatio);
    $('.status-bar').width(bw * 2);
    $('.status-bar').height(statusH * staPatio);
  }
  