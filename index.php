<?php
include('settings.inc.php');
?>
<script>
    function mypopup(url, width, height) {
        width = window.screen.width;
        height = window.screen.height;
        mywindow = window.open(url, "mywindow");
        mywindow.focus();
    }
</script>
<html>
<head>
    <title>Welcome to <?php echo OFFICE; ?> Online Recruitment Portal</title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <link href="CSS/inb.css" rel="stylesheet" type="text/css">
</head>

<body topmargin="0" leftmargin="0" rightmargin="0" oncontextmenu="return false;" marginheight="0" marginwidth="0">
<div class="tdbg" style="width: 700px;">
    <table border="0" cellpadding="0" cellspacing="0">
        <tbody>
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
        <tr>
            <td height="300" valign="top">
                <div class="header">
                    <?php echo APP_TITLE; ?>
                </div>
                <table align="center" border="0" cellpadding="2" cellspacing="2" width="100%">
                    <tbody>
                    <tr>
                        <td colspan="2" class="tablecontent1" align="center" valign="middle">
                            <a href="https://www.paschimmedinipur.gov.in/apps/publish/get_file.php?ID=5325"
                               class="disability">
                                Employment Notice</a>
                        </td>
                    </tr>
                    <tr>
                        <td width="25" align="center" valign="middle" class="tablecontent1">
                            <img
                                src="image/bullet1.gif" height="11" width="7"></td>
                        <td class="tablecontent1" align="left" valign="middle">
                            <a class="disability" href="#"
                               onClick="mypopup('Application_entry.php','600','700')">Apply
                                Online</a>
                        </td>
                    </tr>
                    <tr>
                        <td class="tablecontent1" align="center" valign="middle" width="25"><img
                                src="image/bullet1.gif" height="11" width="7"></td>
                        <td class="tablecontent1" align="left" valign="middle">
                            <a class="disability" href="#"
                               onClick="mypopup('Add_image.php','600','700')">Add
                                Photo & Signature </a></td>
                    </tr>
                    <tr>
                        <td class="tablecontent1" align="center" valign="middle" width="25"><img
                                src="image/bullet1.gif" height="11" width="7"></td>
                        <td class="tablecontent1" align="left" valign="middle">
                            <a class="disability" href="#"
                               onClick="mypopup('Application_Reprint.php','600','700')">Application
                                Reprint </a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center" class="tablecontent1 personaldetails">
                            Last Date of online submission of Application :
                            <?php echo LAST_DATE_APP; ?>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center" class="tablecontent1 personaldetails">
                            Last Date of submission of Hard Copy of Application :
                            <?php echo HARD_COPY_LAST_DATE; ?>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="tablecontent1" align="center" valign="middle">
                            <a class="linkfooter" href=""
                               onClick="mypopup('note.php','600','700')">Steps
                                to enable JavaScript in Internet Explorer versions (6.0,7.0,8.0),Mozilla
                                Firefox3.0, Google Chrome2.0</a></td>
                    </tr>
                    <tr>
                        <td colspan="2" valign="middle" bgcolor="#D6D6D6" class="tablecontent1">
                                    <span
                                        class="redtext">Disclaimer</span>:
                            On-Line Application validation rules are designed based on the
                            Advertisement requirement. Candidates are advised to read
                            the advertisement carefully . Application submitted through
                            On-Line form does not imply that candidate has fulfilled
                            all the criteria given in the advertisement and Application
                            is subject to subsequent scrutiny and the application
                            can be rejected if found to be ineligible at any point
                            of time.
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="tablecontent1" align="center" valign="middle">
                            <p><span class="link1"><font color="#00a2cf">Designed and
                                        Developed by National Informatics Centre and Content
                                        Provided By <?php echo OFFICE . ', ' . DISTRICT; ?>, West Bengal
                                        <br>
                                        The application is compatible with Internet Explorer
                                        versions (6.0,7.0,8.0),Mozilla Firefox3.0, Google
                                        Chrome2.0</font></span><br>
                            </p></td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td height="5" valign="top"></td>
        </tr>
        <tr>
            <td>
                <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                    <tr>
                        <td class="#FFFFFF" width="390">&nbsp;</td>
                        <td class="#FFFFFF" width="416">&nbsp;</td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>
