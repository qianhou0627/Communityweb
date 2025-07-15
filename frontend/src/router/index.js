import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useUserStore } from '../stores/userStore'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    meta: { requiresAuth: true }, // 添加认证要求
    children: [
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('../views/Blog.vue')
      },
      {
        path: '/blog/:id',
        name: 'BlogRead',
        component: () => import('../views/BlogRead.vue')
      },
      {
        path: '',
        redirect: '/blog'
      }
    ]
  },
  // 添加登录页面路由，不使用默认布局
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { requiresGuest: true }
  },
  // 注册页面路由
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: { requiresGuest: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 创建一个全局变量来存储pinia实例，将在main.js中设置
let pinia = null

export function setPinia(piniaInstance) {
  pinia = piniaInstance
}

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 确保pinia已经初始化
  if (!pinia) {
    // 如果pinia还没有初始化，允许导航继续
    next()
    return
  }
  
  const userStore = useUserStore(pinia)
  const isLoggedIn = userStore.checkLoggedIn
  
  // 如果路由需要登录且用户未登录，重定向到登录页
  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next({ name: 'Login' })
  } 
  // 如果路由需要访客状态（如登录和注册页）且用户已登录，重定向到首页
  else if (to.matched.some(record => record.meta.requiresGuest) && isLoggedIn) {
    next({ path: '/' })
  } 
  // 其他情况正常导航
  else {
    next()
  }
})

export default router