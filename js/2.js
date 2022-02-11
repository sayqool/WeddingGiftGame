$('#' + 'btn-next-img').click(function(){
    Swal.fire({
      title: 'あなたたちは落合夫婦ですか？',
      text: "このゲームは落合一輝兄弟と葉月姉妹のためのパーソナルなゲームです。",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: '私たちは落合夫婦だ！',
      cancelButtonText: '実はちがう...。'  
    }).then((result) => {
      if (result.value) {
          window.location.href = "Question.html";
      }
    });
    
  })
  