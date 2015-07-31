<?php $rowNo = $_GET["rowNo"];
include("connection.php");
?>
<tr>
    <td height="48" bgcolor="#FFFFFF">
        <div align="center">
            <select class="listMenu" name="ed00<?php echo($rowNo + 1) ?>" id="ed00<?php echo($rowNo + 1) ?>">
                <?php
                $sqlquali = "select * from qualification";
                $exam = executeSqlQuery($sqlquali);
                echo "<option value=\"0\">--Select Examination Passed--</>";
                while ($row = mysql_fetch_array($exam)) {
                    ?>
                    <option value="<?php echo $row["desc"]; ?>"><?php echo $row["desc"] ?></option>
                    <?php

                }
                ?>
            </select>
        </div>
    </td>
    <td>
        <div align="center">
            <input name="ed01<?php echo($rowNo + 1) ?>" type="text" id="ed01<?php echo($rowNo + 1) ?>" value=""
                   size="40">
        </div>
    </td>
    <td>
        <div align="center">
            <input name="ed02<?php echo($rowNo + 1) ?>" type="text" id="ed02<?php echo($rowNo + 1) ?>" value=""
                   size="10">
        </div>
    </td>
    <td>
        <div align="center">
            <input name="ed03<?php echo($rowNo + 1) ?>" type="text" id="ed03<?php echo($rowNo + 1) ?>" value=""
                   size="50">
        </div>
    </td>
    <td>
        <div align="center">
            <input name="ed04<?php echo($rowNo + 1) ?>" type="text" id="ed04<?php echo($rowNo + 1) ?>" value=""
                   size="8">
        </div>
    </td>
    <td>
        <div align="center">
            <input name="ed05<?php echo($rowNo + 1) ?>" type="text" id="ed05<?php echo($rowNo + 1) ?>" value=""
                   size="8">
        </div>
    </td>
    <td>
        <div align="center">
            <input name="ed06<?php echo($rowNo + 1) ?>" type="text" id="ed06<?php echo($rowNo + 1) ?>" value=""
                   size="8">
        </div>
    </td>
    <td width="12%" colspan="3">
        <div align="center">
            <input name="ed07<?php echo($rowNo + 1) ?>" type="text" id="ed07<?php echo($rowNo + 1) ?>" value=""
                   size="5">
        </div>
    </td>
</tr>