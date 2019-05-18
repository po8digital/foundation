<?php
function wst_search_form($form)
{
	$form = '<section class="search"><form role="search" method="get" id="search-form" action="' . home_url('/') . '" >
    <label class="screen-reader-text" for="s">' . __('',  'domain') . '</label>
     <input type="search" value="' . get_search_query() . '" name="s" id="s" placeholder="What are you looking for?" />

     </form></section>';
	return $form;
}

add_filter('get_search_form', 'wst_search_form');

add_filter('body_class', 'wst_add_slug_body_class');
/**
 * Adds a css class to the body element
 *
 * @param  array $classes the current body classes
 * @return array $classes modified classes
 */
function wst_add_slug_body_class($class)
{
	global $post;
	$class[] = $post->post_name . '-page';
	return $class;
}