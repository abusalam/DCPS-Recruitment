<?php
include("connection.php"); 
if(isset($_GET["appid"]) && isset($_GET["pin"])) 
{
$appid = trim($_GET["appid"]);
$pin = trim($_GET["pin"]);
$folder = "photo/";
						$trans = array("/" => "_");
						$filename= strtr($appid,$trans);
						$filename2 = $filename ."_"."1". ".jpg";
						$filename3 = $filename . "_"."2".".jpg";

$sqlstr = "SELECT a.appid,a.post,c.Desc as category,a.aname,a.nationality,a.father,a.dob,a.age_yr,a.mobile,a.pre_address,
b1.block_muni_nm as block1,
sd1.subdiv as subdiv1,a.pre_dist,a.pre_pin,a.pre_state,a.perm_address,b2.block_muni_nm as block2,sd2.subdiv as subdiv2,
a.perm_dist,a.perm_pin,a.perm_state,a.m_inst,a.m_year,a.m_total,a.m_marks,a.m_percent,a.m_grade,a.h_inst,a.h_year,a.h_total,
a.h_marks,a.h_percent,a.h_grade,a.g_inst,a.g_year,a.g_total,a.g_marks,a.g_percent,a.g_grade,a.p_inst,a.p_year,a.p_total,a.p_marks,a.p_percent,a.p_grade,a.oth_inst,a.oth_year,a.oth_total,a.oth_marks,a.oth_percent,a.oth_grade,
a.cert_inst,a.cert_year,a.cert_total,a.cert_marks,a.cert_percent,a.cert_grade,a.email,a.exprience,s1.StateName As State1,s2.StateName As State2,g.Gender,p.PostName as Postname from ((((((((( applicant as a inner join sex as g on a.sex=g.Code) inner join post as p on a.post = p.PostCode) inner join state as s1 on a.pre_state=s1.Code) inner join state as s2 on a.perm_state=s2.Code)inner join block_muni as b1 on a.pre_block=b1.block_municd)
inner join block_muni as b2 on a.perm_block=b2.block_municd)inner join subdivision as sd1 on a.pre_subdiv=sd1.sdiv_cd)inner join subdivision as sd2 on a.perm_subdiv=sd2.sdiv_cd)inner join cast as c on a.category=c.Code)where a.appid = '".$appid."' and md5(md5(`pin`)+111111)='". $pin ."'" ;
$result = executeSqlQuery($sqlstr);
if($row = mysql_fetch_array ($result)) {
		
} 
else {
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
 bgcolor:white;
 color:black;
font-family : verdana;
       font-size   : 12px; }
tr { font-family : verdana;
     font-size   : 12px;} 
td { font-family : verdana;
     font-size   : 12px;
     font-weight : normal; }
 </style>
</head>
<body>
<form id="form">
        <center>
      
    <table width="99%" height="921" border="1"  cellpadding="4" cellspacing="0" style="border-color:Black;">
      <tr> 
          <td width="53%" height="80" align="left"> <div align="center"><img src="image/banner.gif" width="90%" height="80"> 
            </div></td>
        </tr>
        <tr> 
          <td style="border-bottom: solid 1px black; border-top: solid 1px black" align="left" colspan="3"> 
            <div align="center">Ph No.-03228 263990&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            &nbsp; &nbsp; Email- dcps.purbamedinipur@gmail.com 
            <input name="Print" onClick="window.print()" type="button" value="Print" />
          </div></td>
        </tr>
        <tr> 
          
        <td height="99%" colspan="3" align="left" style="border-bottom: solid 1px black; border-top: solid 1px black"> 
          <table width="99%" border="0">
            <tr> 
              <td colspan="4"><div align="center"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Application for the Post  : <font size ="3"><?php echo $row["Postname"]; ?></font></strong></font><strong><font size="1" face="Arial, Helvetica, sans-serif"> &nbsp;on contractual basis .</font></strong></div></td>
            </tr>
            <tr> 
              <td width="25%" height="28"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Registration 
                Number:</strong></font></td>
              <td width="27%"><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["appid"]; ?></font></td>
              <td colspan="2" rowspan="3">  <div align="right"><img src=<?php echo '"photo/'.$filename2.'"'; ?> name="img"  width="125" height="150" id="img"><font size="1" face="Arial, Helvetica, sans-serif">&nbsp;&nbsp;</font></div></td>
            </tr>
            <tr> 
              <td height="32"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Name 
                of Applicant:</strong></font></td>
              <td><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["aname"]; ?></font></td>
            </tr>
            <tr> 
              <td height="58"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Father's/Husband's 
                Name:</strong></font></td>
              <td><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["father"]; ?></font></td>
            </tr>
            <tr> 
              <td><font size="1" face="Arial, Helvetica, sans-serif"><strong>Nationality:</strong></font></td>
              <td><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["nationality"]; ?>&nbsp;<font size="1" face="Arial, Helvetica, sans-serif"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Category:</strong></font><?php echo $row["category"]; ?></font></td>
              <td width="15%"><font size="1" face="Arial, Helvetica, sans-serif"><strong>:Gender:</strong></font></td>
              <td width="33%"><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["Gender"]; ?></font></td>
            </tr>
            <tr> 
              <td height="32"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Date 
                Of Birth:</strong></font></td>
              <td><font size="1" face="Arial, Helvetica, sans-serif"><?php echo date("d-m-Y",strtotime($row["dob"]));  ?><font color="#FF0000"> 
                &nbsp; (DD-MM-YYYY)</font></font></td>
              <td><font size="1" face="Arial, Helvetica, sans-serif"><strong>Age 
                as on 1st January, 2015:</strong></font></td>
              <td><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["age_yr"]. " Years" ; ?></font></td>
            </tr>
            <tr> 
              <td height="28"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Present 
                Address:</strong></font></td>
              <td colspan="3"><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["pre_address"]; ?><?php echo ",Block:-".$row["block1"]; ?><?php echo ",Sub-Division:-".$row["subdiv1"]; ?><?php echo ",District:-".$row["pre_dist"]; ?>&nbsp;&nbsp;&nbsp;<?php echo "PIN:-".$row["pre_pin"]; ?>&nbsp;&nbsp;&nbsp;<?php echo "State:-".$row["State1"]; ?></font></td>
            </tr>
            <tr> 
              <td height="27"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Permanent 
                Address:</strong></font></td>
              <td colspan="3"><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["perm_address"]; ?><?php echo ",Block:-".$row["block2"]; ?><?php echo ",Sub-Division:-".$row["subdiv2"]; ?><?php echo ",District:-".$row["perm_dist"]; ?>&nbsp;&nbsp;&nbsp;<?php echo "PIN:-".$row["perm_pin"]; ?>&nbsp;&nbsp;&nbsp;<?php echo  "State:-".$row["State2"]; ?></font></td>
            </tr>
            <tr> 
              <td height="26"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Email:</strong></font></td>
              <td><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["email"]; ?></font></td>
              <td><font size="1" face="Arial, Helvetica, sans-serif"><strong>Mobile:</strong></font></td>
              <td><font size="1" face="Arial, Helvetica, sans-serif"><?php echo $row["mobile"]; ?></font></td>
            </tr>
            <tr> 
              <td height="18" colspan="2"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Educational 
                Qualification:</strong></font></td>
              <td><font size="1" face="Arial, Helvetica, sans-serif">&nbsp;</font></td>
              <td><font size="1" face="Arial, Helvetica, sans-serif">&nbsp;</font></td>
            </tr>
            <tr> 
              <td height="209" colspan="4"> <table width="99%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
                  <tr bgcolor="#CCFFFF"> 
                    <td width="14%"> <div align="center"><font color="#003399" size="1" face="Arial, Helvetica, sans-serif"><strong>Qualification</strong></font></div></td>
                    <td width="16%"> <div align="center"><font color="#003399" size="1" face="Arial, Helvetica, sans-serif"><strong>Name 
                        of the Institution</strong></font></div></td>
                    <td width="16%"><div align="center"><font color="#003399" size="1" face="Arial, Helvetica, sans-serif"><strong>Year of Passing</strong></font></div></td>
                    <td width="16%"><div align="center"><strong><font color="#003399" size="1" face="Arial, Helvetica, sans-serif">Total Marks</font></strong></div></td>
                    <td width="18%"><div align="center"><font color="#003399" size="1" face="Arial, Helvetica, sans-serif"><strong>Marks Obtained</strong></font></div></td>
                    <td width="18%"> <div align="center">
                      <div align="center"><font color="#003399" size="1" face="Arial, Helvetica, sans-serif"><strong>% 
                        of Marks obtain</strong></font></div>
                    </div></td>
                    <td width="18%"> <div align="center"><font color="#003399" size="1" face="Arial, Helvetica, sans-serif"><strong>Grade / Division</strong></font></div></td>
                  </tr>
                  <tr> 
                    <td height="22"> <div align="center"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Madhyamik</strong></font></div></td>
                    <td><div>
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["m_inst"] != "" ) {echo $row["m_inst"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                    <td><div>
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["m_year"] != "" ) {echo $row["m_year"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                    <td><div>
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["m_total"] != "" ) {echo $row["m_total"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                    <td><div>
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["m_marks"] != "" ) {echo $row["m_marks"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                    <td><div>
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["m_percent"] != "" ) {echo $row["m_percent"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                    <td><div>
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["m_grade"] != "" ) {echo $row["m_grade"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                  </tr>
                  <tr> 
                    <td height="27"> <div align="center"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Higher 
                        Secondary</strong></font></div></td>
                    <td> <div align="center"><font size="1" face="Arial, Helvetica, sans-serif"> 
                      <?php if ($row["h_inst"] != "" ) {echo $row["h_inst"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["h_year"] != "" ) {echo $row["h_year"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div>
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["h_total"] != "" ) {echo $row["h_total"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["h_marks"] != "" ) {echo $row["h_marks"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["h_percent"] != "" ) {echo $row["h_percent"];} else {echo "0";} ?>
                    </font></div></td>
                    <td align="center"> <font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["h_grade"] != "" ) {echo $row["h_grade"];} else {echo "------";} ?>
                      </div> 
                      </font></td>
                  </tr>
                  <tr> 
                    <td height="34"> <div align="center"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Graduation</strong></font></div></td>
                    <td> <div align="center"><font size="1" face="Arial, Helvetica, sans-serif"> 
                      <?php if ($row["g_inst"] != "" ) {echo $row["g_inst"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["g_year"] != "" ) {echo $row["g_year"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div>
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["g_total"] != "" ) {echo $row["g_total"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["g_marks"] != "" ) {echo $row["g_marks"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div align="center"> <font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["g_percent"] != "" ) {echo $row["g_percent"];} else {echo "0";} ?>
                    </font></div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["g_grade"] != "" ) {echo $row["g_grade"];} else {echo "------";} ?>
                    </font></div></td>
                  </tr>
                  <tr>
                    <td height="24"><div align="center"><strong><font size="1" face="Arial, Helvetica, sans-serif">Post Graduation</font></strong></div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["p_inst"] != "" ) {echo $row["p_inst"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["p_year"] != "" ) {echo $row["p_year"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div>
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["p_total"] != "" ) {echo $row["p_total"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["p_marks"] != "" ) {echo $row["p_marks"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div align="center"> <font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["p_percent"] != "" ) {echo $row["p_percent"];} else {echo "0";} ?>
                    </font></div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["p_grade"] != "" ) {echo $row["p_grade"];} else {echo "------";} ?>
                    </font></div></td>
                  </tr>
                  <tr>
                    <td height="32"><div align="center"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Other</strong></font></div></td>
                    <td><div> 
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["oth_inst"] != "" ) {echo $row["oth_inst"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                    <td><div> 
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["oth_year"] != "" ) {echo $row["oth_year"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["oth_total"] != "" ) {echo $row["oth_total"];} else {echo "0";} ?>
                    </font></div></td>
                    <td><div> 
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["oth_marks"] != "" ) {echo $row["oth_marks"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                    <td><div> 
                      <div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                        <?php if ($row["oth_percent"] != "" ) {echo $row["oth_percent"];} else {echo "------";} ?>
                      </font></div>
                    </div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["oth_grade"] != "" ) {echo $row["oth_grade"];} else {echo "------";} ?>
                    </font></div></td>
                  </tr>
                  <tr> 
                    <td height="32"> <div align="center"><font size="1" face="Arial, Helvetica, sans-serif"><strong> Computer Certificate</strong></font></div></td>
                    <td> <div align="center"><font size="1" face="Arial, Helvetica, sans-serif"> 
                      <?php if ($row["cert_inst"] != "" ) {echo $row["cert_inst"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["cert_year"] != "" ) {echo $row["cert_year"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["cert_total"] != "" ) {echo $row["cert_total"];} else {echo "0";} ?>
                    </font></div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["cert_marks"] != "" ) {echo $row["cert_marks"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div align="center"> <font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["cert_percent"] != "" ) {echo $row["cert_percent"];} else {echo "------";} ?>
                    </font></div></td>
                    <td><div align="center"><font size="1" face="Arial, Helvetica, sans-serif">
                      <?php if ($row["cert_grade"] != "" ) {echo $row["cert_grade"];} else {echo "------";} ?>
                    </font></div></td>
                  </tr>
                  <tr> 
                    <td height="31"> <div align="center"><font size="1" face="Arial, Helvetica, sans-serif"><strong>Experience(if 
                        any)</strong></font></div></td>
                    <td colspan="6"> <font size="1" face="Arial, Helvetica, sans-serif"> 
                      <?php if ($row["exprience"] != "" ) {echo $row["exprience"];} else {echo "------";} ?>
                      </font> <div align="left"></div></td>
                  </tr>
                </table></td>
            </tr>
            <tr> 
              <td height="83" colspan="4"><font color="#000033"><strong><font size="1"> hereby declare that I fulfil the eligibility criteria for the 
                  post in terms of educational qualifications (including percentage 
                  of marks obtained in the examination and certificate course), 
                  experience, age, etc. and I am aware that mere calling for Test 
                  or Interview shall not entail me as fulfilling the conditions 
                  of eligibility.I also declare that I have applied only for one Block in the District or for District post and if any time it is found that I have applied more than one Block or District post,my candidature is liable to be canceled. I certify that the information given in the 
                  application is correct and complete to the best of my knowledge 
                  and nothing has been concealed/distorted. I understand that 
                  if at any time I am found to have concealed/distorted any material 
                  information my candidature/appointment is liable to summary 
              termination without notice or compensation. </font></strong></font></td>
            </tr>
            <tr> 
              <td height="114" colspan="2"> <div align="left"><font size="1" face="Arial, Helvetica, sans-serif"><br>
                  </font></div></td>
              <td height="114" colspan="2"> <div align="right"><img src=<?php echo '"photo/'.$filename3.'"'; ?> name="img"  width="166" height="60" id="img"><font size="1" face="Arial, Helvetica, sans-serif"><strong><br>
                  ..................................................... </strong><br>
                  <strong>Signature of the Applicant</strong> </font></div></td>
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