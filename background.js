chrome.action.onClicked.addListener((tab) => {
    chrome.downloads.download({ url: "path_to_your_os.zip", filename: "MyOS.zip", conflictAction: "uniquify" });
  });
  