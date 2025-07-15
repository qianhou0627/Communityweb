<script setup>
// 导入 stagewise 工具栏
import { StagewiseToolbar } from '@stagewise/toolbar-vue'
import VuePlugin from '@stagewise-plugins/vue'
import { onMounted } from 'vue'
import { useUserStore } from './stores/userStore'
import { useRouter } from 'vue-router'

// 检测是否为开发环境
const isDev = import.meta.env.DEV

// 获取用户状态管理
const userStore = useUserStore()
const router = useRouter()

// 自定义 Stagewise 配置，避免与 router 冲突
const stagwiseConfig = {
  plugins: [VuePlugin],
  // 添加额外配置，尽量减少与 router 的交互
  passive: true
}

// 组件挂载时初始化用户状态
onMounted(() => {
  // 初始化用户状态
  userStore.initializeState()
  
  // 如果用户未登录且当前路由需要认证，重定向到登录页
  const currentRoute = router.currentRoute.value
  if (!userStore.checkLoggedIn && 
      currentRoute.matched.some(record => record.meta.requiresAuth)) {
    router.push('/login')
  }
  
  // 如果用户已登录且当前路由需要访客状态，重定向到首页
  if (userStore.checkLoggedIn && 
      currentRoute.matched.some(record => record.meta.requiresGuest)) {
    router.push('/')
  }
})
</script>

<template>
  <router-view />
  
  <!-- 只在开发模式下渲染 stagewise 工具栏，并使用专门的容器包装 -->
  <div class="stagewise-container">
    <StagewiseToolbar v-if="isDev" :config="stagwiseConfig" />
  </div>
</template>

<style>
/* 全局样式可以在这里定义 */

/* Stagewise 工具栏隔离样式 */
.stagewise-container {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  pointer-events: none; /* 让容器不干扰其他元素的点击 */
}
.stagewise-container > * {
  pointer-events: auto; /* 工具栏本身可以点击 */
}
</style>
