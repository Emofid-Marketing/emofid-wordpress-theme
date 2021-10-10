<?php

/* Template Name: Investment Page */

require_once( get_template_directory() . '/data/investment-funds.php');
require_once( get_template_directory() . '/data/funds-data.php');

$context = Timber::context();
$context['fundsGroups'] = $fundsGroups;
$context['funds'] = $funds;

Timber::render('pages/investment.twig', $context);

?>
