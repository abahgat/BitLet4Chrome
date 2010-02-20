function init() {
    debugMsg(logLevels.info, 'Background page init');

    chrome.extension.onRequest.addListener(function(request, sender) {
        if (request.msg == "bitletIcon") {
            chrome.pageAction.setTitle({
                tabId: sender.tab.id,
                title: "BitLet 4 Chrome - This page contains links to torrents."
            });
            chrome.pageAction.show(sender.tab.id);
        } else if (request.msg == "openPopup") {
			BitLet.openPopupChecked(request.torrentUrl);
		}
    });
}