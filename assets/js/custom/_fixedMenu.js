(function($) {
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 500) {
			$('#fixedMenu').addClass('active');
		} else {
			$('#fixedMenu').removeClass('active');
		}
	});
})(jQuery);

//TODO: doesn't work don't know why
