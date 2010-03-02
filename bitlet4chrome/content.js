/*
Copyright 2010 Alessandro Bahgat Shehata and Daniele Castagna

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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

		// check if the URL matches one of the (known) formats for torrent links 
        for (format in torrentLinkFormats) {
            if (href.match(torrentLinkFormats[format])) {
                debugMsg(logLevels.info, "link found: " + href);
                linkBitLetAsPopup(anchor, href);
                linkFound = true;
                break;
            }
        }
    }

    if (linkFound) {
        displayIcon();
    }
}

/* changes the link to the torrent so that it opens BitLet's homepage, ready to download it */
function linkBitLet(anchor, href){
    anchor.onclick = function() {
        location.href = "http://www.bitlet.org/?torrent=" + encodeURIComponent(href) + "&source=bitlet4chrome";
        return false;
    }
}

/* makes torrent links open BitLet's download popup */
function linkBitLetAsPopup(anchor, href){
	// clicks will open the popup
    anchor.onclick = function() {
		chrome.extension.sendRequest({
	        msg: "openPopup",
			torrentUrl: href
	    });
		return false;
    }
	
	addClass(anchor, "bitletlink");
	
	// add a tooltip on the link
	anchor.onmouseover=function() { tooltip.show('<span class="headline">Download torrent with <span class="bitlet">BitLet<span class="dot">.</span><span class="org">org</span></span></span><br/><span class="small">(Right click and select the <i>save as</i> option to download just the .torrent file.)</span>'); }
	anchor.onmouseout=function() { tooltip.hide(); };
}

/*
 displays the page action icon
*/
function displayIcon() {
    chrome.extension.sendRequest({
        msg: "bitletIcon"
    });
    debugMsg(logLevels.info, 'Icon request sent');
}

/* Gets executed every time a new page is loaded: checks if there is any link
 	to a torrent file and changes its behavious so that the file will be
	downloaded with BitLet */
checkLinks();