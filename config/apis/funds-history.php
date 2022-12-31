<?php

require_once( get_template_directory() . "/classes/Fetch.php" );

add_action( 'rest_api_init', function () {
    register_rest_route( 'funds', '/history/(?P<id>\d+)', array(
      'methods' => 'GET',
      'callback' => 'get_fund_history',
    ));
});

function get_fund_history( WP_REST_Request $request ) {

    $urlParams = $request->get_url_params();
    $fundCode = $urlParams["id"];

    $token = get_option("_emofid_bambocoreapi_token");

    $result = get_bambo_fund_history(
        $token,
        $fundCode
    );

    // if token expired
    if(
        $result["status"] !== 200 ||
        $result["response"]->success !== true
    ) {
        $req = new Fetch([
            "method" => "POST",
            "url" => "https://auth.bambocore.ir/api/v1/clients/authorize",
            "body" => [
                "username" => "emofid",
                "password" => "aLYUktF+PX%kC+V"
            ]
        ]);

        $result = $req->send();
        $result = $result["response"];

        $token = $result->data;
        update_option("_emofid_bambocoreapi_token", $token, false);
    }

    $result = get_bambo_fund_history(
        $token,
        $fundCode
    );

    $result = $result["response"];

    if( !$result->success || !$result->data ) return [
        "status" => false,
        "error" => "destination server is not accessible"
    ];

    return [
        "status" => true,
        "data" => $result->data,
    ];
}


function get_bambo_fund_history( $token, $fundCode ) {

    $request = new Fetch([
        "method" => "GET",
        "url" => "https://fund.bambocore.ir/api/v1/funds/$fundCode/history",
        "header" => [
            "client-token: Bearer $token",
        ]
    ]);

    return $request->send();
}
