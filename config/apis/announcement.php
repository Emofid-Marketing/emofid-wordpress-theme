<?php

register_rest_field(
    'announcement',
    'post_data',
    [
        'get_callback' => 'get_announcement_data'
    ]
);

function get_announcement_data() {
    return [
        'post_views' => pvc_get_post_views(get_the_ID()),
        'shamsi_date' => get_the_date(),
        'thumbnail' => get_the_post_thumbnail_url()
    ];
}
