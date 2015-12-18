<?php
session_start();
include("connection.php");
include('settings.inc.php');
function DisplayForm($value)
{
?>
<html>
<head>
    <title>Welcome to <?php echo OFFICE; ?> Online Recruitment Portal</title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <link href="CSS/inb.css" rel="stylesheet" type="text/css">
<style>
iframe{ hight:0px;width:0px }
</style>
</head>
<body topmargin="0" leftmargin="0" rightmargin="0" oncontextmenu="return false;" marginheight="0" marginwidth="0">

<div class="tdbg" style="width: 700px;">
<form name="admitcard" method="POST" action=<?php echo htmlspecialchars( $_SERVER['PHP_SELF']); ?>>

  <table align="center" cellpadding="0" cellspacing="0" bordercolor="#333333">
    <tr> 
      <td height="42" colspan="2">
          <div>
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
    <tr bgcolor="#EEF7FD"> 
      <td height="42" colspan="2"> 
        <div align="center"> <strong><font size="2" face="Times New Roman, Times, serif"> 
          <font color="#FF0000"><h2>Search Your Admit Card Using Date of Birth</h2></font></font></strong>
        </div>
        <div align="center"></div></td>
    </tr>
    <tr bordercolor="#000099" bgcolor="#FFFFCC"> 
      <td width="351" height="39" bordercolor="#000099" bgcolor="#FFFFFF"> 
        <div align="center"><strong></strong></div>
        
        <div align="center"><font size="2" face="Arial, Helvetica, sans-serif"><strong>POST 
          APPLIED FOR</strong></font></div></td>
      <td width="360" bordercolor="#000099" bgcolor="#FFFFFF"> 
        <div align="left">
          <select name="post">
            <?php
             	$sqlstr = "select * from post";
				$rec = executeSqlQuery($sqlstr);
				echo "<option value=\"0\">--Select Post--</>";
			 	while ($row = mysql_fetch_array($rec))
				{
					if (isset($_POST["post"]) && strcmp($_POST["post"],$row["PostCode"])==0) {
					   echo "<option selected value=" . $row["PostCode"] . ">" . $row["PostName"]. "</>";	
					}
					else 
					{	
						echo "<option value=" . $row["PostCode"] . ">" . $row["PostName"]. "</>";
					}
				}
	?>
          </select>
      </div></td>
    </tr>
	<tr bordercolor="#000099" bgcolor="#FFFFCC"> 
      <td width="351" height="34" bordercolor="#000099" bgcolor="#FFFFFF"> 
        <div align="center"><strong></strong></div>
        <div align="center"><font size="2" face="Arial, Helvetica, sans-serif"><strong>DATE OF BIRTH</strong></font></div></td>
      <td width="360" bordercolor="#000099" bgcolor="#FFFFFF"> 
        <div align="left"> 
          <input name="dob" size="10" maxlength="10" type="text" value= <?php echo htmlspecialchars($row['dob']);?>>
          <strong><font color="#FF0000" size="2">(DD-MM-YYYY)</font></strong></div></td>
    </tr>
    <tr bgcolor="#FFFFFF"> 
      <td height="32" colspan="2"> 
        <div align="center"> 
          <input type="submit" name="submit" value="Find"/>
          <input type="submit" name="reset" value=" Exit " onClick ="window.close()"/>
        </div></td>
    </tr>
  </table>
  
  <?php 
if($value) {
?>
  <table border="1" rules="all" align="center" cellpadding="0" cellspacing="0"  bordercolor="#7a51ff">
    <tr bgcolor="#FFFFFF"> 
      <td height="42" colspan="4"> <div align="center"> <font size="2" face="Times New Roman, Times, serif"><font color="#FF0000" size="3">Download 
          your Admit Card using your Name,Father Name & Date of Birth</font></font> 
          <br>
          <font size="2">(<font color="#FF0000">*Print This Admit Card Only A4 
          Size Paper & Margin Should be Top=1.5,Bottom=1.5,Left=1.5,Right=1.5</font>) 
          </font></div>
        <div align="center"></div></td>
    </tr>
    <tr bordercolor="#000099" bgcolor="#FFFFFF"> 
      <td height="32"  bordercolor="#666666"> <div align="center"><font color="#000000" face="Verdana, Arial, Helvetica, sans-serif"><strong><font size="2">NAME</font></strong></font></div></td>
      <td  bordercolor="#666666"> <div align="center"><font color="#000000" face="Verdana, Arial, Helvetica, sans-serif"><strong><font size="2">FATHER</font></strong></font></div></td>
      <td  bordercolor="#666666"><div align="center"><font size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>MOBILE</strong></font></div></td>
      <td  bordercolor="#666666"> <div align="center"><font color="#000000" size="2" face="Verdana, Arial, Helvetica, sans-serif"><strong>DATE 
          OF BIRTH </strong></font></div></td>
    </tr>
    <?php 
while ($row = mysql_fetch_array($value)) {
?>
    <tr bordercolor="#000099" bgcolor="#FFFFCC"> 
      <td  height="35"  bordercolor="#666666" bgcolor="#FFFFFF"> <div align="center"><strong><font color="#003399" size="2" face="Verdana, Arial, Helvetica, sans-serif"> 
          <a href= "PrintAdmitCard.php?examroll=<?php echo $row["examroll"];?>" target="_blank">
          <?php echo $row["aname"]; ?></a></font></strong></div></td>
      <td   bordercolor="#666666" bgcolor="#FFFFFF"> <div align="center"><strong><font color="#003399" size="2" face="Verdana, Arial, Helvetica, sans-serif"> 
          <?php echo $row["father"]; ?> </font></strong></div></td>
      <td   bordercolor="#666666" bgcolor="#FFFFFF"> <div align="center"><strong><font color="#003399" size="2" face="Verdana, Arial, Helvetica, sans-serif"> 
          <?php echo $row["mobile"]; ?> </font></strong></div></td>
      <td   bordercolor="#666666" bgcolor="#FFFFFF"> <div align="center"><strong><font color="#003399" size="2" face="Verdana, Arial, Helvetica, sans-serif"> 
          <?php echo date("d-m-Y",strtotime($row["dob"])); ?> </font></strong></div></td>
    </tr>
    <?php
}
?>
    <?php
}

?>
  </table>
  

  <table width="100%" align="center" cellpadding="0" cellspacing="0" bordercolor="#333333">
    <tr> 
          
      <td  height="62" bgcolor="#EEF7FD"> 
        <div align="center"> 
              
          <p align="center"><small><small> <font face="Arial, Helvetica, sans-serif" color="#003399" size="2"><strong>Designed 
            &amp; Developed by National Informatics Centre, </strong></font><strong> 
            <font color="#003399" size="2" face="Arial, Helvetica, sans-serif">Paschim
            Medinipur</font></strong></small><strong><font color="#003399" size="2" face="Arial, Helvetica, sans-serif"><small><font size="2"> 
            District Unit, West Bengal.<br>
                Contents provided by District Administration, </font> <small> 
                <font size="2">Paschim</font><font size="2"> Medinipur District
                </font> </small><font size="2">,West Bengal</font></small></font></strong></p>
            </div></td>
        </tr>
      </table>
</form>
</div>
</body>
</html>
<?php
}
function isDate($i_sDate)
{
   $blnValid = TRUE;
   // check the format first (may not be necessary as we use checkdate() below)
   if(!@ereg ("^[0-9]{2}-[0-9]{2}-[0-9]{4}$", $i_sDate))
   {
    $blnValid = FALSE;
   }
   else //format is okay, check that days, months, years are okay
   {
      $arrDate = explode("-", $i_sDate); // break up date by slash
      $intDay = $arrDate[0];
      $intMonth = $arrDate[1];
      $intYear = $arrDate[2];
      $intIsDate = checkdate($intMonth, $intDay, $intYear);
      if(!$intIsDate)
      {
        $blnValid = FALSE;
      }
   } //end else
   return ($blnValid);
} //
function DisplayDefaultForm($dob,$post) {
    
	$sqlstr = "select * from  applicant where post = '".Remove_SQLi($post)."' and dob = STR_TO_DATE('".$dob."',\"%d-%m-%Y\")";
	$value = executeSqlQuery($sqlstr);
	$num_rows = mysql_num_rows($value);
    if ($num_rows ==0){
	header("Location: AdmitCard.php");
	echo "<script type=\"text/javascript\">alert(\" There is no Candidate in this Search\")</script>";
	}
	else {DisplayForm($value);}
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{
	$dob ="";
	
	if ( isset($_POST["dob"]) ) {  
		$dob = $_POST["dob"];
	}
	if ( isset($_POST["post"])) {  
		$post = trim($_POST['post']);
	}
	switch ($_POST["submit"]) {
		case "Find":
		     if ( $post == "0") {
				DisplayForm(NULL);
				echo "<script type=\"text/javascript\">alert(\" Select Post\")</script>";
			}
		    else if ( $dob == "" || !isDate($dob)) {
				DisplayForm(NULL);
				echo "<script type=\"text/javascript\">alert(\" Date of Birth cannot be blank\")</script>";
			}
			else {
			DisplayDefaultForm($dob,$post);  
			}
			break;
		default:
			DisplayForm(NULL);
			break;
	}
} else {
	DisplayForm(NULL);
}	
?>