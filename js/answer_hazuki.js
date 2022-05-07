var userName = "haduki";

$(document).ready(function(){
    //処理
    reize();
    //名前表示非表示
    $('.' + 'name').hide();
    $('.' + userName).show();
    //キャラクターセレクト
    rundumCharraSelect();

  });
  
  
  $(function() {
  
    $(window).resize(function() {
      //リサイズされたときの処理
      resize();
    });
  
  });
  
  
  function resize(){
    $("#" + ID_PARENT).css("display", "relative");
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

  function rundumCharraSelect(){
    // hide status
    $("."+"status-bar").hide();
    $("."+"chara-img").hide();
    $("."+"explain").hide();


    // show chara
    var charaStore = ["aris", "delmin","kirara","matoi","voidoll"];
    var storeNum = getRandomInt(5);
    var displayClass = charaStore[storeNum];
    $("."+ displayClass).show();

  }
  

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  $('#' + 'btn-next').click(function(){
    // 第一問目
    $("#" + ID_PARENT).load("waiting-all.html");
})
