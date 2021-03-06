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
 adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?adTag=[object+Object]&ad_rule=1&adk=3717084916&ancr=http://www.foxnews.com&ciu_szs=300x60&cmsid=136&correlator=1359515500937216&cust_params=ad_player_name=inpage&loc=HOSTNAME&aam=c_hp,l_bztrvlr,l_entr,l_kds,hhi150p,t_it,r_fbn,l_hmownr,l_rgstrdvtrs,x_moatbrd,x_moatmddl,x_moatsmll&aamId=38672050233707917992284498109445970745&intcmp=DEFAULTINTCMP&local=0&mvpd=DEFAULTMVPDNAME&dt=1474410446328&eid=667080001&env=vp&flash=23.0.0.162&frm=2&frmd=1&gdfp_req=1&ged=ve4_td7_tt7_pd7_la7000_er0.0.171.300_vi0.0.171.300_vp100_eb24419&impl=s&iu=/4145/FNC.videos&manual=[object+Object]&osd=6&output=xml_vast2&scor=456617902473216&sdkv=3.248.0&sdmax=&sdr=1&sz=1001x1001%7C1920x1080&u_ah=877&u_asa=1&u_aw=1412&u_cd=24&u_h=900&u_his=1&u_java=false&u_nmime=7&u_nplug=5&u_tz=-240&u_w=1440&unviewed_position_start=1&url=http://www.foxnews.com/live-coverage/fox-news-republican-presidential-primary-debate&vid=4406746003001';
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
