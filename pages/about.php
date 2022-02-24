<?php

/* Template Name: About Page */

$context = Timber::context();


require_once( get_template_directory() . '/data/over-time.php' );
$context["overTimeItems"] = $overTimeItems;

Timber::render('about/about.twig', $context);
