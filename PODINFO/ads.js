// Copyright 2013 Google Inc. All Rights Reserved.
// You may study, modify, and use this example for any purpose.
// Note that this example is provided "as is", WITHOUT WARRANTY
// of any kind either expressed or implied.

var adsManager;
var adsLoader;
var adDisplayContainer;
var intervalTimer;
var playButton;
var videoContent;
var ad;
var podinfo;
var getad;
var getaddata;
var settings;
function init() {
  videoContent = document.getElementById('contentElement');
  playButton = document.getElementById('playButton');
  playButton.addEventListener('click', playAds);
  setUpIMA();
  //podinfo = document.getElementById('PodINFO');
  //podinfo.addEventListener('click', ongetAD);
  //getad = document.getElementById('getad');
  //getad.addEventListener('click',get_ad_detail );
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
      settings = adsLoader.getSettings();
     console.log(settings);
  // Request video ads.
  var adsRequest = new google.ima.AdsRequest();
 adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?env=vp&gdfp_req=1&unviewed_position_start=1&output=xml_vmap1&h1=en&ad_rule=1&url=http%3A%2F%2Fqa.relaunch.bet.com%2Fvideo%2Fmusic-moguls%2Fseason-1%2Ffull-episodes%2Fepisode-101-meet-the-moguls.html&correlator=1304175931555840&cust_params=_vmn_ar%3Dfalse%26n%3Depisode-101-meet-the-moguls%26sub%3Dmusic-moguls%26prod%3D%26sz%3D250x250%26show%3Dmusicmoguls%26embedshow%3Dmusicmoguls%26embedn%3Depisode-101-meet-the-moguls%26tile%3D4%26ct%3Dvideopage%26loc%3D4%26anum%3D1%26domainname%3Dqa.relaunch.bet.com%26ord%3D1473691308779%26prog%3Dfullepisode%26cat%3Dshows%26seccat%3Dmusic%26subs%3Dseason-1%26yr%3D2016&description_url=qa.relaunch.bet.com&cmsid=3904&iu=%2F1125%2Fbet.com%2FVideo&vid=904c758d-1d51-3b9b-a2d1-d57e59b6af0b&sz=250x250%7C375x211&sdkv=h.3.143.1&sdki=1&scor=762513550475264&adk=2829083374&osd=2&frm=0&sdr=1&ged=ve4_td7_tt1_pd7_la0_er326.0.537.375_vi147.0.706.375_vp100_eb24171';
  //adsRequest.adTagUrl = 'http://ads.stickyadstv.com/www/delivery/swfIndex.php?reqType=AdsSetup&protocolVersion=2.0&zoneId=2003';


  // Specify the linear and nonlinear slot sizes. This helps the SDK to
  // select the correct creative if multiple are returned.
  adsRequest.linearAdSlotWidth = 640;
  adsRequest.linearAdSlotHeight = 400;

  adsRequest.nonLinearAdSlotWidth = 640;
  adsRequest.nonLinearAdSlotHeight = 150;

  adsLoader.requestAds(adsRequest);
  //adLoadersetting();
}


function createAdDisplayContainer() {
  // We assume the adContainer is the DOM id of the element that will house
  // the ads.
  adDisplayContainer = new google.ima.AdDisplayContainer(
      document.getElementById('adContainer'), videoContent);
}

function playAds() {
  // Initialize the container. Must be done via a user action on mobile devices.
  videoContent.load();
  adDisplayContainer.initialize();

  try {
    // Initialize the ads manager. Ad rules playlist will start at this time.
    adsManager.init(640, 360, google.ima.ViewMode.NORMAL);
    
    var cue = adsManager.getCuePoints();
    console.log("Cuepoints:" + cue);
    Mute = document.getElementById('mute');
    console.log(Mute);

    Mute.addEventListener('click', function(){
   
    var vol =adsManager.getVolume();  
    if(vol==1) {

      adsManager.setVolume(0);
    } 
    else {
      adsManager.setVolume(1);
    }
    
    });
    
    // Call play to start showing the ad. Single video and overlay ads will
    // start at this time; the call will be ignored for ad rules.
    adsManager.start();
  } catch (adError) {
    // An error may be thrown if there was a problem with the VAST response.
    
    videoContent.play();
  }
}

function onAdsManagerLoaded(adsManagerLoadedEvent) {
  // Get the ads manager.
  var adsRenderingSettings = new google.ima.AdsRenderingSettings();
  adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
  // videoContent should be set to the content video element.
      adsRenderingSettings.mimeTypes = ['video/mp4'];

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
  adsManager.addEventListener(
      google.ima.AdEvent.Type.IMPRESSION,
      onAdEvent);
}

