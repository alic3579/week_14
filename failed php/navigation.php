<?php
function active($current_page){
  $url_array =  explode('/', $_SERVER['REQUEST_URI']) ;
  $url = end($url_array);  
  if($current_page == $url){
      echo 'active';
  } 
}
?>

		<nav>
			<ul>
		  		<li><a class="<?php active('chap1.php');?>" href="chap1.php">Chapter 1</a></li>
				<li><a class="<?php active('chap2.php');?>" href="chap2.php">Chapter 2</a></li>
				<li><a class="<?php active('chap3.php');?>" href="chap3.php">Chapter 3</a></li>
				<li><a class="<?php active('chap4.php');?>" href="chap4.php">Chapter 4</a></li>
				<li><a class="<?php active('chap5.php');?>" href="chap5.php">Chapter 5</a></li>
				<li><a class="<?php active('chap6.php');?>" href="chap6.php">Chapter 6</a></li>
				<li><a class="<?php active('chap7.php');?>" href="chap7.php">Chapter 7</a></li>
				<li><a class="<?php active('chap8.php');?>" href="chap8.php">Chapter 8</a></li>
				
		  	</ul>
		</nav>
