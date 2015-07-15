<?php

include("connection.php"); 
if(isset($_GET["appid"]) && isset($_GET["pin"]) ) 
{
$appid = trim($_GET["appid"]);
$pin = trim($_GET["pin"]);
$post = trim($_GET["post"]);
$a = "SELECT PostName from post where PostCode='".$post."'";
$b = executeSqlQuery($a);
$c = mysql_fetch_array ($b);
$sqlstr = "SELECT * from applicant where appid = '".$appid."' and md5(md5(`pin`)+111111)='". $pin ."'" ;
$result = executeSqlQuery($sqlstr);
if ( $row = mysql_fetch_array ($result) ) {
	

} else {
	header("Location: Application_entry.php");
	exit();
}
} 
?>
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Submit Successfully</title>
<link href="CSS/inb.css" rel="stylesheet" type="text/css">
</head>
<body  topmargin="0" oncontextmenu="return false;" leftmargin="0" rightmargin="0" marginheight="0" marginwidth="0">
<table align="center" border="0" cellpadding="0" cellspacing="0" width="780">
  <tr>
    <td class="tdbg"><table border="0" cellpadding="0" cellspacing="0" width="780">

      <tr>
        <td>
		<link href="reprint_files/inb.css" rel="stylesheet" type="text/css">
<style type="text/css">
<!--
.style1 {color: #bf042b}
-->
</style>
<table border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr> 
                      <td align="left"> 
                        <div align="center"><img src="image/banner.gif" width="680" height="80"> 
                        </div></td>
                    </tr></table>
	
		</td>
        </tr>
     <tr>
        <td class="belowheader" height="10"></td>
        </tr>
        <tr>
          <td height="300" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" width="445">
            <tbody><tr>
              <td colspan="4" class="alert" align="center" height="15" valign="middle"></td>
            </tr>
            <tr>
              <td bgcolor="#083B8C" width="9"><img src="image/h_curve.gif" height="27" width="9"></td>        <td class="header" bgcolor="#e9fafe" width="165"> Acknowledgement 
                        Receipt</td>
              <td width="33"><img src="image/h_cut.gif" height="27" width="28"></td>
              <td class="header" align="right" width="238"></td>
            </tr>
            <tr>
              <td colspan="4" bgcolor="#083B8C" height="1"></td>
            </tr>
          
          </tbody></table>
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tbody><tr>
                <td><form id="login_frm" name="login_frm" method="post" action="print.php">
                          <table align="center" border="0" cellpadding="2" cellspacing="2" width="445">
                            <tbody>
                              <tr> 
                                <td align="left" valign="top" class="tablecontent1"><div align="center">
                                  <p><font color="#000066" size="2" face="Arial, Helvetica, sans-serif"><strong>Thank 
                                    you for registration for the post of</strong></font></p>
                                  <p><?php echo $c["PostName"]; ?>&nbsp;                                </p>
                                </div>
                                  <p align="center"><font color="#000066">Keep 
                                    your Registration Number for future purpose.</font></p>
                                  <p align="center"><font color="#000066">Your 
                                    Registration Number is:</font> <?php echo $appid; ?></p>
                                  
                              <p align="center"><a href="Add_image.php">Upload Photo & Signature</a>                              </p>
                              <p align="center">&nbsp;</p>
                              <p align="center"><br />
                              </p></td>
                              </tr>
                              <tr> 
                                <td align="left" valign="top" class="tablecontent1"><div align="center"><font color="#6600FF" size="2" face="Arial, Helvetica, sans-serif">If 
                                    you are having trouble accessing or need assistance,please 
                                    e-mail us on dcps.purbamedinipur@gmail.com 
                                and for information and details visit http://purbamedinipur.gov.in/</font></div></td>
                              </tr>
                              <tr> 
                                <td class="tablecontent1" align="center" valign="top"><a class="linkfooter" href="#" onClick="javascript:mypopup('note1.php','800','700')">Steps 
                                  to enable JavaScript in Internet Explorer versions 
                                  (6.0,7.0,8.0),Mozilla Firefox3.0, Google Chrome2.0</a></td>
                              </tr>
                            </tbody>
                          </table>
                                </form>								
                </td>
              </tr>
           </table></td>
        </tr>
       
      
    </tbody></table></td>
  </tr>
</table>

</body>
</html>
