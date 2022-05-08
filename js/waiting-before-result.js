$(document).ready(function(){
    //処理
    // const music = new Audio('/musics/music.mp3');
    // music.play();
  
    $('img').hide();
    resize();
    $('img').fadeIn(1000);
    $('.shadow-circle').fadeIn(1000);
  
  });
  
  
  function resize(){
    let intViewportHeight = window.innerHeight;
    let omiHeight = intViewportHeight * 0.35;
    $('#img-chara').height(omiHeight);
  }
  
  
  $('#' + 'btn-next').click(function(){
    talkZundamon('../content/voice/まずはいっきさんから.wav');

    // ローカルストレージのクリア
    // localStorage.clear();
    // 第一問目
    $("#" + ID_PARENT).load("result.html");
  })