<?php $rowNo = $_GET["rowNo"];
include("connection.php");
?>
<tr>
    <td height="48" bgcolor="#FFFFFF">
        <div align="center">
            <input name="expC00<?php echo($rowNo + 1) ?>" type="text" id="expC00<?php echo($rowNo + 1) ?>" value=""
                   size="28">
        </div>
    </td>
    <td>
        <div align="center">
            <input name="expC01<?php echo($rowNo + 1) ?>" type="text" id="expC01<?php echo($rowNo + 1) ?>" value=""
                   size="28">
        </div>
    </td>
    <td>
        <div align="center">
            <input name="expC02<?php echo($rowNo + 1) ?>" type="text" id="expC02<?php echo($rowNo + 1) ?>" value=""
                   size="20">
        </div>
    </td>
    <td>
        <div align="center">
            <input name="expC03<?php echo($rowNo + 1) ?>" type="text" id="expC03<?php echo($rowNo + 1) ?>" value=""
                   size="19">
        </div>
    </td>
    <td>
        <div align="center">
            <input name="expC04<?php echo($rowNo + 1) ?>" type="text" id="expC04<?php echo($rowNo + 1) ?>" value=""
                   size="15">
        </div>
    </td>
</tr>