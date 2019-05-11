(function($) {
	$(
		'.blog .tease-post:nth-child(3),.blog .tease-post:nth-child(4), .blog .tease-post:nth-child(5)'
	).addClass('tease-post--small');
	$('.tease-post--small').wrapAll("<div class='small-posts-wrapper'/>");
})(jQuery);
