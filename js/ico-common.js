var myScroll;

function loaded() {
    if ($(window).width() >= 768) {
        myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, scrollbars: 'custom', interactiveScrollbars: true });
    }
}
window.onresize = function() {
    loaded();
}
