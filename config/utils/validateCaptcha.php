<?php

function validateCaptcha( $token ) {
    $data = array(
        'secret' => "0x0000000000000000000000000000000000000000",
        'response' => $token
    );

    $verify = curl_init();
    curl_setopt($verify, CURLOPT_URL, "https://hcaptcha.com/siteverify");
    curl_setopt($verify, CURLOPT_POST, true);
    curl_setopt($verify, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($verify, CURLOPT_RETURNTRANSFER, true);
    $response = json_decode(curl_exec($verify));

    return $response->success;
}
