<?php

add_action( 'rest_api_init', function () {
    register_rest_route( 'suggestion/v1', '/store', array(
      'methods' => 'POST',
      'callback' => 'suggestion_form_store',
    ));
});


function suggestion_form_store( WP_REST_Request $request ) {

    global $wpdb;
    $table_name = $wpdb->prefix . 'emofid_suggestions';

    $body = json_decode($request->get_body());

    $validate = formDataIsValid( $body );

    if( !$validate['status'] ) return [
        'status' => false,
        'error' => $validate['error']
    ];

    if( thisSuggestionIPIsSpammer() ) {
        return [
            'status' => false,
            'error' => 'از ارسال بیش از حد فرم خودداری کنید!'
        ];
    }

    $name = isset($body->name) ? $body->name : null;
    $mobile = isset($body->mobile) ? convertPersianCharsToEnglish($body->mobile) : null;
    $email = isset($body->email) ? $body->email : null;
    $nationalcode = isset($body->nationalcode) ? $body->nationalcode : null;
    $content = isset($body->content) ? $body->content : null;

    $wpdb->insert(
        $table_name,
        [
            'name' => $body->name,
            'mobile' => $mobile,
            'email' => $email,
            'nationalcode' => $nationalcode,
            'content' => $content,
            'user_ip' => getUserIP()
        ]
    );

    if($wpdb->last_error) return [
        'status' => false,
        'error' => 'در حال حاضر مشکلی پیش آمده است. چند دقیقه دیگر مجددا تلاش کنید.'
    ];

    // sendIncidentToXRM(
    //     $nationalcode,
    //     $content
    // );

    return [
        'status' => true,
        'message' => 'نظر شما با موفقیت ثبت شد. از همکاری شما سپاسگزاریم'
    ];
}


function formDataIsValid( $body ) {

    // name
    if( !isset($body->name) || strlen($body->name) < 3 ) return [
        'status' => false,
        'error' => 'نام وارد شده قابل قبول نیست',
    ];

    // mobile
    if(
        isset($body->mobile) &&
        !validateMobileNumber(
            convertPersianCharsToEnglish($body->mobile)
        )
    ) return [
        'status' => false,
        'error' => 'شماره موبایل وارد شده قابل قبول نیست',
    ];

    // email
    if(
        isset($body->email) &&
        !filter_var($body->email, FILTER_VALIDATE_EMAIL)
    ) return [
        'status' => false,
        'error' => 'ایمیل وارد شده قابل قبول نیست',
    ];

    // nationalcode
    if(
        isset($body->nationalcode) &&
        !validateNationalCode($body->nationalcode)
    ) return [
        'status' => false,
        'error' => 'کد ملی وارد شده قابل قبول نیست',
    ];

    // content
    if(
        !isset($body->content) ||
        strlen( $body->content ) < 10
    ) return [
        'status' => false,
        'error' => 'متن توضیحات وارد شده بسیار کوتاه است',
    ];

    if(strlen($body->content) > 500) return [
        'status' => false,
        'error' => 'طول توضیحات وارد شده طولانی تر از حد مجاز است!',
    ];


    return [
        'status' => true
    ];
}


function thisSuggestionIPIsSpammer() {

    global $wpdb;
    $table_name = $wpdb->prefix . 'emofid_suggestions';
    
    $userIP = getUserIP();

    $yesterday = date('Y-m-d', strtotime("-1 days"));

    $sql = "
        SELECT *
        FROM $table_name
        WHERE
        user_ip = '$userIP' AND
        reg_date > '$yesterday'
    ";

    $results = $wpdb->get_results( $sql );

    if( count($results) < 1 ) return false;

    return true;
}


function sendIncidentToXRM( $nationalCode = false, $description ) {

    $ApiAddress = "https://xrmwebapi.emofid.com/api/v1/Incidents";
    $AppId = "e701a05c-9ae7-ea11-8374-005056aa1985";

    $nationalCodeString = $nationalCode
        ? '"NationalNumber": "' . $nationalCode . '",'
        : '';

    $postdata = '
        {
            ' . $nationalCodeString . '
            "ApplicationId": "' . $AppId . '",
            "Description": "' . $description . '",
            "ContactReasonId": "ECB3FE06-183D-EA11-A951-0050569F8723"    
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
