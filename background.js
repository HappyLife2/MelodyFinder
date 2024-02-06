// This background script listens for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "detectSong") {
      const songTitle = message.title;
      // Perform song identification here (you can replace this with your song detection logic)
      const identifiedSong = identifySong(songTitle);
      sendResponse(identifiedSong);
    }
  });
  
  // Example function to identify song (replace this with your own logic)
  function identifySong(title) {
    // Mocking song identification with a simple message
    return "Identified song: " + title;
  }
  