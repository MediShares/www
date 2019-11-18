import './index.css'
import IScroll from 'iscroll'

window.onload = function() {
  function iscrollFunc() {
    if (window.innerWidth >= 768) {
      new IScroll('#wrapper', {
        scrollX: true,
        scrollY: false,
        scrollbars: 'custom',
        interactiveScrollbars: true
      });
    }
  }
  iscrollFunc()
  window.onresize = function() {
    iscrollFunc()
  }
}