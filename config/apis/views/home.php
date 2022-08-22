<?php

function get_view_dynamic_data() {

    $posts = get_posts([
        'numberposts' => 4
    ]);

    $news = [];
    foreach($posts as $post) {
        $news[] = [
            'id' => $post->ID,
            'title' => $post->post_title,
            'slug' => $post->post_name,
            'thumbnail' => get_the_post_thumbnail_url(
                $post->ID,
                'medium'
            ),
            'date' => $post->post_date,
        ];
    }
        
    return [
        'news' => $news,
        'classes' => get_option('_emofid_learning_current_week_events')
    ];
}
