<?php
include("connection.php");

if (isset($_GET["post"])) {
    $Post = trim($_GET["post"]);
    $sqlstr = "SELECT a.appid, a.post, a.examroll, a.aname, a.father, a.dob, a.age_yr, a.perm_address,
                    a.perm_subdiv, perm_pin, a.mobile, a.perm_state, PostName, ExamDateTime, ExamVenue
                    FROM applicant as a inner join post as p on ( a.post = p.PostCode )
                    where a.post = '" . Remove_SQLi($Post) . "' and `RejectionRemarks`='Accepted'
                    Order By examroll";
    $result = executeSqlQuery($sqlstr);
    ?>
    <html>
    <head>
        <title>Attendance Sheet</title>
        <style type="text/css">
            @media print {
                @page {
                    size: 21cm 29.7cm;
                    margin: 5mm 5mm 5mm 5mm; /* change the margins as you want them to be. */
                }

                body {
                    bgcolor: white;
                    color: black;
                    font-family: verdana;
                    font-size: 0.8em;
                }

                .footer {
                    page-break-after: always;
                }

                .tips {
                    display: none;
                }
            }

            @media screen {
                body {
                    bgcolor: white;
                    color: black;
                    font-family: verdana;
                    font-size: 12px;
                }

                p {
                    text-indent: 20px;
                    text-align: justify;
                }
            }

            .header {
                margin: 0px;
                padding: 0px;
                text-align: center;
                font-size: 18px;
            }

        </style>
    </head>
    <body>

    <div>
        <div style="margin-left: auto;margin-right: auto; width: 720px; padding: 5px;">
            <?php
            $SlNo = 0;
            while ($row = mysql_fetch_array($result)):
                $AppID = str_replace("/", "_", $row["appid"]);
                $Photo = "photo/" . $AppID . "_1.jpg";
                $Sign = "photo/" . $AppID . "_2.jpg";
                if (($SlNo != 0) && ($SlNo % 5 == 0)): ?>
                    <div class="footer"></div>
                <?php endif; ?>
                <?php $SlNo++;
                if ($SlNo % 5 == 1): ?>
                    <div class="header">
                        <span>Attendance Sheet for the post of <?php echo $row["PostName"]; ?></span>
                        <hr/>
                    </div>
                <?php endif; ?>
                <div style="height: 185px; border-bottom: 1px dashed;clear: both;">
                    <div style="float: left; border: 1px solid;padding: 2px;">
                        <img src="<?php echo $Photo; ?>" width="122" alt="photograph">
                    </div>
                    <div>
                        <div
                            style="float: left;height: 170px; padding: 5px;width:300px; line-height: 20px; text-overflow: ellipsis; overflow: hidden;">
                            <span><strong>Roll No: </strong><?php echo $row["examroll"]; ?></span><br/>
                            <span><strong>Date of Birth: </strong>
                                <?php echo $row["dob"] . " (" . $row["age_yr"] . " Years)"; ?>
                            </span><br/>
                            <span><strong>Name: </strong><br/><?php echo $row["aname"]; ?></span><br/>
                            <span><strong>Father/Husband Name: </strong><br/><?php echo $row["father"]; ?></span><br/>
                            <span style="">
                                <strong>Address: </strong><br/><?php echo $row["perm_address"] . ","
                                    . $row["perm_dist"] . "," . $row["perm_pin"]; ?>
                            </span>
                        </div>
                        <div
                            style="float: right; border: 1px solid;padding: 5px;margin-right: 10px;text-align: center;">
                            <img src="<?php echo $Sign; ?>" width="240" height="50" alt="Signature"><br/>

                            <div style="padding-top: 5px;">Signature Uploaded by the Candidate</div>
                        </div>
                        <div style="float: right;text-align: center;margin-top: 50px; margin-right: 20px;">
                            <strong>---------------------------------------------<br>
                                Signature of Candidate </strong>
                        </div>
                    </div>
                </div>
                <br/>
            <?php endwhile; ?>
            <div class="tips" style="text-align: center;color: #6D7F04; font-size: 20px;">
                <hr/>
                (* Print This Attendance Sheet Only on A4 Size Paper in Portrait)
            </div>
        </div>
    </div>

    </body>
    </html>
    <?php
}
?> 
