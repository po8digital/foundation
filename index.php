<?php
/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context = Timber::context();

if(isset($_GET['sort'])) {
    if ($_GET['sort'] == 'recent') {

        $args = array(
            'post_type' => 'post',
            'orderby' => 'date',
            'order' => 'DESC'
        );
    } else {
        $args = array(
            'post_type' => 'post',
            'meta_key' => 'wpb_post_views_count',
            'orderby' => 'meta_value_num',
            'order' => 'DESC'
        );

    }
    $context['posts'] = Timber::get_posts( $args );
} else {
    $context['posts'] = new Timber\PostQuery();
}

$templates = array('index.twig');
global $wp;
$context['current_url'] = home_url( $wp->request );


// if (is_home()) {
// 	array_unshift($templates, 'front-page.twig', 'home.twig');
// }
$context['cats'] = get_categories();
Timber::render($templates, $context);