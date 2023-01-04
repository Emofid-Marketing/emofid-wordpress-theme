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
                "startDate" => formatDate($fund["startDate"]),
                "fund_types" => [
                    $fund["staticInfo"]["fundType"],
                ],
                "last_update_date" => jdate("j F Y", strtotime($fund["lastNavDate"])),
                "subscription_price" => $fund["subscriptionNav"],
                "cancel_price" => $fund["cancelNav"],
                "aum" => $fund["aum"],
                "investors_number" => $fund["currentInvestorsNumber"],
                "returns" => [
                    "return1M" => round($fund["return1M"], 2),
                    "return3M" => round($fund["return3M"], 2),
                    "return6M" => round($fund["return6M"], 2),
                    "return1Y" => round($fund["return1Y"], 2),
                    "return3Y" => round($fund["return3Y"], 2),
                    "return5Y" => round($fund["return5Y"], 2)
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


function formatDate( $gregorianDate ) {
    $dateArray = explode(
        "-",
        explode(
            "T",
            $gregorianDate
        )[0]
    );

    return gregorian_to_jalali(
        $dateArray[0],
        $dateArray[1],
        $dateArray[2]
    )[0];
}
