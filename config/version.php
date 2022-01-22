<?php

$version = '0.1.3';


if (!defined('_EMF_VERSION')) {

    if( wp_get_environment_type() === "development" ) {
        define('_EMF_VERSION', uniqid());
    } else {
        define('_EMF_VERSION', $version);
    }
}

function get_current_version() {
    return _EMF_VERSION;
}
