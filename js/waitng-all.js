$(document).ready(function(){
    //処理
    // const music = new Audio('/musics/music.mp3');
    // music.play();

    $('img').hide();
    reize();
    $('img').fadeIn(1000);
    $('.shadow-circle').fadeIn(1000);
  
  });
  

  function reize(){
    let intViewportHeight = window.innerHeight;
    let omiHeight = intViewportHeight * 0.35;
    $('#img-chara').height(omiHeight);
  }


  $('#' + 'btn-next').click(function(){
    // 第一問目
    window.location.href = "Question-Hazuki.html";
})