<?php

function modify_request($request, $isArray = false) {
    $data = htmlspecialchars(stripslashes(trim($request)));
    return $data;
}


// disable generator meta
remove_action('wp_head', 'wp_generator');


// disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');


// disable API CORS headers( Because Server handles it )
add_action( 'rest_api_init', function() {

	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );

}, 15 );
