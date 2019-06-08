(function($) {
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 500) {
			$('.fixed-menu').addClass('isScrolled');
		} else {
			$('.fixed-menu').removeClass('isScrolled');
		}
	});
})(jQuery);

//TODO: doesn't work don't know why
