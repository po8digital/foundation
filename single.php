<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();
$timber_post = Timber::query_post();
$context['post'] = $timber_post;
// $cat = implode(get_the_category());
$args = array(
	'post_type' => 'post',
	'posts_per_page' => 3,
	// 'category_name' => $cat,
);

//TODO: get the category and exclude this post
$context['same_cat'] = Timber::get_posts($args);

if (post_password_required($timber_post->ID)) {
	Timber::render('single-password.twig', $context);
} else {
	Timber::render(array('single-' . $timber_post->ID . '.twig', 'single-' . $timber_post->post_type . '.twig', 'single.twig'), $context);
}