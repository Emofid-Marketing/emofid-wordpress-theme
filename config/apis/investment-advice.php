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
    $mobile = convertPersianToEnglish($body->mobile);
    $location = $body->location || "";

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
        reg_date > $yesterday
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


function convertPersianToEnglish($string) {
    $persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    $english = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    $output= str_replace($persian, $english, $string);
    return $output;
}


function sendToXRM( $mobile, $location ) {

    $ApiAddress = "https://xrmservice.emofid.com/XrmApi/Marketing/CreateConsultation";
    $AppId = "E273F129-1937-EC11-AE33-005056AA7F0E";

    $postdata = '
        {
            "ApplicationId": "' . $AppId . '",
            "xrmLead": {
                "mobileNumber": "' . $mobile . '",
                "campaignCodeName": "next_emofid",
                "TrafficSource": "' . $location . '"
            },
            "xrmConsultationSchedule": {}
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
