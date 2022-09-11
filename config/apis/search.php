<?php

register_rest_field(
    'search-result',
    'post_data',
    [
        'get_callback' => 'get_search_data'
    ]
);

function get_search_data( $data ) {
    return [
        'excerpt' => wp_trim_excerpt('', $data['id']),
    ];
}
