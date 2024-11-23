const cemYilmazImage = chrome.runtime.getURL("replace.jpg");

function replaceImages() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.src = cemYilmazImage;
    img.srcset = "";
    img.removeAttribute("loading");
  });
}

// it doesnt work ngl
// function replaceVideos() {
//     const images = document.querySelectorAll("video");
//     images.forEach((img) => {
//       img.src = cemYilmazImage;
//       img.srcset = "";
//       img.removeAttribute("loading");
//     });
//   }

function init() {
  replaceImages();
  // replaceVideos(); 

  const observer = new MutationObserver(() => {
    replaceImages();
    // replaceVideos(); 

  });

  observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
