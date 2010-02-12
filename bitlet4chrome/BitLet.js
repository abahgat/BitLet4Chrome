var BitLet = {
	openPopup : function(torrentUrl) {
	    var popUpWindow = window.open("http://www.bitlet.org/download?torrent=" + torrentUrl + "&referer=" + encodeURIComponent(location.href) + '&source=bitlet4chrome','', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=400,height=150');
	    if (popUpWindow==null || typeof(popUpWindow)=="undefined") {
	        return false;
	    } else {
	        return true;
	    }
	},

	openPopupChecked : function(torrentUrl) {
	    if (!BitLet.openPopup(torrentUrl))
	        alert("Grrrr, someone is blocking the download popup window. Please disable any popup blocker.");
	    return false;
	},

	openDownloadFromAnchor : function(anchor){
	    var torrentUrl = BitLet.getURLParam("torrent",anchor.href);
	    if (torrentUrl.lenght == 0){
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