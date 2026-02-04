/**
 * NIVEX BD Portal - 语言切换功能
 * 支持中文/越南语/英文/韩文/日文多语言切换
 */

(function() {
  'use strict';

  // 默认语言
  const DEFAULT_LANG = 'cn';

  // 存储键
  const STORAGE_KEY = 'nivex-bd-lang';

  /**
   * 获取当前语言
   */
  function getCurrentLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  /**
   * 设置语言
   */
  function setLang(lang) {
    // 保存到本地存储
    localStorage.setItem(STORAGE_KEY, lang);

    // 更新 HTML 属性
    document.documentElement.setAttribute('data-lang', lang);

    // 更新语言按钮状态
    updateLangButtons(lang);

    // 触发自定义事件
    window.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
  }

  /**
   * 更新语言按钮状态
   */
  function updateLangButtons(lang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  /**
   * 初始化语言切换
   */
  function initLanguageSwitch() {
    // 设置初始语言
    const currentLang = getCurrentLang();
    setLang(currentLang);

    // 绑定语言按钮点击事件
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('lang-btn')) {
        const lang = e.target.dataset.lang;
        if (lang) {
          setLang(lang);
        }
      }
    });
  }

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitch);
  } else {
    initLanguageSwitch();
  }

  // 导出全局函数
  window.NivexLang = {
    get: getCurrentLang,
    set: setLang
  };
})();
