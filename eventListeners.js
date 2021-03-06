document.getElementById("blur").addEventListener("click", blurcontent, false);
document.getElementById("windowClose").addEventListener("click", windowclose, false);
document.getElementById("quickRemove").addEventListener("click", clearData, false);
document.getElementById("activateFullScreen").addEventListener("click", function() {
    if(document.fullscreenElement === null) {
        document.getElementById("html").requestFullscreen();
        document.getElementById("activateFullScreen").value = "Exit Fullscreen";
    }
    else {
        document.exitFullscreen();
        document.getElementById("activateFullScreen").value = "Activate Fullscreen";
    }
}, false);
document.getElementById("toggleDarkMode").addEventListener("click", toggleDarkMode, false);
document.getElementById("toggleSimpleMode").addEventListener("click", toggleSimpleMode, false);
document.getElementById("toggleCoffeeMode").addEventListener("click", toggleCoffeeMode, false);
document.getElementById("toggleBlueLightFilter").addEventListener("click", toggleBlueLightFilter, false);
document.getElementById("versionInfoViewer").addEventListener("click", versionInfoView, false);
document.getElementById("openGHPage").addEventListener("click", aboutInBrowser, false);
document.getElementById("reportIssues").addEventListener("click", reportIssues, false);
document.getElementById("browserfullscreen").addEventListener("click", fullscreen, false);
document.getElementById("navigationbutton").addEventListener("click", function() {
    nav(document.getElementById("navurl").value)
}, false);
document.getElementById("refreshbutton").addEventListener("click", refreshiframe, false);
document.getElementById("frame").addEventListener("load", loadedframe, false);