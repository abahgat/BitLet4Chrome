function init() {
    debugMsg(logLevels.info, 'Background page init');

    chrome.extension.onRequest.addListener(function(request, sender) {
        if (request.msg == "bitletIcon") {
            chrome.pageAction.setTitle({
                tabId: sender.tab.id,
                title: "Click to highlight torrent links..."
            });
            chrome.pageAction.show(sender.tab.id);
        }
    });
}