function onAdEvent(adEvent) {
  // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
  // don't have ad object associated.
   ad = adEvent.getAd();
   getaddata = adEvent.getAdData();
   console.log(getaddata);
   
  //console.log(ad);
  switch (adEvent.type) {
    case google.ima.AdEvent.Type.LOADED:
    //ongetAD();
    console.log("LOADED");
      // This is the first event sent for an ad - it is possible to
      // determine whether the ad is a video ad or an overlay.
      if (!ad.isLinear()) {
        // Position AdDisplayContainer correctly for overlay.
        // Use ad.width and ad.height.
        videoContent.play();
      }
      break;
    
    case google.ima.AdEvent.Type.IMPRESSION:

      console.log("IMPRESSION");
      break;

    case google.ima.AdEvent.Type.STARTED:
      // This event indicates the ad has started - the video player
      // can adjust the UI, for example display a pause button and
      ongetAD();
      // remaining time.
      console.log("STARTED");
      
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
      console.log("COMPLETE");
      if (ad.isLinear()) {
        clearInterval(intervalTimer);
      }
      break;
      case google.ima.AdEvent.Type.LOG:
       var adData = AdEvent.getAdData();
       console.log(adData);
       var er = adData['adError'];
       console.log(er);

        if (adData['adError']) {
            console.log('Non-fatal error occurred: ' +
            adData['adError'].getMessage());
            }
      break;

      case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
      
      console.log("ALL_ADS_COMPLETED");
      if (ad.isLinear()) {
        // For a linear ad, a timer can be started to poll for
        // the remaining time.
        clearInterval(intervalTimer);
      }
      break;
  }
}

function onAdError(adErrorEvent) {
  // Handle the error logging.
  console.log( "error:"+ adErrorEvent.getError());
  //console.log(getaddata.getType());
  //console.log("message:"+ adErrorEvent.getMessage());
  //console.log("Innererror:"+ adErrorEvent.getInnerError());
  //console.log("vasterrorcode:"+ adErrorEvent.getVastErrorCode());
  //console.log("errorcode:"+ adErrorEvent.getErrorCode());
  adsManager.destroy();
}
function onContentPauseRequested() {
  videoContent.pause();
  // This function is where you should setup UI for showing ads (e.g.
  // display ad timer countdown, disable seeking etc.)
  // setupUIForAds();
}

function onContentResumeRequested() {
  console.log("ContentResumeRequested");
  videoContent.play();
  // This function is where you should ensure that your UI is ready
  // to play content. It is the responsibility of the Publisher to
  // implement this function when necessary.
  // setupUIForContent();

}
function ongetAD(adEvent){
   console.log(ad);
   var adpodinfo = ad.getAdPodInfo();
   console.log(adpodinfo);
   //console.log(getaddata);
   console.log("AdPodIndex:" + adpodinfo.getPodIndex());
   console.log("Bumperad:" + adpodinfo.getIsBumper());
   console.log("Adposition:"+adpodinfo.getAdPosition());
   console.log("Timeoffset:"+ adpodinfo.getTimeOffset());
   console.log(" No of ADs:" + adpodinfo.getTotalAds());
get_ad_detail();
}
function get_ad_detail(adEvent){
  console.log("AdId:" + ad.getAdId());
  console.log("AdType:" +ad.getContentType());
  console.log("AdWrapperId:" +ad.getWrapperAdIds());
  console.log("AdWrapperAdsystem:" + ad.getWrapperAdSystems());
  console.log("Width:" + ad.getWidth());
  console.log("Height:" + ad.getHeight());
  console.log("Adsystem:"+ ad.getAdSystem());
  console.log("AdDescription:"+ ad.getDescription());
  console.log(ad.getCompanionAds());
  //console.log(ad.getAdId());



}
/*function adLoadersetting(){
  //var SdkSettings = google.ima.ImaSdkSettings;
  //console.log(SdkSettings);
  settings.setPlayerType('JW Player');
  var playertype = settings.getPlayerType();
  console.log( playertype);
  console.log("companionbackfill:" + settings.getCompanionBackfill());
}*/
/*function errors(){

  console.log(error.getType());
  console.log("message:"+ adErrorEvent.getMessage());
  console.log("Innererror"+ adErrorEvent.getInnerError());
  console.log("vasterrorcode"+ adErrorEvent.getVastErrorCode());
  console.log("errorcode"+ adErrorEvent.getErrorCode());
}*/

// Wire UI element references and UI event listeners.
init();
