var userName = "hazuki";

var questionNum;
$(document).ready(function(){
    //処理
    // const music = new Audio('/musics/music.mp3');
    // music.play();
    reize();
  
    questionNum = localStorage.getItem('qNum');


    $('.void img').hide();
    $('.content-explain img').hide();
    $('.void img:nth-child(' + (questionNum % 3 + 1) + ')').fadeIn(1000);
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
  
  
  var cntPage = localStorage.getItem('qNum');
  var nextPage = 6;
  $('#' + 'btn-next').click(function(){
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
      talkZundamon('../content/voice/015_ずんだもん（あまあま）_あれっ？まだうまっ….wav');
      Swal.fire({
        title: '空白の答えがあるようです！',
        showCancelButton: true,
        confirmButtonText: '次の画面に進む',
        cancelButtonText: '入力しなおす。'  
      }).then((result) => {
        if (result.value) {
          talkZundamon('../content/voice/016_ずんだもん（あまあま）_ほんとにそれでいい….wav');
          setLocalstorage();
          if(cntPage < nextPage){
            talkZundamon('../content/voice/008_ずんだもん（あまあま）_たんまつをはづきさ….wav');
            localStorage.setItem('qNum', cntPage);
            $("#" + ID_PARENT).load("waiting-omi.html");
          }else{
            talkZundamon('../content/voice/結果発表.wav');
            $("#" + ID_PARENT).load("waiting-before-result.html");
          }
        }else{
          return false;
        }
      });
    }else{
      setLocalstorage();
      if(cntPage < nextPage){
        localStorage.setItem('qNum', cntPage);
        talkZundamon('../content/voice/008_ずんだもん（あまあま）_たんまつをはづきさ….wav');
        $("#" + ID_PARENT).load("waiting-omi.html");
      }else{
        talkZundamon('../content/voice/結果発表.wav');
        $("#" + ID_PARENT).load("waiting-before-result.html");
      }
    }
  }

  function setLocalstorage(){
    let a1 = $('.q-1 textarea').val();
    let a2 = $('.q-2 textarea').val();
    let a3 = $('.q-3 textarea').val();
    let srcUrl = $(".q" + cntPage).attr('src'); 
    localStorage.setItem(userName + "q" + cntPage + "-img",srcUrl);
    localStorage.setItem(userName + "q" + cntPage + "-a1",a1);
    localStorage.setItem(userName + "q" + cntPage + "-a2",a2);
    localStorage.setItem(userName + "q" + cntPage + "-a3",a3);
    fadePicture('void');
    fadePicture('content-explain');
    $('.question textarea').val("");
    cntPage++;
  }