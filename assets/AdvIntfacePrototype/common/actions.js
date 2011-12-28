/**
 * @author n3655
 */

$(document).ready(function(){
	var typecomp = false;
	$('#dialog').hide();
	$('#forcecomp').hide();
	//$('#cover').click(function () {
		$('#cover').hide();
		$('#dialog').show();
		$('#dialog_contents').jTypeWriter({duration:1.0, onComplete:function(){typecomp = true;}});
	//});
	$('#dialog').click(function () {
		if(typecomp == false){
			//확 튀어 나오게~
			$('#dialog').hide();
			$('#forcecomp').show();
		}
		else{
			//다음 장으로 갑시다.
			//$("body").fadeOut(1000,function(){window.location = $('#next').text();});
			window.location = $('#next').text();
		}
	});
	$('#forcecomp').click(function () {
		//영락 없이 다음 장으로 갑시다.
		//$("body").fadeOut(1000,function(){window.location = $('#next').text();});
		window.location = $('#next').text();
	});
});
