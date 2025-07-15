import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isLoggedIn: false,
    token: null
  }),
  
  getters: {
    // 获取用户信息
    getUser: (state) => state.user,
    // 检查用户是否已登录
    checkLoggedIn: (state) => state.isLoggedIn,
    // 获取用户头像
    getUserAvatar: (state) => state.user?.avatar || '/assets/images/avatars/placeholder.png'
  },
  
  actions: {
    // 登录操作
    login(userData, token) {
      this.user = userData
      this.isLoggedIn = true
      this.token = token
      
      // 将登录信息保存到本地存储
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('token', token)
    },
    
    // 注册操作
    register(userData, token) {
      // 注册后自动登录
      this.login(userData, token)
    },
    
    // 注销操作
    logout() {
      this.user = null
      this.isLoggedIn = false
      this.token = null
      
      // 清除本地存储的登录信息
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    },
    
    // 初始化状态（从本地存储恢复登录状态）
    initializeState() {
      const storedUser = localStorage.getItem('user')
      const storedToken = localStorage.getItem('token')
      
      if (storedUser && storedToken) {
        this.user = JSON.parse(storedUser)
        this.token = storedToken
        this.isLoggedIn = true
      }
    }
  }
}) 