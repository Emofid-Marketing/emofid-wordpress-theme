<?php

class CronJob {

    function __construct( $args ) {

        // initial values
        $this->id = $args["id"];
        $this->interval = $args["interval"];

        // call methods
        $diff = $this->calc_diff(
            time(),
            get_option("_emofid_crons_last_updates")[$this->id]
        );

        if( $diff >= $this->interval ) $this->run_handler( $args["handler"] );
    }



    function set_last_update() {

        $oldOptions = get_option('_emofid_crons_last_updates');
        $oldOptions[$this->id] = time();

        update_option(
            '_emofid_crons_last_updates',
            $oldOptions
        );
    }


    function calc_diff( $time1, $time2 ) {
        $diff = $time1 - $time2;
        return $diff;
    }


    function run_handler( $handler ) {
        $handler();
        $this->set_last_update();
    }

}
