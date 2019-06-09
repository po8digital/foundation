(function($) {
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 500) {
			$('#fixedMenu').addClass('isScrolled');
		} else {
			$('#fixedMenu').removeClass('isScrolled');
		}
	});
})(jQuery);

//TODO: doesn't work don't know why
