(function(){

	var initUrl = 'http://dariubs.github.io/rtlmd/initcontent.md';

	$(document).ready(function(){
		if(localStorage!='' && localStorage['content']!=null){
			$('textarea').val(localStorage['content']);
		}else{
			$.get(initUrl)
			.done(function( data ) {
				$('textarea').val(data);
			});
		}


		$('textarea').autogrow();

	   	var content = $('textarea').val();

	    $('#output').html(marked(content));

		setInterval(function(){
			var content = $('textarea').val();
			localStorage['content'] = content;
	    	$('#output').html(marked(content));
		}, 3000);
	});

}());


