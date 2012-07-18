
function viewport() { var e = window , a = 'inner'; if ( !( 'innerWidth' in window ) ) { a = 'client'; e = document.documentElement || document.body; } return { width : e[ a+'Width' ] , height : e[ a+'Height' ] } }

var vp_dimensions = viewport();

$(document).ready(function() {
	$('header nav').localScroll({
		duration: 800
	});

	$('#more').parallax("50%", 0.2);
	$('#contact').parallax("50%", 0.2);

});

$(window).load(function(){
	resize.initialize();
});