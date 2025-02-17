const phindURL = 'https://www.phind.com'

// Launch Phind on toolbar icon click
chrome.action.onClicked.addListener(() => chrome.tabs.create({ url: phindURL }))

// Query Phind on omnibox query submitted
chrome.omnibox.onInputEntered.addListener(query =>
    chrome.tabs.update({ url: `${phindURL}/search?q=${decodeURIComponent(query)}` }))
