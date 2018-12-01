<?php
  /**
   * @package Myplugin
   */
  /*
  Plugin Name: My Plugin
  Plugin URI: https://myproject.com/
  Description: this is my site's support plugin
  Version: 4.0.2
  Author: Me
  License: GPLv2 or later
  */

  include("block1/block1.php");


  function dbg($obj){
    print("<pre>".print_r($obj, TRUE)."</pre>");
  }

