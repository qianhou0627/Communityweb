<template>
  <div class="flex flex-col justify-between h-screen bg-gray-100">
    <!-- header -->
    <div class="bg-white py-4 shadow dark:bg-gray-800">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center lg:justify-between justify-around">
          <router-link to="/">
            <img src="https://1008080.xyz/1/images/logo.png" alt="Socialite" class="w-32">
          </router-link>

          <div class="capitalize flex font-semibold hidden lg:block my-2 space-x-3 text-center text-sm">
            <router-link to="/login" class="py-3 px-4">登录</router-link>
            <router-link to="/register" class="bg-purple-500 purple-500 px-6 py-3 rounded-md shadow text-white">注册</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div>
      <div class="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6">
        <form @submit.prevent="handleLogin" class="lg:p-10 p-6 space-y-3 relative bg-white shadow-xl rounded-md">
          <h1 class="lg:text-2xl text-xl font-semibold mb-6">登录</h1>

          <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {{ errorMessage }}
          </div>

          <div>
            <label class="mb-0">手机号</label>
            <input 
              type="tel" 
              v-model="phone" 
              placeholder="请输入手机号" 
              class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
          </div>
          <div>
            <label class="mb-0">密码</label>
            <div class="relative">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                v-model="password" 
                placeholder="******" 
                class="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
              <button 
                type="button" 
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                @click="togglePasswordVisibility"
              >
                <svg v-if="!showPassword" class="icon h-5 w-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4484">
                  <path d="M422.4 776.533333l76.8-76.8h8.533333c145.066667 0 251.733333-55.466667 332.8-170.666666-25.6-34.133333-55.466667-64-85.333333-89.6L819.2 384c46.933333 38.4 85.333333 89.6 119.466667 145.066667-98.133333 170.666667-243.2 251.733333-426.666667 251.733333-29.866667 4.266667-59.733333 0-89.6-4.266667z m-238.933333-119.466666c-34.133333-34.133333-68.266667-76.8-98.133334-128 98.133333-170.666667 243.2-251.733333 426.666667-251.733334h46.933333l-85.333333 85.333334c-128 8.533333-226.133333 64-298.666667 166.4 17.066667 25.6 38.4 51.2 59.733334 68.266666l-51.2 59.733334zM755.2 213.333333l59.733333 59.733334L277.333333 810.666667l-59.733333-59.733334L755.2 213.333333z" fill="#444444" p-id="4485"></path>
                </svg>
                <svg v-else class="icon h-5 w-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4646">
                  <path d="M512 768c-183.466667 0-328.533333-85.333333-426.666667-256 98.133333-170.666667 243.2-256 426.666667-256s328.533333 85.333333 426.666667 256c-98.133333 170.666667-243.2 256-426.666667 256z m8.533333-426.666667c-128 0-256 55.466667-328.533333 170.666667 72.533333 115.2 200.533333 170.666667 328.533333 170.666667s238.933333-55.466667 311.466667-170.666667c-72.533333-115.2-183.466667-170.666667-311.466667-170.666667z m-8.533333 298.666667c-72.533333 0-128-55.466667-128-128s55.466667-128 128-128 128 55.466667 128 128-55.466667 128-128 128z m0-85.333333c25.6 0 42.666667-17.066667 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666667-42.666667 17.066667-42.666667 42.666667 17.066667 42.666667 42.666667 42.666667z" fill="#444444" p-id="4647"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input type="checkbox" id="remember" v-model="rememberMe" class="h-4 w-4 mt-0.5">
              <label for="remember" class="text-sm ml-2 flex items-center mb-0">记住密码</label>
            </div>
            <a href="#" class="text-blue-600 text-sm">忘记密码?</a>
          </div>

          <div>
            <button 
              type="submit" 
              class="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full hover:bg-blue-700 transition"
              :disabled="isLoading"
              :class="{'opacity-50 cursor-not-allowed': isLoading}"
            >
              {{ isLoading ? '登录中...' : '开始使用' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <div class="lg:mb-5 py-3 uk-link-reset">
      <div class="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
        <div class="flex space-x-2 text-gray-700 uppercase">
          <a href="#">关于</a>
          <a href="#">帮助</a>
          <a href="#">条款</a>
          <a href="#">隐私</a>
        </div>
        <p class="capitalize">© copyright 2023 by Socialite</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

// 响应式状态
const phone = ref('')
const password = ref('')
const rememberMe = ref(false)
const errorMessage = ref('')
const isLoading = ref(false)
const showPassword = ref(false)
const router = useRouter()
const userStore = useUserStore()

// 切换密码可见性
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

// 登录处理函数
const handleLogin = async () => {
  try {
    isLoading.value = true
    errorMessage.value = ''
    
    // 这里将来会添加实际的登录API调用
    // 目前模拟登录过程
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // 模拟登录成功
    const userData = {
      id: 1,
      phone: phone.value,
      name: '示例用户',
      avatar: '/assets/images/avatars/avatar-1.jpg'
    }
    
    // 模拟获取到的token
    const token = 'sample-jwt-token'
    
    // 更新用户状态
    userStore.login(userData, token)
    
    // 登录成功后跳转到首页
    router.push('/')
  } catch (error) {
    // 处理登录错误
    console.error('登录失败:', error)
    errorMessage.value = '登录失败，请检查您的手机号和密码'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* 可以添加组件特定的样式 */
input:focus {
  border-color: transparent;
}
</style> 