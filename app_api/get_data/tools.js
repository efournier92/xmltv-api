exports.tools = () => {
  parseGrid = function() {
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
}
