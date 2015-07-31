// JavaScript Document
//var frm=document.reg_frm;
var global_submit_type = "";

//selected = new Array(); for (var i = 0; i < ob.options.length; i++) if (ob.options[ i ].selected) selected.push(ob.options[ i ].value);

var dtCh = "/";
function isInteger(s) {
    var i;
    for (i = 0; i < s.length; i++) {
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function dv(obj) {
    if (document.getElementById) {
        if (document.getElementById(obj) != null)
            return document.getElementById(obj);
        else
            return '';
    }
}

function enbCompDet() {
    if (get_radio_value(document.reg_frm.cmpknown) != 'N') {
        document.reg_frm.cmpdetail.disabled = false;
        document.reg_frm.cmpdetail.value = "";
    } else {
        document.reg_frm.cmpdetail.disabled = true;
        document.reg_frm.cmpdetail.value = "";
    }
}


function jsfCheckDateLength(date) {
    var strDate = date.toString();
    if (strDate.length == 1) strDate = "0" + strDate;
    return strDate;
}


//date validations added by kishore
function jsfGetLongDate(dd, mm, yy) {
    dd = dd.toString()
    mm = mm.toString()
    yy = yy.toString()
    return parseInt(yy + mm + dd)
}

function jsfGetFormDate(date) {
    var re = /^(0?\d{1,2})[\/-]0?\d{1,2}[\/-]\d{4}/g
    var arr = re.exec(date);
    var ret = false;
    for (i in arr) {
        if (i == 1) ret = true;
    }
    if (ret) return jsfCheckDateLength(arr[1]);
    return 0;
}

function jsfGetFormMonth(date) {
    var re = /^0?\d{1,2}[\/-](0?\d{1,2})[\/-]\d{4}/g
    var arr = re.exec(date);
    var ret = false;
    for (i in arr) {
        if (i == 1) ret = true;
    }
    if (ret) return jsfCheckDateLength(arr[1]);
    return 0;
}
function jsfGetFormYear(date) {
    var re = /^0?\d{1,2}[\/-]0?\d{1,2}[\/-](\d{4})/g
    var arr = re.exec(date);
    var ret = false;
    for (i in arr) {
        if (i == 1) ret = true;
    }
    if (ret) return arr[1];
    return 0;
}

function jsfCompareDate1(date1, date2) {
    date1 = trim(date1);
    date2 = trim(date2);

    alert(jsfGetFormDate(date1));
    alert(jsfGetFormMonth(date1));
    alert(jsfGetFormYear(date1));

    alert(jsfGetFormDate(date2));
    alert(jsfGetFormMonth(date2));
    alert(jsfGetFormYear(date2));

    var date1 = jsfGetLongDate(jsfGetFormDate(date1), jsfGetFormMonth(date1), jsfGetFormYear(date1));
    var date2 = jsfGetLongDate(jsfGetFormDate(date2), jsfGetFormMonth(date2), jsfGetFormYear(date2));
    alert(date1);
    alert(date2);
    if (date1 == date2) return 0;
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;

}

function stripCharsInBag(s, bag) {
    var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary(year) {
    // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
    for (var i = 1; i <= n; i++) {
        this[i] = 31
        if (i == 4 || i == 6 || i == 9 || i == 11) {
            this[i] = 30
        }
        if (i == 2) {
            this[i] = 29
        }
    }
    return this
}

function chkWindow() {
    if (window.name != 'mywindow') {
        window.location = 'index.php';
    }
}
function chkWindow4() {
    if (window.name != 'mywindow4') {
        window.location = 'index.php';
    }
}

function isDatechk(dtStr) {

    var daysInMonth = DaysArray(12)
    var pos1 = dtStr.indexOf(dtCh)
    var pos2 = dtStr.indexOf(dtCh, pos1 + 1)
    var strMonth = dtStr.substring(0, pos1)
    var strDay = dtStr.substring(pos1 + 1, pos2)
    var strYear = dtStr.substring(pos2 + 1)
    strYr = strYear

    if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1)
    if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1)
    for (var i = 1; i <= 3; i++) {
        if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1)
    }
    month = parseInt(strMonth)
    day = parseInt(strDay)
    year = parseInt(strYr)
    if (pos1 == -1 || pos2 == -1) {
        return false;
    }
    if (strMonth.length < 1 || month < 1 || month > 12) {
        return false;
    }
    if (strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > daysInMonth[month]) {
        return false;
    }
    /*if (strYear.length != 4 || year==0 || year < minYear || year > maxYear){
     alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
     return false
     }*/
    if (strYear.length != 4 || year == 0) {
        return false;
    }
    if (dtStr.indexOf(dtCh, pos2 + 1) != -1 || isInteger(stripCharsInBag(dtStr, dtCh)) == false) {
        return false;
    }

    return true;
}


function isDate(dtStr) {

    var daysInMonth = DaysArray(12)
    var pos1 = dtStr.indexOf(dtCh)
    var pos2 = dtStr.indexOf(dtCh, pos1 + 1)
    var strMonth = dtStr.substring(0, pos1)
    var strDay = dtStr.substring(pos1 + 1, pos2)
    var strYear = dtStr.substring(pos2 + 1)
    strYr = strYear

    if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1)
    if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1)
    for (var i = 1; i <= 3; i++) {
        if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1)
    }
    month = parseInt(strMonth)
    day = parseInt(strDay)
    year = parseInt(strYr)
    if (pos1 == -1 || pos2 == -1) {
        alert("The date format should be : dd/mm/yyyy");
        document.getElementById('txtage').value = "";
        return false;
    }
    if (strMonth.length < 1 || month < 1 || month > 12) {
        alert("Please select a valid month");
        document.getElementById('txtage').value = "";
        return false;
    }
    if (strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > daysInMonth[month]) {
        alert("Please select a valid day");
        document.getElementById('txtage').value = "";
        return false;
    }
    /*if (strYear.length != 4 || year==0 || year < minYear || year > maxYear){
     alert("Please select a valid 4 digit year between "+minYear+" and "+maxYear)
     return false
     }*/
    if (strYear.length != 4 || year == 0) {
        //alert("Please select a valid 4 digit year between "+minYear+" and "+maxYear);
        document.getElementById('txtage').value = "";
        return false;
    }
    if (dtStr.indexOf(dtCh, pos2 + 1) != -1 || isInteger(stripCharsInBag(dtStr, dtCh)) == false) {
        alert("Please select a valid date for the selected month");
        document.getElementById('txtage').value = "";
        return false;
    }

    return true;
}


function mypopup(url, width, height) {
    mywindow = window.open(url, "mywindow1", "location=0,status=1,scrollbars=1,resizable=1,menubar=1,width=" + width + ",height=" + height);

    mywindow.focus();
}
function trim(value) {
    var temp = value;
    var obj = /^(\s*)([\W\w]*)(\b\s*$)/;
    if (obj.test(temp)) {
        temp = temp.replace(obj, '$2');
    }
    var obj = / +/g;
    temp = temp.replace(obj, " ");
    if (temp == " ") {
        temp = "";
    }
    return temp;
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
function isAlphabets(obj_nam) {
    var x = trim(document.getElementById(obj_nam).value);
    var invalids = "`~@#$%^*()_+=\|{}[]:;,.-'\"<>?!/1234567890";
    for (i = 0; i < invalids.length; i++) {
        if (x.indexOf(invalids.charAt(i)) >= 0 || x == false) {
            return false;
        }
    }
    return true;
}

function isAlphaNumeric(obj_nam, stat) {
    var x = trim(document.getElementById(obj_nam).value);
    var invalids = "";

    if (stat == 0)
        invalids = "`~@#$%^&*()_-+=\|{}[]:;'\"<>,.?/1234567890";
    else
        invalids = "`~@#$%^&*()_-+=\|{}[]:;'\"<>,.?/";

    for (i = 0; i < invalids.length; i++) {
        if (x.indexOf(invalids.charAt(i)) >= 0 || x == false) {
            return false;
        }
    }
    return true;
}

function isCity(obj_nam) {
    var x = trim(document.getElementById(obj_nam).value);
    var invalids = "`~@#$%^*()_+=\|{}[]:;,'\"<>?!/1234567890";
    for (i = 0; i < invalids.length; i++) {
        if (x.indexOf(invalids.charAt(i)) >= 0 || x == false) {
            return false;
        }
    }
    return true;
}
function isDepCity(obj_nam) {
    var x = trim(document.getElementById(obj_nam).value);
    var invalids = "`~@#$%^*()_+=\|{}[]:;'\"<>!,?";
    for (i = 0; i < invalids.length; i++) {
        if (x.indexOf(invalids.charAt(i)) >= 0 || x == false) {
            return false;
        }
    }
    return true;
}


function isAddress(obj_nam) {
    var x = trim(document.getElementById(obj_nam).value);
    var invalids = '\"?,\'';
    for (i = 0; i < invalids.length; i++) {
        if (x.indexOf(invalids.charAt(i)) >= 0 || x == false) {
            return false;
        }
    }
    return true;
}

function isNumeric(obj_nam) {
    var x = trim(document.getElementById(obj_nam).value);
//  var anum=/(^\d+$)|(^\d+\.\d+$)/;
    var anum = /(^\d+$)/;
    if (anum.test(x)) {
        return true;
    } else {
        return false;
    }
}

function isFloat(obj_nam) {
    var x = trim(document.getElementById(obj_nam).value);
    var anum = /(^\d+$)|(^\d+\.\d+$)/;
    if (anum.test(x)) {
        return true;
    } else {
        return false;
    }
}

///^[\-_a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}(\.[a-zA-Z0-9]{2})*$/
/*
 function isEmailId(SEmail) {

 var emailPattern = /^[a-zA-Z0-9]+([\-_.a-zA-Z0-9]+)*\@[\-_a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}(\.[a-zA-Z0-9]{2})*$/;
 if(SEmail != null)
 {
 return emailPattern.test(SEmail);
 }	
 else
 {
 return SEmail;
 }
 }
 */
function isEmailUserId(SEmail) {

    var emailPattern = /^[a-zA-Z0-9]+([\-_.a-zA-Z0-9]+)*$/;
    if (SEmail != null) {
        return emailPattern.test(SEmail);
    }
    else {
        return SEmail;
    }
}
function isDomainName(SEmail) {

    var emailPattern = /^[\-_a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}(\.[a-zA-Z0-9]{2})*$/;
    if (SEmail != null) {
        return emailPattern.test(SEmail);
    }
    else {
        return SEmail;
    }
}
//Date diff calc starts
function DaysInMonth(Y, M) {
    with (new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
}
function CompareDates(str1, str2) {
    var yr1 = parseInt(str1.substring(0, 4), 10);
    var mon1 = parseInt(str1.substring(5, 7), 10);
    var dt1 = parseInt(str1.substring(8, 10), 10);

    var yr2 = parseInt(str2.substring(0, 4), 10);
    var mon2 = parseInt(str2.substring(5, 7), 10);
    var dt2 = parseInt(str2.substring(8, 10), 10);

    var date1 = new Date(yr1, mon1, dt1);
    var date2 = new Date(yr2, mon2, dt2);
    /* if(date2 < date1)    
     return false;
     else
     return true;*/
    if (date1 == date2) return 0;
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
}

function datediff(date1, date2) {
    var y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate(),
        y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();

    if (d1 < d2) {
        m1--;
        d1 += DaysInMonth(y2, m2);
    }
    if (m1 < m2) {
        y1--;
        m1 += 12;
    }
    return [y1 - y2, m1 - m2, d1 - d2];
}

function expcalc(frommon, fromyr, tomon, toyr) {
    var calday = 01;
    var calmon = frommon;
    var calyear = fromyr;

    var curday = 01;
    var curmon = tomon;
    var curyear = toyr;

    var curd = new Date(curyear, curmon - 1, curday);
    var cald = new Date(calyear, calmon - 1, calday);

    var diff = Date.UTC(curyear, curmon, curday, 0, 0, 0) - Date.UTC(calyear, calmon, calday, 0, 0, 0);

    var dife = datediff(curd, cald);
    return dife[0] + "/" + dife[1];

}
function diffDates(frommon, fromyr, tomon, toyr) {

    var fday = 01;
    var fmon = frommon;
    var fyear = fromyr;

    var tday = 01;
    var tmon = tomon;
    var tyear = toyr;

    var tdate = new Date(tyear, tmon - 1, tday);
    var fdate = new Date(fyear, fmon - 1, fday);

    if (fdate < tdate)
        return false;
    else
        return true;

}


function yearsDiff() {

    if (document.getElementById('selfromyr3').value != "" && document.getElementById('seltoyr3').value != "" && document.getElementById('selfrommon3').value != "" && document.getElementById('seltomon3').value != "") {
        //textto=(document.getElementById('seltoyr3').value - document.getElementById('selfromyr3').value)+"/"+Math.abs((document.getElementById('selfrommon3').value - document.getElementById('seltomon3').value));
        //my code
        if (document.getElementById('selfromyr3').value > document.getElementById('seltoyr3').value) {
            alert("From Year cannot be greater than to year");
            document.getElementById('selfromyr3').value = "";
            document.getElementById('seltoyr3').value = "";
            document.getElementById('selfrommon3').value = "";
            document.getElementById('seltomon3').value = "";
            document.getElementById('txtservice3').value = "";
        }
        else if (document.getElementById('selfromyr3').value == document.getElementById('seltoyr3').value) {
            //alert(parseInt(document.getElementById('selfrommon1').value));
            //alert(parseInt(document.getElementById('seltomon1').value));
            if ((document.getElementById('selfrommon3').value) >= (document.getElementById('seltomon3').value)) {
                alert("From Month cannot be greater than or equal to To Month");
                document.getElementById('selfromyr3').value = "";
                document.getElementById('seltoyr3').value = "";
                document.getElementById('selfrommon3').value = "";
                document.getElementById('seltomon3').value = "";
                document.getElementById('txtservice3').value = "";
            }
            else {
                textto = expcalc(document.getElementById('selfrommon3').value, document.getElementById('selfromyr3').value, document.getElementById('seltomon3').value, document.getElementById('seltoyr3').value);
                document.getElementById('txtservice3').value = textto;
            }
        }
        else {
            textto = expcalc(document.getElementById('selfrommon3').value, document.getElementById('selfromyr3').value, document.getElementById('seltomon3').value, document.getElementById('seltoyr3').value);
            document.getElementById('txtservice3').value = textto;
        }
        //end of my code
    } else {
        document.getElementById('txtservice3').value = "";
    }
    //employer 4
    if (document.getElementById('selfromyr4').value != "" && document.getElementById('seltoyr4').value != "" && document.getElementById('selfrommon4').value != "" && document.getElementById('seltomon4').value != "") {
        //textto=(document.getElementById('seltoyr3').value - document.getElementById('selfromyr3').value)+"/"+Math.abs((document.getElementById('selfrommon3').value - document.getElementById('seltomon3').value));
        //my code
        if (document.getElementById('selfromyr4').value > document.getElementById('seltoyr4').value) {
            alert("From Year cannot be greater than to year");
            document.getElementById('selfromyr4').value = "";
            document.getElementById('seltoyr4').value = "";
            document.getElementById('selfrommon4').value = "";
            document.getElementById('seltomon4').value = "";
            document.getElementById('txtservice4').value = "";
        }
        else if (document.getElementById('selfromyr4').value == document.getElementById('seltoyr4').value) {
            //alert(parseInt(document.getElementById('selfrommon1').value));
            //alert(parseInt(document.getElementById('seltomon1').value));
            if ((document.getElementById('selfrommon4').value) >= (document.getElementById('seltomon4').value)) {
                alert("From Month cannot be greater than or equal to To Month");
                document.getElementById('selfromyr4').value = "";
                document.getElementById('seltoyr4').value = "";
                document.getElementById('selfrommon4').value = "";
                document.getElementById('seltomon4').value = "";
                document.getElementById('txtservice4').value = "";
            }
            else {
                textto = expcalc(document.getElementById('selfrommon4').value, document.getElementById('selfromyr4').value, document.getElementById('seltomon4').value, document.getElementById('seltoyr4').value);
                document.getElementById('txtservice4').value = textto;
            }
        }
        else {
            textto = expcalc(document.getElementById('selfrommon4').value, document.getElementById('selfromyr4').value, document.getElementById('seltomon4').value, document.getElementById('seltoyr4').value);
            document.getElementById('txtservice4').value = textto;
        }
        //end of my code
    } else {
        document.getElementById('txtservice4').value = "";
    }
    //employer 5
    if (document.getElementById('selfromyr5').value != "" && document.getElementById('seltoyr5').value != "" && document.getElementById('selfrommon5').value != "" && document.getElementById('seltomon5').value != "") {
        //textto=(document.getElementById('seltoyr3').value - document.getElementById('selfromyr3').value)+"/"+Math.abs((document.getElementById('selfrommon3').value - document.getElementById('seltomon3').value));
        //my code
        if (document.getElementById('selfromyr5').value > document.getElementById('seltoyr5').value) {
            alert("From Year cannot be greater than to year");
            document.getElementById('selfromyr5').value = "";
            document.getElementById('seltoyr5').value = "";
            document.getElementById('selfrommon5').value = "";
            document.getElementById('seltomon5').value = "";
            document.getElementById('txtservice5').value = "";
        }
        else if (document.getElementById('selfromyr5').value == document.getElementById('seltoyr5').value) {
            //alert(parseInt(document.getElementById('selfrommon1').value));
            //alert(parseInt(document.getElementById('seltomon1').value));
            if ((document.getElementById('selfrommon5').value) >= (document.getElementById('seltomon5').value)) {
                alert("From Month cannot be greater than or equal to To Month");
                document.getElementById('selfromyr5').value = "";
                document.getElementById('seltoyr5').value = "";
                document.getElementById('selfrommon5').value = "";
                document.getElementById('seltomon5').value = "";
                document.getElementById('txtservice5').value = "";
            }
            else {
                textto = expcalc(document.getElementById('selfrommon5').value, document.getElementById('selfromyr5').value, document.getElementById('seltomon5').value, document.getElementById('seltoyr5').value);
                document.getElementById('txtservice5').value = textto;
            }
        }
        else {
            textto = expcalc(document.getElementById('selfrommon5').value, document.getElementById('selfromyr5').value, document.getElementById('seltomon5').value, document.getElementById('seltoyr5').value);
            document.getElementById('txtservice5').value = textto;
        }
        //end of my code
    } else {
        document.getElementById('txtservice5').value = "";
    }

    //employer 6
    if (document.getElementById('selfromyr6').value != "" && document.getElementById('seltoyr6').value != "" && document.getElementById('selfrommon6').value != "" && document.getElementById('seltomon6').value != "") {
        //textto=(document.getElementById('seltoyr3').value - document.getElementById('selfromyr3').value)+"/"+Math.abs((document.getElementById('selfrommon3').value - document.getElementById('seltomon3').value));
        //my code
        if (document.getElementById('selfromyr6').value > document.getElementById('seltoyr6').value) {
            alert("From Year cannot be greater than to year");
            document.getElementById('selfromyr6').value = "";
            document.getElementById('seltoyr6').value = "";
            document.getElementById('selfrommon6').value = "";
            document.getElementById('seltomon6').value = "";
            document.getElementById('txtservice6').value = "";
        }
        else if (document.getElementById('selfromyr6').value == document.getElementById('seltoyr6').value) {
            //alert(parseInt(document.getElementById('selfrommon1').value));
            //alert(parseInt(document.getElementById('seltomon1').value));
            if ((document.getElementById('selfrommon6').value) >= (document.getElementById('seltomon6').value)) {
                alert("From Month cannot be greater than or equal to To Month");
                document.getElementById('selfromyr6').value = "";
                document.getElementById('seltoyr6').value = "";
                document.getElementById('selfrommon6').value = "";
                document.getElementById('seltomon6').value = "";
                document.getElementById('txtservice6').value = "";
            }
            else {
                textto = expcalc(document.getElementById('selfrommon6').value, document.getElementById('selfromyr6').value, document.getElementById('seltomon6').value, document.getElementById('seltoyr6').value);
                document.getElementById('txtservice6').value = textto;
            }
        }
        else {
            textto = expcalc(document.getElementById('selfrommon6').value, document.getElementById('selfromyr6').value, document.getElementById('seltomon6').value, document.getElementById('seltoyr6').value);
            document.getElementById('txtservice6').value = textto;
        }
        //end of my code
    } else {
        document.getElementById('txtservice6').value = "";
    }

    //employer 7
    if (document.getElementById('selfromyr7').value != "" && document.getElementById('seltoyr7').value != "" && document.getElementById('selfrommon7').value != "" && document.getElementById('seltomon7').value != "") {
        //textto=(document.getElementById('seltoyr3').value - document.getElementById('selfromyr3').value)+"/"+Math.abs((document.getElementById('selfrommon3').value - document.getElementById('seltomon3').value));
        //my code
        if (document.getElementById('selfromyr7').value > document.getElementById('seltoyr7').value) {
            alert("From Year cannot be greater than to year");
            document.getElementById('selfromyr7').value = "";
            document.getElementById('seltoyr7').value = "";
            document.getElementById('selfrommon7').value = "";
            document.getElementById('seltomon7').value = "";
            document.getElementById('txtservice7').value = "";
        }
        else if (document.getElementById('selfromyr7').value == document.getElementById('seltoyr7').value) {
            //alert(parseInt(document.getElementById('selfrommon1').value));
            //alert(parseInt(document.getElementById('seltomon1').value));
            if ((document.getElementById('selfrommon7').value) >= (document.getElementById('seltomon7').value)) {
                alert("From Month cannot be greater than or equal to To Month");
                document.getElementById('selfromyr7').value = "";
                document.getElementById('seltoyr7').value = "";
                document.getElementById('selfrommon7').value = "";
                document.getElementById('seltomon7').value = "";
                document.getElementById('txtservice7').value = "";
            }
            else {
                textto = expcalc(document.getElementById('selfrommon7').value, document.getElementById('selfromyr7').value, document.getElementById('seltomon7').value, document.getElementById('seltoyr7').value);
                document.getElementById('txtservice7').value = textto;
            }
        }
        else {
            textto = expcalc(document.getElementById('selfrommon7').value, document.getElementById('selfromyr7').value, document.getElementById('seltomon7').value, document.getElementById('seltoyr7').value);
            document.getElementById('txtservice7').value = textto;
        }
        //end of my code
    } else {
        document.getElementById('txtservice7').value = "";
    }

    if (document.getElementById('selfromyr1').value != "" && document.getElementById('seltoyr1').value != "" && document.getElementById('selfrommon1').value != "" && document.getElementById('seltomon1').value != "") {
        //textto=(document.getElementById('seltoyr1').value - document.getElementById('selfromyr1').value)+"/"+Math.abs((document.getElementById('selfrommon1').value - document.getElementById('seltomon1').value));
        //my code
        if (document.getElementById('selfromyr1').value > document.getElementById('seltoyr1').value) {
            alert("From Year cannot be greater than to year");
            document.getElementById('selfromyr1').value = "";
            document.getElementById('seltoyr1').value = "";
            document.getElementById('selfrommon1').value = "";
            document.getElementById('seltomon1').value = "";
            document.getElementById('txtservice1').value = "";
        }
        else if (document.getElementById('selfromyr1').value == document.getElementById('seltoyr1').value) {
            //alert(parseInt(document.getElementById('selfrommon1').value));
            //alert(parseInt(document.getElementById('seltomon1').value));
            if ((document.getElementById('selfrommon1').value) >= (document.getElementById('seltomon1').value)) {
                alert("From Month cannot be greater than or equal to To Month");
                document.getElementById('selfromyr1').value = "";
                document.getElementById('seltoyr1').value = "";
                document.getElementById('selfrommon1').value = "";
                document.getElementById('seltomon1').value = "";
                document.getElementById('txtservice1').value = "";
            }
            else {
                textto = expcalc(document.getElementById('selfrommon1').value, document.getElementById('selfromyr1').value, document.getElementById('seltomon1').value, document.getElementById('seltoyr1').value);
                document.getElementById('txtservice1').value = textto;
            }
        }
        else {
            textto = expcalc(document.getElementById('selfrommon1').value, document.getElementById('selfromyr1').value, document.getElementById('seltomon1').value, document.getElementById('seltoyr1').value);
            document.getElementById('txtservice1').value = textto;
        }
        //end of my code
    } else {
        document.getElementById('txtservice1').value = "";
    }


    if (document.getElementById('selfromyr2').value != "" && document.getElementById('seltoyr2').value != "" && document.getElementById('selfrommon2').value != "" && document.getElementById('seltomon2').value != "") {
        //my code
        if (document.getElementById('selfromyr2').value > document.getElementById('seltoyr2').value) {
            alert("From Year cannot be greater than to year");
            document.getElementById('selfromyr2').value = "";
            document.getElementById('seltoyr2').value = "";
            document.getElementById('selfrommon2').value = "";
            document.getElementById('seltomon2').value = "";
            document.getElementById('txtservice2').value = "";
        }
        else if (document.getElementById('selfromyr2').value == document.getElementById('seltoyr2').value) {
            //alert(parseInt(document.getElementById('selfrommon1').value));
            //alert(parseInt(document.getElementById('seltomon1').value));
            if ((document.getElementById('selfrommon2').value) >= (document.getElementById('seltomon2').value)) {
                alert("From Month cannot be greater than or equal to To Month");
                document.getElementById('selfromyr2').value = "";
                document.getElementById('seltoyr2').value = "";
                document.getElementById('selfrommon2').value = "";
                document.getElementById('seltomon2').value = "";
                document.getElementById('txtservice2').value = "";
            }
            else {
                textto = expcalc(document.getElementById('selfrommon2').value, document.getElementById('selfromyr2').value, document.getElementById('seltomon2').value, document.getElementById('seltoyr2').value);
                document.getElementById('txtservice2').value = textto;
            }
        }
        else {
            textto = expcalc(document.getElementById('selfrommon2').value, document.getElementById('selfromyr2').value, document.getElementById('seltomon2').value, document.getElementById('seltoyr2').value);
            document.getElementById('txtservice2').value = textto;
        }
        //end of my code

    } else {

        document.getElementById('txtservice2').value = "";
    }

}

//Date diff calc ends

function getAge(varAsOfDate, varBirthDate) {
    var dtAsOfDate;
    var dtBirth;
    var dtAnniversary;
    var intSpan;
    var intYears;
    var intMonths;
    var intWeeks;
    var intDays;
    var intHours;
    var intMinutes;
    var intSeconds;
    var strHowOld;

    // get born date
    dtBirth = new Date(varBirthDate);

    // get as of date
    dtAsOfDate = new Date(varAsOfDate);

    // if as of date is on or after born date
    if (dtAsOfDate >= dtBirth) {

        // get time span between as of time and birth time
        intSpan = ( dtAsOfDate.getUTCHours() * 3600000 +
            dtAsOfDate.getUTCMinutes() * 60000 +
            dtAsOfDate.getUTCSeconds() * 1000    ) -
            ( dtBirth.getUTCHours() * 3600000 +
            dtBirth.getUTCMinutes() * 60000 +
            dtBirth.getUTCSeconds() * 1000       )


        if (dtAsOfDate.getUTCDate() > dtBirth.getUTCDate() ||
            ( dtAsOfDate.getUTCDate() == dtBirth.getUTCDate() && intSpan >= 0 )) {

            // most recent day (date) anniversary is in as of month
            dtAnniversary =
                new Date(Date.UTC(dtAsOfDate.getUTCFullYear(),
                    dtAsOfDate.getUTCMonth(),
                    dtBirth.getUTCDate(),
                    dtBirth.getUTCHours(),
                    dtBirth.getUTCMinutes(),
                    dtBirth.getUTCSeconds()));

        }


        else {

            // most recent day (date) anniversary is in month before as of month
            dtAnniversary =
                new Date(Date.UTC(dtAsOfDate.getUTCFullYear(),
                    dtAsOfDate.getUTCMonth() - 1,
                    dtBirth.getUTCDate(),
                    dtBirth.getUTCHours(),
                    dtBirth.getUTCMinutes(),
                    dtBirth.getUTCSeconds()));

            // get previous month
            intMonths = dtAsOfDate.getUTCMonth() - 1;
            if (intMonths == -1)
                intMonths = 11;

            // while month is not what it is supposed to be (it will be higher)
            while (dtAnniversary.getUTCMonth() != intMonths)

                // move back one day
                dtAnniversary.setUTCDate(dtAnniversary.getUTCDate() - 1);

        }

        // if anniversary month is on or after birth month
        if (dtAnniversary.getUTCMonth() >= dtBirth.getUTCMonth()) {

            // months elapsed is anniversary month - birth month
            intMonths = dtAnniversary.getUTCMonth() - dtBirth.getUTCMonth();

            // years elapsed is anniversary year - birth year
            intYears = dtAnniversary.getUTCFullYear() - dtBirth.getUTCFullYear();

        }

        // if birth month is after anniversary month
        else {

            // months elapsed is months left in birth year + anniversary month
            intMonths = (11 - dtBirth.getUTCMonth()) + dtAnniversary.getUTCMonth() + 1;

            // years elapsed is year before anniversary year - birth year
            intYears = (dtAnniversary.getUTCFullYear() - 1) - dtBirth.getUTCFullYear();

        }

        // to calculate weeks, days, hours, minutes and seconds
        // we can take the difference from anniversary date and as of date

        // get time span between two dates in milliseconds
        intSpan = dtAsOfDate - dtAnniversary;

        // get number of weeks
        intWeeks = Math.floor(intSpan / 604800000);

        // subtract weeks from time span
        intSpan = intSpan - (intWeeks * 604800000);

        // get number of days
        intDays = Math.floor(intSpan / 86400000);

        // subtract days from time span
        intSpan = intSpan - (intDays * 86400000);

        // get number of hours
        intHours = Math.floor(intSpan / 3600000);

        // subtract hours from time span
        intSpan = intSpan - (intHours * 3600000);

        // get number of minutes
        intMinutes = Math.floor(intSpan / 60000);

        // subtract minutes from time span
        intSpan = intSpan - (intMinutes * 60000);

        // get number of seconds
        intSeconds = Math.floor(intSpan / 1000);

        // create output string     
        if (intYears > 0)
            if (intYears > 1)
                strHowOld = intYears.toString();
            else
                strHowOld = intYears.toString();
        else
            strHowOld = '';
    }
    else
        strHowOld = 'Not Born Yet'
    // return string representation
    return strHowOld
}

function setAge() {
    if ((document.getElementById('seldobyear').value != '') && (document.getElementById('seldobmon').value != '') && (document.getElementById('seldobday').value != '')) {
        varBirthDate = document.getElementById('seldobmon').value + '/' + document.getElementById('seldobday').value + '/' + document.getElementById('seldobyear').value;
        //var state_applied = document.getElementById('selstateapplied').value;
        if (isDate(varBirthDate) != false) {
            //if(state_applied=="11" || state_applied=="12" || state_applied=="13" || state_applied=="14" || state_applied=="15" || state_applied=="16" || state_applied=="17" || state_applied=="18" || state_applied=="22" || state_applied=="01" || state_applied=="02" || state_applied=="19" || state_applied=="03" || state_applied=="23" || state_applied=="24" || state_applied=="25" || state_applied=="26" || state_applied=="04" || state_applied=="05" || state_applied=="06" || state_applied=="07" || state_applied=="08" || state_applied=="09" || state_applied=="10" || state_applied=="20" || state_applied=="21" || state_applied=="27" || state_applied=="28")
            //{			
            var min1 = AgeMinDate1.split('/');
            var max1 = AgeMaxDate1.split('/');
            //}

            var maxYear = document.getElementById('myear').value;
            var maxDay = max1[1];
            //var maxDay="01";//hardcoded due to applications demand
            var maxMonth = max1[0];   //2009	
            //var maxMonth="07";//hardcoded due to applications demand

            var minYear = min1[2];
            var minDay = min1[1];
            var minMonth = min1[0];  //1991				
            var end = maxDay + '/' + maxMonth + '/' + maxYear;
            var st = minDay + '/' + minMonth + '/' + minYear;

            if (document.getElementById('seldobyear').value == minYear) {
                /*if((document.getElementById('selpost').value == '04') || 	(document.getElementById('selpost').value == '05') || 	(document.getElementById('selpost').value == '02'))
                 {
                 if(document.getElementById('seldobmon').value > '03' )
                 {
                 alert('Date Of Birth should be between '+end+' to '+st);
                 document.getElementById("seldobmon").focus();
                 document.getElementById('txtage').value='';	
                 return false;
                 }	
                 }
                 else if(document.getElementById('selpost').value == '03')
                 {
                 if(document.getElementById("seldobmon").value > '04')
                 {
                 alert('Date Of Birth should be between '+end+' to '+st);
                 document.getElementById("seldobday").focus();
                 document.getElementById('txtage').value='';	
                 return false;
                 }
                 if(document.getElementById("seldobmon").value=='04')
                 {
                 if(document.getElementById("seldobday").value > '01')
                 {
                 alert('Date Of Birth should be between '+end+' to '+st);
                 document.getElementById("seldobday").focus();
                 document.getElementById('txtage').value='';	
                 return false;
                 }
                 }

                 }*/

                //for post code4 started

                if (document.getElementById('seldobmon').value > '01') {
                    alert("Date Of Birth for UR should be between 01/01/1974 to 01/01/1996 \n\n Date Of Birth for SC/ST should be between 01/01/1969 to 01/01/1996 \n\n Date Of Birth for OBC-A/OBC-B should be between 01/01/1971 to 01/01/1996");
                    document.getElementById("seldobday").focus();
                    document.getElementById('txtage').value = '';
                    return false;
                }


                if (document.getElementById('seldobmon').value == '01') {
                    if (document.getElementById("seldobday").value > '01') {
                        alert("Date Of Birth for UR should be between 01/01/1974 to 01/01/1996 \n\n Date Of Birth for SC/ST should be between 01/01/1969 to 01/01/1996 \n\n Date Of Birth for OBC-A/OBC-B should be between 01/01/1971 to 01/01/1996");
                        document.getElementById("seldobday").focus();
                        document.getElementById('txtage').value = '';
                        return false;
                    }
                }
                //for post code4 ended
                //for post code4 started
                /*
                 if(document.getElementById('seldobmon').value > '08')
                 {
                 alert('Date Of Birth should be between '+end+' to '+st);
                 document.getElementById("seldobday").focus();
                 document.getElementById('txtage').value='';	
                 return false;
                 }	


                 if(document.getElementById('seldobmon').value == '08')
                 {
                 if(document.getElementById("seldobday").value > '21')
                 {
                 alert('Date Of Birth should be between '+end+' to '+st);
                 document.getElementById("seldobday").focus();
                 document.getElementById('txtage').value='';	
                 return false;
                 }
                 }*/
                //for post code4 ended


            }

            if (document.getElementById('seldobyear').value == maxYear) {
                /*if(document.getElementById('seldobmon').value < '12')
                 {
                 alert('Date Of Birth should be between '+end+' to '+st);
                 document.getElementById("seldobday").focus();
                 document.getElementById('txtage').value='';	
                 return false;
                 }

                 if(document.getElementById('seldobmon').value == '08')
                 {
                 if(document.getElementById("seldobday").value < '22')
                 {
                 alert('Date Of Birth should be between '+end+' to '+st);
                 document.getElementById("seldobday").focus();
                 document.getElementById('txtage').value='';	
                 return false;
                 }
                 }*/

                /*if(document.getElementById('seldobmon').value < '01')
                 {
                 alert('Date Of Birth should be between '+end+' to '+st);
                 document.getElementById("seldobday").focus();
                 document.getElementById('txtage').value='';	
                 return false;
                 }*/

                if (document.getElementById('seldobmon').value == '01') {
                    if (document.getElementById("seldobday").value < '02') {
                        alert("Date Of Birth for UR should be between 01/01/1974 to 01/01/1996 \n\n Date Of Birth for SC/ST should be between 01/01/1969 to 01/01/1996 \n\n Date Of Birth for OBC-A/OBC-B should be between 01/01/1971 to 01/01/1996");
                        document.getElementById("seldobday").focus();
                        document.getElementById('txtage').value = '';
                        return false;
                    }
                }
            }

            var age = getAge(AgeAsOfDate, varBirthDate);
            if (document.getElementById('seldobyear').value == maxYear && document.getElementById('seldobmon').value == '01' && document.getElementById("seldobday").value == "02") {
                age = parseInt(age) + 1;
            }
            if (document.getElementById('seldobyear').value == minYear && document.getElementById('seldobmon').value == '01' && document.getElementById("seldobday").value == "02") {
                age = parseInt(age) + 1;
            }
            document.getElementById('txtage').value = age;
        }
    } else {
        document.getElementById('txtage').value = '';
    }
}


function getYears() {
    // var state_applied = document.getElementById('selstateapplied').value;

    document.getElementById('seldobyear').options.length = 0;
    document.getElementById('seldobyear').options[0] = new Option('Year', '');
    //if(state_applied=="11" || state_applied=="12" || state_applied=="13" || state_applied=="14" || state_applied=="15" || state_applied=="16" || state_applied=="17" || state_applied=="18" || state_applied=="22" || state_applied=="01" || state_applied=="02" || state_applied=="19" || state_applied=="03" || state_applied=="23" || state_applied=="24" || state_applied=="25" || state_applied=="26" || state_applied=="04" || state_applied=="05" || state_applied=="06" || state_applied=="07" || state_applied=="08" || state_applied=="09" || state_applied=="10" || state_applied=="20" || state_applied=="21" || state_applied=="27" || state_applied=="28")
    //{

    var min1 = AgeMinDate1.split('/');
    var max1 = AgeMaxDate1.split('/');

    var maxYear = max1[2];
    var maxDay = max1[1];
    var maxMonth = max1[0];

    var minYear = min1[2];
    var minDay = min1[1];
    var minMonth = min1[0];

    category = get_radio_value(document.reg_frm.opt_cat);
    //post = document.reg_frm.selpost.value;
    //bank = document.reg_frm.selbank.value;

    //riots=get_radio_value(document.reg_frm.optriots);
    //confirmed_employe=get_radio_value(document.reg_frm.confirmed_employe);

    var addyear = 0;
    if (category != "") {
        maxYear = getYearsfromajax();
        //alert(maxYear);		
        document.getElementById('myear').value = maxYear;
        var x = 1;
        for (i = minYear; i >= maxYear; i--) {
            document.getElementById('seldobyear').options[x] = new Option(i, i);
            x++;
        }
    }
    //}


    //alert(maxYear);	
}//end of function getYears()

/*function getYearsfromajax(){
 if (window.XMLHttpRequest)
 {// code for IE7+, Firefox, Chrome, Opera, Safari
 xmlhttp=new XMLHttpRequest();
 }
 else
 {// code for IE6, IE5
 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 }
 category=get_radio_value(document.reg_frm.opt_cat);
 pwd=get_radio_value(document.reg_frm.optdisability);
 exservice=get_radio_value(document.reg_frm.optexservice);
 jk=get_radio_value(document.reg_frm.optkashmir);
 //riots=get_radio_value(document.reg_frm.optriots);
 wdwjs=get_radio_value(document.reg_frm.optwdwjs);
 disxs=get_radio_value(document.reg_frm.optdisxs);
 post_code = document.getElementById('selpost').value;

 xmlhttp.open("POST",'ajax_getYears.php?category_name='+category+'&disability='+pwd+'&exserviceman='+exservice+'&state_jk='+jk+'&wdwjs='+wdwjs+'&disxs='+disxs+'&post_code='+post_code,false);
 //xmlhttp.open("POST",'ajax_checkImageStatus.php?imagename='+imagename_1+imagename_2+imagename_3+imagename_4+imagename_5+'&imagetype=signature',false);
 xmlhttp.send("NULL");
 return xmlhttp.responseText;
 }*/
function wrkexptype() {
    var frm = document.reg_frm;
    if (frm.selwrkexp.value != "") {
        //showdiv('service1');	
        if (frm.selwrkexp.value == "Armed Forces") {
            //showdiv('service2');
            frm.optarmedfit[1].disabled = false;
            frm.optarmedfit[0].disabled = false;
            frm.optarmedfit[1].checked = true;//this line may be commented later
            //hidediv('service3');
            //dv('selparam').value='';

            document.getElementById('selarmed').disabled = false;
            document.getElementById('selarmed').value = "";
            //dv('txtarmedper').value='';
            document.getElementById('txtarmedper').disabled = false;
            document.getElementById('txtarmedper').value = "";
            //dv('txtarmedrank').value='';
            document.getElementById('txtarmedrank').disabled = false;
            document.getElementById('txtarmedrank').value = "";
            frm.optarmedfit[1].disabled = false;
            frm.optarmedfit[0].disabled = false;
            frm.optarmedfit[0].checked = false;
            frm.optarmedfit[1].checked = true;


            document.getElementById('selparam').disabled = true;
            document.getElementById('selparam').value = "";
            //dv('txtparamper').value='';
            document.getElementById('txtparamper').disabled = true;
            document.getElementById('txtparamper').value = "";
            //dv('txtparamrank').value='';
            document.getElementById('txtparamrank').disabled = true;
            document.getElementById('txtparamrank').value = "";
            frm.optparamfit[1].disabled = true;
            frm.optparamfit[0].disabled = true;
            frm.optparamfit[0].checked = false;
            frm.optparamfit[1].checked = false;


            //hidediv('service4');
            //dv('selpolice').value='';
            document.getElementById('selpolice').disabled = true;
            document.getElementById('selpolice').value = "";
            //dv('txtpoliceper').value='';
            document.getElementById('txtpoliceper').disabled = true;
            document.getElementById('txtpoliceper').value = "";
            //dv('txtpolicerank').value='';
            document.getElementById('txtpolicerank').disabled = true;
            document.getElementById('txtpolicerank').value = "";
            frm.optpolicefit[1].disabled = true;
            frm.optpolicefit[0].disabled = true;
            frm.optpolicefit[0].checked = false;
            frm.optpolicefit[1].checked = false;

        }
        else {
            //hidediv('service2');
            //dv('selarmed').value='';
            document.getElementById('selarmed').disabled = true;
            document.getElementById('selarmed').value = "";
            //dv('txtarmedper').value='';
            document.getElementById('txtarmedper').disabled = true;
            document.getElementById('txtarmedper').value = "";
            //dv('txtarmedrank').value='';
            document.getElementById('txtarmedrank').disabled = true;
            document.getElementById('txtarmedrank').value = "";
            frm.optarmedfit[1].disabled = true;
            frm.optarmedfit[0].disabled = true;
            frm.optarmedfit[0].checked = false;
            frm.optarmedfit[1].checked = false;


            document.getElementById('selparam').disabled = false;
            document.getElementById('selparam').value = "";
            //dv('txtparamper').value='';
            document.getElementById('txtparamper').disabled = false;
            document.getElementById('txtparamper').value = "";
            //dv('txtparamrank').value='';
            document.getElementById('txtparamrank').disabled = false;
            document.getElementById('txtparamrank').value = "";
            frm.optparamfit[1].disabled = false;
            frm.optparamfit[0].disabled = false;
            frm.optparamfit[0].checked = false;
            frm.optparamfit[1].checked = true;


            document.getElementById('selpolice').disabled = false;
            document.getElementById('selpolice').value = "";
            //dv('txtpoliceper').value='';
            document.getElementById('txtpoliceper').disabled = false;
            document.getElementById('txtpoliceper').value = "";
            //dv('txtpolicerank').value='';
            document.getElementById('txtpolicerank').disabled = false;
            document.getElementById('txtpolicerank').value = "";
            //frm.optpolicefit[0].checked=false;
            //frm.optpolicefit[1].checked=false;

            frm.optpolicefit[1].disabled = false;
            frm.optpolicefit[0].disabled = false;
            frm.optpolicefit[1].checked = true;//this line may be commented later

            //showdiv('service3');
            //frm.optparamfit[1].checked=true;//this line may be commented later
            //showdiv('service4');
            //frm.optpolicefit[1].checked=true;//this line may be commented later
        }
    }
    else {
        //hidediv('service1');
        //hidediv('service2');
        //dv('selarmed').value='';
        document.getElementById('selarmed').disabled = true;
        document.getElementById('selarmed').value = "";
        //dv('txtarmedper').value='';
        document.getElementById('txtarmedper').disabled = true;
        document.getElementById('txtarmedper').value = "";
        //dv('txtarmedrank').value='';
        document.getElementById('txtarmedrank').disabled = true;
        document.getElementById('txtarmedrank').value = "";
        frm.optarmedfit[1].disabled = true;
        frm.optarmedfit[0].disabled = true;
        frm.optarmedfit[0].checked = false;
        frm.optarmedfit[1].checked = false;


        //hidediv('service3');
        //dv('selparam').value='';
        document.getElementById('selparam').disabled = true;
        document.getElementById('selparam').value = "";
        //dv('txtparamper').value='';
        document.getElementById('txtparamper').disabled = true;
        document.getElementById('txtparamper').value = "";
        //dv('txtparamrank').value='';
        document.getElementById('txtparamrank').disabled = true;
        document.getElementById('txtparamrank').value = "";
        frm.optparamfit[1].disabled = true;
        frm.optparamfit[0].disabled = true;
        frm.optparamfit[0].checked = false;
        frm.optparamfit[1].checked = false;


        //hidediv('service4');
        //dv('selpolice').value='';
        document.getElementById('selpolice').disabled = true;
        document.getElementById('selpolice').value = "";
        //dv('txtpoliceper').value='';
        document.getElementById('txtpoliceper').disabled = true;
        document.getElementById('txtpoliceper').value = "";
        //dv('txtpolicerank').value='';
        document.getElementById('txtpolicerank').disabled = true;
        document.getElementById('txtpolicerank').value = "";
        frm.optpolicefit[1].disabled = true;
        frm.optpolicefit[0].disabled = true;
        frm.optpolicefit[0].checked = false;
        frm.optpolicefit[1].checked = false;

    }
}

function getYearsfromajax() {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //stateapplied=document.getElementById('selstateapplied').value;
    category = get_radio_value(document.reg_frm.opt_cat);
    pwd = get_radio_value(document.reg_frm.optdisability);
    exservice = get_radio_value(document.reg_frm.optexservice);
    //disxs=get_radio_value(document.reg_frm.optdisxs);
    //dxs=get_radio_value(document.reg_frm.optdxs);

    //riots=get_radio_value(document.reg_frm.riots);
    state_jk = get_radio_value(document.reg_frm.optkashmir);
    //rrb=get_radio_value(document.reg_frm.optrrb);
    //emp_banks=get_radio_value(document.reg_frm.clerk_emp);

    //dxs=get_radio_value(document.reg_frm.optdxs);
    //dixs=get_radio_value(document.reg_frm.optdisxs);
    //women=get_radio_value(document.reg_frm.opt_widow);

    //riots=get_radio_value(document.reg_frm.optriots);
    //post_code = document.getElementById('selpost').value;
    //selbank = document.getElementById('selbank').value;	

    xmlhttp.open("POST", 'ajax_getYears.php?category_name=' + category + '&exserviceman=' + exservice + '&state_jk=' + state_jk + '&pwd=' + pwd, false);
    //xmlhttp.open("POST",'ajax_getYears.php?category_name='+category+'&exserviceman='+exservice+'&state_jk='+state_jk+'&selbank='+selbank,false);
    //xmlhttp.open("POST",'ajax_getYears.php?category_name='+category+'&pwd='+pwd+'&exserviceman='+exservice+'&dxs='+dxs+'&dixs='+dixs+'&women='+women+'&riots='+riots+'&state_jk='+state_jk+'&post_code='+post_code+'&selbank='+selbank,false);
    //alert('ajax_getYears.php?category_name='+category+'&pwd='+pwd+'&exserviceman='+exservice+'&dxs='+dxs+'&dixs='+dixs+'&women='+women+'&riots='+riots+'&state_jk='+state_jk+'&post_code='+post_code+'&selbank='+selbank);
    //xmlhttp.open("POST",'ajax_getYears.php?category_name='+category+'&disability='+pwd+'&exserviceman='+exservice+'&riots='+riots+'&state_jk='+state_jk+'&rrb='+rrb+'&emp_banks='+emp_banks,false);	
    //xmlhttp.open("POST",'ajax_checkImageStatus.php?imagename='+imagename_1+imagename_2+imagename_3+imagename_4+imagename_5+'&imagetype=signature',false);
    xmlhttp.send(null);
    return xmlhttp.responseText;
}

function chgPostBank() {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    post_code = document.getElementById('selpost').value;

    xmlhttp.open("POST", 'ajax_getBankName.php?post_code=' + post_code, false);
    xmlhttp.send(null);
    document.getElementById('divselBank').innerHTML = xmlhttp.responseText;
}

function edit_cat() {
    var fee_in_edit, db_fee;
    fee_in_edit = calculatefee_edit();
    db_fee = document.getElementById('fee_db').value;
    obj = document.reg_frm.opt_cat;

    disabilitydb = document.getElementById('disability_db').value;
    disabilitytypedb = document.getElementById('disability_type_db').value;
    disabilityperdb = document.getElementById('disability_per_db').value;
    scribedb = document.getElementById('scribe_db').value;
    exservicemandb = document.getElementById('exserviceman_db').value;
    disxsdb = document.getElementById('disxs_db').value;
    dxsdb = document.getElementById('dxs_db').value;
    exserviceinmonthsdb = document.getElementById('ex_ser_per_db').value;
    categorydb = document.getElementById('category_name_db').value;
    minoritydb = document.getElementById('minority_db').value;
    trainingdb = document.getElementById('training_db').value;
    trainingcenterdb = document.getElementById('training_centre_db').value;

    if (db_fee < fee_in_edit && document.getElementById('payment_in_db').value == "ONLINE") {
        alert("You have paid less fees, you cannot change your Category/Person With Disability/Ex - Serviceman/disabled Ex-Serviceman/Ex-Serviceman killed in action status.");
        var rad_val = '';
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].value == document.getElementById('category_name_db').value) {
                obj[i].checked = true;
            }
        }
        if (disabilitydb == 'Y')
            document.reg_frm.optdisability[0].checked = true;
        else
            document.reg_frm.optdisability[1].checked = true;
        if (disabilitytypedb == '') {
            document.getElementById('seldisabilitytype').value = '';
            document.getElementById('seldisabilitytype').disabled = true;
        }
        else {
            document.getElementById('seldisabilitytype').value = disabilitytypedb;
            document.getElementById('seldisabilitytype').disabled = false;
        }
        if (disabilityperdb == '') {
            document.getElementById('seldisabilityper').value = '';
            document.getElementById('seldisabilityper').disabled = true;
        }
        else {
            document.getElementById('seldisabilityper').value = disabilityperdb;
            document.getElementById('seldisabilityper').disabled = false;
        }
        //document.getElementById('seldisabilityper').value='';
        //document.getElementById('seldisabilityper').disabled=true;
        if (scribedb == 'NA') {
            document.reg_frm.optscribe[0].disabled = true;
            document.reg_frm.optscribe[1].disabled = true;
            document.reg_frm.optscribe[0].checked = false;
            document.reg_frm.optscribe[1].checked = false;
        }
        if (scribedb == 'Y') {
            document.reg_frm.optscribe[0].disabled = false;
            document.reg_frm.optscribe[1].disabled = false;
            document.reg_frm.optscribe[0].checked = true;
            document.reg_frm.optscribe[1].checked = false;
        }
        if (scribedb == 'N') {
            document.reg_frm.optscribe[0].disabled = false;
            document.reg_frm.optscribe[1].disabled = false;
            document.reg_frm.optscribe[0].checked = false;
            document.reg_frm.optscribe[1].checked = true;
        }

        if (exservicemandb == 'NA') {
            document.reg_frm.optexservice[0].disabled = true;
            document.reg_frm.optexservice[1].disabled = true;
            document.reg_frm.optexservice[0].checked = false;
            document.reg_frm.optexservice[1].checked = true;
        }
        if (exservicemandb == 'Y') {
            document.reg_frm.optexservice[0].disabled = false;
            document.reg_frm.optexservice[1].disabled = false;
            document.reg_frm.optexservice[0].checked = true;
            document.reg_frm.optexservice[1].checked = false;
        }
        if (exservicemandb == 'N') {
            document.reg_frm.optexservice[0].disabled = false;
            document.reg_frm.optexservice[1].disabled = false;
            document.reg_frm.optexservice[0].checked = false;
            document.reg_frm.optexservice[1].checked = true;
        }

        if (disxsdb == 'NA') {
            document.reg_frm.optdisxs[0].disabled = true;
            document.reg_frm.optdisxs[1].disabled = true;
            document.reg_frm.optdisxs[0].checked = false;
            document.reg_frm.optdisxs[1].checked = true;
        }
        if (disxsdb == 'Y') {
            document.reg_frm.optdisxs[0].disabled = false;
            document.reg_frm.optdisxs[1].disabled = false;
            document.reg_frm.optdisxs[0].checked = true;
            document.reg_frm.optdisxs[1].checked = false;
        }
        if (disxsdb == 'N') {
            document.reg_frm.optdisxs[0].disabled = false;
            document.reg_frm.optdisxs[1].disabled = false;
            document.reg_frm.optdisxs[0].checked = false;
            document.reg_frm.optdisxs[1].checked = true;
        }

        /*if(dxsdb=='NA')
         {
         document.reg_frm.optdxs[0].disabled=true;
         document.reg_frm.optdxs[1].disabled=true;
         document.reg_frm.optdxs[0].checked=false;
         document.reg_frm.optdxs[1].checked=true;
         }
         if(dxsdb=='Y')
         {
         document.reg_frm.optdxs[0].disabled=false;
         document.reg_frm.optdxs[1].disabled=false;
         document.reg_frm.optdxs[0].checked=true;
         document.reg_frm.optdxs[1].checked=false;
         }
         if(dxsdb=='N')
         {
         document.reg_frm.optdxs[0].disabled=false;
         document.reg_frm.optdxs[1].disabled=false;
         document.reg_frm.optdxs[0].checked=false;
         document.reg_frm.optdxs[1].checked=true;
         }*/
        if (exservicemandb == 'Y' || disxsdb == 'Y') {
            document.getElementById('txtexserper').value = exserviceinmonthsdb;
            document.getElementById('txtexserper').disabled = false;
        }
        //return false;
        /*if(categorydb=="SC" || categorydb=="ST" || minoritydb=="Y" || exservicemandb=="Y" || disxsdb=="Y" || dxsdb=="Y" || disabilitydb=="Y")
         {
         document.reg_frm.optpet[0].disabled=false;
         document.reg_frm.optpet[1].disabled=false;
         if(trainingdb=="Y")
         {
         document.reg_frm.optpet[0].checked=true;
         document.reg_frm.optpet[1].checked=false;
         }
         if(trainingdb=="N")
         {
         document.reg_frm.optpet[0].checked=false;
         document.reg_frm.optpet[1].checked=true;
         }
         }
         else
         {
         document.reg_frm.optpet[0].disabled=true;
         document.reg_frm.optpet[1].disabled=true;
         document.reg_frm.optpet[0].checked=false;
         document.reg_frm.optpet[1].checked=false;
         document.getElementById('selpetcentre').disabled=true;
         }*/
        if (trainingdb == "Y") {
            document.getElementById('selpetcentre').value = trainingcenterdb;
            document.getElementById('selpetcentre').disabled = false;
        }
    }
    else {
        calculatefee();
    }
    getYears();
    return true;
    //onchancat=get_radio_value(document.reg_frm.opt_cat);
    // onchandis=document.getElementById('optdisability').value;
    //var CurrentDBCategoryName;
//alert(CurrentDBCategoryName);
//var CurrentDBCategoryName; //sc or st or obc
    /*
     if(CurrentDBCategoryName=="SC" || CurrentDBCategoryName=="ST" || CurrentDBDisability!="Y" )
     {
     if(onchancat == "GENERAL" || onchancat == "OBC" )
     {
     alert("You have paid less fees, you cannot change your category.");
     document.getElementById('opt_cat').focus();
     return false;
     }
     }
     else if(CurrentDBCategoryName=="GENERAL" || CurrentDBCategoryName=="OBC"  )
     {
     return true;
     }
     */
}
function chkCategory() {

    // getyears commented for obc clerk
    calculatefee();
    getYears();

    //category=get_radio_value(document.reg_frm.opt_cat);
    /*if(category=="SC" || category=="ST" || category=="OBC")
     {
     document.reg_frm.txtcaste.disabled=false;
     }
     else
     {
     document.reg_frm.txtcaste.disabled=true;
     document.reg_frm.txtcaste.value="";
     }*/
    //enablePet();
    //feeenbdisb();
    //catcode();


}

function chkexservice() {
    exservice = get_radio_value(document.reg_frm.optexservice);
    //disxs=get_radio_value(document.reg_frm.optdisxs);
    //dxs=get_radio_value(document.reg_frm.optdxs);
    if (exservice == 'Y') {
        document.reg_frm.txtexserper.disabled = false;
        //document.reg_frm.seldisday.disabled=false;
        //document.reg_frm.seldismon.disabled=false;
        //document.reg_frm.seldisyear.disabled=false;

    }
    else {
        document.reg_frm.txtexserper.disabled = true;
        //document.reg_frm.seldisday.disabled=true;
        //document.reg_frm.seldismon.disabled=true;
        //document.reg_frm.seldisyear.disabled=true;
        document.reg_frm.txtexserper.value = "";
        //document.reg_frm.seldisday.value="";
        //document.reg_frm.seldismon.value="";
        //document.reg_frm.seldisyear.value="";
    }


    calculatefee();

}


/*
 function chkexservice_army()
 {	
 armypass=get_radio_value(document.reg_frm.optarmypass);
 if(armypass == 'Y')
 {
 showdiv("iaf");		
 showdiv("navy");
 showdiv("matric");
 }
 else
 {
 hidediv("iaf");
 hidediv("iaf_perc");
 hidediv("navy");
 hidediv("navy_perc");
 hidediv("matric");
 hidediv("matric_perc");
 document.reg_frm.optiaf[1].checked=true;
 document.reg_frm.txtiafperc.value="";
 document.reg_frm.optnavy[1].checked=true;
 document.reg_frm.txtnavyperc.value="";
 document.reg_frm.optmatric[1].checked=true;
 document.reg_frm.txtmatricperc.value="";
 }	
 //getYears();
 calculatefee();
 enablePet();
 }
 function chkexservice_iaf()
 {	
 iafperc=get_radio_value(document.reg_frm.optiaf);	
 if(iafperc == 'Y')
 {
 showdiv("iaf_perc");		
 document.reg_frm.txtiafperc.value="";
 }
 else
 {
 hidediv("iaf_perc");
 document.reg_frm.txtiafperc.value="";
 }	
 //getYears();
 calculatefee();
 enablePet();	
 }
 function chkexservice_navy()
 {	
 navyperc=get_radio_value(document.reg_frm.optnavy);	
 if(navyperc == 'Y')
 {
 showdiv("navy_perc");		
 document.reg_frm.txtnavyperc.value="";
 }
 else
 {
 hidediv("navy_perc");
 document.reg_frm.txtnavyperc.value="";
 }	
 //getYears();
 calculatefee();
 enablePet();	
 }
 function chkexservice_matric()
 {	
 matricperc=get_radio_value(document.reg_frm.optmatric);	
 if(matricperc == 'Y')
 {
 showdiv("matric_perc");		
 document.reg_frm.txtmatricperc.value="";
 }
 else
 {
 hidediv("matric_perc");
 document.reg_frm.txtmatricperc.value="";
 }	
 //getYears();
 calculatefee();
 enablePet();	
 }

 function chkfinalexam()
 {	
 if(get_radio_value(document.reg_frm.optfinalexam) =='N'){		
 document.reg_frm.selstream2.disabled=false;
 document.reg_frm.selresult2.disabled=false;
 document.reg_frm.selmark2.disabled=false;

 document.reg_frm.selstream2.value="";
 document.reg_frm.selresult2.value="";
 document.reg_frm.selmark2.value="";	

 }else{

 document.reg_frm.selstream2.value="";
 document.reg_frm.selresult2.value="";
 document.reg_frm.selmark2.value="";	

 document.reg_frm.selstream2.disabled=true;
 document.reg_frm.selresult2.disabled=true;
 document.reg_frm.selmark2.disabled=true;			
 }

 }*/


function chkMinority() {
    /*
     getYears();
     enablePet();	

     if(document.getElementById('optminority').checked == true)
     { 		  		  
     if(document.getElementById('optminority').value=='Y')
     {			
     showdiv('religion');
     hidediv('othreligion');
     document.reg_frm.txtothreligion.value="";
     }else if(document.getElementById('optminority').value=='N')
     {
     hidediv('religion');
     hidediv('othreligion');
     document.reg_frm.txtothreligion.value="";
     /*
     document.reg_frm.optreligion[0].checked=false;
     document.reg_frm.optreligion[1].checked=false;
     document.reg_frm.optreligion[2].checked=false;
     document.reg_frm.optreligion[3].checked=false;
     document.reg_frm.optreligion[4].checked=false;
     document.reg_frm.optreligion[5].checked=false;
     */
    /* document.reg_frm.optreligion.value="";
     }*/
    /* }else{
     hidediv('religion');
     hidediv('othreligion');
     document.reg_frm.txtothreligion.value="";
     /*
     document.reg_frm.optreligion[0].checked=false;
     document.reg_frm.optreligion[1].checked=false;
     document.reg_frm.optreligion[2].checked=false;
     document.reg_frm.optreligion[3].checked=false;
     document.reg_frm.optreligion[4].checked=false;
     document.reg_frm.optreligion[5].checked=false;
     */
    /*document.reg_frm.optreligion.value="";
     }	 */
    //getYears();
    //calculatefee();
    //alert("came herer");

    if (document.reg_frm.optminority[0].checked == true) {
        if (document.reg_frm.optminority[0].value == 'Y') {
            document.getElementById('selminority').disabled = false;
        } else if (document.reg_frm.optminority[1].value == 'N') {
            var frm = document.reg_frm;
            document.getElementById('selminority').value = '';
            document.getElementById('selminority').disabled = true;
            document.getElementById('othreligion').value = '';


            hidediv("divothreligion");
            //frm.txtothdomain.disabled=true;
            //frm.txtothdomain.value="";

        }
    } else {
        var frm = document.reg_frm;
        document.getElementById('selminority').value = '';
        document.getElementById('selminority').disabled = true;
        document.getElementById('othreligion').value = '';
        //document.getElementById('txtothdomain').disabled=true;

        /*removed the above line and added below three lines ,
         to disable the othertext box completely from front end  and added var frm=document.reg_frm;*/
        hidediv("divothreligion");
        //frm.txtothdomain.disabled=true;
        //frm.txtothdomain.value="";
    }
}
function chkMinorityReligion() {
    //getYears();
    //enablePet();
    //alert("enalbwer others");
    if (document.getElementById('selminority').value != "") {
        if (document.getElementById('selminority').value == 'Others') {
            showdiv('divothreligion');
        } else if (document.getElementById('selminority').value != 'Others') {
            hidediv('divothreligion');
            /*
             document.reg_frm.optreligion[0].checked=false;
             document.reg_frm.optreligion[1].checked=false;
             document.reg_frm.optreligion[2].checked=false;
             document.reg_frm.optreligion[3].checked=false;
             document.reg_frm.optreligion[4].checked=false;
             document.reg_frm.optreligion[5].checked=false;
             */
            document.reg_frm.othreligion.value = "";
        }
    } else {
        hidediv('divothreligion');
        /*
         document.reg_frm.optreligion[0].checked=false;
         document.reg_frm.optreligion[1].checked=false;
         document.reg_frm.optreligion[2].checked=false;
         document.reg_frm.optreligion[3].checked=false;
         document.reg_frm.optreligion[4].checked=false;
         document.reg_frm.optreligion[5].checked=false;
         */
        document.reg_frm.othreligion.value = "";
    }
}
function othertitle() {
    //getYears();
    //enablePet();
    //alert("enalbwer others");
    if (document.getElementById('txttitle').value != "") {
        if (document.getElementById('txttitle').value == '08') {
            showdiv('divothretitle');
        } else if (document.getElementById('txttitle').value != '08') {
            hidediv('divothretitle');
            /*
             document.reg_frm.optreligion[0].checked=false;
             document.reg_frm.optreligion[1].checked=false;
             document.reg_frm.optreligion[2].checked=false;
             document.reg_frm.optreligion[3].checked=false;
             document.reg_frm.optreligion[4].checked=false;
             document.reg_frm.optreligion[5].checked=false;
             */
            document.reg_frm.othretitle.value = "";
        }
    } else {
        hidediv('divothretitle');
        /*
         document.reg_frm.optreligion[0].checked=false;
         document.reg_frm.optreligion[1].checked=false;
         document.reg_frm.optreligion[2].checked=false;
         document.reg_frm.optreligion[3].checked=false;
         document.reg_frm.optreligion[4].checked=false;
         document.reg_frm.optreligion[5].checked=false;
         */
        document.reg_frm.othretitle.value = "";
    }
}

// this functon is using in deena bank
function chkoptpet() {
    var v = get_radio_value(document.reg_frm.optpet);
    if (v == 'Y') {
        document.reg_frm.selpetcentre.disabled = false;
        document.reg_frm.selpetcentre.value = '';

    }
    else {

        document.reg_frm.selpetcentre.value = '';
        document.reg_frm.selpetcentre.disabled = true;
    }
}

function chkoptbank() {
    /*var v=get_radio_value(document.reg_frm.clerk_emp);
     if(v =='Y'){
     document.reg_frm.selbanks.disabled=false;
     document.reg_frm.selbanks.value='';

     }
     else{

     document.reg_frm.selbanks.value='';
     document.reg_frm.selbanks.disabled=true;	 	 
     }*/
}


function showCLERK_regno() {
    /*var frm=document.reg_frm;
     var clerk=get_radio_value(frm.optcwepo_exam);

     if(clerk=='Y')
     {	
     document.getElementById('txtclerk_regno').disabled=false;
     document.getElementById('txtclerk_regno').value="";	
     document.getElementById('txtclerk_rollno').disabled=false;
     document.getElementById('txtclerk_rollno').value="";	
     }
     else
     {

     document.getElementById('txtclerk_regno').disabled=true;
     document.getElementById('txtclerk_regno').value="";
     document.getElementById('txtclerk_rollno').disabled=true;
     document.getElementById('txtclerk_rollno').value="";


     }*/
}

function get_radio_value(obj) {
    if (obj) {
        var rad_val = '';
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].checked) {
                var rad_val = obj[i].value;
            }
        }
        //alert(obj.length+"~"+rad_val);
        return rad_val;
    }
}

function chkempno() {
    //getYears();
    var empboi = get_radio_value(document.reg_frm.optempboi);
    if (empboi == 'Y') {
        document.getElementById('txtempno').value = '';
        document.getElementById('txtempno').disabled = false;
        document.getElementById("txtempno").focus();

    }
    else {
        document.getElementById('txtempno').value = '';
        document.getElementById('txtempno').disabled = true;
    }
}

function chkDepositDate() {


    var d = document.getElementById("seldepday").value;
    var m = document.getElementById("seldepmon").value;
    var y = document.getElementById("seldepyear").value;

    var startdate = new Date(DepositStartDate);
    var enddate = new Date(DepositEndDate);
    var chckStartdate = new Date(y, m - 1, d);
    //	alert(chckStartdate+"--"+startdate);
    var arrstartdate = DepositStartDate.split('/');
    var arrenddate = DepositEndDate.split('/');
    var end = arrenddate[1] + '/' + arrenddate[0] + '/' + arrenddate[2];
    var st = arrstartdate[1] + '/' + arrstartdate[0] + '/' + arrstartdate[2];

    if ((chckStartdate < startdate) || (chckStartdate > enddate)) {
        alert('Deposit Date should be between ' + st + ' to ' + end);
        document.getElementById("seldepday").focus();
        return false;
    }
    var dat = CurrentDate.split(',');
    var todaysdate = new Date(dat[0], dat[1] - 1, dat[2]);

    if ((chckStartdate > todaysdate)) {
        alert("Deposit Date should not be greater than today's date");
        ;
        document.getElementById("seldepday").focus();
        return false;
    }
    return true;

}
function chkDisDate() {
    var d = document.getElementById("seldisday").value;
    var m = document.getElementById("seldismon").value;
    var y = document.getElementById("seldisyear").value;

    var dobd = document.getElementById("seldobday").value;
    var dobm = document.getElementById("seldobmon").value;
    var doby = document.getElementById("seldobyear").value;

    var chckDisDate = new Date(y, m - 1, d);
    if (dobd != "" && dobm != "" && dobm != "")
        var chckDobDate = new Date(doby, dobm - 1, dobd);
    var dat = CurrentDate.split(',');
    //alert(dat);

    // changed herer from the current date validation to the up to 30-09-2010 validation
    var todaysdate = new Date(2011, 8, 30);
    //alert(todaysdate);

    if ((chckDisDate > todaysdate)) {
        alert('Date of Discharge cannot be greater than 30/09/2011');
        document.getElementById("seldisday").focus();
        return false;
    }
    if (dobd != "" && dobm != "" && dobm != "") {
        if ((chckDisDate <= chckDobDate)) {
            alert('Date of Discharge cannot be less than or equal to date of Birth');
            document.getElementById("seldisday").focus();
            return false;
        }
    }
    return true;
}
function chkFutureDate(d, m, y) {
    //var d=document.getElementById("selotherdepday").value;
    //var m=document.getElementById("selotherdepmon").value;
    //var y=document.getElementById("selotherdepyear").value;

    var chckStartdate = new Date(y, m - 1, d);


    var dat = CurrentDate.split(',');
    var todaysdate = new Date(dat[0], dat[1] - 1, dat[2]);

    if ((chckStartdate > todaysdate)) {
        //alert("Selected date should not be greater than today's date"); ;
        //document.getElementById("selotherdepday").focus();
        return false;
    }

    return true;
}


function checkdisability() {
    //commented now for swo Bank
    //getYears();


    //feeenbdisb();
    //alert("asasa");
    if (document.getElementById('optdisability').checked == true) {
        // showdiv('pwd1');
        // showdiv('pwd2');
        //alert(document.getElementById('optdisability').value);


        if (document.getElementById('optdisability').value == 'Y') {
            document.getElementById('seldisabilitytype').disabled = false;
            document.getElementById('seldisabilityper').disabled = false;
            // document.reg_frm.optscribe[0].disabled=false;
            //document.reg_frm.optscribe[1].disabled=false;
            // document.reg_frm.optscribe[0].checked=false;
            //document.reg_frm.optscribe[1].checked=true;
        } else if (document.getElementById('optdisability').value == 'N') {
            document.getElementById('seldisabilitytype').value = '';
            document.getElementById('seldisabilitytype').disabled = true;
            document.getElementById('seldisabilityper').value = '';
            document.getElementById('seldisabilityper').disabled = true;
            document.reg_frm.optscribe[0].disabled = true;
            document.reg_frm.optscribe[1].disabled = true;
            document.reg_frm.optscribe[0].checked = false;
            document.reg_frm.optscribe[1].checked = false;
        }
    } else {
        //hidediv('pwd1');
        //hidediv('pwd2');
        document.getElementById('seldisabilitytype').value = '';
        document.getElementById('seldisabilitytype').disabled = true;
        document.getElementById('seldisabilityper').value = '';
        document.getElementById('seldisabilityper').disabled = true;
        document.reg_frm.optscribe[0].disabled = true;
        document.reg_frm.optscribe[1].disabled = true;
        document.reg_frm.optscribe[0].checked = false;
        document.reg_frm.optscribe[1].checked = false;

    }
    //catcode();	 
}

function chkaddpost() {
    var post = document.reg_frm.selpost.value;
    if (post != '') {

        var addnalpost = get_radio_value(document.reg_frm.optaddpo);
        if (addnalpost == 'Y') {

            document.getElementById('optaddpo1').disabled = false;

            // document.getElementById('txtpostcodeadd').value='';  	
            // document.getElementById('txtreg1').disabled=false;
            //document.getElementById('optaddpo2').disabled=false;
            // document.getElementById('txtreg2').disabled=false;

            /*document.getElementById('optaddpo1').options.length=0;
             document.getElementById('optaddpo1').options[0] = new Option('Select','');
             document.getElementById('optaddpo2').options.length=0;
             document.getElementById('optaddpo2').options[0] = new Option('Select','');*/
            addOption_list(post);
        }

        else {

            document.getElementById('optaddpo1').value = '';
            // document.getElementById('txtpostcodeadd').value='';  	
            //document.getElementById('txtreg1').value='';  
            //document.getElementById('optaddpo2').value='';
            // document.getElementById('txtreg2').value='';

            //document.getElementById('txtreg1').disabled=true;
            //document.getElementById('optaddpo2').disabled=true;
            // document.getElementById('txtreg2').disabled=true;
            document.getElementById('optaddpo1').options.length = 0;
            document.getElementById('optaddpo1').options[0] = new Option('Select', '');
            document.getElementById('optaddpo1').disabled = true;
            //document.getElementById('optaddpo2').options.length=0;
            //document.getElementById('optaddpo2').options[0] = new Option('Select','');


        }
    }
    else {
        alert("Please Select The Post");
        document.getElementById("selpost").focus();
        document.reg_frm.optaddpo[1].checked = true;
        return false;
    }
}

function addOption_list(apppost) {
    //alert(apppost);
//var post = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    var post = {
        '01': 'Dy.General Manager (Integrated Treasury) TEG SC-VI',
        '02': 'Dy.General Manager (Risk Management) TEG SC-VI',
        '03': 'Asst.General Manager (International Divison) SMG SC-V',
        '04': 'Asst.General Manager (Risk Management) SMG SC-V'
    };


    for (key in post) {
        if (key != apppost) {
            addOption(document.reg_frm.optaddpo1, post[key], key);
//addOption(document.reg_frm.optaddpo2, post[key], key);
        }
    }
}
function addOption(selectbox, text, value) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;
    selectbox.options.add(optn);
}
function addlpost_null() {
    document.getElementById('optaddpo1').value = '';
    //document.getElementById('txtreg1').value='';  
    //document.getElementById('optaddpo2').value='';
    //document.getElementById('txtreg2').value='';

    //document.getElementById('txtreg1').disabled=true;
    //document.getElementById('optaddpo2').disabled=true;
    //document.getElementById('txtreg2').disabled=true;
    document.getElementById('optaddpo1').options.length = 0;
    document.getElementById('optaddpo1').options[0] = new Option('Select', '');
    document.getElementById('optaddpo1').disabled = true;
    //document.getElementById('optaddpo2').options.length=0;
    //document.getElementById('optaddpo2').options[0] = new Option('Select','');
    document.reg_frm.optaddpo[1].checked = true;
    //document.getElementById('txtpostcodeadd').value='';

}

//disability for vijayabank employee
function checkdisabilityempvijayabank() {
    if (document.getElementById('vbemployee').checked == true) {
        // showdiv('pwd1');
        // showdiv('pwd2');
        //alert(document.getElementById('optdisability').value);
        if (document.getElementById('vbemployee').value == 'Y') {
            document.getElementById('vbnumber').disabled = false;
            document.reg_frm.highergrade[0].disabled = false;
            document.reg_frm.highergrade[1].disabled = false;
            //document.getElementById('seldisabilityper').disabled=false;
            //document.reg_frm.optscribe[0].disabled=false;
            //document.reg_frm.optscribe[1].disabled=false;
        } else if (document.getElementById('vbemployee').value == 'N') {
            document.getElementById('vbnumber').value = '';
            document.getElementById('vbnumber').disabled = true;
            //document.getElementById('seldisabilityper').value='';
            //document.getElementById('seldisabilityper').disabled=true;
            document.reg_frm.highergrade[0].disabled = true;
            document.reg_frm.highergrade[1].disabled = true;
            document.reg_frm.highergrade[0].checked = false;
            document.reg_frm.highergrade[1].checked = false;
        }
    } else {
        //hidediv('pwd1');
        //hidediv('pwd2');
        document.getElementById('vbnumber').value = '';
        document.getElementById('vbnumber').disabled = true;
        //document.getElementById('seldisabilityper').value='';
        //document.getElementById('seldisabilityper').disabled=true;
        document.reg_frm.highergrade[0].disabled = true;
        document.reg_frm.highergrade[1].disabled = true;
        document.reg_frm.highergrade[0].checked = false;
        document.reg_frm.highergrade[1].checked = false;

    }
}
function disabletxn() {
    paymentintxn = get_radio_value(document.reg_frm.paymentin);

    if (paymentintxn == "CBS") {

        document.getElementById('txtjournalno').value = '';
        document.getElementById('txtjournalno').disabled = false;
        document.getElementById('txtcjournalno').value = '';
        document.getElementById('txtcjournalno').disabled = false;
        document.getElementById('txtbrname').value = '';
        document.getElementById('txtbrname').disabled = false;
        document.getElementById('txtbranchcode').value = '';
        document.getElementById('txtbranchcode').disabled = false;

        document.getElementById('seldepday').value = '';
        document.getElementById('seldepday').disabled = false;
        document.getElementById('seldepmon').value = '';
        document.getElementById('seldepmon').disabled = false;
        document.getElementById('seldepyear').value = '';
        document.getElementById('seldepyear').disabled = false;

    }
    else {


        document.getElementById('txtjournalno').value = '';
        document.getElementById('txtjournalno').disabled = true;
        document.getElementById('txtcjournalno').value = '';
        document.getElementById('txtcjournalno').disabled = true;
        document.getElementById('txtbrname').value = '';
        document.getElementById('txtbrname').disabled = true;
        document.getElementById('txtbranchcode').value = '';
        document.getElementById('txtbranchcode').disabled = true;

        document.getElementById('seldepday').value = '';
        document.getElementById('seldepday').disabled = true;
        document.getElementById('seldepmon').value = '';
        document.getElementById('seldepmon').disabled = true;
        document.getElementById('seldepyear').value = '';
        document.getElementById('seldepyear').disabled = true;

    }
}
//disability for preexamtraining
function chkpreexamtrain() {
    categoryforpre = get_radio_value(document.reg_frm.opt_cat);
    //minorityforpre=get_radio_value(document.reg_frm.optminority);
    minorityforpre = 'N';
    if (categoryforpre == 'SC' || categoryforpre == 'ST' || minorityforpre == 'Y') {
        document.reg_frm.preexam[0].disabled = false;
        document.reg_frm.preexam[1].disabled = false;
    }
    else {
        document.reg_frm.preexam[0].disabled = true;
        document.reg_frm.preexam[1].disabled = true;
        document.reg_frm.preexam[0].checked = false;
        document.reg_frm.preexam[1].checked = false;
        document.getElementById('preexamcenter_code').value = '';
        document.getElementById('preexamcenter_code').disabled = true;

    }
}
//disability for pre exam center
function checkdisabilitycenter() {
    preexamcenter = get_radio_value(document.reg_frm.preexam);
    if (preexamcenter == 'Y') {
        //document.getElementById('preexamcenter_code').value='';  	
        document.getElementById('preexamcenter_code').disabled = false;
    }
    else {
        document.getElementById('preexamcenter_code').value = '';
        document.getElementById('preexamcenter_code').disabled = true;
    }

}
function editdisableworkexp() {
    var post = document.reg_frm.selpost.value;
    if (post == "DMSE") {
        var i = 0;
        for (i = 1; i <= 7; i++) {
            document.getElementById('txtemp' + i).disabled = true;
            document.getElementById('txtdesg' + i).disabled = true;
            document.getElementById('selfrommon' + i).disabled = true; // selfromyr1
            document.getElementById('selfromyr' + i).disabled = true;
            document.getElementById('seltomon' + i).disabled = true;
            document.getElementById('seltoyr' + i).disabled = true;
            document.getElementById('txtduty' + i).disabled = true;
            document.getElementById('txtindtype' + i).disabled = true;
            document.getElementById('txtreason' + i).disabled = true;

            document.getElementById('txtemp' + i).value = "";
            document.getElementById('txtdesg' + i).value = "";
            document.getElementById('selfrommon' + i).value = ""; // selfromyr1
            document.getElementById('selfromyr' + i).value = "";
            document.getElementById('seltomon' + i).value = "";
            document.getElementById('seltoyr' + i).value = "";
            document.getElementById('txtduty' + i).value = "";
            document.getElementById('txtindtype' + i).value = "";
            document.getElementById('txtreason' + i).value = "";
        }
    }
}
function disableworkexp() {
    var post = document.reg_frm.selpost.value;
    if (post == "DMSE") {
        var i = 0;
        for (i = 1; i <= 7; i++) {
            document.getElementById('txtemp' + i).disabled = true;
            document.getElementById('txtdesg' + i).disabled = true;
            document.getElementById('selfrommon' + i).disabled = true; // selfromyr1
            document.getElementById('selfromyr' + i).disabled = true;
            document.getElementById('seltomon' + i).disabled = true;
            document.getElementById('seltoyr' + i).disabled = true;
            document.getElementById('txtduty' + i).disabled = true;
            document.getElementById('txtindtype' + i).disabled = true;
            document.getElementById('txtreason' + i).disabled = true;

            document.getElementById('txtemp' + i).value = "";
            document.getElementById('txtdesg' + i).value = "";
            document.getElementById('selfrommon' + i).value = ""; // selfromyr1
            document.getElementById('selfromyr' + i).value = "";
            document.getElementById('seltomon' + i).value = "";
            document.getElementById('seltoyr' + i).value = "";
            document.getElementById('txtduty' + i).value = "";
            document.getElementById('txtindtype' + i).value = "";
            document.getElementById('txtreason' + i).value = "";
        }
    } else {
        var i = 0;
        for (i = 1; i <= 7; i++) {
            document.getElementById('txtemp' + i).disabled = false;
            document.getElementById('txtdesg' + i).disabled = false;
            document.getElementById('selfrommon' + i).disabled = false; // selfromyr1
            document.getElementById('selfromyr' + i).disabled = false;
            document.getElementById('seltomon' + i).disabled = false;
            document.getElementById('seltoyr' + i).disabled = false;
            document.getElementById('txtduty' + i).disabled = false;
            document.getElementById('txtindtype' + i).disabled = false;
            document.getElementById('txtreason' + i).disabled = false;

            document.getElementById('txtemp' + i).value = "";
            document.getElementById('txtdesg' + i).value = "";
            document.getElementById('selfrommon' + i).value = ""; // selfromyr1
            document.getElementById('selfromyr' + i).value = "";
            document.getElementById('seltomon' + i).value = "";
            document.getElementById('seltoyr' + i).value = "";
            document.getElementById('txtduty' + i).value = "";
            document.getElementById('txtindtype' + i).value = "";
            document.getElementById('txtreason' + i).value = "";
        }
    }
}

function show_cat_code() {
    var cat_code = '';
    cat_val = get_radio_value(document.reg_frm.opt_cat);
    dtype = document.getElementById('seldisabilitytype').value;

    if ((cat_val == 'GENERAL') && (dtype == 'VH'))
        cat_code = '12';
    else if ((cat_val == 'GENERAL') && (dtype == 'OH'))
        cat_code = '11';
    else if (cat_val == 'GENERAL')
        cat_code = '10';
    else if ((cat_val == 'OBC') && (dtype == 'VH'))
        cat_code = '9';
    else if ((cat_val == 'OBC') && (dtype == 'OH'))
        cat_code = '8';
    else if (cat_val == 'OBC')
        cat_code = '7';
    else if ((cat_val == 'ST') && (dtype == 'VH'))
        cat_code = '6';
    else if ((cat_val == 'ST') && (dtype == 'OH'))
        cat_code = '5';
    else if (cat_val == 'ST')
        cat_code = '4';
    else if ((cat_val == 'SC') && (dtype == 'VH'))
        cat_code = '3';
    else if ((cat_val == 'SC') && (dtype == 'OH'))
        cat_code = '2';
    else if (cat_val == 'SC')
        cat_code = '1';
    document.getElementById('txtcatcode').value = cat_code;
}

function disableScribe() {

    //alert(document.getElementById('seldisabilitytype').value);
    //if((document.getElementById('seldisabilitytype').value=="HI") || (document.getElementById('seldisabilityper').value=="1")){
    //if((document.getElementById('seldisabilitytype').value=="HI")){

    if (document.getElementById('seldisabilitytype').value == "") {
        document.getElementById('seldisabilityper').value = "";
        document.getElementById('seldisabilityper').disabled = true;
        document.reg_frm.optscribe[0].disabled = true;
        document.reg_frm.optscribe[1].disabled = true;
        document.reg_frm.optscribe[0].checked = false;
        document.reg_frm.optscribe[1].checked = false;
    }
    /*else if(document.getElementById('seldisabilitytype').value !="B" && document.getElementById('seldisabilitytype').value !="LV"){
     document.reg_frm.optscribe[0].disabled=true;
     document.reg_frm.optscribe[1].disabled=true;
     document.reg_frm.optscribe[0].checked=false;
     document.reg_frm.optscribe[1].checked=false;
     document.getElementById('seldisabilityper').value="";
     document.getElementById('seldisabilityper').disabled=false;
     }*/
    else {
        /* document.reg_frm.optscribe[0].disabled=true;
         document.reg_frm.optscribe[1].disabled=true;
         document.reg_frm.optscribe[0].checked=false;
         document.reg_frm.optscribe[1].checked=false;		
         document.getElementById('seldisabilityper').disabled=false;*/

        document.reg_frm.optscribe[0].disabled = false;
        document.reg_frm.optscribe[1].disabled = false;
        document.reg_frm.optscribe[0].checked = false;
        document.reg_frm.optscribe[1].checked = true;
        document.getElementById('seldisabilityper').disabled = false;
    }
    //catcode();
}
function enable_armforce() {
    exservice = get_radio_value(document.reg_frm.optexservice);
    disxs = get_radio_value(document.reg_frm.optdisxs);
    if (exservice == 'Y' || disxs == 'Y') {

        document.reg_frm.optarmexam[0].disabled = false;
        document.reg_frm.optarmexam[1].disabled = false;
        document.reg_frm.optarmexam[0].checked = false;
        document.reg_frm.optarmexam[1].checked = true;
    }
    else {
        document.reg_frm.optarmexam[0].disabled = true;
        document.reg_frm.optarmexam[1].disabled = true;
        document.reg_frm.optarmexam[0].checked = false;
        document.reg_frm.optarmexam[1].checked = false;

        document.reg_frm.optiaf[0].disabled = true;
        document.reg_frm.optiaf[1].disabled = true;
        document.reg_frm.optiaf[0].checked = false;
        document.reg_frm.optiaf[1].checked = false;
        document.getElementById('txtperiaf').value = "";
        document.getElementById('txtperiaf').disabled = true;

        document.reg_frm.optpassindnav[0].disabled = true;
        document.reg_frm.optpassindnav[1].disabled = true;
        document.reg_frm.optpassindnav[0].checked = false;
        document.reg_frm.optpassindnav[1].checked = false;
        document.getElementById('txtperpassindnav').value = "";
        document.getElementById('txtperpassindnav').disabled = true;

        document.reg_frm.optmatexs[0].disabled = true;
        document.reg_frm.optmatexs[1].disabled = true;
        document.reg_frm.optmatexs[0].checked = false;
        document.reg_frm.optmatexs[1].checked = false;
        document.getElementById('txtpermatexs').value = "";
        document.getElementById('txtpermatexs').disabled = true;

    }
}
function enable_iaf_indnav_mexs() {
    armexam = get_radio_value(document.reg_frm.optarmexam);
    if (armexam == 'Y') {

        document.reg_frm.optiaf[0].disabled = false;
        document.reg_frm.optiaf[1].disabled = false;
        document.reg_frm.optiaf[0].checked = false;
        document.reg_frm.optiaf[1].checked = true;

        document.reg_frm.optpassindnav[0].disabled = false;
        document.reg_frm.optpassindnav[1].disabled = false;
        document.reg_frm.optpassindnav[0].checked = false;
        document.reg_frm.optpassindnav[1].checked = true;

        document.reg_frm.optmatexs[0].disabled = false;
        document.reg_frm.optmatexs[1].disabled = false;
        document.reg_frm.optmatexs[0].checked = false;
        document.reg_frm.optmatexs[1].checked = true;
    }
    else {
        document.reg_frm.optiaf[0].disabled = true;
        document.reg_frm.optiaf[1].disabled = true;
        document.reg_frm.optiaf[0].checked = false;
        document.reg_frm.optiaf[1].checked = false;
        document.getElementById('txtperiaf').value = "";
        document.getElementById('txtperiaf').disabled = true;

        document.reg_frm.optpassindnav[0].disabled = true;
        document.reg_frm.optpassindnav[1].disabled = true;
        document.reg_frm.optpassindnav[0].checked = false;
        document.reg_frm.optpassindnav[1].checked = false;
        document.getElementById('txtperpassindnav').value = "";
        document.getElementById('txtperpassindnav').disabled = true;

        document.reg_frm.optmatexs[0].disabled = true;
        document.reg_frm.optmatexs[1].disabled = true;
        document.reg_frm.optmatexs[0].checked = false;
        document.reg_frm.optmatexs[1].checked = false;
        document.getElementById('txtpermatexs').value = "";
        document.getElementById('txtpermatexs').disabled = true;

    }

}
function enable_txtperiaf() {
    tiaf = get_radio_value(document.reg_frm.optiaf);

    if (tiaf == 'Y') {
        document.getElementById('txtperiaf').value = "";
        document.getElementById('txtperiaf').disabled = false;
    }
    else {
        document.getElementById('txtperiaf').value = "";
        document.getElementById('txtperiaf').disabled = true;
    }

}

function enable_optpassindnav() {
    passindnav = get_radio_value(document.reg_frm.optpassindnav);

    if (passindnav == 'Y') {
        document.getElementById('txtperpassindnav').value = "";
        document.getElementById('txtperpassindnav').disabled = false;
    }
    else {
        document.getElementById('txtperpassindnav').value = "";
        document.getElementById('txtperpassindnav').disabled = true;
    }

}
function enable_txtpermatexs() {
    matex = get_radio_value(document.reg_frm.optmatexs);

    if (matex == 'Y') {
        document.getElementById('txtpermatexs').value = "";
        document.getElementById('txtpermatexs').disabled = false;
    }
    else {
        document.getElementById('txtpermatexs').value = "";
        document.getElementById('txtpermatexs').disabled = true;
    }

}


function disableScribedef() {
    //if((document.getElementById('seldisabilityper').value=="1") || (document.getElementById('seldisabilitytype').value=="HI")){
//if((document.getElementById('seldisabilitytype').value=="HI") || (document.getElementById('seldisabilityper').value=="1")){
    //if((document.getElementById('seldisabilitytype').value=="HI")){

    /*
     if((document.getElementById('seldisabilitytype').value!="VI") && (document.getElementById('seldisabilitytype').value!="OC")){
     document.reg_frm.optscribe[0].disabled=true;
     document.reg_frm.optscribe[1].disabled=true;
     document.reg_frm.optscribe[0].checked=false;
     document.reg_frm.optscribe[1].checked=false;
     }else{

     if(document.getElementById('seldisabilityper').value=="")
     {
     document.reg_frm.optscribe[0].disabled=true;
     document.reg_frm.optscribe[1].disabled=true;			
     document.reg_frm.optscribe[0].checked=false;
     document.reg_frm.optscribe[1].checked=false;
     }
     else
     {
     document.reg_frm.optscribe[0].disabled=false;
     document.reg_frm.optscribe[1].disabled=false;			
     document.reg_frm.optscribe[1].checked=true;
     }
     }
     //catcode();*/
}


function chkresult(v, c) {

    if (c == 1 && v == 'A') {
        document.getElementById('selmark1').disabled = true;
        document.getElementById('selmark1').value = '';
    } else {
        document.getElementById('selmark1').disabled = false;
    }
    if (c == 2 && v == 'A') {
        document.getElementById('selmark2').disabled = true;
        document.getElementById('selmark2').value = '';
    } else {
        document.getElementById('selmark2').disabled = false;
    }
    if (c == 3 && v == 'A') {
        document.getElementById('selmark3').disabled = true;
        document.getElementById('selmark3').value = '';
    } else {
        document.getElementById('selmark3').disabled = false;
    }
}


// Language validation
/*
 function checkbox_value(fldname)
 {
 var a=new Array();
 a=document.getElementsByName(fldname); 	
 var p=0;
 for(i=0;i< a.length;i++){
 if(a[i].checked){			
 p=1;
 }
 }
 if (p==0){
 //alert('please select at least one check box');
 return false;
 }	
 return true;
 }
 */

function checkbox_value(fldname) {
    var a = new Array();
    a = document.getElementsByName(fldname);
    var p = 0;
    var lang1_str = "";
    var lang2_str = "";
    for (i = 0; i < a.length; i++) {
        if (a[i].checked) {
            //special case because Write and Speak has to be selected for Punjabi 
            if (fldname == "chklang1[]") {
                lang1_str += a[i].value;
            }
            //end of special case because Write and Speak has to be selected for Punjabi
            p = 1;
        }
    }
    //special case because Write and Speak has to be selected for English	
    if (fldname == "chklang1[]") {
        if (lang1_str.indexOf("w") == -1 || lang1_str.indexOf("s") == -1 || lang1_str.indexOf("r") == -1)
            return false;
    }
    //end of special case because Write and Speak has to be selected for English
    if (p == 0) {
        //alert('please select at least one check box');
        return false;
    }
    return true;
}

function LanguageValidate() {
    var LANG1 = 0;
    var LANG2 = 0;
    var LANG3 = 0;
    //var LANG4=0;	
    //var LANG5=0;	

    /*
     if( (trim(document.getElementById('txtlang1').value) == '') && (!checkbox_value('chklang1[]') ) )
     {
     LANG1=0;
     }else{
     LANG1=1;

     if(trim(document.getElementById('txtlang1').value) == '' )
     {
     alert("Please enter Language1");
     document.getElementById('txtlang1').focus();
     return false;
     }

     if(!checkbox_value('chklang1[]'))
     {
     alert("Please select any one option (Read/Write/Speak) for Language1");
     document.getElementById('chklang1[]').focus();
     return false;
     } 


     if(!isCity('txtlang1'))
     {
     alert("Language1 should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtlang1').focus();
     return false;
     }

     }
     */
    //if(  (document.getElementById("selpost").value!='02' && document.getElementById("selpost").value!='03') && (!checkbox_value('chklang1[]') ) ) //special condition
    if ((trim(document.getElementById('txtlang1').value) == '') && (!checkbox_value('chklang1[]') ))//regular condition
    {
        if (LANG1 == 0) {
            alert("Please enter Language1");
            document.getElementById('txtlang1').focus();
            return false;

        }
    } else {
        LANG1 = 1;

        if (trim(document.getElementById('txtlang1').value) == '') {
            alert("Please enter Language1");
            document.getElementById('txtlang1').focus();
            return false;
        }


        /*if(document.getElementById("selpost").value=='03' || document.getElementById("selpost").value=='02')
         {
         if(!checkbox_value('chklang1[]'))
         {
         alert("You should select Read, Write and Speak for Oriya");
         document.getElementById('chklang1[]').focus();
         return false;
         }


         }*/
        if (!checkbox_value('chklang1[]')) {
            alert("You should select Read, Write and Speak for English");
            document.getElementById('chklang1[]').focus();
            return false;
        }
        if (!isAlphabets('txtlang1')) {
            alert("Language1 should be alphabets only");
            document.getElementById('txtlang1').focus();
            return false;
        }
        /*if(!checkbox_value('chklang1[]'))
         {
         alert("Please select any one option (Read/Write/Speak) for language1");
         document.getElementById('chklang1[]').focus();
         return false;
         }*/


    }


    if ((trim(document.getElementById('txtlang2').value) == '') && !checkbox_value('chklang2[]')) {
        LANG2 = 0;

        //alert("Either Read or Write or Speak has to be selected for English");
        //return false;
    } else {
        LANG2 = 1;

        if (trim(document.getElementById('txtlang2').value) == '') {
            alert("Please enter Language2");
            document.getElementById('txtlang2').focus();
            return false;
        }
        if (!isAlphabets('txtlang2')) {
            alert("Language2 should be alphabets only");
            document.getElementById('txtlang2').focus();
            return false;
        }
        if (!checkbox_value('chklang2[]')) {
            alert("Please select any one option (Read/Write/Speak) for language2");
            document.getElementById('chklang2[]').focus();
            return false;
        }

    }


    if ((trim(document.getElementById('txtlang3').value) == '') && (!checkbox_value('chklang3[]') )) {
        LANG3 = 0;
    } else {
        LANG3 = 1;
        if (trim(document.getElementById('txtlang3').value) == '') {
            alert("Please enter Language3");
            document.getElementById('txtlang3').focus();
            return false;
        }
        if (!checkbox_value('chklang3[]')) {
            alert("Please select any one option (Read/Write/Speak) for Language3");
            document.getElementById('chklang3[]').focus();
            return false;
        }
        if (!isAlphabets('txtlang3')) {
            alert("Language3 should be alphabets only");
            document.getElementById('txtlang3').focus();
            return false;
        }
    }

    /*if( (trim(document.getElementById('txtlang4').value) == '') && (!checkbox_value('chklang4[]') ) )
     {
     LANG4=0;			
     }else{
     LANG4=1;
     if(trim(document.getElementById('txtlang4').value) == '' )
     {
     alert("Please enter Language4");
     document.getElementById('txtlang4').focus();
     return false;
     }
     if(!checkbox_value('chklang4[]'))
     {
     alert("Please select any one option (Read/Write/Speak) for Language4");
     document.getElementById('chklang4[]').focus();
     return false;
     } 	
     if(!isCity('txtlang4'))
     {
     alert("Language4 should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtlang4').focus();
     return false;
     }
     }
     if( (trim(document.getElementById('txtlang5').value) == '') && (!checkbox_value('chklang5[]') ) )
     {
     LANG5=0;			
     }else{
     LANG5=1;
     if(trim(document.getElementById('txtlang5').value) == '' )
     {
     alert("Please enter Language5");
     document.getElementById('txtlang5').focus();
     return false;
     }
     if(!checkbox_value('chklang5[]'))
     {
     alert("Please select any one option (Read/Write/Speak) for Language5");
     document.getElementById('chklang5[]').focus();
     return false;
     } 	
     if(!isCity('txtlang5'))
     {
     alert("Language5 should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtlang5').focus();
     return false;
     }
     }*/

    //if( (LANG1 ==0) && (LANG2 == 0) && (LANG3 ==0) && (LANG4 == 0) && (LANG5 ==0))
    if ((LANG1 == 0) && (LANG2 == 0) && (LANG3 == 0)) {
        alert("Please enter at least one Language");
        document.getElementById('txtlang1').focus();
        return false;
    }
    return true;
}
/*
 function getexamcentre()
 {			
 document.getElementById('txtcentrecode').value='';
 if(document.getElementById('selstateapply').value !='')
 {		
 var selstate=document.getElementById('selstateapply').value;
 document.getElementById('selexamcentre').options.length=0;
 document.getElementById('selexamcentre').options[0] = new Option('Select','');
 var x=1;
 //alert(selstate);
 //center state state code 16 has directly mapped becuase of duplicate		

 //else
 //{	
 for (var val in arrexamcentrestatemap)
 {			

 if(selstate == arrexamcentrestatemap[val])
 {				
 //document.getElementById('err_div').innerHTML=document.getElementById('err_div').innerHTML+val+'\n';				
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);
 x=x+1;
 }
 }
 //}
 if(selstate ==24)
 {
 val=13;
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);
 }
 if(selstate ==28)
 {
 val=14;
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);
 }
 if(selstate ==21 || selstate ==22 || selstate ==23 || selstate ==33)
 {
 val=16;
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);
 }

 if( selstate ==36 )
 {
 val=28;
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);
 document.getElementById('selexamcentre').options[x+1] = new Option(arrexamcentre[val+1],val+1);
 }	
 if( selstate ==38 )
 {
 val=30;
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);			
 }
 if(selstate ==14 || selstate ==30)
 {
 val=31;
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);
 }
 if(selstate ==39)
 {
 val=32;
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);
 }

 }else{
 document.getElementById('selexamcentre').options.length=0;
 document.getElementById('selexamcentre').options[0] = new Option('Select','');
 }	
 }
 */

function showhide() {
    var modeofpay = get_radio_value(document.reg_frm.optbank);
    if (modeofpay == "CANARA") {
        document.getElementById('txtjournalno').value = "";
        document.getElementById('txtcjournalno').value = "";
        document.getElementById('txtbrname').value = "";
        document.getElementById('txtdepcity').value = "";
        document.getElementById('txtbranchcode').value = "";
        document.getElementById('seldepday').value = "";
        document.getElementById('seldepmon').value = "";
        document.getElementById('txtfee').value = "";

        document.getElementById("otherdiv").style.display = "none";
        document.getElementById("canaradiv").style.display = "";
        calculatefee();
    } else {

        document.getElementById('txtjournalnooth').value = "";
        document.getElementById('txtcjournalnooth').value = "";
        document.getElementById('txtbankname').value = "";
        document.getElementById('txtbrnameoth').value = "";
        document.getElementById('txtdepcityoth').value = "";
        document.getElementById('txtbranchcodeoth').value = "";
        document.getElementById('seldepdayoth').value = "";
        document.getElementById('seldepmonoth').value = "";
        document.getElementById('txtothfee').value = "";

        document.getElementById("otherdiv").style.display = "";
        document.getElementById("canaradiv").style.display = "none";
        calculatefee();
    }
}


function feeenbdisb() {
    var cat = get_radio_value(document.reg_frm.opt_cat);
    phy_challenge = get_radio_value(document.reg_frm.optdisability);
    exservice = get_radio_value(document.reg_frm.optexservice);
    if (cat != 'SC' && cat != 'ST' && phy_challenge != 'Y' && exservice != 'Y') {
        showdiv("abc");
        showdiv("xyz");
        /*
         document.reg_frm.txtjournalno.disabled=false;
         document.reg_frm.txtcjournalno.disabled=false;
         document.reg_frm.txtbrname.disabled=false;
         document.reg_frm.txtbranchcode.disabled=false;
         document.getElementById('seldepday').disabled=false;
         document.getElementById('seldepmon').disabled=false;
         document.getElementById('seldepyear').disabled=false;		
         */
    }
    else {
        /*
         document.reg_frm.txtjournalno.disabled=true;
         document.reg_frm.txtcjournalno.disabled=true;
         document.reg_frm.txtbrname.disabled=true;
         document.reg_frm.txtbranchcode.disabled=true;
         document.getElementById('seldepday').disabled=true;
         document.getElementById('seldepmon').disabled=true;
         document.getElementById('seldepyear').disabled=true;
         */
        hidediv("abc");
        hidediv("xyz");
        document.getElementById('txtjournalno').value = "";
        document.getElementById('txtcjournalno').value = "";
        document.getElementById('txtbrname').value = "";
        document.getElementById('txtbranchcode').value = "";
        document.getElementById('seldepday').value = "";
        document.getElementById('seldepmon').value = "";
        document.getElementById('seldepyear').value = "";
    }
}
function validateFeeDet() {
    if (get_radio_value(document.reg_frm.paymentin) == "") {
        alert("Please select Payment Mode");
        document.reg_frm.paymentin[0].focus();
        return false;
    }

    if (get_radio_value(document.reg_frm.paymentin) == "CBS") {
        if (trim(document.getElementById('txtjournalno').value) == '') {
            alert("Please enter the Deposit Journal No");
            //alert("Transaction Sequence No. / Batch No.");
            document.getElementById('txtjournalno').focus();
            return false;
        }
        if (!checkallzeroes(trim(document.getElementById('txtjournalno').value))) {
            //alert("Transaction ID/Message User Reference No (MUR) cannot be all zeroes");
            alert("Deposit Journal No can not be all zeroes");
            document.getElementById('txtjournalno').focus();
            return false;
        }
        if (!isNumeric('txtjournalno')) {
            alert("Deposit Journal No Should be Digits");
            document.getElementById('txtjournalno').focus();
            return false;
        }
        if (trim(document.getElementById('txtjournalno').value).length > 10) {
            alert("Deposit Journal No can not be grater than 10 Digits");
            document.getElementById('txtjournalno').focus();
            return false;
        }
        if (trim(document.getElementById('txtjournalno').value).length < 7) {
            alert("Deposit Journal No can not be less than 7 Digits");
            document.getElementById('txtjournalno').focus();
            return false;
        }
        var journal = trim(document.getElementById('txtjournalno').value);
        /*if(journal.length<2)
         {
         //alert("Please enter Confirm Transaction ID/Message User Reference No (MUR)");
         alert("Transaction ID should not be less than 2 digits");
         document.getElementById('txtjournalno').focus();
         return false;
         }*/
        var journalconf = trim(document.getElementById('txtcjournalno').value);
        if (journalconf == "") {
            //alert("Please enter Confirm Transaction ID/Message User Reference No (MUR)");
            alert("Please enter Confirm Deposit Journal No");
            document.getElementById('txtcjournalno').focus();
            return false;
        }
        if (!isNumeric('txtcjournalno')) {
            alert("Confirm Deposit Journal No Should be AlphaNumeric");
            document.getElementById('txtcjournalno').focus();
            return false;
        }
        if (trim(document.getElementById('txtcjournalno').value).length > 10) {
            alert("Confirm Deposit Journal No can not be grater than 10 Digits");
            document.getElementById('txtcjournalno').focus();
            return false;
        }
        if (trim(document.getElementById('txtcjournalno').value).length < 7) {
            alert("Confirm Transaction No.  can not be less than 7 Digits");
            document.getElementById('txtcjournalno').focus();
            return false;
        }
        if (journalconf != journal) {
            //alert("Transaction ID/ Scroll No and Confirm Transaction ID/ Scroll No should be same");
            alert("Deposit Journal No  and Confirm Deposit Journal No should be same");
            document.getElementById('txtcjournalno').focus();
            return false;
        }
        if (trim(document.getElementById('txtbrname').value) == '') {
            alert("Please enter Branch Name");
            document.getElementById('txtbrname').focus();
            return false;
        }
        if (!checkallzeroes(trim(document.getElementById('txtbrname').value))) {
            alert("Branch Name can not be all zeroes");
            document.getElementById('txtbrname').focus();
            return false;
        }
        if (!isAlphabets('txtbrname')) {
            alert("Branch Name Should be Alphabets Only");
            document.getElementById('txtbrname').focus();
            return false;
        }
        /*if(trim(document.getElementById('txtbrcity').value) =='')
         {
         alert("Please enter Branch City");
         document.getElementById('txtbrcity').focus();
         return false;
         }
         if(!checkallzeroes(trim(document.getElementById('txtbrcity').value)))
         {
         alert("Branch City cannot be all zeroes");
         document.getElementById('txtbrcity').focus();
         return false;
         }*/
        if (trim(document.getElementById('txtbranchcode').value) == '') {
            alert("Please enter SBI Branch Code No");
            document.getElementById('txtbranchcode').focus();
            return false;
        }
        if (!isAlphaNumeric('txtbranchcode')) {
            alert("SBI Branch Code No Should be Alpha-numeric Only");
            document.getElementById('txtbranchcode').focus();
            return false;
        }

        if (!checkallzeroes(trim(document.getElementById('txtbranchcode').value))) {
            alert("SBI Branch Code No can not be all zeroes");
            document.getElementById('txtbranchcode').focus();
            return false;
        }

        if (trim(document.getElementById('txtbranchcode').value).length > 6) {
            alert("SBI Branch Code No can not be grater than 6 Digits");
            document.getElementById('txtbranchcode').focus();
            return false;
        }
        if (document.getElementById('seldepday').value == '') {
            alert("Please select Day of Deposit Date");
            document.getElementById('seldepday').focus();
            return false;
        }
        if (document.getElementById('seldepmon').value == '') {
            alert("Please select Month of Deposit Date");
            document.getElementById('seldepmon').focus();
            return false;
        }
        if (document.getElementById("seldepyear").value == '') {
            alert("Please select Year of Deposit Date");
            document.getElementById('seldepyear').focus();
            return false;
        }
        day_dd = trim(document.getElementById('seldepday').value);
        day_mon = trim(document.getElementById('seldepmon').value);
        day_year = trim(document.getElementById('seldepyear').value);
        var daysInMonth = DaysArray(12);
        if (day_dd < 1 || day_dd > 31 || (day_mon == 2 && day_dd > daysInFebruary(day_year)) || day_dd > daysInMonth[day_mon]) {
            alert("Please enter a valid day");
            document.getElementById('seldepday').focus();
            return false
        }


    }


    //}//end of erlse dvn
    return true;
}
/*
 function getexamcentre()
 {			
 //document.getElementById('txtcentrecode').value='';
 if(document.getElementById('selstateapply').value !='')
 {		
 var selstate=document.getElementById('selstateapply').value;
 document.getElementById('selexamcentre').options.length=0;
 document.getElementById('selexamcentre').options[0] = new Option('Select','');
 var x=1;
 //alert(selstate);
 //center state state code 16 has directly mapped becuase of duplicate*/

//else
//{		
/*	
 for (var val in arrexamcentrestatemap)
 {			

 if(selstate == arrexamcentrestatemap[val])
 {				
 //document.getElementById('err_div').innerHTML=document.getElementById('err_div').innerHTML+val+'\n';				
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);
 x=x+1;
 }
 }*/
//}
/*
 if(selstate =="18" || selstate =="19" || selstate =="21")
 {
 val="1301";
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);			
 }
 if(selstate =="30")
 {
 val="2701";
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);			
 }
 if(selstate =="32" || selstate =="33" || selstate =="34" || selstate =="35")
 {
 val="3101";
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);			
 }
 */
/*
 }else{
 document.getElementById('selexamcentre').options.length=0;
 document.getElementById('selexamcentre').options[0] = new Option('Select','');
 }	
 }
 */


function save_edit(submit_type, step_no) {
    global_submit_type = submit_type;
    global_edit_step_no = step_no;
    var frm = document.reg_frm;

    /*if(document.reg_frm.selbank.value == ""){
     alert("Please select the Name of the Bank");
     document.reg_frm.selbank.focus();
     return false;
     }*/

    if (get_radio_value(document.reg_frm.opt_cat) == '') {
        alert("Please select Category");
        document.reg_frm.opt_cat[1].focus();
        return false;
    }


    /*if(get_radio_value(frm.optexservice)=='Y')
     {
     if(dv('txtexserper').value != '' && !checkallzeroes(trim(dv('txtexserper').value)))
     {
     alert("Please enter Period of service as an Ex-serviceman should not be zero(s)");
     dv('txtexserper').focus();
     return false;
     }
     if(dv('txtexserper').value != '' && !isNumeric('txtexserper'))
     {
     alert("Please enter Period of service as an Ex-serviceman should be Digits only");
     document.getElementById('txtexserper').focus();
     return false;
     }
     }

     if(dv('txtnationality').value!='' && !isAlphabets('txtnationality'))
     {
     alert("Nationality should be Alphabets Only");
     document.getElementById('txtnationality').focus();
     return false;
     }*/

    if ((exservice == 'Y') && (dv('txt_exser_no').value != '')) {
        if (!checkallzeroes(trim(dv('txt_exser_no').value))) {
            alert("Please enter Number of occasions on which appeared for recruitment examination for POs in SBI");
            dv('txt_exser_no').focus();
            return false;
        }
        else if (!isNumeric('txt_exser_no')) {
            alert("Number of occasions on which appeared for recruitment examination for POs in SBI should be Digits only");
            document.getElementById('txt_exser_no').focus();
            return false;
        }
    }

    //Personal Details
    if (dv('fullname').value == '') {
        alert("Full Name should not be empty");
        document.getElementById('fullname').focus();
        return false;
    }
    if (dv('fullname').value != '' && !isCity('fullname')) {
        alert("Full Name should be alphabets / special characters (dot,hypen) allowed");
        document.getElementById('fullname').focus();
        return false;
    }

    /*if(dv('middlename').value!='' && !isCity('middlename'))
     {
     alert("Middle Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('middlename').focus();
     return false;
     }

     if(dv('txtlastname').value!='' && !isCity('txtlastname'))
     {
     alert("Sur Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtlastname').focus();
     return false;
     }*/

    if (dv('seldobday').value == '') {
        alert("Please select day of Date of Birth");
        dv('seldobday').focus();
        return false;
    }
    if (dv('seldobmon').value == '') {
        alert("Please select month of Date of Birth");
        dv('seldobmon').focus();
        return false;
    }

    if (dv('seldobyear').value == '') {
        alert("Please select Year of Date of Birth");
        dv('seldobyear').focus();
        return false;
    }
    if ((dv('seldobyear').value != '') && (dv('seldobmon').value != '') && (dv('seldobday').value != '')) {
        varBirthDate = dv('seldobmon').value + '/' + dv('seldobday').value + '/' + dv('seldobyear').value;
        if (!isDatechk(varBirthDate)) {
            alert("Invalid Date Of Birth");
            document.getElementById('seldobday').focus();
            return false;
        }
    }
    if (dv('txtfname').value != '' && !isCity('txtfname')) {
        alert("Husband's /Father's Name should be alphabets / special characters (dot,hypen) allowed");
        document.getElementById('txtfname').focus();
        return false;
    }

    /*if(dv('txtfathermidname').value!='' && !isCity('txtfathermidname'))
     {
     alert("Husband's /Father's Middle Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtfathermidname').focus();
     return false;
     }

     if(dv('txtfatherlastname').value!='' && !isCity('txtfatherlastname'))
     {
     alert("Husband's /Father's Sur Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtfatherlastname').focus();
     return false;
     }*/

    if (dv('txtmname').value != '' && !isCity('txtmname')) {
        alert("Mother's First Name should be alphabets / special characters (dot,hypen) allowed");
        document.getElementById('txtmname').focus();
        return false;
    }

    /*if(dv('txtmothermidname').value!='' && !isCity('txtmothermidname'))
     {
     alert("Mother's Middle Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtmothermidname').focus();
     return false;
     }

     if(dv('txtmotherlastname').value!='' && !isCity('txtmotherlastname'))
     {
     alert("Mother's Sur Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtmotherlastname').focus();
     return false;
     }*/

    if ((dv('txtaddress1').value != '' || dv('txtaddress1perm').value != '') && !isAddress('txtaddress1')) {
        alert('Address1 should not allow special characters like (", comma, ?, \')');
        document.getElementById('txtaddress1').focus();
        return false;
    }

    if ((dv('txtaddress2').value != '' || dv('txtaddress2perm').value != '') && !isAddress('txtaddress2')) {
        alert('Address2 should not allow special characters like (", comma, ?, \')');
        document.getElementById('txtaddress2').focus();
        return false;
    }

    if ((dv('txtaddress3').value != '' || dv('txtaddress3perm').value != '') && !isAddress('txtaddress3')) {
        alert('Address3 should not allow special characters like (", comma, ?, \')');
        document.getElementById('txtaddress3').focus();
        return false;
    }

    if ((dv('txtdistrict').value != '' || dv('txtdistrictp').value != '') && !isAlphabets('txtdistrict')) {
        alert('District should be Alphabets Only');
        document.getElementById('txtdistrict').focus();
        return false;
    }

    if ((dv('txtpin').value != '' || dv('txtpinperm').value != '') && (!isNumeric('txtpin') || trim(document.getElementById('txtpin').value).length != 6 || dv('txtpin').value.substring(0, 1) == 0)) {
        alert('Address Pincode should be 6 digit Only (Should not start with zero)');
        document.getElementById('txtpin').focus();
        return false;
    }

    if (dv('txtstd').value != '' && (!isNumeric('txtstd') || trim(document.getElementById('txtstd').value).length > 6 || dv('txtstd').value.substring(0, 1) != 0)) {
        alert('Std code should be Max 6 digit Only (Should start with zero)');
        document.getElementById('txtstd').focus();
        return false;
    }

    if (dv('txtphone').value != '' && (!isNumeric('txtphone') || trim(document.getElementById('txtphone').value).length > 8 || dv('txtphone').value.substring(0, 1) == 0)) {
        alert('Phone Number should be Max 8 digit Only (Should not start with zero)');
        document.getElementById('txtphone').focus();
        return false;
    }

    if (dv('txtmobile').value == '') {
        alert('Please enter your Mobile No');
        document.getElementById('txtmobile').focus();
        return false;
    } else if (dv('txtmobile').value != '' && (!isNumeric('txtmobile') || dv('txtmobile').value.length != 10 || (dv('txtmobile').value.substring(0, 1) != 7 && dv('txtmobile').value.substring(0, 1) != 8 && dv('txtmobile').value.substring(0, 1) != 9))) {
        alert('Mobile No should be 10 digit Only (Should start with 7,8 or 9)');
        document.getElementById('txtmobile').focus();
        return false;
    }


    if (trim(dv('txtemail').value) == '') {
        alert("Please enter Email ID");
        dv('txtemail').focus();
        return false;
    }
    if (!isEmailUserId(trim(dv('txtemail').value))) {
        alert("Invaild Email ID");
        dv('txtemail').focus();
        return false;
    }
    if (trim(dv('seldomain').value) == '') {
        alert("Please select Domain Name");
        dv('seldomain').focus();
        return false;
    }
    if (trim(dv('seldomain').value) == "Others") {
        if (trim(dv('txtothdomain').value) == "") {
            alert("Please enter Other Domain Name");
            dv('txtothdomain').focus();
            return false;
        }
        complete_email_id = trim(dv('txtemail').value) + '@' + trim(dv('txtothdomain').value);
    }
    else
        complete_email_id = trim(dv('txtemail').value) + '@' + trim(dv('seldomain').value);

    // for emailid
    var firstval = parseInt(dv('txtemail').value.length);
    var secondval = parseInt(dv('txtothdomain').value.length);
    var emailid_max_length = firstval + secondval + 1;
    if (emailid_max_length > 50) {
        alert("Email ID cannot be more than 50 characters");
        dv('txtemail').focus();
        return false;
    }
    if (trim(dv('seldomain').value) == "Others") {
        if (!isDomainName(trim(dv('txtothdomain').value))) {
            alert("Invaild Domain Name");
            dv('txtothdomain').focus();
            return false;
        }
    }
    if (complete_email_id.length > 50) {
        alert("Email ID cannot be greater than 50 characters in length");
        dv('txtemail').focus();
        return false;
    }
    if (trim(dv('txtcemail').value) == '') {
        alert("Please enter confirm Email ID");
        dv('txtcemail').focus();
        return false;
    }
    if (trim(complete_email_id) != trim(dv('txtcemail').value)) {
        alert("Email ID and confirm Email ID should be same");
        dv('txtcemail').focus();
        return false;
    }
    document.getElementById('complete_email').value = complete_email_id;


    /*if((dv('selstream3').value!='' && !isAlphabets('selstream3')) || (dv('selstream4').value!='' && !isAlphabets('selstream4')) || (dv('selstream5').value!='' && !isAlphabets('selstream5')) || (dv('selstream6').value!='' && !isAlphabets('selstream6')))
     {
     alert('Educational Stream should be Alphabets Only');
     document.getElementById('selstream3').focus();
     return false;
     }*/

    /*if( (dv('selday3').value!='') && (dv('selmon3').value!='') && (dv('selyr3').value!='') )
     {		
     if(!isDatechk(dv('selmon3').value+'/'+dv('selday3').value+'/'+dv('selyr3').value))
     {	
     alert("Invalid Graduation Date of Passing");
     document.getElementById('selmon3').focus();
     return false;
     }	
     }
     if( (dv('selday4').value!='') && (dv('selmon4').value!='') && (dv('selyr4').value!='') )
     {		
     if(!isDatechk(dv('selmon4').value+'/'+dv('selday4').value+'/'+dv('selyr4').value))
     {	
     alert("Invalid Post Graduation Date of Passing");
     document.getElementById('selmon4').focus();
     return false;
     }	
     }
     *if( (dv('selday5').value!='') && (dv('selmon5').value!='') && (dv('selyr5').value!='') )
     {		
     if(!isDatechk(dv('selmon5').value+'/'+dv('selday5').value+'/'+dv('selyr5').value))
     {	
     alert("Invalid Educational Date of Passing.");
     document.getElementById('selmon5').focus();
     return false;
     }	
     }

     if( (dv('selday6').value!='') && (dv('selmon6').value!='') && (dv('selyr6').value!='') )
     {		
     if(!isDatechk(dv('selmon6').value+'/'+dv('selday6').value+'/'+dv('selyr6').value))
     {	
     alert("Invalid Professional Qualification Date of Passing");
     document.getElementById('selmon6').focus();
     return false;
     }	
     }*/

    if ((dv('selmark3').value != '' && (dv('selmark3').value > 100 || dv('selmark3').value < 0 || !percmarxvlid(dv('selmark3').value))) || (dv('selmark4').value != '' && (dv('selmark4').value > 100 || dv('selmark4').value < 0 || !percmarxvlid(dv('selmark4').value))) || (dv('selmark6').value != '' && (dv('selmark6').value > 100 || dv('selmark6').value < 0 || !percmarxvlid(dv('selmark6').value))) || (dv('selmark8').value != '' && (dv('selmark8').value > 100 || dv('selmark8').value < 0 || !percmarxvlid(dv('selmark8').value)))) {
        alert('Educational Marks should be Digits between 0-100');
        document.getElementById('selmark1').focus();
        return false;
    }

    /*if((dv('txtlang2').value!='' && !isAlphabets('txtlang2')) || (dv('txtlang3').value!='' && !isAlphabets('txtlang3')))
     {
     alert('Language should be Alphabets Only');
     document.getElementById('txtlang2').focus();
     return false;
     }*/

    //PHOTO CODE STARTED
    if (document.reg_frm.txtphoto.value != '') {
        var phid = document.reg_frm.txtphoto;
        if (!filevalidate(phid, 'photo')) {
            return false;
        }
    }
    if (document.reg_frm.txtsign.value != '') {
        var sigid = document.reg_frm.txtsign;
        if (!filevalidate(sigid, 'sign')) {
            return false;
        }
    }
    //PHOTO CODE ENDED

    if (get_radio_value(document.reg_frm.paymentin) == '') {
        alert("Please select payment mode");
        document.reg_frm.paymentin[0].focus();
        return false;
    }

    if (EnableCaptcha == 'Y') {
        if (document.reg_frm.txtCode.value == '') {
            alert('Please enter the Security Code');
            document.reg_frm.txtCode.value = '';
            document.reg_frm.txtCode.focus();
            return false;
        } // Now the Ajax CAPTCHA validation
        else {
            checkcode(document.reg_frm.txtCode.value);
            return false;
        }
    }


    if (submit_type == 2) {
        if (confirm("Are you sure the data entered in is correct. If yes click OK. Other wise click cancel")) {
            document.getElementById('Submit').disabled = true;
            document.getElementById('Recheck').disabled = true;
            document.getElementById('Close').disabled = true;
            document.getElementById('Save').disabled = true;
            if (step_no == '1')
                document.reg_frm.action = "edit_submit.php";
            else if (step_no == '2')
                document.reg_frm.action = "edit_submit2.php";
            document.reg_frm.submit();
        }
        else {
            document.getElementById('Submit').disabled = false;
            document.getElementById('Recheck').disabled = false;
            document.getElementById('Close').disabled = false;
            document.getElementById('Save').disabled = false;
        }
    }
}

function validate(submit_type, step_no) {
    global_submit_type = submit_type;
    global_reg_step_no = step_no;
    var frm = document.reg_frm;

    /*if(document.getElementById("selstateapplied").value=="")
     {
     alert("Please select State/UT Applied for");
     document.getElementById('selstateapplied').focus();
     return false;	
     }*/
    /*if(document.reg_frm.selpost.value == ""){
     alert("Please select the Post");
     document.reg_frm.selpost.focus();
     return false;
     }*/

    /*if(document.reg_frm.selbank.value == ""){
     alert("Please select the Name of the Bank");
     document.reg_frm.selbank.focus();
     return false;
     }*/

    if (get_radio_value(document.reg_frm.opt_cat) == '') {
        alert("Please select Category");
        document.reg_frm.opt_cat[0].focus();
        return false;
    }

    /*if(get_radio_value(document.reg_frm.optdisability) == "Y")
     {
     alert("Disability Should be No To Apply");
     document.getElementById('optdisability2').focus();
     return false;
     }*/

    if (get_radio_value(document.reg_frm.optdisability) == "Y") {
        if (document.getElementById('seldisabilitytype').value == "") {
            alert("Please select Type of Disability");
            document.getElementById('seldisabilitytype').focus();
            return false;
        }
        if (document.getElementById('seldisabilityper').value == "") {
            alert("Please select Percentage of Disability");
            document.getElementById('seldisabilityper').focus();
            return false;
        }
    }

    /*if(get_radio_value(document.reg_frm.clerk_emp) =='')
     {
     alert("Please select Are you a Clerical Employee of Participating Public Sector Banks");
     document.getElementById('clerk_emp').focus();
     return false;	
     }*/

    //var emp_bank=get_radio_value(document.reg_frm.clerk_emp);

    /*if(emp_bank == 'Y')
     {
     if(document.reg_frm.selbanks.value == "")
     {
     alert("Please Select the name of Public Sector Bank");
     document.getElementById('selbanks').focus();
     return false;		
     }

     }*/
    if (get_radio_value(document.reg_frm.optminority) == '') {
        alert("Please select YES/NO for Whether you belong to Religious Minority Community");
        document.getElementById('optminority').focus();
        return false;
    }

    var minority = get_radio_value(document.reg_frm.optminority);
    if (minority == 'Y') {
        if (document.reg_frm.selminority.value == "") {
            alert("Please select Religion to which you belong");
            document.getElementById('selminority').focus();
            return false;
        }
        /*if(document.reg_frm.selminority.value == "Others")
         {
         if(trim(document.reg_frm.othreligion.value) == "")
         {	
         alert("Please enter Religion to which you belong");
         document.getElementById('othreligion').focus();
         return false;		
         }
         if(!isAlphabets('othreligion'))
         {	
         alert("Religion to which you belong should be characters only");
         document.getElementById('othreligion').focus();
         return false;		
         }
         }*/
    }


    /*if(get_radio_value(document.reg_frm.optwrk_exp) =='Y' && trim(document.reg_frm.txtexp_yrs.value)==''){
     alert("Please enter years for work experience");
     document.getElementById('txtexp_yrs').focus();
     return false;
     }*/
    /*	if(document.reg_frm.selpost.value == "MGLA" || document.reg_frm.selpost.value == "DMLA"  || document.reg_frm.selpost.value == "AMLA" ){
     if(dv('barcouncilno').value == '' && document.reg_frm.selpost.value != "MGLA"){
     alert("Please enter 'Registration Number Allotted by Bar Council'");
     dv('barcouncilno').focus();
     return false;
     }
     if(document.getElementById('selcouncilday').value =='' && document.reg_frm.selpost.value != "MGLA")
     {
     alert("Please select day of Date of Enrolment with Bar Council ");
     document.getElementById('selcouncilday').focus();
     return false;	
     }
     if(document.getElementById('selcouncilmon').value =='' && document.reg_frm.selpost.value != "MGLA")
     {
     alert("Please select month of Date of Enrolment with Bar Council");
     document.getElementById('selcouncilmon').focus();
     return false;	
     }

     if(document.getElementById('selcouncilyr').value =='' && document.reg_frm.selpost.value != "MGLA")
     {
     alert("Please select Year of Date of Enrolment with Bar Council");
     document.getElementById('selcouncilyr').focus();
     return false;	
     }
     if(document.getElementById('selcouncilyr').value != ""){
     var dobyear=document.getElementById('seldobyear').value;
     var enrol=parseInt(document.getElementById('selcouncilyr').value);//-dobyear;
     if(enrol <= dobyear)
     {
     alert("Date of Enrolment with Bar Council year should be greater than year of birth.");
     document.getElementById('selcouncilyr').focus();
     return false;
     }
     }

     if(document.getElementById('selcouncilyr').value =='2012')
     {
     if(document.getElementById('selcouncilmon').value > '10')
     {
     alert("Date of Enrolment with Bar Council should be on or before 01.10.2012");
     document.getElementById('selcouncilmon').focus();
     return false;
     }

     if(document.getElementById('selcouncilmon').value == '10' && document.getElementById('selcouncilday').value > '01' )
     {
     alert("Date of Enrolment with Bar Council should be on or before 01.10.2012");
     document.getElementById('selcouncilday').focus();
     return false;
     }

     }

     if( (document.getElementById('selcouncilyr').value!='') && (document.getElementById('selcouncilmon').value!='') && (document.getElementById('selcouncilday').value!='') )
     {		
     varEnrolmentDate=document.getElementById('selcouncilmon').value+'/'+document.getElementById('selcouncilday').value+'/'+document.getElementById('selcouncilyr').value;
     if(!isDatechk(varEnrolmentDate))
     {	
     alert("Invalid Date of Enrolment with Bar Council.");
     document.getElementById('selcouncilday').focus();
     return false;
     }	
     }	

     }*/

    //matric=get_radio_value(frm.optmat);
    exservice = get_radio_value(frm.optexservice);
    //disxs=get_radio_value(frm.optdisxs);
    /*if(exservice=='Y')
     {
     if(dv('txtexserper').value == ''){
     alert("Please enter Period of Service as an Ex-serviceman");
     dv('txtexserper').focus();
     return false;
     }
     else if(!checkallzeroes(trim(dv('txtexserper').value)))
     {
     alert("Please enter Period of Service as an Ex-serviceman should not be zero(s)");
     dv('txtexserper').focus();
     return false;
     }
     else  if(!isNumeric('txtexserper'))
     {
     alert("Please enter Period of Service as an Ex-serviceman should be Digits only");
     document.getElementById('txtexserper').focus();
     return false;
     }
     }*/

    if (exservice == 'Y') {
        if (dv('txt_exser_no').value == '') {
            alert("Please enter Number of occasions on which appeared for recruitment examination for POs in SBI");
            dv('txt_exser_no').focus();
            return false;
        }
        else if (!checkallzeroes(trim(dv('txt_exser_no').value))) {
            alert("Please enter Number of occasions on which appeared for recruitment examination for POs in SBI");
            dv('txt_exser_no').focus();
            return false;
        }
        else if (!isNumeric('txt_exser_no')) {
            alert("Number of occasions on which appeared for recruitment examination for POs in SBI should be Digits only");
            document.getElementById('txt_exser_no').focus();
            return false;
        }
    }

    /*if(get_radio_value(document.reg_frm.optcwepo_exam) =='')
     {
     alert("Please select Have you appeared for CWE PO/MT exam held on 18/09/2011 and 13/11/2011");
     document.getElementById('optcwepo_exam').focus();
     return false;	
     }*/


    /*if((get_radio_value(document.reg_frm.optcwepo_exam) =='Y') && document.getElementById("txtclerk_regno").value !="" || document.getElementById("txtclerk_rollno").value !="")	{

     document.getElementById('txtclerk_regno').readOnly = false;
     document.getElementById('txtclerk_rollno').readOnly = false;
     var candiname_id = getAppliedpostCandidatenumber();
     candiname = candiname_id.split("|");

     if(candiname[0]=="1" && candiname[1]=="1" ) {
     document.getElementById('canidate_err').innerHTML = "<br />Invalid Access";
     //document.getElementById('txtclerk_regno').value = "";	
     //	document.getElementById('canidate_err').innerHTML = "<br />Invalid Access";
     //	document.getElementById('txtclerk_regno').value = "";
     }
     else if(candiname[0]=="0" && candiname[1]=="0" ) {
     document.getElementById('canidate_err').innerHTML = "<br />Registration Number Not Available";
     //document.getElementById('canidate_err').innerHTML = "<br />Roll Number Not Available";
     //document.getElementById('txtclerk_regno').value = "";
     }else{
     document.getElementById('canidate_err').innerHTML ="";
     document.getElementById('txtclerk_regno').value = candiname[0];
     document.getElementById('txtclerk_rollno').value = candiname[1];

     }
     }*/

    /*var cwetpo_exam=get_radio_value(document.reg_frm.optcwepo_exam);

     if(cwetpo_exam=='Y')
     {


     if ((dv('txtclerk_regno').value == '') &&  (dv('txtclerk_rollno').value == ''))
     {
     alert("Enter either Registration Number or Roll Number should be entered");
     dv('txtclerk_regno').focus();
     return false;
     }
     else if(!checkallzeroes(trim(dv('txtclerk_regno').value)))
     {
     alert("Registration Number should not be zero(s)");
     dv('txtclerk_regno').focus();
     return false;
     }
     else  if(!isNumeric('txtclerk_regno'))
     {
     alert("Registration Number should be Digits only");
     document.getElementById('txtclerk_regno').focus();
     return false;
     }





     }*/


    /* if(get_radio_value(document.reg_frm.optwrk_exp) ==''){
     alert("Please select YES/NO for Do you have any work experience");
     document.getElementById('optwrk_exp').focus();
     return false;	
     }*/


    //var disxs=get_radio_value(document.reg_frm.optdisxs);
    //var dxs=get_radio_value(document.reg_frm.optdxs);

    if (document.getElementById('selstateapplied').value == '') {
        alert("Please select State/ UT which the Centre of Examination Belongs");
        document.getElementById('selstateapplied').focus();
        return false;
    }

    /*if(trim(document.getElementById('txtnationality').value) =='')
     {
     alert("Please select Nationality ");
     document.getElementById('txtnationality').focus();
     return false;
     }else if(!isAlphabets('txtnationality'))
     {
     alert("Nationality  should be Alphabets Only");
     document.getElementById('txtnationality').focus();
     return false;
     }*/

    /*if(document.getElementById('seloffice').value =='')
     {
     alert("Please select choice of the Bank's office to which the candidate intends to apply");
     document.getElementById('seloffice').focus();
     return false;	
     }*/

    if (document.getElementById('selexamcentre').value == '') {
        alert("Please select centre of examination");
        document.getElementById('selexamcentre').focus();
        return false;
    }

    /*if(trim(document.getElementById('firstname').value) =='')
     {
     alert("Please enter First Name");
     document.getElementById('firstname').focus();
     return false;
     }else if(!isCity('firstname'))
     {
     alert("First Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('firstname').focus();
     return false;
     }

     if(trim(document.getElementById('middlename').value) !='')
     {
     if(!isCity('middlename'))
     {
     alert("Middle Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('middlename').focus();
     return false;		
     }
     }

     if(trim(document.getElementById('txtlastname').value) !='')
     {
     if(!isCity('txtlastname'))
     {
     alert("Sur Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtlastname').focus();
     return false;		
     }
     }*/

    if (trim(document.getElementById('fullname').value) == '') {
        alert("Please enter Full Name");
        document.getElementById('fullname').focus();
        return false;
    }
    else if (!isCity('fullname')) {
        alert("Full Name should be alphabets / special characters (dot,hypen) allowed");
        document.getElementById('fullname').focus();
        return false;
    }

    if (document.getElementById('seldobday').value == '') {
        alert("Please select day of Date of Birth");
        document.getElementById('seldobday').focus();
        return false;
    }
    if (document.getElementById('seldobmon').value == '') {
        alert("Please select month of Date of Birth");
        document.getElementById('seldobmon').focus();
        return false;
    }
    if (document.getElementById('seldobyear').value == '') {
        alert("Please select Year of Date of Birth");
        document.getElementById('seldobyear').focus();
        return false;
    }
    if ((document.getElementById('seldobyear').value != '') && (document.getElementById('seldobmon').value != '') && (document.getElementById('seldobday').value != '')) {
        varBirthDate = document.getElementById('seldobmon').value + '/' + document.getElementById('seldobday').value + '/' + document.getElementById('seldobyear').value;
        if (!isDatechk(varBirthDate)) {
            alert("Invalid Date Of Birth");
            document.getElementById('seldobday').focus();
            return false;
        }
    }

    var end_age = "";
    var st_age = "";

    end_age = "01/01/1992";
    st_age = "02/01/" + document.getElementById('myear').value;

    if (document.getElementById('txtage').value == "") {
        alert("Date Of Birth for UR should be between 01/01/1974 to 01/01/1996\nDate Of Birth for SC\ST should be between 01/01/1969 to 01/01/1996\n Date Of Birth for OBC-A/OBC-B should be between 01/01/1971 to 01/01/1996");
        document.getElementById('seldobyear').focus();
        return false;
    }

    /*if(document.getElementById('txtage').value > 28 ||  document.getElementById('txtage').value < 18)
     {
     alert("Age should be between 18-28 for this post, please select corresponding date of birth");
     document.getElementById('seldobyear').focus();
     return false;	
     } */

    if (get_radio_value(document.reg_frm.optsex) == '') {
        alert("Please select Gender");
        document.getElementById('optsex').focus();
        return false;
    }

    /*if(get_radio_value(document.reg_frm.optsex) == 'M')
     {
     if(get_radio_value(document.reg_frm.opt_widow) == 'Y')
     {
     alert("Please select appropriate Gender as you have selected 'YES' for 'Are you seeking Relaxation under Widows/Divorced women & women judicially separated from their husbands & who are not remarried'");
     document.getElementById('optsex').focus();
     return false;			
     }
     }*/

    if (trim(document.getElementById('txtfname').value) == '') {
        alert("Please enter Husband's /Father's Name");
        document.getElementById('txtfname').focus();
        return false;
    } else if (!isCity('txtfname')) {
        alert("Husband's /Father's Name should be alphabets / special characters (dot,hypen) allowed");
        document.getElementById('txtfname').focus();
        return false;
    }

    /*if(trim(document.getElementById('txtfathermidname').value)!='' && !isCity('txtfathermidname'))
     {
     alert("Husband's /Father's Middle Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtfathermidname').focus();
     return false;
     }

     if(trim(document.getElementById('txtfatherlastname').value)!='' && !isCity('txtfatherlastname'))
     {
     alert("Husband's /Father's Sur Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtfatherlastname').focus();
     return false;
     }*/

    if (trim(document.getElementById('txtmname').value) == '') {
        alert("Please enter Mother's First Name");
        document.getElementById('txtmname').focus();
        return false;
    }
    if (trim(document.getElementById('txtmname').value) != '') {
        if (!isCity('txtmname')) {
            alert("Mother's First Name should be alphabets / special characters (dot,hypen) allowed");
            document.getElementById('txtmname').focus();
            return false;
        }
    }

    /*if(trim(document.getElementById('txtmothermidname').value)!='' && !isCity('txtmothermidname'))
     {
     alert("Mother's Middle Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtmothermidname').focus();
     return false;
     }

     if(trim(document.getElementById('txtmotherlastname').value)!='' && !isCity('txtmotherlastname'))
     {
     alert("Mother's Sur Name should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtmotherlastname').focus();
     return false;
     }*/

    if (trim(document.getElementById('txtaddress1').value) == '') {
        alert("Please enter Address1 for Correspondence");
        document.getElementById('txtaddress1').focus();
        return false;
    } else if (!isAddress('txtaddress1')) {
        alert('Address1 should not allow special characters like (", comma, ?, \')');
        document.getElementById('txtaddress1').focus();
        return false;
    }

    if (trim(document.getElementById('txtaddress2').value) != '') {
        if (!isAddress('txtaddress2')) {
            alert('Address2 should not allow special characters like (", comma, ?, \')');
            document.getElementById('txtaddress2').focus();
            return false;
        }
    }
    if (trim(document.getElementById('txtaddress3').value) != '') {
        if (!isAddress('txtaddress3')) {
            alert('Address3 should not allow special characters like (", comma, ?, \')');
            document.getElementById('txtaddress3').focus();
            return false;
        }
    }
    if (trim(document.getElementById('txtdistrict').value) != '') {
        if (!isAlphabets('txtdistrict')) {
            alert("District for Correspondence should be Alphabets Only");
            document.getElementById('txtdistrict').focus();
            return false;
        }
    }
    if (trim(document.getElementById('txtdistrictp').value) != '') {
        if (!isAlphabets('txtdistrictp')) {
            alert("Permanent Address District for Correspondence should be Alphabets Only");
            document.getElementById('txtdistrictp').focus();
            return false;
        }
    }
    if (trim(document.getElementById('txtstate').value) == '') {
        alert("Please select State");
        document.getElementById('txtstate').focus();
        return false;
    }
    if (trim(document.getElementById('txtpin').value) == '') {
        alert("Please enter a Pincode with 6 digit numeric value");
        document.getElementById('txtpin').focus();
        return false;
    } else if (!isNumeric('txtpin')) {
        alert("Please enter a numeric value for pincode");
        document.getElementById('txtpin').focus();
        return false;
    } else if (trim(document.getElementById('txtpin').value).length != 6) {
        alert("Pincode should be 6 digit numeric value");
        document.getElementById('txtpin').focus();
        return false;
    }
    if (trim(document.getElementById('txtpin').value.substring(0, 1)) == 0) {
        alert("Pincode should not start with a zero");
        document.getElementById('txtpin').focus();
        return false;
    }
    //Pincode Number checking with corresponing to state
    if (!Pinnumber_check('txtpin', 'txtstate'))
        return false;

    if (document.reg_frm.chksameaddr.checked == true) {
        same_addr();
    }
    if (trim(document.getElementById('txtaddress1perm').value) == '') {
        alert("Please enter Permanent Address1");
        document.getElementById('txtaddress1perm').focus();
        return false;
    } else if (!isAddress('txtaddress1perm')) {
        alert('Permanent Address1 should not allow special characters like (", comma, ?, \')');
        document.getElementById('txtaddress1perm').focus();
        return false;
    }
    if (trim(document.getElementById('txtaddress2perm').value) != '') {
        if (!isAddress('txtaddress2perm')) {
            alert('Permanent Address2 should not allow special characters like (", comma, ?, \')');
            document.getElementById('txtaddress2perm').focus();
            return false;
        }
    }
    if (trim(document.getElementById('txtaddress3perm').value) != '') {
        if (!isAddress('txtaddress3perm')) {
            alert('Permanent Address3 should not allow special characters like (", comma, ?, \')');
            document.getElementById('txtaddress3perm').focus();
            return false;
        }
    }

    if (trim(document.getElementById('txtstateperm').value) == '') {
        alert("Please select Permanent State");
        document.getElementById('txtstateperm').focus();
        return false;
    }
    if (trim(document.getElementById('txtpinperm').value) == '') {
        alert("Please enter 6 digit Pincode for permanent address");
        document.getElementById('txtpinperm').focus();
        return false;
    } else if (!isNumeric('txtpinperm')) {
        alert("Please enter a numeric value for pincode in permanent address");
        document.getElementById('txtpinperm').focus();
        return false;
    } else if (trim(document.getElementById('txtpinperm').value).length != 6) {
        alert("Pincode should be 6 digit numeric value");
        document.getElementById('txtpinperm').focus();
        return false;
    }
    if (trim(document.getElementById('txtpinperm').value.substring(0, 1)) == 0) {
        alert("Pincode should not start with a zero");
        document.getElementById('txtpinperm').focus();
        return false;
    }
    //Pincode Number checking with corresponing to state
    if (!Pinnumber_check('txtpinperm', 'txtstateperm'))
        return false;


    // added email id validation here ended

    if (document.getElementById('txtmobile').value == '') {
        alert("Mobile Number is Mandatory");
        document.getElementById('txtmobile').focus();
        return false;
    }
    var phonechk = 0;


    if (document.getElementById('txtphone').value != "" || document.getElementById('txtstd').value != "") {
        if (document.getElementById('txtphone').value != "") {
            if (document.getElementById('txtstd').value == "") {
                alert("Please enter STD Code");
                document.getElementById('txtstd').focus();
                return false;
            }
            if (document.getElementById('txtstd').value == 0) {
                alert("STD Code should not be zero(s)");
                document.getElementById('txtstd').focus();
                return false;
            }

            if (trim(dv('txtphone').value).substr(0, 1) == 0) {
                alert("Phone no should not start with 0.");
                dv('txtphone').focus();
                return false;
            }
            //phonechk=1;
        }
        if ((trim(document.getElementById('txtstd').value) != '')) {
            if (!isNumeric('txtstd')) {
                alert("STD Code should be digits");
                document.getElementById('txtstd').focus();
                return false;
            }


            // STD CODE SHOULD BE MINIMUM 3 DIGITS
            if (document.getElementById('txtphone').value == "") {
                alert("Please enter Phone No.");
                document.getElementById('txtphone').focus();
                return false;
            }
            if (document.getElementById('txtphone').value != "") {
                if (!isNumeric('txtphone')) {
                    alert("Phone No should be digits");
                    document.getElementById('txtphone').focus();
                    return false;
                }
                if (document.getElementById('txtphone').value == 0) {
                    alert("Phone No should not be zero(s)");
                    document.getElementById('txtphone').focus();
                    return false;
                }
                /*if(trim(dv('txtstd').value).substr(0,1)!=0)
                 {
                 alert("STD Code should  start with 0.");
                 dv('txtstd').focus();
                 return false;
                 }*/

                var std_second_code = document.getElementById('txtstd').value;
                /*if(std_second_code.substr(1,1)==0)
                 {
                 alert("STD Code should not have second digit as Zero");
                 dv('txtstd').focus();
                 return false;
                 }*/
            }
            //phonechk=1;		
        }
        // checking the length of both phone and std
        var firstval_txtphone = parseInt(document.getElementById('txtphone').value.length);
        var secondval_txtstd = parseInt(document.getElementById('txtstd').value.length)
        var stdphone_max_length = firstval_txtphone + secondval_txtstd;
        /*if(stdphone_max_length != 16)
         {
         alert("Combination of STD and Phone should be 16 digits");
         document.getElementById('txtstd').focus();
         return false;
         }*/
    }

    if (trim(document.getElementById('txtmobile').value) != '') {
        if (!isNumeric('txtmobile')) {
            alert("Mobile Number should be 10 digits");
            document.getElementById('txtmobile').focus();
            return false;
        } else if (trim(document.getElementById('txtmobile').value).length != 10) {
            alert("Mobile Number should be 10 digits");
            document.getElementById('txtmobile').focus();
            return false;
        }
        if ((trim(document.getElementById('txtmobile').value).substr(0, 1) != 9) && (trim(document.getElementById('txtmobile').value).substr(0, 1) != 8) && (trim(document.getElementById('txtmobile').value).substr(0, 1) != 7)) {
            alert("Mobile Number should start with 7 or 8 or 9.");
            document.getElementById('txtmobile').focus();
            return false;
        }
        phonechk = 1;
    }

    else {
        alert("Please enter Mobile Number");
        document.getElementById('txtmobile').focus();
        return false;
    }
    if (phonechk == 0) {
        alert("Please enter Mobile Number");
        document.getElementById('txtmobile').focus();
        return false;
    }

    if (trim(document.getElementById('txtemail').value) == '') {
        alert("Please enter Email ID");
        document.getElementById('txtemail').focus();
        return false;
    }
    if (!isEmailUserId(trim(document.getElementById('txtemail').value))) {
        alert("Invaild Email ID");
        document.getElementById('txtemail').focus();
        return false;
    }
    if (trim(document.getElementById('seldomain').value) == '') {
        alert("Please select Domain Name");
        document.getElementById('seldomain').focus();
        return false;
    }
    if (trim(document.getElementById('seldomain').value) == "Others") {
        if (trim(document.getElementById('txtothdomain').value) == "") {
            alert("Please enter Other Domain Name");
            document.getElementById('txtothdomain').focus();
            return false;
        }
        complete_email_id = trim(document.getElementById('txtemail').value) + '@' + trim(document.getElementById('txtothdomain').value);
    }
    else
        complete_email_id = trim(document.getElementById('txtemail').value) + '@' + trim(document.getElementById('seldomain').value);
    /*
     if(!isEmailId(complete_email_id))
     {
     alert("Invaild Email ID format");
     document.getElementById('txtemail').focus();
     return false;
     }
     */
    // for emailid
    var firstval = parseInt(document.getElementById('txtemail').value.length);
    var secondval = parseInt(document.getElementById('txtothdomain').value.length);
    var emailid_max_length = firstval + secondval + 1;
    if (emailid_max_length > 50) {
        alert("Email ID cannot be more than 50 characters");
        document.getElementById('txtemail').focus();
        return false;
    }
    if (trim(document.getElementById('seldomain').value) == "Others") {
        if (!isDomainName(trim(document.getElementById('txtothdomain').value))) {
            alert("Invaild Domain Name");
            document.getElementById('txtothdomain').focus();
            return false;
        }
    }
    if (complete_email_id.length > 50) {
        alert("Email ID cannot be greater than 50 characters in length");
        document.getElementById('txtemail').focus();
        return false;
    }
    if (trim(document.getElementById('txtcemail').value) == '') {
        alert("Please enter confirm Email ID");
        document.getElementById('txtcemail').focus();
        return false;
    }
    if (trim(complete_email_id) != trim(document.getElementById('txtcemail').value)) {
        alert("Email ID and confirm Email ID should be same");
        document.getElementById('txtcemail').focus();
        return false;
    }
    document.getElementById('complete_email').value = complete_email_id;


    // EDUCATIONAL QUALIFICATIONS STARTS
    /*if((get_radio_value(document.reg_frm.optexservice) == 'Y' && get_radio_value(document.reg_frm.optmat) == 'Y'))
     {
     var education_chk1=0;
     var education_chk3=0;	
     }else{
     var education_chk1=1;
     var education_chk3=1;		
     }*/

    var education_chk3 = 0;
    var education_chk4 = 0;
    //var education_chk5=0;
    var education_chk6 = 0;
    var education_chk8 = 0;

    var qualified_p1_chk1 = 'N';//post code 1    graduation 
    var qualified_p2_chk1 = 'N';//post code 2    graduation 
    var qualified_p3_chk1 = 'N';//post code 3    graduation 
    var qualified_p4_chk1 = 'N';//post code 4    graduation 
    var qualified_p5_chk1 = 'N';//post code 4    graduation 	
    var qualified_p6_chk1 = 'N';//post code 4    graduation

    /*if((trim(document.getElementById('selyr2').value) !='') || (trim(document.getElementById('selstream2').value)!='') || (trim(document.getElementById('selmark2').value)!='') || (trim(document.getElementById('selday2').value)!='') || (trim(document.getElementById('selmon2').value)!='') )
     {
     education_chk2=1;//for Post Graduation	
     }*/
    if ((trim(document.getElementById('selyr3').value) != '') || (trim(document.getElementById('selstream3').value) != '') || (trim(document.getElementById('selmark3').value) != '')) {
        education_chk3 = 1;//for Graduation 
    }

    if ((trim(document.getElementById('selyr4').value) != '') || (trim(document.getElementById('selstream4').value) != '') || (trim(document.getElementById('selmark4').value) != '')) {
        education_chk4 = 1;//for Post Graduation
    }

    /*if((trim(document.getElementById('selyr5').value) !='') || (trim(document.getElementById('selstream5').value)!='') || (trim(document.getElementById('seldegree5').value)!='') || (trim(document.getElementById('selmark5').value)!='') || (trim(document.getElementById('selday5').value)!='') || (trim(document.getElementById('selmon5').value)!='') || (trim(document.getElementById('selgrade5').value)!=''))
     {
     education_chk5=1;//for Others
     }*/
    if ((trim(get_radio_value(document.reg_frm.radio_dip)) != '') || (trim(document.getElementById('selyr8').value) != '') || (trim(document.getElementById('selstream8').value) != '') || (trim(document.getElementById('selmark8').value) != '')) {
        education_chk8 = 1;//for Diploma
    }

    if ((trim(document.getElementById('selyr6').value) != '') || (trim(document.getElementById('selmark6').value) != '') || (trim(document.getElementById('selstream6').value) != '')) {
        education_chk6 = 1;//for Professional
    }

    //Graduation is mandatory
    /*if(get_radio_value(document.reg_frm.army_cert) =='Y')
     {
     qualified_p6_chk1='Y';
     }*/

    //Graduation should not be null validation
    /*if(education_chk1 == 1)
     {


     if(trim(document.getElementById('selstream1').value) =='')
     {
     alert("Please enter SSC/Equivalent  subject/stream.");
     document.getElementById('selstream1').focus();
     return false;
     }
     else if(!isAlphabets('selstream1'))
     {
     alert("SSC/Equivalent subject/stream should be Alphabets Only");
     document.getElementById('selstream1').focus();
     return false;
     }


     if(trim(document.getElementById('selday1').value) =='')
     {
     alert("Please select SSC/Equivalent  day of passing");
     document.getElementById('selday1').focus();
     return false;
     }

     if(trim(document.getElementById('selmon1').value) =='')
     {
     alert("Please select SSC/Equivalent  month of passing");
     document.getElementById('selmon1').focus();
     return false;
     }
     var dobyear=document.getElementById('seldobyear').value;



     if(trim(document.getElementById('selyr1').value) =='')
     {
     alert("Please select SSC/Equivalent year of passing");
     document.getElementById('selyr1').focus();
     return false;
     }	

     var res1=parseInt(document.getElementById('selyr1').value);//-dobyear;
     if(res1 <= dobyear)
     {
     alert("SSC/Equivalent year of passing should be greater than Year Of Birth.");
     document.getElementById('selyr1').focus();
     return false;
     }

     if(document.getElementById('selyr1').value =='2012')
     {
     if(document.getElementById('selmon1').value > '03')
     {
     alert("SSC/Equivalent Qualification Details should be as on 01.03.2012");
     document.getElementById('selmon1').focus();
     return false;
     }

     if(document.getElementById('selmon1').value == '03' && document.getElementById('selday1').value > '01' )
     {
     alert("SSC/Equivalent Qualification Details should be as on 01.03.2012");
     document.getElementById('selday1').focus();
     return false;
     }

     }

     if( (document.getElementById('selday1').value!='') && (document.getElementById('selmon1').value!='') && (document.getElementById('selyr1').value!='') )
     {		
     vardegreeDate=document.getElementById('selmon1').value+'/'+document.getElementById('selday1').value+'/'+document.getElementById('selyr1').value;

     if(!isDatechk(vardegreeDate))
     {	
     alert("Invalid year of passing.");
     document.getElementById('selday1').focus();
     return false;
     }

     }	

     if(trim(document.getElementById('selmark1').value) =='')
     {
     alert("Please enter SSC/Equivalent percentage of marks");
     document.getElementById('selmark1').focus();
     return false;
     }
     if(!isFloat('selmark1'))
     {
     alert("SSC/Equivalent percentage of marks should be digits");
     document.getElementById('selmark1').focus();
     return false;
     }		
     if( (trim(document.getElementById('selmark1').value) > 100) || (trim(document.getElementById('selmark1').value) <= 0) )
     {	
     alert("SSC/Equivalent percentage of marks should not be equal to 0 or greater than 100 ");
     document.getElementById('selmark1').focus();
     return false;
     }

     if(!percmarxvlid(trim(document.getElementById('selmark1').value)))
     {
     document.getElementById('selmark1').focus();
     return false;
     }





     }*/

    //Post graduation validation
    /*	if(education_chk2 == 1)
     {	
     if(education_chk1 == 0)
     {
     alert("To enter HSC/ 12th(10+2) / Equivalent details, one must enter SSC/Equivalent details");
     document.getElementById('selstream1').focus();
     return false;
     }

     if(trim(document.getElementById('selstream2').value) =='')
     {
     alert("Please enter HSC/ 12th(10+2) / Equivalent subject/stream.");
     document.getElementById('selstream2').focus();
     return false;
     }
     else if(!isAlphabets('selstream2'))
     {
     alert("HSC/ 12th(10+2) / Equivalent subject/stream should be Alphabets Only");
     document.getElementById('selstream2').focus();
     return false;
     }



     if(trim(document.getElementById('selday2').value) =='')
     {
     alert("Please select HSC/ 12th(10+2) / Equivalent  day of passing");
     document.getElementById('selday2').focus();
     return false;
     }
     if(trim(document.getElementById('selmon2').value) =='')
     {
     alert("Please select HSC/ 12th(10+2) / Equivalent  month of passing");
     document.getElementById('selmon2').focus();
     return false;
     }

     if(trim(document.getElementById('selyr2').value) =='')
     {
     alert("Please select HSC/ 12th(10+2) / Equivalent year of passing");
     document.getElementById('selyr2').focus();
     return false;
     }
     var dobyear=document.getElementById('seldobyear').value;
     var res2=parseInt(document.getElementById('selyr2').value);//-dobyear;
     if(res2 <= dobyear)
     {
     alert("HSC/ 12th(10+2) / Equivalent year of passing should be greater than year of birth.");
     document.getElementById('selyr2').focus();
     return false;
     }	
     if(document.getElementById('selyr2').value =='2011')
     {
     if(document.getElementById('selmon2').value > '12')
     {
     alert("Qualification Details should be as on 01.12.2011");
     document.getElementById('selmon2').focus();
     return false;
     }

     if(document.getElementById('selmon2').value == '12' && document.getElementById('selday2').value > '01' )
     {
     alert("Qualification Details should be as on 01.12.2011");
     document.getElementById('selday2').focus();
     return false;
     }

     }

     // pos graduation is grater than graduation year of passing
     if(document.getElementById('selyr1').value != "")
     {
     if(document.getElementById('selyr2').value <= document.getElementById('selyr1').value)
     {
     alert("HSC/ 12th(10+2) / Equivalent year of passing should be greater than SSC/Equivalent of passing.");
     document.getElementById('selyr2').focus();
     return false;
     }
     }

     if( (document.getElementById('selday2').value!='') && (document.getElementById('selmon2').value!='') && (document.getElementById('selyr2').value!='') )
     {		
     vardegreeDate=document.getElementById('selmon2').value+'/'+document.getElementById('selday2').value+'/'+document.getElementById('selyr2').value;

     if(!isDatechk(vardegreeDate))
     {	
     alert("Invalid year of passing.");
     document.getElementById('selday2').focus();
     return false;
     }

     }	

     if(trim(document.getElementById('selmark2').value) =='')
     {
     alert("Please enter HSC/ 12th(10+2) / Equivalent percentage of marks");
     document.getElementById('selmark2').focus();
     return false;
     }
     else if(!isFloat('selmark2'))
     {
     alert("HSC/ 12th(10+2) / Equivalent percentage of marks should be digits");
     document.getElementById('selmark2').focus();
     return false;
     }
     else if( (trim(document.getElementById('selmark2').value) > 100) || (trim(document.getElementById('selmark2').value) <= 0) )
     {	
     alert("HSC/ 12th(10+2) / Equivalent percentage of marks should not be equal to 0 or greater than 100 ");
     document.getElementById('selmark2').focus();
     return false;
     }
     if(!percmarxvlid(trim(document.getElementById('selmark2').value)))
     {
     document.getElementById('selmark2').focus();
     return false;
     }

     category=get_radio_value(document.reg_frm.opt_cat);	

     if(get_radio_value(document.reg_frm.opt_cat) =="SC" || get_radio_value(document.reg_frm.opt_cat) =="ST")
     {
     //alert("came here in 55 condition");
     if(document.getElementById('selmark2').value >=55)
     qualified_p2_chk1='Y';
     }
     else
     {
     if(document.getElementById('selmark2').value >=60)
     {
     qualified_p2_chk1='Y';
     }
     }


     }*/
//final education 2
    var dobyear = document.getElementById('seldobyear').value;
    //selstream8 - Diploma validation
    if (education_chk8 == 1) {

        if (get_radio_value(document.reg_frm.radio_dip) == '') {
            alert("Please choose 12th or Diploma");
            document.reg_frm.radio_dip[0].focus();
            return false;
        }

        if (trim(document.getElementById('selstream8').value) == '') {
            alert("Please enter 12th/Diploma subject/stream");
            document.getElementById('selstream8').focus();
            return false;
        }

        /*if(trim(document.getElementById('selstream8').value) == '49'){ 
         if(trim(document.getElementById('othdiploma').value) == '')
         {
         alert("Please enter Diploma subject/stream.");
         document.getElementById('othdiploma').focus();
         return false;
         }
         if(!isAlphabets('othdiploma'))
         {
         alert("Diploma subject/stream should be Alphabets Only");
         document.getElementById('othdiploma').focus();
         return false;
         }
         }*/

        if (!isAlphabets('selstream8')) {
            alert("12th/Diploma Subject/Stream should be Alphabets Only");
            document.getElementById('selstream8').focus();
            return false;
        }

        /*if(trim(document.getElementById('selday8').value) =='')
         {
         alert("Please select Diploma day of passing");
         document.getElementById('selday8').focus();
         return false;
         }

         if(trim(document.getElementById('selmon8').value) =='')
         {
         alert("Please select Diploma  month of passing");
         document.getElementById('selmon8').focus();
         return false;
         }*/

        if (trim(document.getElementById('selyr8').value) == '') {
            alert("Please select 12th/Diploma year of passing");
            document.getElementById('selyr8').focus();
            return false;
        }

        var res5 = parseInt(document.getElementById('selyr8').value);//-dobyear;
        if (res5 <= dobyear) {
            alert("12th/Diploma year of passing should be greater than year of birth");
            document.getElementById('selyr8').focus();
            return false;
        }

        /*if(document.getElementById('selyr8').value =='2012')
         {
         if(document.getElementById('selmon8').value > '10')
         {
         alert("Qualification Details should be as on 01.10.2012");
         document.getElementById('selmon8').focus();
         return false;
         }

         if(document.getElementById('selmon8').value == '10' && document.getElementById('selday8').value > '01' )
         {
         alert("Qualification Details should be as on 01.10.2012");
         document.getElementById('selday8').focus();
         return false;
         }			
         }*/

        /*if( (document.getElementById('selday8').value!='') && (document.getElementById('selmon8').value!='') && (document.getElementById('selyr8').value!='') )
         {		
         vardegreeDate=document.getElementById('selmon8').value+'/'+document.getElementById('selday8').value+'/'+document.getElementById('selyr8').value;
         if(!isDatechk(vardegreeDate))
         {	
         alert("Invalid year of passing.");
         document.getElementById('selday8').focus();
         return false;
         }
         }*/

        if (trim(document.getElementById('selmark8').value) == '') {
            alert("Please enter 12th/Diploma percentage of marks");
            document.getElementById('selmark8').focus();
            return false;
        }
        else if (!isFloat('selmark8')) {
            alert("12th/Diploma percentage of marks should be digits");
            document.getElementById('selmark8').focus();
            return false;
        }
        else if ((trim(document.getElementById('selmark8').value) > 100) || (trim(document.getElementById('selmark8').value) <= 0)) {
            alert("12th/Diploma percentage of marks should not be equal to 0 or greater than 100");
            document.getElementById('selmark8').focus();
            return false;
        }
        if (!percmarxvlid(trim(document.getElementById('selmark8').value))) {
            document.getElementById('selmark8').focus();
            return false;
        }

        /*if(trim(document.getElementById('selmark5').value) < 10){
         alert("Others percentage of marks should necessarily be double digits");
         document.getElementById('selmark5').focus();
         return false;
         }*/

        /*if(trim(document.getElementById('selgrade8').value) ==''){
         alert("Please select Diploma Qualification Class/Grade");
         document.getElementById('selgrade8').focus();
         return false;
         }*/
    }

    if (education_chk3 == 0) {
        alert("Graduation is mandatory");
        document.getElementById('selstream3').focus();
        return false;
    }

    //graduation validation
    if (education_chk3 == 1) {
        /*if(education_chk8 == 0) 
         {
         alert("To enter Graduation details, one must enter 12th/Diploma details");
         document.getElementById('selstream8').focus();
         return false;
         }*/

        /*if(education_chk2 == 0 && education_chk6 == 0)
         {
         alert("To enter Graduation details, one must enter HSC/ 12th(10+2) / Equivalent details or Diploma");
         document.getElementById('selstream2').focus();
         return false;

         }*/


        /*if(trim(document.getElementById('selinst3').value) =='')
         {
         alert("Please enter Professional Qualification Institution Name");
         document.getElementById('selinst3').focus();
         return false;
         }

         if(!isAlphabets('selinst3'))
         {
         alert("Professional Qualification  Institution Name should be Alphabets Only");
         document.getElementById('selinst3').focus();
         return false;
         }*/
        /*if(trim(document.getElementById('seldegree3').value) =='')
         {
         alert("Please enter Graduation Degree.");
         document.getElementById('seldegree3').focus();
         return false;
         }*/
        /*		if(trim(document.getElementById('seldegree3').value) == '08'){ 
         if(trim(document.getElementById('othgraddegree').value) == '')
         {
         alert("Please enter Graduation Degree.");
         document.getElementById('othgraddegree').focus();
         return false;
         }
         if(!isAlphabets('othgraddegree'))
         {
         alert("Graduation Degree should be Alphabets Only");
         document.getElementById('othgraddegree').focus();
         return false;
         }
         }*/
        if (trim(document.getElementById('selstream3').value) == '') {
            alert("Please enter Graduation subject/stream");
            document.getElementById('selstream3').focus();
            return false;
        }
        /*		if(trim(document.getElementById('selstream3').value) == '21'){ 
         if(trim(document.getElementById('othgrad').value) == '')
         {
         alert("Please enter Graduation subject/stream.");
         document.getElementById('othgrad').focus();
         return false;
         }
         if(!isAlphabets('othgrad'))
         {
         alert("Graduation subject/stream should be Alphabets Only");
         document.getElementById('othgrad').focus();
         return false;
         }
         }*/

        if (!isAlphabets('selstream3')) {
            alert("Graduation subject/stream should be Alphabets Only");
            document.getElementById('selstream3').focus();
            return false;
        }

        /*if(trim(document.getElementById('selstream3').value) =='06')
         {
         if(trim(document.getElementById('othprof').value) =='')
         {
         alert("Please enter Professional Qualification  Others subject/stream.");
         document.getElementById('othprof').focus();
         return false;
         }
         if(!isAlphabets('othprof'))
         {
         alert("Professional Qualification  Others subject/stream should be Alphabets Only");
         document.getElementById('othprof').focus();
         return false;
         }
         }*/

        /*if(trim(document.getElementById('selday3').value) =='')
         {
         alert("Please select Graduation  day of passing");
         document.getElementById('selday3').focus();
         return false;
         }

         if(trim(document.getElementById('selmon3').value) =='')
         {
         alert("Please select Graduation  month of passing");
         document.getElementById('selmon3').focus();
         return false;
         }*/

        if (trim(document.getElementById('selyr3').value) == '') {
            alert("Please select Graduation year of passing");
            document.getElementById('selyr3').focus();
            return false;
        }

        var res3 = parseInt(document.getElementById('selyr3').value);//-dobyear;
        if (res3 <= dobyear) {
            alert("Graduation year of passing should be greater than year of birth.");
            document.getElementById('selyr3').focus();
            return false;
        }

        if (trim(document.getElementById('selyr8').value) != '') {
            var res2 = parseInt(document.getElementById('selyr8').value);//-dobyear;
            if (res3 <= res2) {
                alert("Graduation year of passing should be greater than 12th/Diploma year of passing.");
                document.getElementById('selyr3').focus();
                return false;
            }
        }

        /*if(document.getElementById('selyr3').value =='2012')
         {
         if(document.getElementById('selmon3').value > '10')
         {
         alert("Graduation Qualification Details should be as on 01.10.2012");
         document.getElementById('selmon3').focus();
         return false;
         }

         if(document.getElementById('selmon3').value == '10' && document.getElementById('selday3').value > '01' )
         {
         alert("Graduation Qualification Details should be as on 01.10.2012");
         document.getElementById('selday3').focus();
         return false;
         }			
         }*/

        /*if( (document.getElementById('selday3').value!='') && (document.getElementById('selmon3').value!='') && (document.getElementById('selyr3').value!='') )
         {		
         vardegreeDate=document.getElementById('selmon3').value+'/'+document.getElementById('selday3').value+'/'+document.getElementById('selyr3').value;
         if(!isDatechk(vardegreeDate))
         {	
         alert("Invalid year of passing.");
         document.getElementById('selday3').focus();
         return false;
         }
         }*/

        if (trim(document.getElementById('selmark3').value) == '') {
            alert("Please enter Graduation percentage of marks");
            document.getElementById('selmark3').focus();
            return false;
        }
        else if (!isFloat('selmark3')) {
            alert("Graduation percentage of marks should be digits");
            document.getElementById('selmark3').focus();
            return false;
        }
        else if ((trim(document.getElementById('selmark3').value) > 100) || (trim(document.getElementById('selmark3').value) <= 0)) {
            alert("Graduation percentage of marks should not be equal to 0 or greater than 100 ");
            document.getElementById('selmark3').focus();
            return false;
        }
        if (!percmarxvlid(trim(document.getElementById('selmark3').value))) {
            document.getElementById('selmark3').focus();
            return false;
        }

        /*if(trim(document.getElementById('selmark3').value) < 10){
         alert("Graduation percentage of marks should necessarily be double digits");
         document.getElementById('selmark3').focus();
         return false;
         }*/
        /*if(trim(document.getElementById('selgrade3').value) ==''){
         alert("Please select Graduation Class/Grade");
         document.getElementById('selgrade3').focus();
         return false;
         }*/

        //category=get_radio_value(document.reg_frm.opt_cat);
        //disability=get_radio_value(document.reg_frm.optdisability);
        /*if((category == 'GENERAL' || category == 'OBC') && (disability == 'N'))
         {
         if(get_radio_value(document.reg_frm.optexservice) == 'Y')
         {
         if(get_radio_value(document.reg_frm.optmat) != 'Y')
         {
         if(trim(document.getElementById('selmark3').value) < 50){
         alert("Graduation percentage of marks should be minimum 50%");
         document.getElementById('selmark3').focus();
         return false;
         }
         }
         }else{
         if(trim(document.getElementById('selmark3').value) < 50){
         alert("Graduation percentage of marks should be minimum 50%");
         document.getElementById('selmark3').focus();
         return false;
         }	
         }
         }*/
        /*if(trim(document.getElementById('selgrade3').value) =='')
         {
         alert("Please select Professional Qualification Class / Grade");
         document.getElementById('selgrade3').focus();
         return false;
         }*/

        qualified_p3_chk1 = 'Y';

    }//final education


    if (education_chk4 == 1) {
        if (education_chk3 == 0) {
            alert("To enter Post Graduation details, one must enter Graduation details");
            document.getElementById('selstream3').focus();
            return false;
        }
        /*if(trim(document.getElementById('selinst4').value) =='')
         {
         alert("Please enter Others Institution Name");
         document.getElementById('selinst4').focus();
         return false;
         }

         if(!isAlphabets('selinst4'))
         {
         alert("Others  Institution Name should be Alphabets Only");
         document.getElementById('selinst4').focus();
         return false;
         }*/
        /*if(trim(document.getElementById('seldegree4').value) =='')
         {
         alert("Please enter Post Graduation Degree.");
         document.getElementById('seldegree4').focus();
         return false;
         }*/

        /*		if(trim(document.getElementById('seldegree4').value) == '26'){ 
         if(trim(document.getElementById('othpostgrad').value) == '')
         {
         alert("Please enter Post Graduation Degree.");
         document.getElementById('othpostgrad').focus();
         return false;
         }
         if(!isAlphabets('othpostgrad'))
         {
         alert("Post Graduation Degree should be Alphabets Only");
         document.getElementById('othpostgrad').focus();
         return false;
         }
         }*/

        if (trim(document.getElementById('selstream4').value) == '') {
            alert("Please enter Post Graduation subject/stream");
            document.getElementById('selstream4').focus();
            return false;
        }

        /*		if(trim(document.getElementById('selstream4').value) == '37'){ 
         if(trim(document.getElementById('pggrad').value) == '')
         {
         alert("Please enter Post Graduation subject/stream.");
         document.getElementById('pggrad').focus();
         return false;
         }
         if(!isAlphabets('pggrad'))
         {
         alert("Post Graduation subject/stream should be Alphabets Only");
         document.getElementById('pggrad').focus();
         return false;
         }
         }*/

        if (!isAlphabets('selstream4')) {
            alert("Post Graduation subject/stream should be Alphabets Only");
            document.getElementById('selstream4').focus();
            return false;
        }

        /*if(trim(document.getElementById('selday4').value) =='')
         {
         alert("Please select Post Graduation day of passing");
         document.getElementById('selday4').focus();
         return false;
         }

         if(trim(document.getElementById('selmon4').value) =='')
         {
         alert("Please select Post Graduation  month of passing");
         document.getElementById('selmon4').focus();
         return false;
         }*/

        if (trim(document.getElementById('selyr4').value) == '') {
            alert("Please select Post Graduation year of passing");
            document.getElementById('selyr4').focus();
            return false;
        }

        var res4 = parseInt(document.getElementById('selyr4').value);//-dobyear;
        if (res4 <= dobyear) {
            alert("Post Graduation year of passing should be greater than year of birth");
            document.getElementById('selyr4').focus();
            return false;
        }
        if (trim(document.getElementById('selyr3').value) != '') {
            var res3 = parseInt(document.getElementById('selyr3').value);//-dobyear;
            if (res4 <= res3) {
                alert("Post Graduation year of passing should be greater than Graduation year of passing");
                document.getElementById('selyr4').focus();
                return false;
            }
        }

        /*if(document.getElementById('selyr4').value =='2012')
         {
         if(document.getElementById('selmon4').value > '10')
         {
         alert("Qualification Details should be as on 01.10.2012");
         document.getElementById('selmon4').focus();
         return false;
         }

         if(document.getElementById('selmon4').value == '10' && document.getElementById('selday4').value > '01' )
         {
         alert("Qualification Details should be as on 01.10.2012");
         document.getElementById('selday4').focus();
         return false;
         }			
         }*/

        /*if( (document.getElementById('selday4').value!='') && (document.getElementById('selmon4').value!='') && (document.getElementById('selyr4').value!='') )
         {
         vardegreeDate=document.getElementById('selmon4').value+'/'+document.getElementById('selday4').value+'/'+document.getElementById('selyr4').value;
         if(!isDatechk(vardegreeDate))
         {	
         alert("Invalid year of passing.");
         document.getElementById('selday4').focus();
         return false;
         }
         }*/

        if (trim(document.getElementById('selmark4').value) == '') {
            alert("Please enter Post Graduation percentage of marks");
            document.getElementById('selmark4').focus();
            return false;
        }
        else if (!isFloat('selmark4')) {
            alert("Post Graduation percentage of marks should be digits");
            document.getElementById('selmark4').focus();
            return false;
        }
        else if ((trim(document.getElementById('selmark4').value) > 100) || (trim(document.getElementById('selmark4').value) <= 0)) {
            alert("Post Graduation percentage of marks should not be equal to 0 or greater than 100 ");
            document.getElementById('selmark4').focus();
            return false;
        }
        if (!percmarxvlid(trim(document.getElementById('selmark4').value))) {
            document.getElementById('selmark4').focus();
            return false;
        }

        /*if(trim(document.getElementById('selmark4').value) < 10){
         alert("Post Graduation percentage of marks should necessarily be double digits");
         document.getElementById('selmark4').focus();
         return false;
         }*/

        /*if(trim(document.getElementById('selgrade4').value) ==''){
         alert("Please select Post Graduation Class/Grade");
         document.getElementById('selgrade4').focus();
         return false;
         }*/

        /*if(trim(document.getElementById('selgrade4').value) =='')
         {
         alert("Please select Others Class / Grade");
         document.getElementById('selgrade4').focus();
         return false;
         }*/
    }

    if (education_chk6 == 1) {
        /*if(trim(document.getElementById('seldegree6').value) =='')
         {
         alert("Please enter Professional Qualification Degree.");
         document.getElementById('seldegree6').focus();
         return false;
         }*/

        /*		if(trim(document.getElementById('seldegree6').value) == '40'){ 
         if(trim(document.getElementById('othprof').value) == '')
         {
         alert("Please enter Professional Qualification Degree.");
         document.getElementById('othprof').focus();
         return false;
         }
         if(!isAlphabets('othprof'))
         {
         alert("Professional Qualification Degree should be Alphabets Only");
         document.getElementById('othprof').focus();
         return false;
         }
         }*/
        if (trim(document.getElementById('selstream6').value) == '') {
            alert("Please enter Professional Qualification subject/stream");
            document.getElementById('selstream6').focus();
            return false;
        }
        if (!isAlphabets('selstream6')) {
            alert("Professional Qualification subject/stream should be Alphabets Only");
            document.getElementById('selstream6').focus();
            return false;
        }

        /*if(trim(document.getElementById('selday6').value) =='')
         {
         alert("Please select Professional Qualification day of passing");
         document.getElementById('selday6').focus();
         return false;
         }*/

        /*if(trim(document.getElementById('selmon6').value) =='')
         {
         alert("Please select Professional Qualification month of passing");
         document.getElementById('selmon6').focus();
         return false;
         }*/

        if (trim(document.getElementById('selyr6').value) == '') {
            alert("Please select Professional Qualification year of passing");
            document.getElementById('selyr6').focus();
            return false;
        }

        var res6 = parseInt(document.getElementById('selyr6').value);//-dobyear;
        if (res6 <= dobyear) {
            alert("Professional Qualification year of passing should be greater than year of birth");
            document.getElementById('selyr6').focus();
            return false;
        }

        /*if(trim(document.getElementById('selyr3').value) !='')
         {
         var res3=parseInt(document.getElementById('selyr3').value);//-dobyear;
         if(res6 <= res3)
         {
         alert("Professional Qualification year of passing should be greater than Graduation year of passing.");
         document.getElementById('selyr3').focus();
         return false;
         }
         }*/

        /*if(document.getElementById('selyr6').value =='2012')
         {
         if(document.getElementById('selmon6').value > '10')
         {
         alert("Qualification Details should be as on 01.10.2012");
         document.getElementById('selmon6').focus();
         return false;
         }

         if(document.getElementById('selmon6').value == '10' && document.getElementById('selday6').value > '01' )
         {
         alert("Qualification Details should be as on 01.10.2012");
         document.getElementById('selday6').focus();
         return false;
         }			
         }*/

        /*if( (document.getElementById('selday6').value!='') && (document.getElementById('selmon6').value!='') && (document.getElementById('selyr6').value!='') )
         {		
         vardegreeDate=document.getElementById('selmon6').value+'/'+document.getElementById('selday6').value+'/'+document.getElementById('selyr6').value;
         if(!isDatechk(vardegreeDate))
         {	
         alert("Invalid year of passing.");
         document.getElementById('selday6').focus();
         return false;
         }	
         }*/

        if (trim(document.getElementById('selmark6').value) == '') {
            alert("Please enter Professional Qualification percentage of marks");
            document.getElementById('selmark6').focus();
            return false;
        }
        else if (!isFloat('selmark6')) {
            alert("Professional Qualification percentage of marks should be digits");
            document.getElementById('selmark6').focus();
            return false;
        }
        else if ((trim(document.getElementById('selmark6').value) > 100) || (trim(document.getElementById('selmark6').value) <= 0)) {
            alert("Professional Qualification percentage of marks should not be equal to 0 or greater than 100 ");
            document.getElementById('selmark6').focus();
            return false;
        }
        if (!percmarxvlid(trim(document.getElementById('selmark6').value))) {
            document.getElementById('selmark6').focus();
            return false;
        }

        /*if(trim(document.getElementById('selmark6').value) < 10){
         alert("Professional Qualification percentage of marks should necessarily be double digits");
         document.getElementById('selmark6').focus();
         return false;
         }*/

        /*if(trim(document.getElementById('selgrade6').value) ==''){
         alert("Please select Professional Qualification Class/Grade");
         document.getElementById('selgrade6').focus();
         return false;
         }*/
        /*if(get_radio_value(document.reg_frm.opt_cat) =="SC" || get_radio_value(document.reg_frm.opt_cat) =="ST" || get_radio_value(document.reg_frm.optdisability) =='Y' || get_radio_value(document.reg_frm.optexservice) =='Y' || get_radio_value(document.reg_frm.optdisxs) =='Y')
         {
         //alert("came here in 55 condition");
         if(document.getElementById('selmark6').value >=55)
         qualified_p5_chk1='Y';
         }
         else
         {
         if(document.getElementById('selmark6').value >=60)
         {
         qualified_p5_chk1='Y';
         }
         }*/

        //qualified_p5_chk1='Y';
    }


    /*if(education_chk5 == 1)
     {	

     if(trim(document.getElementById('selinst4').value) =='')
     {
     alert("Please enter Others Institution Name");
     document.getElementById('selinst4').focus();
     return false;
     }

     if(!isAlphabets('selinst4'))
     {
     alert("Others  Institution Name should be Alphabets Only");
     document.getElementById('selinst4').focus();
     return false;
     }
     if(trim(document.getElementById('seldegree5').value) =='')
     {
     alert("Please enter Others Degree.");
     document.getElementById('seldegree5').focus();
     return false;
     }

     if(trim(document.getElementById('seldegree5').value) == '53'){ 
     if(trim(document.getElementById('othdegree').value) == '')
     {
     alert("Please enter Others Degree.");
     document.getElementById('othdegree').focus();
     return false;
     }
     if(!isAlphabets('othdegree'))
     {
     alert("Others Degree should be Alphabets Only");
     document.getElementById('othdegree').focus();
     return false;
     }
     }

     if(trim(document.getElementById('selstream5').value) =='')
     {
     alert("Please enter Others subject/stream.");
     document.getElementById('selstream5').focus();
     return false;
     }

     if(trim(document.getElementById('selstream5').value) == '45'){ 
     if(trim(document.getElementById('othstream').value) == '')
     {
     alert("Please enter Others subject/stream.");
     document.getElementById('othstream').focus();
     return false;
     }
     if(!isAlphabets('othstream'))
     {
     alert("Others subject/stream should be Alphabets Only");
     document.getElementById('othstream').focus();
     return false;
     }
     }

     if(!isAlphabets('selstream5'))
     {
     alert("Others subject/stream should be Alphabets Only");
     document.getElementById('selstream5').focus();
     return false;
     }

     if(trim(document.getElementById('selday5').value) =='')
     {
     alert("Please select Others day of passing");
     document.getElementById('selday5').focus();
     return false;
     }

     if(trim(document.getElementById('selmon5').value) =='')
     {
     alert("Please select Others  month of passing");
     document.getElementById('selmon5').focus();
     return false;
     }

     if(trim(document.getElementById('selyr5').value) =='')
     {
     alert("Please select Others year of passing");
     document.getElementById('selyr5').focus();
     return false;
     }

     var res5=parseInt(document.getElementById('selyr5').value);//-dobyear;
     if(res5 <= dobyear)
     {
     alert("Others year of passing should be greater than year of birth.");
     document.getElementById('selyr5').focus();
     return false;
     }

     if(document.getElementById('selyr5').value =='2012')
     {
     if(document.getElementById('selmon5').value > '10')
     {
     alert("Qualification Details should be as on 01.10.2012");
     document.getElementById('selmon5').focus();
     return false;
     }

     if(document.getElementById('selmon5').value == '10' && document.getElementById('selday5').value > '01' )
     {
     alert("Qualification Details should be as on 01.10.2012");
     document.getElementById('selday5').focus();
     return false;
     }

     }

     if( (document.getElementById('selday5').value!='') && (document.getElementById('selmon5').value!='') && (document.getElementById('selyr5').value!='') )
     {		
     vardegreeDate=document.getElementById('selmon5').value+'/'+document.getElementById('selday5').value+'/'+document.getElementById('selyr5').value;

     if(!isDatechk(vardegreeDate))
     {	
     alert("Invalid year of passing.");
     document.getElementById('selday5').focus();
     return false;
     }

     }	

     if(trim(document.getElementById('selmark5').value) =='')
     {
     alert("Please enter Others percentage of marks");
     document.getElementById('selmark5').focus();
     return false;
     }
     else if(!isFloat('selmark5'))
     {
     alert("Others percentage of marks should be digits");
     document.getElementById('selmark5').focus();
     return false;
     }
     else if( (trim(document.getElementById('selmark5').value) > 100) || (trim(document.getElementById('selmark5').value) <= 0) )
     {	
     alert("Others percentage of marks should not be equal to 0 or greater than 100 ");
     document.getElementById('selmark5').focus();
     return false;
     }
     if(!percmarxvlid(trim(document.getElementById('selmark5').value)))
     {
     document.getElementById('selmark5').focus();
     return false;
     }

     if(trim(document.getElementById('selmark5').value) < 10){
     alert("Others percentage of marks should necessarily be double digits");
     document.getElementById('selmark5').focus();
     return false;
     }

     if(trim(document.getElementById('selgrade5').value) ==''){
     alert("Please select Others Qualification Class/Grade");
     document.getElementById('selgrade5').focus();
     return false;
     }

     if(trim(document.getElementById('selgrade4').value) =='')
     {
     alert("Please select Others Class / Grade");
     document.getElementById('selgrade4').focus();
     return false;
     }

     if((document.getElementById('opt_cat').value =="SC") || (document.getElementById('opt_cat').value =="ST") || (get_radio_value(document.reg_frm.optdisability) =="Y") || (get_radio_value(document.reg_frm.optexservice) =="Y") && (document.getElementById('selmark5').value >=55))
     {
     qualified_p4_chk1='Y';
     }
     else
     {
     if(document.getElementById('selmark5').value >=60)
     {
     qualified_p4_chk1='Y';
     }
     }
     }*/


    /*	if(trim(document.getElementById('seldegree7').value) == '47'){ 
     if(trim(document.getElementById('othcert').value) == '')
     {
     alert("Please enter Certificate Name.");
     document.getElementById('othcert').focus();
     return false;
     }
     if(!isAlphabets('othcert'))
     {
     alert("Certificate Name should be Alphabets Only");
     document.getElementById('othcert').focus();
     return false;
     }
     }*/


    /*if((get_radio_value(document.reg_frm.optiaf) =='Y' || get_radio_value(document.reg_frm.optpassindnav) =='Y') && (get_radio_value(document.reg_frm.optmatexs) =='Y'))
     {
     if((trim(document.getElementById('txtperiaf').value) >=50) || (trim(document.getElementById('txtperpassindnav').value) >=50)  || (trim(document.getElementById('txtpermatexs').value) >=50) )
     {
     qualified_p4_chk1 ='Y';
     }
     }
     */
    /*qualified_p1_chk1 != 'Y' && */

    /*if(qualified_p2_chk1!= 'Y' && qualified_p3_chk1!= 'Y'  && qualified_p5_chk1!= 'Y' && qualified_p6_chk1!= 'Y')
     {

     alert("Minimum 12th Standard (10+2) or equivalent qualification thereof with a minimum of 60% marks (55% SC/ST/PWD/XS) [Note: OBC PWD/ OBC Exservicemen candidates applying for vacancies under Special Recruitment Drive are required to have minimum of 60% marks in 12th standard or in equivalent qualification] OR Diploma Course after 10th Standard with a minimum of 60% (55% for SC/ST/PWD/XS) [Note: OBC PWD/ OBC Exservicemen candidates applying for vacancies under Special Recruitment Drive are required to have minimum of 60% marks in Diploma or in equivalent qualification] OR A Degree (Graduation level) from a recognized university");
     document.getElementById('selstream1').focus();
     return false;
     }*/


    /*var postcode_exp=dv('selpost').value;

     if(postcode_exp == "AGEC"){
     if((document.reg_frm.seldegree3.value != "" && document.reg_frm.selstream3.value != "") && (document.reg_frm.seldegree4.value == 22 && (document.reg_frm.selstream4.value == 27 || document.reg_frm.selstream4.value == 28 || document.reg_frm.selstream4.value == 29))){
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     if(postcode_exp == "MGEC"){
     if(((document.reg_frm.seldegree3.value != "" && document.reg_frm.selstream3.value == "50") && ((document.reg_frm.seldegree4.value == "22" || document.reg_frm.seldegree4.value == "51") && (document.reg_frm.selstream4.value == "29") && (document.reg_frm.selmark4.value >= "55"))) || (((document.reg_frm.seldegree4.value == "22" || document.reg_frm.seldegree4.value == "51") && (document.reg_frm.selstream4.value == "29") && (document.reg_frm.selmark4.value >= "55")) && (document.reg_frm.selstream8.value == "48")) || (((document.reg_frm.seldegree4.value == "22" || document.reg_frm.seldegree4.value == "51") && (document.reg_frm.selstream4.value == "29") && (document.reg_frm.selmark4.value >= "55")) && ((document.reg_frm.seldegree5.value == "52") && (document.reg_frm.selstream5.value == "54")) ) || (((document.reg_frm.seldegree4.value == "22" || document.reg_frm.seldegree4.value == "51") && (document.reg_frm.selstream4.value == "29") && (document.reg_frm.selmark4.value >= "55")) && ((document.reg_frm.seldegree5.value == "53") && (document.reg_frm.selstream5.value == "55")) ) ) {
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     if(postcode_exp == "CMCA" || postcode_exp == "MGCA"){
     if(document.reg_frm.seldegree6.value != "" && document.reg_frm.seldegree6.value == "38"){
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     if(postcode_exp == "MGHW"){
     if(((document.reg_frm.seldegree3.value == "01" || document.reg_frm.seldegree3.value == "02") && (document.reg_frm.selstream3.value == "09" || document.reg_frm.selstream3.value == "10") && document.reg_frm.selgrade3.value == "FC") || (document.reg_frm.seldegree4.value == "24" && (document.reg_frm.selstream4.value == "30" || document.reg_frm.selstream4.value == "31") && document.reg_frm.selgrade4.value == "FC")){ 
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     if(postcode_exp == "DMHW"){
     if((document.reg_frm.seldegree3.value == "01" || document.reg_frm.seldegree3.value == "02" || document.reg_frm.seldegree3.value == "03" || document.reg_frm.seldegree3.value == "04" || document.reg_frm.seldegree3.value == "08") && (document.reg_frm.selstream3.value == "10" || document.reg_frm.selstream3.value == "11" || document.reg_frm.selstream3.value == "09") && document.reg_frm.selgrade3.value == "FC"){ 
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     if(postcode_exp == "AMHW"){
     if((document.reg_frm.seldegree3.value == "01" || document.reg_frm.seldegree3.value == "02" || document.reg_frm.seldegree3.value == "03") && (document.reg_frm.selstream3.value == "10" || document.reg_frm.selstream3.value == "12" || document.reg_frm.selstream3.value == "13") && document.reg_frm.selgrade3.value == "FC"){ 
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     //alert(postcode_exp);
     if(postcode_exp == "MGNW" || postcode_exp == "DMNW"){
     if(((document.reg_frm.seldegree3.value == "01" || document.reg_frm.seldegree3.value == "02") && (document.reg_frm.selstream3.value == "09" || document.reg_frm.selstream3.value == "10" || document.reg_frm.selstream3.value == "11") && document.reg_frm.selgrade3.value == "FC" ) || (document.reg_frm.seldegree4.value == "24" && (document.reg_frm.selstream4.value == "30" || document.reg_frm.selstream4.value == "31"  || document.reg_frm.selstream4.value == "32") && document.reg_frm.selgrade4.value == "FC")){
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     if(postcode_exp == "DMSY"){
     if(((document.reg_frm.seldegree3.value == "01" || document.reg_frm.seldegree3.value == "02" || document.reg_frm.seldegree3.value == "03") && (document.reg_frm.selstream3.value == "09" || document.reg_frm.selstream3.value == "10" || document.reg_frm.selstream3.value == "11") && document.reg_frm.selgrade3.value == "FC") || (document.reg_frm.seldegree6.value == "39" && document.reg_frm.selgrade6.value == "FC")){ 
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     if(postcode_exp == "AMSY"){
     if((document.reg_frm.seldegree3.value == "01" && (document.reg_frm.selstream3.value == "09" || document.reg_frm.selstream3.value == "14" || document.reg_frm.selstream3.value == "13") && document.reg_frm.selgrade3.value == "FC") || (document.reg_frm.seldegree3.value == "02" && (document.reg_frm.selstream3.value == "09" || document.reg_frm.selstream3.value == "14" || document.reg_frm.selstream3.value == "13") && document.reg_frm.selgrade3.value == "FC")  || (document.reg_frm.seldegree4.value == "25" && document.reg_frm.selstream4.value == "30" && document.reg_frm.selgrade4.value == "FC") || (document.reg_frm.seldegree6.value == "39") ){
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     if(postcode_exp == "AMCC"){
     if((document.reg_frm.seldegree3.value == "01" || document.reg_frm.seldegree3.value == "02"  || document.reg_frm.seldegree3.value == "03" ) && (document.reg_frm.selmark3.value >= 50) && (document.reg_frm.selstream3.value == "15" || document.reg_frm.selstream3.value == "12")){ 
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     if(postcode_exp == "DMCE" || postcode_exp == "AMCE"){ 
     if((document.reg_frm.seldegree3.value == "01" || document.reg_frm.seldegree3.value == "02"  || document.reg_frm.seldegree3.value == "03" ) && document.reg_frm.selstream3.value == "16" && document.reg_frm.selgrade3.value == "FC" ){ 
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     if(postcode_exp == "DMEE" || postcode_exp == "AMEE"){ 
     if((document.reg_frm.seldegree3.value == "01" || document.reg_frm.seldegree3.value == "02"  || document.reg_frm.seldegree3.value == "03" ) && document.reg_frm.selstream3.value == "17"){ 
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     if(postcode_exp == "DMOL" || postcode_exp == "AMOL" || postcode_exp == "MGOL"){ 
     if((document.reg_frm.seldegree3.value != "" && document.reg_frm.selstream3.value != "") && (document.reg_frm.seldegree4.value != "" && (document.reg_frm.selstream4.value == "33" || document.reg_frm.selstream4.value == "34")) ){ 
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }
     if( postcode_exp == "MGLA" || postcode_exp == "DMLA" || postcode_exp == "AMLA"){ 
     if((document.reg_frm.seldegree3.value == "05" || document.reg_frm.seldegree3.value == "06") && document.reg_frm.selstream3.value == "18"){ 
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }

     if(postcode_exp == "MGNW"){
     if(document.reg_frm.seldegree7.value != "46"){
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }

     if(postcode_exp == "DMFS"){
     var nfscopt = get_radio_value(document.reg_frm.opt_offCourse);
     if(nfscopt == ""){
     alert("Please Select 'Have you completed Divisional Officers Course at the National Fire Service College (NFSC), Nagpur'");
     document.reg_frm.opt_offCourse[0].focus();
     return false;
     }/*else if(nfscopt != "Y"){
     alert("'Have you completed Divisional Officers Course at the National Fire Service College (NFSC), Nagpur' Must be 'Yes ' for this Post");
     document.reg_frm.opt_offCourse[0].focus();
     return false;
     }*/
    /*	}
     if(postcode_exp == "DMFS"){
     if(((document.reg_frm.seldegree3.value == "01" || document.reg_frm.seldegree3.value == "02" || document.reg_frm.seldegree3.value == "03") && document.reg_frm.selstream3.value == "20") || (document.reg_frm.seldegree3.value == "01" && document.reg_frm.selstream3.value == "19") || (nfscopt == "Y")) { 
     //Eligibility for this post
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }*/

    /*	if(get_radio_value(document.reg_frm.cmpknown) == ''){
     alert("Please select Working knowledge of computers.");
     document.reg_frm.cmpknown[0].focus();
     return false;
     }*/

    /* if(postcode_exp == "MGHW"){
     if(get_radio_value(document.reg_frm.cmpknown) != 'Y'){
     alert("Working Knowledge of Computers must be 'Yes' for this post.");
     document.reg_frm.cmpknown[0].focus();
     return false;
     }
     }
     */

    /*if(get_radio_value(document.reg_frm.cmpknown) == 'Y' && document.reg_frm.cmpdetail.value == ""){
     alert("Knowledge of computers in Detail should not be empty.");
     document.reg_frm.cmpdetail.focus();
     return false;
     }*/

    /*if(postcode_exp == "MGHW"){ 
     if(get_radio_value(document.reg_frm.adminknown) != 'Y'){
     alert("Knowledge of UNIX, LINUX and Windows administration Must be 'Yes' for this post.");
     document.reg_frm.adminknown[0].focus();
     return false;
     }
     }
     if(postcode_exp == "DMSY"){ 
     if(get_radio_value(document.reg_frm.oracleknown) != 'Y'){
     alert("Knowledge of ORACLE / INET/VB/VC Must be 'Yes' for this post.");
     document.reg_frm.oracleknown[0].focus();
     return false;
     }
     }

     if(postcode_exp == "MGEC"){ 
     if(get_radio_value(document.reg_frm.researchrel) != 'Y'){
     alert("'Do you have relevant published work/research paper in the area of economics/finance/banking to your credit' Must be 'Yes' for this post.");
     document.reg_frm.researchrel[0].focus();
     return false;
     }
     }*/
    //EDUCATION QUALIFICATION ENDS

    /*if((get_radio_value(document.reg_frm.optexservice) == 'N' && get_radio_value(document.reg_frm.optmat) == 'N') || get_radio_value(document.reg_frm.optexservice) == 'N' || get_radio_value(document.reg_frm.optmat) == 'N')
     {

     if((get_radio_value(document.reg_frm.optpet)!='Y'))
     {
     alert("You must have Working Knowledge of Computers");
     document.getElementById('optpet').focus();
     return false;
     }
     }

     if((get_radio_value(document.reg_frm.optpet)=='Y') && (trim(document.getElementById('cmpdetail').value)==''))
     {
     alert("Please enter Details of Computer Knowledge");
     document.getElementById('cmpdetail').focus();
     return false;
     }
     */

//EDUCATIONAL QUALIFICATION ENDSS


//Post Qualification work Experience starts
    /*var EXP1=0;
     var EXP2=0;
     var EXP3=0;
     var EXP4=0;
     var EXP5=0;
     var EXP6=0;
     var EXP7=0;
     //var EXP8=0;
     //var dobyear=document.getElementById('seldobyear').value;
     //------------------------------- Employer 1 Details starts ----------------------------
     if( (trim(document.getElementById('txtemp1').value) == '') &&  (trim(document.getElementById('txtdesg1').value) == '') &&
     (trim(document.getElementById('selfrommon1').value) == '') && (trim(document.getElementById('selfromyr1').value) == '') && 
     (trim(document.getElementById('seltomon1').value) == '') && (trim(document.getElementById('seltoyr1').value) == '') && 
     (trim(document.getElementById('txtduty1').value) == '')  && (trim(document.getElementById('txtreason1').value) == '') && (trim(document.getElementById('txtindtype1').value) == ''))
     {
     EXP1=0;
     }else
     {	
     EXP1=1;
     if( trim(document.getElementById('txtemp1').value) == '' )
     {
     alert("Please enter Name of employer 1");
     document.getElementById('txtemp1').focus();
     return false;
     }		
     else if(!isAlphabets('txtemp1'))
     {
     alert("Name of employer 1 should be Alphabets Only");
     document.getElementById('txtemp1').focus();
     return false;
     }			
     if( trim(document.getElementById('txtdesg1').value) == '' )
     {
     alert("Please enter  Designation for Employer 1");
     document.getElementById('txtdesg1').focus();
     return false;
     }
     else if(!isAlphabets('txtdesg1'))
     {
     alert("Designation for Employer 1 should be Alphabets Only");
     document.getElementById('txtdesg1').focus();
     return false;
     }			
     if( trim(document.getElementById('selfrommon1').value) == '' )
     {
     alert("Please Select Employer 1's Service Month From.");
     document.getElementById('selfrommon1').focus();
     return false;
     }
     if( trim(document.getElementById('selfromyr1').value) == '' )
     {
     alert("Please Select Employer 1's Service Year From.");
     document.getElementById('selfromyr1').focus();
     return false;
     }

     if( trim(document.getElementById('selfromyr1').value) <= dobyear)
     {
     alert("Employer 1's Service Year From should be greater than Year of Birth.");
     document.getElementById('selfromyr1').focus();
     return false;
     }

     if(document.getElementById('selfromyr1').value =='2012')
     {
     if(document.getElementById('selfrommon1').value > '10')
     {
     alert("Employer 1's Service Year From should be as on 01.10.2012");
     document.getElementById('selfrommon1').focus();
     return false;
     }				
     }

     if(document.getElementById('seltoyr1').value =='2012')
     {
     if(document.getElementById('seltomon1').value > '10')
     {
     alert("Employer 1's Service Year To should be as on 01.10.2012");
     document.getElementById('seltomon1').focus();
     return false;
     }

     }


     if( trim(document.getElementById('seltomon1').value) == '' )
     {
     alert("Please Select Employer 1's Service Month To.");
     document.getElementById('seltomon1').focus();
     return false;
     }
     if( trim(document.getElementById('seltoyr1').value) == '' )
     {
     alert("Please Select Employer 1's Service Year To.");
     document.getElementById('seltoyr1').focus();
     return false;
     }
     if(document.getElementById('selfromyr1').value > document.getElementById('seltoyr1').value)
     {
     alert("Total Period of Service To Date Should be greater than From Date for Employer 1");
     document.getElementById('seltoyr1').focus();
     return false;
     }
     //added on 14-03-2011
     if(document.getElementById('selfromyr1').value == document.getElementById('seltoyr1').value)
     {
     if( trim(document.getElementById('selfrommon1').value) == '' )
     {
     alert("Total Period of Service To Date Should be greater than From Date for Employer 1");
     document.getElementById('seltoyr1').focus();
     return false;
     }
     }
     //end of added on 14-03-2011

     if( trim(document.getElementById('txtduty1').value) == '' )
     {
     alert("Please enter Nature of duties performed for Employer 1");
     document.getElementById('txtduty1').focus();
     return false;
     }	
     else if(!isAlphabets('txtduty1'))
     {
     alert("Nature of duties performed for Employer 1 should be Alphabets Only");
     document.getElementById('txtduty1').focus();
     return false;
     }

     if( trim(document.getElementById('txtindtype1').value) == '' )
     {
     alert("Please enter Industry type  for Employer 1");
     document.getElementById('txtindtype1').focus();
     return false;
     }else if(!isAlphabets('txtindtype1')){
     alert("Industry type for Employer 1 should be Alphabets Only");
     document.getElementById('txtindtype1').focus();
     return false;
     }	

     if( trim(document.getElementById('txtreason1').value) == '' )
     {
     alert("Please enter Reason of Leaving  for Employer 1. If still working, mention 'not applicable'");
     document.getElementById('txtreason1').focus();
     return false;
     }
     else if(!isAlphabets('txtreason1'))
     {
     alert("Reason of Leaving  for Employer 1 should be Alphabets Only");
     document.getElementById('txtreason1').focus();
     return false;
     }	

     }		




     //------------------------------- Employer 2 Details starts ----------------------------

     if( (trim(document.getElementById('txtemp2').value) == '') &&  (trim(document.getElementById('txtdesg2').value) == '') && (trim(document.getElementById('selfrommon2').value) == '') && (trim(document.getElementById('selfromyr2').value) == '') && (trim(document.getElementById('seltomon2').value) == '') && (trim(document.getElementById('seltoyr2').value) == '') && (trim(document.getElementById('txtduty2').value) == '') && (trim(document.getElementById('txtreason2').value) == '') && (trim(document.getElementById('txtindtype2').value) == ''))
     {
     EXP2=0;
     }else
     {	
     EXP2=1;
     if( trim(document.getElementById('txtemp2').value) == '' )
     {
     alert("Please enter Name of employer 2");
     document.getElementById('txtemp2').focus();
     return false;

     }	
     else if(!isAlphabets('txtemp2'))
     {
     alert("Name of employer 2 should be Alphabets Only");
     document.getElementById('txtemp2').focus();
     return false;
     }			
     if( trim(document.getElementById('txtdesg2').value) == '' )
     {
     alert("Please enter  Designation for Employer 2");
     document.getElementById('txtdesg2').focus();
     return false;
     }	
     else if(!isAlphabets('txtdesg2'))
     {
     alert("Designation for Employer 2 should be Alphabets Only");
     document.getElementById('txtdesg2').focus();
     return false;
     }

     if( trim(document.getElementById('selfrommon2').value) == '' )
     {
     alert("Please Select Employer 2's Service Month From.");
     document.getElementById('selfrommon2').focus();
     return false;
     }
     if( trim(document.getElementById('selfromyr2').value) == '' )
     {
     alert("Please Select Employer 2's Service Year From.");
     document.getElementById('selfromyr2').focus();
     return false;
     }

     if( trim(document.getElementById('selfromyr2').value) <= dobyear)
     {
     alert("Employer 2's Service Year From should be greater than Year of Birth.");
     document.getElementById('selfromyr2').focus();
     return false;
     }
     if(document.getElementById('selfromyr1').value != "" && document.getElementById('selfromyr2').value != "" )
     {
     if((document.getElementById('selfromyr2').value == document.getElementById('selfromyr1').value)  && (document.getElementById('selfrommon2').value > document.getElementById('selfrommon1').value))
     {
     alert("From Month should not be greater than the first employer From Month");
     document.getElementById('selfromyr2').value="";
     document.getElementById('seltoyr2').value="";
     document.getElementById('selfrommon2').value="";
     document.getElementById('seltomon2').value="";
     document.getElementById('txtservice2').value="";
     return false;
     }
     else if(document.getElementById('selfromyr2').value > document.getElementById('selfromyr1').value)
     {
     alert("From Year should not be greater than the first employer From Year");
     document.getElementById('selfromyr2').value="";
     document.getElementById('seltoyr2').value="";
     document.getElementById('selfrommon2').value="";
     document.getElementById('seltomon2').value="";
     document.getElementById('txtservice2').value="";
     return false;
     }
     }



     if( trim(document.getElementById('seltomon2').value) == '' )
     {
     alert("Please Select Employer 2's Service Month To.");
     document.getElementById('seltomon2').focus();
     return false;
     }
     if( trim(document.getElementById('seltoyr2').value) == '' )
     {
     alert("Please Select Employer 2's Service Year To.");
     document.getElementById('seltoyr2').focus();
     return false;
     }
     if(document.getElementById('selfromyr2').value > document.getElementById('seltoyr2').value)
     {
     alert("Total Period of Service To Date Should be greater than From Date for Employer 2");
     document.getElementById('seltoyr2').focus();
     return false;
     }
     if(document.getElementById('selfromyr1').value != "" && document.getElementById('seltoyr2').value != "" )
     {
     if((document.getElementById('seltoyr2').value == document.getElementById('selfromyr1').value)  && (document.getElementById('seltomon2').value > document.getElementById('selfrommon1').value))
     {
     alert("To Month should not be greater than the first employer From Month");
     document.getElementById('selfromyr2').value="";
     document.getElementById('seltoyr2').value="";
     document.getElementById('selfrommon2').value="";
     document.getElementById('seltomon2').value="";
     document.getElementById('txtservice2').value="";
     return false;
     }
     else if(document.getElementById('seltoyr2').value > document.getElementById('selfromyr1').value)
     {
     alert("To Year should not be greater than the first employer From Year");
     document.getElementById('selfromyr2').value="";
     document.getElementById('seltoyr2').value="";
     document.getElementById('selfrommon2').value="";
     document.getElementById('seltomon2').value="";
     document.getElementById('txtservice2').value="";
     return false;
     }
     }
     if( trim(document.getElementById('txtduty2').value) == '' )
     {
     alert("Please enter Nature of duties performed for Employer 2");
     document.getElementById('txtduty2').focus();
     return false;
     }	
     else if(!isAlphabets('txtduty2'))
     {
     alert("Nature of duties performed for Employer 2 should be Alphabets Only");
     document.getElementById('txtduty2').focus();
     return false;
     }	
     if( trim(document.getElementById('txtindtype2').value) == '' )
     {
     alert("Please enter Industry type  for Employer 2");
     document.getElementById('txtindtype2').focus();
     return false;
     }else if(!isAlphabets('txtindtype2')){
     alert("Industry type for Employer 2 should be Alphabets Only");
     document.getElementById('txtindtype2').focus();
     return false;
     }	
     if( trim(document.getElementById('txtreason2').value) == '' )
     {
     alert("Please enter Reason of Leaving  for Employer 2. If still working, mention 'not applicable'");
     document.getElementById('txtreason2').focus();
     return false;
     }	
     else if(!isAlphabets('txtreason2'))
     {
     alert("Reason of Leaving  for Employer 2 should be Alphabets Only");
     document.getElementById('txtreason2').focus();
     return false;
     }			

     }		

     //------------------------------- Employer 3 Details starts ----------------------------

     if( (trim(document.getElementById('txtemp3').value) == '') &&  (trim(document.getElementById('txtdesg3').value) == '') && 
     (trim(document.getElementById('selfrommon3').value) == '') && (trim(document.getElementById('selfromyr3').value) == '') && 
     (trim(document.getElementById('seltomon3').value) == '') && (trim(document.getElementById('seltoyr3').value) == '') &&
     (trim(document.getElementById('txtduty3').value) == '')  && (trim(document.getElementById('txtreason3').value) == '')  && (trim(document.getElementById('txtindtype3').value) == '') )
     {
     EXP3=0;
     }else
     {	
     EXP3=1;
     if( trim(document.getElementById('txtemp3').value) == '' )
     {
     alert("Please enter Name of employer 3");
     document.getElementById('txtemp3').focus();
     return false;
     }	
     else if(!isAlphabets('txtemp3'))
     {
     alert("Name of employer 3 should be Alphabets Only");
     document.getElementById('txtemp3').focus();
     return false;
     }			
     if( trim(document.getElementById('txtdesg3').value) == '' )
     {
     alert("Please enter  Designation for Employer 3");
     document.getElementById('txtdesg3').focus();
     return false;
     }	
     else if(!isAlphabets('txtdesg3'))
     {
     alert("Designation for Employer 3 should be Alphabets Only");
     document.getElementById('txtdesg3').focus();
     return false;
     }
     if( trim(document.getElementById('selfrommon3').value) == '' )
     {
     alert("Please Select Employer 3's Service Month From.");
     document.getElementById('selfrommon3').focus();
     return false;
     }
     if( trim(document.getElementById('selfromyr3').value) == '' )
     {
     alert("Please Select Employer 3's Service Year From.");
     document.getElementById('selfromyr3').focus();
     return false;
     }

     if( trim(document.getElementById('selfromyr3').value) <= dobyear)
     {
     alert("Employer 3's Service Year From should be greater than Year of Birth.");
     document.getElementById('selfromyr3').focus();
     return false;
     }
     if(document.getElementById('selfromyr2').value != "" && document.getElementById('selfromyr3').value != "" )
     {
     if((document.getElementById('selfromyr3').value == document.getElementById('selfromyr2').value)  && 
     (document.getElementById('selfrommon3').value > document.getElementById('selfrommon2').value))
     {
     alert("From Month should not be greater than the second employer From Month");
     document.getElementById('selfromyr3').value="";
     document.getElementById('seltoyr3').value="";
     document.getElementById('selfrommon3').value="";
     document.getElementById('seltomon3').value="";
     document.getElementById('txtservice3').value="";
     return false;
     }
     else if(document.getElementById('selfromyr3').value > document.getElementById('selfromyr2').value)
     {
     alert("From Year should not be greater than the second employer From Year");
     document.getElementById('selfromyr3').value="";
     document.getElementById('seltoyr3').value="";
     document.getElementById('selfrommon3').value="";
     document.getElementById('seltomon3').value="";
     document.getElementById('txtservice3').value="";
     return false;
     }
     }


     if( trim(document.getElementById('seltomon3').value) == '' )
     {
     alert("Please Select Employer 3's Service Month To.");
     document.getElementById('seltomon3').focus();
     return false;
     }
     if( trim(document.getElementById('seltoyr3').value) == '' )
     {
     alert("Please Select Employer 3's Service Year To.");
     document.getElementById('seltoyr3').focus();
     return false;
     }
     if(document.getElementById('selfromyr3').value > document.getElementById('seltoyr3').value)
     {
     alert("Total Period of Service To Date Should be greater than From Date for Employer 3");
     document.getElementById('seltoyr3').focus();
     return false;
     }
     if(document.getElementById('selfromyr2').value != "" && document.getElementById('seltoyr3').value != "" )
     {
     if((document.getElementById('seltoyr3').value == document.getElementById('selfromyr2').value)  && 
     (document.getElementById('seltomon3').value > document.getElementById('selfrommon2').value))
     {
     alert("To Month should not be greater than the second employer From Month");
     document.getElementById('selfromyr3').value="";
     document.getElementById('seltoyr3').value="";
     document.getElementById('selfrommon3').value="";
     document.getElementById('seltomon3').value="";
     document.getElementById('txtservice3').value="";
     return false;
     }
     else if(document.getElementById('seltoyr3').value > document.getElementById('selfromyr2').value)
     {
     alert("To Year should not be greater than the second employer From Year");
     document.getElementById('selfromyr3').value="";
     document.getElementById('seltoyr3').value="";
     document.getElementById('selfrommon3').value="";
     document.getElementById('seltomon3').value="";
     document.getElementById('txtservice3').value="";
     return false;
     }
     }
     if( trim(document.getElementById('txtduty3').value) == '' )
     {
     alert("Please enter Nature of duties performed for Employer 3");
     document.getElementById('txtduty3').focus();
     return false;
     }	
     else if(!isAlphabets('txtduty3'))
     {
     alert("Nature of duties performed for Employer 3 should be Alphabets Only");
     document.getElementById('txtduty3').focus();
     return false;
     }

     if( trim(document.getElementById('txtindtype3').value) == '' )
     {
     alert("Please enter Industry type  for Employer 3");
     document.getElementById('txtindtype3').focus();
     return false;
     }else if(!isAlphabets('txtindtype3')){
     alert("Industry type for Employer 3 should be Alphabets Only");
     document.getElementById('txtindtype3').focus();
     return false;
     }	

     if( trim(document.getElementById('txtreason3').value) == '' )
     {
     alert("Please enter Reason of Leaving  for Employer 3. If still working, mention 'not applicable'");
     document.getElementById('txtreason3').focus();
     return false;
     }	
     else if(!isAlphabets('txtreason3'))
     {
     alert("Reason of Leaving  for Employer 3 should be Alphabets Only");
     document.getElementById('txtreason3').focus();
     return false;
     }			
     }		


     //------------------------------- Employer 4 Details starts ----------------------------

     if( (trim(document.getElementById('txtemp4').value) == '') &&  (trim(document.getElementById('txtdesg4').value) == '') && 
     (trim(document.getElementById('selfrommon4').value) == '') && (trim(document.getElementById('selfromyr4').value) == '') &&
     (trim(document.getElementById('seltomon4').value) == '') && (trim(document.getElementById('seltoyr4').value) == '') && 
     (trim(document.getElementById('txtduty4').value) == '') && (trim(document.getElementById('txtreason4').value) == '') && (trim(document.getElementById('txtindtype4').value) == '') )
     {
     EXP4=0;
     }else
     {	
     EXP4=1;
     if( trim(document.getElementById('txtemp4').value) == '' )
     {
     alert("Please enter Name of employer 4");
     document.getElementById('txtemp4').focus();
     return false;
     }
     else if(!isAlphabets('txtemp4'))
     {
     alert("Name of employer 4 should be Alphabets Only");
     document.getElementById('txtemp4').focus();
     return false;
     }
     if( trim(document.getElementById('txtdesg4').value) == '' )
     {
     alert("Please enter  Designation for Employer 4");
     document.getElementById('txtdesg4').focus();
     return false;
     }
     else if(!isAlphabets('txtdesg4'))
     {
     alert("Designation for Employer 4 should be Alphabets Only");
     document.getElementById('txtdesg4').focus();
     return false;
     }
     if( trim(document.getElementById('selfrommon4').value) == '' )
     {
     alert("Please Select Employer 4's Service Month From.");
     document.getElementById('selfrommon4').focus();
     return false;
     }
     if( trim(document.getElementById('selfromyr4').value) == '' )
     {
     alert("Please Select Employer 4's Service Year From.");
     document.getElementById('selfromyr4').focus();
     return false;
     }

     if( trim(document.getElementById('selfromyr4').value) <= dobyear)
     {
     alert("Employer 4's Service Year From should be greater than Year of Birth.");
     document.getElementById('selfromyr4').focus();
     return false;
     }
     if(document.getElementById('selfromyr3').value != "" && document.getElementById('selfromyr4').value != "" )
     {
     if((document.getElementById('selfromyr4').value == document.getElementById('selfromyr3').value)  && 
     (document.getElementById('selfrommon4').value > document.getElementById('selfrommon3').value))
     {
     alert("From Month should not be greater than the second employer From Month");
     document.getElementById('selfromyr4').value="";
     document.getElementById('seltoyr4').value="";
     document.getElementById('selfrommon4').value="";
     document.getElementById('seltomon4').value="";
     document.getElementById('txtservice4').value="";
     return false;
     }
     else if(document.getElementById('selfromyr4').value > document.getElementById('selfromyr3').value)
     {
     alert("From Year should not be greater than the second employer From Year");
     document.getElementById('selfromyr4').value="";
     document.getElementById('seltoyr4').value="";
     document.getElementById('selfrommon4').value="";
     document.getElementById('seltomon4').value="";
     document.getElementById('txtservice4').value="";
     return false;
     }
     }



     if( trim(document.getElementById('seltomon4').value) == '' )
     {
     alert("Please Select Employer 4's Service Month To.");
     document.getElementById('seltomon4').focus();
     return false;
     }
     if( trim(document.getElementById('seltoyr4').value) == '' )
     {
     alert("Please Select Employer 4's Service Year To.");
     document.getElementById('seltoyr4').focus();
     return false;
     }
     if(document.getElementById('selfromyr4').value > document.getElementById('seltoyr4').value)
     {
     alert("Total Period of Service To Date Should be greater than From Date for Employer 4");
     document.getElementById('seltoyr4').focus();
     return false;
     }
     if(document.getElementById('selfromyr3').value != "" && document.getElementById('seltoyr4').value != "" )
     {
     if((document.getElementById('seltoyr4').value == document.getElementById('selfromyr3').value)  && (document.getElementById('seltomon4').value > document.getElementById('selfrommon3').value))
     {
     alert("To Month should not be greater than the second employer From Month");
     document.getElementById('selfromyr4').value="";
     document.getElementById('seltoyr4').value="";
     document.getElementById('selfrommon4').value="";
     document.getElementById('seltomon4').value="";
     document.getElementById('txtservice4').value="";
     return false;
     }
     else if(document.getElementById('seltoyr4').value > document.getElementById('selfromyr3').value)
     {
     alert("To Year should not be greater than the second employer From Year");
     document.getElementById('selfromyr4').value="";
     document.getElementById('seltoyr4').value="";
     document.getElementById('selfrommon4').value="";
     document.getElementById('seltomon4').value="";
     document.getElementById('txtservice4').value="";
     return false;
     }
     }



     if( trim(document.getElementById('txtduty4').value) == '' )
     {
     alert("Please enter Nature of duties performed for Employer 4");
     document.getElementById('txtduty4').focus();
     return false;
     }
     else if(!isAlphabets('txtduty4'))
     {
     alert("Nature of duties performed for Employer 4 should be Alphabets Only");
     document.getElementById('txtduty4').focus();
     return false;
     }

     if( trim(document.getElementById('txtindtype4').value) == '' )
     {
     alert("Please enter Industry type  for Employer 4");
     document.getElementById('txtindtype4').focus();
     return false;
     }else if(!isAlphabets('txtindtype4')){
     alert("Industry type for Employer 4 should be Alphabets Only");
     document.getElementById('txtindtype4').focus();
     return false;
     }

     if( trim(document.getElementById('txtreason4').value) == '' )
     {
     alert("Please enter Reason of Leaving  for Employer 4. If still working, mention 'not applicable'");
     document.getElementById('txtreason4').focus();
     return false;
     }
     else if(!isAlphabets('txtreason4'))
     {
     alert("Reason of Leaving  for Employer 4 should be Alphabets Only");
     document.getElementById('txtreason4').focus();
     return false;
     }
     }	 



     //------------------------------- Employer 5 Details starts ----------------------------

     if( (trim(document.getElementById('txtemp5').value) == '') &&  (trim(document.getElementById('txtdesg5').value) == '') && 
     (trim(document.getElementById('selfrommon5').value) == '') && (trim(document.getElementById('selfromyr5').value) == '') && 
     (trim(document.getElementById('seltomon5').value) == '') && (trim(document.getElementById('seltoyr5').value) == '') && 
     (trim(document.getElementById('txtduty5').value) == '') && (trim(document.getElementById('txtreason5').value) == '') && (trim(document.getElementById('txtindtype5').value) == '') )
     {
     EXP5=0;
     }else
     {	
     EXP5=1;
     if( trim(document.getElementById('txtemp5').value) == '' )
     {
     alert("Please enter Name of employer 5");
     document.getElementById('txtemp5').focus();
     return false;
     }
     else if(!isAlphabets('txtemp5'))
     {
     alert("Name of employer 5 should be Alphabets Only");
     document.getElementById('txtemp5').focus();
     return false;
     }
     if( trim(document.getElementById('txtdesg5').value) == '' )
     {
     alert("Please enter  Designation for Employer 5");
     document.getElementById('txtdesg5').focus();
     return false;
     }
     else if(!isAlphabets('txtdesg5'))
     {
     alert("Designation for Employer 5 should be Alphabets Only");
     document.getElementById('txtdesg5').focus();
     return false;
     }
     if( trim(document.getElementById('selfrommon5').value) == '' )
     {
     alert("Please Select Employer 5's Service Month From.");
     document.getElementById('selfrommon5').focus();
     return false;
     }
     if( trim(document.getElementById('selfromyr5').value) == '' )
     {
     alert("Please Select Employer 5's Service Year From.");
     document.getElementById('selfromyr5').focus();
     return false;
     }

     if( trim(document.getElementById('selfromyr5').value) <= dobyear)
     {
     alert("Employer 5's Service Year From should be greater than Year of Birth.");
     document.getElementById('selfromyr5').focus();
     return false;
     }
     if(document.getElementById('selfromyr4').value != "" && document.getElementById('selfromyr5').value != "" )
     {
     if((document.getElementById('selfromyr5').value == document.getElementById('selfromyr4').value)  &&
     (document.getElementById('selfrommon5').value > document.getElementById('selfrommon4').value))
     {
     alert("From Month should not be greater than the fourth employer From Month");
     document.getElementById('selfromyr5').value="";
     document.getElementById('seltoyr5').value="";
     document.getElementById('selfrommon5').value="";
     document.getElementById('seltomon5').value="";
     document.getElementById('txtservice5').value="";
     return false;
     }
     else if(document.getElementById('selfromyr5').value > document.getElementById('selfromyr4').value)
     {
     alert("From Year should not be greater than the fourth employer From Year");
     document.getElementById('selfromyr5').value="";
     document.getElementById('seltoyr5').value="";
     document.getElementById('selfrommon5').value="";
     document.getElementById('seltomon5').value="";
     document.getElementById('txtservice5').value="";
     return false;
     }
     }



     if( trim(document.getElementById('seltomon5').value) == '' )
     {
     alert("Please Select Employer 5's Service Month To.");
     document.getElementById('seltomon5').focus();
     return false;
     }
     if( trim(document.getElementById('seltoyr5').value) == '' )
     {
     alert("Please Select Employer 5's Service Year To.");
     document.getElementById('seltoyr5').focus();
     return false;
     }
     if(document.getElementById('selfromyr5').value > document.getElementById('seltoyr5').value)
     {
     alert("Total Period of Service To Date Should be greater than From Date for Employer 5");
     document.getElementById('seltoyr5').focus();
     return false;
     }
     if(document.getElementById('selfromyr4').value != "" && document.getElementById('seltoyr5').value != "" )
     {
     if((document.getElementById('seltoyr5').value == document.getElementById('selfromyr4').value)  && (document.getElementById('seltomon5').value > document.getElementById('selfrommon4').value))
     {
     alert("To Month should not be greater than the fourth employer From Month");
     document.getElementById('selfromyr5').value="";
     document.getElementById('seltoyr5').value="";
     document.getElementById('selfrommon5').value="";
     document.getElementById('seltomon5').value="";
     document.getElementById('txtservice5').value="";
     return false;
     }
     else if(document.getElementById('seltoyr5').value > document.getElementById('selfromyr4').value)
     {
     alert("To Year should not be greater than the fourth employer From Year");
     document.getElementById('selfromyr5').value="";
     document.getElementById('seltoyr5').value="";
     document.getElementById('selfrommon5').value="";
     document.getElementById('seltomon5').value="";
     document.getElementById('txtservice5').value="";
     return false;
     }
     }


     if( trim(document.getElementById('txtduty5').value) == '' )
     {
     alert("Please enter Nature of duties performed for Employer 5");
     document.getElementById('txtduty5').focus();
     return false;
     }
     else if(!isAlphabets('txtduty5'))
     {
     alert("Nature of duties performed for Employer 5 should be Alphabets Only");
     document.getElementById('txtduty5').focus();
     return false;
     }

     if( trim(document.getElementById('txtindtype5').value) == '' )
     {
     alert("Please enter Industry type  for Employer 5");
     document.getElementById('txtindtype5').focus();
     return false;
     }else if(!isAlphabets('txtindtype5')){
     alert("Industry type for Employer 5 should be Alphabets Only");
     document.getElementById('txtindtype5').focus();
     return false;
     }

     if( trim(document.getElementById('txtreason5').value) == '' )
     {
     alert("Please enter Reason of Leaving  for Employer 5. If still working, mention 'not applicable'");
     document.getElementById('txtreason5').focus();
     return false;
     }
     else if(!isAlphabets('txtreason5'))
     {
     alert("Reason of Leaving  for Employer 5 should be Alphabets Only");
     document.getElementById('txtreason5').focus();
     return false;
     }

     }

     //------------------------------- Employer 6 Details starts ----------------------------

     if( (trim(document.getElementById('txtemp6').value) == '') &&  (trim(document.getElementById('txtdesg6').value) == '') && 
     (trim(document.getElementById('selfrommon6').value) == '') && (trim(document.getElementById('selfromyr6').value) == '') && 
     (trim(document.getElementById('seltomon6').value) == '') && (trim(document.getElementById('seltoyr6').value) == '') && 
     (trim(document.getElementById('txtduty6').value) == '')  && (trim(document.getElementById('txtreason6').value) == '') && (trim(document.getElementById('txtindtype6').value) == '') )
     {
     EXP6=0;
     }else
     {	
     EXP6=1;
     if( trim(document.getElementById('txtemp6').value) == '' )
     {
     alert("Please enter Name of employer 6");
     document.getElementById('txtemp6').focus();
     return false;
     }
     else if(!isAlphabets('txtemp6'))
     {
     alert("Name of employer 6 should be Alphabets Only");
     document.getElementById('txtemp6').focus();
     return false;
     }
     if( trim(document.getElementById('txtdesg6').value) == '' )
     {
     alert("Please enter  Designation for Employer 6");
     document.getElementById('txtdesg5').focus();
     return false;
     }
     else if(!isAlphabets('txtdesg6'))
     {
     alert("Designation for Employer 6 should be Alphabets Only");
     document.getElementById('txtdesg6').focus();
     return false;
     }
     if( trim(document.getElementById('selfrommon6').value) == '' )
     {
     alert("Please Select Employer 6's Service Month From.");
     document.getElementById('selfrommon6').focus();
     return false;
     }
     if( trim(document.getElementById('selfromyr6').value) == '' )
     {
     alert("Please Select Employer 6's Service Year From.");
     document.getElementById('selfromyr6').focus();
     return false;
     }

     if( trim(document.getElementById('selfromyr6').value) <= dobyear)
     {
     alert("Employer 6's Service Year From should be greater than Year of Birth.");
     document.getElementById('selfromyr6').focus();
     return false;
     }
     if(document.getElementById('selfromyr5').value != "" && document.getElementById('selfromyr6').value != "" )
     {
     if((document.getElementById('selfromyr6').value == document.getElementById('selfromyr5').value)  &&
     (document.getElementById('selfrommon6').value > document.getElementById('selfrommon5').value))
     {
     alert("From Month should not be greater than the fiveth employer From Month");
     document.getElementById('selfromyr6').value="";
     document.getElementById('seltoyr6').value="";
     document.getElementById('selfrommon6').value="";
     document.getElementById('seltomon6').value="";
     document.getElementById('txtservice6').value="";
     return false;
     }
     else if(document.getElementById('selfromyr6').value > document.getElementById('selfromyr5').value)
     {
     alert("From Year should not be greater than the fiveth employer From Year");
     document.getElementById('selfromyr6').value="";
     document.getElementById('seltoyr6').value="";
     document.getElementById('selfrommon6').value="";
     document.getElementById('seltomon6').value="";
     document.getElementById('txtservice6').value="";
     return false;
     }
     }



     if( trim(document.getElementById('seltomon6').value) == '' )
     {
     alert("Please Select Employer 6's Service Month To.");
     document.getElementById('seltomon6').focus();
     return false;
     }
     if( trim(document.getElementById('seltoyr6').value) == '' )
     {
     alert("Please Select Employer 6's Service Year To.");
     document.getElementById('seltoyr6').focus();
     return false;
     }
     if(document.getElementById('selfromyr6').value > document.getElementById('seltoyr6').value)
     {
     alert("Total Period of Service To Date Should be greater than From Date for Employer 6");
     document.getElementById('seltoyr6').focus();
     return false;
     }
     if(document.getElementById('selfromyr5').value != "" && document.getElementById('seltoyr6').value != "" )
     {
     if((document.getElementById('seltoyr6').value == document.getElementById('selfromyr5').value)  && (document.getElementById('seltomon6').value > document.getElementById('selfrommon5').value))
     {
     alert("To Month should not be greater than the fiveth employer From Month");
     document.getElementById('selfromyr6').value="";
     document.getElementById('seltoyr6').value="";
     document.getElementById('selfrommon6').value="";
     document.getElementById('seltomon6').value="";
     document.getElementById('txtservice6').value="";
     return false;
     }
     else if(document.getElementById('seltoyr6').value > document.getElementById('selfromyr5').value)
     {
     alert("To Year should not be greater than the fiveth employer From Year");
     document.getElementById('selfromyr6').value="";
     document.getElementById('seltoyr6').value="";
     document.getElementById('selfrommon6').value="";
     document.getElementById('seltomon6').value="";
     document.getElementById('txtservice6').value="";
     return false;
     }
     }


     if( trim(document.getElementById('txtduty6').value) == '' )
     {
     alert("Please enter Nature of duties performed for Employer 6");
     document.getElementById('txtduty6').focus();
     return false;
     }
     else if(!isAlphabets('txtduty6'))
     {
     alert("Nature of duties performed for Employer 6 should be Alphabets Only");
     document.getElementById('txtduty6').focus();
     return false;
     }

     if( trim(document.getElementById('txtindtype6').value) == '' )
     {
     alert("Please enter Industry type  for Employer 6");
     document.getElementById('txtindtype6').focus();
     return false;
     }else if(!isAlphabets('txtindtype6')){
     alert("Industry type for Employer 6 should be Alphabets Only");
     document.getElementById('txtindtype6').focus();
     return false;
     }

     if( trim(document.getElementById('txtreason6').value) == '' )
     {
     alert("Please enter Reason of Leaving  for Employer 6. If still working, mention 'not applicable'");
     document.getElementById('txtreason6').focus();
     return false;
     }
     else if(!isAlphabets('txtreason6'))
     {
     alert("Reason of Leaving  for Employer 6 should be Alphabets Only");
     document.getElementById('txtreason6').focus();
     return false;
     }

     }

     //------------------------------- Employer 7 Details starts ----------------------------

     if( (trim(document.getElementById('txtemp7').value) == '') &&  (trim(document.getElementById('txtdesg7').value) == '') && 
     (trim(document.getElementById('selfrommon7').value) == '') && (trim(document.getElementById('selfromyr7').value) == '') && 
     (trim(document.getElementById('seltomon7').value) == '') && (trim(document.getElementById('seltoyr7').value) == '') && 
     (trim(document.getElementById('txtduty7').value) == '')  && (trim(document.getElementById('txtreason7').value) == '') && (trim(document.getElementById('txtindtype7').value) == '') )
     {
     EXP7=0;
     }else
     {	
     EXP7=1;
     if( trim(document.getElementById('txtemp7').value) == '' )
     {
     alert("Please enter Name of employer 7");
     document.getElementById('txtemp7').focus();
     return false;
     }
     else if(!isAlphabets('txtemp7'))
     {
     alert("Name of employer 7 should be Alphabets Only");
     document.getElementById('txtemp7').focus();
     return false;
     }
     if( trim(document.getElementById('txtdesg7').value) == '' )
     {
     alert("Please enter  Designation for Employer 7");
     document.getElementById('txtdesg7').focus();
     return false;
     }
     else if(!isAlphabets('txtdesg7'))
     {
     alert("Designation for Employer 7 should be Alphabets Only");
     document.getElementById('txtdesg7').focus();
     return false;
     }
     if( trim(document.getElementById('selfrommon7').value) == '' )
     {
     alert("Please Select Employer 7's Service Month From.");
     document.getElementById('selfrommon7').focus();
     return false;
     }
     if( trim(document.getElementById('selfromyr7').value) == '' )
     {
     alert("Please Select Employer 7's Service Year From.");
     document.getElementById('selfromyr7').focus();
     return false;
     }

     if( trim(document.getElementById('selfromyr7').value) <= dobyear)
     {
     alert("Employer 7's Service Year From should be greater than Year of Birth.");
     document.getElementById('selfromyr7').focus();
     return false;
     }
     if(document.getElementById('selfromyr6').value != "" && document.getElementById('selfromyr7').value != "" )
     {
     if((document.getElementById('selfromyr7').value == document.getElementById('selfromyr6').value)  &&
     (document.getElementById('selfrommon7').value > document.getElementById('selfrommon6').value))
     {
     alert("From Month should not be greater than the sixth employer From Month");
     document.getElementById('selfromyr7').value="";
     document.getElementById('seltoyr7').value="";
     document.getElementById('selfrommon7').value="";
     document.getElementById('seltomon7').value="";
     document.getElementById('txtservice7').value="";
     return false;
     }
     else if(document.getElementById('selfromyr7').value > document.getElementById('selfromyr6').value)
     {
     alert("From Year should not be greater than the sixth employer From Year");
     document.getElementById('selfromyr7').value="";
     document.getElementById('seltoyr7').value="";
     document.getElementById('selfrommon7').value="";
     document.getElementById('seltomon7').value="";
     document.getElementById('txtservice7').value="";
     return false;
     }
     }



     if( trim(document.getElementById('seltomon7').value) == '' )
     {
     alert("Please Select Employer 7's Service Month To.");
     document.getElementById('seltomon7').focus();
     return false;
     }
     if( trim(document.getElementById('seltoyr7').value) == '' )
     {
     alert("Please Select Employer 7's Service Year To.");
     document.getElementById('seltoyr7').focus();
     return false;
     }
     if(document.getElementById('selfromyr7').value > document.getElementById('seltoyr7').value)
     {
     alert("Total Period of Service To Date Should be greater than From Date for Employer 7");
     document.getElementById('seltoyr7').focus();
     return false;
     }
     if(document.getElementById('selfromyr6').value != "" && document.getElementById('seltoyr7').value != "" )
     {
     if((document.getElementById('seltoyr7').value == document.getElementById('selfromyr6').value)  && (document.getElementById('seltomon7').value > document.getElementById('selfrommon6').value))
     {
     alert("To Month should not be greater than the sixth employer From Month");
     document.getElementById('selfromyr7').value="";
     document.getElementById('seltoyr7').value="";
     document.getElementById('selfrommon7').value="";
     document.getElementById('seltomon7').value="";
     document.getElementById('txtservice7').value="";
     return false;
     }
     else if(document.getElementById('seltoyr7').value > document.getElementById('selfromyr6').value)
     {
     alert("To Year should not be greater than the sixth employer From Year");
     document.getElementById('selfromyr7').value="";
     document.getElementById('seltoyr7').value="";
     document.getElementById('selfrommon7').value="";
     document.getElementById('seltomon7').value="";
     document.getElementById('txtservice7').value="";
     return false;
     }
     }


     if( trim(document.getElementById('txtduty7').value) == '' )
     {
     alert("Please enter Nature of duties performed for Employer 7");
     document.getElementById('txtduty7').focus();
     return false;
     }
     else if(!isAlphabets('txtduty7'))
     {
     alert("Nature of duties performed for Employer 7 should be Alphabets Only");
     document.getElementById('txtduty7').focus();
     return false;
     }

     if( trim(document.getElementById('txtindtype7').value) == '' )
     {
     alert("Please enter Industry type  for Employer 7");
     document.getElementById('txtindtype7').focus();
     return false;
     }else if(!isAlphabets('txtindtype7')){
     alert("Industry type for Employer 7 should be Alphabets Only");
     document.getElementById('txtindtype7').focus();
     return false;
     }

     if( trim(document.getElementById('txtreason7').value) == '' )
     {
     alert("Please enter Reason of Leaving  for Employer 7. If still working, mention 'not applicable'");
     document.getElementById('txtreason7').focus();
     return false;
     }
     else if(!isAlphabets('txtreason7'))
     {
     alert("Reason of Leaving  for Employer 7 should be Alphabets Only");
     document.getElementById('txtreason7').focus();
     return false;
     }

     }

     if(document.reg_frm.txttotexp.value !="")
     {	
     if(!isNumeric('txttotexp'))
     {
     alert("Total Experience should be Numbers Only");
     document.getElementById('txttotexp').focus();
     return false;
     }
     if(!checkallzeroes(trim(document.getElementById('txttotexp').value)))
     {
     //alert("Transaction ID/Message User Reference No (MUR) cannot be all zeroes");
     alert(" Total Experience cannot be all zeroes");
     document.getElementById('txttotexp').focus();
     return false;
     }
     var postcode_exp=dv('selpost').value;
     if(postcode_exp != "DMSE"){
     if(EXP2==0 && EXP1==0 && EXP3==0 && EXP4==0 && EXP5==0 && EXP6==0 && EXP7==0)
     {
     alert("Please Enter atleast one experience.")
     document.getElementById('txtemp1').focus();
     return false;
     }
     }else if(postcode_exp == "DMSE"){
     if(dv('selwrkexp').value=='Armed Forces' && dv('txtarmedper').value==''){
     alert("Please enter Years of Commissioned Service");
     dv('txtarmedper').focus();
     return false;
     }else if(dv('selwrkexp').value=='Others' && dv('txtparamper').value=='' && dv('txtpoliceper').value==''){
     alert("Please enter Years of Commissioned Service");
     dv('txtparamper').focus();
     return false;
     }
     }
     }

     if(EXP7==1)
     {
     if(EXP2==0 || EXP1==0 || EXP3==0 || EXP4==0 || EXP5==0 || EXP6==0)
     {
     alert("Please Enter the experience in order.")	
     return false;
     }
     }
     if(EXP6==1)
     {
     if(EXP2==0 || EXP1==0 || EXP3==0 || EXP4==0 || EXP5==0)
     {
     alert("Please Enter the experience in order.")	
     return false;
     }
     }
     if(EXP5==1)
     {
     if(EXP2==0 || EXP1==0 || EXP3==0 || EXP4==0)
     {
     alert("Please Enter the experience in order.")	
     return false;
     }
     }
     if(EXP4==1)
     {
     if(EXP2==0 || EXP1==0 || EXP3==0)
     {
     alert("Please Enter the experience in order.")	
     return false;
     }
     }

     if(EXP3==1)
     {
     if(EXP2==0 || EXP1==0)
     {
     alert("Please Enter the experience in order.")	
     return false;
     }
     }

     if(EXP2==1)
     {
     if(EXP1==0)
     {
     alert("Please Enter the experience in order.")	
     return false;
     }
     }
     */

    /*var compare_exp=0;
     if(dv('selwrkexp').value=='')
     {
     alert("Please select Work Experience In");
     dv('selwrkexp').focus();
     return false;
     }
     else if(dv('selwrkexp').value=='Armed Forces')
     {
     if(dv('selarmed').value=='')
     {
     alert("Please select Ex-Serviceman Type");
     dv('selarmed').focus();
     return false;
     }
     if(dv('txtarmedper').value=='')
     {
     alert("Please enter Years of Commissioned Service");
     dv('txtarmedper').focus();
     return false;
     }
     else if(!checkallzeroes(trim(dv('txtarmedper').value)))
     {
     alert("Years of Commissioned Service should not be zero(s)");
     dv('txtarmedper').focus();
     return false;
     }
     else if(!isNumeric('txtarmedper'))
     {
     alert("Years of Commissioned Service should be numeric");
     document.getElementById('txtarmedper').focus();
     return false;
     }

     if((trim(document.getElementById('txtarmedper').value).substr(0,1)==0))
     {
     alert("Years of Commissioned Service should not start with zero");
     document.getElementById('txtarmedper').focus();
     return false;
     }



     //compare_exp=dv('txtarmedper').value;
     if(trim(dv('txtarmedrank').value)=='')
     {
     alert("Please enter Rank last held");
     dv('txtarmedrank').focus();
     return false;
     }
     else if(!checkallzeroes(trim(dv('txtarmedrank').value)))
     {
     alert(" Rank last held for Armed Forces should not be zero(s)");
     dv('txtarmedrank').focus();
     return false;
     }

     var fitness=get_radio_value(frm.optarmedfit);
     if(fitness=='')
     {
     alert("Please select Are you medically fit for the Post?");
     dv('optarmedfit').focus();
     return false;
     }

     }
     else if(dv('selwrkexp').value=='Others')
     {
     var paramchk=0;
     var policechk=0;
     //var compare_exp1=0;
     //var compare_exp2=0;
     if(dv('selparam').value!='' || dv('txtparamper').value!='' || dv('txtparamrank').value!='')
     paramchk=1;
     if(dv('selpolice').value!='' || dv('txtpoliceper').value!='' || dv('txtpolicerank').value!='')
     policechk=1;
     if(paramchk==0 && policechk==0)
     {
     alert("At least one(either Paramilitary or Police or both) Work Experience In details need to be filled");
     dv('selparam').focus();
     return false;
     }
     if(paramchk==1)
     {
     if(dv('selparam').value=='')
     {
     alert("Please select Ex-Serviceman Type for Paramilitary");
     dv('selparam').focus();
     return false;
     }
     if(dv('txtparamper').value=='')
     {
     alert("Please enter Years of Commissioned Service for Paramilitary");
     dv('txtparamper').focus();
     return false;
     }
     else if(!checkallzeroes(trim(dv('txtparamper').value)))
     {
     alert("Years of Commissioned Service should not be zero(s)");
     dv('txtparamper').focus();
     return false;
     }
     else if(!isNumeric('txtparamper'))
     {
     alert("Years of Commissioned Service should be numeric");
     document.getElementById('txtparamper').focus();
     return false;
     }

     if((trim(document.getElementById('txtparamper').value).substr(0,1)==0))
     {
     alert("Years of Commissioned Service should not start with zero");
     document.getElementById('txtparamper').focus();
     return false;
     }
     //compare_exp1=dv('txtparamper').value;
     if(trim(dv('txtparamrank').value)=='')
     {
     alert("Please enter Rank last held for Paramilitary");
     dv('txtparamrank').focus();
     return false;
     }
     else if(!checkallzeroes(trim(dv('txtparamrank').value)))
     {
     alert(" Rank last held for Paramilitary should not be zero(s)");
     dv('txtparamrank').focus();
     return false;
     }

     var fitness1=get_radio_value(frm.optparamfit);
     if(fitness1=='')
     {
     alert("Please select Are you medically fit for the Post? for Paramilitary");
     dv('optparamfit').focus();
     return false;
     }
     }
     else
     {
     frm.optparamfit[0].checked=false;
     frm.optparamfit[1].checked=false;
     }
     if(policechk==1)
     {
     if(dv('selpolice').value=='')
     {
     alert("Please select Ex-Serviceman Type for Police");
     dv('selpolice').focus();
     return false;
     }
     if(dv('txtpoliceper').value=='')
     {
     alert("Please enter Years of Commissioned Service for Police");
     dv('txtpoliceper').focus();
     return false;
     }
     else if(!checkallzeroes(trim(dv('txtpoliceper').value)))
     {
     alert("Years of Commissioned Service should not be zero(s)");
     dv('txtpoliceper').focus();
     return false;
     }
     else if(!isNumeric('txtpoliceper'))
     {
     alert("Years of Commissioned Service should be numeric");
     document.getElementById('txtpoliceper').focus();
     return false;
     }
     if((trim(document.getElementById('txtpoliceper').value).substr(0,1)==0))
     {
     alert("Years of Commissioned Service should not start with zero");
     document.getElementById('txtpoliceper').focus();
     return false;
     }
     //compare_exp2=dv('txtpoliceper').value;
     if(trim(dv('txtpolicerank').value)=='')
     {
     alert("Please enter Rank last held for Police");
     dv('txtpolicerank').focus();
     return false;
     }
     else if(!checkallzeroes(trim(dv('txtpolicerank').value)))
     {
     alert(" Rank last held for Police should not be zero(s)");
     dv('txtpolicerank').focus();
     return false;
     }
     var fitness2=get_radio_value(frm.optpolicefit);
     if(fitness2=='')
     {
     alert("Please select Are you medically fit for the Post? for Police");
     dv('optpolicefit').focus();
     return false;
     }
     }
     else
     {
     frm.optpolicefit[0].checked=false;
     frm.optpolicefit[1].checked=false;
     }

     }var tot_rel_exp=dv('txttotexp').value;
     if(tot_rel_exp<60)	{
     alert("Experience for this post is minimum 5 years (60 months)");
     document.getElementById('txttotexp').focus();
     return false;
     }*/

    /*	var postcode_exp=dv('selpost').value;
     var tot_rel_exp=dv('txttotexp').value;*/


    //if(postcode_exp=="01" || postcode_exp=="08" )	{
    //if(postcode_exp=="05" || postcode_exp=="06" || postcode_exp=="07" || postcode_exp=="08" )	{
    /*			if(postcode_exp=="AGEC" || postcode_exp=="MGEC" || postcode_exp=="CMCA" || postcode_exp=="MGHW"  || postcode_exp=="DMHW"  || postcode_exp=="DMNW"  || postcode_exp=="DMSY"  || postcode_exp=="DMCE" || postcode_exp=="MGOL" || postcode_exp=="DMSE" ){ 
     if(tot_rel_exp<60)	{
     alert("Experience for this post is minimum 5 years (60 months)");
     document.getElementById('txttotexp').focus();
     return false;
     }
     }
     if(postcode_exp=="AMHW" || postcode_exp=="AMOL"){ 
     if(tot_rel_exp<12)	{
     alert("Experience for this post is minimum 1 years (12 months)");
     document.getElementById('txttotexp').focus();
     return false;
     }
     }
     if(postcode_exp=="AMCE" || postcode_exp=="AMEE" || postcode_exp=="DMOL" || postcode_exp=="DMLA"){
     if(tot_rel_exp<24)	{
     alert("Experience for this post is minimum 2 years (24 months)");
     document.getElementById('txttotexp').focus();
     return false;
     }
     }if(postcode_exp=="MGCA" || postcode_exp=="DMEE" || postcode_exp=="MGLA"){
     if(tot_rel_exp<36)	{
     alert("Experience for this post is minimum 3 years (36 months)");
     document.getElementById('txttotexp').focus();
     return false;
     }
     }if(postcode_exp=="MGNW"){
     if(tot_rel_exp<84)	{
     alert("Experience for this post is minimum 7 years (84 months)");
     document.getElementById('txttotexp').focus();
     return false;
     }
     }

     if(postcode_exp=="DMFS"){
     if(((document.reg_frm.seldegree3.value == "01" || document.reg_frm.seldegree3.value == "02" || document.reg_frm.seldegree3.value == "03") && document.reg_frm.selstream3.value == "20") || (get_radio_value(document.reg_frm.opt_offCourse) !='N')){
     if(tot_rel_exp<84)	{
     alert("Experience for this post is minimum 7 years (84 months)");
     document.getElementById('txttotexp').focus();
     return false;
     }
     }else if(document.reg_frm.seldegree3.value == "01" && document.reg_frm.selstream3.value == "19"){
     if(tot_rel_exp<60)	{
     alert("Experience for this post is minimum 5 years (60 months)");
     document.getElementById('txttotexp').focus();
     return false;
     }
     }else{
     alert("You are not Eligible for this Post. Please read the Eligibility Criteria before you start to apply.");
     return false;
     }
     }

     if(postcode_exp=="MGLA"){
     if(dv('txtlawofficer').value=='' && dv('txtlawfirm').value=='')
     {
     alert("Please enter 'Law officer in the legal department' OR 'the name with whom you have 3 years / more than 3 years in Law firm'");
     dv('txtlawofficer').focus();
     return false;
     }

     if(dv('txtlawofficer').value!='' && !isAlphabets('txtlawofficer'))
     {
     alert("'Law officer in the legal department ' should be Alphabets Only");
     document.getElementById('txtlawofficer').focus();
     return false;
     }*/
    /*if()
     {
     alert("Please enter the name with whom you have 3 years / more than 3 years in Law firm");
     dv('txtlawfirm').focus();
     return false;
     }*/
    /*		if(dv('txtlawfirm').value!='' && !isAlphabets('txtlawfirm'))
     {
     alert("'Name of the Law firm ' should be Alphabets Only");
     document.getElementById('txtlawfirm').focus();
     return false;
     }	
     }

     if(dv('selpost').value =='DMSE')
     {}*/
//post Qualification work experience ends
    /*
     if((get_radio_value(document.reg_frm.opt_locallang) !='Y')){
     alert("Have you passed 'local language' as one of the subjects at Matriculation/Xth Standard should be YES to apply for this post");
     document.getElementById('opt_locallang').focus();
     return false;
     }

     if((get_radio_value(document.reg_frm.opt_cat) =='SC') || (get_radio_value(document.reg_frm.opt_cat) =='ST') || (get_radio_value(document.reg_frm.optpet) =='Y') )
     {
     if( get_radio_value(document.reg_frm.optpet)=='')
     {
     alert("Please select Whether desirous of taking Pre-Exam Training (SC/ST/Minority Community)");
     document.getElementById('optpet').focus();
     return false;
     }

     if( (get_radio_value(document.reg_frm.optpet)=='Y') && (trim(document.getElementById('selpetcentre').value)=='') )
     {
     alert("Please select If Yes,Centre for Training");
     document.getElementById('selpetcentre').focus();
     return false;
     }		 
     }

     */
    //pet centre
    if ((get_radio_value(document.reg_frm.opt_cat) == 'SC') || (get_radio_value(document.reg_frm.opt_cat) == 'ST') || (get_radio_value(document.reg_frm.optminority) == 'Y') || (get_radio_value(document.reg_frm.optpet) == 'Y')) {
        if (get_radio_value(document.reg_frm.optpet) == '') {
            alert("Please select Whether desirous of taking Pre-Exam Training (SC/ST/Religious Minority Community)");
            document.getElementById('optpet').focus();
            return false;
        }

        if ((get_radio_value(document.reg_frm.optpet) == 'Y') && (trim(document.getElementById('selpetcentre').value) == '')) {
            alert("Please select Centre for Training");
            document.getElementById('selpetcentre').focus();
            return false;
        }
    }

    /*if(!LanguageValidate())
     return false;*/

    //PHOTO CODE STARTED
    if (document.reg_frm.modtype.value == '1') {
        if (document.reg_frm.txtphoto.value == '') {
            alert("Please upload Photo");
            document.getElementById('txtphoto').focus();
            return false;
        }
        else if (document.reg_frm.txtphoto.value != '') {
            var phid = document.reg_frm.txtphoto;
            if (!filevalidate(phid, 'photo')) {
                return false;
            }
        }
        if (document.reg_frm.txtsign.value == '') {
            alert("Please upload Signature");
            document.getElementById('txtsign').focus();
            return false;
        }
        else if (document.reg_frm.txtsign.value != '') {
            var sigid = document.reg_frm.txtsign;
            if (!filevalidate(sigid, 'sign')) {
                return false;
            }
        }
    } else if (document.reg_frm.modtype.value == '2') {
        //alert(img_path+"~"+photo_st+"~"+sign_st+"~"+document.reg_frm.txtphoto.value+"~"+document.reg_frm.txtsign.value);
        if (img_path == '' && (document.reg_frm.txtphoto.value == '' || document.reg_frm.txtsign.value == '')) {
            alert("Upload your Photo & Signature");
            document.getElementById('txtphoto').focus();
            return false;
        }
        if (img_path != '' && photo_st == 'N' && document.reg_frm.txtphoto.value == '') {
            alert("Upload your Photo");
            document.getElementById('txtphoto').focus();
            return false;
        }
        if (img_path != '' && sign_st == 'N' && document.reg_frm.txtsign.value == '') {
            alert("Upload your Signature");
            document.getElementById('txtsign').focus();
            return false;
        }

        if (document.reg_frm.txtphoto.value != '') {
            var phid = document.reg_frm.txtphoto;
            if (!filevalidate(phid, 'photo')) {
                return false;
            }
        }
        if (document.reg_frm.txtsign.value != '') {
            var sigid = document.reg_frm.txtsign;
            if (!filevalidate(sigid, 'sign')) {
                return false;
            }
        }
    }
    //PHOTO CODE ENDED


    //category=get_radio_value(document.reg_frm.opt_cat);
    //phy_challenge=get_radio_value(document.reg_frm.optdisability);
    //dxs=get_radio_value(document.reg_frm.optdxs);
    //disxs=get_radio_value(document.reg_frm.optdisxs);
    //exservice=get_radio_value(document.reg_frm.optexservice);

    /*if(phy_challenge=="Y" || category=="SC" || category=="ST")
     {

     }		
     else */

    if (get_radio_value(document.reg_frm.paymentin) == "") {
        alert("Please select Payment Mode");
        document.reg_frm.paymentin[0].focus();
        return false;
    } else if (get_radio_value(document.reg_frm.paymentin) != "ONLINE" && get_radio_value(document.reg_frm.paymentin) != "CBS") {
        alert("Invalid Payment Mode");
        document.reg_frm.paymentin[0].focus();
        return false;
    }

    if (dv('modtype').value == '2') {
        var any_change = chk_old_new_values();
        if (any_change == "no") {
            alert('At least any one value has to be changed to save the data.');
            return false;
        }
    }

    /*if(document.getElementById('declaration').checked == false){
     alert("I agree option should be checked for DECLARATION, to process the application");
     document.getElementById('declaration').focus();
     return false;	
     }*/

    if (EnableCaptcha == 'Y') {
        if (document.reg_frm.txtCode.value == '') {
            alert('Please enter the Security Code');
            document.reg_frm.txtCode.value = '';
            document.reg_frm.txtCode.focus();
            return false;
        } // Now the Ajax CAPTCHA validation
        else {
            checkcode(document.reg_frm.txtCode.value);
            return false;
        }
    }

    if (submit_type == 0) {
        if (document.reg_frm.chksameaddr.checked == true) {
            same_addr();
        }
        alert("Rechecked successfully, click submit to proceed");
        return false;
    }

    if (submit_type == 1) {
        if (document.reg_frm.chksameaddr.checked == true) {
            same_addr();
        }

        if (confirm("Are you sure as No change/edit of application will be allowed after submit")) {
            document.getElementById('Submit').disabled = true;
            document.getElementById('Recheck').disabled = true;
            document.getElementById('Close').disabled = true;
            document.getElementById('Save').disabled = true;
            if (step_no == '1')
                document.reg_frm.action = "reg_submit.php";
            else if (step_no == '2')
                document.reg_frm.action = "reg_submit2.php";
            /*if(dv('modtype').value=='1')
             {
             document.reg_frm.action="reg_submit.php";
             }*/
            document.reg_frm.submit();
        }
        else {
            document.getElementById('Submit').disabled = false;
            document.getElementById('Recheck').disabled = false;
            document.getElementById('Close').disabled = false;
            document.getElementById('Save').disabled = false;
        }
    }

}

//ajax check for security code


var captchaOK = 2; // 2 - not yet checked, true - correct, false - failed
function getHTTPObject() {
    try {
        req = new XMLHttpRequest();
    }
    catch (err1) {
        try {
            req = new ActiveXObject("Msxml12.XMLHTTP");
        }
        catch (err2) {
            try {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (err3) {
                req = false;
            }
        }
    }
    return req;
}
var http = getHTTPObject();


function handleHttpResponse() {
    if (http.readyState == 4) {
        captchaOK = http.responseText;
        if (captchaOK != 'true') {
            alert('Incorrect Security Code. Please try again');
            document.getElementById('Submit').disabled = false;
            document.getElementById('Recheck').disabled = false;
            document.reg_frm.txtCode.value = '';
            document.getElementById('image').src = './captcha/CaptchaSecurityImages.php?width=100&height=40&characters=5&sid=' + Math.random();
            document.reg_frm.txtCode.focus();
            return false;
        }
        else {
            if (global_submit_type == 0) {
                alert("Rechecked successfully, click submit to proceed");
                return false;
            }
            if (global_submit_type == 1) {
                var r = confirm("Are you sure as No change/edit of application will be allowed after submit");
                if (r) {
                    document.getElementById('Submit').disabled = true;
                    document.getElementById('Recheck').disabled = true;
                    document.getElementById('Close').disabled = true;
                    document.getElementById('Save').disabled = true;
                    if (global_reg_step_no == '1')
                        document.reg_frm.action = "reg_submit.php";
                    else if (global_reg_step_no == '2')
                        document.reg_frm.action = "reg_submit2.php";
                    document.reg_frm.submit();
                }
                else {
                    document.getElementById('Submit').disabled = false;
                    document.getElementById('Recheck').disabled = false;
                    document.getElementById('Close').disabled = false;
                    document.getElementById('Save').disabled = false;
                }
            }
            if (global_submit_type == 2) {
                var r = confirm("Are you sure the data entered in is correct. If yes click OK. Other wise click cancel");
                if (r) {
                    document.getElementById('Submit').disabled = true;
                    document.getElementById('Recheck').disabled = true;
                    document.getElementById('Close').disabled = true;
                    document.getElementById('Save').disabled = true;
                    if (global_edit_step_no == '1')
                        document.reg_frm.action = "edit_submit.php";
                    else if (global_edit_step_no == '2')
                        document.reg_frm.action = "edit_submit2.php";
                    document.reg_frm.submit();
                }
                else {
                    document.getElementById('Submit').disabled = false;
                    document.getElementById('Recheck').disabled = false;
                    document.getElementById('Close').disabled = false;
                    document.getElementById('Save').disabled = false;
                }
            }
        }
    }
}


function checkcode(thecode, submit_type) {
    var url = "./captcha/secureck.php?security_code=" + escape(thecode);
    http.open("POST", url, true);
    http.onreadystatechange = handleHttpResponse;
    http.send(null);
}


function number(e) {
    var key;
    var keychar;
    if (window.event) {
        key = window.event.keyCode;
    } else if (e) {
        key = e.which;
    }
    else
        return true;

    if ((key == 8) || (key == 0))
        return true;

    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    if ((key > 47) && (key < 58)) {
        return true;
    } else
        return false;
}

function alpha(e) {
    var key;
    var keychar;
    if (window.event) {
        key = window.event.keyCode;
    } else if (e) {
        key = e.which;
    }
    else
        return true;
    if ((key == 8) || (key == 0))
        return true;

    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    if (key != 32) {

        invalids = "`~@#$%^*()_+=\|{}[]:;'\"<>&?/!,.-1234567890\\";
        //	invalids = "`~@#$%^*()_+=\|\,{}[]:;'\"<>&?/!\\";
        for (i = 0; i < invalids.length; i++) {
            if (keychar.indexOf(invalids.charAt(i)) >= 0 || keychar == false) {
                return false;
            }
        }
    }
    return true;

}
function alphadothyphen(e) {
    var key;
    var keychar;
    if (window.event) {
        key = window.event.keyCode;
    } else if (e) {
        key = e.which;
    }
    else
        return true;
    if ((key == 8) || (key == 0))
        return true;

    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    if (key != 32) {

        invalids = "`~@#$%^*()_+=\|{}[]:;'\"<>&?/!,1234567890\\";
        //	invalids = "`~@#$%^*()_+=\|\,{}[]:;'\"<>&?/!\\";
        for (i = 0; i < invalids.length; i++) {
            if (keychar.indexOf(invalids.charAt(i)) >= 0 || keychar == false) {
                return false;
            }
        }
    }
    return true;

}
function alphadot(e) {
    var key;
    var keychar;
    if (window.event) {
        key = window.event.keyCode;
    } else if (e) {
        key = e.which;
    }
    else
        return true;
    if ((key == 8) || (key == 0))
        return true;

    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    if (key != 32) {

        invalids = "`~@#$%^*()_+=\|{}[]:;'\"<>&?/!,-1234567890\\";

        //	invalids = "`~@#$%^*()_+=\|\,{}[]:;'\"<>&?/!\\";
        for (i = 0; i < invalids.length; i++) {
            if (keychar.indexOf(invalids.charAt(i)) >= 0 || keychar == false) {
                return false;
            }
        }
    }
    return true;

}


function alphadothyphendigits(e) {
    var key;
    var keychar;
    if (window.event) {
        key = window.event.keyCode;
    } else if (e) {
        key = e.which;
    }
    else
        return true;

    if ((key == 8) || (key == 0) || (key == 48))
        return true;

    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    if (key != 32) {
        invalids = "`~@#$%^*()_+=\|{}[]:;'\"<>?/!,\\";
        //invalids = "`~@#$%^*()_+=\|{}[]:;'\"<>&?/!,\\";
        for (i = 0; i < invalids.length; i++) {
            if (keychar.indexOf(invalids.charAt(i)) >= 0 || keychar == false) {
                return false;
            }
        }
    }
    return true;
}

function alphacompdet(e) {
    //dot,hyphen,comma,plus symbols and all the digits are allowed
    var key;
    var keychar;
    if (window.event) {
        key = window.event.keyCode;
    } else if (e) {
        key = e.which;
    }
    else
        return true;
    if ((key == 8) || (key == 0))
        return true;

    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    if (key != 32) {

        invalids = "`~@#$%^*()_=\|{}[]:;'\"<>&?/!\\";
        //	invalids = "`~@#$%^*()_+=\|\,{}[]:;'\"<>&?/!\\";
        for (i = 0; i < invalids.length; i++) {
            if (keychar != 0) {
                if (keychar.indexOf(invalids.charAt(i)) >= 0 || keychar == false) {
                    return false;
                }
            }
        }
    }
    return true;

}

function alphanumber(e) {
    var key;
    var keychar;
    if (window.event) {
        key = window.event.keyCode;
    } else if (e) {
        key = e.which;
    }
    else
        return true;
    //alert(key);
    if ((key == 8) || (key == 0))
        return true;


    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    //alert(keychar);

    if (key != 32) {

        invalids = "`~@#$%^*-()_+=\|{}[].:;'\"<>&?/!,\\";
        for (i = 0; i < invalids.length; i++) {
            if (keychar != 0) {
                if (keychar.indexOf(invalids.charAt(i)) >= 0 || keychar == false) {
                    return false;
                }
            }
        }
    }
    return true;
}


/*
 function alphanumericjs(e)
 {	
 var key;
 var keychar;
 if (window.event){
 key = window.event.keyCode;		
 }else if (e){
 key = e.which;		
 }
 else
 return true;
 if((key == 8) || (key == 0))
 return true;

 keychar = String.fromCharCode(key);
 keychar = keychar.toLowerCase();
 if(key!=32)
 { 

 invalids = "`~@#$%^*()_+=\|{}[]:;'\"<>&?/!,\\";
 //	invalids = "`~@#$%^*()_+=\|\,{}[]:;'\"<>&?/!\\";
 for(i=0; i<invalids.length; i++) {
 if(keychar.indexOf(invalids.charAt(i)) >= 0 || keychar==false) {				           			  
 return false;               
 }
 }
 }
 return true;

 }
 */

function depcitykey(e) {

    var key;
    var keychar;
    if (window.event) {
        key = window.event.keyCode;
    } else if (e) {
        key = e.which;
    }
    else
        return true;
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    if ((key == 8) || (key == 0))
        return true;

    if (key != 32) {
        var invalids = "`~@#$%^*()_+=\|{}[]:;'\"<>,?";
        for (i = 0; i < invalids.length; i++) {
            if (keychar.indexOf(invalids.charAt(i)) >= 0 || keychar == false) {
                return false;
            }
        }
    }
    return true;
}

//Floating Point validation
function Chk_Float(obj) {
    val = obj.value;
    if (val != '') {
        var wrongchar = false;
        var DecimalFound = false;
        for (var i = 0; i < val.length; i++) {
            var ch = val.charAt(i)
            if (i == 0 && ch == "-") {
                continue;
            }
            if (ch == "." && !DecimalFound) {
                DecimalFound = true;
                continue;
            }
            if (ch < "0" || ch > "9") {
                wrongchar = true;
            }
        }
        if (!wrongchar) {
            if (!DecimalFound) {
                if (obj.value == 0)
                    obj.value = 0.00;
                else
                    obj.value = val + '.00'
                if (val > 100) {
//					alert(val.substr(0,2) +"--"+ val.substr(2,6));
                    obj.value = val.substr(0, 2) + "." + val.substr(2, 6);
                }
            }
            return true;
        } else
            return false
    }
}

function float1(e) {
    var key;
    var keychar;
    if (window.event) {
        key = window.event.keyCode;
    } else if (e) {
        key = e.which;
    }
    else
        return true;
    keychar = String.fromCharCode(key);
    keychar = keychar.toLowerCase();
    if ((key == 8) || (key == 0))
        return true;
    if ((key > 45) && (key < 58)) {
        return true;
    } else
        return false;

}
function percmarxvlid(str) {
    var x = str;
    if (x != "") {
        if (x.indexOf(".") == 0 || x.indexOf(".") == (x.length - 1)) {
            alert("Dot should not be in the begining or at the end");
            return false;
        }
        if (x.indexOf(".") <= (x.length - 4)) {
            alert("There can be only 2 digits after decimal");
            return false;
        }

        ckdec = x.substr(x.indexOf(".") + 1, 4);
        if (ckdec.length == 1) {
            alert("There should be 2 digits after decimal");
            return false;
        }

        if (parseFloat(x) > 100) {
            alert("Percentage entered should not be more than 100");
            return false;
        }
        if (parseFloat(x) == 0) {
            alert("Percentage entered should be greater than zero");
            return false;
        }
        /*
         if(x.charAt(0) == '0'){
         alert("Percentage entered should not start with zero");
         return false;
         }
         */
        return true;
    }
}
function showdiv(obj) {
    document.getElementById(obj).style.visibility = 'visible';
    //if( (getBrowserVersion()=='IE6') || (getBrowserVersion()=='IE5') )
    /*if( (getBrowserVersion()=='IE6') || (getBrowserVersion()=='IE5') )
     document.getElementById(obj).style.display='block';
     else
     document.getElementById(obj).style.display='table-row';*/
    document.getElementById(obj).style.display = 'inline';

}
function hidediv(obj) {
    document.getElementById(obj).style.visibility = 'hidden';
    document.getElementById(obj).style.display = 'none'
}

function getBrowserVersion() {
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { //test for MSIE x.x;
        var ieversion = new Number(RegExp.$1) // capture x.x portion and store as a number
        if (ieversion >= 8)
            return 'IE8';
        else if (ieversion >= 7)
            return 'IE7';
        else if (ieversion >= 6)
            return 'IE6';
        else if (ieversion >= 5)
            return 'IE5';
    } else
        return 1;
}

function init() {

    document.reg_frm.seldisabilitytype.disabled = true;
    document.reg_frm.seldisabilityper.disabled = true;
    //document.reg_frm.selpetcentre.disabled=true;
    //document.reg_frm.optpet[0].disabled=true;
    //document.reg_frm.optpet[1].disabled=true;
    //document.reg_frm.optscribe[0].disabled=true;
    //document.reg_frm.optscribe[1].disabled=true;
    hidediv('pwd1');
    hidediv('pwd2');
    document.reg_frm.optdisability[1].checked = true;
    document.reg_frm.optexservice[1].checked = true;
    //document.reg_frm.optkashmir[1].checked=true;
    document.reg_frm.selexamcentre.value = '';
    document.reg_frm.reset();

}


function same_addr() {

    //if checked take the values of correspondence address controls and put it in permamnent address controls and disable them
    //else keep them blank and enable them
//alert(document.reg_frm.chksameaddr.checked);
    if (document.reg_frm.chksameaddr.checked == true) {
        document.reg_frm.txtaddress1perm.value = document.reg_frm.txtaddress1.value;
        document.reg_frm.txtaddress2perm.value = document.reg_frm.txtaddress2.value;
        document.reg_frm.txtaddress3perm.value = document.reg_frm.txtaddress3.value;
        document.reg_frm.txtdistrictp.value = document.reg_frm.txtdistrict.value;
        document.reg_frm.txtstateperm.value = document.reg_frm.txtstate.value;
        document.reg_frm.txtpinperm.value = document.reg_frm.txtpin.value;

        document.reg_frm.txtaddress1perm.disabled = true;
        document.reg_frm.txtaddress2perm.disabled = true;
        document.reg_frm.txtaddress3perm.disabled = true;
        document.reg_frm.txtdistrictp.disabled = true;
        document.reg_frm.txtstateperm.disabled = true;
        document.reg_frm.txtpinperm.disabled = true;

    }
    else {

        document.reg_frm.txtaddress1perm.disabled = false;
        document.reg_frm.txtaddress2perm.disabled = false;
        document.reg_frm.txtaddress3perm.disabled = false;
        document.reg_frm.txtdistrictp.disabled = false;
        document.reg_frm.txtstateperm.disabled = false;
        document.reg_frm.txtpinperm.disabled = false;


        document.reg_frm.txtaddress1perm.value = "";
        document.reg_frm.txtaddress2perm.value = "";
        document.reg_frm.txtaddress3perm.value = "";
        document.reg_frm.txtdistrictp.value = "";
        document.reg_frm.txtstateperm.value = "";
        document.reg_frm.txtpinperm.value = "";
    }
}


/*

 not using anywhere
 function compqualdet()
 {
 //alert(get_radio_value(document.reg_frm.qualcomp));

 if(get_radio_value(document.reg_frm.txtqualcompdet)=='Y')
 document.reg_frm.txtqualcompdet.disabled=false;
 else
 {
 document.reg_frm.txtqualcompdet.disabled=true;
 document.reg_frm.txtqualcompdet.value="";
 }
 }
 */


function numberctrl(e) {
    var key;
    var keychar;
    var isCtrl;
    var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'j');
    if (window.event) {
        key = window.event.keyCode;
        if (window.event.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    } else if (e) {
        key = e.which;
        if (e.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    else
        return true;

    if (isCtrl) {
        for (i = 0; i < forbiddenKeys.length; i++) {
            //case-insensitive comparation				
            if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                alert('Key combination CTRL + '
                    + String.fromCharCode(key)
                    + ' has been disabled.');
                return false;
            }
        }
    }
    if ((key == 8) || (key == 0))
        return true;

    //keychar = String.fromCharCode(key);
    //keychar = keychar.toLowerCase();
    //if((key > 47) && (key < 58)){				
    //	return true;
    //}else
    //  return false;	
}
function emailctrl(e) {
    var key;
    var keychar;
    var isCtrl;
    var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'j');
    if (window.event) {
        key = window.event.keyCode;
        if (window.event.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    } else if (e) {
        key = e.which;
        if (e.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    else
        return true;

    if (isCtrl) {
        for (i = 0; i < forbiddenKeys.length; i++) {
            //case-insensitive comparation				
            if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                alert('Key combination CTRL + '
                    + String.fromCharCode(key)
                    + ' has been disabled.');
                return false;
            }
        }
    }
    if ((key == 8) || (key == 0))
        return true;
}

function alphanumberctrl(e) {
    var key;
    var keychar;
    var isCtrl;
    var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'j');
    if (window.event) {
        key = window.event.keyCode;
        if (window.event.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    } else if (e) {
        key = e.which;
        if (e.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    else
        return true;
    //alert(key);
    if (isCtrl) {
        for (i = 0; i < forbiddenKeys.length; i++) {
            //case-insensitive comparation				
            if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                alert('Key combination CTRL + '
                    + String.fromCharCode(key)
                    + ' has been disabled.');
                return false;
            }
        }
    }

    if ((key == 8) || (key == 0))
        return true;
    /*
     keychar = String.fromCharCode(key);
     keychar = keychar.toLowerCase();
     //alert(keychar);

     if(key!=32)
     { 

     invalids = "`~@#$%^*-()_+=\|{}[].:;'\"<>&?/!,\\";
     for(i=0; i<invalids.length; i++) {
     if(keychar != 0)
     {
     if(keychar.indexOf(invalids.charAt(i)) >= 0 || keychar==false) {				           			  
     //alert(keychar.indexOf(invalids.charAt(i)));
     return false;               
     }
     }
     }
     }
     return true;		
     */
}
function alphactrl(e) {
    var key;
    var keychar;
    var isCtrl;
    var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'j');
    if (window.event) {
        key = window.event.keyCode;
        if (window.event.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    } else if (e) {
        key = e.which;
        if (e.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    else
        return true;
    //alert(key);
    if (isCtrl) {
        for (i = 0; i < forbiddenKeys.length; i++) {
            //case-insensitive comparation				
            if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                alert('Key combination CTRL + '
                    + String.fromCharCode(key)
                    + ' has been disabled.');
                return false;
            }
        }
    }

    if ((key == 8) || (key == 0))
        return true;
    /*
     keychar = String.fromCharCode(key);
     keychar = keychar.toLowerCase();
     //alert(keychar);

     if(key!=32)
     { 

     invalids = "`~@#$%^*-()_+=\|{}[].:;'\"<>&?/!,\\";
     for(i=0; i<invalids.length; i++) {
     if(keychar != 0)
     {
     if(keychar.indexOf(invalids.charAt(i)) >= 0 || keychar==false) {				           			  
     //alert(keychar.indexOf(invalids.charAt(i)));
     return false;               
     }
     }
     }
     }
     return true;		
     */
}
function chkrrb() {
    rrb = get_radio_value(document.reg_frm.optrrb);
    if (rrb == 'Y') {
        showdiv("rrbid");
        document.reg_frm.txtrrb.disabled = false;
    }
    else {
        hidediv("rrbid");
        document.reg_frm.txtrrb.disabled = true;
        document.reg_frm.txtrrb.value = "";
    }
    getYears();
}
function certcompfunc() {
    certcomp = get_radio_value(document.reg_frm.certcomp);
    if (certcomp == 'Y') {
        document.reg_frm.txtcourpmth.disabled = false;
        document.reg_frm.txtcompinst.disabled = false;
    }
    else {
        document.reg_frm.txtcourpmth.disabled = true;
        document.reg_frm.txtcourpmth.value = "";

        document.reg_frm.txtcompinst.disabled = true;
        document.reg_frm.txtcompinst.value = "";
    }
}
function other_domain() {

    otherdomain = document.reg_frm.seldomain.value;
    //alert(otherdomain);
    if (otherdomain == "Others") {
        showdiv("othdomain");
        document.reg_frm.txtothdomain.disabled = false;
        document.reg_frm.txtothdomain.focus();
    }
    else {
        hidediv("othdomain");
        document.reg_frm.txtothdomain.disabled = true;
        document.reg_frm.txtothdomain.value = "";
    }
}

function checkCandidateName() {
    //document.getElementById('txtclerk_regno').readOnly = false;
    //document.getElementById('txtclerk_rollno').readOnly = false;
    var candiname_id = getAppliedpostCandidatenumber();
    candiname = candiname_id.split("|");

    if (candiname[0] == "1" && candiname[1] == "1") {
        document.getElementById('canidate_err').innerHTML = "<br />Invalid Access";
        //document.getElementById('txtclerk_regno').value = "";	
        //	document.getElementById('canidate_err').innerHTML = "<br />Invalid Access";
        //	document.getElementById('txtclerk_regno').value = "";
    }
    else if (candiname[0] == "0" && candiname[1] == "0") {
        document.getElementById('canidate_err').innerHTML = "<br />Registration Number Not Available";
        //document.getElementById('canidate_err').innerHTML = "<br />Roll Number Not Available";
        //document.getElementById('txtclerk_regno').value = "";
    } else {
        document.getElementById('canidate_err').innerHTML = "";
        //document.getElementById('txtclerk_regno').value = candiname[0];
        //document.getElementById('txtclerk_rollno').value = candiname[1];

    }

    /*
     if(candiname=="invalidaccess"){
     document.getElementById('canidate_err').innerHTML = "<br />Invalid Access";
     document.getElementById('txtclerk_regno').value = "";	
     document.getElementById('canidate_err').innerHTML = "<br />Invalid Access";
     document.getElementById('txtclerk_regno').value = "";
     }else if(candiname=="notmatched" || candiname=="0"){
     document.getElementById('canidate_err').innerHTML = "<br />Registration Number Not Available";
     document.getElementById('firstname').value = "";					
     }else{
     document.getElementById('txtclerk_regno').value = candiname; 
     document.getElementById('canidate_err').innerHTML= "";	
     } */
}

//Fetch the Candidate name from Number
function getAppliedpostCandidatenumber() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //candiregnum = document.getElementById('txtclerk_regno').value;
    //candirollnum = document.getElementById('txtclerk_rollno').value;
    xmlhttp.open("POST", 'ajax_candidate.php?canregno=' + candiregnum + '&candirollnum=' + candirollnum, false);
    xmlhttp.send(null);
    return xmlhttp.responseText;
}


function chkDischargeDate(chkday, chkmon, chkyear) {
    var d = document.getElementById(chkday).value;
    var m = document.getElementById(chkmon).value;
    var y = document.getElementById(chkyear).value;

    var dobd = document.getElementById("seldobday").value;
    var dobm = document.getElementById("seldobmon").value;
    var doby = document.getElementById("seldobyear").value;


    var chckDischargeDate = new Date(y, m - 1, d);
    if (dobd != "" && dobm != "" && doby != "") {
        var dobDate = new Date(doby, dobm - 1, dobd);
        if ((chckDischargeDate < dobDate)) {
            alert("Date of Discharge should not be less than Date of Birth");
            document.getElementById(chkday).focus();
            return false;
        }
    }
    var dat = CurrentDate.split(',');
    var todaysdate = new Date(dat[0], dat[1] - 1, dat[2]);

    if ((chckDischargeDate > todaysdate)) {
        alert("Date of Discharge should not be greater than today's date");
        ;
        document.getElementById(chkday).focus();
        return false;
    }
    return true;
}

function chkjoinDate(chkday, chkmon, chkyear) {
    var d = document.getElementById(chkday).value;
    var m = document.getElementById(chkmon).value;
    var y = document.getElementById(chkyear).value;

    var chckjoinDate = new Date(y, m - 1, d);

    var dobd = document.getElementById("seldobday").value;
    var dobm = document.getElementById("seldobmon").value;
    var doby = document.getElementById("seldobyear").value;

    if (dobd != "" && dobm != "" && doby != "") {
        var dobDate = new Date(doby, dobm - 1, dobd);
        if ((chckjoinDate < dobDate)) {
            alert("Date of Joining should not be less than Date of Birth");
            document.getElementById(chkday).focus();
            return false;
        }
    }
    var dat = CurrentDate.split(',');
    var todaysdate = new Date(dat[0], dat[1] - 1, dat[2]);

    if ((chckjoinDate > todaysdate)) {
        alert("Date of Joining should not be greater than today's date");
        ;
        document.getElementById(chkday).focus();
        return false;
    }
    return true;
}
function chkactsubwefDate(chkday, chkmon, chkyear) {
    var d = document.getElementById(chkday).value;
    var m = document.getElementById(chkmon).value;
    var y = document.getElementById(chkyear).value;

    var disd = document.getElementById("seldisday").value;
    var dism = document.getElementById("seldismon").value;
    var disy = document.getElementById("seldisyear").value;


    var varchckactsubwefDate = new Date(y, m - 1, d);
    if (disd != "" && dism != "" && disy != "") {
        var disDate = new Date(disy, dism - 1, disd);
        if ((varchckactsubwefDate > disDate)) {
            alert("Date of Acting w.e.f or Acting Substantive w.e.f should not be greater than Date of Discharge");
            document.getElementById(chkday).focus();
            return false;
        }
    }

    var dobd = document.getElementById("seldobday").value;
    var dobm = document.getElementById("seldobmon").value;
    var doby = document.getElementById("seldobyear").value;
    if (dobd != "" && dobm != "" && doby != "") {
        var dobDate = new Date(doby, dobm - 1, dobd);
        if ((varchckactsubwefDate < dobDate)) {
            alert("Date of Acting w.e.f or Acting Substantive w.e.f should not be less than Date of Birth");
            document.getElementById(chkday).focus();
            return false;
        }
    }
    var dat = CurrentDate.split(',');
    var todaysdate = new Date(dat[0], dat[1] - 1, dat[2]);

    if ((varchckactsubwefDate > todaysdate)) {
        alert("Date of Acting w.e.f or Acting Substantive w.e.f should not be greater than today's date");
        ;
        document.getElementById(chkday).focus();
        return false;
    }

    return true;
}

function checkallzeroes(str) {
    var zerostr = "";
    var len = str.length;
    for (j = 0; j < len; j++) {
        zerostr += "0";
    }
    if (str == zerostr)
        return false;
    return true;
}

function chkprofqual() {
    profqual = trim(document.reg_frm.selstream3.value);

    if (profqual == "Others") {
        showdiv("prof_other");
    }
    else {
        hidediv("prof_other");
        document.reg_frm.txtprofother.value = "";
    }
}
function catcode() {
    var cat = get_radio_value(document.reg_frm.opt_cat);
    var phy_challenge = get_radio_value(document.reg_frm.optdisability);
    var dtype = trim(document.getElementById('seldisabilitytype').value);
    var catcode = "";
    if (cat != "") {
        if (cat == "SC") {
            catcode = "01";
            if (phy_challenge == 'Y') {
                if (dtype == 'OH')
                    catcode = "02";
                else if (dtype == 'VH')
                    catcode = "03";
            }
        }
        if (cat == "ST") {
            catcode = "04";
            if (phy_challenge == 'Y') {
                if (dtype == 'OH')
                    catcode = "05";
                else if (dtype == 'VH')
                    catcode = "06";
            }
        }
        if (cat == "OBC") {
            catcode = "07";
            if (phy_challenge == 'Y') {
                if (dtype == 'OH')
                    catcode = "08";
                else if (dtype == 'VH')
                    catcode = "09";
            }
        }
        if (cat == "General") {
            catcode = "10";
            if (phy_challenge == 'Y') {
                if (dtype == 'OH')
                    catcode = "11";
                else if (dtype == 'VH')
                    catcode = "12";
            }
        }
    }
    document.getElementById('txtcatcode').value = catcode;
}

function gradspl() {
    var gradspl = trim(document.getElementById('selgradspl').value);
    if (gradspl != "") {
        if (gradspl == "Others") {
            showdiv("gradsploth");
            showdiv("gradsplpost1");
            hidediv("gradsplpost2");
            document.getElementById('selstream4').value = "";
        }
        else {
            showdiv("gradsplpost2");
            hidediv("gradsplpost1");
            hidediv("gradsploth");
            document.getElementById('selstream4post1').value = "";
            document.getElementById('txtgradsploth').value = "";

        }
    }
    else {
        hidediv("gradsplpost2");
        document.getElementById('selstream4').value = "";
        hidediv("gradsplpost1");
        document.getElementById('selstream4post1').value = "";
        hidediv("gradsploth");
        document.getElementById('txtgradsploth').value = "";
    }
}

function pgspl() {
    var pgspl = trim(document.getElementById('selpgspl').value);
    if (pgspl != "") {
        if (pgspl == "Others") {
            showdiv("pgsploth");
            //showdiv("gradsplpost1");
            //hidediv("gradsplpost2");
            //document.getElementById('selstream4').value="";
        }
        else {
            //showdiv("gradsplpost2");
            hidediv("pgsploth");
            //hidediv("gradsploth");
            //document.getElementById('selstream4post1').value="";
            document.getElementById('txtpgsploth').value = "";

        }
    }
    else {
        hidediv("pgsploth");
        //document.getElementById('selstream4').value="";
        //hidediv("gradsplpost1");
        //document.getElementById('selstream4post1').value="";
        //hidediv("gradsploth");
        document.getElementById('txtpgsploth').value = "";
    }
}
function checkdisability1() {
    //getYears();
    //calculatefee();


    if (document.getElementById('optdisability1').checked == true) {
        if (document.getElementById('optdisability1').value = 'Y') {

            document.getElementById('seldisabilitytype1').disabled = false;

            // only for VC and OC candidate
            //document.getElementById('seldisabilityper').disabled=false;
            //document.reg_frm.optscribe[0].disabled=false;
            //document.reg_frm.optscribe[1].disabled=false;

            //document.getElementById('optscribe').disabled=false;


            // this 2 lines commented to check for scribe disable
            // document.reg_frm.optscribe[0].disabled=false;
            // document.reg_frm.optscribe[1].disabled=false;
        } else if (document.getElementById('optdisability1').value = 'N') {
            document.getElementById('seldisabilitytype1').value = '';
            document.getElementById('seldisabilitytype1').disabled = true;
            document.getElementById('seldisabilityper').value = '';
            document.getElementById('seldisabilityper').disabled = true;
            //document.getElementById('optscribe').value='';  	
            //document.getElementById('optscribe').disabled=true; 
            // document.reg_frm.optscribe[0].disabled=true;
            // document.reg_frm.optscribe[1].disabled=true;
            // document.reg_frm.optscribe[1].checked=true;
            // document.reg_frm.optscribe[0].disabled=true;
            // document.reg_frm.optscribe[1].disabled=true;
        }
    } else {
        document.getElementById('seldisabilitytype1').value = '';
        document.getElementById('seldisabilitytype1').disabled = true;
        document.getElementById('seldisabilityper').value = '';
        document.getElementById('seldisabilityper').disabled = true;
        // document.getElementById('optscribe').value='';  	
        //document.getElementById('optscribe').disabled=true;
        //	document.reg_frm.optscribe[0].disabled=true;
        // document.reg_frm.optscribe[1].disabled=true;
        // document.reg_frm.optscribe[1].checked=true;
        // document.reg_frm.optscribe[0].disabled=true;
        //	 document.reg_frm.optscribe[1].disabled=true;

    }

}


function Typeofdisability() {


    if (document.getElementById('seldisabilitytype1').value != "HI" &&
        document.getElementById('seldisabilitytype1').value != "") {

        document.getElementById('seldisabilityper').disabled = false;
        // document.reg_frm.optscribe[0].disabled=false;
        //document.reg_frm.optscribe[1].disabled=false;


    }
    else {
        document.getElementById('seldisabilityper').value = "";
        //   document.reg_frm.optscribe[0].checked="false";
        //   document.reg_frm.optscribe[1].checked="false";
        document.getElementById('seldisabilityper').disabled = true;
        // document.reg_frm.optscribe[0].disabled=true;
        //document.reg_frm.optscribe[1].disabled=true;
    }
}
/*function chkAddPost()
 {	
 if(document.reg_frm.optaddpost[0].checked == true && document.getElementById('selpost').value != "")
 { 		   		  
 if(document.reg_frm.optaddpost[0].value=='Y')
 {			 
 document.getElementById('seladdpost').disabled=false;
 }else if(document.reg_frm.optaddpost[1].value=='N')
 {
 var frm=document.reg_frm;
 document.getElementById('seladdpost').value='';  	
 document.getElementById('seladdpost').disabled=true;
 //document.getElementById('othreligion').value='';  	



 }
 }else{
 var frm=document.reg_frm;
 document.getElementById('seladdpost').value='';  	
 document.getElementById('seladdpost').disabled=true;
 document.getElementById('txtregno').value="";
 hidediv("divaddlpost");

 // document.getElementById('othreligion').value='';  	
 //document.getElementById('txtothdomain').disabled=true;

 removed the above line and added below three lines ,
 to disable the othertext box completely from front end  and added var frm=document.reg_frm;
 // hidediv("othdomain");
 // frm.txtothdomain.disabled=true;
 // frm.txtothdomain.value="";
 }
 }*/
function centreOfExam() {
    if (document.getElementById('selpost').value != "") {
        if (document.getElementById('selpost').value == "08" ||
            document.getElementById('selpost').value == "09" ||
            document.getElementById('selpost').value == "10" ||
            document.getElementById('selpost').value == "11" ||
            document.getElementById('selpost').value == "13" ||
            document.getElementById('selpost').value == "14" ||
            document.getElementById('selpost').value == "15" ||
            document.getElementById('selpost').value == "17" ||
            document.getElementById('selpost').value == "18" ||
            document.getElementById('selpost').value == "19" ||
            document.getElementById('selpost').value == "20" ||
            document.getElementById('selpost').value == "21") {
            document.getElementById('selexamcentre').disabled = false;
        }
        else {


            document.getElementById('selexamcentre').disabled = true;
            document.reg_frm.selexamcentre.value = "";
            document.reg_frm.txtcentrecode.value = "";


        }
    }
    else {
        document.getElementById('selexamcentre').disabled = true;
        document.reg_frm.selexamcentre.value = "";
        document.reg_frm.txtcentrecode.value = "";
    }
}

/*function PrintAddPost()
 {

 if(document.getElementById('selpost').value !="")
 {
 var selpost=document.getElementById('selpost').value;
 document.getElementById('seladdpost').options.length=0;
 document.getElementById('seladdpost').options[0] = new Option('Select','');
 // hiding the add post and  textbox and making it null
 document.getElementById('txtregno').value="";
 hidediv("divaddlpost");
 var x=1;



 for (var val in arrothpostapplied)
 {			
 if(val != selpost)
 {		
 //alert("came in");
 document.getElementById('seladdpost').options[x] = new Option(arrothpostapplied[val],val);
 x=x+1;

 }
 }

 }
 else
 {
 // making the add post value as null and hiding div of addpost textbox
 document.getElementById('seladdpost').options.length=0;
 document.getElementById('seladdpost').options[0] = new Option('Select','');
 document.getElementById('txtregno').value="";
 hidediv("divaddlpost");
 }
 chkAddPost();

 }*/
function addl_post() {
    if (document.getElementById('selpost').value != "" && document.getElementById('seladdpost').value != "") {
        showdiv("divaddlpost");
    }
    else {

        document.getElementById('txtregno').value = "";
        hidediv("divaddlpost");
    }
}
function enable_spouse() {
    if (document.getElementById('marital_status').value != "" && document.getElementById('marital_status').value == "Married") {

        document.reg_frm.spouse_name.disabled = false;
        document.reg_frm.spouse_org.disabled = false;
    }
    else if (document.getElementById('marital_status').value != "Married") {
        document.reg_frm.spouse_name.value = '';
        document.reg_frm.spouse_name.disabled = true;
        document.reg_frm.spouse_org.value = '';
        document.reg_frm.spouse_org.disabled = true;
    }
    else if (document.getElementById('marital_status').value == "") {
        document.reg_frm.spouse_name.value = '';
        document.reg_frm.spouse_name.disabled = true;
        document.reg_frm.spouse_org.value = '';
        document.reg_frm.spouse_org.disabled = true;
    }

}
function prof_body() {
    var prof_body_chk = 0;
    if ((trim(document.getElementById('prof_body').value) != '') || (trim(document.getElementById('prof_body_reg_day').value) != '') || (trim(document.getElementById('prof_body_reg_mon').value) != '') || (trim(document.getElementById('prof_body_reg_year').value) != '') || (trim(document.getElementById('prof_body_regn_no').value) != ''))
    //if( !checkbox_value('chklang1[]') )
    {
        prof_body_chk = 1;
    }
    if (prof_body_chk == 1) {
        if (trim(document.getElementById('prof_body').value) == '') {
            alert("Name of the Professional Body cannot be blank");
            document.getElementById("prof_body").focus();
            return false;
        }
        if (trim(document.getElementById('prof_body_reg_day').value) == '') {
            alert("Date of registration Day cannot be blank");
            document.getElementById("prof_body_reg_day").focus();
            return false;
        }
        if (trim(document.getElementById('prof_body_reg_mon').value) == '') {
            alert("Date of registration Month cannot be blank");
            document.getElementById("prof_body_reg_mon").focus();
            return false;
        }
        if (trim(document.getElementById('prof_body_reg_year').value) == '') {
            alert("Date of registration Year cannot be blank");
            document.getElementById("prof_body_reg_year").focus();
            return false;
        }
        if (trim(document.getElementById('prof_body_reg_day').value) != '' && trim(document.getElementById('prof_body_reg_mon').value) != '' && trim(document.getElementById('prof_body_reg_year').value) != '') {
            varRegDate = document.getElementById('prof_body_reg_mon').value + '/' + document.getElementById('prof_body_reg_day').value + '/' + document.getElementById('prof_body_reg_year').value;

            if (!isDatechk(varRegDate)) {
                alert("Invalid Date Of Registration.");
                document.getElementById('prof_body_reg_day').focus();
                return false;
            }
            if (!chkLessThanBirthGreaterThanCurrentDate(document.getElementById('prof_body_reg_day').value, document.getElementById('prof_body_reg_mon').value, document.getElementById('prof_body_reg_year').value, "ProfBody")) {
                return false;
            }
        }
        if (trim(document.getElementById('prof_body_regn_no').value) == '') {
            alert("Registration Number cannot be blank");
            document.getElementById("prof_body_regn_no").focus();
            return false;
        }
    }
    return true;
}
function spl_train() {
    var spl_train_chk = 0;
    if ((trim(document.getElementById('spl_train_inst_name').value) != '') || (trim(document.getElementById('spl_train_from_day').value) != '') || (trim(document.getElementById('spl_train_from_mon').value) != '') || (trim(document.getElementById('spl_train_from_year').value) != '') || (trim(document.getElementById('spl_train_to_day').value) != '') || (trim(document.getElementById('spl_train_to_mon').value) != '') || (trim(document.getElementById('spl_train_to_year').value) != '') || (trim(document.getElementById('spl_train_topic').value) != ''))
    //if( !checkbox_value('chklang1[]') )
    {
        spl_train_chk = 1;
    }
    if (spl_train_chk == 1) {
        if (trim(document.getElementById('spl_train_inst_name').value) == '') {
            alert("Name of the Institute cannot be blank");
            document.getElementById("spl_train_inst_name").focus();
            return false;
        }
        if (trim(document.getElementById('spl_train_from_day').value) == '') {
            alert("Period of Training From Day cannot be blank");
            document.getElementById("spl_train_from_day").focus();
            return false;
        }
        if (trim(document.getElementById('spl_train_from_mon').value) == '') {
            alert("Period of Training From Month cannot be blank");
            document.getElementById("spl_train_from_mon").focus();
            return false;
        }
        if (trim(document.getElementById('spl_train_from_year').value) == '') {
            alert("Period of Training From Year cannot be blank");
            document.getElementById("spl_train_from_year").focus();
            return false;
        }
        if (trim(document.getElementById('spl_train_from_day').value) != '' && trim(document.getElementById('spl_train_from_mon').value) != '' && trim(document.getElementById('spl_train_from_year').value) != '') {
            varRegDate = document.getElementById('spl_train_from_mon').value + '/' + document.getElementById('spl_train_from_day').value + '/' + document.getElementById('spl_train_from_year').value;

            if (!isDatechk(varRegDate)) {
                alert("Invalid Date Of Period of Training From.");
                document.getElementById('spl_train_from_day').focus();
                return false;
            }
            if (!chkLessThanBirthGreaterThanCurrentDate(document.getElementById('spl_train_from_day').value, document.getElementById('spl_train_from_mon').value, document.getElementById('spl_train_from_year').value, "SplTrain")) {
                return false;
            }
        }
        if (trim(document.getElementById('spl_train_to_day').value) == '') {
            alert("Period of Training To Day cannot be blank");
            document.getElementById("spl_train_to_day").focus();
            return false;
        }
        if (trim(document.getElementById('spl_train_to_mon').value) == '') {
            alert("Period of Training To Month cannot be blank");
            document.getElementById("spl_train_to_mon").focus();
            return false;
        }
        if (trim(document.getElementById('spl_train_to_year').value) == '') {
            alert("Period of Training To Year cannot be blank");
            document.getElementById("spl_train_to_year").focus();
            return false;
        }
        if (trim(document.getElementById('spl_train_to_day').value) != '' && trim(document.getElementById('spl_train_to_mon').value) != '' && trim(document.getElementById('spl_train_to_year').value) != '') {
            varRegDate = document.getElementById('spl_train_to_mon').value + '/' + document.getElementById('spl_train_to_day').value + '/' + document.getElementById('spl_train_to_year').value;

            if (!isDatechk(varRegDate)) {
                alert("Invalid Date Of Period of Training To.");
                document.getElementById('spl_train_to_day').focus();
                return false;
            }
            if (!chkSplTrainFromToDate(document.getElementById('spl_train_to_day').value, document.getElementById('spl_train_to_mon').value, document.getElementById('spl_train_to_year').value, "SplTrain")) {
                return false;
            }
        }
        if (trim(document.getElementById('spl_train_topic').value) == '') {
            alert("Topic cannot be blank");
            document.getElementById("spl_train_topic").focus();
            return false;
        }
    }
    return true;
}
function reference() {
    var reference_chk = 0;
    if ((trim(document.getElementById('refer_name').value) != '') || (trim(document.getElementById('refer_desg').value) != '') || (trim(document.getElementById('refer_addr').value) != '') || (trim(document.getElementById('disc_proc_det').value) != ''))
    //if( !checkbox_value('chklang1[]') )
    {
        reference_chk = 1;
    }
    if (reference_chk == 1) {
        if (trim(document.getElementById('refer_name').value) == '') {
            alert("Reference Name cannot be blank");
            document.getElementById("refer_name").focus();
            return false;
        }
        if (trim(document.getElementById('refer_desg').value) == '') {
            alert("Reference Designation cannot be blank");
            document.getElementById("refer_desg").focus();
            return false;
        }
        if (trim(document.getElementById('refer_addr').value) == '') {
            alert("Reference Address cannot be blank");
            document.getElementById("refer_addr").focus();
            return false;
        }
        /*
         if(trim(document.getElementById('disc_proc_det').value) == '')
         {
         alert("Period of Training From Year cannot be blank");
         document.getElementById("disc_proc_det").focus();
         return false;
         }
         */
    }
    return true;
}
function chkLessThanBirthGreaterThanCurrentDate(d, m, y, callfrom) {
    //var d=document.getElementById("seldisday").value;
    //var m=document.getElementById("seldismon").value;
    //var y=document.getElementById("seldisyear").value;

    var dobd = document.getElementById("seldobday").value;
    var dobm = document.getElementById("seldobmon").value;
    var doby = document.getElementById("seldobyear").value;

    var chckDisDate = new Date(y, m - 1, d);
    if (dobd != "" && dobm != "" && doby != "")
        var chckDobDate = new Date(doby, dobm - 1, dobd);

    var dat = CurrentDate.split(',');
    var todaysdate = new Date(dat[0], dat[1] - 1, dat[2]);

    if ((chckDisDate > todaysdate)) {
        if (callfrom == "ProfBody") {
            alert('Date of registration cannot be greater than Current Date');
            document.getElementById("prof_body_reg_day").focus();
        }
        if (callfrom == "SplTrain") {
            alert('Period of Training From cannot be greater than Current Date');
            document.getElementById("spl_train_from_day").focus();
        }
        return false;
    }
    if (dobd != "" && dobm != "" && doby != "") {
        if ((chckDisDate < chckDobDate)) {
            if (callfrom == "ProfBody") {
                alert('Date of registration cannot be less than Date of Birth');
                document.getElementById("prof_body_reg_day").focus();
            }
            if (callfrom == "SplTrain") {
                alert('Period of Training From cannot be less than Date of Birth');
                document.getElementById("spl_train_from_day").focus();
            }
            return false;
        }
    }
    return true;
}
function chkSplTrainFromToDate(d, m, y, callfrom) {
    var spltrainfromd = document.getElementById("spl_train_from_day").value;
    var spltrainfromm = document.getElementById("spl_train_from_mon").value;
    var spltrainfromy = document.getElementById("spl_train_from_year").value;

    var chckDisDate = new Date(y, m - 1, d);
    if (spltrainfromd != "" && spltrainfromm != "" && spltrainfromy != "")
        var chckspltrainfromDate = new Date(spltrainfromy, spltrainfromm - 1, spltrainfromd);

    if (spltrainfromd != "" && spltrainfromm != "" && spltrainfromy != "") {
        if ((chckDisDate < chckspltrainfromDate)) {
            if (callfrom == "SplTrain") {
                alert('Date Of Period of Training To cannot be less than Date Of Period of Training From');
                document.getElementById("spl_train_from_day").focus();
            }
            return false;
        }
    }
    return true;
}

function disablefee() {


    var optsidbioffrvalue = get_radio_value(document.reg_frm.optsidbioffr);

    if (optsidbioffrvalue == "Y") {
        document.reg_frm.txtjournalno.value = '';
        document.reg_frm.txtjournalno.disabled = true;

        document.reg_frm.txtcjournalno.value = '';
        document.reg_frm.txtcjournalno.disabled = true;

        document.reg_frm.txtbrname.value = '';
        document.reg_frm.txtbrname.disabled = true;

        document.reg_frm.txtbranchcode.value = '';
        document.reg_frm.txtbranchcode.disabled = true;

        document.reg_frm.seldepday.value = '';
        document.reg_frm.seldepday.disabled = true;

        document.reg_frm.seldepmon.value = '';
        document.reg_frm.seldepmon.disabled = true;

        document.reg_frm.seldepyear.value = '';
        document.reg_frm.seldepyear.disabled = true;

        document.reg_frm.txtfee.value = '';
        //document.reg_frm.txtfee.disabled=true;
    }
    else if (optsidbioffrvalue == "N") {

        document.reg_frm.txtjournalno.disabled = false;
        document.reg_frm.txtjournalno.value = '';


        document.reg_frm.txtcjournalno.disabled = false;
        document.reg_frm.txtcjournalno.value = '';


        document.reg_frm.txtbrname.disabled = false;
        document.reg_frm.txtbrname.value = '';


        document.reg_frm.txtbranchcode.disabled = false;
        document.reg_frm.txtbranchcode.value = '';


        document.reg_frm.seldepday.disabled = false;
        document.reg_frm.seldepday.value = '';


        document.reg_frm.seldepmon.disabled = false;
        document.reg_frm.seldepmon.value = '';


        document.reg_frm.seldepyear.disabled = false;
        document.reg_frm.seldepyear.value = '';


        //document.reg_frm.txtfee.disabled=true;
        document.reg_frm.txtfee.value = '';
    }

    //document.reg_frm.selpetcentre.value='';
    //document.reg_frm.selpetcentre.disabled=true;	
    //txtjournalno
    //txtcjournalno
    //txtbrname
    //txtbranchcode
    //seldepday,seldepmon,seldepyear

    //txtfee
}

function disableotherobc() {


    if (document.reg_frm.selpost.value == "02") {


        document.reg_frm.opt_cat[0].checked = false;
        document.reg_frm.opt_cat[0].disabled = true;

        document.reg_frm.opt_cat[2].checked = false;
        document.reg_frm.opt_cat[2].disabled = true;

        document.reg_frm.opt_cat[3].checked = false;
        document.reg_frm.opt_cat[3].disabled = true;


        document.reg_frm.opt_cat[1].checked = false;
        document.reg_frm.opt_cat[1].disabled = false;

    }
    else {

        document.reg_frm.opt_cat[0].checked = false;
        document.reg_frm.opt_cat[0].disabled = false;

        document.reg_frm.opt_cat[2].checked = false;
        document.reg_frm.opt_cat[2].disabled = false;

        document.reg_frm.opt_cat[3].checked = false;
        document.reg_frm.opt_cat[3].disabled = false;


        document.reg_frm.opt_cat[1].checked = false;
        document.reg_frm.opt_cat[1].disabled = false;

    }


}

function releaseretservice() {


    stillservex_val = get_radio_value(document.reg_frm.stillservex);
    if (stillservex_val == "Y") {

        document.reg_frm.retday.disabled = false;
        document.reg_frm.retday.value = '';


        document.reg_frm.retmon.disabled = false;
        document.reg_frm.retmon.value = '';


        document.reg_frm.retyear.disabled = false;
        document.reg_frm.retyear.value = '';

    }
    else {
        document.reg_frm.retday.disabled = true;
        document.reg_frm.retday.value = '';


        document.reg_frm.retmon.disabled = true;
        document.reg_frm.retmon.value = '';


        document.reg_frm.retyear.disabled = true;
        document.reg_frm.retyear.value = '';
    }
}
function disablecomputerqual() {


    computerknowledge_val = get_radio_value(document.reg_frm.computerknowledge);
//alert(document.reg_frm.txtqualcompdet.value);		
    if (computerknowledge_val == "Y") {

        document.reg_frm.txtqualcompdet.disabled = false;
        document.reg_frm.txtqualcompdet.value = '';
    }
    else {
        document.reg_frm.txtqualcompdet.disabled = true;
        document.reg_frm.txtqualcompdet.value = '';
    }
}

function disablepercentage() {


    diplomainbank_val = get_radio_value(document.reg_frm.optdipbank);
//alert(document.reg_frm.txtqualcompdet.value);		
    if (diplomainbank_val == "Y") {

        document.reg_frm.txtdipmark.disabled = false;
        document.reg_frm.txtdipmark.value = '';
    }
    else {
        document.reg_frm.txtdipmark.disabled = true;
        document.reg_frm.txtdipmark.value = '';
    }
}

function enablestillserving() {


    optexservice_val = get_radio_value(document.reg_frm.optexservice);
    if (optexservice_val == "Y") {


        document.reg_frm.stillservex[0].checked = false;
        document.reg_frm.stillservex[0].disabled = false;

        document.reg_frm.stillservex[1].checked = true;
        document.reg_frm.stillservex[1].disabled = false;


        /*
         document.reg_frm.retday.disabled=false;
         document.reg_frm.retday.value='';
         document.reg_frm.retmon.disabled=false;
         document.reg_frm.retmon.value='';
         document.reg_frm.retyear.disabled=false;
         document.reg_frm.retyear.value='';
         */

    }
    else {
        document.reg_frm.stillservex[0].checked = false;
        document.reg_frm.stillservex[0].disabled = false;
        document.reg_frm.stillservex[1].checked = false;
        document.reg_frm.stillservex[1].disabled = false;


        //if exsevicemen is  NO then we are disabling the If Yes, Date of Release / Retirement from Service :
        document.reg_frm.retday.disabled = true;
        document.reg_frm.retday.value = '';
        document.reg_frm.retmon.disabled = true;
        document.reg_frm.retmon.value = '';
        document.reg_frm.retyear.disabled = true;
        document.reg_frm.retyear.value = '';


    }

}


function periodofservice() {


    optexservice_val = get_radio_value(document.reg_frm.optexservice);
    optdisxs_val = get_radio_value(document.reg_frm.optdisxs);
    if (optexservice_val == "Y" || optdisxs_val == "Y") {

        document.reg_frm.txtperiodofserv.disabled = false;
        //document.reg_frm.txtperiodofserv.value='';
    }
    else {
        document.reg_frm.txtperiodofserv.disabled = true;
        document.reg_frm.txtperiodofserv.value = '';
    }
}

// this function is for enabling  EITHER exserviceman,disableexserviceman,dependentexserviceman 
function essdxsdisxs(inputparam) {

    optexservice_val = get_radio_value(document.reg_frm.optexservice);

    optdisxs_val = get_radio_value(document.reg_frm.optdisxs);
    //optdxs_val=get_radio_value(document.reg_frm.optdxs);
    /*if(inputparam == "optexservice")
     {
     if(optexservice_val == 'Y')
     {
     document.reg_frm.optdisxs[0].disabled=true;
     document.reg_frm.optdisxs[1].disabled=true;
     document.reg_frm.optdisxs[1].checked=true;

     document.reg_frm.optdxs[0].disabled=true;
     document.reg_frm.optdxs[1].disabled=true;
     document.reg_frm.optdxs[1].checked=true;
     }
     else
     {
     document.reg_frm.optdisxs[0].disabled=false;
     document.reg_frm.optdisxs[1].disabled=false;
     document.reg_frm.optdisxs[1].checked=true;

     document.reg_frm.optdxs[0].disabled=false;
     document.reg_frm.optdxs[1].disabled=false;
     document.reg_frm.optdxs[1].checked=true;
     }
     }
     if(inputparam == "optdisxs")
     {
     if(optdisxs_val == 'Y')
     {
     document.reg_frm.optexservice[0].disabled=true;
     document.reg_frm.optexservice[1].disabled=true;
     document.reg_frm.optexservice[1].checked=true;

     document.reg_frm.optdxs[0].disabled=true;
     document.reg_frm.optdxs[1].disabled=true;
     document.reg_frm.optdxs[1].checked=true;
     }
     else
     {
     document.reg_frm.optexservice[0].disabled=false;
     document.reg_frm.optexservice[1].disabled=false;
     document.reg_frm.optexservice[1].checked=true;

     document.reg_frm.optdxs[0].disabled=false;
     document.reg_frm.optdxs[1].disabled=false;
     document.reg_frm.optdxs[1].checked=true;
     }
     }

     if(inputparam == "optdxs")
     {
     if(optdxs_val == 'Y')
     {
     document.reg_frm.optexservice[0].disabled=true;
     document.reg_frm.optexservice[1].disabled=true;
     document.reg_frm.optexservice[1].checked=true;

     document.reg_frm.optdisxs[0].disabled=true;
     document.reg_frm.optdisxs[1].disabled=true;
     document.reg_frm.optdisxs[1].checked=true;
     }
     else
     {
     document.reg_frm.optexservice[0].disabled=false;
     document.reg_frm.optexservice[1].disabled=false;
     document.reg_frm.optexservice[1].checked=true;

     document.reg_frm.optdisxs[0].disabled=false;
     document.reg_frm.optdisxs[1].disabled=false;
     document.reg_frm.optdisxs[1].checked=true;
     }
     }  
     */
    if (optexservice_val == "Y")
    //if(optexservice_val =="Y")
    {

        document.reg_frm.txtexserper.disabled = false;
        //document.reg_frm.txtperiodofserv.value='';
    }
    else {
        document.reg_frm.txtexserper.disabled = true;
        document.reg_frm.txtexserper.value = '';
    }
    /*

     if(optexservice_val =="Y" || optdisxs_val =="Y"  )
     //if(optexservice_val =="Y")
     {

     document.reg_frm.txtperiodofserv.disabled=false;
     //document.reg_frm.txtperiodofserv.value='';
     }
     else
     {
     document.reg_frm.txtperiodofserv.disabled=true;
     document.reg_frm.txtperiodofserv.value='';
     }
     */
}

/*function getexamcentre()
 {			
 document.getElementById('txtcentrecode').value='';
 if(document.getElementById('selstateapply').value !='')
 {		
 var selstate=document.getElementById('selstateapply').value;		
 document.getElementById('selexamcentre').options.length=0;
 document.getElementById('selexamcentre').options[0] = new Option('Select','');
 var x=1;
 for (var val in arrexamcentrestatemap)
 {
 if(selstate == arrexamcentrestatemap[val])
 {				
 //document.getElementById('err_div').innerHTML=document.getElementById('err_div').innerHTML+val+'\n';	
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);
 x=x+1;
 }
 }

 if(selstate =="17")
 {
 val="14";
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);
 val="17";
 document.getElementById('selexamcentre').options[x+1] = new Option(arrexamcentre[val],val);
 }
 if(selstate =="16")
 {
 val="17";
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);			
 }
 if(selstate =="31")
 {
 val="27";
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);
 val="28";
 document.getElementById('selexamcentre').options[x+1] = new Option(arrexamcentre[val],val);
 val="29";
 document.getElementById('selexamcentre').options[x+2] = new Option(arrexamcentre[val],val);
 }
 if(selstate =="14")
 {
 val="27";
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);			
 }
 if(selstate =="30")
 {
 val="31";
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);
 val="32";
 document.getElementById('selexamcentre').options[x+1] = new Option(arrexamcentre[val],val);			
 }
 if(selstate =="35" || selstate =="33" || selstate =="28")
 {
 val="38";
 document.getElementById('selexamcentre').options[x] = new Option(arrexamcentre[val],val);			
 }

 }else{
 document.getElementById('selexamcentre').options.length=0;
 document.getElementById('selexamcentre').options[0] = new Option('Select','');
 }	
 }*/

function getexamcentre() {
    var x = 1;
    document.getElementById('selexamcentre').options.length = 0;
    document.getElementById('selexamcentre').options[0] = new Option('Select', '');
    document.reg_frm.txtcentrecode.value = '';
    company_apply = document.getElementById('selstateapplied').value;
//alert(state_apply);
//confirmed_employe=get_radio_value(document.reg_frm.confirmed_employe);
    var centre_list = '';
//var addyear=0;
    if (company_apply != "") {
        centre_list = getCentrefromajax();
        if (centre_list.indexOf(",") == -1) {
            var centre_info = centre_list.split("|");
            centre_code = centre_info[0].toString();
            centre_value = centre_info[1].toString();
            document.getElementById('selexamcentre').options[x] = new Option(centre_value, centre_code);
        }
        else {
            var centre_multiple = centre_list.split(",");
            for (i = 0; i < centre_multiple.length; i++) {
                centre_list = centre_multiple[i];
                var centre_info = centre_list.split("|");
                centre_code = centre_info[0].toString();
                centre_value = centre_info[1].toString();
                document.getElementById('selexamcentre').options[x] = new Option(centre_value, centre_code);
                x++;
            }
        }

    }
}//end of function getYears()

function getCentrefromajax() {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    state_apply = document.getElementById('selstateapplied').value;
//alert(state_apply);
    xmlhttp.open("POST", 'ajax_getCentre.php?selcompany=' + state_apply, false);
//xmlhttp.open("POST",'ajax_checkImageStatus.php?imagename='+imagename_1+imagename_2+imagename_3+imagename_4+imagename_5+'&imagetype=signature',false);
    xmlhttp.send(null);
    return xmlhttp.responseText;
}


function getexamcat() {
    var x = 1;
    document.getElementById('opt_cat').options.length = 0;
    document.getElementById('opt_cat').options[0] = new Option('Select', '');
    document.reg_frm.txtcentrecode.value = '';
    company_apply = document.getElementById('selstateapplied').value;
//alert(state_apply);
//confirmed_employe=get_radio_value(document.reg_frm.confirmed_employe);
    var centre_list = '';
//var addyear=0;
    if (company_apply != "") {
        centre_list = getCatfromajax();
        if (centre_list.indexOf(",") == -1) {
            var centre_info = centre_list.split("|");
            centre_code = centre_info[0].toString();
            centre_value = centre_info[1].toString();
            document.getElementById('opt_cat').options[x] = new Option(centre_value, centre_code);
        }
        else {
            var centre_multiple = centre_list.split(",");
            for (i = 0; i < centre_multiple.length; i++) {
                centre_list = centre_multiple[i];
                var centre_info = centre_list.split("|");
                centre_code = centre_info[0].toString();
                centre_value = centre_info[1].toString();
                document.getElementById('opt_cat').options[x] = new Option(centre_value, centre_code);
                x++;
            }
        }

    }
}//end of function getYears()

function getCatfromajax() {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    state_apply = document.getElementById('selstateapplied').value;
//alert(state_apply);
    xmlhttp.open("POST", 'ajax_getCat.php?selcompany=' + state_apply, false);
//xmlhttp.open("POST",'ajax_checkImageStatus.php?imagename='+imagename_1+imagename_2+imagename_3+imagename_4+imagename_5+'&imagetype=signature',false);
    xmlhttp.send(null);
    return xmlhttp.responseText;
}


function getofflang(ctrlref) {
    //document.getElementById('txtcentrecode').value='';
    //alert(ctrlref);
    if (ctrlref == '1') {
        if (document.getElementById('selstatepref1').value != '') {
            var selstatepref1 = document.getElementById('selstatepref1').value;
            document.getElementById('selofflang1').options.length = 0;
            document.getElementById('selofflang1').options[0] = new Option('Select', '');
            var x = 1;
            for (var val in arrStatePrefMapping) {
                if (selstatepref1 == arrStatePrefMapping[val]) {
                    //document.getElementById('err_div').innerHTML=document.getElementById('err_div').innerHTML+val+'\n';	
                    document.getElementById('selofflang1').options[x] = new Option(arrOffLang[val], val);
                    x = x + 1;
                }
            }
        } else {
            document.getElementById('selofflang1').options.length = 0;
            document.getElementById('selofflang1').options[0] = new Option('Select', '');
        }
    }
    if (ctrlref == '2') {
        if (document.getElementById('selstatepref2').value != '') {
            var selstatepref2 = document.getElementById('selstatepref2').value;
            document.getElementById('selofflang2').options.length = 0;
            document.getElementById('selofflang2').options[0] = new Option('Select', '');
            var x = 1;
            for (var val in arrStatePrefMapping) {
                if (selstatepref2 == arrStatePrefMapping[val]) {
                    //document.getElementById('err_div').innerHTML=document.getElementById('err_div').innerHTML+val+'\n';	
                    document.getElementById('selofflang2').options[x] = new Option(arrOffLang[val], val);
                    x = x + 1;
                }
            }
        } else {
            document.getElementById('selofflang2').options.length = 0;
            document.getElementById('selofflang2').options[0] = new Option('Select', '');
        }
    }
    if (ctrlref == '3') {
        if (document.getElementById('selstatepref3').value != '') {
            var selstatepref3 = document.getElementById('selstatepref3').value;
            document.getElementById('selofflang3').options.length = 0;
            document.getElementById('selofflang3').options[0] = new Option('Select', '');
            var x = 1;
            for (var val in arrStatePrefMapping) {
                if (selstatepref3 == arrStatePrefMapping[val]) {
                    //document.getElementById('err_div').innerHTML=document.getElementById('err_div').innerHTML+val+'\n';	
                    document.getElementById('selofflang3').options[x] = new Option(arrOffLang[val], val);
                    x = x + 1;
                }
            }
        } else {
            document.getElementById('selofflang3').options.length = 0;
            document.getElementById('selofflang3').options[0] = new Option('Select', '');
        }
    }
}

function chk_old_new_values() {
    fields_changed_name = "";
    fields_changed = "no";

    var quote = new Array();
    var k = 0;

// THIS CODE IS FOR Deena BANK 
//REMOVE THE COMMENT WHILE EDIT
//quote[k]="selstateapplied,state_applied_db,dropdown,1";k=funcadd(k);
    quote[k] = "opt_cat,category_name_db,radiobutton,1";
    k = funcadd(k);
    quote[k] = "optdisability,disability_db,radiobutton,2";
    k = funcadd(k);
    quote[k] = "seldisabilitytype,disability_type_db,dropdown,3";
    k = funcadd(k);
    quote[k] = "seldisabilityper,disability_per_db,dropdown,4";
    k = funcadd(k);
    quote[k] = "optscribe,scribe_db,radiobutton,5";
    k = funcadd(k);
    quote[k] = "txtcatcode,cat_code_db,textbox,250";
    k = funcadd(k);
//quote[k]="riots,riots_db,radiobutton,6";k=funcadd(k);
    quote[k] = "optkashmir,state_jk_db,radiobutton,7";
    k = funcadd(k);

    quote[k] = "optminority,minority_db,radiobutton,8";
    k = funcadd(k);
    quote[k] = "selminority,religion_db,dropdown,9";
    k = funcadd(k);
//quote[k]="othreligion,religion_other_db,textbox,10";k=funcadd(k);
//quote[k]="barcouncilno,barcouncilno_db,textbox,207";k=funcadd(k);
//quote[k]="selcouncilday,selcouncilday_db,dropdown,208";k=funcadd(k);
//quote[k]="selcouncilmon,selcouncilmon_db,dropdown,209";k=funcadd(k);
//quote[k]="selcouncilyr,selcouncilyr_db,dropdown,210";k=funcadd(k);
//quote[k]="optwrk_exp,optwrk_exp_db,radiobutton,11";k=funcadd(k);
//quote[k]="txtexp_yrs,txtexp_yrs_db,textbox,12";k=funcadd(k);

    quote[k] = "optexservice,exserviceman_db,radiobutton,13";
    k = funcadd(k);
//quote[k]="optdisxs,optdisxs_db,radiobutton,14";k=funcadd(k);
    quote[k] = "txt_exser_no,ex_ser_per_db,textbox,15";
    k = funcadd(k);
//quote[k]="optdxs,optdxs_db,radiobutton,16";k=funcadd(k);	
//quote[k]="opt_widow,opt_widow_db,radiobutton,17";k=funcadd(k);
//quote[k]="txtnationality,nationality_db,dropdown,18";k=funcadd(k);

    quote[k] = "selstateapplied,state_code_db,dropdown,19";
    k = funcadd(k);
    quote[k] = "selexamcentre,centre_code_db,dropdown,20";
    k = funcadd(k);

    quote[k] = "optpet,training_db,radiobutton,22";
    k = funcadd(k);
    quote[k] = "selpetcentre,training_centre_db,dropdown,23";
    k = funcadd(k);

    quote[k] = "paymentin,payment_mode_db,radiobutton,24";
    k = funcadd(k);
    quote[k] = "txtfee,fee_db,textbox,25";
    k = funcadd(k);

    quote[k] = "fullname,fullname_db,textbox,41";
    k = funcadd(k);
//quote[k]="middlename,middlename_db,textbox,65";k=funcadd(k);
//quote[k]="txtlastname,lastname_db,textbox,66";k=funcadd(k);
    quote[k] = "seldobyear,seldobmon,seldobday,dob_db,dobcompare,43";
    k = funcadd(k);
    quote[k] = "txtage,age_db,textbox,44";
    k = funcadd(k);
    quote[k] = "optsex,gender_db,radiobutton,45";
    k = funcadd(k);
    quote[k] = "txtfname,father_name_db,textbox,46";
    k = funcadd(k);
    quote[k] = "txtmname,mother_name_db,textbox,47";
    k = funcadd(k);

    /*quote[k]="txtfathermidname,father_midname_db,textbox,220";k=funcadd(k);
     quote[k]="txtfatherlastname,father_lastname_db,textbox,221";k=funcadd(k);
     quote[k]="txtmothermidname,mother_midname_db,textbox,222";k=funcadd(k);
     quote[k]="txtmotherlastname,mother_lastname_db,textbox,223";k=funcadd(k);*/

    quote[k] = "txtcemail,mail_id_db,textbox,48";
    k = funcadd(k);
    quote[k] = "txtaddress1,address1_db,textbox,49";
    k = funcadd(k);
    quote[k] = "txtaddress2,address2_db,textbox,50";
    k = funcadd(k);
    quote[k] = "txtaddress3,address3_db,textbox,51";
    k = funcadd(k);
    quote[k] = "txtdistrict,district_db,textbox,52";
    k = funcadd(k);
    quote[k] = "txtstate,state_db,dropdown,53";
    k = funcadd(k);
    quote[k] = "txtpin,pincode_db,textbox,54";
    k = funcadd(k);
    quote[k] = "txtaddress1perm,addressp1_db,textbox,56";
    k = funcadd(k);
    quote[k] = "txtaddress2perm,addressp2_db,textbox,57";
    k = funcadd(k);
    quote[k] = "txtaddress3perm,addressp3_db,textbox,58";
    k = funcadd(k);
    quote[k] = "txtdistrictp,districtp_db,textbox,59";
    k = funcadd(k);
    quote[k] = "txtstateperm,statep_db,dropdown,60";
    k = funcadd(k);
    quote[k] = "txtpinperm,pincodep_db,textbox,61";
    k = funcadd(k);
    quote[k] = "txtstd,std_db,textbox,62";
    k = funcadd(k);
    quote[k] = "txtphone,phone_db,textbox,63";
    k = funcadd(k);
    quote[k] = "txtmobile,mobile_db,textbox,64";
    k = funcadd(k);

    quote[k] = "selstream3,graduationsubjects_db,textbox,67";
    k = funcadd(k);
//quote[k]="selday3,graduationpassingdate_db,dropdown,48";k=funcadd(k);
//quote[k]="selmon3,graduationpassingmon_db,dropdown,49";k=funcadd(k);
    quote[k] = "selyr3,graduationpassingyear_db,textbox,70";
    k = funcadd(k);
    quote[k] = "selmark3,graduationpercentage_db,percentage,71";
    k = funcadd(k);
//quote[k]="selgrade3,graduationgrade_db,dropdown,52";k=funcadd(k);

    quote[k] = "selstream4,pgsubjects_db,textbox,73";
    k = funcadd(k);
//quote[k]="selday4,pgpassingdate_db,dropdown,54";k=funcadd(k);
//quote[k]="selmon4,pgpassingmon_db,dropdown,55";k=funcadd(k);
    quote[k] = "selyr4,pgpassingyear_db,dropdown,76";
    k = funcadd(k);
    quote[k] = "selmark4,pgpercentage_db,percentage,77";
    k = funcadd(k);
//quote[k]="selgrade4,pggrade_db,dropdown,58";k=funcadd(k);

    quote[k] = "selstream6,profsubjects_db,textbox,79";
    k = funcadd(k);
//quote[k]="selday6,profpassingdate_db,dropdown,60";k=funcadd(k);
//quote[k]="selmon6,profpassingmon_db,dropdown,61";k=funcadd(k);
    quote[k] = "selyr6,profpassingyear_db,dropdown,82";
    k = funcadd(k);
    quote[k] = "selmark6,profpercentage_db,percentage,83";
    k = funcadd(k);
//quote[k]="selgrade6,profgrade_db,dropdown,64";k=funcadd(k);

    /*quote[k]="selstream5,otherssubjects_db,dropdown,65";k=funcadd(k);
     quote[k]="selday5,otherspassingdate_db,dropdown,66";k=funcadd(k);
     quote[k]="selmon5,otherspassingmon_db,dropdown,67";k=funcadd(k);
     quote[k]="selyr5,otherspassingyear_db,dropdown,68";k=funcadd(k);
     quote[k]="selmark5,otherspercentage_db,percentage,69";k=funcadd(k);
     quote[k]="selgrade5,othersgrade_db,dropdown,70";k=funcadd(k);*/

    quote[k] = "radio_dip,diploma_type_db,radiobutton,251";
    k = funcadd(k);
    quote[k] = "selstream8,diplomasubjects_db,textbox,211";
    k = funcadd(k);
//quote[k]="selday8,diplomapassingdate_db,dropdown,212";k=funcadd(k);
//quote[k]="selmon8,diplomapassingmon_db,dropdown,213";k=funcadd(k);
    quote[k] = "selyr8,diplomapassingyear_db,dropdown,214";
    k = funcadd(k);
    quote[k] = "selmark8,diplomapercentage_db,percentage,215";
    k = funcadd(k);
//quote[k]="selgrade8,diplomagrade_db,dropdown,216";k=funcadd(k);

//quote[k]="opt_locallang,opt_locallang_db,radiobutton,71";k=funcadd(k);


//quote[k]="selminority,religion_db,dropdown,74";k=funcadd(k);
//quote[k]="othreligion,religion_other_db,textbox,75";k=funcadd(k);

    /*quote[k]="txtlang1,language1_db,textbox,76";k=funcadd(k);
     quote[k]="lang1r,language1_read_db,checkbox,77";k=funcadd(k);  
     quote[k]="lang1w,language1_write_db,checkbox,78";k=funcadd(k); 
     quote[k]="lang1s,language1_speak_db,checkbox,79";k=funcadd(k); 
     // for languages2 checkbox
     quote[k]="txtlang2,language2_db,textbox,80";k=funcadd(k); 
     quote[k]="lang2r,language2_read_db,checkbox,81";k=funcadd(k);
     quote[k]="lang2w,language2_write_db,checkbox,82";k=funcadd(k); 
     quote[k]="lang2s,language2_speak_db,checkbox,83";k=funcadd(k); 
     // for languages3 checkbox
     quote[k]="txtlang3,language3_db,checkbox,84";k=funcadd(k); 
     quote[k]="lang3r,language3_read_db,checkbox,85";k=funcadd(k); 
     quote[k]="lang3w,language3_write_db,checkbox,86";k=funcadd(k); 
     quote[k]="lang3s,language3_speak_db,checkbox,87";k=funcadd(k);*/

    /*quote[k]="txtlang4,language4_db,checkbox,88";k=funcadd(k); 
     quote[k]="lang4r,language4_read_db,checkbox,89";k=funcadd(k); 
     quote[k]="lang4w,language4_write_db,checkbox,90";k=funcadd(k); 
     quote[k]="lang4s,language4_speak_db,checkbox,91";k=funcadd(k);

     quote[k]="txtlang5,language5_db,checkbox,92";k=funcadd(k); 
     quote[k]="lang5r,language5_read_db,checkbox,93";k=funcadd(k); 
     quote[k]="lang5w,language5_write_db,checkbox,94";k=funcadd(k); 
     quote[k]="lang5s,language5_speak_db,checkbox,95";k=funcadd(k);*/

//quote[k]="selpost,postcode_db,dropdown,111";k=funcadd(k);
//quote[k]="selbank,bankpost_db,dropdown,112";k=funcadd(k);

    /*quote[k]="selwrkexp,wrkexp_db,dropdown,113";k=funcadd(k);

     quote[k]="selarmed,armed_db,dropdown,114";k=funcadd(k); 
     quote[k]="txtarmedper,armedper_db,textbox,115";k=funcadd(k);
     quote[k]="txtarmedrank,armedrank_db,textbox,116";k=funcadd(k);
     quote[k]="optarmedfit,armedfit_db,radiobutton,117";k=funcadd(k);

     quote[k]="selparam,paramil_db,dropdown,118";k=funcadd(k); 
     quote[k]="txtparamper,paramilper_db,textbox,119";k=funcadd(k);
     quote[k]="txtparamrank,paramilrank_db,textbox,120";k=funcadd(k);
     quote[k]="optparamfit,paramilfit_db,radiobutton,121";k=funcadd(k);

     quote[k]="selpolice,police_db,dropdown,122";k=funcadd(k); 
     quote[k]="txtpoliceper,policeper_db,textbox,123";k=funcadd(k);
     quote[k]="txtpolicerank,policerank_db,textbox,124";k=funcadd(k);
     quote[k]="optpolicefit,policefit_db,radiobutton,125";k=funcadd(k);

     quote[k]="seldegree3,graduationdegree_db,dropdown,126";k=funcadd(k);
     quote[k]="seldegree4,pgdegree_db,dropdown,127";k=funcadd(k);
     quote[k]="seldegree6,profdegree_db,dropdown,128";k=funcadd(k);
     quote[k]="seldegree5,othersdegree_db,dropdown,129";k=funcadd(k);
     //quote[k]="seldegree7,certificatein_db,dropdown,130";k=funcadd(k);*/

//quote[k]="opt_offCourse,nfsccourse_db,radiobutton,131";k=funcadd(k);
//quote[k]="cmpknown,computerknowledge_db,radiobutton,132";k=funcadd(k);
//quote[k]="cmpdetail,computerknowledgedet_db,textbox,133";k=funcadd(k);
    /*quote[k]="adminknown,adminknown_db,radiobutton,134";k=funcadd(k);
     quote[k]="oracleknown,oracleknown_db,radiobutton,135";k=funcadd(k);
     quote[k]="researchrel,researchrel_db,radiobutton,217";k=funcadd(k);
     */
//Employer1
    /*quote[k]="txtemp1,nameofemployer1_db,textbox,136";k=funcadd(k);
     quote[k]="txtdesg1,designation1_db,textbox,137";k=funcadd(k);
     quote[k]="selfrommon1,expfmon1_db,dropdown,138";k=funcadd(k);
     quote[k]="selfromyr1,expfyr1_db,dropdown,139";k=funcadd(k);
     quote[k]="seltomon1,exptmon1_db,dropdown,140";k=funcadd(k);
     quote[k]="seltoyr1,exptyr1_db,dropdown,141";k=funcadd(k);
     quote[k]="txtservice1,servicelength1_db,textbox,142";k=funcadd(k);
     quote[k]="txtduty1,natureofdutiesperformed1_db,textbox,143";k=funcadd(k);
     quote[k]="txtindtype1,indtype1_db,textbox,144";k=funcadd(k);
     quote[k]="txtreason1,reasonforleaving1_db,textbox,145";k=funcadd(k);
     *///employer2
    /*quote[k]="txtemp2,nameofemployer2_db,textbox,146";k=funcadd(k);
     quote[k]="txtdesg2,designation2_db,textbox,147";k=funcadd(k);
     quote[k]="selfrommon2,expfmon2_db,dropdown,148";k=funcadd(k);
     quote[k]="selfromyr2,expfyr2_db,dropdown,149";k=funcadd(k);
     quote[k]="seltomon2,exptmon2_db,dropdown,150";k=funcadd(k);
     quote[k]="seltoyr2,exptyr2_db,dropdown,151";k=funcadd(k);
     quote[k]="txtservice2,servicelength2_db,textbox,152";k=funcadd(k);
     quote[k]="txtduty2,natureofdutiesperformed2_db,textbox,153";k=funcadd(k);
     quote[k]="txtindtype2,indtype2_db,textbox,154";k=funcadd(k);
     quote[k]="txtreason2,reasonforleaving2_db,textbox,155";k=funcadd(k);
     *///employer3
    /*quote[k]="txtemp3,nameofemployer3_db,textbox,156";k=funcadd(k);
     quote[k]="txtdesg3,designation3_db,textbox,157";k=funcadd(k);
     quote[k]="selfrommon3,expfmon3_db,dropdown,158";k=funcadd(k);
     quote[k]="selfromyr3,expfyr3_db,dropdown,159";k=funcadd(k);
     quote[k]="seltomon3,exptmon3_db,dropdown,160";k=funcadd(k);
     quote[k]="seltoyr3,exptyr3_db,dropdown,161";k=funcadd(k);
     quote[k]="txtservice3,servicelength3_db,textbox,162";k=funcadd(k);
     quote[k]="txtduty3,natureofdutiesperformed3_db,textbox,163";k=funcadd(k);
     quote[k]="txtindtype3,indtype3_db,textbox,164";k=funcadd(k);
     quote[k]="txtreason3,reasonforleaving3_db,textbox,165";k=funcadd(k);
     */
//employer4
    /*quote[k]="txtemp4,nameofemployer4_db,textbox,166";k=funcadd(k);
     quote[k]="txtdesg4,designation4_db,textbox,167";k=funcadd(k);
     quote[k]="selfrommon4,expfmon4_db,dropdown,168";k=funcadd(k);
     quote[k]="selfromyr4,expfyr4_db,dropdown,169";k=funcadd(k);
     quote[k]="seltomon4,exptmon4_db,dropdown,170";k=funcadd(k);
     quote[k]="seltoyr4,exptyr4_db,dropdown,171";k=funcadd(k);
     quote[k]="txtservice4,servicelength4_db,textbox,172";k=funcadd(k);
     quote[k]="txtduty4,natureofdutiesperformed4_db,textbox,173";k=funcadd(k);
     quote[k]="txtindtype4,indtype4_db,textbox,174";k=funcadd(k);
     quote[k]="txtreason4,reasonforleaving4_db,textbox,175";k=funcadd(k);
     *///employer5
    /*quote[k]="txtemp5,nameofemployer5_db,textbox,178";k=funcadd(k);
     quote[k]="txtdesg5,designation5_db,textbox,179";k=funcadd(k);
     quote[k]="selfrommon5,expfmon5_db,dropdown,180";k=funcadd(k);
     quote[k]="selfromyr5,expfyr5_db,dropdown,181";k=funcadd(k);
     quote[k]="seltomon5,exptmon5_db,dropdown,182";k=funcadd(k);
     quote[k]="seltoyr5,exptyr5_db,dropdown,183";k=funcadd(k);
     quote[k]="txtservice5,servicelength5_db,textbox,184";k=funcadd(k);
     quote[k]="txtduty5,natureofdutiesperformed5_db,textbox,185";k=funcadd(k);
     quote[k]="txtindtype5,indtype5_db,textbox,186";k=funcadd(k);
     quote[k]="txtreason5,reasonforleaving5_db,textbox,187";k=funcadd(k);
     */
//employer3
    /*quote[k]="txtemp6,nameofemployer6_db,textbox,188";k=funcadd(k);
     quote[k]="txtdesg6,designation6_db,textbox,189";k=funcadd(k);
     quote[k]="selfrommon6,expfmon6_db,dropdown,190";k=funcadd(k);
     quote[k]="selfromyr6,expfyr6_db,dropdown,191";k=funcadd(k);
     quote[k]="seltomon6,exptmon6_db,dropdown,192";k=funcadd(k);
     quote[k]="seltoyr6,exptyr6_db,dropdown,193";k=funcadd(k);
     quote[k]="txtservice6,servicelength6_db,textbox,194";k=funcadd(k);
     quote[k]="txtduty6,natureofdutiesperformed6_db,textbox,195";k=funcadd(k);
     quote[k]="txtindtype6,indtype6_db,textbox,196";k=funcadd(k);
     quote[k]="txtreason6,reasonforleaving6_db,textbox,197";k=funcadd(k);
     */
//employer4
    /*quote[k]="txtemp7,nameofemployer7_db,textbox,198";k=funcadd(k);
     quote[k]="txtdesg7,designation7_db,textbox,199";k=funcadd(k);
     quote[k]="selfrommon7,expfmon7_db,dropdown,200";k=funcadd(k);
     quote[k]="selfromyr7,expfyr7_db,dropdown,201";k=funcadd(k);
     quote[k]="seltomon7,exptmon7_db,dropdown,202";k=funcadd(k);
     quote[k]="seltoyr7,exptyr7_db,dropdown,203";k=funcadd(k);
     quote[k]="txtservice7,servicelength7_db,textbox,204";k=funcadd(k);
     quote[k]="txtduty7,natureofdutiesperformed7_db,textbox,205";k=funcadd(k);
     quote[k]="txtindtype7,indtype7_db,textbox,206";k=funcadd(k);
     quote[k]="txtreason7,reasonforleaving7_db,textbox,207";k=funcadd(k);
     */
//quote[k]="txttotexp,totexp_db,textbox,165";k=funcadd(k);
    /*quote[k]="txtemp1,nameofemployer1_db,textbox,136";k=funcadd(k);
     quote[k]="txtlawofficer,txtlawofficer_db,textbox,218";k=funcadd(k);
     quote[k]="txtlawfirm,txtlawfirm_db,textbox,219";k=funcadd(k);*/
    if (dv('modtype').value == '2') {
        if (document.reg_frm.txtphoto.value != '' || document.reg_frm.txtsign.value != '') {
            fields_changed_name += "36|";
            fields_changed = "yes";
        }
        if (document.reg_frm.txtphoto.value == '' && document.reg_frm.txtsign.value == '') {
            //fields_changed_name+="32|";
            fields_changed = "no";
        }
    }

    var x = 0;
    for (x = 0; x < quote.length; x++) {
        var arry = quote[x];
        var mytool_array = arry.split(",");
        if (mytool_array[2] == "dropdown") {
            var control = mytool_array[0];
            var control_db = mytool_array[1];
            var control_number = mytool_array[3];
            //alert(control);
            //alert(control+'==>'+control_number+"==>"+document.getElementById(control).value+"==>"+document.getElementById(control_db).value);
            /*if(control_number==62)
             {
             alert(document.getElementById(control).value);
             alert(document.getElementById(control_db).value);
             }*/
            if (trim(document.getElementById(control).value) != trim(document.getElementById(control_db).value)) {

                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }
        else if (mytool_array[2] == "radiobutton") {
            //alert("RADIOBUTTON");
            //alert(mytool_array[3]);
            var control = mytool_array[0];
            var control_db = mytool_array[1];
            var control_number = mytool_array[3];
            var db_val = trim(document.getElementById(control_db).value);
            control_ref = "document.reg_frm." + control;
            var control_val = get_radio_value(eval(control_ref));
            //alert(control_number);
            //return false;
            //var control_val=get_radio_value(eval(control_ref));
            //if(control_number !=32)
            //{
            //var control_val=get_radio_value(eval(control_ref));
            //}
            //else
            //{
            //var control_val=trim(document.getElementById(control).value);
            //}
            //special for scribe and training
            /*
             if(control=="optscribe" || control=="optpet")
             {
             if(trim(document.getElementById(control_db).value) == 'NA')
             control_val='NA';
             else
             {
             control_ref="document.reg_frm."+control;		
             var control_val=get_radio_value(eval(control_ref));
             }
             }
             else
             {
             control_ref="document.reg_frm."+control;		
             var control_val=get_radio_value(eval(control_ref));
             }

             if(control=="optscribe")
             {
             if(db_val == 'NA')
             db_val='';			
             }*/
            if (control == "optscribe") {
                if (db_val == 'NA')
                    db_val = '';
            }


            if (control == "optpet") {
                if (db_val == 'NA')
                    db_val = '';
            }
            if (control == "optdxs") {
                if (db_val == 'NA')
                    db_val = 'N';
            }

            if (control == "optdisxs") {
                if (db_val == 'NA')
                    db_val = 'N';
            }
            if (control == "optexservice") {
                if (db_val == 'NA')
                    db_val = 'N';
            }
            if (control == "optwdwjs") {
                if (db_val == 'NA')
                    db_val = '';
            }


            //alert(document.getElementById(control_db).value);


            if (control_val != db_val) {
                //alert(control_number);
                //alert("Not same");
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }

        }
        else if (mytool_array[2] == "textbox") {


            //alert("TEXT BOX");
            var control = mytool_array[0];
            var control_db = mytool_array[1];
            var control_number = mytool_array[3];
            //if(control_number!=95)
            //{
            //alert(control_number);
            //alert(control);
            //}
            //var a =document.getElementById(control).value;
            //if(control=="txtstd")
            //a="0"+a;
            var b;
            //quote[k]="iafper,iaf_marks_db,textbox,16";k=funcadd(k);
            //alert(control_number);
            //alert(control);
            var a = document.getElementById(control).value;
            b = trim(document.getElementById(control_db).value);

            // iafper and navy per are inserted as 0.00 when null so , if they are o.00 we are making as nUll while comparing
            if (control == "iafper") {
                if (document.getElementById(control_db).value == "0.00") {
                    b = "";
                }
            }
            if (control == "navyper") {
                if (document.getElementById(control_db).value == "0.00") {
                    b = "";
                }
            }

            if (trim(a) != b) {
                //alert(control_number);
                //alert("Not same");
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }


        else if (mytool_array[2] == "textarea") {


            //alert("TEXT BOX");
            var control = mytool_array[0];
            var control_db = mytool_array[1];
            var control_number = mytool_array[3];
            //if(control_number!=95)
            //{
            //alert(control_number);
            //alert(control);
            //}
            //var a =document.getElementById(control).value;
            //if(control=="txtstd")
            //a="0"+a;
            var b;
            //quote[k]="iafper,iaf_marks_db,textbox,16";k=funcadd(k);
            //alert(control_number);
            //alert(control);
            var a = document.getElementById(control).value;
            b = trim(document.getElementById(control_db).value);


            if (trim(a) != b) {
                //alert(control_number);
                //alert("Not same");
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }

        else if (mytool_array[2] == "checkbox") {
            //alert("CHECKBOX");
            var control = mytool_array[0];
            var control_db = mytool_array[1];
            var control_number = mytool_array[3];

            var a = document.getElementById(control).value;

            //alert("user : "+document.getElementById(control).checked+"database : "+document.getElementById(control_db).value);
            if (control == "lang1r") {

                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }
            if (control == "lang1w") {
                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }
            if (control == "lang1s") {
                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }
            if (control == "lang2r") {

                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }
            if (control == "lang2w") {
                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }
            if (control == "lang2s") {
                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }
            if (control == "lang3r") {
                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }
            if (control == "lang3w") {
                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }
            if (control == "lang3s") {
                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }

            if (control == "lang4r") {

                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }
            if (control == "lang4w") {
                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }
            if (control == "lang4s") {
                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }

            if (control == "lang5r") {

                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }
            if (control == "lang5w") {
                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }
            if (control == "lang5s") {
                if (document.getElementById(control).checked == false) {
                    a = '';
                }
            }

            //

            if (trim(document.getElementById(control_db).value) == 'N') {
                document.getElementById(control_db).value = "";
            }

            if (trim(a) != trim(document.getElementById(control_db).value)) {

                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }

        else if (mytool_array[2] == "checkboxarray_read") {

            var control = mytool_array[0];
            var control_db = mytool_array[1];
            var control_number = mytool_array[3];
            var lang1_attrib = checkbox_value_str(control);

            if (lang1_attrib.indexOf("r") >= 0 && (trim(document.getElementById(control_db).value) == 'N' || trim(document.getElementById(control_db).value) == '')) {
                //alert(control_number);
                //alert("NOT SAME");
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
            else if (lang1_attrib.indexOf("r") < 0 && trim(document.getElementById(control_db).value) == 'Y') {
                //alert(control_number);
                //alert("NOT SAME");
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }
        else if (mytool_array[2] == "checkboxarray_write") {
            //alert("CHECKBOX_ARRAY_write");
            var control = mytool_array[0];
            var control_db = mytool_array[1];
            var control_number = mytool_array[3];
            var lang1_attrib = checkbox_value_str(control);

            if (lang1_attrib.indexOf("w") >= 0 && (trim(document.getElementById(control_db).value) == 'N' || trim(document.getElementById(control_db).value) == '')) {
                //alert(control_number);
                //alert("NOT SAME");
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
            else if (lang1_attrib.indexOf("w") < 0 && trim(document.getElementById(control_db).value) == 'Y') {
                //alert(control_number);
                //alert("NOT SAME");
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }
        else if (mytool_array[2] == "checkboxarray_speak") {
            //alert("CHECKBOX_ARRAY_speak");
            var control = mytool_array[0];
            var control_db = mytool_array[1];
            var control_number = mytool_array[3];
            var lang1_attrib = checkbox_value_str(control);

            if (lang1_attrib.indexOf("s") >= 0 && (trim(document.getElementById(control_db).value) == 'N' || trim(document.getElementById(control_db).value) == '')) {
                //alert(control_number);
                //alert("NOT SAME");
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
            else if (lang1_attrib.indexOf("s") < 0 && trim(document.getElementById(control_db).value) == 'Y') {
                //alert(control_number);
                //alert("NOT SAME");
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }
        else if (mytool_array[2] == "percentage") {

            var control = mytool_array[0];
            var control_db = mytool_array[1];
            var control_number = mytool_array[3];
            if (trim(document.getElementById(control_db).value) == 0.00) {
                var profpercentage_db_int = "";
            }
            else {
                var profpercentage_db_int = trim(document.getElementById(control_db).value);
            }
            if (trim(document.getElementById(control).value) != profpercentage_db_int) {
                //alert(control_number);
                //alert("NOT SAME");
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }
        else if (mytool_array[4] == "datecompare") {
            var control_number = mytool_array[5];
            var a = (document.getElementById(mytool_array[0]).value);
            var b = (document.getElementById(mytool_array[1]).value);
            var c = (document.getElementById(mytool_array[2]).value);

            if (a == "" && b == "" && c == "") {
                var depdate = "0000-00-00";
            }
            else {
                var depdate = a + "-" + b + "-" + c;
            }
            //var d= a +"/"+ b+"/"+c;	
            //alert(depdate);
            //alert(document.getElementById(mytool_array[3]).value);
            //if(d != " / / ")
            //{
            //	var depdate=d;
            //}
            //else
            //var depdate="0000-00-00";			

            if (depdate != trim(document.getElementById(mytool_array[3]).value)) {
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }
        else if (mytool_array[4] == "dobcompare") {
            var control_number = mytool_array[5];
            var dobdate = trim(document.getElementById(mytool_array[0]).value) + "-" + trim(document.getElementById(mytool_array[1]).value) + "-" + trim(document.getElementById(mytool_array[2]).value);
            if (dobdate == "--")
                dobdate = "0000-00-00";
            if (dobdate != trim(document.getElementById(mytool_array[3]).value)) {
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }
        else if (mytool_array[4] == "dodcompare") {

            var control_number = mytool_array[5];
            if (document.getElementById(mytool_array[3]).value != "0000-00-00")
                var disdate = trim(document.getElementById(mytool_array[0]).value) + "-" + trim(document.getElementById(mytool_array[1]).value) + "-" + trim(document.getElementById(mytool_array[2]).value);
            else
                var disdate = "0000-00-00";
            //if(control_number==134)
            //{
            //alert(disdate);
            //alert(document.getElementById(mytool_array[3]).value);
            //}

            if (disdate != trim(document.getElementById(mytool_array[3]).value)) {
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }
        else if (mytool_array[4] == "discompare") {
            var control_number = mytool_array[5];
            var disdate = trim(document.getElementById(mytool_array[0]).value) + "-" + trim(document.getElementById(mytool_array[1]).value) + "-" + trim(document.getElementById(mytool_array[2]).value);
            if (disdate == "--")
                disdate = "0000-00-00";

            if (disdate != trim(document.getElementById(mytool_array[3]).value)) {
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }
        else if (mytool_array[4] == "actwefcompare") {
            var control_number = mytool_array[5];
            var actdate = trim(document.getElementById(mytool_array[0]).value) + "-" + trim(document.getElementById(mytool_array[1]).value) + "-" + trim(document.getElementById(mytool_array[2]).value);
            if (actdate == "--")
                actdate = "0000-00-00";
            if (actdate != trim(document.getElementById(mytool_array[3]).value)) {
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }
        else if (mytool_array[4] == "subwefcompare") {
            var control_number = mytool_array[5];
            var subdate = trim(document.getElementById(mytool_array[0]).value) + "-" + trim(document.getElementById(mytool_array[1]).value) + "-" + trim(document.getElementById(mytool_array[2]).value);
            if (subdate == "--")
                subdate = "0000-00-00";
            if (subdate != trim(document.getElementById(mytool_array[3]).value)) {
                fields_changed_name += control_number + "|";
                fields_changed = "yes";
            }
        }
    }
//  ADDING NEW CODE ENDS HERE 

    document.getElementById("changed_fields").value = "";
    document.getElementById("changed_fields").value = fields_changed_name;
    //alert(document.getElementById("changed_fields").value);
    //alert(fields_changed_name);
    //alert(fields_changed);
    return fields_changed;
}
function funcadd(k) {
    return parseInt(k) + 1;
}
function checkbox_value_str(fldname) {
    var a = new Array();
    var chk_box_str = '';
    a = document.getElementsByName(fldname);
    for (i = 0; i < a.length; i++) {
        if (a[i].checked)
            chk_box_str += (a[i].value);
    }
    return chk_box_str;
}
function exervice_Pass_in() {
    //alert("came herere");
    var exservice = get_radio_value(document.reg_frm.optexservice);
    var optdisxs = get_radio_value(document.reg_frm.optdisxs);
    if (exservice == "Y" || optdisxs == 'Y') {
        document.reg_frm.optexservice_pass_in_serv.disabled = false;
        document.reg_frm.optexservice_pass_in_serv.value = '';


        document.reg_frm.optexservice_pass_in_serv[0].disabled = false;
        document.reg_frm.optexservice_pass_in_serv[1].disabled = false;
        // document.reg_frm.optexservice_pass_in_serv[0].checked=false;
    }
    else {
        document.reg_frm.optexservice_pass_in_serv[0].disabled = true;
        document.reg_frm.optexservice_pass_in_serv[1].disabled = true;
        document.reg_frm.optexservice_pass_in_serv[0].checked = false;
        document.reg_frm.optexservice_pass_in_serv[1].checked = false;
    }
}

function armforceenable() {
    exservice = get_radio_value(document.reg_frm.optexservice);
    //dxs=get_radio_value(document.reg_frm.optdxs);
    disxs = get_radio_value(document.reg_frm.optdisxs);

    //if(exservice=='Y' || dxs=='Y' || disxs=='Y')
    if (exservice == 'Y' || disxs == 'Y') {

        document.reg_frm.optarmedforce[0].disabled = false;
        document.reg_frm.optarmedforce[1].disabled = false;
        document.reg_frm.optarmedforce[0].checked = false;
        document.reg_frm.optarmedforce[1].checked = true;

        enable_iaf_navy();


    }
    else {
        document.reg_frm.optarmedforce[0].disabled = true;
        document.reg_frm.optarmedforce[1].disabled = true;
        document.reg_frm.optarmedforce[0].checked = false;
        document.reg_frm.optarmedforce[1].checked = false;

        enable_iaf_navy();
    }
}

function enable_iaf_navy() {


    optarmedforce = get_radio_value(document.reg_frm.optarmedforce);
    if (optarmedforce == 'Y') {
        document.reg_frm.optiaf[0].disabled = false;
        document.reg_frm.optiaf[1].disabled = false;
        document.reg_frm.optiaf[0].checked = false;
        document.reg_frm.optiaf[1].checked = true;

        document.reg_frm.optnavy[0].disabled = false;
        document.reg_frm.optnavy[1].disabled = false;
        document.reg_frm.optnavy[0].checked = false;
        document.reg_frm.optnavy[1].checked = true;

        //document.reg_frm.iafper.value="";
        //document.reg_frm.iafper.disabled=false;
        //document.reg_frm.navyper.value="";
        //document.reg_frm.navyper.disabled=false;

    }
    else {


        document.reg_frm.optiaf[0].disabled = true;
        document.reg_frm.optiaf[1].disabled = true;
        document.reg_frm.optiaf[0].checked = false;
        document.reg_frm.optiaf[1].checked = false;

        document.reg_frm.optnavy[0].disabled = true;
        document.reg_frm.optnavy[1].disabled = true;
        document.reg_frm.optnavy[0].checked = false;
        document.reg_frm.optnavy[1].checked = false;

        //	document.reg_frm.iafper.value="";
        //document.reg_frm.iafper.disabled=true;
        //document.reg_frm.navyper.value="";
        //document.reg_frm.navyper.disabled=true;
    }
    enable_iaf_per();
    enable_navy_per();
}

function enable_iaf_per() {
    optiaf = get_radio_value(document.reg_frm.optiaf);
    if (optiaf == 'Y') {
        document.reg_frm.iafper.value = "";
        document.reg_frm.iafper.disabled = false;
    }
    else {

        document.reg_frm.iafper.value = "";
        document.reg_frm.iafper.disabled = true;
    }
}

function enable_navy_per() {
    optnavy = get_radio_value(document.reg_frm.optnavy);
    if (optnavy == 'Y') {
        document.reg_frm.navyper.value = "";
        document.reg_frm.navyper.disabled = false;
    }
    else {
        document.reg_frm.navyper.value = "";
        document.reg_frm.navyper.disabled = true;
    }
}


function enable_computer_qual() {
    computerknowledge = get_radio_value(document.reg_frm.computerknowledge);
    if (computerknowledge == 'Y') {
        document.reg_frm.txtqualcompdet.value = "";
        document.reg_frm.txtqualcompdet.disabled = false;
    }
    else {
        document.reg_frm.txtqualcompdet.value = "";
        document.reg_frm.txtqualcompdet.disabled = true;
    }
}
function chkoptcategory() {

    opt_cat = get_radio_value(document.reg_frm.opt_cat);
    //optminority=get_radio_value(document.reg_frm.optminority);

    //if(opt_cat=='SC' || opt_cat=='ST' || optminority=='Y')
    if (opt_cat == 'SC' || opt_cat == 'ST') {
        //document.reg_frm.optpreexamprior[0].checked=false;
        //document.reg_frm.optpreexamprior[1].checked=true;
        //document.reg_frm.optpreexamprior[0].disabled=false;
        //document.reg_frm.optpreexamprior[1].disabled=false;

        // this is for pet
        document.reg_frm.optpet[0].checked = false;
        document.reg_frm.optpet[1].checked = true;
        document.reg_frm.optpet[0].disabled = false;
        document.reg_frm.optpet[1].disabled = false;


    }
    else {
        //document.reg_frm.optpreexamprior[0].checked=false;
        //document.reg_frm.optpreexamprior[1].checked=false;
        //document.reg_frm.optpreexamprior[0].disabled=true;
        //document.reg_frm.optpreexamprior[1].disabled=true;


        document.reg_frm.optpet[0].checked = false;
        document.reg_frm.optpet[1].checked = false;
        document.reg_frm.optpet[0].disabled = true;
        document.reg_frm.optpet[1].disabled = true;

        document.reg_frm.selpetcentre.value = "";
        document.reg_frm.selpetcentre.disabled = "true";

    }
}

// using in deenabank
function enable_pre_exam() {
    //postcode=document.getElementById("selpost").value
    category = get_radio_value(document.reg_frm.opt_cat);
    optdisability = get_radio_value(document.reg_frm.optdisability);
    optminority = get_radio_value(document.reg_frm.optminority);
    //phy_challenge=get_radio_value(document.reg_frm.optdisability);
    //dxs=get_radio_value(document.reg_frm.optdxs);
    //disxs=get_radio_value(document.reg_frm.optdisxs);
    exservice = get_radio_value(document.reg_frm.optexservice);

    //if(category=="SC" || category=="ST" || optminority=='Y' || optdisability=='Y' || exservice=='Y' || dxs=='Y' || disxs=='Y' )
    if (category == "SC" || category == "ST" || optminority == 'Y') {
        document.reg_frm.optpet[0].disabled = false;
        document.reg_frm.optpet[1].disabled = false;
        document.reg_frm.optpet[0].checked = false;
        document.reg_frm.optpet[1].checked = true;
        document.reg_frm.selpetcentre.value = "";
        document.reg_frm.selpetcentre.disabled = true;
    }
    else {
        document.reg_frm.optpet[0].checked = false;
        document.reg_frm.optpet[1].checked = false;
        document.reg_frm.optpet[0].disabled = true;
        document.reg_frm.optpet[1].disabled = true;
        document.reg_frm.selpetcentre.value = "";
        document.reg_frm.selpetcentre.disabled = true;
    }
}

function disable_applicationfee() {
    opt_cat = get_radio_value(document.reg_frm.opt_cat);
    optdisability = get_radio_value(document.reg_frm.optdisability);
    exservice = get_radio_value(document.reg_frm.optexservice);
    dxs = get_radio_value(document.reg_frm.optdxs);
    disxs = get_radio_value(document.reg_frm.optdisxs);

    if (opt_cat == 'SC' || opt_cat == 'ST' || optdisability == 'Y' || exservice == 'Y' || dxs == 'Y' || disxs == 'Y') {
        document.reg_frm.txtjournalno.value = "";
        document.reg_frm.txtjournalno.disabled = "false";

        document.reg_frm.txtcjournalno.value = "";
        document.reg_frm.txtcjournalno.disabled = "false";

        document.reg_frm.txtbrname.value = "";
        document.reg_frm.txtbrname.disabled = "false";

        document.reg_frm.txtbranchcode.value = "";
        document.reg_frm.txtbranchcode.disabled = "false";

        document.reg_frm.seldepday.value = "";
        document.reg_frm.seldepday.disabled = "false";

        document.reg_frm.seldepmon.value = "";
        document.reg_frm.seldepmon.disabled = "false";

        document.reg_frm.seldepyear.value = "";
        document.reg_frm.seldepyear.disabled = "false";


    }
    else {
        document.reg_frm.txtjournalno.value = "";
        document.reg_frm.txtjournalno.disabled = "";

        document.reg_frm.txtcjournalno.value = "";
        document.reg_frm.txtcjournalno.disabled = "";

        document.reg_frm.txtbrname.value = "";
        document.reg_frm.txtbrname.disabled = "";

        document.reg_frm.txtbranchcode.value = "";
        document.reg_frm.txtbranchcode.disabled = "";

        document.reg_frm.seldepday.value = "";
        document.reg_frm.seldepday.disabled = "";

        document.reg_frm.seldepmon.value = "";
        document.reg_frm.seldepmon.disabled = "";

        document.reg_frm.seldepyear.value = "";
        document.reg_frm.seldepyear.disabled = "";


    }
}
function enable_otherpostapplied() {
    //alert("asasassa");

    optotherposts = get_radio_value(document.reg_frm.optotherposts);
    //alert(optotherposts);
    if (optotherposts == "Y") {

        document.reg_frm.selotherposts.value = "";
        document.reg_frm.selotherposts.disabled = false;
    }
    else {
        document.reg_frm.selotherposts.value = "";
        document.reg_frm.selotherposts.disabled = true;
    }
}
function changecolor() {
    Paymentin = get_radio_value(document.reg_frm.paymentin);

    if (Paymentin == "CBS") {
        document.getElementById('tranid6').style.color = "red";
        document.getElementById('tranid7').style.color = "red";
        document.getElementById('tranid8').style.color = "red";
        document.getElementById('tranid9').style.color = "red";
        document.getElementById('tranid10').style.color = "red";

    }
    if (Paymentin == "ONLINE") {


        document.getElementById('tranid6').style.color = "black";
        document.getElementById('tranid7').style.color = "black";
        document.getElementById('tranid8').style.color = "black";
        document.getElementById('tranid9').style.color = "black";
        document.getElementById('tranid10').style.color = "black";

    }
}
function enable_pay_details() {
    Paymentin = get_radio_value(document.reg_frm.Paymentin);
    if (Paymentin == "denabank") {
        showdiv('dena1');
        showdiv('dena2');
        showdiv('dena3');
        showdiv('dena4');

        hidediv('neft1');
        document.reg_frm.utrno.value = "";

        hidediv('neft2');
        document.reg_frm.txtcutrno.value = "";

        hidediv('neft3');
        document.reg_frm.txtsendingbrname.value = "";

        hidediv('neft4');
        document.reg_frm.txtsendingbranchcode.value = "";

        hidediv('neft5');
        document.reg_frm.ifsccode.value = "";

    }
    else if (Paymentin == "neft") {


        showdiv('neft1');
        showdiv('neft2');
        showdiv('neft3');
        showdiv('neft4');
        showdiv('neft5');

        hidediv('dena1');
        document.reg_frm.txtjournalno.value = "";

        hidediv('dena2');
        document.reg_frm.txtcjournalno.value = "";

        hidediv('dena3');
        document.reg_frm.txtbrname.value = "";

        hidediv('dena4');
        document.reg_frm.txtbranchcode.value = "";

    }
    else {
        hidediv('neft1');
        document.reg_frm.utrno.value = "";

        hidediv('neft2');
        document.reg_frm.txtcutrno.value = "";

        hidediv('neft3');
        document.reg_frm.txtsendingbrname.value = "";

        hidediv('neft4');
        document.reg_frm.txtsendingbranchcode.value = "";

        hidediv('neft5');
        document.reg_frm.ifsccode.value = "";

        hidediv('dena1');
        document.reg_frm.txtjournalno.value = "";

        hidediv('dena2');
        document.reg_frm.txtcjournalno.value = "";

        hidediv('dena3');
        document.reg_frm.txtbrname.value = "";

        hidediv('dena4');
        document.reg_frm.txtbranchcode.value = "";

    }
}
function check_gender_title() {
    title = document.reg_frm.seltitle.value;
    optsex = get_radio_value(document.reg_frm.optsex);
    if (title != "" && optsex != "") {
        if ((title == "01" && optsex == "F") || (title == "02" && optsex == "M")) {
            alert("Title and Gender are mismatching please correct");
            document.getElementById('seltitle').focus();
            return false;
        }
    }
}
function enable_dip_bank_finance_per() {

    dip_bank_finance = get_radio_value(document.reg_frm.dip_bank_finance);
    if (dip_bank_finance == "Y") {


        document.reg_frm.dip_bank_finance_per.value = "";
        document.reg_frm.dip_bank_finance_per.disabled = false;
    }
    else {
        document.reg_frm.dip_bank_finance_per.value = "";
        document.reg_frm.dip_bank_finance_per.disabled = true;
    }

}

function cmp_enable() {
    //var frm=document.reg_frm;

    if (get_radio_value(document.reg_frm.optpet) == 'Y') {
        document.getElementById('cmpdetail').disabled = false;
        document.getElementById('cmpdetail').value = "";
    }
    else {
        document.getElementById('cmpdetail').disabled = true;
        document.getElementById('cmpdetail').value = "";
    }
}


function mat_enable() {
    //var frm=document.reg_frm;

    if (get_radio_value(document.reg_frm.optexservice) == 'Y') {
        document.reg_frm.optmat[1].disabled = false;
        document.reg_frm.optmat[0].disabled = false;
        document.reg_frm.optmat[0].checked = false;
        document.reg_frm.optmat[1].checked = false;
        //get_radio_value(document.reg_frm.paymentin).checked=true;     
        //document.getElementById('trans_exp').disabled=false;
        //document.getElementById('trans_exp').value="";
    }
    else {

        document.reg_frm.optmat[1].disabled = true;
        document.reg_frm.optmat[0].disabled = true;
        document.reg_frm.optmat[0].checked = false;
        document.reg_frm.optmat[1].checked = false;
    }
}

/*function army_cert_exp()
 {
 if(get_radio_value(document.reg_frm.optmat)=='Y')
 {  
 document.reg_frm.army_cert[1].disabled=false;
 document.reg_frm.army_cert[0].disabled=false;
 //document.reg_frm.army_cert[0].checked=false;
 //document.reg_frm.army_cert[1].checked=false;

 }
 else 
 {
 document.reg_frm.army_cert[1].disabled=true;
 document.reg_frm.army_cert[0].disabled=true;
 document.reg_frm.army_cert[0].checked=false;
 document.reg_frm.army_cert[1].checked=false;
 }
 }*/


// this function is copied from the other application for post qualification experience
function chkExpMon(fld1, fld2)//this is for as on date
{
    var exYr = document.getElementById(fld2).value;
    var exMon = document.getElementById(fld1).value;

    if (document.getElementById(fld1).value > '08' && document.getElementById(fld2).value == '2011') {
        alert("Total Period of Service should not exceed August-2011");
        document.getElementById(fld1).value = "";
        document.getElementById(fld1).focus();
        return false;
    }

}

//function chkExpMon_extra(fld1,fld2,fld3)//this is for as on date
function chkExpMon_extra(fld1, fld2)//this is for as on date
{
    var exYr = document.getElementById(fld2).value;
    var exMon = document.getElementById(fld1).value;
    //var exDay = document.getElementById(fld3).value;
    var exDay = "01";

    if (document.getElementById(fld1).value > '10' && document.getElementById(fld2).value == '2012') {
        alert("Total Period of Service should not exceed October-2012");
        document.getElementById(fld1).value = "";
        document.getElementById(fld2).value = "";
        document.getElementById(fld3).value = "";
        document.getElementById(fld1).focus();
        return false;
    }
    if (document.getElementById(fld1).value == '10' && document.getElementById(fld2).value == '2012' && document.getElementById(fld3).value > '01') {
        alert("Total Period of Service should not exceed  1st October-2012");
        document.getElementById(fld1).value = "";
        document.getElementById(fld2).value = "";
        document.getElementById(fld3).value = "";
        document.getElementById(fld1).focus();
        return false;
    }

}

function chkExpMon_extra_period_from(fld1, fld2, fld3)//this is for as on date
{
    var exYr = document.getElementById(fld2).value;
    var exMon = document.getElementById(fld1).value;
    var exDay = document.getElementById(fld3).value;

    if (document.getElementById(fld1).value > '08' && document.getElementById(fld2).value == '2011') {
        alert("Period of Training From should not exceed August-2011");
        document.getElementById(fld1).value = "";
        document.getElementById(fld2).value = "";
        document.getElementById(fld3).value = "";
        document.getElementById(fld1).focus();
        return false;
    }
    if (document.getElementById(fld1).value == '08' && document.getElementById(fld2).value == '2011' && document.getElementById(fld3).value > '01') {
        alert("Period of Training From should not exceed  1st August-2011");
        document.getElementById(fld1).value = "";
        document.getElementById(fld2).value = "";
        document.getElementById(fld3).value = "";
        document.getElementById(fld1).focus();
        return false;
    }

}

function chkExpMon_extra_period_to(fld1, fld2, fld3)//this is for as on date
{
    var exYr = document.getElementById(fld2).value;
    var exMon = document.getElementById(fld1).value;
    var exDay = document.getElementById(fld3).value;

    if (document.getElementById(fld1).value > '08' && document.getElementById(fld2).value == '2011') {
        alert("Period of Training To should not exceed August-2011");
        document.getElementById(fld1).value = "";
        document.getElementById(fld2).value = "";
        document.getElementById(fld3).value = "";
        document.getElementById(fld1).focus();
        return false;
    }
    if (document.getElementById(fld1).value == '08' && document.getElementById(fld2).value == '2011' && document.getElementById(fld3).value > '01') {
        alert("Period of Training To should not exceed  1st August-2011");
        document.getElementById(fld1).value = "";
        document.getElementById(fld2).value = "";
        document.getElementById(fld3).value = "";
        document.getElementById(fld1).focus();
        return false;
    }

}
function chkEmpYear(fld)//for a row, to date and from date check
{
    //emp 8 check
    if (fld == 'emp8from') {
        if (document.getElementById('selfromyr7').value != "" && document.getElementById('selfromyr8').value != "") {
            if ((document.getElementById('selfromyr8').value == document.getElementById('selfromyr7').value) && (document.getElementById('selfrommon8').value > document.getElementById('selfrommon7').value)) {
                alert("From Month should not be greater than the fourth employer From Month");
                document.getElementById('selfromyr8').value = "";
                document.getElementById('seltoyr8').value = "";
                document.getElementById('selfrommon8').value = "";
                document.getElementById('seltomon8').value = "";
                document.getElementById('txtservice8').value = "";
                return false;
            }
            else if (document.getElementById('selfromyr8').value > document.getElementById('selfromyr7').value) {
                alert("From Year should not be greater than the fourth employer From Year");
                document.getElementById('selfromyr8').value = "";
                document.getElementById('seltoyr8').value = "";
                document.getElementById('selfrommon8').value = "";
                document.getElementById('seltomon8').value = "";
                document.getElementById('txtservice8').value = "";
                return false;
            }
        }
    }
    else if (fld == 'emp8to') {
        if (document.getElementById('selfromyr7').value != "" && document.getElementById('seltoyr8').value != "") {
            if ((document.getElementById('seltoyr8').value == document.getElementById('selfromyr7').value) && (document.getElementById('seltomon8').value > document.getElementById('selfrommon7').value)) {
                alert("To Month should not be greater than the fourth employer From Month");
                document.getElementById('selfromyr8').value = "";
                document.getElementById('seltoyr8').value = "";
                document.getElementById('selfrommon8').value = "";
                document.getElementById('seltomon8').value = "";
                document.getElementById('txtservice8').value = "";
                return false;
            }
            else if (document.getElementById('seltoyr8').value > document.getElementById('selfromyr7').value) {
                alert("To Year should not be greater than the fourth employer From Year");
                document.getElementById('selfromyr8').value = "";
                document.getElementById('seltoyr8').value = "";
                document.getElementById('selfrommon8').value = "";
                document.getElementById('seltomon8').value = "";
                document.getElementById('txtservice8').value = "";
                return false;
            }
        }
    }//end of emp 8 check

    //emp 7 check
    if (fld == 'emp7from') {
        if (document.getElementById('selfromyr6').value != "" && document.getElementById('selfromyr7').value != "") {
            if ((document.getElementById('selfromyr7').value == document.getElementById('selfromyr6').value) && (document.getElementById('selfrommon7').value > document.getElementById('selfrommon6').value)) {
                alert("From Month should not be greater than the fourth employer From Month");
                document.getElementById('selfromyr7').value = "";
                document.getElementById('seltoyr7').value = "";
                document.getElementById('selfrommon7').value = "";
                document.getElementById('seltomon7').value = "";
                document.getElementById('txtservice7').value = "";
                return false;
            }
            else if (document.getElementById('selfromyr7').value > document.getElementById('selfromyr6').value) {
                alert("From Year should not be greater than the fourth employer From Year");
                document.getElementById('selfromyr7').value = "";
                document.getElementById('seltoyr7').value = "";
                document.getElementById('selfrommon7').value = "";
                document.getElementById('seltomon7').value = "";
                document.getElementById('txtservice7').value = "";
                return false;
            }
        }
    }
    else if (fld == 'emp7to') {
        if (document.getElementById('selfromyr6').value != "" && document.getElementById('seltoyr7').value != "") {
            if ((document.getElementById('seltoyr7').value == document.getElementById('selfromyr6').value) && (document.getElementById('seltomon7').value > document.getElementById('selfrommon6').value)) {
                alert("To Month should not be greater than the fourth employer From Month");
                document.getElementById('selfromyr7').value = "";
                document.getElementById('seltoyr7').value = "";
                document.getElementById('selfrommon7').value = "";
                document.getElementById('seltomon7').value = "";
                document.getElementById('txtservice7').value = "";
                return false;
            }
            else if (document.getElementById('seltoyr7').value > document.getElementById('selfromyr6').value) {
                alert("To Year should not be greater than the fourth employer From Year");
                document.getElementById('selfromyr7').value = "";
                document.getElementById('seltoyr7').value = "";
                document.getElementById('selfrommon7').value = "";
                document.getElementById('seltomon7').value = "";
                document.getElementById('txtservice7').value = "";
                return false;
            }
        }
    }//end of emp 7 check

    //emp 6 check
    if (fld == 'emp6from') {
        if (document.getElementById('selfromyr5').value != "" && document.getElementById('selfromyr6').value != "") {
            if ((document.getElementById('selfromyr6').value == document.getElementById('selfromyr5').value) && (document.getElementById('selfrommon6').value > document.getElementById('selfrommon5').value)) {
                alert("From Month should not be greater than the fourth employer From Month");
                document.getElementById('selfromyr6').value = "";
                document.getElementById('seltoyr6').value = "";
                document.getElementById('selfrommon6').value = "";
                document.getElementById('seltomon6').value = "";
                document.getElementById('txtservice6').value = "";
                return false;
            }
            else if (document.getElementById('selfromyr6').value > document.getElementById('selfromyr5').value) {
                alert("From Year should not be greater than the fourth employer From Year");
                document.getElementById('selfromyr6').value = "";
                document.getElementById('seltoyr6').value = "";
                document.getElementById('selfrommon6').value = "";
                document.getElementById('seltomon6').value = "";
                document.getElementById('txtservice6').value = "";
                return false;
            }
        }
    }
    else if (fld == 'emp6to') {
        if (document.getElementById('selfromyr5').value != "" && document.getElementById('seltoyr6').value != "") {
            if ((document.getElementById('seltoyr6').value == document.getElementById('selfromyr5').value) && (document.getElementById('seltomon6').value > document.getElementById('selfrommon5').value)) {
                alert("To Month should not be greater than the fourth employer From Month");
                document.getElementById('selfromyr6').value = "";
                document.getElementById('seltoyr6').value = "";
                document.getElementById('selfrommon6').value = "";
                document.getElementById('seltomon6').value = "";
                document.getElementById('txtservice6').value = "";
                return false;
            }
            else if (document.getElementById('seltoyr6').value > document.getElementById('selfromyr5').value) {
                alert("To Year should not be greater than the fourth employer From Year");
                document.getElementById('selfromyr6').value = "";
                document.getElementById('seltoyr6').value = "";
                document.getElementById('selfrommon6').value = "";
                document.getElementById('seltomon6').value = "";
                document.getElementById('txtservice6').value = "";
                return false;
            }
        }
    }//end of emp 6 check


    if (fld == 'emp5from') {
        if (document.getElementById('selfromyr4').value != "" && document.getElementById('selfromyr5').value != "") {
            if ((document.getElementById('selfromyr5').value == document.getElementById('selfromyr4').value) && (document.getElementById('selfrommon5').value > document.getElementById('selfrommon4').value)) {
                alert("From Month should not be greater than the fourth employer From Month");
                document.getElementById('selfromyr5').value = "";
                document.getElementById('seltoyr5').value = "";
                document.getElementById('selfrommon5').value = "";
                document.getElementById('seltomon5').value = "";
                document.getElementById('txtservice5').value = "";
                return false;
            }
            else if (document.getElementById('selfromyr5').value > document.getElementById('selfromyr4').value) {
                alert("From Year should not be greater than the fourth employer From Year");
                document.getElementById('selfromyr5').value = "";
                document.getElementById('seltoyr5').value = "";
                document.getElementById('selfrommon5').value = "";
                document.getElementById('seltomon5').value = "";
                document.getElementById('txtservice5').value = "";
                return false;
            }
        }
    }
    else if (fld == 'emp5to') {
        if (document.getElementById('selfromyr4').value != "" && document.getElementById('seltoyr5').value != "") {
            if ((document.getElementById('seltoyr5').value == document.getElementById('selfromyr4').value) && (document.getElementById('seltomon5').value > document.getElementById('selfrommon4').value)) {
                alert("To Month should not be greater than the fourth employer From Month");
                document.getElementById('selfromyr5').value = "";
                document.getElementById('seltoyr5').value = "";
                document.getElementById('selfrommon5').value = "";
                document.getElementById('seltomon5').value = "";
                document.getElementById('txtservice5').value = "";
                return false;
            }
            else if (document.getElementById('seltoyr5').value > document.getElementById('selfromyr4').value) {
                alert("To Year should not be greater than the fourth employer From Year");
                document.getElementById('selfromyr5').value = "";
                document.getElementById('seltoyr5').value = "";
                document.getElementById('selfrommon5').value = "";
                document.getElementById('seltomon5').value = "";
                document.getElementById('txtservice5').value = "";
                return false;
            }
        }
    }//end of emp 5 check
    if (fld == 'emp4from') {
        if (document.getElementById('selfromyr3').value != "" && document.getElementById('selfromyr4').value != "") {
            if ((document.getElementById('selfromyr4').value == document.getElementById('selfromyr3').value) && (document.getElementById('selfrommon4').value > document.getElementById('selfrommon3').value)) {
                alert("From Month should not be greater than the third employer From Month");
                document.getElementById('selfromyr4').value = "";
                document.getElementById('seltoyr4').value = "";
                document.getElementById('selfrommon4').value = "";
                document.getElementById('seltomon4').value = "";
                document.getElementById('txtservice4').value = "";
                return false;
            }
            else if (document.getElementById('selfromyr4').value > document.getElementById('selfromyr3').value) {
                alert("From Year should not be greater than the third employer From Year");
                document.getElementById('selfromyr4').value = "";
                document.getElementById('seltoyr4').value = "";
                document.getElementById('selfrommon4').value = "";
                document.getElementById('seltomon4').value = "";
                document.getElementById('txtservice4').value = "";
                return false;
            }
        }
    }
    else if (fld == 'emp4to') {
        if (document.getElementById('selfromyr3').value != "" && document.getElementById('seltoyr4').value != "") {
            if ((document.getElementById('seltoyr4').value == document.getElementById('selfromyr3').value) && (document.getElementById('seltomon4').value > document.getElementById('selfrommon3').value)) {
                alert("To Month should not be greater than the third employer From Month");
                document.getElementById('selfromyr4').value = "";
                document.getElementById('seltoyr4').value = "";
                document.getElementById('selfrommon4').value = "";
                document.getElementById('seltomon4').value = "";
                document.getElementById('txtservice4').value = "";
                return false;
            }
            else if (document.getElementById('seltoyr4').value > document.getElementById('selfromyr3').value) {
                alert("To Year should not be greater than the third employer From Year");
                document.getElementById('selfromyr4').value = "";
                document.getElementById('seltoyr4').value = "";
                document.getElementById('selfrommon4').value = "";
                document.getElementById('seltomon4').value = "";
                document.getElementById('txtservice4').value = "";
                return false;
            }
        }
    }

    //end of emp 4 check
    if (fld == 'emp3from') {
        if (document.getElementById('selfromyr2').value != "" && document.getElementById('selfromyr3').value != "") {
            if ((document.getElementById('selfromyr3').value == document.getElementById('selfromyr2').value) && (document.getElementById('selfrommon3').value > document.getElementById('selfrommon2').value)) {
                alert("From Month should not be greater than the second employer From Month");
                document.getElementById('selfromyr3').value = "";
                document.getElementById('seltoyr3').value = "";
                document.getElementById('selfrommon3').value = "";
                document.getElementById('seltomon3').value = "";
                document.getElementById('txtservice3').value = "";
                return false;
            }
            else if (document.getElementById('selfromyr3').value > document.getElementById('selfromyr2').value) {
                alert("From Year should not be greater than the second employer From Year");
                document.getElementById('selfromyr3').value = "";
                document.getElementById('seltoyr3').value = "";
                document.getElementById('selfrommon3').value = "";
                document.getElementById('seltomon3').value = "";
                document.getElementById('txtservice3').value = "";
                return false;
            }
        }
    }
    if (fld == 'emp3to') {
        if (document.getElementById('selfromyr2').value != "" && document.getElementById('seltoyr3').value != "") {
            if ((document.getElementById('seltoyr3').value == document.getElementById('selfromyr2').value) && (document.getElementById('seltomon3').value > document.getElementById('selfrommon2').value)) {
                alert("To Month should not be greater than the second employer From Month");
                document.getElementById('selfromyr3').value = "";
                document.getElementById('seltoyr3').value = "";
                document.getElementById('selfrommon3').value = "";
                document.getElementById('seltomon3').value = "";
                document.getElementById('txtservice3').value = "";
                return false;
            }
            else if (document.getElementById('seltoyr3').value > document.getElementById('selfromyr2').value) {
                alert("To Year should not be greater than the second employer From Year");
                document.getElementById('selfromyr3').value = "";
                document.getElementById('seltoyr3').value = "";
                document.getElementById('selfrommon3').value = "";
                document.getElementById('seltomon3').value = "";
                document.getElementById('txtservice3').value = "";
                return false;
            }
        }
    }
    //end of emp 3 check
    if (fld == 'emp2from') {
        if (document.getElementById('selfromyr1').value != "" && document.getElementById('selfromyr2').value != "")//this check is to ensure that employee 1 and employee 2 details are filled
        {
            if ((document.getElementById('selfromyr2').value == document.getElementById('selfromyr1').value) && (document.getElementById('selfrommon2').value > document.getElementById('selfrommon1').value)) {
                alert("From Month should not be greater than the first employer From Month");
                document.getElementById('selfromyr2').value = "";
                document.getElementById('seltoyr2').value = "";
                document.getElementById('selfrommon2').value = "";
                document.getElementById('seltomon2').value = "";
                document.getElementById('txtservice2').value = "";
                return false;
            }
            else if (document.getElementById('selfromyr2').value > document.getElementById('selfromyr1').value) {
                alert("From Year should not be greater than the first employer From Year");
                document.getElementById('selfromyr2').value = "";
                document.getElementById('seltoyr2').value = "";
                document.getElementById('selfrommon2').value = "";
                document.getElementById('seltomon2').value = "";
                document.getElementById('txtservice2').value = "";
                return false;
            }
        }
    }
    else if (fld == 'emp2to') {
        if (document.getElementById('selfromyr1').value != "" && document.getElementById('seltoyr2').value != "") {
            if ((document.getElementById('seltoyr2').value == document.getElementById('selfromyr1').value) && (document.getElementById('seltomon2').value > document.getElementById('selfrommon1').value)) {
                alert("To Month should not be greater than the first employer From Month");
                document.getElementById('selfromyr2').value = "";
                document.getElementById('seltoyr2').value = "";
                document.getElementById('selfrommon2').value = "";
                document.getElementById('seltomon2').value = "";
                document.getElementById('txtservice2').value = "";
                return false;
            }
            else if (document.getElementById('seltoyr2').value > document.getElementById('selfromyr1').value) {
                alert("To Year should not be greater than the first employer From Year");
                document.getElementById('selfromyr2').value = "";
                document.getElementById('seltoyr2').value = "";
                document.getElementById('selfrommon2').value = "";
                document.getElementById('seltomon2').value = "";
                document.getElementById('txtservice2').value = "";
                return false;
            }
        }
    }
    //end of emp 2 check
}
//this is bank of baroda function
function enableecno() {


    if (document.reg_frm.emp_bob[0].checked == true) {


        document.reg_frm.ecno.value = "";
        document.getElementById('ecno').disabled = false;

    }
    else if (document.reg_frm.emp_bob[1].checked == true) {

        document.reg_frm.ecno.value = "";
        document.getElementById('ecno').disabled = true;


    }
}

function Pinnumber_check(txtcontrolname, txtstatecontrolname) {
    //PIN code VALIDATION STARTS HERE

    //Andhra Pradesh
    if (trim(document.getElementById(txtstatecontrolname).value) == '1') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 50 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 51 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 52 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 53) {
            alert("Pincode should start with 50(or)51(or)52(or)53 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //ARUNACHAL PRADESH
    if (trim(document.getElementById(txtstatecontrolname).value) == '2') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 79) {
            alert("Pincode should start with 79 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //Assam
    if (trim(document.getElementById(txtstatecontrolname).value) == '3') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 78) {
            alert("Pincode should start with 78 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }
    //Bihar
    if (trim(document.getElementById(txtstatecontrolname).value) == '4') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 80 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 81 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 82 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 83 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 84 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 85) {
            alert("Pincode should start with 80 (or) 81 (or) 82 (or) 83 (or) 84 (or) 85 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //Chandigrah
    if (trim(document.getElementById(txtstatecontrolname).value) == '5') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 49) {
            alert("Pincode should start with 49 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //Goa
    if (trim(document.getElementById(txtstatecontrolname).value) == '6') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 40) {
            alert("Pincode should start with 40 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //Gujarat
    if (trim(document.getElementById(txtstatecontrolname).value) == '7') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 36 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 37 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 38 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 39) {
            alert("Pincode should start with 36 (or) 37 (or) 38 (or) 39 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //haryana
    if (trim(document.getElementById(txtstatecontrolname).value) == '8') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 12 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 13) {
            alert("Pincode should start with 12 (or) 13 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }
    //Himachal pradesh
    if (trim(document.getElementById(txtstatecontrolname).value) == '9') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 17) {
            alert("Pincode should start with 17  for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //haryana
    if (trim(document.getElementById(txtstatecontrolname).value) == '10') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 18 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 19) {
            alert("Pincode should start with 18 (or) 19 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //JHARKHAND
    if (trim(document.getElementById(txtstatecontrolname).value) == '11') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 80 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 81 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 82 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 83 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 84 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 85) {
            alert("Pincode should start with 80 (or) 81 (or) 82 (or) 83 (or) 84 (or) 85 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //KARNATAKA
    if (trim(document.getElementById(txtstatecontrolname).value) == '12') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 56 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 57 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 58 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 59) {
            alert("Pincode should start with 56 (or) 57 (or) 58 (or) 59  for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //Kerala
    if (trim(document.getElementById(txtstatecontrolname).value) == '13') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 67 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 68 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 69) {
            alert("Pincode should start with 67 (or) 68 (or) 69  for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }
    //Madhyapradesh
    if (trim(document.getElementById(txtstatecontrolname).value) == '14') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 45 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 46 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 47 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 48) {
            alert("Pincode should start with 45 (or) 46 (or) 47 (or) 48  for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }
    //MAHARASHTRA
    if (trim(document.getElementById(txtstatecontrolname).value) == '15') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 40 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 41 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 42 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 43 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 44) {
            alert("Pincode should start with 40 (or) 41 (or) 42 (or) 43  (or) 44 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //Manipur
    if (trim(document.getElementById(txtstatecontrolname).value) == '16') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 3)) != 795) {
            alert("Pincode should start with 795  for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }
    //megalaya
    if (trim(document.getElementById(txtstatecontrolname).value) == '17') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 3)) != 793 && trim(document.getElementById(txtcontrolname).value.substring(0, 3)) != 794
            && trim(document.getElementById(txtcontrolname).value) != 783123) {
            alert("Pincode should start with 793 (or) 794 (or) 783123  for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //Mizoram
    if (trim(document.getElementById(txtstatecontrolname).value) == '18') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 3)) != 796) {
            alert("Pincode should start with 796  for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }
    //Nagaland
    if (trim(document.getElementById(txtstatecontrolname).value) == '19') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 79) {
            alert("Pincode should start with 79 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //orissa
    if (trim(document.getElementById(txtstatecontrolname).value) == '20') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 75 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 76 &&
            trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 77) {
            alert("Pincode should start with 75 (or) 76 (or) 77 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //punjab
    if (trim(document.getElementById(txtstatecontrolname).value) == '21') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 14 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 15 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 16) {
            alert("Pincode should start with 14 (or) 15 (or) 16 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //rajasthan
    if (trim(document.getElementById(txtstatecontrolname).value) == '22') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 30 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 31
            && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 32 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 33
            && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 34) {
            alert("Pincode should start with 30 (or) 31 (or) 32 (or) 33 (or) 34 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //sikkam
    if (trim(document.getElementById(txtstatecontrolname).value) == '23') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 73) {
            alert("Pincode should start with 73  for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //tamilnadu
    if (trim(document.getElementById(txtstatecontrolname).value) == '24') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 60 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 61
            && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 62 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 63
            && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 64) {
            alert("Pincode should start with 60 (or) 61 (or) 62 (or) 63 (or) 64 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //tripura
    if (trim(document.getElementById(txtstatecontrolname).value) == '25') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 3)) != 799) {
            alert("Pincode should start with 799  for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }
//uttarpradesh
    if (trim(document.getElementById(txtstatecontrolname).value) == '26') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 20 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 21
            && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 22 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 23
            && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 24 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 25 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 26 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 27 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 28) {
            alert("Pincode should start with 20 (or) 21 (or) 22 (or) 23 (or) 24  (or) 25  (or) 26  (or) 27  (or) 28 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //uttarkand
    if (trim(document.getElementById(txtstatecontrolname).value) == '27') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 20 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 21
            && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 22 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 23
            && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 24 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 25 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 26 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 27 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 28) {
            alert("Pincode should start with 20 (or) 21 (or) 22 (or) 23 (or) 24  (or) 25  (or) 26  (or) 27  (or) 28 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //westbengal
    if (trim(document.getElementById(txtstatecontrolname).value) == '28') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 70 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 71
            && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 72 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 73
            && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 74) {
            alert("Pincode should start with 70 (or) 71 (or) 72 (or) 73 (or) 74 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //westbengal
    if (trim(document.getElementById(txtstatecontrolname).value) == '29') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 3)) != 744) {
            alert("Pincode should start with 744 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    if (trim(document.getElementById(txtstatecontrolname).value) == '30') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 16) {
            alert("Pincode should start with 16 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    if (trim(document.getElementById(txtstatecontrolname).value) == '31') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 39) {
            alert("Pincode should start with 39 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    if (trim(document.getElementById(txtstatecontrolname).value) == '32') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 39) {
            alert("Pincode should start with 39  for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    if (trim(document.getElementById(txtstatecontrolname).value) == '33') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 3)) != 682) {
            alert("Pincode should start with 682  for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //DELHI
    if (trim(document.getElementById(txtstatecontrolname).value) == '34') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 11) {
            alert("Pincode should start with 11  for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    //PUDUCHERY
    if (trim(document.getElementById(txtstatecontrolname).value) == '35') {
        if (trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 60 && trim(document.getElementById(txtcontrolname).value.substring(0, 2)) != 67) {
            alert("Pincode should start with 60 (or) 67 for the selected state");
            document.getElementById(txtcontrolname).focus();
            return false;
        }
    }

    return true;

    //PIN code VALIDATION ENDS HERE

}
function enableworkexp() {
    var frm = document.reg_frm;
    if (document.getElementById("selpost").value == '11') {

        document.getElementById('selwrkexp').disabled = false;
        document.getElementById('selwrkexp').value = "";

        /*document.getElementById('selarmed').disabled=true;
         document.getElementById('selarmed').value="";
         //dv('txtarmedper').value='';
         document.getElementById('txtarmedper').disabled=true;
         document.getElementById('txtarmedper').value="";
         //dv('txtarmedrank').value='';
         document.getElementById('txtarmedrank').disabled=true;
         document.getElementById('txtarmedrank').value="";
         frm.optarmedfit[1].disabled=true;
         frm.optarmedfit[0].disabled=true;
         frm.optarmedfit[0].checked=false;
         frm.optarmedfit[1].checked=false;


         //hidediv('service3');
         //dv('selparam').value='';
         document.getElementById('selparam').disabled=true;
         document.getElementById('selparam').value="";
         //dv('txtparamper').value='';
         document.getElementById('txtparamper').disabled=true;
         document.getElementById('txtparamper').value="";
         //dv('txtparamrank').value='';
         document.getElementById('txtparamrank').disabled=true;
         document.getElementById('txtparamrank').value="";
         frm.optparamfit[1].disabled=true;
         frm.optparamfit[0].disabled=true;
         frm.optparamfit[0].checked=false;
         frm.optparamfit[1].checked=false;


         //hidediv('service4');
         //dv('selpolice').value='';
         document.getElementById('selpolice').disabled=true;
         document.getElementById('selpolice').value="";
         //dv('txtpoliceper').value='';
         document.getElementById('txtpoliceper').disabled=true;
         document.getElementById('txtpoliceper').value="";
         //dv('txtpolicerank').value='';
         document.getElementById('txtpolicerank').disabled=true;
         document.getElementById('txtpolicerank').value="";
         frm.optpolicefit[1].disabled=true;
         frm.optpolicefit[0].disabled=true;
         frm.optpolicefit[0].checked=false;
         frm.optpolicefit[1].checked=false;*/
    }
    else {
        document.getElementById('selwrkexp').value = "";
        document.getElementById('selwrkexp').disabled = true;

        document.getElementById('selarmed').disabled = true;
        document.getElementById('selarmed').value = "";
        //dv('txtarmedper').value='';
        document.getElementById('txtarmedper').disabled = true;
        document.getElementById('txtarmedper').value = "";
        //dv('txtarmedrank').value='';
        document.getElementById('txtarmedrank').disabled = true;
        document.getElementById('txtarmedrank').value = "";
        frm.optarmedfit[1].disabled = true;
        frm.optarmedfit[0].disabled = true;
        frm.optarmedfit[0].checked = false;
        frm.optarmedfit[1].checked = false;


        //hidediv('service3');
        //dv('selparam').value='';
        document.getElementById('selparam').disabled = true;
        document.getElementById('selparam').value = "";
        //dv('txtparamper').value='';
        document.getElementById('txtparamper').disabled = true;
        document.getElementById('txtparamper').value = "";
        //dv('txtparamrank').value='';
        document.getElementById('txtparamrank').disabled = true;
        document.getElementById('txtparamrank').value = "";
        frm.optparamfit[1].disabled = true;
        frm.optparamfit[0].disabled = true;
        frm.optparamfit[0].checked = false;
        frm.optparamfit[1].checked = false;


        //hidediv('service4');
        //dv('selpolice').value='';
        document.getElementById('selpolice').disabled = true;
        document.getElementById('selpolice').value = "";
        //dv('txtpoliceper').value='';
        document.getElementById('txtpoliceper').disabled = true;
        document.getElementById('txtpoliceper').value = "";
        //dv('txtpolicerank').value='';
        document.getElementById('txtpolicerank').disabled = true;
        document.getElementById('txtpolicerank').value = "";
        frm.optpolicefit[1].disabled = true;
        frm.optpolicefit[0].disabled = true;
        frm.optpolicefit[0].checked = false;
        frm.optpolicefit[1].checked = false;
    }

}
function enablewidow() {
    var frm = document.reg_frm;
    if (document.getElementById("selpost").value == '04') {


        frm.optwdwjs[1].disabled = false;
        frm.optwdwjs[0].disabled = false;
        frm.optwdwjs[0].checked = false;
        frm.optwdwjs[1].checked = true;
    }
    else {
        frm.optwdwjs[1].disabled = true;
        frm.optwdwjs[0].disabled = true;
        frm.optwdwjs[0].checked = false;
        frm.optwdwjs[1].checked = true;

    }

}
function ennabledxsdisxs() {
    if (document.getElementById("selpost").value == '10') {
        //alert("vcxvcxvcx");
        document.reg_frm.optdisxs[0].disabled = false;
        document.reg_frm.optdisxs[1].disabled = false;
        document.reg_frm.optdisxs[1].checked = true;

        document.reg_frm.optdxs[0].disabled = false;
        document.reg_frm.optdxs[1].disabled = false;
        document.reg_frm.optdxs[1].checked = true;

        //document.reg_frm.optwdwjs[0].disabled=false;
        //document.reg_frm.optwdwjs[1].disabled=false;
        //document.reg_frm.optwdwjs[1].checked=true;
        //document.reg_frm.optdxs[1].checked=true;
        //document.reg_frm.optdisxs[1].checked=true;
    }
    else {
        document.reg_frm.optdisxs[0].disabled = true;
        document.reg_frm.optdisxs[1].disabled = true;
        document.reg_frm.optdisxs[0].checked = false;
        document.reg_frm.optdisxs[1].checked = false;

        document.reg_frm.optdxs[0].disabled = true;
        document.reg_frm.optdxs[1].disabled = true;
        document.reg_frm.optdxs[0].checked = false;
        document.reg_frm.optdxs[1].checked = false;

        //document.reg_frm.optwdwjs[0].disabled=true;
        //document.reg_frm.optwdwjs[1].disabled=true;
        //document.reg_frm.optwdwjs[0].checked=false;
        //document.reg_frm.optwdwjs[1].checked=false;
        //document.reg_frm.optdxs[1].checked=false;

    }
    //chkexservice();
}
function graddegreeOther() {
    //getYears();
    //enablePet();
    //alert("enalbwer others");
    if (document.getElementById('seldegree3').value != "") {
        if (document.getElementById('seldegree3').value == '08') {
            showdiv('divothgraddegree');
        } else if (document.getElementById('seldegree3').value != '08') {
            hidediv('divothgraddegree');
            /*
             document.reg_frm.optreligion[0].checked=false;
             document.reg_frm.optreligion[1].checked=false;
             document.reg_frm.optreligion[2].checked=false;
             document.reg_frm.optreligion[3].checked=false;
             document.reg_frm.optreligion[4].checked=false;
             document.reg_frm.optreligion[5].checked=false;
             */
            document.reg_frm.othgraddegree.value = "";
        }
    } else {
        hidediv('divothgraddegree');
        /*
         document.reg_frm.optreligion[0].checked=false;
         document.reg_frm.optreligion[1].checked=false;
         document.reg_frm.optreligion[2].checked=false;
         document.reg_frm.optreligion[3].checked=false;
         document.reg_frm.optreligion[4].checked=false;
         document.reg_frm.optreligion[5].checked=false;
         */
        document.reg_frm.othgraddegree.value = "";
    }
}

function gradOther() {
    //getYears();
    //enablePet();
    //alert("enalbwer others");
    if (document.getElementById('selstream3').value != "") {
        if (document.getElementById('selstream3').value == '21') {
            showdiv('divothgrad');
        } else if (document.getElementById('selstream3').value != '21') {
            hidediv('divothgrad');
            /*
             document.reg_frm.optreligion[0].checked=false;
             document.reg_frm.optreligion[1].checked=false;
             document.reg_frm.optreligion[2].checked=false;
             document.reg_frm.optreligion[3].checked=false;
             document.reg_frm.optreligion[4].checked=false;
             document.reg_frm.optreligion[5].checked=false;
             */
            document.reg_frm.othgrad.value = "";
        }
    } else {
        hidediv('divothgrad');
        /*
         document.reg_frm.optreligion[0].checked=false;
         document.reg_frm.optreligion[1].checked=false;
         document.reg_frm.optreligion[2].checked=false;
         document.reg_frm.optreligion[3].checked=false;
         document.reg_frm.optreligion[4].checked=false;
         document.reg_frm.optreligion[5].checked=false;
         */
        document.reg_frm.othgrad.value = "";
    }
}

function gradsplOther() {
    if (document.getElementById('selinst1').value != "") {
        if (document.getElementById('selinst1').value == '49') {
            showdiv('divothgradspl');
        } else if (document.getElementById('selinst1').value != '49') {
            hidediv('divothgradspl');
            /*
             document.reg_frm.optreligion[0].checked=false;
             document.reg_frm.optreligion[1].checked=false;
             document.reg_frm.optreligion[2].checked=false;
             document.reg_frm.optreligion[3].checked=false;
             document.reg_frm.optreligion[4].checked=false;
             document.reg_frm.optreligion[5].checked=false;
             */
            document.reg_frm.othgradspl.value = "";
        }
    } else {
        hidediv('divothgradspl');
        /*
         document.reg_frm.optreligion[0].checked=false;
         document.reg_frm.optreligion[1].checked=false;
         document.reg_frm.optreligion[2].checked=false;
         document.reg_frm.optreligion[3].checked=false;
         document.reg_frm.optreligion[4].checked=false;
         document.reg_frm.optreligion[5].checked=false;
         */
        document.reg_frm.othgradspl.value = "";
    }
}


function postgradOther() {
    //getYears();
    //enablePet();
    //alert("enalbwer others");
    if (document.getElementById('seldegree4').value != "") {
        if (document.getElementById('seldegree4').value == '26') {
            showdiv('divothpostgrad');
        } else if (document.getElementById('seldegree4').value != '26') {
            hidediv('divothpostgrad');
            /*
             document.reg_frm.optreligion[0].checked=false;
             document.reg_frm.optreligion[1].checked=false;
             document.reg_frm.optreligion[2].checked=false;
             document.reg_frm.optreligion[3].checked=false;
             document.reg_frm.optreligion[4].checked=false;
             document.reg_frm.optreligion[5].checked=false;
             */
            document.reg_frm.othpostgrad.value = "";
        }
    } else {
        hidediv('divothpostgrad');
        /*
         document.reg_frm.optreligion[0].checked=false;
         document.reg_frm.optreligion[1].checked=false;
         document.reg_frm.optreligion[2].checked=false;
         document.reg_frm.optreligion[3].checked=false;
         document.reg_frm.optreligion[4].checked=false;
         document.reg_frm.optreligion[5].checked=false;
         */
        document.reg_frm.othpostgrad.value = "";
    }
}

function pgOther() {
    //getYears();
    //enablePet();
    //alert("enalbwer others");
    if (document.getElementById('selstream4').value != "") {
        if (document.getElementById('selstream4').value == '37') {
            showdiv('divothpg');
        } else if (document.getElementById('selstream4').value != '37') {
            hidediv('divothpg');
            /*
             document.reg_frm.optreligion[0].checked=false;
             document.reg_frm.optreligion[1].checked=false;
             document.reg_frm.optreligion[2].checked=false;
             document.reg_frm.optreligion[3].checked=false;
             document.reg_frm.optreligion[4].checked=false;
             document.reg_frm.optreligion[5].checked=false;
             */
            document.reg_frm.pggrad.value = "";
        }
    } else {
        hidediv('divothpg');
        /*
         document.reg_frm.optreligion[0].checked=false;
         document.reg_frm.optreligion[1].checked=false;
         document.reg_frm.optreligion[2].checked=false;
         document.reg_frm.optreligion[3].checked=false;
         document.reg_frm.optreligion[4].checked=false;
         document.reg_frm.optreligion[5].checked=false;
         */
        document.reg_frm.pggrad.value = "";
    }
}

function diplomaOther() {
    //getYears();
    //enablePet();
    //alert("enalbwer others");
    if (document.getElementById('selstream8').value != "") {
        if (document.getElementById('selstream8').value == '49') {
            showdiv('divothdiploma');
        } else if (document.getElementById('selstream8').value != '49') {
            hidediv('divothdiploma');
            /*
             document.reg_frm.optreligion[0].checked=false;
             document.reg_frm.optreligion[1].checked=false;
             document.reg_frm.optreligion[2].checked=false;
             document.reg_frm.optreligion[3].checked=false;
             document.reg_frm.optreligion[4].checked=false;
             document.reg_frm.optreligion[5].checked=false;
             */
            document.reg_frm.othdiploma.value = "";
        }
    } else {
        hidediv('divothdiploma');
        /*
         document.reg_frm.optreligion[0].checked=false;
         document.reg_frm.optreligion[1].checked=false;
         document.reg_frm.optreligion[2].checked=false;
         document.reg_frm.optreligion[3].checked=false;
         document.reg_frm.optreligion[4].checked=false;
         document.reg_frm.optreligion[5].checked=false;
         */
        document.reg_frm.othdiploma.value = "";
    }
}
function Otherdeg() {
    if (document.getElementById('seldegree5').value != "") {
        if (document.getElementById('seldegree5').value == '53') {
            showdiv('divothtxt');
        } else if (document.getElementById('seldegree5').value != '53') {
            hidediv('divothtxt');
            document.reg_frm.othdegree.value = "";
        }
    } else {
        hidediv('divothtxt');
        document.reg_frm.othdegree.value = "";
    }
}

function Otherstream() {
    if (document.getElementById('selstream5').value != "") {
        if (document.getElementById('selstream5').value == '45') {
            showdiv('divstreamtxt');
        } else if (document.getElementById('selstream5').value != '45') {
            hidediv('divstreamtxt');
            document.reg_frm.othstream.value = "";
        }
    } else {
        hidediv('divstreamtxt');
        document.reg_frm.othstream.value = "";
    }
}

function Othercert() {
    if (document.getElementById('seldegree7').value != "") {
        if (document.getElementById('seldegree7').value == '47') {
            showdiv('divcert');
        } else if (document.getElementById('seldegree7').value != '47') {
            hidediv('divcert');
            document.reg_frm.othcert.value = "";
        }
    } else {
        hidediv('divcert');
        document.reg_frm.othcert.value = "";
    }
}

function postgradsplOther() {
    if (document.getElementById('selinst2').value != "") {
        if (document.getElementById('selinst2').value == '57') {
            showdiv('divothpostgradspl');
        } else if (document.getElementById('selinst2').value != '57') {
            hidediv('divothpostgradspl');
            /*
             document.reg_frm.optreligion[0].checked=false;
             document.reg_frm.optreligion[1].checked=false;
             document.reg_frm.optreligion[2].checked=false;
             document.reg_frm.optreligion[3].checked=false;
             document.reg_frm.optreligion[4].checked=false;
             document.reg_frm.optreligion[5].checked=false;
             */
            document.reg_frm.othpostgradspl.value = "";
        }
    } else {
        hidediv('divothpostgradspl');
        /*
         document.reg_frm.optreligion[0].checked=false;
         document.reg_frm.optreligion[1].checked=false;
         document.reg_frm.optreligion[2].checked=false;
         document.reg_frm.optreligion[3].checked=false;
         document.reg_frm.optreligion[4].checked=false;
         document.reg_frm.optreligion[5].checked=false;
         */
        document.reg_frm.othpostgradspl.value = "";
    }
}

function profOther() {

    //alert("enalbwer others");
    if (document.getElementById('seldegree6').value != "") {
        if (document.getElementById('seldegree6').value == '40') {
            showdiv('divothprof');
        } else if (document.getElementById('seldegree6').value != '40') {

            hidediv('divothprof');
            /*
             document.reg_frm.optreligion[0].checked=false;
             document.reg_frm.optreligion[1].checked=false;
             document.reg_frm.optreligion[2].checked=false;
             document.reg_frm.optreligion[3].checked=false;
             document.reg_frm.optreligion[4].checked=false;
             document.reg_frm.optreligion[5].checked=false;
             */
            document.reg_frm.othprof.value = "";
        }
    } else {
        hidediv('divothprof');
        /*
         document.reg_frm.optreligion[0].checked=false;
         document.reg_frm.optreligion[1].checked=false;
         document.reg_frm.optreligion[2].checked=false;
         document.reg_frm.optreligion[3].checked=false;
         document.reg_frm.optreligion[4].checked=false;
         document.reg_frm.optreligion[5].checked=false;
         */
        document.reg_frm.othprof.value = "";
    }
}


//started - Photo and Signature Validation
function checkPhotoStatus() {

    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("POST", 'ajax_checkImageStatus.php?imagename=' + imagename + '&imagetype=photo', false);
    //xmlhttp.open("POST",'ajax_checkImageStatus.php?imagename='+imagename_1+imagename_2+imagename_3+imagename_4+imagename_5+'&imagetype=photo',false);
    xmlhttp.send(null);
    return xmlhttp.responseText;

}
function checkSigStatus() {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("POST", 'ajax_checkImageStatus.php?imagename=' + imagename + '&imagetype=signature', false);
    //xmlhttp.open("POST",'ajax_checkImageStatus.php?imagename='+imagename_1+imagename_2+imagename_3+imagename_4+imagename_5+'&imagetype=signature',false);
    xmlhttp.send(null);
    return xmlhttp.responseText;

}
function validateFormFrame() {
    responsePhoto = checkPhotoStatus();
    var resPhoto = responsePhoto.split(":");
    typePhoto = resPhoto[1].toString();
    resValuePhoto = resPhoto[0].toString();

    if (typePhoto == 'photo') {
        if (!isphotouploaded) {
            if (resValuePhoto != 'true') {
                alert('Please upload your Photo')
                return false;
            }
        }
    }
    responseSig = checkSigStatus()

    var resSig = responseSig.split(":");
    typeSig = resSig[1].toString();
    resValueSig = resSig[0].toString();

    if (typeSig == 'sig') {
        if (!issignatureuploaded) {
            if (resValueSig != 'true') {
                alert('Please upload your Signature')
                return false;
            }
        }
    }

    return true;
}
function exser_per_of_ser() {
    var exser = get_radio_value(document.reg_frm.optexservice);
    //var disxs=get_radio_value(document.reg_frm.optdisxs);
    //alert(disxs);

    //if(exser=='Y' || disxs=='Y')
    if (exser == 'Y') {
        //document.getElementById('txtexserper').disabled=false;
        //document.getElementById('txtexserper').value="";
        document.getElementById('txt_exser_no').disabled = false;
        document.getElementById('txt_exser_no').value = "";
    }
    else {
        //document.getElementById('txtexserper').disabled=true;
        //document.getElementById('txtexserper').value="";
        document.getElementById('txt_exser_no').disabled = true;
        document.getElementById('txt_exser_no').value = "";
    }
}

function showservice1() {
    var frm = document.reg_frm;
    var exser = get_radio_value(frm.optexservice);


    /*
     document.getElementById('selwrkexp').value="";

     document.getElementById('selarmed').disabled=true;
     document.getElementById('selarmed').value="";
     //dv('txtarmedper').value='';
     document.getElementById('txtarmedper').disabled=true;
     document.getElementById('txtarmedper').value="";
     //dv('txtarmedrank').value='';
     document.getElementById('txtarmedrank').disabled=true;
     document.getElementById('txtarmedrank').value="";
     frm.optarmedfit[1].disabled=true;
     frm.optarmedfit[0].disabled=true;
     frm.optarmedfit[0].checked=false;
     frm.optarmedfit[1].checked=false;


     //hidediv('service3');
     //dv('selparam').value='';
     document.getElementById('selparam').disabled=true;
     document.getElementById('selparam').value="";
     //dv('txtparamper').value='';
     document.getElementById('txtparamper').disabled=true;
     document.getElementById('txtparamper').value="";
     //dv('txtparamrank').value='';
     document.getElementById('txtparamrank').disabled=true;
     document.getElementById('txtparamrank').value="";
     frm.optparamfit[1].disabled=true;
     frm.optparamfit[0].disabled=true;
     frm.optparamfit[0].checked=false;
     frm.optparamfit[1].checked=false;


     //hidediv('service4');
     //dv('selpolice').value='';
     document.getElementById('selpolice').disabled=true;
     document.getElementById('selpolice').value="";
     //dv('txtpoliceper').value='';
     document.getElementById('txtpoliceper').disabled=true;
     document.getElementById('txtpoliceper').value="";
     //dv('txtpolicerank').value='';
     document.getElementById('txtpolicerank').disabled=true;
     document.getElementById('txtpolicerank').value="";
     frm.optpolicefit[1].disabled=true;
     frm.optpolicefit[0].disabled=true;
     frm.optpolicefit[0].checked=false;
     frm.optpolicefit[1].checked=false;

     */


    if (exser == 'Y') {

        document.getElementById('txtexserper').disabled = false;


        //showdiv('serviceretire');

        /*if(frm.selpost.value=="04")
         {
         //showdiv('service');
         document.getElementById('selwrkexp').disabled=false;
         document.getElementById('selwrkexp').value="";

         /*document.getElementById('selarmed').disabled=false;
         document.getElementById('selarmed').value="";
         //dv('txtarmedper').value='';
         document.getElementById('txtarmedper').disabled=false;
         document.getElementById('txtarmedper').value="";
         //dv('txtarmedrank').value='';
         document.getElementById('txtarmedrank').disabled=false;
         document.getElementById('txtarmedrank').value="";
         frm.optarmedfit[1].disabled=false;
         frm.optarmedfit[0].disabled=false;
         frm.optarmedfit[0].checked=false;
         frm.optarmedfit[1].checked=false;


         //hidediv('service3');
         //dv('selparam').value='';
         document.getElementById('selparam').disabled=false;
         document.getElementById('selparam').value="";
         //dv('txtparamper').value='';
         document.getElementById('txtparamper').disabled=false;
         document.getElementById('txtparamper').value="";
         //dv('txtparamrank').value='';
         document.getElementById('txtparamrank').disabled=false;
         document.getElementById('txtparamrank').value="";
         frm.optparamfit[1].disabled=false;
         frm.optparamfit[0].disabled=false;
         frm.optparamfit[0].checked=false;
         frm.optparamfit[1].checked=false;


         //hidediv('service4');
         //dv('selpolice').value='';
         document.getElementById('selpolice').disabled=false;
         document.getElementById('selpolice').value="";
         //dv('txtpoliceper').value='';
         document.getElementById('txtpoliceper').disabled=false;
         document.getElementById('txtpoliceper').value="";
         //dv('txtpolicerank').value='';
         document.getElementById('txtpolicerank').disabled=false;
         document.getElementById('txtpolicerank').value="";
         frm.optpolicefit[1].disabled=false;
         frm.optpolicefit[0].disabled=false;
         frm.optpolicefit[0].checked=false;
         frm.optpolicefit[1].checked=false;*/
    }
    else {
        //hidediv('service');
        document.getElementById('txtexserper').disabled = true;
        document.getElementById('txtexserper').value = "";
        //dv('selwrkexp').value='';

        //hidediv('service1');	
        //hidediv('service2');
        //dv('selarmed').value='';
        /*	document.getElementById('selarmed').disabled=true;
         document.getElementById('selarmed').value="";
         //dv('txtarmedper').value='';
         document.getElementById('txtarmedper').disabled=true;
         document.getElementById('txtarmedper').value="";
         //dv('txtarmedrank').value='';
         document.getElementById('txtarmedrank').disabled=true;
         document.getElementById('txtarmedrank').value="";
         frm.optarmedfit[1].disabled=true;
         frm.optarmedfit[0].disabled=true;
         frm.optarmedfit[0].checked=false;
         frm.optarmedfit[1].checked=false;


         //hidediv('service3');
         //dv('selparam').value='';
         document.getElementById('selparam').disabled=true;
         document.getElementById('selparam').value="";
         //dv('txtparamper').value='';
         document.getElementById('txtparamper').disabled=true;
         document.getElementById('txtparamper').value="";
         //dv('txtparamrank').value='';
         document.getElementById('txtparamrank').disabled=true;
         document.getElementById('txtparamrank').value="";
         frm.optparamfit[1].disabled=true;
         frm.optparamfit[0].disabled=true;
         frm.optparamfit[0].checked=false;
         frm.optparamfit[1].checked=false;


         //hidediv('service4');
         //dv('selpolice').value='';
         document.getElementById('selpolice').disabled=true;
         document.getElementById('selpolice').value="";
         //dv('txtpoliceper').value='';
         document.getElementById('txtpoliceper').disabled=true;
         document.getElementById('txtpoliceper').value="";
         //dv('txtpolicerank').value='';
         document.getElementById('txtpolicerank').disabled=true;
         document.getElementById('txtpolicerank').value="";
         frm.optpolicefit[1].disabled=true;
         frm.optpolicefit[0].disabled=true;
         frm.optpolicefit[0].checked=false;
         frm.optpolicefit[1].checked=false;


         }

         //}
         /*else{
         //hidediv('serviceretire');
         //dv('txtexserper').value="";
         document.getElementById('txtexserper').disabled=true;
         document.getElementById('txtexserper').value="";


         document.getElementById('selwrkexp').disabled=true;
         document.getElementById('selwrkexp').value="";



         document.getElementById('selarmed').disabled=true;
         document.getElementById('selarmed').value="";

         document.getElementById('txtarmedper').disabled=true;
         document.getElementById('txtarmedper').value="";

         document.getElementById('txtarmedrank').disabled=true;
         document.getElementById('txtarmedrank').value="";
         frm.optarmedfit[1].disabled=true;
         frm.optarmedfit[0].disabled=true;
         frm.optarmedfit[0].checked=false;
         frm.optarmedfit[1].checked=false;




         document.getElementById('selparam').disabled=true;
         document.getElementById('selparam').value="";

         document.getElementById('txtparamper').disabled=true;
         document.getElementById('txtparamper').value="";

         document.getElementById('txtparamrank').disabled=true;
         document.getElementById('txtparamrank').value="";
         frm.optparamfit[1].disabled=true;
         frm.optparamfit[0].disabled=true;
         frm.optparamfit[0].checked=false;
         frm.optparamfit[1].checked=false;



         document.getElementById('selpolice').disabled=true;
         document.getElementById('selpolice').value="";

         document.getElementById('txtpoliceper').disabled=true;
         document.getElementById('txtpoliceper').value="";

         document.getElementById('txtpolicerank').disabled=true;
         document.getElementById('txtpolicerank').value="";
         frm.optpolicefit[1].disabled=true;
         frm.optpolicefit[0].disabled=true;
         frm.optpolicefit[0].checked=false;
         frm.optpolicefit[1].checked=false;



         }*/
    }
}
function wrkexptype() {
    var frm = document.reg_frm;
    if (frm.selwrkexp.value != "") {
        //showdiv('service1');	
        if (frm.selwrkexp.value == "Armed Forces") {
            //showdiv('service2');
            frm.optarmedfit[1].disabled = false;
            frm.optarmedfit[0].disabled = false;
            frm.optarmedfit[1].checked = true;//this line may be commented later
            //hidediv('service3');
            //dv('selparam').value='';

            document.getElementById('selarmed').disabled = false;
            document.getElementById('selarmed').value = "";
            //dv('txtarmedper').value='';
            document.getElementById('txtarmedper').disabled = false;
            document.getElementById('txtarmedper').value = "";
            //dv('txtarmedrank').value='';
            document.getElementById('txtarmedrank').disabled = false;
            document.getElementById('txtarmedrank').value = "";
            frm.optarmedfit[1].disabled = false;
            frm.optarmedfit[0].disabled = false;
            frm.optarmedfit[0].checked = false;
            frm.optarmedfit[1].checked = true;


            document.getElementById('selparam').disabled = true;
            document.getElementById('selparam').value = "";
            //dv('txtparamper').value='';
            document.getElementById('txtparamper').disabled = true;
            document.getElementById('txtparamper').value = "";
            //dv('txtparamrank').value='';
            document.getElementById('txtparamrank').disabled = true;
            document.getElementById('txtparamrank').value = "";
            frm.optparamfit[1].disabled = true;
            frm.optparamfit[0].disabled = true;
            frm.optparamfit[0].checked = false;
            frm.optparamfit[1].checked = false;


            //hidediv('service4');
            //dv('selpolice').value='';
            document.getElementById('selpolice').disabled = true;
            document.getElementById('selpolice').value = "";
            //dv('txtpoliceper').value='';
            document.getElementById('txtpoliceper').disabled = true;
            document.getElementById('txtpoliceper').value = "";
            //dv('txtpolicerank').value='';
            document.getElementById('txtpolicerank').disabled = true;
            document.getElementById('txtpolicerank').value = "";
            frm.optpolicefit[1].disabled = true;
            frm.optpolicefit[0].disabled = true;
            frm.optpolicefit[0].checked = false;
            frm.optpolicefit[1].checked = false;

        }
        else {
            //hidediv('service2');
            //dv('selarmed').value='';
            document.getElementById('selarmed').disabled = true;
            document.getElementById('selarmed').value = "";
            //dv('txtarmedper').value='';
            document.getElementById('txtarmedper').disabled = true;
            document.getElementById('txtarmedper').value = "";
            //dv('txtarmedrank').value='';
            document.getElementById('txtarmedrank').disabled = true;
            document.getElementById('txtarmedrank').value = "";
            frm.optarmedfit[1].disabled = true;
            frm.optarmedfit[0].disabled = true;
            frm.optarmedfit[0].checked = false;
            frm.optarmedfit[1].checked = false;


            document.getElementById('selparam').disabled = false;
            document.getElementById('selparam').value = "";
            //dv('txtparamper').value='';
            document.getElementById('txtparamper').disabled = false;
            document.getElementById('txtparamper').value = "";
            //dv('txtparamrank').value='';
            document.getElementById('txtparamrank').disabled = false;
            document.getElementById('txtparamrank').value = "";
            frm.optparamfit[1].disabled = false;
            frm.optparamfit[0].disabled = false;
            frm.optparamfit[0].checked = false;
            frm.optparamfit[1].checked = true;


            document.getElementById('selpolice').disabled = false;
            document.getElementById('selpolice').value = "";
            //dv('txtpoliceper').value='';
            document.getElementById('txtpoliceper').disabled = false;
            document.getElementById('txtpoliceper').value = "";
            //dv('txtpolicerank').value='';
            document.getElementById('txtpolicerank').disabled = false;
            document.getElementById('txtpolicerank').value = "";
            //frm.optpolicefit[0].checked=false;
            //frm.optpolicefit[1].checked=false;

            frm.optpolicefit[1].disabled = false;
            frm.optpolicefit[0].disabled = false;
            frm.optpolicefit[1].checked = true;//this line may be commented later

            //showdiv('service3');
            //frm.optparamfit[1].checked=true;//this line may be commented later
            //showdiv('service4');
            //frm.optpolicefit[1].checked=true;//this line may be commented later
        }
    }
    else {
        //hidediv('service1');
        //hidediv('service2');
        //dv('selarmed').value='';
        document.getElementById('selarmed').disabled = true;
        document.getElementById('selarmed').value = "";
        //dv('txtarmedper').value='';
        document.getElementById('txtarmedper').disabled = true;
        document.getElementById('txtarmedper').value = "";
        //dv('txtarmedrank').value='';
        document.getElementById('txtarmedrank').disabled = true;
        document.getElementById('txtarmedrank').value = "";
        frm.optarmedfit[1].disabled = true;
        frm.optarmedfit[0].disabled = true;
        frm.optarmedfit[0].checked = false;
        frm.optarmedfit[1].checked = false;


        //hidediv('service3');
        //dv('selparam').value='';
        document.getElementById('selparam').disabled = true;
        document.getElementById('selparam').value = "";
        //dv('txtparamper').value='';
        document.getElementById('txtparamper').disabled = true;
        document.getElementById('txtparamper').value = "";
        //dv('txtparamrank').value='';
        document.getElementById('txtparamrank').disabled = true;
        document.getElementById('txtparamrank').value = "";
        frm.optparamfit[1].disabled = true;
        frm.optparamfit[0].disabled = true;
        frm.optparamfit[0].checked = false;
        frm.optparamfit[1].checked = false;


        //hidediv('service4');
        //dv('selpolice').value='';
        document.getElementById('selpolice').disabled = true;
        document.getElementById('selpolice').value = "";
        //dv('txtpoliceper').value='';
        document.getElementById('txtpoliceper').disabled = true;
        document.getElementById('txtpoliceper').value = "";
        //dv('txtpolicerank').value='';
        document.getElementById('txtpolicerank').disabled = true;
        document.getElementById('txtpolicerank').value = "";
        frm.optpolicefit[1].disabled = true;
        frm.optpolicefit[0].disabled = true;
        frm.optpolicefit[0].checked = false;
        frm.optpolicefit[1].checked = false;

    }
}
/*function relprefdiv()
 {
 if(dv('selpost').value=="15" || dv('selpost').value=="16")
 showdiv('divrelpref');	
 else
 {
 hidediv('divrelpref');
 dv('selregpref').value='';
 }
 }*/
//ended - Photo and Signature Validation

function centerofexam_list() {


    document.getElementById('selexamcentre').value = '';
    document.getElementById('txtcentrecode').value = '';

    document.getElementById('selexamcentre').options.length = 0;
    document.getElementById('selexamcentre').options[0] = new Option('Select', '');

    var postcode = document.getElementById('selpost').value;

    if (postcode != "") {
        //change this code to 17
        if (postcode == "17") {
            var examcenterlist = {
                '11': 'Mumbai',
                '12': 'New Delhi',
                '13': 'Chennai',
                '14': 'Kolkata',
                '15': 'Agra',
                '16': 'Ahmedabad',
                '17': 'Bhagalpur',
                '18': 'Bhopal',
                '19': 'Bhubaneshwar',
                '20': 'Chandigarh',
                '21': 'Coimbatore',
                '22': 'Ghaziabad',
                '23': 'Panjim',
                '24': 'Hyderabad',
                '25': 'Indore',
                '26': 'Jamshedpur',
                '27': 'Bangalore',
                '28': 'Keonjhar',
                '29': 'Cochin',
                '30': 'Lucknow',
                '31': 'Nagpur',
                '32': 'Patna',
                '33': 'Pune',
                '34': 'Raipur',
                '35': 'Jaipur',
                '36': 'Ranchi',
                '37': 'Siliguri',
                '38': 'Vadodara',
                '39': 'Varanasi',
                '40': 'Vishakhapatnam'
            };
        }
        else {
            var examcenterlist = {
                '11': 'Mumbai',
                '12': 'New Delhi',
                '13': 'Chennai',
                '14': 'Kolkata'
            };
        }
    }

    for (key in examcenterlist) {
        addOption(document.reg_frm.selexamcentre, examcenterlist[key], key);
    }
}


function centerofexampet_list() {

    document.getElementById('selpetcentre').value = '';
    //document.getElementById('txtcentrecode').value=''; 

    document.getElementById('selpetcentre').options.length = 0;
    document.getElementById('selpetcentre').options[0] = new Option('Select', '');

    var postcode = document.getElementById('selpost').value;

    if (postcode != "") {
        //change this code to 17
        if (postcode == "17") {
            var petexamcenterlist = {
                '01': 'Navi Mumbai',
                '02': 'Noida',
                '03': 'Pune',
                '04': 'Bhopal',
                '05': 'Kolkata',
                '06': 'Chennai',
                '07': 'Guwahati',
                '08': 'Ranchi'
            };


        }
        else {
            var petexamcenterlist = {
                '01': 'Navi Mumbai',
                '02': 'Noida'
            };
        }
    }

    for (key in petexamcenterlist) {
        addOption(document.reg_frm.selpetcentre, petexamcenterlist[key], key);
    }
}

function chkfee() {

    if (get_radio_value(document.reg_frm.paymentin) == "APGVB") {

        document.getElementById('txtjournalno').value = '';
        document.getElementById('txtbranchcode').value = '';

        document.getElementById('txtcjournalno').value = '';
        document.getElementById('txtbrname').value = '';


        // document.getElementById('txtcity').value='';
        //document.getElementById('txtcity').disabled=true;


    } else if (get_radio_value(document.reg_frm.paymentin) == "SBI") {


        document.getElementById('txtjournalno').value = '';
        document.getElementById('txtbranchcode').value = '';
        document.getElementById('txtcjournalno').value = '';
        document.getElementById('txtbrname').value = '';

        // document.getElementById('txtcity').value='';
        //document.getElementById('txtcity').disabled=false;


        //showdiv('ctr2');
        //hidediv('ctr1');

        //showdiv('ctr4');
        //hidediv('ctr3');


    }


}
function photo_validate(submit_type) {
    //alert("firts");
    if (!validateFormFrame()) {
        return false;
    }
    //alert("ssecon\d");  
    document.reg_photo.action = "reg_photo_success.php";
    document.reg_photo.submit();

}

function isAlphabets(obj_nam) {
    var x = trim(document.getElementById(obj_nam).value);
    var invalids = "`~@#$%^*()_+=\|{}[]:;,.-'\"<>?!/1234567890";
    for (i = 0; i < invalids.length; i++) {
        if (x.indexOf(invalids.charAt(i)) >= 0 || x == false) {
            return false;
        }
    }
    return true;
}

function isAlphabets_special(obj_nam) {
    var x = trim(document.getElementById(obj_nam).value);
    var invalids = "`~@#$%^*()_+=\|{}[]:;,-'\"<>?!/1234567890";
    for (i = 0; i < invalids.length; i++) {
        if (x.indexOf(invalids.charAt(i)) >= 0 || x == false) {
            return false;
        }
    }
    return true;
}

//PHOTO CODE STARTED
//validation for photo and signature
function filevalidate(fileobj, imgtype) {
    //alert(fileobj+"asasasas");

    var imgtype_js = imgtype;
    if (imgtype_js == 'photo') {
        var max_size = '51200';
        var min_size = '20480';
    }
    if (imgtype_js == 'sign') {
        var max_size = '20480';
        var min_size = '10240';
    }
    var node = fileobj;
    var nodeval = fileobj.value;
    var extArray = new Array(".jpg", ".jpeg");
    var allowSubmit = false;
//alert(nodeval);
//alert(node);
    while (nodeval.indexOf("\\") != -1)
        nodeval = nodeval.slice(nodeval.indexOf("\\") + 1);
    ext = nodeval.slice(nodeval.indexOf(".")).toLowerCase();
    for (var i = 0; i < extArray.length; i++) {
        if (extArray[i] == ext) {
            allowSubmit = true;
            break;
        }
    }
    if (!allowSubmit) {
        alert("Please only upload files that end in types:  " + (extArray.join("  ")) + "\nPlease select a new file to upload and submit again.");
        return false;
    }


    /*
     //File size check 

     var browserName=navigator.appName;    
     if(browserName=='Microsoft Internet Explorer'){
     var myFSO = new ActiveXObject("Scripting.FileSystemObject");
     var filepath = node.value;
     var thefile = myFSO.getFile(filepath);
     var check = thefile.size;
     if (check > max_size || check < min_size)
     {
     alert('Your file size is '+check+' It should be between '+min_size+' and '+max_size+'!');
     return false;
     }

     }else
     {
     var check = node.files.item(0).fileSize;

     if (check > max_size || check < min_size)
     {
     alert('Your file size is '+check+' It should be between '+min_size+' and '+max_size+'!');
     return false;
     }
     }
     */
    return true;
}
//PHOTO CODE ENDED


//DVN 


function chkfee_new() {

    if (get_radio_value(document.reg_frm.opt_cat) == "SC" || get_radio_value(document.reg_frm.opt_cat) == "ST" || get_radio_value(document.reg_frm.optdisability) == "Y" || get_radio_value(document.reg_frm.optexservice) == "Y") {

// document.getElementById('onlinerefid').value='';
        document.getElementById('txtjournalno').value = '';
        document.getElementById('txtcjournalno').value = '';
        document.getElementById('txtbrname').value = '';
        document.getElementById('txtbranchcode').value = '';
//document.getElementById('txtcity').value='';
        document.getElementById('seldepday').value = '';
        document.getElementById('seldepmon').value = '';
        document.getElementById('seldepyear').value = '';
        document.getElementById('txtfee').value = '';

//document.getElementById('onlinerefid').disabled=false;
        document.getElementById('txtjournalno').disabled = true;
        document.getElementById('txtcjournalno').disabled = true;
        document.getElementById('txtbrname').disabled = true;
        document.getElementById('txtbranchcode').disabled = true;
//document.getElementById('txtcity').disabled=true;
        document.getElementById('seldepday').disabled = true;
        document.getElementById('seldepmon').disabled = true;
        document.getElementById('seldepyear').disabled = true;
        document.getElementById('txtfee').disabled = true;

    } else {
        document.getElementById('txtjournalno').value = '';
        document.getElementById('txtcjournalno').value = '';
        document.getElementById('txtbrname').value = '';
        document.getElementById('txtbranchcode').value = '';
        document.getElementById('seldepday').value = '';
        document.getElementById('seldepmon').value = '';
        document.getElementById('seldepyear').value = '';

        document.getElementById('txtjournalno').disabled = false;
        document.getElementById('txtcjournalno').disabled = false;
        document.getElementById('txtbrname').disabled = false;
        document.getElementById('txtbranchcode').disabled = false;
        document.getElementById('seldepday').disabled = false;
        document.getElementById('seldepmon').disabled = false;
        document.getElementById('seldepyear').disabled = false;
        document.getElementById('txtfee').disabled = false;


    }


}


/*function enable_category()
 {

 if(document.getElementById('selstateapplied').value =='06' || document.getElementById('selstateapplied').value =='07' || document.getElementById('selstateapplied').value =='08' || document.getElementById('selstateapplied').value =='09')
 {
 document.reg_frm.opt_cat[0].disabled=true;
 document.reg_frm.opt_cat[3].disabled=true;
 document.reg_frm.opt_cat[0].checked=false;
 document.reg_frm.opt_cat[3].checked=false;

 document.reg_frm.opt_cat[1].checked=false;
 document.reg_frm.opt_cat[2].checked=false;
 document.reg_frm.opt_cat[1].disabled=false;
 document.reg_frm.opt_cat[2].disabled=false;


 }
 else if(document.getElementById('selstateapplied').value =='01' || document.getElementById('selstateapplied').value =='02' || document.getElementById('selstateapplied').value =='19')
 {
 document.reg_frm.opt_cat[0].disabled=true;
 document.reg_frm.opt_cat[2].disabled=true;
 document.reg_frm.opt_cat[0].checked=false;
 document.reg_frm.opt_cat[2].checked=false;



 document.reg_frm.opt_cat[1].checked=false;
 document.reg_frm.opt_cat[3].checked=false;
 document.reg_frm.opt_cat[1].disabled=false;
 document.reg_frm.opt_cat[3].disabled=false;



 }
 else if(document.getElementById('selstateapplied').value =='04' || document.getElementById('selstateapplied').value =='05')
 {
 document.reg_frm.opt_cat[0].disabled=true;
 document.reg_frm.opt_cat[1].disabled=true;
 document.reg_frm.opt_cat[2].disabled=true;
 document.reg_frm.opt_cat[0].checked=false;
 document.reg_frm.opt_cat[1].checked=false;
 document.reg_frm.opt_cat[2].checked=false;




 document.reg_frm.opt_cat[3].checked=false;
 document.reg_frm.opt_cat[3].disabled=false;



 }
 else if(document.getElementById('selstateapplied').value =='03' || document.getElementById('selstateapplied').value =='23' || document.getElementById('selstateapplied').value =='24' || document.getElementById('selstateapplied').value =='25' || document.getElementById('selstateapplied').value =='26')
 {
 document.reg_frm.opt_cat[0].disabled=true;
 document.reg_frm.opt_cat[1].disabled=true;
 document.reg_frm.opt_cat[0].checked=false;
 document.reg_frm.opt_cat[1].checked=false;



 document.reg_frm.opt_cat[2].checked=false;
 document.reg_frm.opt_cat[3].checked=false;
 document.reg_frm.opt_cat[2].disabled=false;
 document.reg_frm.opt_cat[3].disabled=false;



 }
 else if(document.getElementById('selstateapplied').value =='27' || document.getElementById('selstateapplied').value =='28')
 {
 document.reg_frm.opt_cat[0].disabled=true;
 document.reg_frm.opt_cat[1].disabled=true;
 document.reg_frm.opt_cat[3].disabled=true;
 document.reg_frm.opt_cat[0].checked=false;
 document.reg_frm.opt_cat[1].checked=false;
 document.reg_frm.opt_cat[3].checked=false;




 document.reg_frm.opt_cat[2].checked=false;
 document.reg_frm.opt_cat[2].disabled=false;



 }
 else if(document.getElementById('selstateapplied').value =='10' || document.getElementById('selstateapplied').value =='20' || document.getElementById('selstateapplied').value =='21')
 {
 document.reg_frm.opt_cat[0].disabled=true;
 document.reg_frm.opt_cat[2].disabled=true;
 document.reg_frm.opt_cat[3].disabled=true;
 document.reg_frm.opt_cat[0].checked=false;
 document.reg_frm.opt_cat[2].checked=false;
 document.reg_frm.opt_cat[3].checked=false;




 document.reg_frm.opt_cat[1].checked=false;
 document.reg_frm.opt_cat[1].disabled=false;



 }
 else if(document.getElementById('selstateapplied').value =='18' || document.getElementById('selstateapplied').value =='22')
 {
 document.reg_frm.opt_cat[0].disabled=true;
 document.reg_frm.opt_cat[0].checked=false;




 document.reg_frm.opt_cat[1].checked=false;
 document.reg_frm.opt_cat[2].checked=false;
 document.reg_frm.opt_cat[3].checked=false;
 document.reg_frm.opt_cat[1].disabled=false;
 document.reg_frm.opt_cat[2].disabled=false;
 document.reg_frm.opt_cat[3].disabled=false;



 }
 else
 {
 document.reg_frm.opt_cat[1].disabled=false;
 document.reg_frm.opt_cat[0].disabled=false;
 document.reg_frm.opt_cat[2].disabled=false;
 document.reg_frm.opt_cat[3].disabled=false;

 document.reg_frm.opt_cat[0].checked=false;
 document.reg_frm.opt_cat[1].checked=false;
 document.reg_frm.opt_cat[2].checked=false;
 document.reg_frm.opt_cat[3].checked=false;
 }

 }*/
//dvn

function LanguageValidate() {
    var LANG1 = 0;
    var LANG2 = 0;
    var LANG3 = 0;
    /*	var LANG4=0;	
     var LANG5=0;*/


    if ((trim(document.getElementById('txtlang1').value) == '') && (!checkbox_value('chklang1[]') ))//regular condition
    {
        LANG1 = 0;

        if (LANG1 == 0) {
            alert("Please enter Language1");
            document.getElementById('txtlang1').focus();
            return false;
        }
    } else {
        LANG1 = 1;

        if (trim(document.getElementById('txtlang1').value) == '') {
            alert("Please enter Language1");
            document.getElementById('txtlang1').focus();
            return false;
        }

        if (trim(document.getElementById('txtlang1').value) != '') {
            if (document.getElementById('lang1r').checked == false || document.getElementById('lang1w').checked == false || document.getElementById('lang1s').checked == false) {
                alert('Read,Write & Speak should be checked for Language1');
                return false;
            }
        }

        if (trim(document.getElementById('txtlang2').value) == '') {
            if (document.getElementById('lang2r').checked == true || document.getElementById('lang2w').checked == true || document.getElementById('lang2s').checked == true) {
                alert('Please enter the language name for lang2');
                return false;
            }
        }

        if (trim(document.getElementById('txtlang2').value) != '') {
            if (document.getElementById('lang2r').checked == false && document.getElementById('lang2w').checked == false && document.getElementById('lang2s').checked == false) {
                alert('Please select Read,Write or Speak for lang2');
                return false;
            }
        }

        if (trim(document.getElementById('txtlang3').value) == '') {
            if (document.getElementById('lang3r').checked == true || document.getElementById('lang3w').checked == true || document.getElementById('lang3s').checked == true) {
                alert('Please enter the language name for lang3');
                return false;
            }
        }

        if (trim(document.getElementById('txtlang3').value) != '') {
            if (document.getElementById('lang3r').checked == false && document.getElementById('lang3w').checked == false && document.getElementById('lang3s').checked == false) {
                alert('Please select Read,Write or Speak for lang3');
                return false;
            }
        }

        /*	if(trim(document.getElementById('txtlang4').value)==''){
         if(document.getElementById('lang4r').checked==true || document.getElementById('lang4w').checked==true || document.getElementById('lang4s').checked==true){
         alert('Please enter the language name for lang4');
         return false;
         }
         }

         if(trim(document.getElementById('txtlang4').value)!=''){
         if(document.getElementById('lang4r').checked==false && document.getElementById('lang4w').checked==false && document.getElementById('lang4s').checked==false){
         alert('Please select Read,Write or Speak for lang4');
         return false;
         }
         }

         if(trim(document.getElementById('txtlang5').value)==''){
         if(document.getElementById('lang5r').checked==true || document.getElementById('lang5w').checked==true || document.getElementById('lang5s').checked==true){
         alert('Please enter the language name for lang5');
         return false;
         }
         }

         if(trim(document.getElementById('txtlang5').value)!=''){
         if(document.getElementById('lang5r').checked==false && document.getElementById('lang5w').checked==false && document.getElementById('lang5s').checked==false){
         alert('Please select Read,Write or Speak for lang5');
         return false;
         }
         }	*/

        if (!isCity('txtlang1')) {
            alert("Language1 should be alphabets / special characters (dot,hypen) allowed");
            document.getElementById('txtlang1').focus();
            return false;
        }


    }


    if ((trim(document.getElementById('txtlang2').value) == '') && !checkbox_value('chklang2[]')) {
        LANG2 = 0;
        /*
         if(LANG2 == 0 )
         {
         alert("Please enter Language2");
         document.getElementById('txtlang2').focus();
         return false;
         }
         */

    } else {
        LANG2 = 1;

        if (trim(document.getElementById('txtlang2').value) == '') {
            alert("Please enter Language2");
            document.getElementById('txtlang2').focus();
            return false;
        }
        if (!isCity('txtlang2')) {
            alert("Language2 should be alphabets / special characters (dot,hypen) allowed");
            document.getElementById('txtlang2').focus();
            return false;
        }


        /*
         if(!checkbox_value('chklang2[]'))
         {
         alert("You should select Read, Write and Speak for English");
         document.getElementById('chklang2[]').focus();
         return false;
         }
         */


        /*if(!checkbox_value('chklang2[]'))
         {
         alert("Please select any one option (Read/Write/Speak) for Language2");
         document.getElementById('chklang2[]').focus();
         return false;
         }*/


        /*
         if(!checkbox_value('chklang2[]'))
         {
         alert("You should select Read, Write and Speak for Language2");
         document.getElementById('chklang2[]').focus();
         return false;
         }
         */

    }


    if ((trim(document.getElementById('txtlang3').value) == '') && (!checkbox_value('chklang3[]') )) {
        LANG3 = 0;
    } else {
        LANG3 = 1;
        if (trim(document.getElementById('txtlang3').value) == '') {
            alert("Please enter Language3");
            document.getElementById('txtlang3').focus();
            return false;
        }
        /*if(!checkbox_value('chklang3[]'))
         {
         alert("Please select any one option (Read/Write/Speak) for Language3");
         document.getElementById('chklang3[]').focus();
         return false;
         } */
        if (!isCity('txtlang3')) {
            alert("Language3 should be alphabets / special characters (dot,hypen) allowed");
            document.getElementById('txtlang3').focus();
            return false;
        }
    }

    /*if( (trim(document.getElementById('txtlang4').value) == '') && (!checkbox_value('chklang4[]') ) )
     {
     LANG4=0;			
     }else{
     LANG4=1;
     if(trim(document.getElementById('txtlang4').value) == '' )
     {
     alert("Please enter Language4");
     document.getElementById('txtlang4').focus();
     return false;
     }
     /*if(!checkbox_value('chklang4[]'))
     {
     alert("Please select any one option (Read/Write/Speak) for Language4");
     document.getElementById('chklang4[]').focus();
     return false;
     }*/
    /*if(!isCity('txtlang4'))
     {
     alert("Language4 should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtlang4').focus();
     return false;
     }
     }*/


    /*	if( (trim(document.getElementById('txtlang5').value) == '') && (!checkbox_value('chklang5[]') ) )
     {
     LANG5=0;			
     }else{
     LANG5=1;
     if(trim(document.getElementById('txtlang5').value) == '' )
     {
     alert("Please enter Language5");
     document.getElementById('txtlang5').focus();
     return false;
     }
     /*if(!checkbox_value('chklang5[]'))
     {
     alert("Please select any one option (Read/Write/Speak) for Language5");
     document.getElementById('chklang5[]').focus();
     return false;
     } */
    /*if(!isCity('txtlang5'))
     {
     alert("Language5 should be alphabets / special characters (dot,hypen) allowed");
     document.getElementById('txtlang5').focus();
     return false;
     }
     }*/

    if ((LANG1 == 0) && (LANG2 == 0) && (LANG3 == 0))
    //if( (LANG1 ==0) && (LANG2 == 0) && (LANG3 ==0))
    //if( (LANG1 ==0) && (LANG2 == 0) && (LANG3 ==0) && (LANG4 == 0) )
    {
        alert("Please enter at least one Language");
        document.getElementById('txtlang1').focus();
        return false;
    }
    return true;
}

function enbale_expyrs() {
    document.reg_frm.txtexp_yrs.disabled = false;
}

function dis_expyrs() {
    document.reg_frm.txtexp_yrs.disabled = true;
    document.reg_frm.txtexp_yrs.value = '';
}


function disable_ex() {

    if (get_radio_value(document.reg_frm.optexservice) == 'Y') {
        document.reg_frm.optdisxs[0].disabled = true;
        document.reg_frm.optdisxs[1].disabled = true;
        document.reg_frm.optdisxs[0].checked = false;
        document.reg_frm.optdisxs[1].checked = false;

        document.reg_frm.optdxs[0].disabled = true;
        document.reg_frm.optdxs[1].disabled = true;
        document.reg_frm.optdxs[0].checked = false;
        document.reg_frm.optdxs[1].checked = false;
    } else {

        //if(get_radio_value(document.reg_frm.optexservice)=='N'){
        document.reg_frm.optdisxs[0].disabled = false;
        document.reg_frm.optdisxs[1].disabled = false;
        document.reg_frm.optdisxs[0].checked = false;
        document.reg_frm.optdisxs[1].checked = true;

        document.reg_frm.optdxs[0].disabled = false;
        document.reg_frm.optdxs[1].disabled = false;
        document.reg_frm.optdxs[0].checked = false;
        document.reg_frm.optdxs[1].checked = true;
    }

}

function disable_ex2() {

    if (get_radio_value(document.reg_frm.optdisxs) == 'Y') {
        document.reg_frm.optexservice[0].disabled = true;
        document.reg_frm.optexservice[1].disabled = true;
        document.reg_frm.optexservice[0].checked = false;
        document.reg_frm.optexservice[1].checked = false;

        document.reg_frm.optdxs[0].disabled = true;
        document.reg_frm.optdxs[1].disabled = true;
        document.reg_frm.optdxs[0].checked = false;
        document.reg_frm.optdxs[1].checked = false;
    } else {

        //if(get_radio_value(document.reg_frm.optexservice)=='N'){
        document.reg_frm.optexservice[0].disabled = false;
        document.reg_frm.optexservice[1].disabled = false;
        document.reg_frm.optexservice[0].checked = false;
        document.reg_frm.optexservice[1].checked = true;

        document.reg_frm.optdxs[0].disabled = false;
        document.reg_frm.optdxs[1].disabled = false;
        document.reg_frm.optdxs[0].checked = false;
        document.reg_frm.optdxs[1].checked = true;
    }

}

function disable_ex3() {

    if (get_radio_value(document.reg_frm.optdxs) == 'Y') {
        document.reg_frm.optexservice[0].disabled = true;
        document.reg_frm.optexservice[1].disabled = true;
        document.reg_frm.optexservice[0].checked = false;
        document.reg_frm.optexservice[1].checked = false;

        document.reg_frm.optdisxs[0].disabled = true;
        document.reg_frm.optdisxs[1].disabled = true;
        document.reg_frm.optdisxs[0].checked = false;
        document.reg_frm.optdisxs[1].checked = false;
    } else {

        //if(get_radio_value(document.reg_frm.optexservice)=='N'){
        document.reg_frm.optexservice[0].disabled = false;
        document.reg_frm.optexservice[1].disabled = false;
        document.reg_frm.optexservice[0].checked = false;
        document.reg_frm.optexservice[1].checked = true;

        document.reg_frm.optdisxs[0].disabled = false;
        document.reg_frm.optdisxs[1].disabled = false;
        document.reg_frm.optdisxs[0].checked = false;
        document.reg_frm.optdisxs[1].checked = true;
    }

}