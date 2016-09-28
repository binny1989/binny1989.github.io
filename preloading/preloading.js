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
	adsRequest.adTagUrl = "https://bid.g.doubleclick.net/dbm/vast?dbm_c=AKAmf-ALHji9UbrfTf4UNRgaXaa1t5XhYUaXjLOrTuDELY50IxDd9h5CsxopLomZfUD8vvlpLlOA&dbm_d=AKAmf-AU8158saPo21507G8Xg_o7d1nEjctRKReCHAVL4wZPVCTYcJyeh8JfGXK13yIDe8et59VQfsDh_llnHhss_L_v5OCZrcD_FomwKtHdwqKiU0JJLNA0Lltf5JLSkrjQ2sySVpxPwKyf5cdvNgE1wgATLwYK_4gwG2AKQqDpQNtmsuPoremQSRfL_EJz_GSuIU3XmL0-QLmJGc4yjIy1Sp786HgzUIkskKoI5drs4_NIqPeVvXidPVR4Jn_WX2oxWkn5rTpQ0_oRWocGBYgMbfSMYSBhkmZBi4H7Ja1eNfg352Cei8215EmMzcOCkY5hAZKIoWVUQmvpDoy5FTDgAFmbtxlNiaHeyKzo8nOeH8o3OYpAUze1V_bb5B57CRRxyemAXgeSingLh6OXM5vPnODg6Hi91MZqy9aKw6OZSo3_MI64T0cHLq1_C2qT3HoZtK2nxIyyAkolERbgxKRHuxQEZnq5M59lXw_2plZxa_dbY6Gs_37qasnluDbnseS2XzpbnS5IT33yV9jUg8N3CLgTi_mBRVSlw7Xm78weENPY0MSXEOcpuBxiITIIhroAt785FZ-rUm2pmsog-MqMZZoo0ljudCTCZnglwQa1Db5bw43BOfRVQf0-qNzg342Jq18FTd7FY_186liiUQZqgmYzY2nkGvC82tGM6jsaXEbjcchaZVBKT23Zg0k8qe2KK3kTpl991TeTmgd7AP8iQpFuSn5LhqGXAt3445GMmluWv7oZzhD-Ur-r2z6BWlam4UpwPKmUCT90FFO0mr6ZZ1WOTbXgp4DD5ht0KlxohxZbub6iZJW_U-QqX0mDsbTEuHHRtCzUcVH58J1R0KfvDFjM8bVNR0odUZ6BapmN0rCASiY4J8H-BH9Y_8JFFoCSkh_tfiqMi8Lu5uFSi5jnqi9awyHQIjBTV8fNRtZFTfzp8VL3ahUIm2d1MEg_0baksCKRO0_ksSI9DdM8yFqQRbU8Tq0Jajl3frs0X4tgWZF5d-IexHBF79MSfPskgnJAs3710p08Y7v0p9cxlEFcDS0lCl70mswbnqN1j3WjY8oPAuMkltNdyas_CpT-N0w14sU-wQ2XG7ipLqcEWyfbTmUa2ieQ9iRIwyQRJSyULN6X5bba54UDs_L0-2X_e0TptVUtZhBlOILwzZZPHRnJLhWY8zMdpSWf0LBd1_ncFP_17xjVObVSMQ0aN_QhhWq-LCyfSBsJWz-FBFpaxRt8FLNw0o9eMQuQrwmVsuBQB1asCbDKtcNZHdKufw9KExSa_gP0Vjmyh7RFn4WoF9zltTqfLOGlE0805XRxw0ACREXjHQpXovznI-wU8arpBlZmJEsT22kmLmph0g1fEV9dEgzwDGmFS2qSXRobmyeG4P7oGQWkaQWNuRjeiHCJFek8p87jjvcAX9pxdwrzMG8zxuL9cquNSkHscjSJiHjTiztsNzsUd0bBJ0TCRwTx-y7IaAo0h7mo_mo-J43Q7sHgOxQyS4HbypcMOfYJ5zIGbILaWvKonvBqpF8ks_Sb6zfJz7jsQM9Rvof_W7UNj5mPagMZ_1d1a9OZ7UZS2dwfxflxhdgI6UuP6iWogacRFF-Ye4XnmQoAZFfHgbbqOmmDeFdmnPx1oA-_Qm93esd51TSiXvitSAI3fHPzXzZDRkN4syAlq2EzuDn5QuBnkLA4QNHXtTXP1QgC4tImITUtI4_8R27FkcmaL9nVzZLnZk0RPKRuCoJPaCXYRQurs0xJlFjmHsb6ZMvT9meCxsfVeLXJkJIxfV-XCyKGOkAIP22aDPtz86pVbsjB42_K3wSF0RkztIRV-KftAPamXtWHKl2M8sxjPLoDDprdHilfaImskZAv2kuNgo0wuT_I_9c6Nf4dIMbk5QO6senin9LNdOrT2KFqhZsrZXiwumqhm-hNnkSAuWcAxEQj5iTnq_Cfp27O3Tw9Z6QWPbezvMlM8fFzJN5QQoXGOV5f8iNkVglGp5y-1p2WmlxDAi6kKwlCHWvDKaBkGpHAZO72J-T8mtht_W6DuqQQ6Eg3BbkFS148vJsECPuNu2RV482KEbpOgRwOFmstAvi0hG8YjM6txPSlnhHgIW5bFOYvJ5YndD0NgUyBQ5LXfMd99r3nQgVThJKWoBu5M-idDof5CyVZyqGa4czSmoebqpyPWJD1CfRkKP3Ni1MbD9enqDWIgmLEAojImpCSHyRs1-_ww-kIW9VKXTibZeY";

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
