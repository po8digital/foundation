<?php add_action('wp_enqueue_scripts', 'wst_styles_and_scripts');
function wst_styles_and_scripts()
{
	wp_enqueue_script('custom-js', THEME_JS . '/custom.min.js', ['jquery'], '1.0.0', true);

	wp_enqueue_script('matchHeight-js', THEME_JS . '/matchHeight.min.js', ['jquery'], '1.0.0', true);
	wp_enqueue_script('GSAP', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js', array(), '2.1.2', true);

	wp_enqueue_script('animation-js', THEME_JS . '/animation.min.js', ['GSAP'], '1.0.0', true);
}