<?php

function create_fund_posttype() {

    register_post_type('fund',
        array(
            'labels' => array(
                'name' => __('صندوق ها'),
                'singular_name' => __('صندوق'),
                'add_new_item' => __('افزودن صندوق جدید'),
                'add_new' => __('افزودن صندوق'),
            ),
            'public' => true,
            'has_archive' => false,
            'rewrite' => array('slug' => 'fund'),
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'exclude_from_search' => false,
            'menu_icon' => 'dashicons-archive',
        )
    );
}
add_action('init', 'create_fund_posttype');
