<?php

function validateCaptcha( $token ) {
    $data = array(
        'secret' => "49r043yqftliw5dub5p7",
        'response' => $token
    );

    $verify = curl_init();
    curl_setopt($verify, CURLOPT_URL, "https://arcaptcha.co/3/siteverify");
    curl_setopt($verify, CURLOPT_POST, true);
    curl_setopt($verify, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($verify, CURLOPT_RETURNTRANSFER, true);
    $response = json_decode(curl_exec($verify));

    return $response->success;
}
