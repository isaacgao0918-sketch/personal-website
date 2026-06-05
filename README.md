# Isaac Gao — Personal Portfolio

基于 React 18 + TypeScript + Vite + Tailwind CSS 的个人简历/作品集网站。

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 18, TypeScript |
| 构建 | Vite 5 |
| 样式 | Tailwind CSS 3.4, 自定义渐变色 |
| 动画 | Framer Motion |
| 字体 | Kanit (Google Fonts) |

## 页面结构

| 顺序 | Section | 背景 | 说明 |
|------|---------|------|------|
| — | **Navbar** | 固定顶部透→暗 | 滚动后毛玻璃效果 |
| 1 | **Hero** | 暗色 `#0C0C0C` | "HI, I'm Isaac" 首页，人物图片居中靠底 |
| 2 | **About** | 暗色 | 个人简介 + 关键信息网格 |
| 3 | **Education** | 白色 | 香港中文大学 / 中南大学 |
| 4 | **Journey** | 暗色 | 4 段实习 + 4 段校内经历 |
| 5 | **Skills** | 白色 | 语言、工具、AI、写作、市场 5 项 |
| 6 | **Research** | 暗色 | 2 篇语言产业论坛论文 |
| 7 | **Portfolio** | 白色 | 自动滚动幻灯片 |
| 8 | **Honors** | 暗色 | 奖学金、优秀组织奖、辩论赛 |
| 9 | **Contact** | 白色 | 电话 + 邮箱 |

暗白交替穿插，每个 section 采用圆角顶部 + 负边距层叠设计。

## 项目结构

```
src/
├── main.tsx                  # 入口
├── App.tsx                   # 页面组装
├── index.css                 # Tailwind 引入 + 全局样式 + hero-heading 渐变
├── components/
│   ├── Navbar.tsx            # 固定导航栏（响应式）
│   ├── FadeIn.tsx            # whileInView 淡入动画包装
│   ├── AnimatedText.tsx      # 逐字渲染文本
│   ├── Magnet.tsx            # 鼠标磁吸效果（已停用）
│   ├── ContactButton.tsx     # 滚动到 Contact 的按钮
│   └── LiveProjectButton.tsx # 幽灵按钮组件
└── sections/
    ├── HeroSection.tsx       # 首页
    ├── AboutSection.tsx      # 关于我
    ├── EducationSection.tsx  # 教育经历
    ├── JourneySection.tsx    # 实习 + 校内
    ├── ServicesSection.tsx   # 技能
    ├── ResearchSection.tsx   # 科研
    ├── PortfolioSection.tsx  # 作品幻灯片
    ├── HonorsSection.tsx     # 荣誉奖励
    └── ContactSection.tsx    # 联系方式
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

## 联系方式

- **姓名**：高盛达 (Isaac Gao)
- **电话**：+86 15524835520
- **邮箱**：Isaacgao@foxmail.com
- **院校**：香港中文大学 市场学硕士 · 中南大学 汉语言文学学士
