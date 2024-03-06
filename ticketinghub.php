<?php
/**
 * Plugin Name: TicketingHub Widget
 * Plugin URI: https://ticketinghub.com/integrations/best-wordpress-booking-plugin
 * Description: Connect Your WordPress Website with TicketingHub for Simple Checkout
 * Version: 1.0.1
 * Requires at least: 5.8
 * Author: TicketingHub
 * Author URI: https://www.ticketinghub.com/
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: ticketinghub
 */

defined( 'ABSPATH' ) || exit;

function ticketinghub_plugin_enqueue_script() {
    wp_enqueue_script(
        'widget-block',
        plugin_dir_url(__FILE__) . 'widget-block.js',
        array('wp-blocks', 'wp-element'),
        filemtime(plugin_dir_path(__FILE__) . 'widget-block.js')
    );
}
add_action('enqueue_block_editor_assets', 'ticketinghub_plugin_enqueue_script');
