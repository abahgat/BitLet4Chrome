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

// the oject used to open torrent links in BitLet
var BitLet = {
	/*
	 Opens the torrentUrl in the popup
	*/
	openPopup : function(torrentUrl) {
	    var popUpWindow = window.open("http://www.bitlet.org/download?torrent=" + torrentUrl + "&referer=" + encodeURIComponent(location.href) + '&source=bitlet4chrome','', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=400,height=200');
	    if (popUpWindow==null || typeof(popUpWindow)=="undefined") {
	        return false;
	    } else {
	        return true;
	    }
	},

	/*
	 Tries to open the torrentUrl in the popup and warns the user if it can't
	*/
	openPopupChecked : function(torrentUrl) {
	    if (!BitLet.openPopup(torrentUrl))
	        alert("Grrrr, someone is blocking the download popup window. Please disable any popup blocker.");
	    return false;
	},

	openDownloadFromAnchor : function(anchor){
	    var torrentUrl = BitLet.getURLParam("torrent",anchor.href);
	    if (torrentUrl.length == 0){
	        alert("Missing \"torrent\" parameter");
	        return false;
	    }

	    BitLet.openPopupChecked(torrentUrl);
	    return false;
	},

	getURLParam : function(paramName,url){
	    var paramValue = null;
	    if ( url.indexOf("?") > -1 ){
	        var queryString = url.substr(url.indexOf("?"));
	        var parameters = queryString.split("&");
	        for ( var i = 0; i < parameters.length; i++ ){
	            if ( parameters[i].indexOf(paramName + "=") > -1 ){
	                var paramTuple = parameters[i].split("=");
	                paramValue = paramTuple[1];
	                break;
	            }
	        }
	    }
	    return paramValue;
    }
};