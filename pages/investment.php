<?php

/* Template Name: Investment Page */

require_once( get_template_directory() . '/data/investment-funds.php');
require_once( get_template_directory() . '/data/funds-data.php');

$context = Timber::context();
$context['fundsGroups'] = $fundsGroups;
$context['funds'] = $funds;

$context['fundsReturns'] = get_option('_emofid_funds_returns');
$assetsCompositions = get_option('_emofid_funds_asset_composition');


function getAssetsComposition( $fundCode ) {

    if( $fundCode === "ayar" ) {
        return [
            [
                "title" => "گواهی سپرده کالایی سکه طلا",
                "value" => 96.09
            ],
            [
                "title" => "نقد و بانک (سپرده)",
                "value" => 3.91
            ],
        ];
    }
    
    global $assetsCompositions;
    foreach( $assetsCompositions as $assetsComposition ) {
        if( $assetsComposition->fundCode === $fundCode ) {
            return $assetsComposition->assetComposition;
        }
    }

}

Timber::render('investment/investment.twig', $context);

?>
