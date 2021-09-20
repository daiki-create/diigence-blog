<?php
/**
 * Luxeritas WordPress Theme - free/libre wordpress platform
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * @copyright Copyright (C) 2015 Thought is free.
 * @link http://thk.kanzae.net/
 * @license http://www.gnu.org/licenses/gpl-2.0.html GPL v2 or later
 * @author LunaNuko
 */

/* 以下、好みに応じて子テーマ用の関数をお書きください。
 ( Below here, please write down your own functions for the child theme. ) */
 
 function insert_thumbnail_element_to_feed(){
    
    if ( !has_post_thumbnail( $post->ID ) ) return;
       
    $thumbnail_ID = get_post_thumbnail_id( $post->ID );
    $thumbnail = wp_get_attachment_image_src( $thumbnail_ID, 'medium' );  // (thumbnail, medium, large, full)
    $output =  '<url>'.$thumbnail[0].'</url>';
    
    echo $output;
   }
   add_action('rss2_item', 'insert_thumbnail_element_to_feed');