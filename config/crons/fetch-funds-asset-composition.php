<?php

require_once( get_template_directory() . "/classes/Fetch.php" );


new CronJob([
    'id' => 'fetch-funds-asset-composition',
    'interval' => 86400, // 86400 seconds = 1 day
    'handler' => function() {

        $request = new Fetch([
            "method" => "get",
            "url" => "https://fundsapi.emofid.com/api/Investment/AssetComposition",
        ]);
        $result = $request->send();

        if( $result["status"] === 200 ) {
            update_option(
                "_emofid_funds_asset_composition",
                $result["response"],
                false
            );
        }
    }
]);

