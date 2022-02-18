<?php

/* Template Name: Archive Page */

global $paged;

if (!isset($paged) || !$paged){
	$paged = 1;
}

$context = Timber::context();

$args = array(
    'post_type' => 'post',
    'paged' => $paged
);

$context['posts'] = new Timber\PostQuery($args);
$context['pagination'] = $context['posts']->pagination(3);

Timber::render('archive/archive.twig', $context);
