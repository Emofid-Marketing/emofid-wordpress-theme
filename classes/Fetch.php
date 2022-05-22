<?php

class Fetch {

    function __construct( $options ) {

        $this->method = $options["method"];
        $this->url = $options["url"];
        
    }


    function send() {

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $this->url); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

        $output = curl_exec($ch);
        $output = json_decode($output);

        $httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        return [
            "response" => $output,
            "status" => $httpStatus
        ];

    }




}
