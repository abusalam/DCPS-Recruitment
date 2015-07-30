<?php
/**
 * @author 
 * @copyright 2010
 */
function connect()
{
	$con = mysql_connect("localhost","","");
	if (!$con)
	{
  		die('Could not connect DataBase: ' . mysql_error());
	}
	return $con;
}
function executeSqlQuery($sqlstr)
{
		$con = connect();
		$db_selected = mysql_select_db("health",$con);
		$row = mysql_query($sqlstr);
		disconnect($con);
		return $row;
}	
function disconnect($con)      
{
	if ($con)
	{
		mysql_close($con);	
	}
}
function Remove_SQLi($str) 
{ 
   $con = connect();  
   if(get_magic_quotes_gpc()) 
   { 
       $retStr = mysql_real_escape_string(stripslashes($str)); 
   } 
   else  
   {
       $retStr = mysql_real_escape_string($str); 
   }
   disconnect($con);
   return $retStr;
}
?>
