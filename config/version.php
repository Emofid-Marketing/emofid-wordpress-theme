<?php

$version = '0.0.2';


if (!defined('_EMF_VERSION')) {

    if( wp_get_environment_type() === "development" ) {
        define('_EMF_VERSION', uniqid());
    } else {
        define('_EMF_VERSION', $version);
    }
}
