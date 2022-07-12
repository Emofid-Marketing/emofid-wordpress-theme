<?php

// disable generator meta
remove_action('wp_head', 'wp_generator');

// disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');
