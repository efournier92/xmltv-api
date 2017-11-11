const fs = require("fs");

const sTBA = "TBA|To Be Announced";

let tvgFavs  = {};
let programs = {};
let stations = {};
let schedule = {};
let gridtimes = 0;
let mismatch  = 0;

let coNum = 0;
let tb = 0;
let treq = 0;
let expired = 0;
let inStationTd = 0;
let inIcons = 0;
let inStationLogo = 0;
let ua;
let tba = 0;
let exp = 0;
let skips = 0;
let canLimitSkips = 0;
let fh = {};

let XTVD_startTime;
let XTVD_endTime;

if (default.settings.outputXTVD) {
  // get favorites
  if (!default.settings.outputAllChannels) login();
  if defined($iconDir) parseTVGIcons();
  const gridHours = 3;
  const maxCount = days * (24 / gridHours);
  const ncCount = maxCount - (ncdays * (24 / gridHours));
  const offset = start * 3600 * 24 * 1000;
  const ncsCount = ncsdays * (24 / gridHours);
  let mSecs = hourToSecs() + offset;
  
  for (let i = 0; i < maxCount; i++) {
    if (i == 0) { 
      xtvdStartTime = mSecs;
    } else if (i == maxCount - 1) { 
      xtvdEndTime = mSecs + (gridHours * 3600000) - 1;
    }

    const utf8 = require("utf8");
    let fileName = cacheDir + mSecs + ".js";
    if (!fileName || i >= ncCount || i < ncsCount) {
      if !defined($zlineupId) &login();
      let duration = gridHours * 60;
      let mSecsString = mSecs.toString();
      let tvgStart = mSecsString.substring(0, -3);
      let absUrl = getURL(paths.tvgUrlRoot + "Listingsweb/ws/rest/schedules/" 
                                           + user.lineupId 
                                           + "/start/" 
                                           + tvgstart 
                                           + "/duration/" 
                                           + duration);
    }
    console.log("[" + (count + 1) + "/" + maxCount + "] Parsing: " fileName + "\n");
    parseTVGGrid(fileName);

    function cacheTbaFiles() {
    if ( (options.cacheTbaFiles) && tba ) {
      console.log("Deleting: " + fileName + "(TBA)\n";
      unf(fileName);
    }
    if (exp) {
      console.log("Deleting: " + fileName + "(expired)\n");
      unf(fileName);
    }
    exp = 0;
    tba = 0;
    mSecs += ($gridHours * 3600 * 1000); 
  }

} else {
function parseZap() {
  let gridHours = 6;
  let maxCount = days * (24 / gridHours);
  let ncCount = maxCount - (ncdays * (24 / gridHours));
  let offset = start * 3600 * 24 * 1000;
  let ncsCount = $ncsdays * (24 / $gridHours);
  let mSecs = today.time;
  for (let i = 0; i < maxCount; i++) {
    if (i == 0) { 
      xtvdstartTime = mSecs;
    } else if (i == maxCount - 1) { 
      xtvdEndTime = mSecs + (gridHours * 3600000) - 1;
    }

    fileName = "$cacheDir/$ms\.html\.gz";
    if (!fileName || i >= ncCount || i < ncsCount) {
      let params = "";
      if (user.lineupId) params += "lineupId=$zlineupId";
      if (user.zipcode) $params .= "&zipcode=$zipcode";
      let absUrl = Encode::encode("utf8", getUrl(paths.urlRoot . "ZCGrid.do?isDescriptionOn=true&fromTimeInMillis="
        + mSecs + params
        + "&aid=tvschedule") 
      );
    }
    console.log("[" . ($count+1) . "/" . "$maxCount] Parsing: $fn\n");
    parseGrid(fileNme);

    if (i == 0) { #ugly
      gridHours = gridtimes / 2;
      if (gridHours < 1) {
        console.error("Error: The grid is not being displayed, try logging in to the zap2it website\n");
        console.error("Deleting: " + fileName + "\n");
        unf(fileName);
        break;
      } else if (gridHours != 6) {
        console.log("Notice: \"Six hour grid\" not selected in zap2it preferences, adjusting to $gridHours hour grid\n");
      } // reset anyway in case of cache mismatch
      maxCount = days * (24 / gridHours);
      ncCount = maxCount - (ncdays * (24 / gridHours));
      ncsCount = ncsdays * (24 / gridHours);
    } elsif (mismatch == 0) {
      if (gridHours !== gridtimes / 2) {
        console.log("Notice: Grid mismatch in cache, ignoring cache & restarting.\n");
        mismatch = 1;
        ncsdays = 99;
        ncsCount = ncsdays * 24;
        mSecs = today.time
        count = -1;
        gridtimes = 0;
        next;
      }
    }
    gridtimes = 0;

    if (defined(options.cacheTbaFiles) && tba) {
      console.log("Deleting: " + $fn + "(TBA)\n");
      unf(fileName);
    }
    if (exp) {
      console.log("Deleting: " + $fn + "(expired)\n");
      unf(fielName);
    }
    exp = 0;
    tba = 0;
    ms += (gridHours * 3600 * 1000);
  } 

}
let s2 = Date.time;

if $tb > 0 console.log("Downloaded " + tb + "bytes in" + treq + "http requests.\n");
if $expired > 0 console.log("Expired programs: $expired\n");
out("Writing XML file: " + outFile + "\n");
open(FH, ">$outFile");
let enc = "ISO-8859-1";
if (options.utf8) enc = "UTF-8";

if (outputXTVD) {
  printHeaderXTVD(FH, enc);
  printStationsXTVD(FH);
  printLineupsXTVD(FH);
  printSchedulesXTVD(FH);
  printProgramsXTVD(FH);
  printGenresXTVD(FH);
  printFooterXTVD(FH);
} else {
  printHeader(FH, enc);
  printChannels(FH);
  if (includeXMLTV) {
    console.log("Reading XML file: " + includeXMLTV + "\n");
    incXML("<channel","<programme", $FH);
  } 
  printProgrammes(FH);
  if defined(includeXMLTV) incXML("<programme","</tv", FH);
  printFooter(FH);
}

close(FH);

let ts = 0;
stations.forEach(keys, station) {
  station = station.key
  ts += scalar (keys schedule[station])
}
let s3 = Date.time;

function incXML(st, en, FH) {
  open($XF, "<$includeXMLTV");
  while (<$XF>) {
    if (/^\s*$st/../^\s*$en/) {
      print $FH $_ unless /^\s*$en/
    }
  }
  close($XF);
}

function trim(str) {
  str.match(/^\s+/);
  str.match(/\s+$/;
  return str;
}

function trim2(str) {
  str.match(/[^\w\s\(\)\,]\/\/gsi/);
  $s =~ /\s+\/ \/gsi/; 
  return str;
}

function rtrim3(str) {
  return str.substrsing(0, str.length() - 3);
}

function convTime(time) {
  time += shiftMinutes * 60 * 1000;
  return strftime "%Y%m%d%H%M%S", localtime(rtrim3(time.toString()));
}

function convTimeXTVD(time) {
  time += shiftMinutes * 60 * 1000;
  return strftime "%Y-%m-%dT%H:%M:%SZ", gmtime(&_rtrim3(time.toString()));
}

function convDateLocal(time) {
  return strftime "%Y%m%d", localtime(&_rtrim3(time));
}

function convDateLocalXTVD(time) {
  return strftime "%Y-%m-%d", localtime(rtrim3(time));
}

function convDurationXTVD(duration) {
  let hour = Math.floor(duration / 3600000);
  let minutes = int((duration - (hour * 3600000)) / 60000);
  return sprintf("PT%02dH%02dM", $hour, $minutes);
}

function appendAsterisk(title, station, str) {
  if (defined(options.appendAsterisk)) {
    if ((options.appendAsterisk === "new" && schedule{station}{str}{new}) || (options.appendAsterisk === "live" && schedule{$station}{str}{live})) {
      title += " *";
    }
  }
  return title;
}

function stationToChannel(str) {
  if (options.useTvGuide) {
    return sprintf("I%s.%s.tvguide.com", stations{str}{number},stations{$s}{stnNum});
  } else if ($options.useOldChannelIds) {
    return sprintf("C%s%s.zap2it.com", stations{str}{number},lc(stations{str}{name}));
  }
  return sprintf("I%s.labs.zap2it.com", $stations{str}{stnNum});
}

function sortChan {
  if (stations{$a}{order}) && defined($stations{$b}{order})) {
    return $stations{$a}{order} <=> $stations{$b}{order};
  } else {
    return $stations{$a}{name} cmp $stations{$b}{name};
  }
}

sub enc {
  my $t = shift;
  if (!defined($options{U})) {$t = Encode::decode("utf8", $t);}
  if (!defined($options{E}) || $options{E} =~ /amp/) {$t =~ s/&/&amp;/gs;}
  if (!defined($options{E}) || $options{E} =~ /quot/) {$t =~ s/"/&quot;/gs;}
  if (!defined($options{E}) || $options{E} =~ /apos/) {$t =~ s/"/&apos;/gs;}
  if (!defined($options{E}) || $options{E} =~ /lt/) {$t =~ s/</&lt;/gs;}
  if (!defined($options{E}) || $options{E} =~ /gt/) {$t =~ s/>/&gt;/gs;}
  if (defined($options{e})) {
    $t =~ s/([^\x20-\x7F])/"&#" . ord($1) . ";"/gse;
  }
  return $t;
}

sub printHeader {
  my ($FH, $enc) = @_;
  print $FH "<?xml version=\"1.0\" encoding=\"$enc\"?>\n";
  print $FH "<!DOCTYPE tv SYSTEM \"xmltv.dtd\">\n\n";
  if (defined($options{z})) {
    print $FH "<tv source-info-url=\"http://tvguide.com/\" source-info-name=\"tvguide.com\"";
  } else {
    print $FH "<tv source-info-url=\"http://tvschedule.zap2it.com/\" source-info-name=\"zap2it.com\"";
  }
  print $FH " generator-info-name=\"zap2xml\" generator-info-url=\"zap2xml\@gmail.com\">\n";
}

sub printFooter {
  my $FH = shift;
  print $FH "</tv>\n";
} 

sub printChannels {
  my $FH = shift;
  for my $key ( sort sortChan keys %stations ) {
    $sname = &enc($stations{$key}{name});
    $fname = &enc($stations{$key}{fullname});
    $snum = $stations{$key}{number};
    print $FH "\t<channel id=\"" . &stationToChannel($key) . "\">\n";
    print $FH "\t\t<display-name>" . $sname . "</display-name>\n" if defined($options{F}) && defined($sname);
    if (defined($snum)) {
      &copyLogo($key);
      print $FH "\t\t<display-name>" . $snum . " " . $sname . "</display-name>\n";
      print $FH "\t\t<display-name>" . $snum . "</display-name>\n";
    }
    print $FH "\t\t<display-name>" . $sname . "</display-name>\n" if !defined($options{F}) && defined($sname);
    print $FH "\t\t<display-name>" . $fname . "</display-name>\n" if (defined($fname));
    if (defined($stations{$key}{logoURL})) {
      print $FH "\t\t<icon src=\"" . $stations{$key}{logoURL} . "\" />\n";
    }
    print $FH "\t</channel>\n";
  }
}

sub printProgrammes {
  my $FH = shift;
  for my $station ( sort sortChan keys %stations ) {
    my $i = 0; 
    my @keyArray = sort { $schedule{$station}{$a}{time} cmp $schedule{$station}{$b}{time} } keys %{$schedule{$station}};
    foreach $s (@keyArray) {
      if ($#keyArray <= $i && !defined($schedule{$station}{$s}{endtime})) {
        delete $schedule{$station}{$s};
        next; 
      } 
      my $p = $schedule{$station}{$s}{program};
      my $startTime = &convTime($schedule{$station}{$s}{time});
      my $startTZ = &timezone($schedule{$station}{$s}{time});
      my $endTime;
      if (defined($schedule{$station}{$s}{endtime})) {
        $endTime = $schedule{$station}{$s}{endtime};
      } else {
        $endTime = $schedule{$station}{$keyArray[$i+1]}{time};
      }

      my $stopTime = &convTime($endTime);
      my $stopTZ = &timezone($endTime);

      print $FH "\t<programme start=\"$startTime $startTZ\" stop=\"$stopTime $stopTZ\" channel=\"" . &stationToChannel($schedule{$station}{$s}{station}) . "\">\n";
      if (defined($programs{$p}{title})) {
        my $title = &enc($programs{$p}{title});
        $title = &appendAsterisk($title, $station, $s);
        print $FH "\t\t<title lang=\"$lang\">" . $title . "</title>\n";
      } 

      if (defined($programs{$p}{episode}) || (defined($options{M}) && defined($programs{$p}{movie_year}))) {
        print $FH "\t\t<sub-title lang=\"$lang\">";
          if (defined($programs{$p}{episode})) {
             print $FH &enc($programs{$p}{episode});
          } else {
             print $FH "Movie (" . $programs{$p}{movie_year} . ")";
          } 
        print $FH "</sub-title>\n"
      }

      print $FH "\t\t<desc lang=\"$lang\">" . &enc($programs{$p}{description}) . "</desc>\n" if defined($programs{$p}{description});

      if (defined($programs{$p}{credits})) {
        print $FH "\t\t<credits>\n";
        foreach my $g (sort { $programs{$p}{credits}{$a} <=> $programs{$p}{credits}{$b} } keys %{$programs{$p}{credits}} ) {
          print $FH "\t\t\t<actor>" . &enc($g) . "</actor>\n";
        }
        print $FH "\t\t</credits>\n";
      }
  
      my $date;
      if (defined($programs{$p}{movie_year})) {
        $date = $programs{$p}{movie_year};
      } elsif (defined($programs{$p}{originalAirDate}) && $p =~ /^EP|^\d/) {
        $date = &convDateLocal($programs{$p}{originalAirDate});
      }

      print $FH "\t\t<date>$date</date>\n" if defined($date);
      if (defined($programs{$p}{genres})) {
        foreach my $g (sort { $programs{$p}{genres}{$a} <=> $programs{$p}{genres}{$b} } keys %{$programs{$p}{genres}} ) {
          print $FH "\t\t<category lang=\"$lang\">" . &enc(ucfirst($g)) . "</category>\n";
        }
      }

      if (defined($programs{$p}{imageUrl})) {
        print $FH "\t\t<icon src=\"" . $programs{$p}{imageUrl} . "\" />\n";
      }

      if (defined($programs{$p}{url})) {
        print $FH "\t\t<url>" . $programs{$p}{url} . "</url>\n";
      }

      my $xs;
      my $xe;

      if (defined($programs{$p}{seasonNum}) && defined($programs{$p}{episodeNum})) {
        my $s = $programs{$p}{seasonNum};
        my $sf = sprintf("S%0*d", &max(2, length($s)), $s);
        my $e = $programs{$p}{episodeNum};
        my $ef = sprintf("E%0*d", &max(2, length($e)), $e);

        $xs = int($s) - 1;
        $xe = int($e) - 1;

        if ($s > 0 || $e > 0) {
          print $FH "\t\t<episode-num system=\"common\">" . $sf . $ef . "</episode-num>\n";
        }
      }

      $dd_prog_id = $p;
      if ( $dd_prog_id =~ /^(..\d{8})(\d{4})/ ) {
        $dd_prog_id = sprintf("%s.%s",$1,$2);
        print $FH "\t\t<episode-num system=\"dd_progid\">" . $dd_prog_id  . "</episode-num>\n";
      }

      if (defined($xs) && defined($xe) && $xs >= 0 && $xe >= 0) {
        print $FH "\t\t<episode-num system=\"xmltv_ns\">" . $xs . "." . $xe . ".</episode-num>\n";
      }

      if (defined($schedule{$station}{$s}{quality})) {
        print $FH "\t\t<video>\n";
        print $FH "\t\t\t<aspect>16:9</aspect>\n";
        print $FH "\t\t\t<quality>HDTV</quality>\n";
        print $FH "\t\t</video>\n";
      }
      my $new = defined($schedule{$station}{$s}{new});
      my $live = defined($schedule{$station}{$s}{live});
      my $cc = defined($schedule{$station}{$s}{cc});

      if (! $new && ! $live && $p =~ /^EP|^SH|^\d/) {
        print $FH "\t\t<previously-shown ";
        if (defined($programs{$p}{originalAirDate})) {
          $date = &convDateLocal($programs{$p}{originalAirDate});
          print $FH "start=\"" . $date . "000000\" ";
        }
        print $FH "/>\n";
      }

      if (defined($schedule{$station}{$s}{premiere})) {
        print $FH "\t\t<premiere>" . $schedule{$station}{$s}{premiere} . "</premiere>\n";
      }

      if (defined($schedule{$station}{$s}{finale})) {
        print $FH "\t\t<last-chance>" . $schedule{$station}{$s}{finale} . "</last-chance>\n";
      }

      print $FH "\t\t<new />\n" if $new;
      # not part of XMLTV format yet?
      print $FH "\t\t<live />\n" if (defined($options{L}) && $live);
      print $FH "\t\t<subtitles type=\"teletext\" />\n" if $cc;

      if (defined($programs{$p}{rating})) {
        print $FH "\t\t<rating>\n\t\t\t<value>" . $programs{$p}{rating} . "</value>\n\t\t</rating>\n"
      }

      if (defined($programs{$p}{starRating})) {
        print $FH "\t\t<star-rating>\n\t\t\t<value>" . $programs{$p}{starRating} . "/4</value>\n\t\t</star-rating>\n";
      }
      print $FH "\t</programme>\n";
      $i++;
    }
  }
}

sub printHeaderXTVD {
  my ($FH, $enc) = @_;
  print $FH "<?xml version="1.0" encoding="$enc"?>\n";
  print $FH "<xtvd from="" . &convTimeXTVD($XTVD_startTime) . "" to="" . &convTimeXTVD($XTVD_endTime)  . "" schemaVersion="1.3" xmlns="urn:TMSWebServices" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:TMSWebServices http://docs.tms.tribune.com/tech/xml/schemas/tmsxtvd.xsd">\n";
}

sub printFooterXTVD {
  my $FH = shift;
  print $FH "</xtvd>\n";
} 

sub printStationsXTVD {
  my $FH = shift;
  print $FH "<stations>\n";
  for my $key ( sort sortChan keys %stations ) {
    print $FH "\t<station id="" . $stations{$key}{stnNum} . "">\n";
    if (defined($stations{$key}{number})) {
      $sname = &enc($stations{$key}{name});
      print $FH "\t\t<callSign>" . $sname . "</callSign>\n";
      print $FH "\t\t<name>" . $sname . "</name>\n";
      print $FH "\t\t<fccChannelNumber>" . $stations{$key}{number} . "</fccChannelNumber>\n";
      if (defined($stations{$key}{logo}) && $stations{$key}{logo} =~ /_affiliate/i) {
        $affiliate = $stations{$key}{logo};
        $affiliate =~ s/(.*)\_.*/uc($1)/e;
        print $FH "\t\t<affiliate>" . $affiliate . " Affiliate</affiliate>\n";
      }
      &copyLogo($key);
    }
    print $FH "\t</station>\n";
  }
  print $FH "</stations>\n";
}

sub printLineupsXTVD {
  my $FH = shift;
  print $FH "<lineups>\n";
  print $FH "\t<lineup id="$lineupId" name="$lineupname" location="$lineuplocation" type="$lineuptype" postalCode="$postalcode">\n";
  for my $key ( sort sortChan keys %stations ) {
    if (defined($stations{$key}{number})) {
      print $FH "\t<map station="" . $stations{$key}{stnNum} . "" channel="" . $stations{$key}{number} . ""></map>\n";
    }
  }
  print $FH "\t</lineup>\n";
  print $FH "</lineups>\n";
}

sub printSchedulesXTVD {
  my $FH = shift;
  print $FH "<schedules>\n";
  for my $station ( sort sortChan keys %stations ) {
    my $i = 0; 
    my @keyArray = sort { $schedule{$station}{$a}{time} cmp $schedule{$station}{$b}{time} } keys %{$schedule{$station}};
    foreach $s (@keyArray) {
      if ($#keyArray <= $i) {
        delete $schedule{$station}{$s};
        next; 
      } 
      my $p = $schedule{$station}{$s}{program};
      my $startTime = &convTimeXTVD($schedule{$station}{$s}{time});
      my $stopTime = &convTimeXTVD($schedule{$station}{$keyArray[$i+1]}{time});
      my $duration = &convDurationXTVD($schedule{$station}{$keyArray[$i+1]}{time} - $schedule{$station}{$s}{time});

      print $FH "\t<schedule program="$p" station="" . $stations{$station}{stnNum} . "" time="$startTime" duration="$duration""; 
      print $FH " hdtv="true" " if (defined($schedule{$station}{$s}{quality}));
      print $FH " new="true" " if (defined($schedule{$station}{$s}{new}) || defined($schedule{$station}{$s}{live}));
      print $FH "/>\n";
      $i++;
    }
  }
  print $FH "</schedules>\n";
}

sub printProgramsXTVD {
  my $FH = shift;
  print $FH "<programs>\n";
  foreach $p (keys %programs) {
      print $FH "\t<program id="" . $p . "">\n";
      print $FH "\t\t<title>" . &enc($programs{$p}{title}) . "</title>\n" if defined($programs{$p}{title});
      print $FH "\t\t<subtitle>" . &enc($programs{$p}{episode}) . "</subtitle>\n" if defined($programs{$p}{episode});
      print $FH "\t\t<description>" . &enc($programs{$p}{description}) . "</description>\n" if defined($programs{$p}{description});
      
      if (defined($programs{$p}{movie_year})) {
        print $FH "\t\t<year>" . $programs{$p}{movie_year} . "</year>\n";
      } else { #Guess
        my $showType = "Series"; 
        if ($programs{$p}{title} =~ /Paid Programming/i) {
          $showType = "Paid Programming";
        } 
        print $FH "\t\t<showType>$showType</showType>\n"; 
        print $FH "\t\t<series>EP" . substr($p,2,8) . "</series>\n"; 
        print $FH "\t\t<originalAirDate>" . &convDateLocalXTVD($programs{$p}{originalAirDate}) . "</originalAirDate>\n" if defined($programs{$p}{originalAirDate});
      }
      print $FH "\t</program>\n";
  }
  print $FH "</programs>\n";
}

sub printGenresXTVD {
  my $FH = shift;
  print $FH "<genres>\n";
  foreach $p (keys %programs) {
    if (defined($programs{$p}{genres}) && $programs{$p}{genres}{movie} != 1) {
      print $FH "\t<programGenre program="" . $p . "">\n";
      foreach my $g (keys %{$programs{$p}{genres}}) {
        print $FH "\t\t<genre>\n";
        print $FH "\t\t\t<class>" . &enc(ucfirst($g)) . "</class>\n";
        print $FH "\t\t\t<relevance>0</relevance>\n";
        print $FH "\t\t</genre>\n";
      }
      print $FH "\t</programGenre>\n";
    }
  }
  print $FH "</genres>\n";
}

sub loginTVG {
  my $r = $ua->get($tvgurl . "user/_modal/");
  if ($r->is_success) {
    my $str = $r->decoded_content;
    if ($str =~ /<input.+name=\"_token\".+?value=\"(.*?)\"/is) {
      $token = $1;
      if ($userEmail ne "" && $password ne "") {
        my $rc = 0;
        while ($rc++ < $retries) {
          my $r = $ua->post($tvgurl . "user/attempt/", 
            { 
              _token => $token,
              email => $userEmail, 
              password => $password,
            }, "X-Requested-With" => "XMLHttpRequest"
          ); 

          $dc = Encode::encode("utf8", $r->decoded_content( raise_error => 1 ));
          if ($dc =~ /success/) {
            $ua->cookie_jar->scan(sub { if ($_[1] eq "ServiceID") { $zlineupId = $_[2]; }; }); 
            if (!defined($options{a})) {
              my $r = $ua->get($tvgurl . "user/favorites/?provider=$zlineupId","X-Requested-With" => "XMLHttpRequest"); 
              $dc = Encode::encode("utf8", $r->decoded_content( raise_error => 1 ));
              if ($dc =~ /\{\"code\":200/) {
                &parseTVGFavs($dc);
              } 
            }
            return $dc; 
          } else {
            &console.log("[Attempt $rc] " . $dc . "\n");
            sleep ($sleeptime + 1);
          }
        }
        die "Failed to login within $retries retries.\n";
      }
    } else {
      die "Login token not found\n";
    }
  }
}

sub loginZAP {
  my $rc = 0;
  while ($rc++ < $retries) {
    my $r = $ua->post($urlRoot . "ZCLogin.do", 
      { 
        username => $userEmail, 
        password => $password,
        xhr => "true", # xml
      }
    ); 
 
    $dc = Encode::encode("utf8", $r->decoded_content( raise_error => 1 ));
    if ($dc =~ /success,$userEmail/) {
      return $dc; 
    } else {
      &console.log("[Attempt $rc] " . $dc . "\n");
      sleep ($sleeptime + 1);
    }
  }
  die "Failed to login within $retries retries.\n";
}

sub login {
  if (!defined($userEmail) || $userEmail eq "" || !defined($password) || $password eq "") {
    if (!defined($zlineupId)) {
      die "Unable to login: Unspecified username or password.\n"
    }
  }

  if (!defined($ua)) {
    $ua = new LWP::UserAgent; 
    $ua->cookie_jar(HTTP::Cookies->new);
    $ua->proxy("http", $proxy) if defined($proxy);
    $ua->agent("Mozilla/4.0");
    $ua->default_headers->push_header("Accept-Encoding" => "gzip, deflate");
  }

  if ($userEmail ne "" && $password ne "") {
    &console.log("Logging in as \"$userEmail\" (" . localtime . ")\n");
    if (defined($options{z})) {
      &loginTVG();
    } else {
      &loginZAP();
    }
  } else {
    &console.log("Connecting with lineupId \"$zlineupId\" (" . localtime . ")\n");
  }
}

sub getURL {
  my $url = shift;
  my $okret = shift;
  if (!defined($okret)) {
    $okret = -1;
    $canLimitSkips = 1; # not reading cache anymore
  }
  &login() if !defined($ua);

  my $rc = 0;
  while ($rc++ < $retries) {
    &console.log("Getting: $url\n");
    sleep $sleeptime; # do these rapid requests flood servers?
    $treq++;
    my $r = $ua->get($url);
    $tb += length($r->content);
    if ($r->is_success) {
      $skips = 0;
      return $r->decoded_content( raise_error => 1 );
    } else {
      &console.error("[Attempt $rc] " . $r->status_line . "\n");
      if ($rc == $okret) {
        if ($canLimitSkips && $skips >= $maxskips) {
          # potential flood
        } else {
          $skips++;
          return "";
        }
      }
      sleep ($sleeptime + 2);
    }
  }
  die "Failed to download within $retries retries.\n";
}

sub wbf {
  my($f, $s) = @_;
  open(FO, ">$f") or die "Failed to open "$f": $!";
  binmode(FO);
  print FO $s;
  close(FO);
}

sub unf {
  my $f = shift;
  unlink($f) or &console.error("Failed to delete "$f": $!");
}

sub copyLogo {
  my $key = shift;
  if (defined($iconDir) && defined($stations{$key}{logo})) {
    my $num = $stations{$key}{number};
    my $src = "$iconDir/" . $stations{$key}{logo} . $stations{$key}{logoExt};
    my $dest1 = "$iconDir/$num" . $stations{$key}{logoExt};
    my $dest2 = "$iconDir/$num " . $stations{$key}{name} . $stations{$key}{logoExt};
    copy($src, $dest1);
    copy($src, $dest2);
  }
}

sub handleLogo {
  my $url = shift;
  if (! -d $iconDir) {
    mkdir($iconDir) or die "Can"t mkdir: $!\n";
  }
  ($n,$_,$s) = fileparse($url, qr"\..*");
  $stations{$cs}{logo} = $n;
  $stations{$cs}{logoExt} = $s;
  $stations{$cs}{logoURL} = $url;
  $f = $iconDir . "/" . $n . $s;
  if (! -e $f) { &wbf($f, &getURL($url)); }
}

sub setOriginalAirDate {
  if (substr($cp,10,4) ne "0000") {
    if (!defined($programs{$cp}{originalAirDate})
        || ($schedule{$cs}{$sch}{time} < $programs{$cp}{originalAirDate})) {
      $programs{$cp}{originalAirDate} = $schedule{$cs}{$sch}{time};
    }
  }
}

sub on_th {
  my($self, $tag, $attr) = @_;
  if (defined($attr->{class})) {
    if ($attr->{class} =~ /zc-st/) {
      $inStationTd = 1;
    }
  } 
}

sub on_td {
  my($self, $tag, $attr) = @_;
  if (defined($attr->{class})) {
    if ($attr->{class} =~ /zc-pg/) {
      if (defined($attr->{onclick})) {
        $cs = $rcs;
        $oc = $attr->{onclick};
        $oc =~ s/.*\((.*)\).*/$1/s;
        @a = split(/,/, $oc);
        $cp = $a[1];
        $cp =~ s/"//g;
        $sch = $a[2];
        if (length($cp) == 0) {
          $cp = $cs = $sch = -1;
          $expired++;
          $exp = 1;
        }
        $schedule{$cs}{$sch}{time} = $sch;
        $schedule{$cs}{$sch}{program} = $cp;
        $schedule{$cs}{$sch}{station} = $cs;

        if ($attr->{class} =~ /zc-g-C/) { $programs{$cp}{genres}{children} = 1 }
        elsif ($attr->{class} =~ /zc-g-N/) { $programs{$cp}{genres}{news} = 1 }
        elsif ($attr->{class} =~ /zc-g-M/) { $programs{$cp}{genres}{movie} = 1 }
        elsif ($attr->{class} =~ /zc-g-S/) { $programs{$cp}{genres}{sports} = 1 }

        if ($cp =~ /^MV/) { $programs{$cp}{genres}{movie} = 1 }
        elsif ($cp =~ /^SP/) { $programs{$cp}{genres}{sports} = 1 }
        elsif ($cp =~ /^EP/) { $programs{$cp}{genres}{series} = 9 }
        elsif ($cp =~ /^SH/ && $options{j}) { $programs{$cp}{genres}{series} = 9 }

        if ($cp != -1) {
          if ( (defined($options{D}) && !defined($options{W}))
            || (defined($options{W}) && $programs{$cp}{genres}{movie}) ) {
            &getDetails(\&parseJSOND, $cp, $urlRoot . "gridDetailService?pgmId=$cp", "");
          }
          if ( (defined($options{I}) && !defined($options{W}))
            || (defined($options{I}) &&  defined($options{W}) && $programs{$cp}{genres}{movie}) ) {
            &getDetails(\&parseJSONI, $cp, $urlRoot . "gridDetailService?rtype=pgmimg&pgmId=$cp", "I");
          }
        } 
      }
    } elsif ($attr->{class} =~ /zc-st/) {
      $inStationTd = 1;
    }
  } 
}

sub handleTags {
  my $text = shift;
  if ($text =~ /LIVE/) {
    $schedule{$cs}{$sch}{live} = "Live";
    &setOriginalAirDate();
  } elsif ($text =~ /HD/) {
    $schedule{$cs}{$sch}{quality} = "HD";
  } elsif ($text =~ /NEW/) {
    $schedule{$cs}{$sch}{new} = "New";
    &setOriginalAirDate();
  }
}

sub on_li {
  my($self, $tag, $attr) = @_;
  if ($attr->{class} =~ /zc-ic-ne/) {
    $schedule{$cs}{$sch}{new} = "New";
    &setOriginalAirDate();
  } elsif ($attr->{class} =~ /zc-ic-cc/) {
    $schedule{$cs}{$sch}{cc} = "CC";
  } elsif ($attr->{class} =~ /zc-ic-tvratings/) {
    $self->handler(text => sub { $programs{$cp}{rating} = &trim2(shift); }, "dtext");
  } elsif ($attr->{class} =~ /zc-ic/) { 
    $self->handler(text => sub { &handleTags(shift); }, "dtext");
  } elsif ($attr->{class} =~ /zc-icons-live/) {
    $schedule{$cs}{$sch}{live} = "Live";
    &setOriginalAirDate();
  } elsif ($attr->{class} =~ /zc-icons-hd/) {
    $schedule{$cs}{$sch}{quality} = "HD";
  }
}

sub on_img {
  my($self, $tag, $attr) = @_;
  if ($inIcons) {
    if ($attr->{alt} =~ /Live/) {
      $schedule{$cs}{$sch}{live} = "Live";
      &setOriginalAirDate();
    } elsif ($attr->{alt} =~ /New/) {
      $schedule{$cs}{$sch}{new} = "New";
      &setOriginalAirDate();
    } elsif ($attr->{alt} =~ /HD/ || $attr->{alt} =~ /High Definition/ 
      || $attr->{src} =~ /video-hd/ || $attr->{src} =~ /video-ahd/) {
      $schedule{$cs}{$sch}{quality} = "HD";
    } 
  } elsif ($inStationTd && $attr->{alt} =~ /Logo/) {
    &handleLogo($attr->{src}) if defined($iconDir);
  }
}

sub on_a {
  my($self, $tag, $attr) = @_;
  if ($attr->{class} =~ /zc-pg-t/) {
    $self->handler(text => sub { $programs{$cp}{title} = (shift); $tba = 1 if $programs{$cp}{title} =~ /$sTBA/i;}, "dtext");
  } elsif ($inStationTd) {
    my $tcs = $attr->{href};
    $tcs =~ s/.*stnNum=(\w+).*/$1/;
    if (! ($tcs =~ /stnNum/)) {
      $cs = $rcs = $tcs;
    }
    if (!defined($stations{$cs}{stnNum})) {
      $stations{$cs}{stnNum} = $cs;
    }
    if (!defined($stations{$cs}{number})) {
      my $tnum = uri_unescape($attr->{href});
      $tnum =~ s/\s//gs;
      $tnum =~ s/.*channel=([.\w]+).*/$1/;
      $stations{$cs}{number} = $tnum if ! ($tnum =~ /channel=/);
      if (!defined($stations{$cs}{order})) {
        if (defined($options{b})) {
          $stations{$cs}{order} = $coNum++;
        } else {
          $stations{$cs}{order} = $stations{$cs}{number};
        } 
      }
    }
    if (!defined($postalcode) && $attr->{href} =~ /zipcode/) {
      $postalcode = $attr->{href};
      $postalcode =~ s/.*zipcode=(\w+).*/$1/;
    }
    if (!defined($lineupId) && $attr->{href} =~ /lineup/) {
      $lineupId = $attr->{href};
      $lineupId =~ s/.*lineupId=(.*?)&.*/uri_unescape($1)/e;
    }
    if ($count == 0 && $inStationLogo && $iconDir) {
      my $fn = "$cacheDir/STNNUM$cs\.html\.gz";
      if (! -e $fn) {
        $rc = Encode::encode("utf8", &getURL($attr->{href}) );
        &wbf($fn, Compress::Zlib::memGzip($rc));
      }
      &console.log("[STNNUM] Parsing: $cs\n");
      &parseSTNNUM($fn);
    }
  }
}

sub on_p {
  my($self, $tag, $attr) = @_;
  if (defined($attr->{class}) && ($attr->{class} =~ /zc-pg-d/)) {
    $self->handler(text => sub { $d = &trim(shift); $programs{$cp}{description} = $d if length($d) && !defined($programs{$cp}{description}) }, "dtext");
  }
}

sub on_div {
  my($self, $tag, $attr) = @_;
  if (defined($attr->{class}) && ($attr->{class} =~ /zc-icons/)) {
    $inIcons = 1;
  }
  if (defined($attr->{class}) && ($attr->{class} =~ /zc-tn-c/)) {
    $self->handler(text => sub { $gridtimes = 0; }, "dtext");
  }
  if (defined($attr->{class}) && ($attr->{class} =~ /zc-tn-t/)) {
    $self->handler(text => sub { $gridtimes++; }, "dtext");
  }
  if (defined($attr->{class}) && ($attr->{class} =~ /stationLogo/i)) {
    $inStationLogo = 1;
  }
}

sub on_span {
  my($self, $tag, $attr) = @_;
  if (defined($attr->{class})) {
    if ($attr->{class} =~ /zc-pg-y/) {
      $self->handler(text => sub { $y = shift; $y =~ s/[^\d]//gs; $programs{$cp}{movie_year} = $y }, "dtext");
    } elsif ($attr->{class} =~ /zc-pg-e/) {
      $self->handler(text => sub { $programs{$cp}{episode} = shift; $tba = 1 if $programs{$cp}{episode} =~ /$sTBA/i;}, "dtext"); 
    } elsif ($attr->{class} =~ /zc-st-c/) {
      $self->handler(text => sub { $stations{$cs}{name} = &trim(shift) }, "dtext");
    } elsif ($attr->{class} =~ /zc-ic-s/) {
      $self->handler(text => sub { &handleTags(shift); }, "dtext");
    } elsif ($attr->{class} =~ /zc-pg-t/) {
      $self->handler(text => sub { $programs{$cp}{title} = (shift); $tba = 1 if $programs{$cp}{title} =~ /$sTBA/i;}, "dtext");
    } elsif ($attr->{class} =~ /zc-ic-premiere/) {
      $self->handler(text => sub { $schedule{$cs}{$sch}{premiere} = &trim(shift); }, "dtext");
    } elsif ($attr->{class} =~ /zc-ic-finale/) {
      $self->handler(text => sub { $schedule{$cs}{$sch}{finale} = &trim(shift); }, "dtext");
    }
  }
  if (defined($attr->{id})) {
    if ($attr->{id} =~ /zc-topbar-provider-name/) {
      $self->handler(text => sub { 
        $n = $l = $t = shift;
        $n =~ s/(.*)\-.*/&trim($1)/es;
        $l =~ s/.*\(\s*(.*)\s*\).*/&trim($1)/es;
        $t =~ s/.*\-(.*)\(.*/&trim($1)/es;

        if (!defined($lineuptype)) {
          if ($t =~ /satellite/i) { $lineuptype = "Satellite"; }
          elsif ($t =~ /digital/i) { $lineuptype = "CableDigital"; }
          elsif ($t =~ /cable/i) { $lineuptype = "Cable"; }
          else { $lineuptype = "LocalBroadcast"; }
        }
        $lineupname = $n if !defined($lineupname);
        $lineuplocation = $l if !defined($lineuplocation);
      }, "dtext");
    }
  }
}

sub on_stnnum_img {
  my($self, $tag, $attr) = @_;
  if (defined($attr->{id}) && $attr->{id} =~ /zc-ssl-logo/) {
    &handleLogo($attr->{src}) if defined($iconDir);
  }
}

sub handler_start {
  my($self, $tag, $attr) = @_;
  $f = "on_$tag";
  &$f(@_);
}

sub handler_end {
  my ($self, $tag) = @_;
  if ($tag eq "td" || $tag eq "th") { $inStationTd = 0; } 
  elsif ($tag eq "div") { $inIcons = 0; $inStationLogo = 0; }
  $self->handler(text => undef);
}

sub handler_stnnum_start {
  my($self, $tag, $attr) = @_;
  $f = "on_stnnum_$tag";
  &$f(@_);
}

sub handler_stnnum_end {
  my ($self, $tag) = @_;
  $self->handler(text => undef);
}

sub parseTVGFavs {
  my $buffer = shift;
  my $t = decode_json($buffer);

  if (defined($t->{"message"})) {
    my $m = $t->{"message"};
    foreach my $f (@{$m}) {
      my $source = $f->{"source"};
      my $channel = $f->{"channel"};
      $tvgfavs{$channel} = $source;
    }
    &console.log("Lineup $zlineupId favorites: " .  (keys %tvgfavs) . "\n");
  }
}

sub parseTVGIcons {
  require GD;
  $rc = Encode::encode("utf8", &getURL($tvgspritesurl . "$zlineupId\.css") );
  if ($rc =~ /background-image:.+?url\((.+?)\)/) {
    my $url = $tvgspritesurl . $1;

    if (! -d $iconDir) {
      mkdir($iconDir) or die "Can"t mkdir: $!\n";
    }

    ($n,$_,$s) = fileparse($url, qr"\..*");
    $f = $iconDir . "/sprites-" . $n . $s;
    &wbf($f, &getURL($url));

    GD::Image->trueColor(1);
    $im =  new GD::Image->new($f);

    my $iconw = 30;
    my $iconh = 20;
    while ($rc =~ /listings-channel-icon-(.+?)\{.+?position:.*?\-(\d+).+?(\d+).*?\}/isg) {
      my $cid = $1;
      my $iconx = $2;
      my $icony = $3;

      my $icon = new GD::Image($iconw,$iconh);
      $icon->alphaBlending(0);
      $icon->saveAlpha(1);
      $icon->copy($im, 0, 0, $iconx, $icony, $iconw, $iconh);

      $stations{$cid}{logo} = "sprite-" . $cid;
      $stations{$cid}{logoExt} = $s;

      my $ifn = $iconDir . "/" . $stations{$cid}{logo} . $stations{$cid}{logoExt};
      &wbf($ifn, $icon->png);
    }
  }
}

sub parseTVGD {
  my $gz = gzopen(shift, "rb");
  my $json = new JSON;
  my $buffer;
  $buffer .= $b while $gz->gzread($b, 65535) > 0;
  $gz->gzclose();
  my $t = decode_json($buffer);

  if (defined($t->{"program"})) {
    my $prog = $t->{"program"};
    if (defined($prog->{"release_year"})) {
      $programs{$cp}{movie_year} = $prog->{"release_year"};
    }
    if (defined($prog->{"rating"}) && !defined($programs{$cp}{rating})) {
      $programs{$cp}{rating} = $prog->{"rating"} if $prog->{"rating"} ne "NR";
    }
  }

  if (defined($t->{"tvobject"})) {
    my $tvo = $t->{"tvobject"};
    if (defined($tvo->{"photos"})) {
      my $photos = $tvo->{"photos"};
      my %phash;
      foreach $ph (@{$photos}) {
        my $w = $ph->{"width"} * $ph->{"height"};
        my $u = $ph->{"url"};
        $phash{$w} = $u;
      }
      my $big = (sort {$b <=> $a} keys %phash)[0];
      $programs{$cp}{imageUrl} = $phash{$big};
    }
  }
}

sub parseTVGGrid {
  my $gz = gzopen(shift, "rb");
  my $json = new JSON;
  my $buffer;
  $buffer .= $b while $gz->gzread($b, 65535) > 0;
  $gz->gzclose();
  my $t = decode_json($buffer);

  foreach my $e (@{$t}) {
    my $cjs = $e->{"Channel"};
    $cs = $cjs->{"SourceId"};

    if (%tvgfavs) {
      if (defined($cjs->{"Number"}) && $cjs->{"Number"} ne "") {
        my $n = $cjs->{"Number"};
        if ($cs != $tvgfavs{$n}) {
          next;
        }
      }
    }

    if (!defined($stations{$cs}{stnNum})) {
      $stations{$cs}{stnNum} = $cs;
      $stations{$cs}{number} = $cjs->{"Number"} if defined($cjs->{"Number"}) && $cjs->{"Number"} ne "";
      $stations{$cs}{name} = $cjs->{"Name"};
      if (defined($cjs->{"FullName"}) && $cjs->{"FullName"} ne $cjs->{"Name"}) {
        $stations{$cs}{fullname} = $cjs->{"FullName"};
      }

      if (!defined($stations{$cs}{order})) {
        if (defined($options{b})) {
          $stations{$cs}{order} = $coNum++;
        } else {
          $stations{$cs}{order} = $stations{$cs}{number};
        }
      }
    }

    my $cps = $e->{"ProgramSchedules"};
    foreach my $pe (@{$cps}) {
      $cp = $pe->{"ProgramId"};
      my $catid = $pe->{"CatId"};

      if ($catid == 1) { $programs{$cp}{genres}{movie} = 1 } 
      elsif ($catid == 2) { $programs{$cp}{genres}{sports} = 1 } 
      elsif ($catid == 3) { $programs{$cp}{genres}{family} = 1 } 
      elsif ($catid == 4) { $programs{$cp}{genres}{news} = 1 } 
      # 5 - 10?
      # my $subcatid = $pe->{"SubCatId"}; 

      my $ppid = $pe->{"ParentProgramId"};
      if ((defined($ppid) && $ppid != 0)
        || (defined($options{j}) && $catid != 1)) {
        $programs{$cp}{genres}{series} = 9; 
      }

      $programs{$cp}{title} = $pe->{"Title"};
      $tba = 1 if $programs{$cp}{title} =~ /$sTBA/i;

      if (defined($pe->{"EpisodeTitle"}) && $pe->{"EpisodeTitle"} ne "") {
        $programs{$cp}{episode} = $pe->{"EpisodeTitle"};
        $tba = 1 if $programs{$cp}{episode} =~ /$sTBA/i;
      }

      $programs{$cp}{description} = $pe->{"CopyText"} if defined($pe->{"CopyText"}) && $pe->{"CopyText"} ne "";
      $programs{$cp}{rating} = $pe->{"Rating"} if defined($pe->{"Rating"}) && $pe->{"Rating"} ne "";

      my $sch = $pe->{"StartTime"} * 1000;
      $schedule{$cs}{$sch}{time} = $sch;
      $schedule{$cs}{$sch}{endtime} = $pe->{"EndTime"} * 1000;
      $schedule{$cs}{$sch}{program} = $cp;
      $schedule{$cs}{$sch}{station} = $cs;

      my $airat = $pe->{"AiringAttrib"};
      if ($airat & 1) { $schedule{$cs}{$sch}{live} = 1 }
      elsif ($airat & 4) { $schedule{$cs}{$sch}{new} = 1 }
      # other bits?

      my $tvo = $pe->{"TVObject"};
      if (defined($tvo)) {
        if (defined($tvo->{"SeasonNumber"}) && $tvo->{"SeasonNumber"} != 0) {
          $programs{$cp}{seasonNum} = $tvo->{"SeasonNumber"};
          if (defined($tvo->{"EpisodeNumber"}) && $tvo->{"EpisodeNumber"} != 0) {
            $programs{$cp}{episodeNum} = $tvo->{"EpisodeNumber"};
          }
        }
        if (defined($tvo->{"EpisodeAirDate"})) {
          my $eaid = $tvo->{"EpisodeAirDate"};
          $eaid =~ tr/0-9//cd;
          $programs{$cp}{originalAirDate} = $eaid if ($eaid ne "");
        }
        my $url;
        if (defined($tvo->{"EpisodeSEOUrl"}) && $tvo->{"EpisodeSEOUrl"} ne "") {
          $url = $tvo->{"EpisodeSEOUrl"};
        } elsif(defined($tvo->{"SEOUrl"}) && $tvo->{"SEOUrl"} ne "") {
          $url = $tvo->{"SEOUrl"};
          $url = "/movies$url" if ($catid == 1 && $url !~ /movies/); 
        }
        $programs{$cp}{url} = substr($tvgurl, 0, -1) . $url if defined($url);
      }
  
      if (defined($options{I}) 
        || (defined($options{D}) && $programs{$cp}{genres}{movie}) 
        || (defined($options{W}) && $programs{$cp}{genres}{movie}) ) {
          &getDetails(\&parseTVGD, $cp, $tvgMapiRoot . "listings/details?program=$cp", "");
      } 
    }
  }
}

sub getDetails {
  my ($func, $cp, $url, $prefix) = @_;
  my $fn = "$cacheDir/$prefix$cp\.js\.gz";
  if (! -e $fn) {
    my $rs = &getURL($url, 2);
    if (length($rs)) {
      $rc = Encode::encode("utf8", $rs);
      &wbf($fn, Compress::Zlib::memGzip($rc));
    }
  }
  if (-e $fn) {
    my $l = length($prefix) ? $prefix : "D";
    &console.log("[$l] Parsing: $cp\n");
    $func->($fn);
  } else {
    &console.log("[$skips] Skipping: $cp\n");
  }
}

sub parseJSONI {
  my $gz = gzopen(shift, "rb");
  my $json = new JSON;
  my $buffer;
  $buffer .= $b while $gz->gzread($b, 65535) > 0;
  $gz->gzclose();
  $buffer =~ s/"/"/g;
  my $t = decode_json($buffer);

  if (defined($t->{imageUrl}) && $t->{imageUrl} =~ /^http/i) {
    $programs{$cp}{imageUrl} = $t->{imageUrl}
  }
}

sub parseJSOND {
  my $gz = gzopen(shift, "rb");
  my $json = new JSON;
  my $buffer;
  $buffer .= $b while $gz->gzread($b, 65535) > 0;
  $gz->gzclose();
  $buffer =~ s/^.+?\=\ //gim;
  my $t = decode_json($buffer);
  my $p = $t->{"program"};

  if (defined($p->{"seasonNumber"})) {
    my $sn = $p->{"seasonNumber"};
    $sn =~ s/S//i;
    $programs{$cp}{seasonNum} = $sn if ($sn ne "");
  }
  if (defined($p->{"episodeNumber"})) {
    my $en = $p->{"episodeNumber"};
    $en =~ s/E//i;
    $programs{$cp}{episodeNum} = $en if ($en ne "");
  }
  if (defined($p->{"originalAirDate"})) {
    my $oad = $p->{"originalAirDate"};
    $programs{$cp}{originalAirDate} = $oad if ($oad ne "");
  }
  if (defined($p->{"description"})) {
    my $desc = $p->{"description"};
    $programs{$cp}{description} = $desc if ($desc ne "");
  }
  if (defined($p->{"genres"})) {
    my $genres = $p->{"genres"};
    my $i = 1;
    foreach $g (@{$genres}) {
      ${$programs{$cp}{genres}}{lc($g)} = $i++;
    }
  }
  if (defined($p->{"seriesId"})) {
    my $seriesId = $p->{"seriesId"};
    ${$programs{$cp}{genres}}{series} = 9 if ($seriesId ne "");
  }

  if (defined($p->{"credits"})) {
    my $credits = $p->{"credits"};
    my $i = 1;
    foreach $g (@{$credits}) {
      ${$programs{$cp}{credits}}{$g} = $i++;
    }
  }
  if (defined($p->{"starRating"})) {
    my $sr = $p->{"starRating"};
    my $tsr = length($sr);
    if ($sr =~ /\+$/) {
      $tsr = $tsr - 1;
      $tsr .= ".5";
     } 
    $programs{$cp}{starRating} = $tsr;
  }
}

sub parseGrid {
  my @report_tags = qw(td th span a p div img li);
  my $p = HTML::Parser->new(
    api_version => 3,
    unbroken_text => 1,
    report_tags => \@report_tags,
    handlers  => [
      start => [\&handler_start, "self, tagname, attr"],
      end => [\&handler_end, "self, tagname"],
    ],
  );
  
  my $gz = gzopen(shift, "rb");
  my $b;
  $p->parse($b) while $gz->gzread($b, 65535) > 0;
  $gz->gzclose();
  $p->eof;
}

sub parseSTNNUM {
  my @report_tags = qw(img);
  my $p = HTML::Parser->new(
    api_version => 3,
    unbroken_text => 1,
    report_tags => \@report_tags,
    handlers  => [
      start => [\&handler_stnnum_start, "self, tagname, attr"],
      end => [\&handler_stnnum_end, "self, tagname"],
    ],
  );
  
  my $gz = gzopen(shift, "rb");
  my $b;
  $p->parse($b) while $gz->gzread($b, 65535) > 0;
  $gz->gzclose();
  $p->eof;
}

sub hourToMillis {
  ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime(time);
  if ($start == 0) {
    $hour = int($hour/$gridHours) * $gridHours;
  } else {
    $hour = 0; 
  }
  $t = timegm(0,0,$hour,$mday,$mon,$year);
  $t = $t - (&tz_offset * 3600) if !defined($options{g});
  ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = gmtime($t);
  $t = timegm($sec, $min, $hour,$mday,$mon,$year);
  return $t . "000";
}

sub tz_offset {
  my $n = defined $_[0] ? $_[0] : time;
  my ($lm, $lh, $ly, $lyd) = (localtime $n)[1, 2, 5, 7];
  my ($gm, $gh, $gy, $gyd) = (gmtime $n)[1, 2, 5, 7];
  ($lm - $gm)/60 + $lh - $gh + 24 * ($ly - $gy || $lyd - $gyd)
}

sub timezone {
  my $tztime = defined $_[0] ? &_rtrim3(shift) : time; 
  my $os = sprintf "%.1f", (timegm(localtime($tztime)) - $tztime) / 3600;
  my $mins = sprintf "%02d", abs( $os - int($os) ) * 60;
  return sprintf("%+03d", int($os)) . $mins;
}

sub max ($$) { $_[$_[0] < $_[1]] }
sub min ($$) { $_[$_[0] > $_[1]] }

