<?php
include('settings.inc.php');
function connect()
{
    $con = mysql_connect(HOST_Name, MySQL_User, MySQL_Pass);
    if (!$con) {
        die('Could not connect DataBase: ' . mysql_error());
    }
    return $con;
}

function executeSqlQuery($sqlstr)
{
    $con = connect();
    $db_selected = mysql_select_db(MySQL_DB, $con);
    $row = mysql_query($sqlstr);
    disconnect($con);
    return $row;
}

function disconnect($con)
{
    if ($con) {
        mysql_close($con);
    }
}

function Remove_SQLi($str)
{
    $con = connect();
    if (get_magic_quotes_gpc()) {
        $retStr = mysql_real_escape_string(stripslashes($str));
    } else {
        $retStr = mysql_real_escape_string($str);
    }
    disconnect($con);
    return $retStr;
}

?>
