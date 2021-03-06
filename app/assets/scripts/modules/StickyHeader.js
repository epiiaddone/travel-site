import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader{
  constructor(){
    this.lazyImages = $('.lazyload');
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();
    this.pageSections =$(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

//because lazyload changes the height of the page 
  refreshWayPoints(){
    this.lazyImages.on('load', function(){
      Waypoint.refreshAll();
    })
  }

  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint(){
    var _this = this;
    new Waypoint({
      element: _this.headerTriggerElement[0],
      handler: function(direction){
        if(direction == 'down') _this.siteHeader.addClass("site-header--dark");
        else _this.siteHeader.removeClass("site-header--dark");
      }
    });
  }

  createPageSectionWaypoints(){
    var _this = this;
    this.pageSections.each(function(){
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if(direction != 'down') return;
          var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
          _this.headerLinks.removeClass("is-current-link");
          $(matchingHeaderLink).addClass("is-current-link");
        },
        offset: "18%"
      });

    new Waypoint({
      element: currentPageSection,
      handler: function(direction){
        if(direction != 'up') return;
        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
        _this.headerLinks.removeClass("is-current-link");
        $(matchingHeaderLink).addClass("is-current-link");
      },
      offset: "-40%"
    });
  });
  }
}

export default StickyHeader;
