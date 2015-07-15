<?php
require_once("library.php");
initpage();
include("./captcha/securimage.php");
include("connection.php");
$action=CheckSess();
$LogC=0;
if (!empty($_POST['user']))
{
		$Qry="select count(*) as FailedCount from audit_trail where LogID >(SELECT max(LogID) as MaxLogID FROM audit_trail "
			."where UserID='".$_POST['user']."' and Action <>'Login: Failed') AND UserID='".$_POST['user']."' AND AccessTime>DATE_ADD(NOW(),INTERVAL -10 MINUTE)";
		$result = executeSqlQuery($Qry);
		if ($row = mysql_fetch_array($result))
		{
			$LogC = $row['FailedCount'];
		}
}		
else //Browsing
{
		$_SESSION['Token']=md5($_SERVER['REMOTE_ADDR'].$_SESSION['ID'].time());
		$Qry = "INSERT INTO audit_trail (`SessionID`,`IP`,`Referrer`,`UserAgent`,`UserID`,`URL`,`Action`,`Method`,`URI`) values"		
			."('".session_id()."','".$_SERVER['REMOTE_ADDR']."','".mysql_real_escape_string($_SERVER['HTTP_REFERER'])."','".$_SERVER['HTTP_USER_AGENT']
			."','".$_SESSION['userid']."','".mysql_real_escape_string($_SERVER['PHP_SELF'])."','Login: Anonymous Browsing','"
			.mysql_real_escape_string($_SERVER['REQUEST_METHOD'])."','".mysql_real_escape_string($_SERVER['REQUEST_URI'].$_SERVER['QUERY_STRING'])."')";
		executeSqlQuery($Qry);
}
if($LogC>5)
{
		$action="NoMoreTry";
}
else if(isset($_POST['LoginToken']) && ($_POST['LoginToken']!=$_SESSION['Token']))
{
		$action="NoAccess";
}
else if(!empty($_POST['user']))
{
$img = new Securimage();
$valid = $img->check($_POST['code']);
$sqlstr =  "SELECT * FROM user where userid ='".Remove_SQLi(htmlspecialchars($_POST['user']))."' AND md5(concat(md5(`pass`),md5('".$_POST['LoginToken']."')))='".Remove_SQLi(htmlspecialchars($_POST['passWD'])) ."'";
$result = executeSqlQuery($sqlstr);
$row = mysql_fetch_array($result);
if (($row != NULL) && ($valid) )
{
	session_regenerate_id();
	$_SESSION['userid'] = $row['userid'];
	$_SESSION['ID']=session_id();
	$action="JustLoggedIn";
	$Qry = "INSERT INTO audit_trail (`SessionID`,`IP`,`Referrer`,`UserAgent`,`UserID`,`URL`,`Action`,`Method`,`URI`) values"		
				."('".$_SESSION['ID']."','".$_SERVER['REMOTE_ADDR']."','".mysql_real_escape_string($_SERVER['HTTP_REFERER'])."','".$_SERVER['HTTP_USER_AGENT']
				."','".$_SESSION['userid']."','".mysql_real_escape_string($_SERVER['PHP_SELF'])."','Login: Success','"
				.mysql_real_escape_string($_SERVER['REQUEST_METHOD'])."','".mysql_real_escape_string($_SERVER['REQUEST_URI'].$_SERVER['QUERY_STRING'])."')";
	executeSqlQuery($Qry);
}
else
{
	$action="NoAccess";
	$Qry = "INSERT INTO audit_trail (`SessionID`,`IP`,`Referrer`,`UserAgent`,`UserID`,`URL`,`Action`,`Method`,`URI`) values"		
				."('".$_SESSION['ID']."','".$_SERVER['REMOTE_ADDR']."','".mysql_real_escape_string($_SERVER['HTTP_REFERER'])."','".$_SERVER['HTTP_USER_AGENT']
				."','".$_POST['user']."','".mysql_real_escape_string($_SERVER['PHP_SELF'])."','Login: Failed','"
				.mysql_real_escape_string($_SERVER['REQUEST_METHOD'])."','".mysql_real_escape_string($_SERVER['REQUEST_URI'].$_SERVER['QUERY_STRING'])."')";
	executeSqlQuery($Qry);
}
}
?>
<html><head><title></title>
</head>
<body>
<?php
switch($action)
{
	case "LogOut":
		echo "<h2 align=\"center\">Thank You! You Have Successfully Logged Out!</h2>";
		echo "<br><h2 align=\"center\"><a href=\"index.php\">Login</a></h2>";
		break;
	case "JustLoggedIn":
		echo "<h2 align=\"center\">Welcome You Have Successfully Logged In!</h2>";
		echo "<br><h2 align=\"center\"><a href=\"actionmodule.php\">Enter</a></h2>";
		break;
	case "Valid":
		echo "<h2 align=\"center\">You are already Logged In!</h2>";
		echo "<br><h2 align=\"center\"><a href=\"actionmodule.php\">Enter</a></h2>";
		break;
	case "NoAccess":
		echo "<h2 align=\"center\">Sorry! Access Denied!</h2>";
		if($LogC>0){
			echo "<h3 align=\"center\">You have ".(5-$LogC)." attempts remaining!</h3>"; 
		}
		echo "<br><h2 align=\"center\"><a href=\"index.php\">Login</a></h2>";
		break;
	case "NoMoreTry":
		echo "<h2 align=\"center\">Your account has been locked! It will be automatically unlocked after 10 Minutes.</h2>";
		echo "<br><h2 align=\"center\"><a href=\"index.php\">Login</a></h2>";
		break;
	case "TimeOut":
		echo "<h2 align=\"center\">Your session has been timed out!</h2>";
		echo "<br><h2 align=\"center\"><a href=\"index.php\">Login</a></h2>";
		break;
    case "Stolen":
    case "Invalid Sequence":
    case "Invalid Request":
		echo "<h2 align=\"center\">This session has been compromised!</h2>";
		echo "<br><h2 align=\"center\"><a href=\"index.php\">Login</a></h2>";
		break;
	default:
		echo "<h2 align=\"center\">Grievance Redressal System For Paschim Medinipur</h2>";
		echo "<br><h2 align=\"center\"><a href=\"index.php\">Login</a></h2>";
		break;
}
?> 
</body>
</html>