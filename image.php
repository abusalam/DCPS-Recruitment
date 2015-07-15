<?php

/**
 * @author 
 * @copyright 2010
 */
include("connection.php"); 
if(isset($_GET['appid'])) 
{
$folder = "image/";
						$trans = array("/" => "_");
						$filename= strtr($appid,$trans);
						$filename2 = $filename ."_"."1". ".jpg";
						$filename3 = $filename . "_"."2".".jpg";
						if (file_exists("image/" . $filename2))
						{
							DisplayForm($filename2,$filename3,$appid);
							
						
} else {
	header("Location: Add_image.php");
	exit();
}
} else {
	echo "<script type=\"text/javascript\">alert(\"ERROR:: Registration No. is not entered properly. Pls Check\")</script>";
}
?>