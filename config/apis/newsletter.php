<?php

add_action( 'rest_api_init', function () {
    register_rest_route( 'newsletter/v1', '/store', array(
      'methods' => 'POST',
      'callback' => 'newsletter_store_email',
    ));
});


function newsletter_store_email( WP_REST_Request $request ) {

    $body = json_decode($request->get_body());
    $email = $body->email;

    if(
        !filter_var($email, FILTER_VALIDATE_EMAIL)
    ) return [
        'status' => false,
        'error' => 'ایمیل وارد شده اشتباه است!'
    ];

    global $wpdb;
    $table_name = $wpdb->prefix . 'emofid_newsletter_emails';

    $wpdb->insert(
        $table_name,
        [
            'email' => $email,
            'user_ip' => getUserIP()
        ]
    );

    if($wpdb->last_error) return [
        'status' => false,
        'error' => 'ایمیل وارد شده قبلا ثبت شده است'
    ];

    return [
        'status' => true,
        'message' => 'عضویت شما در خبرنامه با موفقیت انجام شد.'
    ];
}
