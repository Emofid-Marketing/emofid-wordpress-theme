<?php

require_once( get_template_directory() . "/classes/Fetch.php" );


new CronJob([
    'id' => 'fetch-funds-returns',
    'interval' => 86400, // 86400 seconds = 1 day
    'handler' => function() {

        $request = new Fetch([
            "method" => "get",
            "url" => "https://fundsapi.emofid.com/api/Investment/Returns",
        ]);
        $result = $request->send();

        foreach( $result["response"] as $index => $fund) {
            if( !$fund->title ) {
                array_splice($result["response"], $index, 1);
            }
        }

        if( $result["status"] === 200 ) {
            update_option(
                "_emofid_funds_returns",
                $result["response"],
                false
            );

            if (function_exists('w3tc_flush_all')) w3tc_flush_all();
        }
    }
]);

