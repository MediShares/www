// 发展路线图
var myScroll;

function loaded() {
    if ($(window).width() >= 768) {
        myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, scrollbars: 'custom', interactiveScrollbars: true });
    }
}
// 浏览器内核
var browser = {
    versions: function() {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }()
}
$(function(){
    // 下载PDF
    if (browser.versions.android) {
        var ua = window.navigator.userAgent.toLowerCase();
        // 判断是否为微信浏览器
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            $(".download").removeAttr('download');
        }
    }
    // qq官网
    $(".qq").on('mouseover',function(){
        $('.qq-code').stop().show();
    })
    $(".qq").on('mouseout',function(){
        $('.qq-code').stop().hide();
    })
    // 折叠导航
    $('.navbar-toggle').on('click',function(){
        $(document.documentElement).addClass('wh100');
        $(document.body).addClass('wh100');
    })
    $('#mds-nav li').on('click',function(){
        $('#mds-nav').removeClass('in');
        $(document.documentElement).removeClass('wh100');
        $(document.body).removeClass('wh100');
    })
    $('.collapse-close').on('click',function(){
        $('#mds-nav').removeClass('in');
        $(document.documentElement).removeClass('wh100');
        $(document.body).removeClass('wh100');
    })
    // 导航固定
    navFix();
    $(window).scroll(function(){
        navFix();
    })
    // 导航固定公共函数
    function navFix(){
        if($(window).scrollTop()>=($('.mds-top').outerHeight()-$('.mds-nav').outerHeight())){
            $('.mds-nav').addClass('fixed-top');
            $('.mds-top').css('padding-top',73)
        }else{
             $('.mds-nav').removeClass('fixed-top');
             $('.mds-top').css('padding-top',5);
        }
    }
})

