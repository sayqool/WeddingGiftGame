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
    let omiHeight = intViewportHeight * 0.65;
    $('.img-chara img').height(omiHeight);
  }


  $('#' + 'btn-next').click(function(){
    // 第一問目
    $("#" + ID_PARENT).load("Question-Hazuki.html");
})

/**
 * localstrageから値を取得
 * @param {*} userName 
 * @param {*} pageCnt 
 * @returns 
 */
 function getLocalstrage(userName, pageCnt){
  let imgUrl = localStorage.getItem(userName + "q" + pageCnt+ "-img");
  let a1 = localStorage.getItem(userName + "q" + pageCnt+ "-a1");
  let a2 = localStorage.getItem(userName + "q" + pageCnt+ "-a2");
  let a3 = localStorage.getItem(userName + "q" + pageCnt+ "-a3 ");
  return [imgUrl,a1,a2,a3];
}