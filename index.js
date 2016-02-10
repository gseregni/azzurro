 $(window).on("ready", function() {


    $('#ristorante img').each(function() {
      var $a = $("<a></a>").attr("data-lightbox", "ristorante").attr("href", $(this).attr("src"));
      $(this).wrap($a);
    });

    $('#menu img').each(function() {
      var $a = $("<a></a>").attr("data-lightbox", "ristorante").attr("href", $(this).attr("src"));
      $(this).wrap($a);
    });

    $('#eventi img').each(function() {
      var $a = $("<a></a>").attr("data-lightbox", "ristorante").attr("href", $(this).attr("src"));
      $(this).wrap($a);
    });

    window.sr = new scrollReveal();

    $("a[href^='#']").on('click', function(e) {
      // prevent default anchor click behavior
      e.preventDefault();

      // store hash
      var hash = this.hash;

      // animate
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 300, function(){

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });

    });
  });
