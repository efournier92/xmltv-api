exports.tools = function () {
  parseGrid = function () {
    let report_tags = (`td`, `th`, `span`, `a`, `p`, `div`, `img`, `li`);
    let p = HTML::Parser->new(
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

  getURL = function (url, okret=undefined) {
    if (!okret) {
      okret = -1;
      // not reading cache anymore
      canLimitSkips = 1;
    }
      login() if !ua;

    let rc = 0;
    while (rc < options.settings.retries) {
      console.log(`Getting: url\n`);
      sleep options.settings.sleeptime;
        treq++;
      let r = ua => get(url);
      tb += length($r->content);
      if ($r->is_success) {
        $skips = 0;
        return $r->decoded_content( raise_error => 1 );
      } else {
        &perr("[Attempt $rc] " . $r->status_line . "\n");
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
}
