$(document).ready(function(){
  //処理
  // const music = new Audio('/musics/music.mp3');
  // music.play();
  reize();

  $('.void img:nth-child(n+2)').hide();
  $('.title-img img:nth-child(n+2)').hide();
  $('.title-explain img:nth-child(n+2)').hide();
  $('.content-explain img:nth-child(n+2)').hide();
  talkZundamon('../content/voice/003_ずんだもん（あまあま）_ふたりのあいしょう….wav');
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
  $('.box').height(boxHeight);
}


var cntPage = 0;
var nextPage = 2
$('#' + 'btn-next').click(function(){
    cntPage++;

    if(cntPage < nextPage){
      talkZundamon('../content/voice/005_ずんだもん（あまあま）_ふたりのおもいでを….wav');
      fadePicture('void');
      fadePicture('title-img');
      fadePicture('title-explain');
      fadePicture('content-explain');
    }else{
      localStorage.setItem('qNum', 1);
      talkZundamon('../content/voice/004_ずんだもん（あまあま）_ぼいどーるからしゅ….wav');
      $("#" + ID_PARENT).load("waiting-omi.html");
    }
})
  
function fadePicture(className){
  $('.' + className + ' img:first-child').fadeOut(1000);
  $('.' + className + ' img:first-child').appendTo('.' + className);
  $('.' + className + ' img:first-child').fadeIn(1000);
}
  


