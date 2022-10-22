<?php

function validateMobileNumber( $number ) {

    $mobileRegex = '~^(00989|\+?989|09|9)\d{9}$~';
    preg_match($mobileRegex, $number, $matches);
    return !empty($matches);
}
