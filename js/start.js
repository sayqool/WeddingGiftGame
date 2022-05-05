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
    // const audio = new Audio('../content/music/nayutan8bit.mp3');
    // audio.play();
    // audio.volume = '0.2';
    // audio.loop = true;
  }
  isFirst = false;
});


// ページ遷移系
$('#' + 'btn-start-img').click(function(){
  Swal.fire({
    title: 'あなたたちは落合夫婦ですか？',
    text: "このゲームは落合一輝兄弟と葉月姉妹のためのパーソナルなゲームです。",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: '私たちは落合夫婦だ！',
    cancelButtonText: '実は                                                         ちがう...。'  
  }).then((result) => {
    if (result.value) {
      $("#" + ID_PARENT).load("2.html");
    }
  });
  
})