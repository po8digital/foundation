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