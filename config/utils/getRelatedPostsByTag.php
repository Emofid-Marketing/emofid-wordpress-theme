<?php

function getRelatedPostsByTag( $number = 3 ) {
    
    $posts = [];

    $categories = get_the_terms( get_the_ID(), 'post_tag' );


    if ($categories) {

        $category_ids = [];
        foreach($categories as $individual_category) {
            $category_ids[] = $individual_category->term_id;
        }

        $args = [
            'post__not_in' => array( get_the_ID() ),
            'posts_per_page' => $number,
            'ignore_sticky_posts' => 1,
            'tax_query' => array(
                array(
                    'taxonomy' => 'post_tag',
                    'field'    => 'id',
                    'terms'    => $category_ids,
                ),
            ),
        ];

        $posts = Timber::get_posts( $args );
    }


    if( count($posts) <= 0 ) return false;

    return $posts;

}
