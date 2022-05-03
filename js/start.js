$(document).ready(function(){
  //処理
  reizeStart();
});

$(function() {

  $(window).resize(function() {
    //リサイズされたときの処理
    reizeStart();
  });

});


function reizeStart(){
  let w = $('#img-chara img').width();
  $('.shadow-circle').css('width',w);
}




let isFirst = true;
document.body.addEventListener('click', () => {
  if(isFirst){
    const audio = new Audio('../content/music/nayutan8bit.mp3');
    audio.play();
  }
  isFirst = false;
});
