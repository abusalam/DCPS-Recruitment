<?php
include("connection.php");
include('settings.inc.php');
function DisplayDefaultForm()
{
    ?>
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Upload Photograph &amp; Signature - <?php echo OFFICE; ?></title>
        <link href="CSS/inb.css" rel="stylesheet" type="text/css">
    </head>
    <body topmargin="0" oncontextmenu="return false;" leftmargin="0" rightmargin="0" marginheight="0" marginwidth="0">
    <div class="tdbg" style="width: 690px;">
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
                    <div class="header">
                        Add Photograph &amp; Signature
                    </div>
                    <div style="float: right;color: #ff0000;margin-right: 50px;">
                        <strong>* Mandatory Field</strong>
                    </div>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td colspan="4" class="alert" align="center" height="2" valign="middle"></td>
                        </tr>
                        <tr>
                            <td colspan="4" bgcolor="#083B8C" height="1"></td>
                        </tr>
                        <tr>
                            <td colspan="4" align="right">
					 <span style="font-family: Tahoma; font-size: 13px;color:#ff0030">
Allowed Photo Size – 20KB to 50 KB<br>
Allowed Signature Size – 10 KB to 20KB</span></td>
                        </tr>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                        <tr>
                            <td>
                                <form id="login_frm" name="login_frm" method="POST"
                                      enctype="multipart/form-data"
                                      action=<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>>
                                    <table align="center" border="0" cellpadding="2" cellspacing="2"
                                           width="687">
                                        <tbody>
                                        <tr>
                                            <td class="tablecontent1" align="left" valign="top" width="147">
                                                Registration
                                                No <span class="alert">*</span>:
                                            </td>
                                            <td width="408" align="left" valign="top" class="tablecontent1">
                                                <input class="textbox2" name="appid" id="appid" value=""></td>
                                        </tr>
                                        <tr>
                                            <td class="tablecontent1" align="left" valign="top" width="147">Pin
                                                <span class="alert">*</span>:
                                            </td>
                                            <td width="408" align="left" valign="top" class="tablecontent1">
                                                <input name="pin" class="textbox2" id="pin" size="4"
                                                       maxlength="4" type="password" value="">
                                                &nbsp;&nbsp;&nbsp;&nbsp;<a href="forgetpin.php"><font
                                                        color="#006699" size="1"
                                                        face="Arial, Helvetica, sans-serif">Forgot
                                                        your Pin?</font></a></td>
                                        </tr>
                                        <tr>
                                            <td class="tablecontent1" align="left" valign="top" width="147">
                                                Upload
                                                photo<span class="alert">*</span>:
                                            </td>
                                            <td width="408" align="left" valign="top" class="tablecontent1">
                                                <input name="userfile" id="userfile" type="file" size="50"
                                                       value="">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="tablecontent1" align="left" valign="top">Upload
                                                Signature <span class="alert">*</span>:
                                            </td>
                                            <td class="tablecontent1" align="left" valign="top">
                                                <input name="userfile1" id="userfile1" type="file" size="50"
                                                       value="">
                                            </td>
                                        </tr>

                                        <tr>
                                            <td colspan="2" class="tablecontent2" valign="top">
                                                <table align="center" border="0" cellpadding="2" cellspacing="2"
                                                       width="223">

                                                    <tr>
                                                        <td align="center" height="25" width="85"><input
                                                                value="Continue" name="Submit" class="button"
                                                                id="subbtn" type="submit"></td>
                                                        <td align="center" width="121"><input value="Reset"
                                                                                              name="Reset"
                                                                                              class="button"
                                                                                              onClick="document.login_frm.reset();"
                                                                                              type="reset"></td>
                                                        <td align="center" width="94"><input
                                                                onClick="javascript:window.close();"
                                                                value="Close" name="Submit3" class="button"
                                                                type="button">
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
                                            <td colspan="2" class="tablecontent1" align="center" valign="top">
                                                <font color="#0099CC">Design
                                                    and Develped by National Informatics Centre
                                                    and Content Provided By DCPS Purba Medinipur
                                                    West Bengal </font></td>
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

function appid_exists($appid)
{
    $retval = false;
    $sqlstr = "select * from uploadfile where appid = '" . Remove_SQLi($appid) . "'";
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
                echo "<script type=\"text/javascript\">alert(\"Application ID is Not Set. Please Specify\")</script>";
                return;
            } else if ($pin == "" || $pin == null) {
                DisplayDefaultForm();
                echo "<script type=\"text/javascript\">alert(\"Pin No is Not Set. Please Specify \")</script>";
                return;
            } else if (check_pin_appid($pin, $appid) == false) {
                DisplayDefaultForm();
                echo "<script type=\"text/javascript\">alert(\"Application No or Pin No is Wrong. Please Specify \")</script>";
                return;
            } else {
                $fileName1 = "";
                $tmpName1 = "";
                $fileType1 = "";
                $content1 = "";
                //$allowed_extensions = array ('jpg','gif','png','jpeg','JPEG','JPG','PNG','GIF');
                //$allowed_mimes = array ('image/jpg','image/gif','image/jpeg','image/x-png','image/pjpeg');
                $fileSize1 = $_FILES['userfile']['size'];

                if ($fileSize1 > 0) {
                    $tmpName1 = $_FILES['userfile']['tmp_name'];
                    $fileName1 = $_FILES['userfile']['name'];
                    $path = $_FILES['userfile']['name'];
                    $ext1 = pathinfo($path, PATHINFO_EXTENSION);
                    if ($_FILES["userfile"]["error"] > 0) {
                        DisplayDefaultForm();
                        echo "<script type=\"text/javascript\">alert(\"Error during Upload of photo as attachment to the application form \")</script>";
                        return;
                    } else if ($fileSize1 < 20480 || $fileSize1 > 51200) {
                        DisplayDefaultForm();
                        echo "<script type=\"text/javascript\">alert(\"Upload image file size should be 20 KB - 50 KB\")</script>";
                        return;
                    } else if ($ext1 == 'gif' || $ext1 == 'jpg' || $ext1 == 'jpeg' || $ext1 == 'x-png' || $ext1 == 'pjpeg') {
                        $folder = "photo/";
                        $trans = array("/" => "_");
                        $filename = strtr($appid, $trans);
                        $filename = $filename . "_" . "1" . ".jpg";
                        if (file_exists("photo/" . $filename)) {
                            DisplayDefaultForm();
                            echo "<script type=\"text/javascript\">alert(\"Photo already exists\")</script>";
                            return;
                        }

                    } else {
                        DisplayDefaultForm();
                        echo "<script type=\"text/javascript\">alert(\"Upload image file as attachment to the application where file type should be JPG or GIF \")</script>";
                        return;
                    }
                } else if ($fileSize1 == 0) {
                    DisplayDefaultForm();
                    echo "<script type=\"text/javascript\">alert(\"Upload image as attachment to the application form \")</script>";
                    return;
                }
                $fileName2 = "";
                $tmpName2 = "";
                $fileType2 = "";
                $content2 = "";
                $fileSize2 = $_FILES['userfile1']['size'];
                if ($fileSize2 > 0) {
                    $tmpName2 = $_FILES['userfile1']['tmp_name'];
                    $fileName2 = $_FILES['userfile1']['name'];
                    $path = $_FILES['userfile1']['name'];
                    $ext2 = pathinfo($path, PATHINFO_EXTENSION);
                    if ($_FILES["userfile1"]["error"] > 0) {
                        DisplayDefaultForm();
                        echo "<script type=\"text/javascript\">alert(\"Error during Upload of sign as attachment to the application form \")</script>";
                        return;
                    } else if ($fileSize2 < 10240 || $fileSize2 > 20480) {
                        DisplayDefaultForm();
                        echo "<script type=\"text/javascript\">alert(\"Upload signature file size should be 10 KB - 20 KB\")</script>";
                        return;
                    } else if ($ext2 == 'gif' || $ext2 == 'jpg' || $ext2 == 'jpeg' || $ext2 == 'x-png' || $ext2 == 'pjpeg') {
                        $folder = "photo/";
                        $trans = array("/" => "_");
                        $filename2 = strtr($appid, $trans);
                        $filename2 = $filename2 . "_" . "2" . ".jpg";
                        if (file_exists("photo/" . $filename2)) {
                            DisplayDefaultForm();
                            echo "<script type=\"text/javascript\">alert(\"Signature already exists\")</script>";
                            return;
                        } else {
                            move_uploaded_file($_FILES["userfile"]["tmp_name"], "photo/" . $filename);
                            $record = move_uploaded_file($_FILES["userfile1"]["tmp_name"], "photo/" . $filename2);

                            $a = "update applicant SET photo = 'Y' where appid = '" . $appid . "'";
                            executeSqlQuery($a);

                        }
                        if (!get_magic_quotes_gpc()) {
                            $fileName1 = addslashes($fileName1);
                            $fileName2 = addslashes($fileName2);
                        }
                    } else {
                        DisplayDefaultForm();
                        echo "<script type=\"text/javascript\">alert(\"Upload signature as attachment to the application where file type should be JPG or GIF \")</script>";
                        return;
                    }
                } else if ($fileSize2 == 0) {
                    DisplayDefaultForm();
                    echo "<script type=\"text/javascript\">alert(\"Upload sign as attachment to the application form \")</script>";
                    return;
                }
                /*if ( appid_exists($appid) == false ) {
                    $str = "Insert into uploadfile(appid,imagename,imagetype,imagesize,imagecontent,signname,signtype,signsize,signcontent) values ('". $appid ."','". $fileName1 ."','". $fileType1. "',".$fileSize1 .",'". $content1 ."','". $fileName2 ."','". $fileType2. "',".$fileSize2 .",'". $content2 ."')";
                } else {
                    $str = "Update uploadfile set imagename = '" . $fileName1 . "',imagetype = '" . $fileType1 . "',imagesize = " . $fileSize1 . ",imagecontent='". $content1 ."',signname='". $fileName2 . "',signtype='". $fileType2 . "',signsize=".$fileSize2.",signcontent='". $content2 . "' where appid = '$appid'";
                }
                $record = executeSqlQuery($str);*/
                if ($record == False) {
                    DisplayDefaultForm();
                    echo "<script type=\"text/javascript\">alert(\"Problem Occures During Saving Of Image and Signature .Please Try Once Again \")</script>";
                } else {

                    $pin = md5(md5($pin) + 111111);
                    header("Location: print.php?appid=$appid&pin=$pin");
                    echo "<script type=\"text/javascript\">alert(\"Insert Successfull \")</script>";


                }
            }
            break;

        default:
            DisplayDefaultForm();

            if (empty($_FILES)) {
                echo "<script type=\"text/javascript\">alert(\"Upload Image / Signature is not as per size specified for the Application\")</script>";

            }
            break;
    }
} else {
    DisplayDefaultForm();

}
?>
<!-- //dbsec applied -->