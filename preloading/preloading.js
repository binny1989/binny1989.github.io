// Copyright 2013 Google Inc. All Rights Reserved.
// You may study, modify, and use this example for any purpose.
// Note that this example is provided "as is", WITHOUT WARRANTY
// of any kind either expressed or implied.

var adsManager;
var adsLoader;
var adsRequest;
var adDisplayContainer;
var intervalTimer;
var playButton,preloadButton,consoleLog;
var videoContent;
var isOnRequest = false;

function init() {
	consoleLog = document.getElementById('console');
	videoContent = document.getElementById('contentElement');
	playButton = document.getElementById('playButton');
	playButton.addEventListener('click', playAds);
	preloadButton = document.getElementById('preloadButton');
	preloadButton.addEventListener('click', preloadAds);
	setUpIMA();
}

function setUpIMA() {
	// Create the ad display container.
	createAdDisplayContainer();
	// Create ads loader.
	adsLoader = new google.ima.AdsLoader(adDisplayContainer);
	// Listen and respond to ads loaded and error events.
	adsLoader.addEventListener(
		google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
		onAdsManagerLoaded,
		false);
	adsLoader.addEventListener(
		google.ima.AdErrorEvent.Type.AD_ERROR,
		onAdError,
		false);

	// Request video ads.
	adsRequest = new google.ima.AdsRequest();
	adsRequest.adTagUrl = "https://pubads.g.doubleclick.net/gampad/ads?sz=400x300&iu=/72913078/Zoom_App_VideoPreroll&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]";

	// Specify the linear and nonlinear slot sizes. This helps the SDK to
	// select the correct creative if multiple are returned.
	adsRequest.linearAdSlotWidth = 640;
	adsRequest.linearAdSlotHeight = 400;

	adsRequest.nonLinearAdSlotWidth = 640;
	adsRequest.nonLinearAdSlotHeight = 150;

}


function createAdDisplayContainer() {
	// We assume the adContainer is the DOM id of the element that will house
	// the ads.
	adDisplayContainer = new google.ima.AdDisplayContainer(
		document.getElementById('adContainer'), videoContent);
}

function playAds() {
	adsManager.start();
}

function preloadAds(){
	// Initialize the container. Must be done via a user action on mobile devices.
	//videoContent.load();
	adDisplayContainer.initialize();

	if(isOnRequest){
		ownlog("Already on Request");
		return;
	}
	isOnRequest = true;
	ownlog("Start Request");
	adsLoader.requestAds(adsRequest);

}

function onAdsManagerLoaded(adsManagerLoadedEvent) {
	// Get the ads manager.
	var adsRenderingSettings = new google.ima.AdsRenderingSettings();
	adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
	adsRenderingSettings.enablePreloading = true;
	// videoContent should be set to the content video element.
	adsManager = adsManagerLoadedEvent.getAdsManager(
		videoContent, adsRenderingSettings);

	// Add listeners to the required events.
	adsManager.addEventListener(
		google.ima.AdErrorEvent.Type.AD_ERROR,
		onAdError);
	adsManager.addEventListener(
		google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
		onContentPauseRequested);
	adsManager.addEventListener(
		google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
		onContentResumeRequested);
	adsManager.addEventListener(
		google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
		onAdEvent);

	// Listen to any additional events, if necessary.
	adsManager.addEventListener(
		google.ima.AdEvent.Type.LOADED,
		onAdEvent);
	adsManager.addEventListener(
		google.ima.AdEvent.Type.STARTED,
		onAdEvent);
	adsManager.addEventListener(
		google.ima.AdEvent.Type.COMPLETE,
		onAdEvent);

	isOnRequest = false;
	try {
		// Initialize the ads manager. Ad rules playlist will start at this time.
		adsManager.init(640, 360, google.ima.ViewMode.NORMAL);
		// Call play to start showing the ad. Single video and overlay ads will
		// start at this time; the call will be ignored for ad rules.
		//adsManager.start();
	} catch (adError) {
		// An error may be thrown if there was a problem with the VAST response.
		videoContent.play();
	}
}

function onAdEvent(adEvent) {
	// Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
	// don't have ad object associated.
	var ad = adEvent.getAd();
	ownlog(adEvent.type + " ads");
	switch (adEvent.type) {
	case google.ima.AdEvent.Type.LOADED:
		// This is the first event sent for an ad - it is possible to
		// determine whether the ad is a video ad or an overlay.
		if (!ad.isLinear()) {
		// Position AdDisplayContainer correctly for overlay.
		// Use ad.width and ad.height.
		videoContent.play();
		}
		break;
	case google.ima.AdEvent.Type.STARTED:
		// This event indicates the ad has started - the video player
		// can adjust the UI, for example display a pause button and
		// remaining time.
		if (ad.isLinear()) {
		// For a linear ad, a timer can be started to poll for
		// the remaining time.
		intervalTimer = setInterval(
			function() {
				var remainingTime = adsManager.getRemainingTime();
			},
			300); // every 300ms
		}
		break;
	case google.ima.AdEvent.Type.COMPLETE:
		// This event indicates the ad has finished - the video player
		// can perform appropriate UI actions, such as removing the timer for
		// remaining time detection.
		if (ad.isLinear()) {
		clearInterval(intervalTimer);
		}
		break;
	}
}

function onAdError(adErrorEvent) {
	// Handle the error logging.
	isOnRequest = false;
	ownlog(adErrorEvent.getError());
	adsManager.destroy();
}

function onContentPauseRequested() {
	videoContent.pause();
	// This function is where you should setup UI for showing ads (e.g.
	// display ad timer countdown, disable seeking etc.)
	// setupUIForAds();
}

function onContentResumeRequested() {
	videoContent.play();
	// This function is where you should ensure that your UI is ready
	// to play content. It is the responsibility of the Publisher to
	// implement this function when necessary.
	// setupUIForContent();

}


function ownlog(message) {
  console.log(message);
  consoleLog.innerHTML = message + '<br/>' + consoleLog.innerHTML;
};
// Wire UI element references and UI event listeners.
init();
