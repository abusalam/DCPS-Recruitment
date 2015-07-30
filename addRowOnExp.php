<?php  $rowNo=$_GET["rowNo"]; 
include("connection.php"); 
?>
 <tr>
              <td height="48" bgcolor="#FFFFFF"><div align="center">
                 <input name="exp00<?php echo ($rowNo+1)?>" type="text" id="exp00<?php echo ($rowNo+1)?>" value="" size="40">
              </div></td>
              <td><div align="center">
                <input name="exp01<?php echo ($rowNo+1)?>" type="text" id="exp01<?php echo ($rowNo+1)?>" value="" size="40">
              </div></td>
              <td><div align="center">
                <input name="exp02<?php echo ($rowNo+1)?>" type="text" id="exp02<?php echo ($rowNo+1)?>" value="" size="30">
              </div></td>
              <td><div align="center">
                <input name="exp03<?php echo ($rowNo+1)?>" type="text" id="exp03<?php echo ($rowNo+1)?>" value="" size="30">
              </div></td>
              <td><div align="center">
                <input name="exp04<?php echo ($rowNo+1)?>" type="text" id="exp04<?php echo ($rowNo+1)?>" value="" size="15">
              </div></td>
              <td><div align="center">
                <input name="exp05<?php echo ($rowNo+1)?>" type="text" id="exp05<?php echo ($rowNo+1)?>" value="" size="15">
              </div></td>
              <td colspan="2" ><div align="center">
                <input name="exp06<?php echo ($rowNo+1)?>" type="text" id="exp06<?php echo ($rowNo+1)?>" value="" size="15">
              </div></td>
               <td width="15%" colspan="2" ><div align="center">
                <input name="exp07<?php echo ($rowNo+1)?>" type="text" id="exp07<?php echo ($rowNo+1)?>" value="" size="25">
              </div></td>
            </tr>