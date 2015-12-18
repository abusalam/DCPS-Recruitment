<?php
include("connection.php");

if (isset($_GET["examroll"])) {
    $examroll = trim($_GET["examroll"]);
    $sqlstr = "SELECT a.post, a.examroll, a.aname, a.father, a.perm_address, a.perm_subdiv, perm_pin, a.mobile, a.perm_state,
 PostName, ExamDateTime, ExamVenue
 FROM applicant as a inner join post as p on ( a.post = p.PostCode ) where a.examroll = '" . Remove_SQLi($examroll) . "'";

    $result = executeSqlQuery($sqlstr);
    $row = mysql_fetch_array($result);
    ?>
    <html>
    <head>
        <title>Provisional Admit Card</title>
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

        </style>
    </head>
    <body>

    <div>
        <div style="margin-left: auto;margin-right: auto; width: 720px; border: 1px solid;padding: 5px;">
            <h2 style="clear: both;text-align: center">Provisional Admit Card</h2>
            <hr/>
            <div style="float: right; border: 1px solid;padding: 2px;">
                <img src="photo/<?php echo $examroll; ?>_1.jpg" width="122" alt="photograph">
            </div>
            <div>
                <h3>Post: <?php echo $row["PostName"]; ?></h3>

                <h3><span>Roll No: <?php echo $row["examroll"]; ?></h3>
                <h4>Name: <?php echo $row["aname"]; ?></h4>
                <h4>Father/Husband Name: <?php echo $row["father"]; ?></h4>
                <h4>
                    Address: <?php echo $row["perm_address"] . "," . $row["perm_subdiv"] . "," . $row["perm_dist"] . "," . $row["perm_pin"] . "," . $row["StateName"]; ?></h4>
            </div>
            <p>
                He/She is here by allowed to appear
                at the written test for engagement to the post
                of <?php echo $row["PostName"]; ?>
                to be held on <?php echo $row["ExamDateTime"]; ?> at, <?php echo $row["ExamVenue"]; ?>.
            </p>

            <p>
                He/She should report to the Officer-in-Charge of the Examination
                Centre 30 Mins before the exam starts.
            </p>
            <strong>Instructions related to the Examination: </strong><br>
            <ol>
                <li>
                    The written test may consist of multiple choice question.
                </li>
                <li>
                    Based on the details provided by you in your online application
                    and the eligibility criteria prescribed by Authority, you have been provisionally shortlisted
                    to appear for written test as the first stage of the selection
                    process for the above mentioned position. This Admit Card is
                    not a confirmation of your eligibility for the position. All
                    education and work experience and other data submitted by you
                    in your application form will be verified during the selection
                    process. If any of this is found to be untrue or it is found
                    that you do not meet any of the eligibility criteria, your candidature
                    may be cancelled without any notice at any stage of the selection process.
                </li>
                <li>
                    Please bring this Admit Card on the day
                    of the exam, along with a valid photo identity card (Driving
                    License/ Voter ID / PAN Card / Pass Port/ Aadhar Card etc.).
                </li>
                <li>
                    No Candidate will be allowed to enter the examination hall
                    once the written test has started.
                </li>
                <li>
                    Please note that all the cost related to attending the
                    selection process would be borne by the candidate himself.
                </li>
                <li>
                    Mobile Phone, Calculator will not be allowed inside the
                    examination hall.
                </li>
            </ol>
            <div style="float: right;text-align: center;padding-bottom: 20px;">
                <img src="image/Untitled.png" width="85" height="79"><br>
                District Nodal Officer<br>
                Rastriya Swastha Bima Yojana<br>
                Paschim Medinipur
            </div>
            <p>
                NB: Top 10 Candidates from IT and 5 Candidates from Hospital Management securing qualifying marks in
                written test will be eligible for Computer Test.
            </p>

            <div style="clear: both; text-align: center; border-top: 1px dashed; padding-top: 10px;">
                <strong>(For Office Use Only)</strong>
            </div>
            <div style="padding-bottom: 50px;">
                <div style="float: right; border: 1px solid;padding: 5px;margin-right: 10px;text-align: center;">
                    <img src="photo/<?php echo $examroll; ?>_2.jpg" width="240" alt="photograph"><br/>

                    <div style="padding-top: 5px;">Signature Uploaded by the Candidate</div>
                </div>
                <div style="float: left; border: 1px solid;padding: 2px;margin-right: 10px;">
                    <img src="photo/<?php echo $examroll; ?>_1.jpg" width="122" alt="photograph">
                </div>
                <h3><span>Post: <?php echo $row["PostName"]; ?></span></h3>

                <h3><span>Roll No: <?php echo $row["examroll"]; ?></span></h3>

                <h4><strong>Name: </strong><?php echo $row["aname"]; ?></h4>
            </div>
            <div style="float: left;text-align: center;">
                <strong>---------------------------------------------<br>
                    Signature of Candidate </strong>
            </div>

            <div style="text-align: center;float: left; margin-left: 80px;">
                <strong>--------------------------------------------<br>
                    Signature of Invigilator</strong>
            </div>
            <br style="clear: both;">

        </div>
    </div>

    </body>
    </html>
    <?php
}
?> 
