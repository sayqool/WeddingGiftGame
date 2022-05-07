var userName = "occhi";

// var questionNum;
$(document).ready(function(){
    //処理
    // const music = new Audio('/musics/music.mp3');
    // music.play();
    reize();
  
    questionNum = localStorage.getItem('qNum');


    $('.void img').hide();
    $('.content-explain img').hide();
    $('.void img:nth-child(' + questionNum + ')').fadeIn(1000);
    $('.content-explain img:nth-child(' + questionNum + ')').fadeIn(1000);

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
  var nextPage = 11
  $('#' + 'btn-next').click(function(){
    cntPage++;
    chkAnswer();
  })
    
  function fadePicture(className){
    $('.' + className + ' img:first-child').fadeOut(1000);
    $('.' + className + ' img:first-child').appendTo('.' + className);
    $('.' + className + ' img:first-child').fadeIn(1000);
  }
    

  function chkAnswer(){
    let a1 = $('.q-1 textarea').val();
    let a2 = $('.q-2 textarea').val();
    let a3 = $('.q-3 textarea').val();

    if(a1.trim().length == 0 || a2.trim().length == 0 || a3.trim().length == 0){
      Swal.fire({
        title: '空白の答えがあるようです！',
        showCancelButton: true,
        confirmButtonText: '次の画面に進む',
        cancelButtonText: '入力しなおす。'  
      }).then((result) => {
        if (result.value) {
          setLocalstorage();
          // if(cntPage < nextPage){
          // }else{
            $("#" + ID_PARENT).load("waiting-jeanne.html");
          // }
        }else{
          return false;
        }
      });
    }else{
      setLocalstorage();
      // if(cntPage < nextPage){
      // }else{
        $("#" + ID_PARENT).load("waiting-jeanne.html");
      // }
    }
  }

  function setLocalstorage(){
    let a1 = $('.q-1 textarea').val();
    let a2 = $('.q-2 textarea').val();
    let a3 = $('.q-3 textarea').val();
    let srcUrl = $(".content-explain img").attr('src'); 
    localStorage.setItem(userName + "q" + cntPage + "-img",srcUrl);
    localStorage.setItem(userName + "q" + cntPage + "-a1",a1);
    localStorage.setItem(userName + "q" + cntPage + "-a2",a2);
    localStorage.setItem(userName + "q" + cntPage + "-a3",a3);
    fadePicture('void');
    fadePicture('content-explain');
    $('.question textarea').val("");
  }


