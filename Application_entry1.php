<?php
include("connection.php");
function application_Register()
{
    ?>
    <html>
    <head>
        <title>Application Registration Form</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

        <script language="javascript" type="text/javascript" src="JavaScript/reg_valid.js"></script>
        <script language="javascript" type="text/javascript">
            var AgeAsOfDate = '01/01/2014';
            var AgeMinDate1 = '01/01/1996';
            var AgeMaxDate1 = '01/01/1969';
            function updateaddress() {
                if (document.getElementById('checkbox1').checked) {
                    document.getElementById('vill_txt2').value = document.getElementById('vill_txt1').value;
                    document.getElementById('block2').value = document.getElementById('block1').value;
                    document.getElementById('sub2').value = document.getElementById('sub1').value;
                    document.getElementById('dist2').value = document.getElementById('dist1').value;
                    document.getElementById('pin2').value = document.getElementById('pin1').value;
                    document.getElementById('state2').value = document.getElementById('state1').value;
                }
            }
            function checkEmail(inputvalue) {
                var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (pattern.test(inputvalue)) {
                    return true;
                } else {
                    return false;
                }
            }
            function validate() {

                if (trim(document.getElementById('post').value) == "0") {
                    alert("Please select Post");
                    document.getElementById('post').focus();
                    return false;
                }

                else if (trim(document.getElementById('block').value) == '0') {
                    alert("Please Select District/Block");
                    document.getElementById('block').focus();
                    return false;
                }
                else if (trim(document.getElementById('name').value) == '') {
                    alert("Please enter Name");
                    document.getElementById('name').focus();
                    return false;
                }
                else if (trim(document.getElementById('father').value) == '') {
                    alert("Please enter Father Name");
                    document.getElementById('father').focus();
                    return false;
                }
                else if (trim(document.getElementById('txtage').value) == '') {
                    alert("Please enter Date Of Birth Correctly");
                    document.getElementById('txtage').focus();
                    return false;
                }
                else if (trim(document.getElementById('sex').value) == "0") {
                    alert("Please enter Gender");
                    document.getElementById('sex').focus();
                    return false;
                }
                else if (trim(document.getElementById('phone').value) == "" || !isInteger(trim(document.getElementById('phone').value))) {
                    alert("Please enter Mobile Number");
                    document.getElementById('phone').focus();
                    return false;
                }
                else if (trim(document.getElementById('phone').value) != "" && (trim(document.getElementById('phone').value)).length != 10) {
                    alert("Please enter Valid Mobile Number ( 10 digit )");
                    document.getElementById('phone').focus();
                    return false;
                }

                else if (trim(document.getElementById('vill_txt1').value) == "") {
                    alert("Please enter Postal Address/ Village / City / Road / House No etc.");
                    document.getElementById('vill_txt1').focus();
                    return false;
                }
                else if (trim(document.getElementById('block1').value) == "0") {
                    alert("Please enter Present Address Block ");
                    document.getElementById('block1').focus();
                    return false;
                }
                else if (trim(document.getElementById('sub1').value) == "0") {
                    alert("Please enter Postal Address Sub-Division. ");
                    document.getElementById('sub1').focus();
                    return false;
                }
                else if (trim(document.getElementById('dist1').value) == "") {
                    alert("Please enter Postal Address District. ");
                    document.getElementById('dist1').focus();
                    return false;
                }
                else if (trim(document.getElementById('pin1').value) == "" || !isInteger(trim(document.getElementById('pin1').value)) || (trim(document.getElementById('pin1').value)).length != 6) {
                    alert("Please Enter Correct Pin for Postal Address");
                    document.getElementById('pin1').focus();
                    return false;
                }
                else if (trim(document.getElementById('state1').value) == "0") {
                    alert("Please enter State for Postal Address");
                    document.getElementById('state1').focus();
                    return false;
                }
                else if (trim(document.getElementById('vill_txt2').value) == "") {
                    alert("Please enter Present Address/ Village / City / Road / House No etc. ");
                    document.getElementById('vill_txt2').focus();
                    return false;
                }
                else if (trim(document.getElementById('block2').value) == "0") {
                    alert("Please enter Postal Address Sub-Division. ");
                    document.getElementById('block2').focus();
                    return false;
                }
                else if (trim(document.getElementById('sub2').value) == "0") {
                    alert("Please enter Present Address Sub-Division. ");
                    document.getElementById('sub2').focus();
                    return false;
                }
                else if (trim(document.getElementById('dist2').value) == "") {
                    alert("Please enter Present Address District. ");
                    document.getElementById('dist2').focus();
                    return false;
                }
                else if (trim(document.getElementById('pin2').value) == "" || !isInteger(trim(document.getElementById('pin2').value)) || (trim(document.getElementById('pin2').value)).length != 6) {
                    alert("Please Enter Correct Pin for Present Address");
                    document.getElementById('pin2').focus();
                    return false;
                }
                else if (trim(document.getElementById('state2').value) == "0") {
                    alert("Please enter State for Present Address");
                    document.getElementById('state2').focus();
                    return false;
                }

                else if (trim(document.getElementById('ed01').value) == "") {
                    alert("Please enter Madhyamik Institution Name ");
                    document.getElementById('ed01').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed02').value) == "") {
                    alert("Please enter Madhyamik Passing Year");
                    document.getElementById('ed02').focus();
                    return false;
                }
                else if (!isInteger(trim(document.getElementById('ed02').value)) || (trim(document.getElementById('ed02').value)).length != 4) {
                    alert("Please Enter  Correct Madhyamik passing Year");
                    document.getElementById('ed32').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed03').value) == "") {
                    alert("Please enter Madhyamik Total Marks ");
                    document.getElementById('ed03').focus();
                    return false;
                }
                else if (!isInteger(trim(document.getElementById('ed03').value))) {
                    alert("Please Enter Madhyamik Total Marks in Integer");
                    document.getElementById('ed03').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed04').value) == "") {
                    alert("Please enter Madhyamik Marks ");
                    document.getElementById('ed04').focus();
                    return false;
                }
                else if (isNaN(document.getElementById('ed04').value)) {
                    alert("Please enter Correct Madhyamik Marks");
                    document.getElementById('ed04').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed05').value) == "") {
                    alert("Please enter Madhyamik percentage ");
                    document.getElementById('ed05').focus();
                    return false;
                }
                else if (parseFloat(document.getElementById('ed05').value) < 0 || parseFloat(document.getElementById('ed05').value) > 100) {
                    alert("Please enter Correct Madhyamik Percentage ");
                    document.getElementById('ed05').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed06').value) == "") {
                    alert("Please enter Madhyamik Grade");
                    document.getElementById('ed06').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed11').value) == "") {
                    alert("Please enter Higher Secondary Institution Name ");
                    document.getElementById('ed11').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed12').value) == "") {
                    alert("Please enter Higher Secondary Passing Year");
                    document.getElementById('ed12').focus();
                    return false;
                }
                else if (!isInteger(trim(document.getElementById('ed12').value)) || (trim(document.getElementById('ed12').value)).length != 4) {
                    alert("Please Enter Correct Higher Secondary passing Year");
                    document.getElementById('ed12').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed13').value) == "") {
                    alert("Please enter Higher Secondary Total Marks ");
                    document.getElementById('ed13').focus();
                    return false;
                }
                else if (!isInteger(trim(document.getElementById('ed13').value))) {
                    alert("Please Enter Higher Secondary Total Marks in Integer");
                    document.getElementById('ed13').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed14').value) == "") {
                    alert("Please enter Higher Secondary Marks ");
                    document.getElementById('ed14').focus();
                    return false;
                }
                else if (isNaN(document.getElementById('ed14').value)) {
                    alert("Please enter Correct Higher Secondary Marks");
                    document.getElementById('ed14').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed15').value) == "") {
                    alert("Please enter Higher Secondary percentage ");
                    document.getElementById('ed15').focus();
                    return false;
                }
                else if (parseFloat(document.getElementById('ed15').value) < 0 || parseFloat(document.getElementById('ed15').value) > 100) {
                    alert("Please enter Correct Higher Secondary Percentage ");
                    document.getElementById('ed15').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed16').value) == "") {
                    alert("Please enter Higher Secondary Grade");
                    document.getElementById('ed16').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed21').value) == "") {
                    alert("Please enter Graduation Institution Name ");
                    document.getElementById('ed21').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed22').value) == "") {
                    alert("Please enter Graduation Passing Year");
                    document.getElementById('ed22').focus();
                    return false;
                }
                else if (!isInteger(trim(document.getElementById('ed22').value)) || (trim(document.getElementById('ed22').value)).length != 4) {
                    alert("Please Enter Correct Graduation passing Year");
                    document.getElementById('ed22').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed23').value) == "") {
                    alert("Please enter Graduation Total Marks ");
                    document.getElementById('ed23').focus();
                    return false;
                }
                else if (!isInteger(trim(document.getElementById('ed23').value))) {
                    alert("Please Enter Graduation Total Marks in Integer");
                    document.getElementById('ed23').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed24').value) == "") {
                    alert("Please enter Graduation Marks ");
                    document.getElementById('ed24').focus();
                    return false;
                }
                else if (isNaN(document.getElementById('ed24').value)) {
                    alert("Please enter Correct Graduation Marks");
                    document.getElementById('ed24').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed25').value) == "") {
                    alert("Please enter Graduation percentage ");
                    document.getElementById('ed25').focus();
                    return false;
                }
                else if (parseFloat(document.getElementById('ed25').value) < 0 || parseFloat(document.getElementById('ed25').value) > 100) {
                    alert("Please enter Correct Graduation Percentage ");
                    document.getElementById('ed25').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed26').value) == "") {
                    alert("Please enter Graduation Grade");
                    document.getElementById('ed26').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed31').value) == "") {
                    alert("Please enter 'O' Level Institution Name ");
                    document.getElementById('ed31').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed32').value) == "") {
                    alert("Please enter 'O' Level Passing Year");
                    document.getElementById('ed32').focus();
                    return false;
                }
                else if (!isInteger(trim(document.getElementById('ed32').value)) || (trim(document.getElementById('ed32').value)).length != 4) {
                    alert("Please Enter Correct 'O' Level passing Year");
                    document.getElementById('ed32').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed33').value) == "") {
                    alert("Please enter 'O' Level Total Marks ");
                    document.getElementById('ed33').focus();
                    return false;
                }
                else if (!isInteger(trim(document.getElementById('ed33').value))) {
                    alert("Please Enter 'O' Level Total Marks in Integer");
                    document.getElementById('ed33').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed34').value) == "") {
                    alert("Please enter 'O' Level Marks ");
                    document.getElementById('ed34').focus();
                    return false;
                }
                else if (isNaN(document.getElementById('ed34').value)) {
                    alert("Please enter Correct 'O' Level Marks");
                    document.getElementById('ed34').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed35').value) == "") {
                    alert("Please enter 'O' Level percentage ");
                    document.getElementById('ed35').focus();
                    return false;
                }
                else if (parseFloat(document.getElementById('ed35').value) < 0 || parseFloat(document.getElementById('ed35').value) > 100) {
                    alert("Please enter Correct 'O' Level Percentage ");
                    document.getElementById('ed35').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed36').value) == "") {
                    alert("Please enter 'O' Level Grade");
                    document.getElementById('ed36').focus();
                    return false;
                }

                else if (trim(document.getElementById('pin').value) == "" || (trim(document.getElementById('pin').value)).length != 4) {
                    alert("Please enter the pin which will be mandatorily used for uploading Image and Signature");
                    document.getElementById('pin').focus();
                    return false;
                }
                else if (!document.getElementById('accp_decl').checked) {
                    alert("Please check the Declaration at the end of the application form for submission");
                    document.getElementById('accp_decl').focus();
                    return false;
                }
                document.getElementById('Registration').submit();
                return true;
            }
        </script>
        <link href="CSS/inb.css" rel="stylesheet" type="text/css">
        <!-- CSS for Drop Down Tabs Menu #1 -->

    </head>
    <body>

    <form name="Registration" id="Registration" method="POST" action="Application_entry.php">
        <DIV align="left">

            <table width="100%" height="80">
                <tr>
                    <td height="80" align="left">
                        <div align="left"><img src="image/banner.gif" width="63%" height="80">
                        </div>
                    </td>
                </tr>
            </table>

            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td width="9"><img src="image/h_curve.gif" height="27" width="9"></td>
                    <td class="header" bgcolor="#E9FAFE" width="1800">Recruitment For Block ASHA
                        Facilitator(Contractual) under Purba Medinipur District
                    </td>
                    <td width="30"><img src="image/h_cut.gif" height="27" width="28"></td>

                    <td class="header" align="right" width="415">
                        <div align="left"><strong><font color="#FF0000" size="2">*
                                    Mandatory Field</font></strong></div>
                    </td>
                </tr>
            </table>

            <table width="100%" height="977">
                <tr bgcolor="#CCFFFF">
                    <TD class="tablecontent1" height="41" colspan="6">
                        <div align="center"><strong><font color="#FFFF00" size="5" face="Monotype Corsiva"><em><font
                                            color="#000000">Post
                                            Applied For <font color="#FF0000">*</font></font><font
                                            color="#FF0000">:</font><font color="#3399CC">
                                            <select name="post" class="listMenu" id="post">
                                                <?php
                                                $sqlstr = "select * from post";
                                                $rec = executeSqlQuery($sqlstr);
                                                echo "<option value=\"0\">--Select Post--</>";
                                                while ($row = mysql_fetch_array($rec)) {

                                                    echo "<option value=" . $row["PostCode"] . ">" . $row["PostName"] . "</>";
                                                }

                                                ?>
                                            </select>
                                        </font></em></font></strong></div>
                    </TD>
                </tr>
                <tr bgcolor="#CCFFFF">
                    <TD class="tablecontent1" height="41" colspan="3">
                        <div align="center"><strong><font color="#FFFF00" size="5" face="Monotype Corsiva"><em><font
                                            color="#000000"> Applied For Sub-Division :<font color="#FF0000">
                                                *</font></font><font color="#FF0000">:</font></em></font></strong></div>
                    </TD>
                    <TD class="tablecontent1" height="41"><strong><font color="#FFFF00" size="5"
                                                                        face="Monotype Corsiva"><em><font
                                        color="#3399CC">
                                        <select name="subdiv" class="listMenu" id="subdiv" onChange="showBlock();">
                                            <?php
                                            $sqlsub = "select * from subdivision";
                                            $subd = executeSqlQuery($sqlsub);
                                            echo "<option value=\"0\">--Select Sub-Division--</>";
                                            while ($row1 = mysql_fetch_array($subd)) {

                                                echo "<option value=" . $row1["sdiv_cd"] . ">" . $row1["subdiv"] . "</>";
                                            }

                                            ?>
                                        </select>
                                        </span></font></em></font></strong></TD>
                    <TD width="272" height="41" class="tablecontent1"><strong><font color="#FFFF00" size="5"
                                                                                    face="Monotype Corsiva"><em><font
                                        color="#000000">Applied For Block:<font color="#FF0000"> *</font></font><font
                                        color="#FF0000">:</font></em></font></strong></TD>
                    <TD width="425" class="tablecontent1"><strong><font color="#FFFF00" size="5"
                                                                        face="Monotype Corsiva"><em><font
                                        color="#3399CC">
                                        <select name="block3" class="listMenu" id="block">
                                            <option value="0" selected="selected">--Select Applied Block--</option>

                                        </select>
                                        </span></font></em></font></strong></TD>

                </tr>
                <tr bgcolor="#CCFFFF">
                    <TD class="tablecontent1" height="41" colspan="6">
                        <div align="center"></div>
                    </TD>

                </tr>
                <tr>
                    <td width="144" height="2">
                <tr>
                    <td class="tablecontent1" width="144" height="34">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Name
                                        <font color="#CC0000">*</font>:</font></strong></font></div>
                    </td>
                    <td colspan="2" class="tablecontent1">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">
                                        <input name="name" id="name" type="text" size="25" value="">
                                        <br>
                                    </font></strong></font></div>
                    </td>
                    <td class="tablecontent1" width="404">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Father's/Husband's
                                        Name <font color="#FF0000">*</font>:</font></strong></font></div>
                    </td>
                    <td colspan="2" class="tablecontent1">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">
                                        <input name="father" id="father" type="text" size="25" value="">
                                        <br>
                                    </font></strong></font></div>
                    </td>
                </tr>
                <tr>
                    <td class="tablecontent1" height="36">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Nationality</font><font
                                        size="2" face="Arial, Helvetica, sans-serif"><font
                                            color="#FF0000">*</font>:</font></strong></font></div>
                    </td>
                    <td colspan="2" class="tablecontent1">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">
                                        <input name="nationality" readonly type="text" size="6" value="Indian">
                                        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                                        &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;</font></strong></font></div>
                    </td>
                    <td class="tablecontent1">
                        <div align="left"><font color="#000033" size="2" face="Arial, Helvetica, sans-serif"><strong>Gender<font
                                        color="#FF0000">*</font>:</strong></font> <strong><font color="#FFFF00" size="5"
                                                                                                face="Monotype Corsiva"><em><font
                                            color="#3399CC">
                                            <select class="listMenu" name="sex" id="sex">
                                                <?php
                                                $sqlstr = "select * from sex";
                                                $rec = executeSqlQuery($sqlstr);
                                                echo "<option value=\"0\">--Select Sex--</>";
                                                while ($row = mysql_fetch_array($rec)) {
                                                    echo "<option value=" . $row["Gender"] . ">" . $row["Gender"] . "</>";

                                                }
                                                ?>
                                            </select>
                                        </font></font></strong></div>
                    </td>
                    <td class="tablecontent1" colspan="2"></td>
                </tr>
                <tr>
                    <td height="32" align="left" class="tablecontent1">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Category<font
                                            color="#FF0000">*</font>:</font></strong></font></div>
                    </td>
                    <td width="154" align="left" class="tablecontent1">
                        <div align="left"><font size="2" face="Arial, Helvetica, sans-serif"><strong><font
                                        color="#000033">
                                        <select class="category" name="category" id="category"
                                                onChange="getYearList();">
                                            <option value="UR" selected="selected">UR</option>
                                            <option value="ST">ST</option>
                                            <option value="SC">SC</option>
                                            <option value="OBC-A">OBC-A</option>
                                            <option value="OBC-B">OBC-B</option>

                                        </select></font></strong></font></div>
                    </td>
                    <td width="184" class="tablecontent1">
                        <div><font color="#000033"><strong><font size="2" face="Arial, Helvetica, sans-serif">Date
                                        Of Birth<font color="#FF0000">*</font>:</font></strong></font></div>
                    </td>
                    <td class="tablecontent1">
                        <div><font color="#000033"><strong><font size="2" face="Arial, Helvetica, sans-serif"><select
                                            class="listMenu" size="1" name="seldobday" id="seldobday"
                                            onChange="setAge()">
                                            <option value="00" selected="selected">Day</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select> <select class="listMenu" size="1" name="seldobmon" id="seldobmon"
                                                          onChange="setAge()">
                                            <option value="00" selected="selected">Month</option>
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select> <select class="listMenu" size="1" name="seldobyear" id="seldobyear"
                                                          onChange="setAge()">
                                            <option value="00" selected="selected">Year</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                            <option value="1989">1989</option>
                                            <option value="1988">1988</option>
                                            <option value="1987">1987</option>
                                            <option value="1986">1986</option>
                                            <option value="1985">1985</option>
                                            <option value="1984">1984</option>
                                            <option value="1983">1983</option>
                                            <option value="1982">1982</option>
                                            <option value="1981">1981</option>
                                            <option value="1980">1980</option>
                                            <option value="1979">1979</option>
                                            <option value="1978">1978</option>
                                            <option value="1977">1977</option>
                                            <option value="1976">1976</option>
                                            <option value="1975">1975</option>
                                            <option value="1974">1974</option>


                                        </select></font></strong></font></div>
                    </td>
                    <td colspan="2" class="tablecontent1"><font size="2"
                                                                face="Arial, Helvetica, sans-serif"><strong><font
                                    color="#000033">Age
                                    as on (1st January, 2014)<font color="#FF0000">*</font>:</font></strong></font>
                        <input value="" readonly="readOnly" size="3" name="txtage" id="txtage"></td>
                </tr>
                <tr>
                    <td class="tablecontent1" height="32">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Email:</font></strong></font>
                        </div>
                    </td>
                    <td colspan="2" class="tablecontent1"><font color="#000033"><strong><font size="2"
                                                                                              face="Arial, Helvetica, sans-serif">
                                    <input name="email" id="email" type="text" size="25" value="">
                                </font></strong></font></td>
                    <td class="tablecontent1">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Mobile
                                        No<font color="#FF0000">*</font>:</font></strong></font><font color="#000033"
                                                                                                      size="2"
                                                                                                      face="Arial, Helvetica, sans-serif">
                                &nbsp;</font></div>
                    </td>
                    <td colspan="2" class="tablecontent1"><font color="#000033"><strong><font
                                    color="#000033"><strong><font size="2" face="Arial, Helvetica, sans-serif">
                                            <input name="phone" type="text" id="phone" value="" size="10"
                                                   maxlength="10">
                                        </font></strong></font></strong></font></td>
                </tr>
                <tr>
                    <td class="tablecontent1" height="123" valign="middle">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Present
                                        Address<font color="#FF0000">*</font></font></strong></font>:
                        </div>
                    </td>
                    <td colspan="2" class="tablecontent1">
                        <table width="87%" height="89" border="0">
                            <tr>
                                <td width="29%"><font color="#000033"><strong><font size="2"
                                                                                    face="Arial, Helvetica, sans-serif">Village/City/Road/Post
                                                Office<font color="#FF0000">*</font></font></strong></font>:
                                </td>
                                <td height="31" colspan="2"><input name="vill_txt1" type="text" id="vill_txt1" value=""
                                                                   size="30"></td>
                            </tr>
                            <tr>
                                <td><strong><font color="#000033" size="2"
                                                  face="Arial, Helvetica, sans-serif">Block</font><font color="#000033"><strong><font
                                                    size="2" face="Arial, Helvetica, sans-serif"><font
                                                        color="#FF0000">*</font></font></strong></font><font
                                            color="#000033" size="2" face="Arial, Helvetica, sans-serif">
                                            :</font></strong></td>
                                <td><select class="listMenu" name="block1" id="block1">
                                        <?php
                                        $sqlstr = "SELECT *FROM block_muni UNION ALL SELECT * FROM municipality";
                                        $rec = executeSqlQuery($sqlstr);
                                        echo "<option value=\"0\">--Select Block--</>";
                                        while ($row = mysql_fetch_array($rec)) {
                                            ?>
                                            <option
                                                value="<?php echo $row["block_muni_nm"]; ?>"><?php echo $row["block_muni_nm"] ?></option>
                                            <?php


                                        }
                                        ?>
                                    </select></td>
                            </tr>
                            <tr>
                                <td><font color="#000033"><strong><font size="2" face="Arial, Helvetica, sans-serif">Sub-Division<font
                                                    color="#FF0000">*</font></font></strong></font>:
                                </td>
                                <td><select class="listMenu" name="sub1" id="sub1">
                                        <?php
                                        $sqlstr = "select * from subdivision";
                                        $rec = executeSqlQuery($sqlstr);
                                        echo "<option value=\"0\">--Select Subdivision--</>";
                                        while ($row = mysql_fetch_array($rec)) {
                                            ?>
                                            <option
                                                value="<?php echo $row["subdiv"]; ?>"><?php echo $row["subdiv"] ?></option>
                                            <?php


                                        }
                                        ?>
                                    </select></td>
                            </tr>
                            <tr>
                                <td><font color="#000033"><strong><font size="2" face="Arial, Helvetica, sans-serif">District<font
                                                    color="#FF0000">*</font></font></strong></font>:
                                </td>
                                <td><input name="dist1" type="text" id="dist1" size="30"></td>
                            </tr>
                            <tr>
                                <td width="29%"><font color="#000033"><strong><font size="2"
                                                                                    face="Arial, Helvetica, sans-serif">Pin<font
                                                    color="#FF0000">*</font></font></strong></font>:
                                </td>
                                <td width="71%"><input name="pin1" type="text" id="pin1" size="6" maxlength="6"></td>
                            </tr>
                            <tr>
                                <td><font color="#000033"><strong><font size="2" face="Arial, Helvetica, sans-serif">State<font
                                                    color="#FF0000">*</font></font></strong></font>:
                                </td>
                                <td><select class="listMenu" name="state1" id="state1">
                                        <?php
                                        $sqlstr = "select * from state";
                                        $rec = executeSqlQuery($sqlstr);
                                        echo "<option value=\"0\">--Select State--</>";
                                        while ($row = mysql_fetch_array($rec)) {
                                            ?>
                                            <option
                                                value="<?php echo $row["StateName"]; ?>"><?php echo $row["StateName"] ?></option>
                                            <?php


                                        }
                                        ?>
                                    </select></td>
                            </tr>
                        </table>
                    </td>
                    <td valign="middle" class="tablecontent1">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Permanent</font><font
                                        size="2" face="Arial, Helvetica, sans-serif">
                                        Address<font color="#FF0000">*</font>:</font></strong></font></div>
                    </td>
                    <td colspan="2" class="tablecontent1">
                        <table width="100%" border="0">
                            <tr>
                                <td width="29%"><font color="#000033"><strong><font size="2"
                                                                                    face="Arial, Helvetica, sans-serif">Village/City/Road/Post
                                                Office<font color="#FF0000">*</font></font></strong></font>:
                                </td>
                                <td colspan="2"><input name="vill_txt2" type="text" id="vill_txt2" value="" size="30">
                                </td>
                            </tr>
                            <tr>
                                <td><strong><font color="#000033" size="2"
                                                  face="Arial, Helvetica, sans-serif">Block</font><font color="#000033"><strong><font
                                                    size="2" face="Arial, Helvetica, sans-serif"><font
                                                        color="#FF0000">*</font></font></strong></font><font
                                            color="#000033" size="2" face="Arial, Helvetica, sans-serif">
                                            :</font></strong></td>
                                <td><select class="listMenu" name="block2" id="block2">
                                        <?php
                                        $sqlstr = "SELECT *FROM block_muni UNION ALL SELECT * FROM municipality";
                                        $rec = executeSqlQuery($sqlstr);
                                        echo "<option value=\"0\">--Select Block--</>";
                                        while ($row = mysql_fetch_array($rec)) {
                                            ?>
                                            <option
                                                value="<?php echo $row["block_muni_nm"]; ?>"><?php echo $row["block_muni_nm"] ?></option>
                                            <?php
                                        }
                                        ?>
                                    </select></td>
                            </tr>
                            <tr>
                                <td><font color="#000033"><strong><font size="2" face="Arial, Helvetica, sans-serif">Sub-Division<font
                                                    color="#FF0000">*</font></font></strong></font>:
                                </td>
                                <td><select class="listMenu" name="sub2" id="sub2">
                                        <?php
                                        $sqlstr = "select * from subdivision";
                                        $rec = executeSqlQuery($sqlstr);
                                        echo "<option value=\"0\">--Select Subdivision--</>";
                                        while ($row = mysql_fetch_array($rec)) {
                                            ?>
                                            <option
                                                value="<?php echo $row["subdiv"]; ?>"><?php echo $row["subdiv"] ?></option>
                                            <?php

                                        }
                                        ?>
                                    </select></td>
                            </tr>
                            <tr>
                                <td><font color="#000033"><strong><font size="2" face="Arial, Helvetica, sans-serif">District<font
                                                    color="#FF0000">*</font></font></strong></font>:
                                </td>
                                <td><input name="dist2" type="text" id="dist2" value="" size="30"></td>
                            </tr>
                            <tr>
                                <td width="19%"><font color="#000033"><strong><font size="2"
                                                                                    face="Arial, Helvetica, sans-serif">Pin<font
                                                    color="#FF0000">*</font></font></strong></font>:
                                </td>
                                <td width="81%"><input name="pin2" type="text" id="pin2" size="6" maxlength="6"></td>
                            </tr>
                            <tr>
                                <td height="32"><font color="#000033"><strong><font size="2"
                                                                                    face="Arial, Helvetica, sans-serif">State<font
                                                    color="#FF0000">*</font></font></strong></font>:
                                </td>
                                <td><select class="listMenu" name="state2" id="state2">
                                        <?php
                                        $sqlstr = "select * from state";
                                        $rec = executeSqlQuery($sqlstr);
                                        echo "<option value=\"0\">--Select State--</>";
                                        while ($row = mysql_fetch_array($rec)) {
                                            ?>
                                            <option
                                                value="<?php echo $row["StateName"]; ?>"><?php echo $row["StateName"] ?></option>
                                            <?php
                                        }
                                        ?>
                                    </select></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="tablecontent1" height="24" colspan="5"><font color="#000033" size="2"
                                                                            face="Arial, Helvetica, sans-serif"><strong>Whether
                                Present Address same as Permanent Address &nbsp;&nbsp; &nbsp;
                                <input name="checkbox1" type="checkbox" id="checkbox1" onClick="updateaddress()">
                            </strong></font></td>
                    <td class="tablecontent1" height="24"></td>
                </tr>
                <tr>
                    <td height="2" class="tablecontent1" colspan="3"><font size="2" face="Arial, Helvetica, sans-serif"><strong>Educational
                                Qualification :</strong></font></td>
                    <td height="2" class="tablecontent1" colspan="3">
                </tr>
                <tr>
                    <td height="163" colspan="6"><font color="#000033"><strong><font size="2"
                                                                                     face="Arial, Helvetica, sans-serif">
                                </font> </strong> </font>
                        <table id="education" width="99%" height="118" border="1" cellpadding="0" cellspacing="0"
                               bordercolor="#000000">
                            <tr>
                                <td width="11%" height="10">
                            <tr bgcolor="#CCFFFF">
                                <td class="tablecontent1">
                                    <div align="center"><font color="#0000CC"><strong><font size="2"
                                                                                            face="Arial, Helvetica, sans-serif">Qualification</font></strong></font>
                                    </div>
                                </td>
                                <td width="19%" class="tablecontent1">
                                    <div align="center"><font color="#0000CC"><strong><font size="2"
                                                                                            face="Arial, Helvetica, sans-serif">Name
                                                    Of Institute/Board/University</font></strong></font></div>
                                </td>
                                <td width="7%" class="tablecontent1">
                                    <div align="center"><strong><font color="#0000CC" size="2"
                                                                      face="Arial, Helvetica, sans-serif">Year of
                                                Passing</font></strong></div>
                                </td>
                                <td width="25%" class="tablecontent1">
                                    <div align="center">
                                        <p><strong><font color="#0000CC" size="2" face="Arial, Helvetica, sans-serif">Subject</font></strong>
                                        </p>
                                    </div>
                                </td>
                                <td width="8%" class="tablecontent1">
                                    <div align="center">
                                        <p><strong><font color="#0000CC" size="2" face="Arial, Helvetica, sans-serif">Total
                                                    Marks</font></strong></p>
                                    </div>
                                </td>
                                <td width="9%" class="tablecontent1">
                                    <div align="center"><strong><font color="#0000CC" size="2"
                                                                      face="Arial, Helvetica, sans-serif">Marks
                                                Obtained</font></strong></div>
                                </td>
                                <td width="9%" class="tablecontent1">
                                    <div align="center"><font color="#0000CC"><strong><font size="2"
                                                                                            face="Arial, Helvetica, sans-serif">%
                                                    Of Marks Obtained</font></strong></font></div>
                                </td>
                                <td width="12%" class="tablecontent1">
                                    <div align="center"><font color="#0000CC"><strong><font size="2"
                                                                                            face="Arial, Helvetica, sans-serif">Grade/Division</font></strong></font>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td height="48" bgcolor="#FFFFFF">
                                    <div align="center">
                                        <select class="listMenu" name="ed001" id="ed001">
                                            <?php
                                            $sqlquali = "select * from qualification";
                                            $exam = executeSqlQuery($sqlquali);
                                            echo "<option value=\"0\">--Select Examination Passed--</>";
                                            while ($row = mysql_fetch_array($exam)) {
                                                echo "<option value=" . $row["desc"] . ">" . $row["desc"] . "</>";

                                            }
                                            ?>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div align="center">
                                        <input name="ed011" type="text" id="ed011" value="" size="40">
                                    </div>
                                </td>
                                <td>
                                    <div align="center">
                                        <input name="ed021" type="text" id="ed021" value="" size="10">
                                    </div>
                                </td>
                                <td>
                                    <div align="center">
                                        <input name="ed031" type="text" id="ed031" value="" size="50">
                                    </div>
                                </td>
                                <td>
                                    <div align="center">
                                        <input name="ed041" type="text" id="ed041" value="" size="8">
                                    </div>
                                </td>
                                <td>
                                    <div align="center">
                                        <input name="ed051" type="text" id="ed051" value="" size="8">
                                    </div>
                                </td>
                                <td>
                                    <div align="center">
                                        <input name="ed061" type="text" id="ed061" value="" size="8">
                                    </div>
                                </td>
                                <td width="12%" colspan="3">
                                    <div align="center">
                                        <input name="ed071" type="text" id="ed071" value="" size="8">
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <p>
                            <input type="hidden" name="eduCount" id="eduCount" value="1">
                            <input type="button" name="button" class="button" id="button" value="Add more"
                                   onClick="addRow();">
                            <strong><font color="#FF0000" size="1"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;( * You can
                                    add Maximum 6 rows)</font></strong>
                            <input type="button" name="button4" class="button" id="button4" value="Delete Row"
                                   onClick="deleteRowFromEducation();">
                        </p></td>
                </tr>
                <tr>
                    <td height="205" colspan="6">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" bordercolor="#000000">
                            <tr>
                                <td width="10%" class="tablecontent1"><font size="2"
                                                                            face="Arial, Helvetica, sans-serif"><strong>Experience(If
                                            Any):-</strong></font></td>
                                <td class="tablecontent1" height="60">&nbsp;</td>
                            </tr>
                            <tr>
                                <td height="163" colspan="5"><font color="#000033"><strong><font size="2"
                                                                                                 face="Arial, Helvetica, sans-serif">
                                            </font> </strong> </font>
                                    <table id="experience" width="100%" height="118" border="1" cellpadding="0"
                                           cellspacing="0" bordercolor="#000000">
                                        <tr>
                                            <td width="19%" height="10">
                                        <tr bgcolor="#CCFFFF">
                                            <td class="tablecontent1">
                                                <div align="center"><strong><font color="#0000CC" size="2"
                                                                                  face="Arial, Helvetica, sans-serif">Name
                                                            of Project</font></strong></div>
                                            </td>
                                            <td width="19%" class="tablecontent1">
                                                <div align="center"><strong><font color="#0000CC" size="2"
                                                                                  face="Arial, Helvetica, sans-serif">Project
                                                            Activities</font></strong></div>
                                            </td>
                                            <td width="10%" class="tablecontent1">
                                                <div align="center">
                                                    <p><strong><font color="#0000CC" size="2"
                                                                     face="Arial, Helvetica, sans-serif">Name of Post in
                                                                Project </font></strong><strong><font color="#0000CC"
                                                                                                      size="2"
                                                                                                      face="Arial, Helvetica, sans-serif">(Designation)</font></strong>
                                                    </p>
                                                </div>
                                            </td>
                                            <td width="14%" class="tablecontent1">
                                                <div align="center">
                                                    <p><strong><font color="#0000CC" size="2"
                                                                     face="Arial, Helvetica, sans-serif">Organization
                                                                Conducting the project</font></strong></p>
                                                </div>
                                            </td>
                                            <td width="7%" align="center" valign="middle" class="tablecontent1">
                                                <div align="center">
                                                    <p><strong><font color="#0000CC" size="2"
                                                                     face="Arial, Helvetica, sans-serif">From(dd/mm/yyyy)</font></strong>
                                                    </p>
                                                </div>
                                            </td>
                                            <td width="8%" class="tablecontent1">
                                                <div align="center">
                                                    <p><font color="#0000CC"><strong><font size="2"
                                                                                           face="Arial, Helvetica, sans-serif">To</font></strong></font><strong><font
                                                                color="#0000CC" size="2"
                                                                face="Arial, Helvetica, sans-serif">(dd/mm/yyyy)</font></strong>
                                                    </p>
                                                </div>
                                            </td>
                                            <td colspan="2" class="tablecontent1">
                                                <div align="center">
                                                    <p><strong><font color="#0000CC" size="2"
                                                                     face="Arial, Helvetica, sans-serif">Duration of
                                                                work in month</font></strong></p>
                                                </div>
                                            </td>
                                            <td width="15%" colspan="2" class="tablecontent1">
                                                <div align="center"><strong><font color="#0000CC" size="2"
                                                                                  face="Arial, Helvetica, sans-serif">Remarks</font></strong>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="48" bgcolor="#FFFFFF">
                                                <div align="center">
                                                    <input name="exp001" type="text" id="exp001" value="" size="40">
                                                </div>
                                            </td>
                                            <td>
                                                <div align="center">
                                                    <input name="exp011" type="text" id="exp011" value="" size="40">
                                                </div>
                                            </td>
                                            <td>
                                                <div align="center">
                                                    <input name="exp021" type="text" id="exp021" value="" size="30">
                                                </div>
                                            </td>
                                            <td>
                                                <div align="center">
                                                    <input name="exp031" type="text" id="exp031" value="" size="30">
                                                </div>
                                            </td>
                                            <td>
                                                <div align="center">
                                                    <input type="text" name="exp041" id="exp041">
                                                </div>
                                            </td>
                                            <td>
                                                <div align="center">
                                                    <input name="exp051" type="text" id="exp051" value="">
                                                </div>
                                            </td>
                                            <td colspan="2">
                                                <div align="center">
                                                    <input name="exp061" type="text" id="exp061" value="" size="15">
                                                </div>
                                            </td>
                                            <td width="15%" colspan="2">
                                                <div align="center">
                                                    <input name="exp071" type="text" id="exp071" value="" size="25">
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                    <p>
                                        <input type="hidden" name="expCount" id="expCount" value="1">
                                        <input type="button" name="button" class="button" id="button" value="Add more"
                                               onClick="addRowOnExp();">
                                        <strong><font color="#FF0000" size="1"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;(
                                                * You can add Maximum 4 rows)</font></strong>
                                        <input type="button" name="button3" class="button" id="button3"
                                               value="Delete Row" onClick="deleteRowFromExp();">
                                    </p></td>
                            </tr>
                            <tr>
                                <td height="29" colspan="5">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                           bordercolor="#000000">
                                        <tr>
                                            <td width="24%" class="tablecontent1"><font size="2"
                                                                                        face="Arial, Helvetica, sans-serif">
                                                    <strong>Computer knowledge (MS Office and Internet)
                                                        :-</strong></font></td>
                                            <td width="5%" class="tablecontent1"><label>
                                                    <input type="radio" name="computer" value="Y" id="computer_0"
                                                           onClick="showTable(1);">
                                                    <font size="2" face="Arial, Helvetica, sans-serif">
                                                        Yes</font></label></td>
                                            <td width="71%" class="tablecontent1"><label>
                                                    <input name="computer" type="radio" id="computer_1"
                                                           onClick="showTable(2);" value="N" checked="CHECKED">
                                                    <font size="2" face="Arial, Helvetica, sans-serif">No</font></label>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <tr style="display:none" id="compExp">
                                <td height="127" colspan="5"><font color="#000033"><strong><font size="2"
                                                                                                 face="Arial, Helvetica, sans-serif">
                                            </font> </strong> </font>
                                    <table id="expComputer" width="100%" height="34" border="1" cellpadding="0"
                                           cellspacing="0" bordercolor="#000000">
                                        <tr width="100%" height="15">
                                            <td width="20%" height="10">
                                        <tr bgcolor="#CCFFFF">
                                            <td class="tablecontent1">
                                                <div align="center"><strong><font color="#0000CC" size="2"
                                                                                  face="Arial, Helvetica, sans-serif">Name
                                                            of Course</font></strong></div>
                                            </td>
                                            <td width="30%" class="tablecontent1">
                                                <div align="center"><strong><font color="#0000CC" size="2"
                                                                                  face="Arial, Helvetica, sans-serif">Subject
                                                            covered</font></strong></div>
                                            </td>
                                            <td width="10%" class="tablecontent1">
                                                <div align="center">
                                                    <p><strong><font color="#0000CC" size="2"
                                                                     face="Arial, Helvetica, sans-serif">Year of
                                                                passing </font></strong></p>
                                                </div>
                                            </td>
                                            <td width="30%" class="tablecontent1">
                                                <div align="center">
                                                    <p><strong><font color="#0000CC" size="2"
                                                                     face="Arial, Helvetica, sans-serif">Institute</font></strong>
                                                    </p>
                                                </div>
                                            </td>
                                            <td width="10%" align="center" valign="middle" class="tablecontent1">
                                                <div align="center">
                                                    <p><strong><font color="#0000CC" size="2"
                                                                     face="Arial, Helvetica, sans-serif">Course
                                                                duration</font></strong></p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr width="100%">
                                            <td height="26" bgcolor="#FFFFFF">
                                                <div align="center">
                                                    <input name="expC001" type="text" id="expC001" value="" size="28">
                                                </div>
                                            </td>
                                            <td>
                                                <div align="center">
                                                    <input name="expC011" type="text" id="expC011" value="" size="28">
                                                </div>
                                            </td>
                                            <td>
                                                <div align="center">
                                                    <input name="expC021" type="text" id="expC021" value="" size="20">
                                                </div>
                                            </td>
                                            <td>
                                                <div align="center">
                                                    <input name="expC031" type="text" id="expC031" value="" size="19">
                                                </div>
                                            </td>
                                            <td>
                                                <div align="center">
                                                    <input name="expC041" type="text" id="expC041" value="" size="15">
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                    <p>
                                        <input type="hidden" name="compCount" id="compCount" value="1">
                                        <input type="button" name="button" class="button" id="button" value="Add more"
                                               onClick="addRowOnExpComputer();">
                                        <strong><font color="#FF0000" size="1"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;(
                                                * You can add Maximum 2 rows)</font></strong>
                                        <input type="button" class="button" name="button2" id="button2"
                                               value="Delete Row" onClick="deleteRowFromComp();">
                                    </p></td>
                            </tr>
                            <tr>
                                <td class="tablecontent2"><font size="2" face="Arial, Helvetica, sans-serif"><strong>PIN<font
                                                color="#FF0000">*</font>:-</strong></font></td>
                                <td class="tablecontent2" height="60" colspan="4"><input name="pin" id="pin"
                                                                                         type="password" size="4"
                                                                                         maxlength="4" value="">
                                    <strong><font color="#FF0000" size="1">(Please Specify 4 digit
                                            PIN number for uploading Photograph &amp; Signature)</font></strong></td>
                            </tr>
                            <tr>
                                <td height="90" colspan="5" class="tablecontent2">
                                    <div align="justify"><font color="#000033"><strong><font size="2">I
                                                    hereby declare that I fulfil the eligibility criteria for the
                                                    post in terms of educational qualifications (including percentage
                                                    of marks obtained in the examination and certificate course),
                                                    experience, age, etc. and I am aware that mere calling for Test
                                                    or Interview shall not entail me as fulfilling the conditions
                                                    of eligibility. I certify that the information given in the
                                                    application is correct and complete to the best of my knowledge
                                                    and nothing has been concealed/distorted. I understand that
                                                    if at any time I am found to have concealed/distorted any material
                                                    information my candidature/appointment is liable to summary
                                                    termination without notice or compensation.
                                                    <input name="accp_decl" type="checkbox" id="accp_decl">
                                                </font></strong></font></div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="28" colspan="6" align="right">
                        <div align="center"><strong><font color="#000033" size="2" face="Arial, Helvetica, sans-serif">
                                    <input type="submit" name="Submit" value="Save" Onclick="validate()" class="button">
                                    <input name="myear" id="myear" value="1969" type="hidden">
                                    <input name="Exit" type="button" id="Exit" value="Exit" class="button"
                                           onClick="window.close();">
                                </font></strong></div>
                        <div align="center"><strong><font color="#000033" size="2" face="Arial, Helvetica, sans-serif">
                                </font></strong></div>
                    </td>
                </tr>
                <tr>
                    <td width="144"></td>
                    <td height="2" colspan="2">
                </tr>
            </table>
        </div>
        <table width="108%">
            <tr>
                <td class="tablecontent1" height="24">
                    <div align="center"><span class="link1"><font color="#00a2cf">
                                Design and Develped by National Informatics Centre Purba Medinipur West Bengal and
                                Content Provided By District Administration Purba Medinipur
                            </font></span>
                    </div>
                </td>
            </tr>
        </table>
    </form>
    </body>
    </html>
    <?php
}

