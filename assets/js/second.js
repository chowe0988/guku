jQuery(document).ready(function($){
	//open-close submenu on mobile

	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	$('.tnt-nav').on('click', function(event){
		if($(event.target).is('.tnt-nav')) $(this).children('ul').toggleClass('is-visible');

	});
});
