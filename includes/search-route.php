<?php

add_action('rest_api_init', 'universityRegisterSearch'); 

function univeristyRegisterSearch() {
    register_rest_route('university/v1', 'search', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'universitySearchResults'
    ));
}

function universitySearchResults() {
    return 'return value';
}

?>