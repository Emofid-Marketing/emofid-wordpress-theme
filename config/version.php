<?php

$version = '1.0.0';


if (!defined('_EMF_VERSION')) {

    if( wp_get_environment_type() === "development" ) {
        define('_EMF_VERSION', uniqid());
    } else {
        define('_EMF_VERSION', $version);
    }
}
