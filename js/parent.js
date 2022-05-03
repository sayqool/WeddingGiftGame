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
      resize();
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

  $(window).on('beforeunload', function(e){
    var message = '更新をおこなうと、ゲームは最初のページに戻ります。';
    e.returnValue = message;
    return message;
  });

  function readFirstPage(){
    $("#" + ID_PARENT).load("Index.html");
  }

//==================================================================