function DisplayDefaultForm()
{
    application_Register();
}

function GetappId($post)
{
    $slno = "";
    $sqlstr = "select * from post where PostCode = '" . Remove_SQLi($post) . "'";
    $maxno = executeSqlQuery($sqlstr);
    if ($row = mysql_fetch_array($maxno)) {
        $slno = $row["abbr"] . "/" . $row["SlNo"];
        $str = "update post set SlNo = SlNo + 1 where PostCode = '" . Remove_SQLi($post) . "'";
        executeSqlQuery($str);

    } else {
        echo "<script type=\"text/javascript\">alert(\"ERROR :: Registration No not Set in Database. Please call admin\")</script>";
    }
    return $slno;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $post = trim($_POST["post"]);
    $blockapp = trim($_POST["block3"]);
    $subdivapp = trim($_POST["subdiv"]);
    $name = trim($_POST["name"]);
    $father = trim($_POST["father"]);
    $dob = trim($_POST["seldobday"]) . "/" . trim($_POST["seldobmon"]) . "/" . trim($_POST["seldobyear"]);
    $age = trim($_POST["txtage"]);
    $nationality = trim($_POST["nationality"]);
    $sex = trim($_POST["sex"]);
    $compKnldge = trim($_POST["computer"]);
    $category = trim($_POST["category"]);
    $eduCount = trim($_POST["eduCount"]);
    $expCount = trim($_POST["expCount"]);
    $compCount = trim($_POST["compCount"]);

    $vill_txt1 = trim($_POST["vill_txt1"]);
    $pin1 = trim($_POST["pin1"]);
    $block1 = trim($_POST["block1"]);
    $sub1 = trim($_POST["sub1"]);
    $dist1 = trim($_POST["dist1"]);
    $state1 = trim($_POST["state1"]);

    $vill_txt2 = trim($_POST["vill_txt2"]);
    $pin2 = trim($_POST["pin2"]);
    $block2 = trim($_POST["block2"]);
    $sub2 = trim($_POST["sub2"]);
    $dist2 = trim($_POST["dist2"]);
    $state2 = trim($_POST["state2"]);
    $phone = trim($_POST["phone"]);
    $email = trim($_POST["email"]);
    $photo = "";


    $ed81 = trim($_POST["ed81"]);
    $pin = trim($_POST["pin"]);

    $id = GetappId($post);
    $con = connect();
    $str = "INSERT INTO applicant (appid,post, blockapp, subapp, aname, nationality, father, dob, age_yr, sex, category, mobile, pre_address, pre_block, pre_subdiv, pre_dist, pre_pin, pre_state, perm_address, perm_block, perm_subdiv, perm_dist, perm_pin, perm_state, email, pin, compknowledge, photo) VALUES  ('" . $id . "','" . mysql_real_escape_string($post) . "','" . mysql_real_escape_string($blockapp) . "','" . mysql_real_escape_string($subdivapp) . "','" . mysql_real_escape_string($name) . "','" . mysql_real_escape_string($nationality) . "','" . mysql_real_escape_string($father) . "',STR_TO_DATE('" . $dob . "',\"%d/%m/%Y\")," . mysql_real_escape_string($age) . ",'" . mysql_real_escape_string($sex) . "','" . mysql_real_escape_string($category) . "','" . mysql_real_escape_string($phone) . "','" . mysql_real_escape_string($vill_txt1) . "','" . mysql_real_escape_string($block1) . "','" . mysql_real_escape_string($sub1) . "','" . mysql_real_escape_string($dist1) . "','" . mysql_real_escape_string($pin1) . "','" . mysql_real_escape_string($state1) . "','" . mysql_real_escape_string($vill_txt2) . "','" . mysql_real_escape_string($block2) . "','" . mysql_real_escape_string($sub2) . "','" . mysql_real_escape_string($dist2) . "','" . mysql_real_escape_string($pin2) . "','" . mysql_real_escape_string($state2) . "','" . mysql_real_escape_string($email) . "','" . mysql_real_escape_string($pin) . "','" . mysql_real_escape_string($compKnldge) . "','" . mysql_real_escape_string($photo) . "')";

    disconnect($con);
    $record = executeSqlQuery($str);
    if ($record == False) {
        DisplayDefaultForm(NULL);

        echo "<script type=\"text/javascript\">alert(\"Problem Occures During Saving Of Application.Please Try Once Again \")</script>";

    } else {
        for ($i = 1; $i <= $eduCount; $i++) {
            $ed01 = trim($_POST["ed00" . $i]);
            $ed02 = trim($_POST["ed01" . $i]);
            $ed03 = trim($_POST["ed02" . $i]);
            $ed04 = trim($_POST["ed03" . $i]);
            $ed05 = trim($_POST["ed04" . $i]);
            $ed06 = trim($_POST["ed05" . $i]);
            $ed07 = trim($_POST["ed06" . $i]);
            $ed08 = trim($_POST["ed07" . $i]);
            $con = connect();
            $sqledu = "INSERT INTO edu_quali(appid, exam,institute,year,sub,fullmarks,marksobtain, percentage, grade) VALUES ( '" . $id . "', '" . mysql_real_escape_string($ed01) . "', '" . mysql_real_escape_string($ed02) . "','" . mysql_real_escape_string($ed03) . "', '" . mysql_real_escape_string($ed04) . "','" . mysql_real_escape_string($ed05) . "', '" . mysql_real_escape_string($ed06) . "',
	 '" . mysql_real_escape_string($ed07) . "', '" . mysql_real_escape_string($ed08) . "')";
            disconnect($con);
            executeSqlQuery($sqledu);

        }
        for ($j = 1; $j <= $expCount; $j++) {
            $exp01 = trim($_POST["exp00" . $j]);
            $exp02 = trim($_POST["exp01" . $j]);
            $exp03 = trim($_POST["exp02" . $j]);
            $exp04 = trim($_POST["exp03" . $j]);
            $exp05 = trim($_POST["exp04" . $j]);
            $exp06 = trim($_POST["exp05" . $j]);
            $exp07 = trim($_POST["exp06" . $j]);
            $exp08 = trim($_POST["exp07" . $j]);
            $con = connect();
            $sqlexp = "INSERT INTO experience (appid, project, activity, designation, organization, fromdate, todate, duration, remarks) VALUES ('" . $id . "', '" . mysql_real_escape_string($exp01) . "', '" . mysql_real_escape_string($exp02) . "','" . mysql_real_escape_string($exp03) . "', '" . mysql_real_escape_string($exp04) . "',STR_TO_DATE('" . $exp05 . "',\"%d/%m/%Y\"), STR_TO_DATE('" . $exp06 . "',\"%d/%m/%Y\"), '" . mysql_real_escape_string($exp07) . "', '" . mysql_real_escape_string($exp08) . "')";
            disconnect($con);
            executeSqlQuery($sqlexp);

        }
        for ($k = 1; $k <= $compCount; $k++) {
            $comp01 = trim($_POST["expC00" . $k]);
            $comp02 = trim($_POST["expC01" . $k]);
            $comp03 = trim($_POST["expC02" . $k]);
            $comp04 = trim($_POST["expC03" . $k]);
            $comp05 = trim($_POST["expC04" . $k]);
            $con = connect();
            $sqlcomp = "INSERT INTO compknowledge (appid, course, subject, year, institute, duration) VALUES('" . $id . "', '" . mysql_real_escape_string($comp01) . "', '" . mysql_real_escape_string($comp02) . "','" . mysql_real_escape_string($comp03) . "', '" . mysql_real_escape_string($comp04) . "','" . mysql_real_escape_string($comp05) . "')";
            disconnect($con);
            executeSqlQuery($sqlcomp);

        }


        $pin = md5(md5($pin) + 111111);
        header("Location: success.php?appid=$id&pin=$pin&post=$post");
        exit();
    }
} else {
    DisplayDefaultForm(NULL);
}
?>
<script>
    function showBlock() {

        var sdid = document.getElementById("subdiv").value;

        if (sdid == "") {
            document.getElementById("block").innerHTML = "";
            return;
        } else {
            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById("block").innerHTML = xmlhttp.responseText;
                }
            }
            xmlhttp.open("GET", "getblock.php?sdid=" + sdid, true);
            xmlhttp.send();
        }
    }
