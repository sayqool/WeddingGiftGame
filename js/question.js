let questionNum;
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
  
  
  let cntPage = 0;
  const nextPage = 11
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
    let a1 = $('.q-1').text();
    let a2 = $('.q-2').text();
    let a3 = $('.q-3').text();

    if(a1.trim().length == 0 || a2.trim().length == 0 || a3.trim().length == 0){
      Swal.fire({
        title: '空白の答えがあるようです！',
        showCancelButton: true,
        confirmButtonText: '次の画面に進む',
        cancelButtonText: '入力しなおす。'  
      }).then((result) => {
        if (result.value) {
          if(cntPage < nextPage){
            localStorage.setItem("q" + cntPage + "-img",a1.trim());
            localStorage.setItem("q" + cntPage + "-a1",a1.trim());
            localStorage.setItem("q" + cntPage + "-a2",a2.trim());
            localStorage.setItem("q" + cntPage + "-a3",a3.trim());
            fadePicture('void');
            fadePicture('content-explain');
          }else{
            window.location.href = "3.html";
          }
        }else{
          return false;
        }
      });
    }
  }