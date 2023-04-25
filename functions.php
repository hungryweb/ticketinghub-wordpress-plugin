<?php
/**
* Plugin Name: TicketingHub
* Plugin URI: https://www.ticketinghub.com/
* Description: Widget Integration for TicketingHub
* Version: 1.0
* Author: Hungryweb
* Author URI: https://www.hungryweb.ie/
**/

function ticketinghub_plugin_enqueue_script() {
    wp_enqueue_script(
        'widget-block',
        plugin_dir_url(__FILE__) . 'widget-block.js',
        array('wp-blocks', 'wp-element'),
        filemtime(plugin_dir_path(__FILE__) . 'widget-block.js')
    );
}
add_action('enqueue_block_editor_assets', 'ticketinghub_plugin_enqueue_script');