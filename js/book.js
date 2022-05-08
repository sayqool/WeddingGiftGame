$(document).ready(function(){
    localStorage.setItem("occhi-hero", "omi");
    $('.chara-img').hide();
    renderAnswerTable("hazuki",$("."+ "tbl-answer2"), "葉月さんの回答");
    renderAnswerTable("occhi",$("."+ "tbl-answer1"), "一輝さんの回答");
    let hero = localStorage.getItem("occhi-hero");
    $('.lbl-occhi-hero').text("一輝さんのヒーローは");
    $("."+ hero).show();
    hero = localStorage.getItem("haduki-hero");
    $("."+ hero).show();
    $('.lbl-hadsuki-hero').text("葉月さんのヒーローは");

    let url = localStorage.getItem("photo");
    $(".album").src= url;
    console.log(url);

    setTimeout(function(){
        talkZundamon('../content/voice/ending_002.wav');
      },5000);

      setTimeout(function(){
        talkZundamon('../content/voice/ending_003.wav');
      },12000);

      setTimeout(function(){
        talkZundamon('../content/voice/ending_004.wav');
      },20000);
  });


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


  
function renderAnswerTable(usr, table, title){
    // let table = $("."+ "tbl-answer1");
    table.append('<tr><td colspan="2" class="title">' + title + '</td></tr>');
    for(i=1;i <= 5;i++){
      let trInfo = getLocalstrage(usr,i);
      let tr = "<tr><td  style='marign:5%'><img style='width:100%' src='" + trInfo[0] + "'/></td><td style='marign:5%; font-size:10px'>";
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
  }

  $('#' + 'btn-next').click(function(){
    endPage();
    })