var isFirst = true;
var audio;
document.body.addEventListener('click', () => {
  if(isFirst){
    setTimeout(function(){
      audio = new Audio('../content/music/nayutan8bit.mp3');
      audio.play();
      audio.volume = '0.2';
      audio.loop = true;
    },1000);
  }
  isFirst = false;
});

var talkWav;
function talkZundamon(url){
    if(talkWav != null){
        talkWav.pause();
    }
    talkWav = new Audio(url);
    talkWav.play();
    talkWav.volume = '0.5';
}

function playMusic(url,startTime,endTime,isLoop){
  setTimeout(function(){
    audio.pause();
    audio = new Audio();
    audio.src=url+"#t=" + startTime + "," + endTime;
    console.log(url+"#t=" + startTime + "," + endTime);
    audio.play();
    audio.volume = '0.1';
    audio.loop = isLoop;
  },3000);
}

function playMusic(url){
  setTimeout(function(){
    audio.pause();
    audio = new Audio();
    audio.src=url;
    audio.play();
    audio.volume = '0.2';
    audio.loop = true;
  },3000);
}

function pictureDisplay(){
  
}