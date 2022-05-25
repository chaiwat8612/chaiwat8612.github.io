function hello() {
    alert('hello');
}

function getStat() {
    var objJs = document.getElementById("jsResult");
    objJs.innerHTML = "JavaScript can run";

    var uaVal = navigator.userAgent.toUpperCase();

    var objUa = document.getElementById("uaResult");
    objUa.innerHTML = uaVal;
}

function closeSmartBanner(objName) {
    document.getElementById(objName).style.display = "none";
}

function _detectOS() {

    //get userAgent
    var ua = navigator.userAgent.toUpperCase();

    //find OS
    var isAndroid = ua.indexOf("ANDROID") > -1;
    var isIPhone = ua.indexOf("IPHONE") > -1;
    var isIPad = ua.indexOf("IPAD") > -1;

    //send back OS value
    if (isAndroid) {
        return "ANDROID";
    } else if (isIPhone) {
        return "IPHONE";
    } else if (isIPad) {
        return "IPAD";
    } else {
        return "OTHERS";
    }
}

function changeToInstagram() {

    //get OS value
    var valOS = _detectOS();

    //action value
    var androidIntent = "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";
    var iOSPackage = "https://apps.apple.com/us/app/instagram/id389801252";
    var iOSCommand = "instagram://";

    if (valOS == "ANDROID") {

        //FOR ANDROID
        window.location.replace(androidIntent);

    } else if ((valOS == "IPHONE") || (valOS == "IPAD")) {

        //FOR IPHONE AND IPAD
        var now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            window.location = iOSPackage;
        }, 25);
        window.location = iOSCommand;

    } else {
        //NOTHING TO DO
    }
}

function changeToUmay() {

    //get OS value
    var valOS = _detectOS();

    //action value
    var androidIntent = "intent://umayplus.com/#Intent;scheme=https;package=com.aim.android.umay;end";
    var iOSPackage = "https://appsto.re/th/PXm64.i";
    var iOSCommand = "umayplus://";

    if (valOS == "ANDROID") {

        //FOR ANDROID
        window.location.replace(androidIntent);

    } else if ((valOS == "IPHONE") || (valOS == "IPAD")) {

        //FOR IPHONE AND IPAD
        var now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            window.location = iOSPackage;
        }, 25);
        window.location = iOSCommand;

    } else {
        //NOTHING TO DO
    }
}