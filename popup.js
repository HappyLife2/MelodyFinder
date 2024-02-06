// Script to display detected song in popup

// Function to update popup with detected song information
function updatePopup(songInfo) {
    const songInfoDiv = document.getElementById("songInfo");
    songInfoDiv.textContent = songInfo;
  }
  
  // Fetch detected song information from background script
  chrome.runtime.sendMessage({ action: "getDetectedSong" }, (response) => {
    if (response) {
      updatePopup(response);
    }
  });
  