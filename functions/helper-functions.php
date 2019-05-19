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
add_filter('body_class', 'wst_add_slug_body_class');

//Filter search results

function searchfilter($query)
{

	if ($query->is_search && !is_admin()) {
		$query->set('post_type', array('post', 'service'));
	}

	return $query;
}

// add_filter('pre_get_posts', 'searchfilter');


//Number of posts in search results
function change_wp_search_size($query)
{
	if ($query->is_search) // Make sure it is a search page
		$query->query_vars['posts_per_page'] = -1;


	return $query; // Return our modified query variables
}
add_filter('pre_get_posts', 'change_wp_search_size'); // Hook our custom function onto the request filter