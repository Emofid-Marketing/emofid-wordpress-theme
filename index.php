<?php

require_once( __DIR__ . "/data/advantages.php" );
require_once( __DIR__ . "/data/platforms-boxes.php" );
require_once( __DIR__ . "/data/partners.php" );

$context = Timber::context();
$context['posts'] = Timber::get_posts();
$context['advantages'] = $advantages;
$context['boxes'] = $boxes;
$context['partners'] = $partners;


$templates = array( 'index.twig' );


if (is_home()) {
    array_unshift(
        $templates,
        'home.twig'
    );
}

Timber::render($templates, $context);
