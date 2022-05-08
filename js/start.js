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






// ページ遷移系
$('#' + 'btn-start-img').click(function(){
  talkZundamon('../content/voice/001_ずんだもん（あまあま）_あいじょうせつりか….wav');
  Swal.fire({
    title: 'あなたたちは落合夫婦ですか？',
    text: "このゲームは落合一輝兄弟と葉月姉妹のためのパーソナルなゲームです。",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: '私たちは落合夫婦だ！',
    cancelButtonText: '実は                                                         ちがう...。'  
  }).then((result) => {
    if (result.value) {
      talkZundamon('../content/voice/002_ずんだもん（あまあま）_るーるせつめい.wav');
      $("#" + ID_PARENT).load("2.html");
    }
  });
  
})