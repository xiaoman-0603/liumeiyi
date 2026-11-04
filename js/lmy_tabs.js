/**
 * lmy_tabs.js
 * 刘美怡 | 建立时间: 2026-11-04 13:41:37 | 使用大模型: Kimi-K3 | 功能名称: 可复用 Tab 选项卡
 * 用法：给容器元素加上 data-lmy-tabs，按钮加 data-lmy-tab="面板id"，
 *       面板加 id 与 data-lmy-pane，默认项给按钮加 data-lmy-default。
 *       引入本文件后调用 lmy_initTabs() 即可初始化页面中所有选项卡。
 */

// 清除容器内所有按钮与面板的选中状态
function lmy_clearTabs(lmy_container) {
  const lmy_btns = lmy_container.querySelectorAll('[data-lmy-tab]');
  const lmy_panes = lmy_container.querySelectorAll('[data-lmy-pane]');
  lmy_btns.forEach(function (lmy_btn) {
    lmy_btn.classList.remove('lmy_tab_active');
    lmy_btn.setAttribute('aria-selected', 'false');
  });
  lmy_panes.forEach(function (lmy_pane) {
    lmy_pane.classList.remove('lmy_pane_active');
  });
}

// 设置指定按钮及其对应面板为选中状态
function lmy_selectTab(lmy_container, lmy_btn) {
  const lmy_target = lmy_btn.getAttribute('data-lmy-tab');
  const lmy_pane = lmy_container.querySelector('#' + lmy_target);
  lmy_btn.classList.add('lmy_tab_active');
  lmy_btn.setAttribute('aria-selected', 'true');
  if (lmy_pane) {
    lmy_pane.classList.add('lmy_pane_active');
  }
}

// 为单个容器绑定点击监听：先清除全部选中，再选中当前项
function lmy_bindTabs(lmy_container) {
  const lmy_btns = lmy_container.querySelectorAll('[data-lmy-tab]');
  lmy_btns.forEach(function (lmy_btn) {
    lmy_btn.addEventListener('click', function () {
      lmy_clearTabs(lmy_container);
      lmy_selectTab(lmy_container, lmy_btn);
    });
  });
  // 初始化默认选项（带 data-lmy-default 的按钮，否则取第一个）
  const lmy_defaultBtn =
    lmy_container.querySelector('[data-lmy-default]') || lmy_btns[0];
  if (lmy_defaultBtn) {
    lmy_clearTabs(lmy_container);
    lmy_selectTab(lmy_container, lmy_defaultBtn);
  }
}

// 初始化页面中所有带 data-lmy-tabs 的选项卡容器（可复用入口）
function lmy_initTabs() {
  const lmy_containers = document.querySelectorAll('[data-lmy-tabs]');
  lmy_containers.forEach(function (lmy_container) {
    lmy_bindTabs(lmy_container);
  });
}

document.addEventListener('DOMContentLoaded', lmy_initTabs);
