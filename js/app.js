
function viewport() { var e = window , a = 'inner'; if ( !( 'innerWidth' in window ) ) { a = 'client'; e = document.documentElement || document.body; } return { width : e[ a+'Width' ] , height : e[ a+'Height' ] } }

var vp_dimensions = viewport();


$(document).ready(function() {

	if( Modernizr.localstorage) {
		localStorage.clear();

	}

	$.localScroll({
		duration: 800
	});

	// $('#more').parallax("50%", 0.2);
	// $('#contact').parallax("50%", 0.2);

	var links = $('#links').find('a');

	links.each(function(i) {
		var link = $(this);
		link.on('click', function(e) {
			links.removeClass('active');
			link.addClass('active');
		});
	});

	/*
	$('#more').find('section').waypoint(function(){

		var section = $(this)
			sectionId = section.attr('id');

		var link = links.filter( function(idx) {
			return $(this).attr('href') == ('#'+sectionId);
		});

		links.removeClass('active');
		link.addClass('active');

	});
*/

});

$(window).load(function(){
	resize.initialize();
});