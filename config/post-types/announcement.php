<?php

function create_announcement_posttype() {

    register_post_type('announcement',
        array(
            'labels' => array(
                'name' => __('اطلاعیه ها'),
                'singular_name' => __('اطلاعیه'),
                'add_new_item' => __('افزودن اطلاعیه جدید'),
                'add_new' => __('افزودن اطلاعیه'),
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'announcement'),
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'exclude_from_search' => true,
            'menu_icon' => 'dashicons-megaphone',
        )
    );
}
add_action('init', 'create_announcement_posttype');
