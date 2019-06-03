(function($) {
	$('.gform_fields input, textarea').focus(function() {
		$(this)
			.parent()
			.prev()
			.addClass('is-active');
	});
	// $('.ginput-complex input').focus(function() {
	// 	$(this)
	// 		.parent()
	// 		.prev()
	// 		.prev()
	// 		.addClass('is-active');
	// });
})(jQuery);