</script>

<script>
    function addRow() {
        var table = document.getElementById("education");
        var lastRow = table.rows.length;
        var len = lastRow - 2;

        var myArray = new Array(len);
        for (var i = 0; i < len; i++) {

            myArray[i] = new Array(8);
            for (j = 0; j < 8; j++) {
                myArray[i][j] = document.getElementById("ed0".concat(String(j), String(i + 1))).value;

            }
        }
        if ((lastRow - 2) < 7) {
            document.getElementById("eduCount").value = (lastRow - 1);

            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                    document.getElementById("education").innerHTML = document.getElementById("education").innerHTML + xmlhttp.responseText;

                    for (var i = 0; i < len; i++) {

                        for (j = 0; j < 8; j++) {
                            document.getElementById("ed0".concat(String(j), String(i + 1))).value = myArray[i][j];

                        }
                    }
                }
            }
            xmlhttp.open("GET", "addRowOnQuali.php?rowNo=" + (lastRow - 2), true);
            xmlhttp.send();
        }
        else {
            alert("Maximum row reached!");
        }
    }

</script>
<script>
    function addRowOnExp() {
        var table = document.getElementById("experience");
        var lastRow = table.rows.length;
        var len = lastRow - 2;

        var myArray = new Array(len);
        for (var i = 0; i < len; i++) {

            myArray[i] = new Array(8);
            for (j = 0; j < 8; j++) {
                myArray[i][j] = document.getElementById("exp0".concat(String(j), String(i + 1))).value;

            }
        }


        if ((lastRow - 2) < 5) {

            document.getElementById("expCount").value = (lastRow - 1);
            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                    document.getElementById("experience").innerHTML = document.getElementById("experience").innerHTML + xmlhttp.responseText;
                    for (var i = 0; i < len; i++) {

                        for (j = 0; j < 8; j++) {
                            document.getElementById("exp0".concat(String(j), String(i + 1))).value = myArray[i][j];

                        }
                    }
                }
            }
            xmlhttp.open("GET", "addRowOnExp.php?rowNo=" + (lastRow - 2), true);
            xmlhttp.send();
        }
        else {
            alert("Maximum row reached!");
        }


    }

