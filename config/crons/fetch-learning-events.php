<?php

require_once( get_template_directory() . "/classes/Fetch.php" );

new CronJob([
    'id' => 'fetch-learning-events',
    'interval' => 86400, // 86400 seconds = 1 day
    'handler' => function() {

        $request = new Fetch([
            "method" => "get",
            "url" => "https://learning.emofid.com/api/?reqType=emofid-learning",
        ]);
        $result = $request->send();

        if( $result["status"] === 200 ) {
            update_option(
                "_emofid_learning_current_week_events",
                $result["response"]
            );

            if (function_exists('w3tc_flush_all')) w3tc_flush_all();
        }
    }
]);

