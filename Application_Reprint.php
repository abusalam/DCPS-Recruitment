<?php
include("connection.php");
include('settings.inc.php');
function DisplayDefaultForm()
{
    ?>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Welcome to DCPS Online Portal-Application Reprint</title>
        <link href="CSS/inb.css" rel="stylesheet" type="text/css">
    </head>
    <body topmargin="0" oncontextmenu="return false;" leftmargin="0" rightmargin="0" marginheight="0" marginwidth="0">
    <div class="tdbg" style="width: 600px;">
        <table border="0" cellpadding="0" cellspacing="0">

            <tbody>
            <tr>
                <td>
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
            <tr>
                <td class="belowheader" height="2"></td>
            </tr>
            <tr>
                <td height="300" valign="top">
                    <div class="header">Print Application Form</div>
                    <div style="float: right;color: #ff0000;margin-right: 50px;">
                        <strong>* Mandatory Field</strong>
                    </div>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                        <tr>
                            <td>
                                <form id="login_frm" name="login_frm" method="POST" enctype="multipart/form-data"
                                      action=<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>>
                                    <table align="center" border="0" cellpadding="2" cellspacing="2">
                                        <tbody>
                                        <tr>
                                            <td class="tablecontent1" align="left" valign="top" width="140">Registration
                                                No <span class="alert">*</span>:
                                            </td>
                                            <td align="left" valign="top" class="tablecontent1">
                                                <input class="textbox2" name="appid" id="appid" value=""></td>
                                        </tr>
                                        <tr>
                                            <td class="tablecontent1" align="left" valign="top" width="140">Pin
                                                <span class="alert">*</span>:
                                            </td>
                                            <td align="left" valign="top" class="tablecontent1">
                                                <input name="pin" class="textbox2" id="pin" size="4" maxlength="4"
                                                       type="password" value=""> &nbsp;&nbsp;&nbsp;&nbsp;
                                                <font color="#006699" size="1" face="Arial, Helvetica, sans-serif"><a
                                                        href="forgetpin.php" target="_blank"> Forgot your Pin?
                                                    </a></font></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" class="tablecontent2" valign="top">
                                                <table align="center" border="0" cellpadding="2" cellspacing="2"
                                                       width="144">
                                                    <tr>
                                                        <td width="84" align="center"><input value="Continue"
                                                                                             name="Submit"
                                                                                             class="button" id="subbtn"
                                                                                             type="submit"></td>

                                                        <td width="46" align="center"><input
                                                                onClick="javascript:window.close();" value="Close"
                                                                name="Submit3" class="button" type="button">
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" class="tablecontent1" align="center" valign="top"><a
                                                    href="note.php" target="_blank" class="linkfooter"
                                                    onClick="javascript:mypopup('note1.php','800','700')">Steps
                                                    to enable JavaScript in Internet Explorer versions
                                                    (6.0,7.0,8.0),Mozilla Firefox3.0, Google Chrome2.0</a></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" class="tablecontent1" align="center" valign="top"><font
                                                    color="#0099CC">Design and
                                                    Develped by National Informatics Centre and Content
                                                    Provided By DCPS Paschim Medinipur West Bengal </font></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </form>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
            </tr>
            </tbody>
        </table>
    </div>
    </body>
    </html>
<?php
}

function check_pin_appid($pin, $appid)
{
    $retval = false;
    $sqlstr = "select * from applicant where appid = '" . Remove_SQLi($appid) . "' and pin = '" . Remove_SQLi($pin) . "'";
    $rec = executeSqlQuery($sqlstr);
    if ($row = mysql_fetch_array($rec)) {
        $retval = true;
    } else {
        $retval = false;
    }
    return $retval;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    switch ($_POST["Submit"]) {
        case "Continue":
            $appid = trim($_POST['appid']);
            $pin = trim($_POST['pin']);
            if ($appid == "" || $appid == null) {
                DisplayDefaultForm();
                echo "<script type=\"text/javascript\">alert(\"Registration No. is Not Set. Please Specify\")</script>";
                return;
            } else if ($pin == "" || $pin == null) {
                DisplayDefaultForm();
                echo "<script type=\"text/javascript\">alert(\"Pin No is Not Set. Please Specify \")</script>";
                return;
            } else if (check_pin_appid($pin, $appid) == false) {
                DisplayDefaultForm();
                echo "<script type=\"text/javascript\">alert(\"Registration No or Pin No is Wrong. Please Specify Correct one\")</script>";
                return;
            } else {
                $folder = "photo/";
                $trans = array("/" => "_");
                $filename2 = strtr($appid, $trans);
                $filename2 = $filename2 . "_" . "2" . ".jpg";
                if (file_exists("photo/" . $filename2)) {
                    $pin = md5(md5($pin) + 111111);
                    header("Location: print.php?appid=$appid&pin=$pin");
                    exit();

                } else {
                    DisplayDefaultForm();
                    echo "<script type=\"text/javascript\">alert(\"Please Upload image and signature\")</script>";
                }

            }
            break;
        default:
            DisplayDefaultForm();

            break;
    }
} else {
    DisplayDefaultForm();
}
?>
<!-- //dbsec applied -->