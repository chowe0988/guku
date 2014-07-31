jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.guku-nav').on('click', function(event){
		if($(event.target).is('.guku-nav')) $(this).children('ul').toggleClass('is-visible');

	});
});
