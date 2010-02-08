checkLinks();

function checkLinks() {
    var anchors = document.getElementsByTagName("a");
    var linkFound = false;

    for (var i=0; i<anchors.length; ++i){
        var anchor = anchors[i];
        var href = anchor.href;

        // normalize the href link
        if (!href.match(/^http:\/\//)){
            href = location.href.substring(0,location.href.length - location.pathname.length) + href;
        }

        // skip links that already point to bitlet ;)
        if (href.match(/^http:\/\/www.bitlet.org/))
            return;

        for (format in torrentLinkFormats) {
            if (href.match(torrentLinkFormats[format])) {
                debugMsg(logLevels.info, "link found: " + href);
                linkBitLet(anchor, href);
                linkFound = true;
                break;
            }
        }
    }

    if (linkFound) {
        displayIcon();
    }
}

function linkBitLet(anchor, href){
    anchor.onclick = function() {
        location.href = "http://www.bitlet.org/?torrent=" + encodeURIComponent(href) + "&source=bitlet4chrome";
        return false;
    }
}

function displayIcon() {
    chrome.extension.sendRequest({
        msg: "bitletIcon"
    });
    debugMsg(logLevels.info, 'Icon request sent');
}