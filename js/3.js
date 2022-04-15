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
    // ローカルストレージのクリア
    localStorage.clear();
    // 第一問目
    localStorage.setItem('qNum', 1);
    window.location.href = "Question.html";
})