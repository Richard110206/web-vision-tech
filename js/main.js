/**
 * 灵动视野 - 智慧型多功能模块化眼镜框
 * 主要交互脚本
 */

(function() {
    'use strict';

    // ==================== 导航栏交互 ====================
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // 导航栏滚动效果
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
    }

    // 平滑滚动到锚点
    function smoothScrollToAnchor(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // 更新导航栏激活状态
    function updateActiveNavLink() {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ==================== 按钮交互 ====================
    const buttons = document.querySelectorAll('.btn');

    function handleButtonHover(e) {
        // 按钮悬停效果已在CSS中通过transform实现
    }

    // ==================== 页面加载动画 ====================
    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.card, .product-card, .business-card, .breakthrough-card');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // 初始化动画元素状态
    function initAnimationElements() {
        const elements = document.querySelectorAll('.card, .product-card, .business-card, .breakthrough-card');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    }

    // ==================== 时间线动画 ====================
    function animateTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineProgress = document.querySelectorAll('.progress-fill');

        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight - 100) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';

                // 触发进度条动画
                const progressFill = timelineProgress[index];
                if (progressFill) {
                    const targetWidth = progressFill.style.width;
                    progressFill.style.width = '0';
                    setTimeout(() => {
                        progressFill.style.width = targetWidth;
                    }, 200);
                }
            }
        });
    }

    // 初始化时间线状态
    function initTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    }

    // ==================== 事件监听 ====================
    function initEventListeners() {
        // 导航链接点击事件
        navLinks.forEach(link => {
            link.addEventListener('click', smoothScrollToAnchor);
        });

        // 滚动事件
        window.addEventListener('scroll', function() {
            handleNavbarScroll();
            updateActiveNavLink();
            handleScrollAnimation();
            animateTimeline();
        });

        // 页面加载完成事件
        window.addEventListener('load', function() {
            initAnimationElements();
            initTimeline();
            handleScrollAnimation();
            animateTimeline();
            updateActiveNavLink();
        });

        // 按钮事件
        buttons.forEach(button => {
            button.addEventListener('mouseenter', handleButtonHover);
        });
    }

    // ==================== 工具函数 ====================

    // 节流函数
    function throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;

        return function(...args) {
            const currentTime = Date.now();
            const timeSinceLastExec = currentTime - lastExecTime;

            clearTimeout(timeoutId);

            if (timeSinceLastExec > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    lastExecTime = Date.now();
                }, delay - timeSinceLastExec);
            }
        };
    }

    // 检测元素是否在视口中
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // ==================== 初始化 ====================
    function init() {
        initEventListeners();
        handleNavbarScroll();
        updateActiveNavLink();
    }

    // DOM加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 导出API（可选，用于外部调用）
    window.LingdongApp = {
        scrollToSection: function(sectionId) {
            const section = document.querySelector(sectionId);
            if (section) {
                const offsetTop = section.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        },
        updateNavigation: updateActiveNavLink
    };

})();

/**
 * 部署说明：
 *
 * Vercel 一键部署步骤：
 *
 * 1. 将整个 lingdong-shiye 文件夹推送到 GitHub 仓库
 * 2. 登录 Vercel (https://vercel.com)
 * 3. 点击 "Add New Project" 或 "New Project"
 * 4. 选择刚才推送的 GitHub 仓库
 * 5. Vercel 会自动识别这是静态站点，无需额外配置
 * 6. 点击 "Deploy" 按钮开始部署
 * 7. 等待约 30-60 秒，部署完成后即可访问 Vercel 提供的域名
 *
 * 本地预览方式：
 * - 直接用浏览器打开 index.html 文件
 * - 或使用本地服务器：python -m http.server 8000
 * - 或使用 VS Code 的 Live Server 插件
 */