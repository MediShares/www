var myScroll;

function loaded () {
	if($(window).width()>=768){
	myScroll = new IScroll('#wrapper', { scrollX: true,scrollY: true, scrollbars: 'custom',interactiveScrollbars:true });
	}
}
