/**
 * @file
 * Attaches behaviors for Drupal's active link marking.
 */

 (function(Drupal, $) {
  /**
   * Append is-active class.
   *
   * The link is only active if its path corresponds to the current path, the
   * language of the linked path is equal to the current language, and if the
   * query parameters of the link equal those of the current request, since the
   * same request with different query parameters may yield a different page
   * (e.g. pagers, exposed View filters).
   *
   * Does not discriminate based on element type, so allows you to set the
   * is-active class on any element: a, li…
   *
   * @type {Drupal~behavior}
   */
   Drupal.behaviors.upkids = {
    attach(context) {
      $(".paragraph--type--depoimentos .view-content").owlCarousel({
        center: true,
        items:1,
        // loop:true,
        // autoplay:true,
        // autoplayTimeout:5000,
        // autoplayHoverPause:true
      });
      // $('.play').on('click',function(){
      //   owl.trigger('play.owl.autoplay',[1000])
      // })
      // $('.stop').on('click',function(){
      //   owl.trigger('stop.owl.autoplay')
      // })
    },

    detach(context, settings, trigger) {

    },
  };
})(Drupal, jQuery);

/* owl carousel banner home*/
(function(Drupal, $) {

  Drupal.behaviors.home_carousel = {
    attach(context) {
      $('.field--name-field-carrossel').owlCarousel({
        center: true,
        items:1,
        /*loop:true,
        autoplay:true,
        autoplayTimeout:5000*/
      })

    },
    detach(context, settings, trigger) {

    },
  };
})(Drupal, jQuery);
