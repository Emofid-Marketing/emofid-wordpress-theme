<?php

register_rest_field(
    'page',
    'dynamic_data',
    [
        'get_callback' => 'get_dynamic_data'
    ]
);


function get_dynamic_data() {

    $pages = [
        '741' => 'home',
    ];

    $page_name = $pages[get_the_ID()];

    if( !$page_name ) return [];

    require_once( __DIR__ . "/views/{$page_name}.php" );

    return get_view_dynamic_data();

}
