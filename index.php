<?php
$secret = $_GET;
if(empty($_GET)) {
?>
<!doctype html>
<html lang="en">  
  <head>  
    <meta charset="utf-8">  
    <title>CSS TEST PAGE</title>  
   
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="circle.css">  
    <!--[if lt IE 9]>  
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
  </head>
  <body>
    <div id="content">
      <ul id="menu">
      	<a href="#"><div id="1" class="circle">Menu 1</div></a>
      	<a href=""><div id="test" class="circle">Menu 2</div></a>
      	<a href=""><div id="3" class="circle">Menu 3</div></a>
      	<a href=""><div id="4" class="circle">Menu 4</div></a>
      	<a href=""><div id="5" class="circle">Menu 5</div></a>
        <a href=""><div id="6" class="circle">Menu 6</div></a>
        <a href=""><div id="7" class="circle">Menu 7</div></a>
        <a href="index.php?secret=yes"><div id="8" class="circle">Secret Area =o</div></a>
      </ul>

    <div id="table">
      
       <div class="pics">
          <ul>
          <li><img src="pic1.png"/></li>
        </ul>
      </div>
       <div class="pics">
          <ul>
          <li><img src="pic1.png"/></li>
          </ul>
      
    </div>
  </br></br></br></br></br></br></br></br></br></br></br></br></br></br>
    <div id="table">
      
       <div class="pics">
          <ul>
          <li><img src="pic1.png"/></li>
        </ul>
      </div>
       <div class="pics">
          <ul>
          <li><img src="pic1.png"/></li>
          </ul>
    </div>

  </div>

  </body>
</html>
<?php
} else {
  echo 'welcome to the secret area! <a href="google.com">Mind blown</a>';
}
?>