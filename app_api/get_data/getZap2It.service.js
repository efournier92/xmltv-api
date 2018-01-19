// const config = require(`./defaultConfig`);

// exports.getZap = function () {
//   let gridHours = 6;
//   let today = new Date
//   const days = config.settings.days;
//   const ncdays = config.settings.ncdays;
//   const ncsdays = config.settings.ncsdays;
//   const maxCount = days * (24 / gridHours);
//   const ncCount = maxCount - (ncdays * (24 / gridHours));
//   const offset = config.settings.start * 3600 * 24 * 1000;
//   const ncsCount = ncsdays * (24 / gridHours);
//   const mSecs = today.getTime();
//   // adjust milliseconds
//   for (let i = 0; i < maxCount; i++) {
//     if (i == 0) { 
//       let xtvdstartTime = mSecs;
//     } else if (i == maxCount - 1) { 
//       let xtvdEndTime = mSecs + (gridHours * 3600000) - 1;

//       let fileName = `${config.paths.cacheDir}/${mSecs}\.html`;
//       if (!fileName || i >= ncCount || i < ncsCount) {
//         let params = "";
//         if (user.lineupId) params += "lineupId=$zlineupId";
//         if (user.zipcode) $params += "&zipcode=$zipcode";
//         let absUrl = Encode::encode("utf8", getUrl(paths.urlRoot . "ZCGrid.do?isDescriptionOn=true&fromTimeInMillis="
//           + mSecs + params
//           + "&aid=tvschedule") 
//         );
//       }
//       console.log(`[${i + 1}/${maxCount}] Parsing: ${fileName}]`);
//       parseGrid(fileName);

//       if (i == 0) {
//         gridHours = gridtimes / 2;
//         if (gridHours < 1) {
//           console.error("Error: The grid is not being displayed, try logging in to the zap2it website\n");
//           console.error("Deleting: " + fileName + "\n");
//           unf(fileName);
//           break;
//         } else if (gridHours != 6) {
//           console.log(`Notice: 'Six hour grid' not selected in zap2it preferences, adjusting to $gridHours hour grid`);
//         } // reset anyway in case of cache mismatch

//         maxCount = days * (24 / gridHours);
//         ncCount = maxCount - (ncdays * (24 / gridHours));
//         ncsCount = ncsdays * (24 / gridHours);
//       } else if (mismatch == 0) {
//         if (gridHours !== gridtimes / 2) {
//           console.log("Notice: Grid mismatch in cache, ignoring cache & restarting.\n");
//           mismatch = 1;
//           ncsdays = 99;
//           ncsCount = ncsdays * 24;
//           mSecs = today.time
//           count = -1;
//           gridtimes = 0;
//           next;
//         }
//       }
//       gridtimes = 0;
//     }
//   }
// }
