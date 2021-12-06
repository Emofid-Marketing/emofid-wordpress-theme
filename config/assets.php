<?php

function _emofid_scripts() {

    /* styles */
    wp_enqueue_style('_emofid-styles', get_template_directory_uri() . '/assets/dist/css/app.min.css', array(), _EMF_VERSION);

    /* scripts */
    wp_enqueue_script('_emofid-scripts', get_template_directory_uri() . '/assets/dist/js/app.min.js', array(), _EMF_VERSION, true);

}

add_action('wp_enqueue_scripts', '_emofid_scripts');
