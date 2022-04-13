$(document).ready(function(){
  //処理
  // const music = new Audio('/musics/music.mp3');
  // music.play();
  reize();
});


$(function() {

  $(window).resize(function() {
    //リサイズされたときの処理
    reize();
  });

});


function reize(){
 
}


let cntPage = 0;
const nextPage = 2
$('#' + 'btn-next').click(function(){
    cntPage++;

    if(cntPage < nextPage){
      
    }else{
      window.location.href = "3.html";
    }
})
  
  