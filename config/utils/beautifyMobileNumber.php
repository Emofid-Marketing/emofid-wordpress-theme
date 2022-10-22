<?php

function beautifyMobileNumber( $mobile ) {
    $mobileCount = strlen( $mobile );
    return "0" . substr( $mobile, $mobileCount - 10, 10);
}
