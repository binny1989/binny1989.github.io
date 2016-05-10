var adDisplayContainer, adsLoader, adsManager, adsRequest;
var $adsContainer = $('#adsContainer');

$('.adlinks a').click(function(e) {
  e.preventDefault();
  setup();
  requestAds($(this).attr('href'));
});

function setup() {

  if (adDisplayContainer)
    return;

  adDisplayContainer = new google.ima.AdDisplayContainer($adsContainer.get(0));
  adDisplayContainer.initialize();

  // Re-use this AdsLoader instance for the entire lifecycle of your page.
  adsLoader = new google.ima.AdsLoader(adDisplayContainer);

  // Add event listeners
  adsLoader.addEventListener(
    google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
    onAdsManagerLoaded,
    false);
  adsLoader.addEventListener(
    google.ima.AdErrorEvent.Type.AD_ERROR,
    onAdError,
    false);

}

$(window).resize(function() {
  if (adsManager) {
    adsManager.resize($adsContainer.width(), $adsContainer.height(), google.ima.ViewMode.NORMAL);
  }
});

function onAdError(adErrorEvent) {
  log(adErrorEvent.type + " " + adErrorEvent.getError());
  // Handle the error logging and destroy the AdsManager
  adsManager.destroy();
}

function onAdsManagerLoaded(adsManagerLoadedEvent) {
  logEvent(adsManagerLoadedEvent);
  // Get the ads manager.
  adsManager = adsManagerLoadedEvent.getAdsManager({
    currentTime: 0 // real <video /> not needed for demo
  });

  var Type = google.ima.AdEvent.Type;
  adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);

  adsManager.addEventListener(Type.AD_CAN_PLAY, logEvent);
  adsManager.addEventListener(Type.AD_BREAK_READY, logEvent);
  adsManager.addEventListener(Type.AD_METADATA, logEvent);
  adsManager.addEventListener(Type.ALL_ADS_COMPLETED, logEvent);
  adsManager.addEventListener(Type.CLICK, logEvent);
  adsManager.addEventListener(Type.COMPLETE, logEvent);
  adsManager.addEventListener(Type.CONTENT_PAUSE_REQUESTED, logEvent);
  adsManager.addEventListener(Type.CONTENT_RESUME_REQUESTED, logEvent);
  adsManager.addEventListener(Type.EXPANDED_CHANGED, logEvent);
  adsManager.addEventListener(Type.FIRST_QUARTILE, logEvent);
  adsManager.addEventListener(Type.IMPRESSION, logEvent);
  adsManager.addEventListener(Type.LOADED, logEvent);
  adsManager.addEventListener(Type.LOG, logEvent);
  adsManager.addEventListener(Type.MIDPOINT, logEvent);
  adsManager.addEventListener(Type.DURATION_CHANGE, logEvent);
  adsManager.addEventListener(Type.PAUSED, logEvent);
  adsManager.addEventListener(Type.RESUMED, logEvent);
  adsManager.addEventListener(Type.SKIPPED, logEvent);
  adsManager.addEventListener(Type.SKIPPABLE_STATE_CHANGED, logEvent);
  adsManager.addEventListener(Type.STARTED, logEvent);
  adsManager.addEventListener(Type.THIRD_QUARTILE, logEvent);
  adsManager.addEventListener(Type.USER_CLOSE, logEvent);
  adsManager.addEventListener(Type.VOLUME_CHANGED, logEvent);
  adsManager.addEventListener(Type.VOLUME_MUTED, logEvent);

  adsManager.addEventListener(Type.LOADED, function() {
    adsManager.setVolume(.5)
  });

  try {
    // Initialize the ads manager. Ad rules playlist will start at this time.
    adsManager.init($adsContainer.width(), $adsContainer.height(), google.ima.ViewMode.NORMAL);
    // Call start to show ads. Single video and overlay ads will
    // start at this time; this call will be ignored for ad rules, as ad rules
    // ads start when the adsManager is initialized.
    adsManager.start();
  } catch (adError) {
    // An error may be thrown if there was a problem with the VAST response.
  }
}

function logEvent(e) {
  log("AdEvent: " +
    e.type + " " +
    (e.data ? JSON.stringify(e.data) : ""));
}

function requestAds(tag) {
  // Request video ads.

  if (adsManager) {
    adsManager.destroy();
    adsManager = null;
  }
  var adsRequest = new google.ima.AdsRequest();
  adsRequest.adTagUrl = tag;

  // Specify the linear and nonlinear slot sizes. This helps the SDK to
  // select the correct creative if multiple are returned.
  adsRequest.linearAdSlotWidth = 640;
  adsRequest.linearAdSlotHeight = 400;
  adsRequest.nonLinearAdSlotWidth = 640;
  adsRequest.nonLinearAdSlotHeight = 150;

  log("adsRequest: " + tag);
  adsLoader.requestAds(adsRequest);
}

var $out = $('#out');
var start = performance.now();

function log(msg) {
  var time = (new Date()).toISOString().split("T")[1]
  $("<div />").text(time + " :: " + msg)
    .appendTo($out);
  $out.parent().scrollTop($out.height())

}