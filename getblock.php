<?php
$sdid = $_GET["sdid"];
include("connection.php");
$sqlQList = "Select * from block_muni where sdiv_cd='" . $sdid . "'";
$QList1 = executeSqlQuery($sqlQList);
while ($row1 = mysql_fetch_array($QList1)) {
    ?>
    <option value="<?php echo $row1["block_muni_nm"]; ?>"><?php echo $row1["block_muni_nm"] ?></option>
    <?php
}

?>