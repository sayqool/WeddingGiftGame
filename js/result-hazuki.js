$(document).ready(function(){
    //処理
    // const music = new Audio('/musics/music.mp3');
    // music.play();

    $('img').hide();
    resize();
    $('img').fadeIn(1000);
    $('.shadow-circle').fadeIn(1000);

    renderAnswerTable();
  
  });
  

  function resize(){
    let intViewportHeight = window.innerHeight;
    let omiHeight = intViewportHeight * 0.65;
    $('.img-chara img').height(omiHeight);
  }


  $('#' + 'btn-next').click(function(){
    // 第一問目
    $("#" + ID_PARENT).load("answer-hazuki.html");
})

/**
 * localstrageから値を取得
 * @param {*} userName 
 * @param {*} pageCnt 
 * @returns 
 */
 function getLocalstrage(userName, pageCnt){
  let imgUrl = localStorage.getItem(userName + "q" + pageCnt + "-img");
  let a1 = localStorage.getItem(userName + "q" + pageCnt+ "-a1");
  let a2 = localStorage.getItem(userName + "q" + pageCnt+ "-a2");
  let a3 = localStorage.getItem(userName + "q" + pageCnt+ "-a3");
  return [imgUrl,a1,a2,a3];
}


function renderAnswerTable(){
  let usr = "hazuki";
  let table = $("."+ "tbl-answer1");
  table.append('<tr><td colspan="2" class="title">葉月さんの回答' + '</td></tr>');
  for(i=1;i <= 5;i++){
    let trInfo = getLocalstrage(usr,i);
    let tr = "<tr><td><img src='" + trInfo[0] + "'/></td><td>";
    if(trInfo[1] != ""){
        tr += "1." + trInfo[1];
    }
    if(trInfo[2] != ""){
      tr += "  2." + trInfo[2];
    }
    if(trInfo[3] != ""){
      tr += "  3." + trInfo[3];
    } 
    tr += "</td></tr>"
    table.append(tr);
  }
  // table = $("."+ "tbl-answer2");
  // for(i=5;i <= 8;i++){
  //   let trInfo = getLocalstrage(usr,i);
  //   let tr = "<tr><td><img src='" + trInfo[0] + "'/></td><td>";
  //   if(trInfo[1] != ""){
  //       tr += "1." + trInfo[1];
  //   }
  //   if(trInfo[2] != ""){
  //     tr += "2." + trInfo[2];
  //   }
  //   if(trInfo[3] != ""){
  //     tr += "3." + trInfo[3];
  //   } 
  //   tr += "</td></tr>"
  //   table.append(tr);
  // }
  // table = $("."+ "tbl-answer3");
  // for(i=9;i <= 11;i++){
  //   let trInfo = getLocalstrage(usr,i);
  //   let tr = "<tr><td><img src='" + trInfo[0] + "'/></td><td>";
  //   if(trInfo[1] != ""){
  //       tr += "1." + trInfo[1];
  //   }
  //   if(trInfo[2] != ""){
  //     tr += "2." + trInfo[2];
  //   }
  //   if(trInfo[3] != ""){
  //     tr += "3." + trInfo[3];
  //   } 
  //   tr += "</td></tr>"
  //   table.append(tr);
  // }
}