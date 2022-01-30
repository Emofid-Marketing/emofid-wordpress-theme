<?php

$context = Timber::context();

$context['post'] = new Timber\Post();
$context['related_posts'] = getRelatedPostsByTag();

Timber::render('pages/singles/post.twig', $context);
