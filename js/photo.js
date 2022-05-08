$(function() {
	$('input[class=photo_up]').change(function() {// upするinputのID
 
		var file = $(this).prop('files')[0];
 
		if (! file.type.match('image.*')) {
			$(this).val('');
			// $('.add-button').html('');
			return;
		}
 
		var reader = new FileReader();
        var targetAddButton = $(this).parent('.add-button');
		reader.onload = function() {
			targetAddButton.css('background-image','url('+reader.result+')');
		}
		
		reader.readAsDataURL(file);
	});
});

$('#' + 'btn-next').click(function(){
    // 第一問目
	html2canvas(document.getElementById(ID_PARENT),{
		onrendered: function(canvas){
		  //imgタグのsrcの中に、html2canvasがレンダリングした画像を指定する。
		  var imgData = canvas.toDataURL();
		  localStorage.setItem("photo",imgData);
		}
	  });
    talkZundamon('../content/voice/ending_001.wav');
    $("#" + ID_PARENT).load("end.html");
})
