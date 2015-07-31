<?php
include("connection.php");
include('settings.inc.php');
if (isset($_GET["appid"]) && isset($_GET["pin"])) {
    $appid = trim($_GET["appid"]);
    $pin = trim($_GET["pin"]);
    $folder = "photo/";
    $trans = array("/" => "_");
    $filename = strtr($appid, $trans);
    $filename2 = $filename . "_" . "1" . ".jpg";
    $filename3 = $filename . "_" . "2" . ".jpg";

    $sqlstr = "SELECT a.appid,p.PostName as post,a.blockapp, sd.subdiv as subapp,a.aname,a.nationality,a.category,a.father,a.dob,a.sex,a.age_yr,a.mobile,a.pre_address,
a.pre_block,a.pre_subdiv,a.pre_dist,a.pre_pin,a.pre_state,a.perm_address,a.perm_block,a.perm_subdiv,
a.perm_dist,a.perm_pin,a.perm_state,a.email,a.pin,a.compknowledge,a.photo from applicant as a,subdivision as sd,post as p where a.appid = '" . $appid . "' and md5(md5(`pin`)+111111)='" . $pin . "' and a.subapp=sd.sdiv_cd and a.post=p.PostCode  ";
    $result = executeSqlQuery($sqlstr);
    if ($row = mysql_fetch_array($result)) {

    } else {
        header("Location: Add_image.php");
        exit();
    }
} else {
    header("Location: Application_Reprint.php");
    exit();
}

?>
<html>
<head>
    <title>Application Print</title>
    <style type="text/css">
        body {
            bgcolor: white;
            color: black;
            font-family: verdana;
            font-size: 12px;
        }

        tr {
            font-family: verdana;
            font-size: 12px;
        }

        td {
            font-family: verdana;
            font-size: 12px;
            font-weight: normal;
        }
    </style>
