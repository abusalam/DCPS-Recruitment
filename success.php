<?php
include("connection.php");
include('settings.inc.php');
if (isset($_GET["appid"]) && isset($_GET["pin"])) {
    $appid = trim($_GET["appid"]);
    $pin = trim($_GET["pin"]);
    $post = trim($_GET["post"]);
    $a = "SELECT PostName from post where PostCode='" . $post . "'";
    $b = executeSqlQuery($a);
    $c = mysql_fetch_array($b);
    $sqlstr = "SELECT * from applicant where appid = '" . $appid . "' and md5(md5(`pin`)+111111)='" . $pin . "'";
    $result = executeSqlQuery($sqlstr);
    if ($row = mysql_fetch_array($result)) {


    } else {
        header("Location: Application_entry.php");
        exit();
    }
}
?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Submit Successfully - <?php echo OFFICE; ?></title>
    <link href="CSS/inb.css" rel="stylesheet" type="text/css">
</head>
<body topmargin="0" oncontextmenu="return false;" leftmargin="0" rightmargin="0" marginheight="0" marginwidth="0">
<table align="center" border="0" cellpadding="0" cellspacing="0" width="780">
    <tr>
        <td class="tdbg">
            <table border="0" cellpadding="0" cellspacing="0" width="780">

                <tr>
                    <td>
                        <link href="reprint_files/inb.css" rel="stylesheet" type="text/css">
                        <style type="text/css">
                            <!--
                            .style1 {
                                color: #bf042b
                            }

                            -->
                        </style>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="left">
                                    <div align="left">
                                        <img class="logo" src="image/Emblem_of_India.png" width="60">

                                        <div class="site-head">
                                            <h2>Government of West Bengal</h2>
                                            <strong>Office of the District Magistrate</strong><br/>
                                            <span><?php echo ORG; ?></span><br/>
                                            <span><?php echo DISTRICT; ?></span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>
                <tr>
                    <td class="belowheader" height="10"></td>
                </tr>
                <tr>
                    <td valign="top">
                        <div class="header">
                            Acknowledgement Receipt
                        </div>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td>
                                    <form id="login_frm" name="login_frm" method="post" action="print.php">
                                        <table align="center" border="0" cellpadding="2" cellspacing="2">
                                            <tbody>
                                            <tr>
                                                <td align="left" valign="top" class="tablecontent1">
                                                    <div align="center">
                                                        <p><font color="#000066" size="2"
                                                                 face="Arial, Helvetica, sans-serif"><strong>Thank
                                                                    you for registration for the post of</strong></font>
                                                        </p>

                                                        <p><?php echo $c["PostName"]; ?>&nbsp; at different Block under
                                                            Purba Medinipur District </p>
                                                    </div>
                                                    <p align="center"><font color="#000066">Keep
                                                            your Registration Number for future purpose.</font></p>

                                                    <p align="center"><font color="#000066">Your
                                                            Registration Number is:</font> <?php echo $appid; ?></p>

                                                    <p align="center"><a href="Add_image.php">Upload Photo &
                                                            Signature</a></p>

                                                    <p align="center">&nbsp;</p>

                                                    <p align="center"><br/>
                                                    </p></td>
                                            </tr>
                                            <tr>
                                                <td align="left" valign="top" class="tablecontent1">
                                                    <div align="center"><font color="#6600FF" size="2"
                                                                              face="Arial, Helvetica, sans-serif">If
                                                            you are having trouble accessing or need assistance,please
                                                            e-mail us on daf.purbamedinpur@gmail.com
                                                            and for information and details visit
                                                            http://purbamedinipur.gov.in/</font></div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="tablecontent1" align="center" valign="top"><a
                                                        class="linkfooter" href="#"
                                                        onClick="mypopup('note1.php','800','700')">Steps
                                                        to enable JavaScript in Internet Explorer versions
                                                        (8.0,9.0),Mozilla Firefox30.0, Google Chrome44.0</a></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
</table>
</body>
</html>
