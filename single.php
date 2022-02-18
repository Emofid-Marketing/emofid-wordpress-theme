<?php

$context = Timber::context();

$context['post'] = new Timber\Post();
$context['post_views'] = pvc_get_post_views(get_the_ID());
$context['related_posts'] = getRelatedPostsByTag();

Timber::render('singles/post/post.twig', $context);
