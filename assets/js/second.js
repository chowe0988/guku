jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.tnt-nav').on('click', function(event){
		if($(event.target).is('.tnt-nav')) $(this).children('ul').toggleClass('is-visible');

	});
});
