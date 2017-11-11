module.exports.options = () => {

  this.settings {
    days : 7,
    ncdays : 0,
    ncsdays : 0,
    start : 0,
    retries : 3,
    maxskips : 50,
    includeXMLTV : true,
    outputXTVD : 0,
    sleeptime : 0,
    shiftMinutes : 0,
    lang : "en",
    outputAllChannels : false,
  }

  this.user {
    email : undefined,
    password : undefined,
    lineupId : undefined,
    zipcode : undefined,
    proxy : undefined,
  }

  this.paths {
    homeDir : "./",
    outFile : homeDir + "xmltv.xml",
    cacheDir : homeDir + "getData/cache/"
    iconDir : undefined,
    trailerDir : undefined,
    zap2ItRoot : "http://tvschedule.zap2it.com/tvlistings/",
    tvgurlRoot : "http://mobilelistings.tvguide.com/",
    tvgMapiRoot : "http://mapi.tvguide.com/",
    tvgurl : "http://www.tvguide.com/",
    tvgspritesurl : "http://static.tvgcdn.net/sprites/",
  }

}

