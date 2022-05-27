function hello() {
    alert('hello');
}

function getStat() {

    window.addEventListener('hashchange', function() {
        // this.alert("123");
        // history.pushState({},"URL Rewrite Example","https://stackoverflow.com/example")
        // this.alert('finish command');
    })
}

function clearLog(){
    var objLog = document.getElementById("logWeb");
    objLog.innerHTML = "Log";
}

function writeLog(newLog){
    var objLog = document.getElementById("logWeb");
    var tmpLog = objLog.innerHTML + "<p style='margin: 0px'>" + newLog + "</p>";
    objLog.innerHTML = tmpLog;
}

function clearException(){
    var objExcep = document.getElementById("logExcep");
    objExcep.innerHTML = "Exception<br>";
}

function writeException(excepLog){
    var objExcep = document.getElementById("logExcep");
    var tmpLog = objExcep.innerHTML + "<p style='margin: 0px'>" + excepLog + "</p>";
    objExcep.innerHTML = tmpLog;
}

function closeSmartBanner(objName) {
    document.getElementById(objName).style.display = "none";
}

function changeToInstagram() {

    clearLog();
    clearException();

    writeLog("1.User push Open from Instagram");

    //get userAgent
    var ua = navigator.userAgent.toUpperCase();

    //find OS
    var isAndroid = ua.indexOf("ANDROID") > -1;
    var isIPhone = ua.indexOf("IPHONE") > -1;
    var isIPad = ua.indexOf("IPAD") > -1;
    var isMacintosh = ua.indexOf("MACINTOSH") > -1;
    var haveCRI = ua.indexOf("CRIOS") > -1;

    //action value
    var androidIntent = "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";
    var iOSPackage = "https://apps.apple.com/us/app/instagram/id389801252";
    var iOSCommand = "instagram://";

    if (isAndroid == true) {

        //FOR ANDROID
        writeLog("2.Website Detect: Device is Android");
        writeLog("3.Website browser Chrome by default");

        try {
            writeLog("4.Website try to Open App");
            window.location.replace(androidIntent);
        }
        catch (ex) {
            console.error(ex.message);
        }

    } else if (isIPhone == true) {

        //FOR IPHONE
        writeLog("2.Website Detect: Device is iPhone");

        //Check Chrome or Safari
        if (haveCRI == true) {

            //FOR CHROME
            writeLog("3.Website Detect: Chrome");

            writeLog("4.Website try to open Instagram");

            try{
                var now = new Date().valueOf();
                setTimeout(function () {
                    if (new Date().valueOf() - now > 100) return;
                    window.location = iOSPackage;
                }, 25);
                window.location = iOSCommand;
            }
            catch(ex){
                console.log(ex.message);
                writeException(ex.message);
            }            

        } else {

            //FOR SAFARI
            writeLog("3.Website Detect: Safari");

            writeLog("4.Website try to open Instagram");

            try{

                setTimeout(function () { window.location = "https://apps.apple.com/us/app/instagram/id389801252"; }, 25);
                window.location = "instagram://";

            }catch(ex){
                console.log(ex.message);
                writeException(ex.message);
            }            
        }

    } else {
        //NOTHING TO DO
    }
}

function changeToUmay() {

    clearLog();
    clearException();

    writeLog("1.User push Open from Umayplus");

    //get userAgent
    var ua = navigator.userAgent.toUpperCase();

    //find OS
    var isAndroid = ua.indexOf("ANDROID") > -1;
    var isIPhone = ua.indexOf("IPHONE") > -1;
    var isIPad = ua.indexOf("IPAD") > -1;
    var isMacintosh = ua.indexOf("MACINTOSH") > -1;
    var haveCRI = ua.indexOf("CRIOS") > -1;

    //action value
    var androidIntent = "intent://umayplus.com/#Intent;scheme=https;package=com.aim.android.umay;end";
    var iOSPackage = "https://appsto.re/th/PXm64.i";
    var iOSCommand = "umayplus://";

    if (isAndroid == true) {

        //FOR ANDROID
        writeLog("2.Website Detect: Device is Android");
        writeLog("3.Website use browser Chrome by default");

        try {
            writeLog("4.Website try to Open App");
            window.location.replace(androidIntent);
        }
        catch (ex) {
            console.error(ex.message);
        }

    } else if (isIPhone == true) {

        //FOR IPHONE
        writeLog("2.Website Detect: Device is iPhone");

        //Check Chrome or Safari
        if (haveCRI == true) {

            //FOR CHROME
            writeLog("3.Website Detect: Chrome");

            writeLog("4.Website try to open Umayplus");

            try{
                var now = new Date().valueOf();
                setTimeout(function () {
                    if (new Date().valueOf() - now > 100) return;
                    window.location = iOSPackage;
                }, 25);
                window.location = iOSCommand;
            }
            catch(ex){
                console.log(ex.message);
                writeException(ex.message);
            }            

        } else {

            //FOR SAFARI
            writeLog("3.Website Detect: Safari");

            writeLog("4.Website try to open Umayplus");

            try{

                setTimeout(function () { window.location = "https://appsto.re/th/PXm64.i"; }, 25);
                window.location = "umayplus://";

            }catch(ex){
                console.log(ex.message);
                writeException(ex.message);
            }            
        }

    } else {
        //NOTHING TO DO
    }
}