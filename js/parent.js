// common const
const ID_PARENT = "parent";
const BODY = "body";


$(document).ready(function(){
    //処理
    resize();

    readFirstPage();
  });

  $(function() {

    $(window).resize(function() {
      //リサイズされたときの処理
      reize();
    });
  
  });

  function resize(){
    $(BODY).css("margin", 0);
    let innerHeight = window.innerHeight;
    let innerWidth = window.innerWidth;
    
    $("#" + ID_PARENT).height(innerHeight);
    let hPatio = 768 / innerHeight;
    let width = 1366;
    if(innerWidth < 1366){
      width = 1366 * hPatio;
    }
    $("#" + ID_PARENT).width(width);
  }


  function readFirstPage(){
    $("#" + ID_PARENT).load("Index.html");
  }

//==================================================================
// ページ遷移系
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
      $("#" + ID_PARENT).load("2.html");
    }
  });
  
})