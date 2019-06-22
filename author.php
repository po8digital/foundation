<?php
/**
 * The template for displaying Author Archive pages
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

global $wp_query;

$context          = Timber::context();
$context['posts'] = new Timber\PostQuery();
if (isset($wp_query->query_vars['author'])) {
	$author            = new Timber\User($wp_query->query_vars['author']);
	$author_id = get_the_author_meta('ID');

	$context['author'] = $author;
	$context['author_url'] = $author->link;
	$context['author_avatar'] = $author->avatar;
	$context['author_position'] = get_field('user_position', 'user_' . $author_id);
	$context['author_fb'] = get_field('user_facebook', 'user_' . $author_id);
	$context['author_linkedin'] = get_field('user_linkedin', 'user_' . $author_id);
	$context['author_twitter'] = get_field('user_twitter', 'user_' . $author_id);
	$context['title']  = 'Author Archives: ' . $author;
	$context['cats'] = get_categories();
}
Timber::render(array('author.twig', 'archive.twig'), $context);