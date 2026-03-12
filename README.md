# 灵动视野 - 智慧型多功能模块化眼镜框

创新创业大赛参赛项目静态展示网站

## 项目简介

"灵动视野"是一款智慧型多功能模块化眼镜框创新创业项目，集八大智能功能于一体，旨在重新定义眼镜使用体验。本网站为项目的纯静态展示页面，适配创新创业大赛展示、商业合作洽谈等场景。

## 核心信息

- **项目名称**：灵动视野 - 智慧型多功能模块化眼镜框
- **价值主张**：灵动视野，智慧生活
- **团队负责人**：李沁轩
- **联系电话**：13390911102
- **电子邮箱**：08241120@cumt.edu.cn

## 八大核心功能

1. **可调节框架结构** - 自动调节镜腿长短与瞳距宽度
2. **一体化运动耳钩** - 运动场景佩戴稳固不脱落
3. **磁吸式多镜片使用** - 一秒快速切换镜片
4. **快速镜片除雾** - 温度差自动除雾
5. **蓝牙骨传导耳机** - 开放双耳听音更安全
6. **指纹识别智能助手** - 一键识别开启智能助手
7. **NFC短距通信** - 支持门禁、公交卡等
8. **条形码移动支付** - 快捷移动支付

## 项目结构

```
lingdong-shiye/
├── index.html           # 网站唯一入口文件（Vercel默认识别）
├── css/
│   └── style.css        # 全局样式文件
├── js/
│   └── main.js          # 全局交互脚本
├── images/
│   ├── logo.png         # 项目LOGO（需替换为实际图片）
│   ├── product-main.png # 产品主视觉图（需替换为实际图片）
│   └── icon/            # 图标文件夹（需替换为实际图片）
│       ├── growth.png
│       ├── pain-points.png
│       ├── target-users.png
│       ├── market-prospect.png
│       └── wechat.png
└── README.md            # 部署说明文档
```

## 技术栈

- **HTML5** - 语义化标签
- **CSS3** - 现代布局与动画
- **Vanilla JavaScript** - 原生JS实现交互效果
- **纯静态资源** - 无后端依赖、无数据库

## 设计规范

### 颜色系统
- **科技蓝**：#165DFF（主色调）
- **浅灰背景**：#F5F7FA
- **白色**：#FFFFFF
- **活力橙**：#FF7D00（强调色/按钮）
- **深灰**：#333333（正文）

### 字体系统
- **字体系列**：Inter / 微软雅黑 / 思源黑体
- **大标题**：24-32px
- **板块标题**：20-24px
- **正文**：14-16px
- **辅助文字**：12-14px

## Vercel 一键部署步骤

### 方法一：通过 GitHub 自动部署（推荐）

1. **将项目推送到 GitHub**
   ```bash
   cd lingdong-shiye
   git init
   git add .
   git commit -m "Initial commit: 灵动视野项目展示网站"
   git branch -M main
   git remote add origin https://github.com/你的用户名/lingdong-shiye.git
   git push -u origin main
   ```

2. **登录 Vercel**
   - 访问 [Vercel 官网](https://vercel.com)
   - 使用 GitHub 账号登录

3. **创建新项目**
   - 点击 "Add New" → "Project"
   - 选择刚才推送的 GitHub 仓库
   - Vercel 会自动识别这是静态站点，无需额外配置

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待约 30-60 秒部署完成
   - 部署成功后访问 Vercel 提供的域名（如：lingdong-shiye.vercel.app）

### 方法二：通过 Vercel CLI 部署

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **在项目目录下运行**
   ```bash
   cd lingdong-shiye
   vercel
   ```

3. **按提示操作**
   - 首次使用需要登录 Vercel 账号
   - 选择或创建项目
   - 确认部署设置
   - 等待部署完成

## 本地预览

### 方法一：直接用浏览器打开
- 双击 `index.html` 文件，直接在浏览器中打开

### 方法二：使用 Python 本地服务器
```bash
cd lingdong-shiye
python -m http.server 8000
# 然后访问 http://localhost:8000
```

### 方法三：使用 VS Code Live Server
1. 安装 Live Server 插件
2. 右键 `index.html`
3. 选择 "Open with Live Server"

## 图片资源说明

项目中的图片资源目前使用占位符，部署前请替换为实际图片：

| 图片路径 | 用途 | 建议尺寸 |
|---------|------|---------|
| images/logo.png | 项目LOGO | 200x200px |
| images/product-main.png | 产品主视觉图 | 800x600px |
| images/icon/growth.png | 增长图标 | 64x64px |
| images/icon/pain-points.png | 痛点图标 | 64x64px |
| images/icon/target-users.png | 用户图标 | 64x64px |
| images/icon/market-prospect.png | 前景图标 | 64x64px |
| images/icon/wechat.png | 微信二维码 | 300x300px |

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 网站板块

1. **首页英雄区** - 项目核心介绍
2. **项目背景** - 市场机遇分析
3. **产品介绍** - 八大核心功能展示
4. **创新技术** - 六大创新点与三大技术突破
5. **商业模式** - 价值主张、产品服务、合作生态、客户关系
6. **未来规划** - 三步走战略规划
7. **联系我们** - 合作信息与联系方式

## 交互特性

- 平滑滚动导航
- 导航栏滚动固定
- 按钮悬停效果
- 卡片悬停动画
- 页面滚动动画
- 响应式布局适配

## 联系方式

- **团队负责人**：李沁轩
- **联系电话**：13390911102
- **电子邮箱**：08241120@cumt.edu.cn

## 版权信息

灵动视野 © 2025 版权所有 | 智慧型多功能模块化眼镜框 创新创业项目