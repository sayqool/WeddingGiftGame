var userName = "occhi";

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
      reize();
    });
  
  });
  
  
  function reize(){
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
    var charaStore = ["atari", "omi","piale","polo","tomas"];
    var charaMusicStore =["26.0","405.0","1026.0","894.0","979.0"];
    var storeNum = getRandomInt(5);
    var displayClass = charaStore[storeNum];
    playMusic('../content/music/allmusic.mp3', charaMusicStore[storeNum], "1272.0",true);
    $("."+ displayClass).show();
    localStorage.setItem(userName + "-hero",charaStore[storeNum]);

  }
  

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  $('#' + 'btn-next').click(function(){
    // 第一問目
    talkZundamon('../content/voice/つづいてはづきさん.wav');
    $("#" + ID_PARENT).load("result-hazuki.html");
})