</head>
<body>
<form id="form">
    <center>
        <table width="99%" height="921" border="1" cellpadding="4" cellspacing="0" style="border-color:Black;">
            <tr>
                <td>
                    <div style="text-align: center;">
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
                <td style="border-bottom: solid 1px black; border-top: solid 1px black" align="left" colspan="3">
                    <div align="center">&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; Email:- <?php echo EMAIL; ?>
                        <input name="Print" onClick="window.print()" type="button" value="Print"/>
                    </div>
                </td>
            </tr>
            <tr>

                <td height="99%" colspan="3" align="left"
                    style="border-bottom: solid 1px black; border-top: solid 1px black">
                    <table width="99%" border="0">
                        <tr>
                            <td colspan="4">
                                <div align="center"><font size="3" face="Arial, Helvetica, sans-serif"><strong>Application
                                            for the Post : <?php echo $row["post"]; ?></strong></font><strong><font
                                            size="3" face="Arial, Helvetica, sans-serif"> &nbsp;on contractual basis
                                            for <?php echo $row["blockapp"]; ?>
                                            under <?php echo $row["subapp"]; ?> Sub-Division</font></strong></div>
                            </td>
                        </tr>
                        <tr>
                            <td width="13%" height="28"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Registration
                                        Number:</strong></font></td>
                            <td width="41%"><font size="1"
                                                  face="Arial, Helvetica, sans-serif"><?php echo $row["appid"]; ?></font>
                            </td>
                            <td colspan="2" rowspan="3">
                                <div align="right"><img src=<?php echo '"photo/' . $filename2 . '"'; ?>name="img"
                                                        width="125" height="150" id="img"><font size="1"
                                                                                                face="Arial, Helvetica, sans-serif">
                                        &nbsp;&nbsp;</font></div>
                            </td>
                        </tr>
                        <tr>
                            <td height="32"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Name
                                        of Applicant:</strong></font></td>
                            <td><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["aname"]; ?></font>
                            </td>
                        </tr>
                        <tr>
                            <td height="58"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Father's/Husband's
                                        Name:</strong></font></td>
                            <td><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["father"]; ?></font>
                            </td>
                        </tr>
                        <tr>
                            <td><font size="1" face="Arial, Helvetica, sans-serif"><strong>Nationality:</strong></font>
                            </td>
                            <td><font size="1"
                                      face="Arial, Helvetica, sans-serif"><?php echo $row["nationality"]; ?></font></td>
                            <td width="13%"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Gender:</strong></font>
                            </td>
                            <td width="33%"><font size="1"
                                                  face="Arial, Helvetica, sans-serif"><?php echo $row["sex"]; ?></font>
                            </td>
                        </tr>
                        <tr>
                            <td><font size="1" face="Arial, Helvetica, sans-serif"><strong>Category:</strong></font>
                            </td>
                            <td><font size="1"
                                      face="Arial, Helvetica, sans-serif"><?php echo $row["category"]; ?></font></td>
                            <td width="13%"><font size="1" face="Arial, Helvetica, sans-serif"><strong></strong></font>
                            </td>
                            <td width="33%"><font size="1" face="Arial, Helvetica, sans-serif"></font></td>
                        </tr>
                        <tr>
                            <td height="32"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Date
                                        Of Birth:</strong></font></td>
                            <td><font size="1"
                                      face="Arial, Helvetica, sans-serif"><?php echo date("d-m-Y", strtotime($row["dob"])); ?>
                                    <font color="#FF0000">
                                        &nbsp; (DD-MM-YYYY)</font></font></td>
                            <td><font size="1" face="Arial, Helvetica, sans-serif"><strong>Age
                                        as on 1st January, 2015:</strong></font></td>
                            <td><font size="1"
                                      face="Arial, Helvetica, sans-serif"><?php echo $row["age_yr"] . " Years"; ?></font>
                            </td>
                        </tr>
                        <tr>
                            <td height="28"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Present
                                        Address:</strong></font></td>
                            <td colspan="3"><font size="1"
                                                  face="Arial, Helvetica, sans-serif"><?php echo $row["pre_address"]; ?><?php echo ",Block:-" . $row["pre_block"]; ?><?php echo ",Sub-Division:-" . $row["pre_subdiv"]; ?><?php echo ",District:-" . $row["pre_dist"]; ?>
                                    &nbsp;&nbsp;&nbsp;<?php echo "PIN:-" . $row["pre_pin"]; ?>
                                    &nbsp;&nbsp;&nbsp;<?php echo "State:-" . $row["pre_state"]; ?></font></td>
                        </tr>
                        <tr>
                            <td height="27"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Permanent
                                        Address:</strong></font></td>
                            <td colspan="3"><font size="1"
                                                  face="Arial, Helvetica, sans-serif"><?php echo $row["perm_address"]; ?><?php echo ",Block:-" . $row["perm_block"]; ?><?php echo ",Sub-Division:-" . $row["perm_subdiv"]; ?><?php echo ",District:-" . $row["perm_dist"]; ?>
                                    &nbsp;&nbsp;&nbsp;<?php echo "PIN:-" . $row["perm_pin"]; ?>
                                    &nbsp;&nbsp;&nbsp;<?php echo "State:-" . $row["perm_state"]; ?></font></td>
                        </tr>
                        <tr>
                            <td height="26"><font size="1"
                                                  face="Arial, Helvetica, sans-serif"><strong>Email:</strong></font>
                            </td>
                            <td><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["email"]; ?></font>
                            </td>
                            <td><font size="1" face="Arial, Helvetica, sans-serif"><strong>Mobile:</strong></font></td>
                            <td><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["mobile"]; ?></font>
                            </td>
                        </tr>
                        <tr>
                            <td height="18" colspan="2"><font size="2" face="Arial, Helvetica, sans-serif"><strong>Educational
                                        Qualification:</strong></font></td>
                            <td><font size="1" face="Arial, Helvetica, sans-serif">&nbsp;</font></td>
                            <td><font size="1" face="Arial, Helvetica, sans-serif">&nbsp;</font></td>
                        </tr>
                        <tr>
                            <td height="64" colspan="4">
                                <table width="99%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
                                    <tr bgcolor="#CCFFFF">
                                        <td width="14%">
                                            <div align="center"><font color="#003399" size="1"
                                                                      face="Arial, Helvetica, sans-serif"><strong>Qualification</strong></font>
                                            </div>
                                        </td>
                                        <td width="16%">
                                            <div align="center"><font color="#003399" size="1"
                                                                      face="Arial, Helvetica, sans-serif"><strong>Name
                                                        of the Institution</strong></font></div>
                                        </td>
                                        <td width="8%">
                                            <div align="center"><font color="#003399" size="1"
                                                                      face="Arial, Helvetica, sans-serif"><strong>Year
                                                        of Passing</strong></font></div>
                                        </td>
                                        <td width="8%">
                                            <div align="center"><font color="#003399" size="1"
                                                                      face="Arial, Helvetica, sans-serif"><strong>Subject</strong></font>
                                            </div>
                                        </td>
                                        <td width="16%">
                                            <div align="center"><strong><font color="#003399" size="1"
                                                                              face="Arial, Helvetica, sans-serif">Total
                                                        Marks</font></strong></div>
                                        </td>
                                        <td width="18%">
                                            <div align="center"><font color="#003399" size="1"
                                                                      face="Arial, Helvetica, sans-serif"><strong>Marks
                                                        Obtained</strong></font></div>
                                        </td>
                                        <td width="18%">
                                            <div align="center">
                                                <div align="center"><font color="#003399" size="1"
                                                                          face="Arial, Helvetica, sans-serif"><strong>%
                                                            of Marks obtain</strong></font></div>
                                            </div>
                                        </td>
                                        <td width="18%">
                                            <div align="center"><font color="#003399" size="1"
                                                                      face="Arial, Helvetica, sans-serif"><strong>Grade
                                                        / Division</strong></font></div>
                                        </td>
                                    </tr>
                                    <?php
                                    $sqledu = "select eq.exam as exam, eq.institute as institute, eq.year as year, eq.sub as sub, eq.fullmarks as fullmarks,eq.marksobtain as marksobtain, eq.percentage as percentage, eq.grade as grade from edu_quali as eq where eq.appid='" . $appid . "' order by eq.id asc";
                                    $eduList = executeSqlQuery($sqledu);
                                    while ($eduRow = mysql_fetch_array($eduList)) {


                                        ?>
                                        <tr>
                                            <td height="22">
                                                <div align="center"><font size="1"
                                                                          face="Arial, Helvetica, sans-serif"><strong>  <?php if ($eduRow["exam"] != "") {
                                                                echo $eduRow["exam"];
                                                            } else {
                                                                echo "------";
                                                            } ?></strong></font></div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($eduRow["institute"] != "") {
                                                                echo $eduRow["institute"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($eduRow["year"] != "") {
                                                                echo $eduRow["year"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                            <td align="center"><?php if ($eduRow["sub"] != "") {
                                                    echo $eduRow["sub"];
                                                } else {
                                                    echo "------";
                                                } ?></td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($eduRow["fullmarks"] != "") {
                                                                echo $eduRow["fullmarks"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($eduRow["marksobtain"] != "") {
                                                                echo $eduRow["marksobtain"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($eduRow["percentage"] != "") {
                                                                echo $eduRow["percentage"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($eduRow["grade"] != "") {
                                                                echo $eduRow["grade"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                        </tr>
                                    <?php }
                                    ?>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td height="16" colspan="2"><font size="2" face="Arial, Helvetica, sans-serif"><strong>Work
                                        Experience in Health Project:</strong></font></td>
                            <td><font size="1" face="Arial, Helvetica, sans-serif">&nbsp;</font></td>
                            <td><font size="1" face="Arial, Helvetica, sans-serif">&nbsp;</font></td>
                        </tr>
                        <tr>
                            <td height="67" colspan="4">
                                <table width="99%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
                                    <tr bgcolor="#CCFFFF">
                                        <td width="14%">
                                            <div align="center"><strong><font color="#003399" size="1"
                                                                              face="Arial, Helvetica, sans-serif">Name
                                                        of Project</font></strong></div>
                                        </td>
                                        <td width="14%">
                                            <div align="center"><strong><font color="#003399" size="1"
                                                                              face="Arial, Helvetica, sans-serif">Project
                                                        Activities</font></strong></div>
                                        </td>
                                        <td width="14%">
                                            <div align="center"><strong><font color="#003399" size="1"
                                                                              face="Arial, Helvetica, sans-serif">Name
                                                        of Post in Project (Designation)</font></strong></div>
                                        </td>
                                        <td width="18%">
                                            <div align="center"><font color="#003399" size="1"
                                                                      face="Arial, Helvetica, sans-serif"><strong>Organization
                                                        Conducting the Project</strong></font></div>
                                        </td>
                                        <td width="8%">
                                            <div align="center"><strong><font color="#003399" size="1"
                                                                              face="Arial, Helvetica, sans-serif">From
                                                        (DD-MM-YYYY)</font></strong></div>
                                        </td>
                                        <td width="8%">
                                            <div align="center"><strong><font color="#003399" size="1"
                                                                              face="Arial, Helvetica, sans-serif">To
                                                        (DD-MM-YYYY)</font></strong></div>
                                        </td>
                                        <td width="9%">
                                            <div align="center">
                                                <div align="center"><strong><font color="#003399" size="1"
                                                                                  face="Arial, Helvetica, sans-serif">Duration
                                                            of Work (Month)</font></strong></div>
                                            </div>
                                        </td>
                                        <td width="15%">
                                            <div align="center"><font color="#003399" size="1"
                                                                      face="Arial, Helvetica, sans-serif"><strong>Remarks</strong></font>
                                            </div>
                                        </td>
                                    </tr>
                                    <?php
                                    $sqlexp = "select * from experience where appid='" . $appid . "' order by id asc";
                                    $expList = executeSqlQuery($sqlexp);
                                    while ($expRow = mysql_fetch_array($expList)) {


                                        ?>
                                        <tr>
                                            <td height="22">
                                                <div align="center"><font size="1"
                                                                          face="Arial, Helvetica, sans-serif"><strong>  <?php if ($expRow["project"] != "") {
                                                                echo $expRow["project"];
                                                            } else {
                                                                echo "------";
                                                            } ?></strong></font></div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($expRow["activity"] != "") {
                                                                echo $expRow["activity"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($expRow["duration"] != "") {
                                                                echo $expRow["duration"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                            <td align="center"><?php if ($expRow["organization"] != "") {
                                                    echo $expRow["organization"];
                                                } else {
                                                    echo "------";
                                                } ?></td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php $date = strtotime($expRow["fromdate"]);
                                                            if (date("d-m-Y ", $date) != "") {
                                                                echo date("d-m-Y ", $date);
                                                            } else {
                                                                echo "------";
                                                            } ?>

                                                        </font></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php $date1 = strtotime($expRow["todate"]);
                                                            if (date("d-m-Y ", $date1) != "") {
                                                                echo date("d-m-Y ", $date1);
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($expRow["duration"] != "") {
                                                                echo $expRow["duration"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($expRow["remarks"] != "") {
                                                                echo $expRow["remarks"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                        </tr>
                                    <?php }
                                    ?>
                                </table>
                            </td>
                        </tr>
                        <?php
                        if ($row["compknowledge"] == "Y"){
                        ?>
                        <tr>
                            <td height="18" colspan="2"><font size="2" face="Arial, Helvetica, sans-serif"><strong>Certification
                                        on Computer Knowledge:</strong></font></td>
                            <td><font size="1" face="Arial, Helvetica, sans-serif">&nbsp;</font></td>
                            <td><font size="1" face="Arial, Helvetica, sans-serif">&nbsp;</font></td>
                        </tr>
                        <tr>
                            <td height="63" colspan="4">
                                <table width="99%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
                                    <tr bgcolor="#CCFFFF">
                                        <td width="14%">
                                            <div align="center"><strong><font color="#003399" size="1"
                                                                              face="Arial, Helvetica, sans-serif">Name
                                                        of Course</font></strong></div>
                                        </td>
                                        <td width="16%">
                                            <div align="center"><strong><font color="#003399" size="1"
                                                                              face="Arial, Helvetica, sans-serif">Subject
                                                        Covered</font></strong></div>
                                        </td>
                                        <td width="8%">
                                            <div align="center"><font color="#003399" size="1"
                                                                      face="Arial, Helvetica, sans-serif"><strong>Year
                                                        of Passing</strong></font></div>
                                        </td>
                                        <td width="18%">
                                            <div align="center">
                                                <div align="center"><strong><font color="#003399" size="1"
                                                                                  face="Arial, Helvetica, sans-serif">Institute</font></strong>
                                                </div>
                                            </div>
                                        </td>
                                        <td width="18%">
                                            <div align="center"><strong><font color="#003399" size="1"
                                                                              face="Arial, Helvetica, sans-serif">Course
                                                        Duration (in Month)</font></strong></div>
                                        </td>
                                    </tr>
                                    <?php

                                    $sqlcomp = "select * from compknowledge where appid='" . $appid . "' order by id asc";
                                    $compList = executeSqlQuery($sqlcomp);
                                    while ($compRow = mysql_fetch_array($compList)) {


                                        ?>
                                        <tr>
                                            <td height="22">
                                                <div align="center"><font size="1"
                                                                          face="Arial, Helvetica, sans-serif"><strong>  <?php if ($compRow["course"] != "") {
                                                                echo $compRow["course"];
                                                            } else {
                                                                echo "------";
                                                            } ?></strong></font></div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($compRow["subject"] != "") {
                                                                echo $compRow["subject"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($compRow["year"] != "") {
                                                                echo $compRow["year"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($compRow["institute"] != "") {
                                                                echo $compRow["institute"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div align="center"><font size="1"
                                                                              face="Arial, Helvetica, sans-serif">
                                                            <?php if ($compRow["duration"] != "") {
                                                                echo $compRow["duration"];
                                                            } else {
                                                                echo "------";
                                                            } ?>
                                                        </font></div>
                                                </div>
                                            </td>
                                        </tr>
                                    <?php }
                                    }
                                    ?>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td height="83" colspan="4"><font size="1" face="Arial, Helvetica, sans-serif">
                                    I hereby declare that I fulfil the eligibility criteria for the
                                    post in terms of educational qualifications (including percentage
                                    of marks obtained in the examination and certificate course),
                                    experience, age, etc. and I am aware that mere calling for Test
                                    or Interview shall not entail me as fulfilling the conditions
                                    of eligibility. I also declare that I have applied only for one Block post in the
                                    district and if any time it is found that i have applied more than one Block my
                                    candidature is liable to canceled. I certify that the information given in the
                                    application is correct and complete to the best of my knowledge
                                    and nothing has been concealed/distorted. I understand that
                                    if at any time I am found to have concealed/distorted any material
                                    information my candidature/appointment is liable to summary
                                    termination without notice or compensation.</font></td>
                        </tr>
                        <tr>
                            <td height="114" colspan="2">
                                <div align="left"><font size="1" face="Arial, Helvetica, sans-serif"><br>
                                    </font></div>
                            </td>
                            <td height="114" colspan="2">
                                <div align="right"><img src=<?php echo '"photo/' . $filename3 . '"'; ?>name="img"
                                                        width="166" height="60" id="img"><font size="1"
                                                                                               face="Arial, Helvetica, sans-serif"><strong><br>
                                            ..................................................... </strong><br>
                                        <strong>Signature of the Applicant</strong> </font></div>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </center>
    </div>
</form>
</body>
</html>