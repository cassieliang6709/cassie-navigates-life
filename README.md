# Cassie Portfolio - 梁悦的个人作品集

## 🌟 项目简介

这是梁悦(Cassie)的个人作品集网站，采用投行风格设计，展示个人成长历程、核心项目和专业技能。

## ✨ 主要特性

- **投行风格设计** - 简洁、专业、高信息密度
- **响应式布局** - 支持桌面端和移动端
- **多语言支持** - 中文和英文双语界面
- **时间轴展示** - 个人成长历程的可视化展示
- **项目展示** - 三个核心项目的垂直堆叠布局
- **专业技能** - 精简的技能展示模块

## 🚀 在线访问

### 主要域名
- **生产环境**: https://portfolio.liangyue.site
- **Vercel部署**: https://cassie-navigates-life-lhfs5xjic-cassieliang6709s-projects.vercel.app

### 简历下载
- **简历PDF**: [resume_onepage.pdf](./public/resume_onepage.pdf)

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **UI组件**: 自定义组件库
- **部署平台**: Vercel
- **域名**: liangyue.site

## 📁 项目结构

```
src/
├── components/          # UI组件
│   ├── ui/            # 基础UI组件
│   │   ├── timeline.tsx      # 时间轴组件
│   │   ├── project-card.tsx  # 项目卡片组件
│   │   ├── about-cards.tsx   # 关于我卡片组件
│   │   └── ...
├── contexts/           # React Context
│   └── LanguageContext.tsx   # 多语言支持
├── lib/               # 工具库
│   └── i18n.ts        # 国际化配置
├── pages/             # 页面组件
│   └── Index.tsx      # 主页面
└── assets/            # 静态资源
    └── profile-photo.jpeg
```

## 🎨 设计特色

### 投行风格设计原则
- **简洁性** - 去除冗余元素，突出核心信息
- **专业性** - 蓝色和白色主题，体现金融行业特色
- **信息密度** - 合理利用空间，展示更多有价值内容
- **视觉层次** - 清晰的信息架构和视觉引导

### 布局特点
- **时间轴布局** - 1/4宽度展示个人成长历程
- **项目展示** - 3/4宽度展示核心项目
- **垂直堆叠** - 三个项目卡片垂直排列
- **右对齐按钮** - 统一的按钮布局风格

## 🌍 多语言支持

- **中文** - 简体中文界面
- **英文** - English interface
- **语言切换** - 右上角语言切换器

## 📱 响应式设计

- **桌面端** - 完整布局，时间轴和项目并排显示
- **平板端** - 自适应布局调整
- **移动端** - 垂直堆叠，优化触摸体验

## 🚀 部署信息

### Vercel配置
- **项目ID**: prj_eK41KlHVtUT7tRsb6KowbADV6r3F
- **组织ID**: team_m182dzmMKeumm4AO9nWHoZfw
- **项目名称**: cassie-navigates-life

### 域名配置
- **主域名**: liangyue.site
- **子域名**: portfolio.liangyue.site (主要访问域名)
- **备用域名**: cassie.liangyue.site

## 📋 开发命令

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建项目
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint
```

## 🔄 更新日志

### v1.0.0 (2024-09-02)
- ✨ 重构项目布局和组件设计
- 🗑️ 删除专业技能部分，简化页面结构
- 📅 调整时间轴内容，按照用户要求重新整理
- 🎯 项目展示改为垂直堆叠布局
- 🔘 按钮统一右对齐，提升视觉一致性
- 🆕 新增AboutCards和Timeline组件
- 🎨 优化投行风格UI设计
- 🌐 部署到Vercel并配置自定义域名

## 📞 联系方式

- **邮箱**: liangyue3666@gmail.com
- **GitHub**: [cassieliang6709](https://github.com/cassieliang6709)
- **个人网站**: https://portfolio.liangyue.site

## 📄 许可证

© 2024 梁悦. 保留所有权利. 浙ICP备2025173001号

---

*Built with ❤️ using React, TypeScript, and Tailwind CSS*
