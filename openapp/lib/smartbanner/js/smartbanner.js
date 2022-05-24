function hello() {
    alert('hello');
}

function closeSmartBanner(objName) {
    document.getElementById(objName).style.display = "none";
}

function _detectOS() {
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

    var valOS = _detectOS();

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

        //old code 2
        // var now = new Date().valueOf();
        // setTimeout(function () {
        //     if (new Date().valueOf() - now > 100) return;
        //     window.location = "https://apps.apple.com/us/app/instagram/id389801252";
        // }, 25);
        // window.location = "instagram://";

        //new code
        // setTimeout(function () { window.location = "https://apps.apple.com/us/app/instagram/id389801252"; }, 25);
        // window.location = "instagram://";

        window.location.replace("instagram://");

        setTimeout(() => {
            window.location.replace(
                "https://apps.apple.com/us/app/instagram/id389801252"
            );
        }, 3000);

    } else {
        //NOTHING TO DO
    }    
}

function changeToUmay() {

    var valOS = _detectOS();

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

        //old code 2
        // var now = new Date().valueOf();
        // setTimeout(function () {
        //     if (new Date().valueOf() - now > 100) return;
        //     window.location = "https://appsto.re/th/PXm64.i";
        // }, 25);
        // window.location = "umayplus://";

        //new code
        // setTimeout(function () { window.location = "https://appsto.re/th/PXm64.i"; }, 25);
        // window.location = "umayplus://";

        window.location.replace("umayplus://");

        setTimeout(() => {
            window.location.replace(
                "https://appsto.re/th/PXm64.i"
            );
        }, 3000);

    } else {
        //NOTHING TO DO
    }
}