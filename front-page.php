<?php
$context   = Timber::get_context();
$templates = array('front-page.twig');
Timber::render($templates, $context);