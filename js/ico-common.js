// 发展路线图
var myScroll;
function loaded() {
  if ($(window).width() >= 768) {
    myScroll = new IScroll('#wrapper', {
      scrollX: true,
      scrollY: false,
      scrollbars: 'custom',
      interactiveScrollbars: true
    });
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
  // 下载PDF
if (browser.versions.android) {
  var ua = window.navigator.userAgent.toLowerCase();
  // 判断是否为微信浏览器
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    $(".download").removeAttr('download');
  }
}
//复制粘贴
function copy(id, cont) {
  if (browser.versions.android) {
    $(id).on("click", function() {
      copyVal(cont);
    });
  } else {
    var clipboard = new Clipboard(id);
    clipboard.on("success", function(element) { //复制成功的回调
      alert("复制成功");
    });
    clipboard.on("error", function(element) { //复制失败的回调
      console.info("error");
    })
  }
}

function copyVal(id) {
  var id = document.getElementById(id);
  var val = id.innerHTML;
  var oInput = document.createElement("input");
  oInput.type = "text";
  oInput.value = val;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  oInput.style.display = "none";
  alert("复制成功");
}
$(function() {
  // warning
  $(".check-box").on("click", function() {
    $(".check-bg").toggleClass("bg-select");
    if ($(".check-bg").hasClass("bg-select")) {
      $(".ico-enter").on("click", function() {
        $('html').removeClass('w100');
        $('body').removeClass('w100');
        $(this).attr('href', './index.html');
      })
    }
  });
  // 下拉导航条
  $(".dropdown").on("click", function(e) {
    e.stopPropagation();
    $(this).children('.dropdown-menu').show();
  });
  $(document).on("click", function() {
    $(".dropdown-menu").hide();
  })
})