</script>
<script>
    function addRowOnExpComputer() {
        var table = document.getElementById("expComputer");
        var lastRow = table.rows.length;
        if ((lastRow - 2) < 3) {
            document.getElementById("compCount").value = (lastRow - 1);
            var len = lastRow - 2;

            var myArray = new Array(len);
            for (var i = 0; i < len; i++) {

                myArray[i] = new Array(5);
                for (j = 0; j < 5; j++) {
                    myArray[i][j] = document.getElementById("expC0".concat(String(j), String(i + 1))).value;

                }
            }

            if (window.XMLHttpRequest) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {
                // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                    document.getElementById("expComputer").innerHTML = document.getElementById("expComputer").innerHTML + xmlhttp.responseText;
                    for (var i = 0; i < len; i++) {

                        for (j = 0; j < 5; j++) {
                            document.getElementById("expC0".concat(String(j), String(i + 1))).value = myArray[i][j];

                        }
                    }
                }
            }
            xmlhttp.open("GET", "addRowOnExpComputer.php?rowNo=" + (lastRow - 2), true);
            xmlhttp.send();
        }
        else {
            alert("Maximum row reached!");
        }
    }

</script>
<script type="text/javascript">
    function showTable(radioCheck) {

        if (radioCheck == 1) {
            document.getElementById("compExp").style.display = "table";
        }
        else {
            document.getElementById("compExp").style.display = "none";
        }
    }

