'use strict';

chrome.bookmarks.onCreated.addListener((id, bookmark) => {
  const { title } = bookmark;
  if (title.match(/^───────────/) || title.match(/^\s*\(\d+\)$/)) {
    chrome.bookmarks.update(id, {
      title: bookmark.title.replace(/\s*\(\d+\)/, ''),
    });
  }
});
