function hello() {
    alert('hello');
}

function closeSmartBanner(objName) {
    document.getElementById(objName).style.display = "none";
}

function _getDevice() {
    var ua = navigator.userAgent.toUpperCase();
    var isAndroid = ua.indexOf("ANDROID") > -1;
    var isIPhone = ua.indexOf("IPHONE") > -1;

    if (isAndroid) {
        return "ANDROID";
    } else if (isIPhone) {
        return "IPHONE";
    } else {
        return "OTHERS";
    }
}

function changeToInstagram() {

    var valOS = _getDevice();

    if (valOS == "ANDROID") {
        //FOR ANDROID
        const url = "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";
        window.location.replace(url);

    } else if (valOS == "IPHONE") {
        //FOR IPHONE
        //old code
        // window.location.replace("instagram://");

        // setTimeout(() => {
        //     window.location.replace(
        //         "https://apps.apple.com/us/app/instagram/id389801252"
        //     );
        // }, 10000);

        //new code
        var now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            window.location = "https://apps.apple.com/us/app/instagram/id389801252";
        }, 25);
        window.location = "instagram://";

    } else {
        //NOTHING TO DO
    }
}

function changeToUmay() {

    var valOS = _getDevice();

    if (valOS == "ANDROID") {
        //FOR ANDROID
        const url = "intent://umayplus.com/#Intent;scheme=https;package=com.aim.android.umay;end";
        window.location.replace(url);

    } else if (valOS == "IPHONE") {
        //FOR IPHONE
        //old code
        // window.location.replace("umayplus://");

        // setTimeout(() => {
        //     window.location.replace(
        //         "https://appsto.re/th/PXm64.i"
        //     );
        // }, 10000);

        //new code
        var now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            window.location = "https://appsto.re/th/PXm64.i";
        }, 25);
        window.location = "umayplus://";

    } else {
        //NOTHING TO DO
    }
}