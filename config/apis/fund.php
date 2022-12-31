<?php

register_rest_field(
    'fund',
    'fund_data',
    [
        'get_callback' => 'get_fund_data'
    ]
);

function get_fund_data() {

    $fundData = [];
    $fundsReturns = get_option("_emofid_funds_returns");

    foreach ($fundsReturns as $fund ) {
        if( $fund["fundCode"] === get_field("fund_id") ) {
            $fundData = [
                "fundCode" => $fund["fundCode"],
                "fund_types" => [
                    $fund["staticInfo"]["fundType"],
                ],
                "last_update_date" => jdate("j F Y", strtotime($fund["lastNavDate"])),
                "subscription_price" => $fund["subscriptionNav"],
                "cancel_price" => $fund["cancelNav"],
                "aum" => $fund["aum"],
                "investors_number" => $fund["currentInvestorsNumber"],
                "returns" => [
                    "return1M" => $fund["return1M"],
                    "return3M" => $fund["return3M"],
                    "return6M" => $fund["return6M"],
                    "return1Y" => $fund["return1Y"],
                    "return3Y" => $fund["return3Y"],
                    "return5Y" => $fund["return5Y"],
                ]
            ];
        }
    }


    return array_merge([
        "icon" => get_field("fund_icon")["url"],
        "title" => get_the_title(),
        "website" => get_field("fund_website")
    ], $fundData);
}

