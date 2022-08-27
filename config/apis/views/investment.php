<?php

function get_view_dynamic_data() {

    require_once( get_template_directory() . '/data/investment-funds.php');
    require_once( get_template_directory() . '/data/funds-data.php');

    foreach($fundsGroups as $fundsGroupIndex => $fundsGroup) {
        foreach($fundsGroup['funds'] as $fundIndex => $fund) {
            $fundCode = $fundsGroups[$fundsGroupIndex]['funds'][$fundIndex]['code'];
            $compositionArray = get_option('_emofid_funds_asset_composition');

            $key = array_search($fundCode, array_column($compositionArray, 'fundCode'));

            if( $fundCode !== 'ayar' ) {
                $fundsGroups[$fundsGroupIndex]['funds'][$fundIndex]['asset_composition'] = $compositionArray[$key]->assetComposition;
            }
        }
    }
        
    return [
        'fund_groups' => $fundsGroups,
        'returns' => get_option('_emofid_funds_returns'),
        'classes' => get_option('_emofid_learning_current_week_events'),
    ];
}
