<?php

function emofid_custom_menus() {
    register_nav_menus(
        array(
            'header_menu' => __( 'Header Menu' ),
        )
    );
}

add_action( 'init', 'emofid_custom_menus' );



add_filter( 'timber/context', function( $context ) {
    $context['header_menu'] = new Timber\Menu('header_menu');
 
    return $context;
});