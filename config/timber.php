<?php

$timber = new Timber\Timber();
Timber::$dirname = array( 'templates', 'pages' );


// Add global data to Timber context
add_filter( 'timber_context', 'global_timber_context'  );

function global_timber_context( $context ) {
    $context['learning_current_week_events'] = get_option('_emofid_learning_current_week_events');
    return $context;
}
