'use strict';

chrome.bookmarks.onCreated.addListener((id, bookmark) => {
  if (!chrome.runtime.lastError) {
    const { parentId, title } = bookmark;
    chrome.bookmarks.getChildren(parentId, results => {
      if (!chrome.runtime.lastError) {
        for (const children of results) {
          if (title.includes(children.title) && title !== children.title) {
            chrome.bookmarks.update(id, {
              title: title.replace(/\s*\(\d+\)$/, ''),
            });
            break;
          }
        }
      }
    });
  }
});
