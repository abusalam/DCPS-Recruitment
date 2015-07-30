<?php
include("connection.php");
function application_Register()
{
    ?>
    <html>
    <head>
        <title>Application Registration Form</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <script language="javascript" type="text/javascript" src="JavaScript/browser.js"></script>
        <script language="javascript" type="text/javascript" src="JavaScript/reg_valid.js"></script>
        <script language="javascript" type="text/javascript">
            var AgeAsOfDate = '01/01/2015';
            var AgeMinDate1 = '01/01/1997';
            var AgeMaxDate1 = '01/01/1980';
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
                else if (trim(document.getElementById('category').value) == '0') {
                    alert("Please Select Category");
                    document.getElementById('category').focus();
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
                    alert("Please enter Present Address/ Village / City / Road / House No etc.");
                    document.getElementById('vill_txt1').focus();
                    return false;
                }
                else if (trim(document.getElementById('block1').value) == "0") {
                    alert("Please enter Present Address Block ");
                    document.getElementById('block1').focus();
                    return false;
                }
                else if (trim(document.getElementById('sub1').value) == "0") {
                    alert("Please enter Present Address Sub-Division. ");
                    document.getElementById('sub1').focus();
                    return false;
                }
                else if (trim(document.getElementById('dist1').value) == "") {
                    alert("Please enter Present Address District. ");
                    document.getElementById('dist1').focus();
                    return false;
                }
                else if (trim(document.getElementById('pin1').value) == "" || !isInteger(trim(document.getElementById('pin1').value)) || (trim(document.getElementById('pin1').value)).length != 6) {
                    alert("Please Enter Correct Pin for Present Address");
                    document.getElementById('pin1').focus();
                    return false;
                }
                else if (trim(document.getElementById('state1').value) == "0") {
                    alert("Please enter State for Present Address");
                    document.getElementById('state1').focus();
                    return false;
                }
                else if (trim(document.getElementById('vill_txt2').value) == "") {
                    alert("Please enter Permanent Address/ Village / City / Road / House No etc. ");
                    document.getElementById('vill_txt2').focus();
                    return false;
                }
                else if (trim(document.getElementById('block2').value) == "0") {
                    alert("Please enter Permanent Address Block. ");
                    document.getElementById('block2').focus();
                    return false;
                }
                else if (trim(document.getElementById('sub2').value) == "0") {
                    alert("Please enter Permanent Address Sub-Division. ");
                    document.getElementById('sub2').focus();
                    return false;
                }
                else if (trim(document.getElementById('dist2').value) == "") {
                    alert("Please enter Permanent Address District. ");
                    document.getElementById('dist2').focus();
                    return false;
                }
                else if (trim(document.getElementById('pin2').value) == "" || !isInteger(trim(document.getElementById('pin2').value)) || (trim(document.getElementById('pin2').value)).length != 6) {
                    alert("Please Enter Correct Pin for Permanent Address");
                    document.getElementById('pin2').focus();
                    return false;
                }
                else if (trim(document.getElementById('state2').value) == "0") {
                    alert("Please enter State for Permanent Address");
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
                    alert("Please Enter Madhyamik passing Year");
                    document.getElementById('ed02').focus();
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
                    alert("Please Enter Higher Secondary Correct passing Year ");
                    document.getElementById('ed12').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed13').value) == "") {
                    alert("Please enter Higher Secondary Total Marks ");
                    document.getElementById('ed13').focus();
                    return false;
                }
                else if (!isInteger(trim(document.getElementById('ed13').value))) {
                    alert("Please Enter Correct Higher Secondary Total Marks");
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
                    alert("Please enter Higher Secondary Institution Name ");
                    document.getElementById('ed21').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed22').value) == "") {
                    alert("Please enter Higher Secondary Passing Year");
                    document.getElementById('ed22').focus();
                    return false;
                }
                else if (!isInteger(trim(document.getElementById('ed22').value)) || (trim(document.getElementById('ed22').value)).length != 4) {
                    alert("Please Enter Higher Secondary Correct passing Year ");
                    document.getElementById('ed22').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed23').value) == "") {
                    alert("Please enter Higher Secondary Total Marks ");
                    document.getElementById('ed23').focus();
                    return false;
                }
                else if (!isInteger(trim(document.getElementById('ed23').value))) {
                    alert("Please Enter Correct Higher Secondary Total Marks");
                    document.getElementById('ed23').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed24').value) == "") {
                    alert("Please enter Higher Secondary Marks ");
                    document.getElementById('ed24').focus();
                    return false;
                }
                else if (isNaN(document.getElementById('ed24').value)) {
                    alert("Please enter Correct Higher Secondary Marks");
                    document.getElementById('ed24').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed25').value) == "") {
                    alert("Please enter Higher Secondary percentage ");
                    document.getElementById('ed25').focus();
                    return false;
                }
                else if (parseFloat(document.getElementById('ed25').value) < 0 || parseFloat(document.getElementById('ed25').value) > 100) {
                    alert("Please enter Correct Higher Secondary Percentage ");
                    document.getElementById('ed25').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed26').value) == "") {
                    alert("Please enter Higher Secondary Grade");
                    document.getElementById('ed26').focus();
                    return false;
                }
                else if (trim(document.getElementById('ed81').value) == "") {
                    alert("Please enter Experience Details");
                    document.getElementById('ed81').focus();
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
                        <div align="left">
                            <img class="logo" src="image/Emblem_of_India.png" width="70">

                            <div class="site-head">
                                <h2>Government of West Bengal</h2>
                                <strong>Office of the District Magistrate</strong><br/>
                                <span>District Social Welfare :: District Project Management Unit</span><br/>
                                <span>Paschim Medinipur</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>

            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td width="9"><img src="image/h_curve.gif" height="27" width="9"></td>
                    <td class="header" bgcolor="#E9FAFE" width="1800">Recruitment For District Child Protection Unit
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
                    <TD class="tablecontent1" height="41" colspan="4">
                        <div align="center"><strong><font color="#FFFF00" size="5" face="Monotype Corsiva"><em><font
                                            color="#000000">Post
                                            Applied For <font color="#FF0000">*</font></font><font
                                            color="#FF0000">:</font><font color="#3399CC">
                                            <select name="post" id="post">
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
                    <TD class="tablecontent1" height="41" colspan="4">
                        <div align="center"></div>
                    </TD>
                </tr>
                <tr>
                    <td width="132" height="2">
                <tr>
                    <td class="tablecontent1" width="132" height="34">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Name
                                        <font color="#CC0000">*</font>:</font></strong></font></div>
                    </td>
                    <td class="tablecontent1" width="393">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">
                                        <input name="name" id="name" type="text" size="25" value="">
                                        <br>
                                    </font></strong></font></div>
                    </td>
                    <td class="tablecontent1" width="180">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Father's/Husband's
                                        Name <font color="#FF0000">*</font>:</font></strong></font></div>
                    </td>
                    <td class="tablecontent1" width="364">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">
                                        <input name="father" id="father" type="text" size="25" value="">
                                        <br>
                                    </font></strong></font></div>
                    </td>
                </tr>
                <tr>
                    <td class="tablecontent1" height="34">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Category</font><font
                                        size="2" face="Arial, Helvetica, sans-serif"> <font
                                            color="#CC0000">*</font>:</font></strong></font></div>
                    </td>
                    <td class="tablecontent1"><label for="category"></label>
                        <select name="category" id="category">
                            <?php
                            $sqlstr = "select * from cast";
                            $rec = executeSqlQuery($sqlstr);
                            echo "<option value=\"0\">--Select Category--</>";
                            while ($row = mysql_fetch_array($rec)) {
                                echo "<option value=" . $row["Code"] . ">" . $row["Desc"] . "</>";

                            }
                            ?>
                        </select></td>
                    <td class="tablecontent1">&nbsp;</td>
                    <td class="tablecontent1">&nbsp;</td>
                </tr>
                <tr>
                    <td class="tablecontent2" height="36">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Nationality</font><font
                                        size="2" face="Arial, Helvetica, sans-serif"><font
                                            color="#FF0000">*</font>:</font></strong></font></div>
                    </td>
                    <td class="tablecontent2">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">
                                        <input name="nationality" readonly type="text" size="6" value="Indian">
                                        &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                                        &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;</font></strong></font></div>
                    </td>
                    <td class="tablecontent2">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Date
                                        Of Birth<font color="#FF0000">*</font>:</font></strong></font></div>
                    </td>
                    <td colspan="3" class="tablecontent2"><select class="listMenu" size="1" name="seldobday"
                                                                  id="seldobday" onChange="setAge()">
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
                        </select> <select class="listMenu" size="1" name="seldobmon" id="seldobmon" onChange="setAge()">
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
                            <option value="1997">1997</option>
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
                        </select></td>
                </tr>
                <tr>
                    <td class="tablecontent1" height="32">
                        <div align="left"><font color="#000033" size="2" face="Arial, Helvetica, sans-serif"><strong>Gender<font
                                        color="#FF0000">*</font>:</strong></font></div>
                    </td>
                    <td colspan="2" class="tablecontent1">
                        <div align="left"><strong><font color="#FFFF00" size="5" face="Monotype Corsiva"><em><font
                                            color="#3399CC">
                                            <select class="listMenu" name="sex" id="sex">
                                                <?php
                                                $sqlstr = "select * from sex";
                                                $rec = executeSqlQuery($sqlstr);
                                                echo "<option value=\"0\">--Select Sex--</>";
                                                while ($row = mysql_fetch_array($rec)) {
                                                    echo "<option value=" . $row["Code"] . ">" . $row["Gender"] . "</>";

                                                }
                                                ?>
                                            </select>
                                        </font></em></font> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                                    color="#000033"><strong><font size="2" face="Arial, Helvetica, sans-serif"> <font
                                                color="#000033"><strong>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                                                    &nbsp; </strong></font></font></strong></font></strong></div>
                    </td>
                    <td class="tablecontent1"><font size="2" face="Arial, Helvetica, sans-serif"><strong><font
                                    color="#000033">Age
                                    as on (1st January, 2015)<font color="#FF0000">*</font>:</font></strong></font>
                        <input value="" readonly="readOnly" size="3" name="txtage" id="txtage"></td>
                </tr>
                <tr>
                    <td class="tablecontent1" height="32">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Email:</font></strong></font>
                        </div>
                    </td>
                    <td class="tablecontent1"><font color="#000033"><strong><font size="2"
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
                    <td class="tablecontent1"><font color="#000033"><strong><font color="#000033"><strong><font size="2"
                                                                                                                face="Arial, Helvetica, sans-serif"><font
                                                color="#000033"><strong><font color="#000033"><strong><font size="2"
                                                                                                            face="Arial, Helvetica, sans-serif">
                                                                <input name="phone" type="text" id="phone" value=""
                                                                       size="10" maxlength="10">
                                                            </font></strong></font></strong></font></font></strong></font></strong></font>
                    </td>
                </tr>
                <tr>
                    <td class="tablecontent2" height="123" valign="middle">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Present
                                        Address<font color="#FF0000">*</font></font></strong></font>:
                        </div>
                    </td>
                    <td class="tablecontent2">
                        <table width="96%" height="89" border="0">
                            <tr>
                                <td width="45%"><font color="#000033"><strong><font size="2"
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
                                        $sqlstr = "select * from block_muni";
                                        $rec = executeSqlQuery($sqlstr);
                                        echo "<option value=\"0\">--Select Block--</>";
                                        while ($row = mysql_fetch_array($rec)) {
                                            echo "<option value=" . $row["block_municd"] . ">" . $row["block_muni_nm"] . "</>";

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
                                            echo "<option value=" . $row["sdiv_cd"] . ">" . $row["subdiv"] . "</>";

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
                                <td width="45%"><font color="#000033"><strong><font size="2"
                                                                                    face="Arial, Helvetica, sans-serif">Pin<font
                                                    color="#FF0000">*</font></font></strong></font>:
                                </td>
                                <td width="55%"><input name="pin1" type="text" id="pin1" size="6" maxlength="6"></td>
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
                                            echo "<option value=" . $row["Code"] . ">" . $row["StateName"] . "</>";

                                        }
                                        ?>
                                    </select></td>
                            </tr>
                        </table>
                    </td>
                    <td valign="middle" class="tablecontent2">
                        <div align="left"><font color="#000033"><strong><font size="2"
                                                                              face="Arial, Helvetica, sans-serif">Permanent</font><font
                                        size="2" face="Arial, Helvetica, sans-serif">
                                        Address<font color="#FF0000">*</font>:</font></strong></font></div>
                    </td>
                    <td class="tablecontent2">
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
                                        $sqlstr = "select * from block_muni";
                                        $rec = executeSqlQuery($sqlstr);
                                        echo "<option value=\"0\">--Select Block--</>";
                                        while ($row = mysql_fetch_array($rec)) {
                                            echo "<option value=" . $row["block_municd"] . ">" . $row["block_muni_nm"] . "</>";
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
                                            echo "<option value=" . $row["sdiv_cd"] . ">" . $row["subdiv"] . "</>";

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
                                            echo "<option value=" . $row["Code"] . ">" . $row["StateName"] . "</>";
                                        }
                                        ?>
                                    </select></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="tablecontent1" height="24" colspan="4"><font color="#000033" size="2"
                                                                            face="Arial, Helvetica, sans-serif"><strong>Whether
                                Present Address same as Permanent Address &nbsp;&nbsp; &nbsp;
                                <input name="checkbox1" type="checkbox" id="checkbox1" onClick="updateaddress()">
                            </strong></font></td>
                </tr>
                <td height="2"></td>
                <td height="2"></tr>
                    <tr>
                        <td height="163" colspan="4"><font color="#000033"><strong><font size="2"
                                                                                         face="Arial, Helvetica, sans-serif">
                                    </font> </strong> </font>
                            <table width="99%" height="341" border="1" cellpadding="0" cellspacing="0"
                                   bordercolor="#000000">
                                <tr bgcolor="#CCFFFF">
                                    <td width="11%" class="tablecontent1">
                                        <div align="center"><font color="#0000CC"><strong><font size="2"
                                                                                                face="Arial, Helvetica, sans-serif">Qualification</font></strong></font>
                                        </div>
                                    </td>
                                    <td width="23%" class="tablecontent1">
                                        <div align="center"><font color="#0000CC"><strong><font size="2"
                                                                                                face="Arial, Helvetica, sans-serif">Name
                                                        Of Institute/Board/University</font></strong></font></div>
                                    </td>
                                    <td width="13%" class="tablecontent1">
                                        <div align="center"><strong><font color="#0000CC" size="2"
                                                                          face="Arial, Helvetica, sans-serif">Year of
                                                    Passing</font></strong></div>
                                    </td>
                                    <td width="9%" class="tablecontent1">
                                        <div align="center">
                                            <p><strong><font color="#0000CC" size="2"
                                                             face="Arial, Helvetica, sans-serif">Total
                                                        Marks</font></strong></p>
                                        </div>
                                    </td>
                                    <td width="9%" class="tablecontent1">
                                        <div align="center"><strong><font color="#0000CC" size="2"
                                                                          face="Arial, Helvetica, sans-serif">Marks
                                                    Obtained</font></strong></div>
                                    </td>
                                    <td width="19%" class="tablecontent1">
                                        <div align="center"><font color="#0000CC"><strong><font size="2"
                                                                                                face="Arial, Helvetica, sans-serif">%
                                                        Of Marks Obtained</font></strong></font></div>
                                    </td>
                                    <td width="50%" class="tablecontent1">
                                        <div align="center"><font color="#0000CC"><strong><font size="2"
                                                                                                face="Arial, Helvetica, sans-serif">Grade/Division</font></strong></font>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="54" bgcolor="#FFFFFF">
                                        <div align="center"><font color="#0000FF">
                                                <label><strong><font size="2" face="Arial, Helvetica, sans-serif">Madhyamik</font></strong></label>
                                            </font><font color="#000033"><strong><font size="2"
                                                                                       face="Arial, Helvetica, sans-serif"><font
                                                            color="#FF0000">*</font></font></strong></font></div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed01" type="text" id="ed01" value="" size="40">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed02" type="text" id="ed02" value="" size="4">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed03" type="text" id="ed03" value="" size="4">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed04" type="text" id="ed04" value="" size="5">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed05" type="text" id="ed05" value="" size="5">
                                        </div>
                                    </td>
                                    <td width="50%" colspan="3">
                                        <div align="center">
                                            <input name="ed06" type="text" id="ed06" value="" size="5">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="54" bgcolor="#FFFFFF">
                                        <div align="center"><font color="#0000FF">
                                                <label><strong><font size="2" face="Arial, Helvetica, sans-serif">Higher
                                                            Secondary</font></strong></label>
                                            </font><font color="#000033"><strong><font size="2"
                                                                                       face="Arial, Helvetica, sans-serif"><font
                                                            color="#FF0000">*</font></font></strong></font></div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed11" type="text" id="ed11" value="" size="40">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed12" type="text" id="ed12" value="" size="4">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed13" type="text" id="ed13" value="" size="4">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed14" type="text" id="ed14" value="" size="5">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed15" type="text" id="ed15" value="" size="5">
                                        </div>
                                    </td>
                                    <td colspan="3">
                                        <div align="center">
                                            <input name="ed16" type="text" id="ed16" value="" size="5">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="39" bgcolor="#FFFFFF">
                                        <div align="center"><font color="#0000FF">
                                                <label><strong><font size="2" face="Arial, Helvetica, sans-serif">Graduation</font></strong></label>
                                            </font><font color="#000033"><strong><font size="2"
                                                                                       face="Arial, Helvetica, sans-serif"><font
                                                            color="#FF0000">*</font></font></strong></font></div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed21" type="text" id="ed21" value="" size="40">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed22" type="text" id="ed22" value="" size="4">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed23" type="text" id="ed23" value="" size="4">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed24" type="text" id="ed24" value="" size="5">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed25" type="text" id="ed25" value="" size="5">
                                        </div>
                                    </td>
                                    <td colspan="3">
                                        <div align="center">
                                            <input name="ed26" type="text" id="ed26" value="" size="5">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="43" bgcolor="#FFFFFF">
                                        <div align="center"><font color="#0000FF">
                                                <label><strong><font size="2" face="Arial, Helvetica, sans-serif">Post
                                                            Graduation</font></strong></label>
                                            </font></div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed31" type="text" id="ed31" value="" size="40">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed32" type="text" id="ed32" value="" size="4">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed33" type="text" id="ed33" value="" size="4">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed34" type="text" id="ed34" value="" size="5">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed35" type="text" id="ed35" value="" size="5">
                                        </div>
                                    </td>
                                    <td colspan="3">
                                        <div align="center">
                                            <input name="ed36" type="text" id="ed36" value="" size="5">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="44" bgcolor="#FFFFFF">
                                        <div align="center"><font color="#0000FF">
                                                <label><strong><font size="2"
                                                                     face="Arial, Helvetica, sans-serif">Other</font></strong></label>
                                            </font></div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed41" type="text" id="ed41" value="" size="40">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed42" type="text" id="ed42" value="" size="4">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed43" type="text" id="ed43" value="" size="4">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed44" type="text" id="ed44" value="" size="5">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center"><font color="#000033"><strong><font size="2"
                                                                                                face="Arial, Helvetica, sans-serif">
                                                        <input name="ed45" type="text" id="ed45" value="" size="5">
                                                    </font></strong></font></div>
                                    </td>
                                    <td colspan="3">
                                        <div align="center"><font color="#000033"><strong><font size="2"
                                                                                                face="Arial, Helvetica, sans-serif">
                                                        <input name="ed46" type="text" id="ed46" value="" size="5">
                                                    </font></strong></font></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="44" bgcolor="#FFFFFF">
                                        <div align="center"><font color="#0000FF">
                                                <label><strong><font size="2" face="Arial, Helvetica, sans-serif">Computer
                                                            Certificate</font></strong></label></font></div>
                                    </td>
                                    <td><input name="ed51" type="text" id="ed51" value="" size="40"></td>
                                    <td>
                                        <div align="center">
                                            <input name="ed52" type="text" id="ed52" value="" size="4">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed53" type="text" id="ed53" value="" size="4">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center">
                                            <input name="ed54" type="text" id="ed54" value="" size="5">
                                        </div>
                                    </td>
                                    <td>
                                        <div align="center"><font color="#000033"><strong><font size="2"
                                                                                                face="Arial, Helvetica, sans-serif">
                                                        <input name="ed55" type="text" id="ed55" value="" size="5">
                                                    </font></strong></font></div>
                                    </td>
                                    <td colspan="3">
                                        <div align="center"><font color="#000033"><strong><font size="2"
                                                                                                face="Arial, Helvetica, sans-serif">
                                                        <input name="ed56" type="text" id="ed56" value="" size="5">
                                                    </font></strong></font></div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="205" colspan="4">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" bordercolor="#000000">
                                <tr>
                                    <td class="tablecontent1"><font size="2"
                                                                    face="Arial, Helvetica, sans-serif"><strong>Experience(If
                                                Any):-</strong></font></td>
                                    <td class="tablecontent1" height="60" colspan="4"><textarea name="ed81" value=""
                                                                                                cols="70" rows="3"
                                                                                                id="ed81"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="tablecontent2"><font size="2"
                                                                    face="Arial, Helvetica, sans-serif"><strong>PIN<font
                                                    color="#FF0000">*</font>:-</strong></font></td>
                                    <td class="tablecontent2" height="60" colspan="4"><input name="pin" id="pin"
                                                                                             type="password" size="4"
                                                                                             maxlength="4" value="">
                                        <strong><font color="#FF0000" size="1">(Please Specify 4 digit
                                                PIN number for uploading Photograph &amp; Signature)</font></strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="90" colspan="7" class="tablecontent2">
                                        <div align="justify"><font color="#000033"><strong><font size="2">I
                                                        hereby declare that I fulfil the eligibility criteria for the
                                                        post in terms of educational qualifications (including
                                                        percentage
                                                        of marks obtained in the examination and certificate course),
                                                        experience, age, etc. and I am aware that mere calling for Test
                                                        or Interview shall not entail me as fulfilling the conditions
                                                        of eligibility. I certify that the information given in the
                                                        application is correct and complete to the best of my knowledge
                                                        and nothing has been concealed/distorted. I understand that
                                                        if at any time I am found to have concealed/distorted any
                                                        material
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
                        <td height="28" colspan="4" align="right">
                            <div align="center"><strong><font color="#000033" size="2"
                                                              face="Arial, Helvetica, sans-serif">
                                        <input type="button" name="Submit" value="Save" Onclick="validate()"
                                               class="button">
                                        <input name="myear" id="myear" value="1980" type="hidden">
                                        <input name="Exit" type="button" id="Exit" value="Exit" class="button"
                                               onClick="window.close();">
                                    </font></strong></div>
                            <div align="center"><strong><font color="#000033" size="2"
                                                              face="Arial, Helvetica, sans-serif">
                                    </font></strong></div>
                        </td>
                    </tr>
                <td width="132"></td>
                <td width="393" height="2"> </tr>
            </table>
        </div>
        <table width="100%">
            <tr>
                <td class="tablecontent1" height="24">
                    <div align="center"><span class="link1"><font color="#00a2cf">
                                Design and Develped by National Informatics Centre Purba Medinipur West Bengal and
                                Content Provided By DCPS Paschim Medinipur
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
    $name = trim($_POST["name"]);
    $father = trim($_POST["father"]);
    $category = trim($_POST["category"]);
    $dob = trim($_POST["seldobday"]) . "/" . trim($_POST["seldobmon"]) . "/" . trim($_POST["seldobyear"]);
    $age = trim($_POST["txtage"]);
    $nationality = trim($_POST["nationality"]);
    $sex = trim($_POST["sex"]);

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

    $ed01 = trim($_POST["ed01"]);
    $ed02 = trim($_POST["ed02"]);
    $ed03 = trim($_POST["ed03"]);
    $ed04 = trim($_POST["ed04"]);
    $ed05 = trim($_POST["ed05"]);
    $ed06 = trim($_POST["ed06"]);
    if ($ed01 == "" || $ed01 == null) {
        $ed01 = "";
    }

    if ($ed02 == "" || $ed02 == null) {
        $ed02 = "0";
    }

    if ($ed03 == "" || $ed03 == null) {
        $ed03 = "0";
    }
    if ($ed04 == "" || $ed04 == null) {
        $ed04 = "0";
    }
    if ($ed05 == "" || $ed05 == null) {
        $ed05 = "0";
    }
    if ($ed06 == "" || $ed06 == null) {
        $ed06 = "";
    }

    $ed11 = trim($_POST["ed11"]);
    $ed12 = trim($_POST["ed12"]);
    $ed13 = trim($_POST["ed13"]);
    $ed14 = trim($_POST["ed14"]);
    $ed15 = trim($_POST["ed15"]);
    $ed16 = trim($_POST["ed16"]);
    if ($ed11 == "" || $ed11 == null) {
        $ed11 = "";
    }

    if ($ed12 == "" || $ed12 == null) {
        $ed12 = "0";
    }

    if ($ed13 == "" || $ed13 == null) {
        $ed13 = "0";
    }
    if ($ed14 == "" || $ed14 == null) {
        $ed14 = "0";
    }
    if ($ed15 == "" || $ed15 == null) {
        $ed15 = "0";
    }
    if ($ed16 == "" || $ed16 == null) {
        $ed16 = "";
    }
    $ed21 = trim($_POST["ed21"]);
    $ed22 = trim($_POST["ed22"]);
    $ed23 = trim($_POST["ed23"]);
    $ed24 = trim($_POST["ed24"]);
    $ed25 = trim($_POST["ed25"]);
    $ed26 = trim($_POST["ed26"]);
    if ($ed21 == "" || $ed21 == null) {
        $ed21 = "";
    }

    if ($ed22 == "" || $ed22 == null) {
        $ed22 = "0";
    }

    if ($ed23 == "" || $ed23 == null) {
        $ed23 = "0";
    }
    if ($ed24 == "" || $ed24 == null) {
        $ed24 = "0";
    }
    if ($ed25 == "" || $ed25 == null) {
        $ed25 = "0";
    }
    if ($ed26 == "" || $ed26 == null) {
        $ed26 = "";
    }

    $ed31 = trim($_POST["ed31"]);
    $ed32 = trim($_POST["ed32"]);
    $ed33 = trim($_POST["ed33"]);
    $ed34 = trim($_POST["ed34"]);
    $ed35 = trim($_POST["ed35"]);
    $ed36 = trim($_POST["ed36"]);
    if ($ed31 == "" || $ed31 == null) {
        $ed31 = "";
    }

    if ($ed32 == "" || $ed32 == null) {
        $ed32 = "0";
    }

    if ($ed33 == "" || $ed33 == null) {
        $ed33 = "0";
    }
    if ($ed34 == "" || $ed34 == null) {
        $ed34 = "0";
    }
    if ($ed35 == "" || $ed35 == null) {
        $ed35 = "0";
    }
    if ($ed36 == "" || $ed36 == null) {
        $ed36 = "";
    }
    $ed41 = trim($_POST["ed41"]);
    $ed42 = trim($_POST["ed42"]);
    $ed43 = trim($_POST["ed43"]);
    $ed44 = trim($_POST["ed44"]);
    $ed45 = trim($_POST["ed45"]);
    $ed46 = trim($_POST["ed46"]);
    if ($ed41 == "" || $ed41 == null) {
        $ed41 = "";
    }

    if ($ed42 == "" || $ed42 == null) {
        $ed42 = "0";
    }

    if ($ed43 == "" || $ed43 == null) {
        $ed43 = "0";
    }
    if ($ed44 == "" || $ed44 == null) {
        $ed44 = "0";
    }
    if ($ed45 == "" || $ed45 == null) {
        $ed45 = "0";
    }
    if ($ed46 == "" || $ed46 == null) {
        $ed46 = "";
    }

    $ed51 = trim($_POST["ed51"]);
    $ed52 = trim($_POST["ed52"]);
    $ed53 = trim($_POST["ed53"]);
    $ed54 = trim($_POST["ed54"]);
    $ed55 = trim($_POST["ed55"]);
    $ed56 = trim($_POST["ed56"]);
    if ($ed51 == "" || $ed51 == null) {
        $ed51 = "";
    }

    if ($ed52 == "" || $ed52 == null) {
        $ed52 = "0";
    }

    if ($ed53 == "" || $ed53 == null) {
        $ed53 = "0";
    }
    if ($ed54 == "" || $ed54 == null) {
        $ed54 = "0";
    }
    if ($ed55 == "" || $ed55 == null) {
        $ed55 = "0";
    }
    if ($ed56 == "" || $ed56 == null) {
        $ed56 = "";
    }
    $ed81 = trim($_POST["ed81"]);
    $pin = trim($_POST["pin"]);

    $id = GetappId($post);
    $con = connect();
    $str = "Insert into applicant(appid,post,aname,nationality,father,category,dob,age_yr,sex,mobile,pre_address,pre_block,pre_subdiv,pre_dist,pre_pin,pre_state,perm_address,perm_block,perm_subdiv,perm_dist,perm_pin,perm_state,m_inst,m_year,m_total,m_marks,m_percent,m_grade,h_inst,h_year,h_total,h_marks,h_percent,h_grade,g_inst,g_year,g_total,g_marks,g_percent,g_grade,p_inst,p_year,p_total,p_marks,p_percent,p_grade,oth_inst,oth_year,oth_total,oth_marks,oth_percent,oth_grade,cert_inst,cert_year,cert_total,cert_marks,cert_percent,cert_grade,email,exprience,pin)	values ('" . $id . "','" . mysql_real_escape_string($post) . "','" . mysql_real_escape_string($name) . "','" . mysql_real_escape_string($nationality) . "','" . mysql_real_escape_string($father) . "','" . mysql_real_escape_string($category) . "',STR_TO_DATE('" . $dob . "',\"%d/%m/%Y\")," . mysql_real_escape_string($age) . ",'" . mysql_real_escape_string($sex) . "','" . mysql_real_escape_string($phone) . "','" . mysql_real_escape_string($vill_txt1) . "','" . mysql_real_escape_string($block1) . "','" . mysql_real_escape_string($sub1) . "','" . mysql_real_escape_string($dist1) . "','" . mysql_real_escape_string($pin1) . "','" . mysql_real_escape_string($state1) . "','" . mysql_real_escape_string($vill_txt2) . "','" . mysql_real_escape_string($block2) . "','" . mysql_real_escape_string($sub2) . "','" . mysql_real_escape_string($dist2) . "','" . mysql_real_escape_string($pin2) . "','" . mysql_real_escape_string($state2) . "','" . mysql_real_escape_string($ed01) . "'," . mysql_real_escape_string($ed02) . "," . mysql_real_escape_string($ed03) . "," . mysql_real_escape_string($ed04) . "," . mysql_real_escape_string($ed05) . ",'" . mysql_real_escape_string($ed06) . "','" . mysql_real_escape_string($ed11) . "'," . mysql_real_escape_string($ed12) . "," . mysql_real_escape_string($ed13) . "," . mysql_real_escape_string($ed14) . "," . mysql_real_escape_string($ed15) . ",'" . mysql_real_escape_string($ed16) . "','" . mysql_real_escape_string($ed21) . "'," . mysql_real_escape_string($ed22) . "," . mysql_real_escape_string($ed23) . "," . mysql_real_escape_string($ed24) . "," . mysql_real_escape_string($ed25) . ",'" . mysql_real_escape_string($ed26) . "','" . mysql_real_escape_string($ed31) . "'," . mysql_real_escape_string($ed32) . "," . mysql_real_escape_string($ed33) . "," . mysql_real_escape_string($ed34) . "," . mysql_real_escape_string($ed35) . ",'" . mysql_real_escape_string($ed36) . "','" . mysql_real_escape_string($ed41) . "'," . mysql_real_escape_string($ed42) . "," . mysql_real_escape_string($ed43) . "," . mysql_real_escape_string($ed44) . "," . mysql_real_escape_string($ed45) . ",'" . mysql_real_escape_string($ed46) . "','" . mysql_real_escape_string($ed51) . "'," . mysql_real_escape_string($ed52) . "," . mysql_real_escape_string($ed53) . "," . mysql_real_escape_string($ed54) . "," . mysql_real_escape_string($ed55) . ",'" . mysql_real_escape_string($ed56) . "','" . mysql_real_escape_string($email) . "','" . mysql_real_escape_string($ed81) . "','" . mysql_real_escape_string($pin) . "')";

    disconnect($con);
    $record = executeSqlQuery($str);
    if ($record == False) {
        DisplayDefaultForm(NULL);

        echo "<script type=\"text/javascript\">alert(\"Problem Occures During Saving Of Application.Please Try Once Again \")</script>";

    } else {
        $pin = md5(md5($pin) + 111111);
        header("Location: success.php?appid=$id&pin=$pin&post=$post");
        exit();
    }
} else {
    DisplayDefaultForm(NULL);
}
?>