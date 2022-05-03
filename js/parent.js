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
