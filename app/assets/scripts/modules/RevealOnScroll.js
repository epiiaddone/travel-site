import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
  constructor(els, offset){
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWayPoints();
  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  createWayPoints(){
    var revealOnScroll = this;
    this.itemsToReveal.each(function(){
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: revealOnScroll.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
