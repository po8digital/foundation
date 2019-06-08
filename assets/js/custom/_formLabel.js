(function($) {
	$('.gform_fields input, textarea').focus(function() {
		$(this)
			.parent()
			.prev()
			.addClass('is-active');
	});
})(jQuery);
