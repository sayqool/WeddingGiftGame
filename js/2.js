$(document).ready(function(){
  //処理
  // const music = new Audio('/musics/music.mp3');
  // music.play();
  reize();

  $('.void img:nth-child(n+2)').hide();
  $('.title-img img:nth-child(n+2)').hide();
  $('.title-explain img:nth-child(n+2)').hide();
  $('.content-explain img:nth-child(n+2)').hide();
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


let cntPage = 0;
const nextPage = 2
$('#' + 'btn-next').click(function(){
    cntPage++;

    if(cntPage < nextPage){
      fadePicture('void');
      fadePicture('title-img');
      fadePicture('title-explain');
      fadePicture('content-explain');
    }else{
      window.location.href = "3.html";
    }
})
  
function fadePicture(className){
  $('.' + className + ' img:first-child').fadeOut(1000);
  $('.' + className + ' img:first-child').appendTo('.' + className);
  $('.' + className + ' img:first-child').fadeIn(1000);
}
  