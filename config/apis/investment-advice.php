<?php

add_action( 'rest_api_init', function () {
    register_rest_route( 'investment-advice/v1', '/store', array(
      'methods' => 'POST',
      'callback' => 'investment_advice_store_mobile',
    ));
});


function investment_advice_store_mobile( WP_REST_Request $request ) {

    global $wpdb;
    $table_name = $wpdb->prefix . 'emofid_advice_requests';

    $body = json_decode($request->get_body());
    $mobile = convertPersianCharsToEnglish($body->mobile);
    $location = $body->location || "";


    // check captcha
    if( !validateCaptcha( $body->captcha ) ) return [
        'status' => false,
        'error' => 'کد امنیتی وارد شده اشتباه است'
    ];
    

    // validate mobile number
    if( !validateMobileNumber($mobile) ) {
        return [
            'status' => false,
            'error' => 'شماره موبایل وارد شده اشتباه است',
        ];
    }

    $mobile = beautifyMobileNumber( $mobile );
    
    // ignore duplicate & span numbers
    if( thisIPIsSpammer($mobile) ) {
        return [
            'status' => false,
            'error' => 'لطفا از ارسال بیش از حد فرم خودداری کنید!'
        ];
    }

    $wpdb->insert(
        $table_name,
        [
            'mobile' => beautifyMobileNumber($mobile),
            'user_ip' => getUserIP()
        ]
    );

    if($wpdb->last_error) return [
        'status' => false,
        'error' => 'در حال حاضر مشکلی پیش آمده است. چند دقیقه دیگر مجددا تلاش کنید.'
    ];

    sendToXRM(
        $mobile,
        $location
    );

    return [
        'status' => true,
    ];
}

function thisIPIsSpammer( $mobile ) {

    global $wpdb;
    $table_name = $wpdb->prefix . 'emofid_advice_requests';
    
    $userIP = getUserIP();

    $yesterday = date('Y-m-d', strtotime("-1 days"));

    $results = $wpdb->get_results ("
        SELECT mobile
        FROM $table_name
        WHERE
        user_ip = '$userIP' AND
        reg_date > '$yesterday'
    ");

    $is_duplicate = false;

    foreach( $results as $result ) {
        if( $result->mobile === $mobile ) $is_duplicate = true;
    }

    if(
        count($results) < 3 &&
        !$is_duplicate
    ) return false;

    return true;
}


function sendToXRM( $mobile, $location ) {

    $ApiAddress = "https://xrmwebapi.emofid.com/api/v1/Leads";
    $AppId = "e701a05c-9ae7-ea11-8374-005056aa1985";

    $postdata = '
        {
            "lead": {
                "applicationId": "' . $AppId . '",
                "mobileNumber": "' . $mobile . '"
            },
            "duplicationCheckHour": 0
        }
    ';

    $opts = array('http' =>
        array(
            'method'  => 'POST',
            'header'  => 'Content-Type: application/json',
            'content' => $postdata
        )
    );

    $context = stream_context_create($opts);

    file_get_contents( $ApiAddress, false, $context );

    return;
}
