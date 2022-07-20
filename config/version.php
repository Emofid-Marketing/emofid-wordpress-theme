<?php

$major = 0;
$minor = 9;

$version = file_get_contents(
    get_template_directory() . "/version"
);


if (!defined('_EMF_VERSION')) {

    if( wp_get_environment_type() === "development" ) {
        define('_EMF_VERSION', uniqid());
    } else {
        define('_EMF_VERSION', $version);
    }
}

function get_current_version() {
    global $major, $minor;
    $patch = _EMF_VERSION;
    return "{$major}.{$minor}.{$patch}";
}
