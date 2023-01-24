<?php

function modify_request($request, $isArray = false) {
    $data = htmlspecialchars(stripslashes(trim($request)));
    return $data;
}


// modify CSP header
header("Content-Security-Policy: default-src 'self' yoast.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' www.google.com www.gstatic.com; style-src 'self' 'unsafe-inline'; font-src 'self' data: fonts.gstatic.com; img-src 'self' data: secure.gravatar.com; frame-src 'self' *.google.com; upgrade-insecure-requests");


// disable generator meta
remove_action('wp_head', 'wp_generator');


// disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');


// disable API CORS headers( Because Server handles it )
add_action( 'rest_api_init', function() {
	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
}, 15 );


function emofid_modify_rest_endpoints( $endpoints ) {
	if ( isset( $endpoints['/wp/v2/users'] ) ) {
		unset( $endpoints['/wp/v2/users'] );
	}
	if ( isset( $endpoints['/wp/v2/users/(?P<id>[\d]+)'] ) ) {
		unset( $endpoints['/wp/v2/users/(?P<id>[\d]+)'] );
	}

	return $endpoints;
}
add_filter( 'rest_endpoints', 'emofid_modify_rest_endpoints' );


// disable password reset
function disable_password_reset() { 
    return false;
}
add_filter ( 'allow_password_reset', 'disable_password_reset' );


// disable password reset link display
function remove_lostpassword_text ( $text ) {
     if ($text == 'رمز عبورتان را گم کرده‌اید؟'){$text = '';} 
        return $text; 
}
add_filter( 'gettext', 'remove_lostpassword_text' ); 
