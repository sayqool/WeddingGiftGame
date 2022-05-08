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