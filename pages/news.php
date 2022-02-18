<?php

/* Template Name: News Page */

$context = Timber::context();


/* Announcements */
$announcements = array(
    'post_type' => 'announcement',
    'posts_per_page' => 1,
);

$context['announcements'] = Timber::get_posts( $announcements );


/* Slider Posts */
$slider_posts = array(
    'post_type' => 'post',
    'posts_per_page' => 5,
);

$context['slider_posts'] = Timber::get_posts( $slider_posts );


/* Posts */
$posts = array(
    'post_type' => 'post',
    'posts_per_page' => 3,
);

$context['posts'] = Timber::get_posts( $posts );


/* Multimedia Posts */
$multimedia_posts = array(
    'post_type' => 'post',
    'posts_per_page' => 2,
);

$context['multimedia_posts'] = Timber::get_posts( $multimedia_posts );


/* Tags Cloud */
$context['tags_cloud'] = wp_tag_cloud([
    'echo' => 0,
    'number' => 8
]);


Timber::render('news/news.twig', $context);
