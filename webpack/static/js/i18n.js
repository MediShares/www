const i18ns = {
  cn: require('../lang/cn.js'),
  en: require('../lang/en.js'),
  ko: require('../lang/ko.js')
}

//获取语言
let lang = 'en'
const langTypes = window.location.pathname.match(/\/\w*/g);
if (langTypes.includes('/cn')) {
  lang = 'cn'
} else if (langTypes.includes('/ko')) {
  lang = 'ko'
}

const i18n = i18ns[lang]

export {
  i18n,
  lang
};