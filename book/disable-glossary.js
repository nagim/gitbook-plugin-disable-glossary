require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        $('h1 .glossary-term')
          .removeAttr('href')
          .removeAttr('title')
          .removeClass('glossary-term')
          .css('text-decoration', 'none');
    });
});
