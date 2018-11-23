import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var revealOnScrollFeature = new RevealOnScroll($('.feature-item'), '85%');
var revealOnScrollTestimonial = new RevealOnScroll($('.testimonial'), '60%');
