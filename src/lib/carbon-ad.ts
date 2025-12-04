declare global {
  interface Window {
    _carbonads: {
      refresh: () => void;
    };
  }
}

export function refreshCarbonAd() {
  console.log("Refreshing carbon ad");

  // If the ad hasn't loaded yet, don't refresh it while it's still loading, or it will return two (or more) ads
  const carbonAds = document.querySelector("#carbonads");
  if (!carbonAds) return;

  // If the script hasn't loaded, don't try calling it
  if (
    typeof window !== "undefined" &&
    typeof window._carbonads !== "undefined"
  ) {
    window._carbonads.refresh();
  }
}
