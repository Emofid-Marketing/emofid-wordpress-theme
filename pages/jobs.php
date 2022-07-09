<?php

/* Template Name: Jobs Page */

require_once( get_template_directory() . '/data/jobs-departments.php' );
require_once( get_template_directory() . '/data/jobs-faq.php' );

$context = Timber::context();
$context['departments'] = $departments;
$context['questions'] = $questions;

Timber::render('jobs/jobs.twig', $context);
