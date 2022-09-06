<?php


// function to get announcements
function getLatestAnnouncement() {

    $announcements = [];
    $announcement_query = new WP_Query([
        'post_type' => 'announcement',
        'posts_per_page' => 1
    ]);

    while( $announcement_query->have_posts() ) {
        $announcement_query->the_post();
        $announcements[] = [
            'id' => get_the_ID(),
            'slug' => get_post_field( 'post_name', get_the_ID() ),
            'title' => get_the_title(),
            'thumbnail' => get_the_post_thumbnail_url(),
        ];
    }

    wp_reset_query();

    return $announcements;
}


// function to get latest news
function getLatestNews() {

    $latest_posts = [];
    $latest_query = new WP_Query([
        'post_type' => 'post',
        'posts_per_page' => 6
    ]);

    while( $latest_query->have_posts() ) {
        $latest_query->the_post();

        $latest_posts[] = [
            'id' => get_the_ID(),
            'slug' => get_post_field( 'post_name', get_the_ID() ),
            'title' => get_the_title(),
            'thumbnail' => get_the_post_thumbnail_url(),
            'excerpt' => get_the_excerpt(),
            'date' => get_the_date()
        ];
    }

    wp_reset_query();

    return $latest_posts;
}


// function to get popular tags
function getPopularTags() {
    return get_tags();
}


function get_view_dynamic_data() {
    return [
        'announcements' => getLatestAnnouncement(),
        'latest_news' => getLatestNews(),
        'popular_tags' => getPopularTags(),
        'popular_news' => getLatestNews(),
    ];
}
