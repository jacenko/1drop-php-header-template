<?php 
  session_start();
  if(empty($_GET["page"])) {
    $page = 'home';
  } else {
    $page = $_GET["page"];
  }
?><!DOCTYPE html>
<html>
  <head>
    <title>1Drop | <?php echo strtoupper($page)?></title>
    <link rel="icon" type="image/png" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="./css/main.css">
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script>var currPage = "<?php echo $page?>";</script>
  </head>
  
  <body>
    <div class="page">
      <!--Header-->
      <?php include_once("inc/header-top.php"); ?>
      <?php include_once("inc/header-bottom.php"); ?>
      <!--END Header-->

      <!--Content-->
      <div class="content">
        <?php include_once("inc/$page.php"); ?>
      </div>
      <!--END Content-->

      <!--Footer-->
      <?php include_once("inc/footer-top.php"); ?>
      <?php include_once("inc/footer-bottom.php"); ?>
      <!--END Footer-->
    </div>

    <script type="text/javascript" src="js/main.js"></script>
  </body>
<html>