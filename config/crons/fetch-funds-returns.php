<?php

require_once( get_template_directory() . "/classes/Fetch.php" );


new CronJob([
    'id' => 'fetch-funds-returns',
    'interval' => 86400, // 86400 seconds = 1 day
    'handler' => function() {

        // Authentication
        $request = new Fetch([
            "method" => "POST",
            "url" => "http://auth.bambocore.ir/api/v1/clients/authorize",
            "body" => [
                "username" => "emofid",
                "password" => "aLYUktF+PX%kC+V"
            ]
        ]);

        $result = $request->send();
        $result = $result["response"];

        if( !$result->success || !$result->data ) return;
        
        $token = $result->data;

        // echo $token;

        // Get funds data
        $request = new Fetch([
            "method" => "GET",
            "url" => "http://fund.bambocore.ir/api/v1/funds",
            "header" => [
                "client-token: Bearer $token",
            ]
        ]);

        $result = $request->send();
        $result = $result["response"];

        if( !$result->success || !$result->data ) return;

        // organize data
        $funds = [];

        foreach( $result->data as $fund ) {

            $profits = json_decode(json_encode($fund->returns), true);

            $funds[] = [
                'fundCode' => $fund->code,
                'startDate' => $fund->startDate,
                'staticInfo' => [
                    'fundType' => $fund->fundTypeTitle 
                ],
                'lastNavDate' => $fund->lastSync,
                'subscriptionNav' => $fund->issuanceNav,
                "cancelNav" => $fund->redemptionNav,
                "aum" => $fund->totalNetAssetValue,
                "currentInvestorsNumber" => $fund->totalInvestor,
                "return1M" => $profits["months"]["1"],
                "return3M" => $profits["months"]["3"],
                "return6M" => $profits["months"]["6"],
                "return1Y" => $profits["years"]["1"],
                "return3Y" => $profits["years"]["3"],
                "return5Y" => $profits["years"]["5"],
            ];
        }

        update_option(
            "_emofid_funds_returns",
            $funds,
            false
        );
    }
]);

