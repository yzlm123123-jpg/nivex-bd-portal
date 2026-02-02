/**
 * NIVEX BD Portal - 导航功能
 */

(function() {
  'use strict';

  /**
   * 初始化移动端菜单
   */
  function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    if (toggle && menu) {
      toggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
      });

      // 点击菜单项后关闭菜单
      menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
          menu.classList.remove('active');
          toggle.classList.remove('active');
        });
      });

      // 点击页面其他地方关闭菜单
      document.addEventListener('click', function(e) {
        if (!e.target.closest('.top-nav')) {
          menu.classList.remove('active');
          toggle.classList.remove('active');
        }
      });
    }
  }

  /**
   * 高亮当前页面的导航项
   */
  function highlightCurrentNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');

      // 检查是否是当前页面
      if (currentPath.includes(linkPath.split('/')[0]) ||
          (linkPath === 'index.html' && currentPath.endsWith('/'))) {
        link.classList.add('active');
      }
    });
  }

  /**
   * 滚动时导航栏效果
   */
  function initScrollEffect() {
    const nav = document.querySelector('.top-nav');
    if (!nav) return;

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
      } else {
        nav.style.boxShadow = 'none';
      }

      lastScrollY = currentScrollY;
    }, { passive: true });
  }

  /**
   * 初始化
   */
  function init() {
    initMobileMenu();
    highlightCurrentNav();
    initScrollEffect();
  }

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
