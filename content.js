// This content script runs in the context of the web page

// Function to detect audio elements on the page
function detectAudioElements() {
    const audioElements = document.querySelectorAll("audio");
    audioElements.forEach((audio) => {
      audio.addEventListener("play", () => {
        const songTitle = audio.title || document.title;
        chrome.runtime.sendMessage({ action: "detectSong", title: songTitle });
      });
    });
  }
  
  // Listen for DOM changes to detect dynamically added audio elements
  const observer = new MutationObserver(() => {
    detectAudioElements();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  
  // Detect audio elements on page load
  detectAudioElements();
  