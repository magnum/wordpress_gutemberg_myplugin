<?php

  function myplugin_block1_init() {
    wp_register_script(
      'myplugin-block1-script',
      plugins_url( 'block1.js', __FILE__ ),
      array(  
        'wp-blocks', 
        'wp-element',
        'wp-editor'
      ) // dependencies needed whn using gutemberg components...
    );

    register_block_type( 'myplugin/block1', array(
      'editor_script' => 'myplugin-block1-script',
    ) );
  }
  add_action( 'init', 'myplugin_block1_init' );