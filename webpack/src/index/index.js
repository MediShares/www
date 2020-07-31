import '../../static/css/common.css'
import './index.css'
import '../../static/js/bootstrap.min.js'
import '../../static/js/common.js'
import '../tpl/roadmap/index'

//获取浏览器配置语言
var getLanguage = function() {
  var lang = (navigator.language || navigator.userLanguage).substr(0, 2); //常规浏览器语言和IE浏览器
  switch (lang) {
    case 'zh':
      lang = 'cn';
      break;
    case 'ko':
      lang = 'ko';
      break;
    default:
      lang = 'en';
  }
  return lang;
}
if (!window.sessionStorage.userLanguage) {
  var lang = getLanguage();
  window.sessionStorage.userLanguage = lang;
  window.location.href = "http://" + window.location.host + "/"+lang+"/" + window.location.search;
}

