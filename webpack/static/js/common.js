//baidu
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d63151db8439ddaddb22641e98cf0ea6";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

$(function () {
  // qq ,微信
  $(".qq").on("mouseover", function () {
    $(this).children(".qq-code").stop().show();
  });
  $(".qq").on("mouseout", function () {
    $(this).children(".qq-code").stop().hide();
  });

  // 折叠导航
  $(".navbar-toggle").on("click", function () {
    $(document.documentElement).addClass("wh100");
    $(document.body).addClass("wh100");
  });
  $("#mds-nav li").on("click", function () {
    $("#mds-nav").removeClass("in");
    $(document.documentElement).removeClass("wh100");
    $(document.body).removeClass("wh100");
  });
  $("#mds-nav .dropdown-menu li").on("click", function () {
    $("#mds-nav").removeClass("in");
    $(document.documentElement).removeClass("wh100");
    $(document.body).removeClass("wh100");
  });
  $(".collapse-close").on("click", function () {
    $("#mds-nav").removeClass("in");
    $(document.documentElement).removeClass("wh100");
    $(document.body).removeClass("wh100");
  });

  // 导航固定
  navFix();
  $(window).scroll(function () {
    navFix();
  });

  // 导航固定公共函数
  function navFix() {
    if (
      $(window).scrollTop() >=
      $(".mds-top").outerHeight() - $(".com-nav").outerHeight()
    ) {
      $(".com-nav").addClass("fixed-top");
      $(".mds-top").css("padding-top", 50);
    } else {
      $(".com-nav").removeClass("fixed-top");
      $(".mds-top").css("padding-top", 0);
    }
  }
});
