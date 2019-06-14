<?php
//Template name: Account info
$context   = Timber::get_context();
$templates = array('account-info.twig');
$context['name'] = "Name";
$context['email'] = "yourname@email.com";
//TODO: same for password and billing with the hidden parts
Timber::render($templates, $context);