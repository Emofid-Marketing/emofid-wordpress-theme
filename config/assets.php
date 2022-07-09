<?php

function _emofid_scripts() {

    /* styles */
    wp_enqueue_style(
        '_emofid-styles',
        get_template_directory_uri() . '/assets/dist/css/app.min.css',
        array(),
        _EMF_VERSION
    );

    // job page assets
    if(is_page_template('pages/jobs.php')) {
        wp_enqueue_style(
            '_emofid-job-font-styles',
            get_template_directory_uri() . '/assets/externals/jobs/font/IRANSansFa/css/fontiran.css',
            array(),
            _EMF_VERSION
        );

        wp_enqueue_style(
            '_emofid-job-styles',
            get_template_directory_uri() . '/assets/externals/jobs/static/css/main.ebc01cb0.css',
            array(),
            _EMF_VERSION
        );
    }

    /* scripts */
    wp_enqueue_script(
        '_emofid-scripts',
        get_template_directory_uri() . '/assets/dist/js/app.min.js',
        array(),
        _EMF_VERSION,
        true
    );

}

add_action('wp_enqueue_scripts', '_emofid_scripts');



/* deregister styles */
function _emofid_deregister_styles() {
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'dashicons' );
    wp_dequeue_style( 'post-views-counter-frontend' );
}

add_action( 'wp_print_styles', '_emofid_deregister_styles', 100 );
