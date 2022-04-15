$(document).ready(function(){
  //処理
  reize();
});

$(function() {

  $(window).resize(function() {
    //リサイズされたときの処理
    reize();
  });

});


function reize(){
  let w = $('#img-chara img').width();
  $('.shadow-circle').css('width',w);
}


$('#' + 'btn-start-img').click(function(){
  Swal.fire({
    title: 'あなたたちは落合夫婦ですか？',
    text: "このゲームは落合一輝兄弟と葉月姉妹のためのパーソナルなゲームです。",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: '私たちは落合夫婦だ！',
    cancelButtonText: '実はちがう...。'  
  }).then((result) => {
    if (result.value) {
        window.location.href = "2.html";
    }
  });
  
})

let isFirst = true;
document.body.addEventListener('click', () => {
  if(isFirst){
    const audio = new Audio('../content/music/nayutan8bit.mp3');
    audio.play();
  }
  isFirst = false;
});
