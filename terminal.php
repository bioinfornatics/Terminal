<?php
/**
 * Plugin Name: Terminal
 * Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
 * Description: A Terminal generator in pure css.
 * Version: 1.0
 * Author: bioinfornatics
 * Author URI: http://URI_Of_The_Plugin_Author
 * License: GPLv3+
 */

defined('ABSPATH') or die("No script kiddies please!");
if ( ! class_exists( '_WP_Editors' ) )
    require( ABSPATH . WPINC . '/class-wp-editor.php' );
if (is_admin()) require_once(ABSPATH . 'wp-includes/pluggable.php');

add_filter( 'tiny_mce_before_init',     'my_format' );
add_action( 'after_setup_theme',        'terminal_css' );
add_action( 'admin_head',               'generate_terminal_button' );
add_action( 'admin_enqueue_scripts',    'terminal_css');

function my_format( $in ) {
    $in['verify_html']  = false;
    return $in;
}

function generate_terminal_button() {
    global $typenow;
    // check user permissions
    if ( !current_user_can('edit_posts') && !current_user_can('edit_pages') ) {
    return;
    }
    // verify the post type
    if( ! in_array( $typenow, array( 'post', 'page' ) ) )
        return;
    // check if WYSIWYG is enabled
    if ( get_user_option('rich_editing') == 'true') {
        add_filter('mce_external_plugins', 'add_terminal_plugin');
        add_filter('mce_buttons', 'register_terminal_button');
    }
}

function add_terminal_plugin($plugin_array) {
    $plugin_array['terminal_button'] = plugins_url( '/terminal-button.js', __FILE__ ); // CHANGE THE BUTTON SCRIPT HERE
    return $plugin_array;
}

function register_terminal_button($buttons) {
   array_push($buttons, 'terminal_button');
   return $buttons;
}

function terminal_css() {
    wp_enqueue_style('terminal', plugins_url('/terminal.css', __FILE__));
    add_editor_style( plugins_url('/terminal.css', __FILE__) );
}
