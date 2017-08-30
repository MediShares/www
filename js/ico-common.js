var myScroll;

function loaded () {
	myScroll = new IScroll('#wrapper', { scrollX: true,scrollY: false, scrollbars: 'custom',interactiveScrollbars:true });
}

// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
