<?php

/**
 * @author 
 * @copyright 2010
 */
include("connection.php"); 
if(isset($_GET['appid'])) 
{
$sqlstr = "select signname,signtype,signsize,signcontent from uploadfile where appid ='" .Remove_SQLi(htmlspecialchars(trim($_GET['appid'])))."'";
$application = executeSqlQuery($sqlstr);
$row = mysql_fetch_array($application); 
header("Content-length: ".$row["signsize"]);
header("Content-type: ".$row["signtype"]);
header("Content-Disposition: attachment; filename=".$row["signname"]);
echo $row["signcontent"];
exit;
} else {
	echo "<script type=\"text/javascript\">alert(\"ERROR:: Registration No. is not entered properly. Pls Check\")</script>";
}
?>