</script>
<script>
    function deleteRowFromComp() {
        var table = document.getElementById("expComputer");
        var lastRow = table.rows.length;

        if (lastRow > 2) {
            document.getElementById("expComputer").deleteRow(lastRow - 1);
            document.getElementById("compCount").value = (lastRow - 3);
        }
    }
    function deleteRowFromExp() {
        var table = document.getElementById("experience");
        var lastRow = table.rows.length;

        if (lastRow > 2) {
            document.getElementById("experience").deleteRow(lastRow - 1);
            document.getElementById("expCount").value = (lastRow - 3);
        }
    }
    function deleteRowFromEducation() {
        var table = document.getElementById("education");
        var lastRow = table.rows.length;

        if (lastRow > 3) {
            document.getElementById("education").deleteRow(lastRow - 1);
            document.getElementById("eduCount").value = (lastRow - 3);
        }
    }


</script>
<script>
    function getYearList() {
        var select = document.getElementById("seldobyear");
        var str = document.getElementById("category").value;

        if (str.length == 0) {
            document.getElementById("txtHint").innerHTML = "";
            return;
        } else {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById("seldobyear").innerHTML = xmlhttp.responseText;
                    //select.appendChild(xmlhttp.responseText);
                }
            }
            xmlhttp.open("GET", "getYearList.php?q=" + str, true);
            xmlhttp.send();
        }
    }
</script>


