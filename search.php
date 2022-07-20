<?php

$context = Timber::context();

$keyword = modify_request($_GET['s']);

$context['keyword'] = $keyword;

$args = [
    'post_type' => 'post',
    's' => $keyword,
    'posts_per_page' => 5
];

$context['posts'] = new Timber\PostQuery($args);

$query = new WP_Query($args);
$context['count'] = $query->found_posts;

Timber::render('search/search.twig', $context);
