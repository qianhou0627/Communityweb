# Vue 3 + Vite 静态模板迁移执行清单

> **重要规则**: 在Windows PowerShell中执行命令时，请使用分号(`;`)替代&&运算符连接多个命令。例如：`cd frontend ; npm install`而不是`cd frontend && npm install`

## 阶段一：项目初始化与环境搭建

- [x] 1.1 创建前后端分离的基本目录结构
  - [x] 1.1.1 创建前端目录 `frontend`
  - [x] 1.1.2 创建后端目录 `backend`

- [x] 1.2 前端项目初始化
  - [x] 1.2.1 使用 Vite 创建 Vue 3 项目 `npm create vite@latest frontend -- --template vue`
  - [x] 1.2.2 安装项目依赖 `cd frontend ; npm install`
  - [x] 1.2.3 集成 Tailwind CSS
    - [x] 安装依赖 `npm install -D tailwindcss postcss autoprefixer`
    - [x] 初始化配置 `npx tailwindcss init -p` (手动创建了配置文件)
    - [x] 配置 `tailwind.config.js`
    - [x] 更新 CSS 文件
  - [x] 1.2.4 安装 Headless UI `npm install @headlessui/vue`
  - [x] 1.2.4.1 引入 Headless UI
  - [x] 1.2.5 安装 Vue Router `npm install vue-router@4`
  - [x] 1.2.6 安装 Pinia `npm install pinia`
  - [x] 1.2.7 安装 Axios (可选) `npm install axios`

- [x] 1.3 前端项目目录结构搭建
  - [x] 1.3.1 创建 `src/components/` 目录
  - [x] 1.3.2 创建 `src/views/` 或 `src/pages/` 目录
  - [x] 1.3.3 创建 `src/layouts/` 目录
  - [x] 1.3.4 创建 `src/router/` 目录
  - [x] 1.3.5 创建 `src/stores/` 目录
  - [x] 1.3.6 创建 `src/assets/` 目录
  - [x] 1.3.7 创建 `src/mocks/` 目录

- [ ] 1.4 后端项目初始化 (具体技术栈待定)

## 阶段二：组件化拆分与开发

- [ ] 2.1 布局组件开发
  - [ ] 2.1.1 创建 `DefaultLayout.vue` 组件
  - [ ] 2.1.2 实现页头 (Header) 组件
  - [ ] 2.1.3 实现侧边栏 (Sidebar) 组件
  - [ ] 2.1.4 实现页脚 (Footer) 组件

- [ ] 2.2 基础可复用组件开发
  - [ ] 2.2.1 按钮组件 (`Button.vue`)
  - [ ] 2.2.2 输入框组件 (`Input.vue`)
  - [ ] 2.2.3 卡片组件 (`Card.vue`)
  - [ ] 2.2.4 用户头像/信息组件 (`UserAvatar.vue`)
  - [ ] 2.2.5 帖子卡片组件 (`PostCard.vue`)
  - [ ] 2.2.6 产品卡片组件 (`ProductCard.vue`)
  - [ ] 2.2.7 下拉菜单组件 (使用 Headless UI)
  - [ ] 2.2.8 模态框组件 (使用 Headless UI)

- [ ] 2.3 页面组件开发
  - [ ] 2.3.1 首页组件 (`Home.vue`)
  - [ ] 2.3.2 时间线页面 (`Timeline.vue`)
  - [ ] 2.3.3 关于页面 (`About.vue`)
  - [ ] 2.3.4 产品页面 (`Products.vue`)
  - [ ] 2.3.5 其他页面...

## 阶段三：样式与组件策略实现

- [ ] 3.1 全局样式设置
  - [ ] 3.1.1 设置 CSS 变量 (颜色、字体等)
  - [ ] 3.1.2 创建全局样式类 (使用 @apply)

- [ ] 3.2 组件样式实现
  - [ ] 3.2.1 使用 Tailwind 替换所有 UIkit 样式
  - [ ] 3.2.2 实现响应式布局

- [ ] 3.3 集成 Headless UI 组件
  - [ ] 3.3.1 实现下拉菜单交互
  - [ ] 3.3.2 实现模态框交互
  - [ ] 3.3.3 实现其他复杂交互组件

## 阶段四：JavaScript 逻辑重构

- [ ] 4.1 使用 Vue Composition API 重写交互逻辑
  - [ ] 4.1.1 替换所有 jQuery DOM 操作
  - [ ] 4.1.2 实现事件处理
  - [ ] 4.1.3 处理表单提交和验证

- [ ] 4.2 路由配置
  - [ ] 4.2.1 配置 vue-router
  - [ ] 4.2.2 设置嵌套路由 (使用 DefaultLayout)
  - [ ] 4.2.3 实现导航守卫 (可选)

## 阶段五：数据处理策略实现

- [ ] 5.1 创建 Mock 数据
  - [ ] 5.1.1 创建 `posts.js` 帖子数据
  - [ ] 5.1.2 创建 `users.js` 用户数据
  - [ ] 5.1.3 创建 `products.js` 产品数据

- [ ] 5.2 在组件中使用 Mock 数据
  - [ ] 5.2.1 在时间线页面使用帖子数据
  - [ ] 5.2.2 在产品页面使用产品数据

## 阶段六：状态管理实现

- [ ] 6.1 创建 Pinia Store
  - [ ] 6.1.1 创建用户状态 Store (`userStore.js`)
  - [ ] 6.1.2 创建通知状态 Store (`notificationStore.js`)
  - [ ] 6.1.3 创建主题设置 Store (`themeStore.js`)

- [ ] 6.2 在组件中使用 Store
  - [ ] 6.2.1 在布局组件中使用用户状态
  - [ ] 6.2.2 实现主题切换功能

## 阶段七：后端开发 (具体技术栈待定)

- [ ] 7.1 设计 API 接口
- [ ] 7.2 实现数据库模型
- [ ] 7.3 实现 CRUD 操作
- [ ] 7.4 实现用户认证

## 阶段八：前后端集成

- [ ] 8.1 替换 Mock 数据为真实 API 调用
- [ ] 8.2 实现错误处理和加载状态
- [ ] 8.3 实现用户认证和授权

## 阶段九：测试与优化

- [ ] 9.1 单元测试
- [ ] 9.2 E2E 测试
- [ ] 9.3 性能优化
- [ ] 9.4 代码审查和重构

## 阶段十：部署

- [ ] 10.1 前端构建和部署
- [ ] 10.2 后端部署
- [ ] 10.3 配置 CI/CD (可选)
