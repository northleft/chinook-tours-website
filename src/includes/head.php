<?php
$lang = 'en';
if (isset($_GET['de'])){
  $lang = 'de';
}
?>

<!DOCTYPE html>
<html lang="en-US">
<head>
  <title><?php echo $title; ?></title>
  <meta property="og:title" content="<?php echo $title; ?>">
  <meta property="og:url" content="http://chinooktoursak.com">
  <meta property="og:image" content="">
  <meta property="og:site_name" content="Chinook Tours Alaska">
  <meta name="description" content="">

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="format-detection" content="telephone=no">
  
  <!--REMOVE WHEN LIVE!!!-->
  <meta name="robots" content="noindex, nofollow">

  <!--<link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">-->
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700" rel="stylesheet">

	<script src="https://cdn.jsdelivr.net/npm/greensock@1.20.2/dist/TweenLite.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/greensock@1.20.2/dist/plugins/CSSPlugin.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/greensock@1.20.2/dist/plugins/ScrollToPlugin.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/iscroll@5.2.0/build/iscroll-probe.min.js"></script>

	<script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
  
	<script src="<?php echo $path; ?>assets/smother-scroll.js"></script>
	<script src="<?php echo $path; ?>assets/laxxed.js"></script>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.css">
  <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.js"></script>

	<link rel="stylesheet" href="<?php echo $path; ?>assets/global.css">
	<script src="<?php echo $path; ?>assets/global.js"></script>
</head>
<body id="<?php echo $body_id; ?>" data-language="">
  <main><div>