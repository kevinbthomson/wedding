import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();

new RevealOnScroll($('.feature-item'), '80%');
new RevealOnScroll($('.location'), '60%');
new RevealOnScroll($('.things-item'), '70%');

var modal = new Modal();