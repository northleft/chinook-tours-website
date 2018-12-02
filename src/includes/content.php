<?php

$template = trim(file_get_contents('content.template'));

$raw_content = trim(file_get_contents('content.json'));
$raw_content = preg_replace('/\r|\n/', '', $raw_content);
$raw_content = preg_replace('/\s+/', ' ', $raw_content);

$objarray = json_decode($raw_content);

function writeContent($tag){
  global $objarray;
  global $template;

  foreach($objarray as &$entry) {
    if (strpos($entry->tags, $tag) > -1){
      $str = $template;
      $str = str_replace('{{title}}', $entry->title, $str);
      $str = str_replace('{{content}}', $entry->content, $str);
      echo $str;
    }
  }
}

writeContent('wildlife');


?>