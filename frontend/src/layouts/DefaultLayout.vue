<template>
  <div id="wrapper">
    <!-- Header -->
    <header>
      <div class="header_wrap">
        <div class="header_inner mcontainer">
          <div class="left_side">
            <span class="slide_menu" @click="toggleSidebar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" fill="currentColor"></path>
              </svg>
            </span>
            <div id="logo">
              <a href="#"> 
                <img src="https://1008080.xyz/1/images/logo.png" alt="">
                <img src="https://1008080.xyz/1/images/logo-mobile.png" class="logo_mobile" alt="">
              </a>
            </div>
          </div>
          
          <!-- search icon for mobile -->
          <div class="header-search-icon" @click="showSearchBox = !showSearchBox"> </div>
          <div class="header_search">
            <i class="uil-search-alt"></i> 
            <input v-model="searchQuery" type="text" class="form-control" placeholder="Search for Friends , Videos and more.." autocomplete="off">
          </div>

          <div class="right_side">
            <div class="header_widgets">
              <a href="#" class="is_link">点击下载远程</a>   
              <a href="#" class="is_icon" title="Cart">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
              </a>
              <a href="#" class="is_icon" title="Notifications">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
                <span>3</span>
              </a>
              <a href="#" class="is_icon" title="Message">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>
                </svg>
                <span>4</span>
              </a>
              <div class="user-menu-dropdown">
                <a href="#" @click.prevent="(e) => toggleUserMenu(e)">
                  <img src="https://1008080.xyz/1/images/avatars/avatar-2.jpg" class="is_avatar" alt="">
                </a>
                <div class="user-menu" v-if="showUserMenu">
                  <div class="user-menu-content">
                    <div class="user-info">
                      <img src="https://1008080.xyz/1/images/avatars/avatar-2.jpg" class="user-avatar" alt="">
                      <div class="user-details">
                        <div class="user-name">Stella Johnson</div>
                        <div class="user-handle">@johnson</div>
                      </div>
                    </div>
                    <ul class="menu-items">
                      <li>
                        <a href="pages-upgrade.html" class="is-link">
                          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
                          Upgrade To Premium
                        </a>
                      </li>
                      <li><hr></li>
                      <li>
                        <a href="http://demo.foxthemes.net/socialitev2.2/page-setting.html">
                          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                          My Account
                        </a>
                      </li>
                      <li>
                        <a href="groups.html">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"  clip-rule="evenodd" />
                          </svg>
                          Manage Pages
                        </a>
                      </li>
                      <li>
                        <a href="pages-setting.html">
                          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>
                          My Billing
                        </a>
                      </li>
                      <li>
                        <a href="#" @click.prevent="handleLogout">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                          </svg>
                          退出登录
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- sidebar -->
    <div class="sidebar" :class="{ 'is-collapse': isSidebarCollapsed, 'is-active': isSidebarActive }">
      <div class="sidebar_inner" data-simplebar>
        <ul>
          <li class="active">
            <router-link to="/blog">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-pink-500">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              <span>Blog</span>
            </router-link> 
          </li>
          <li>
            <a href="#"> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-blue-600"> 
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span> Feed </span>
            </a> 
          </li>
          <li>
            <a href="#"> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-yellow-500">
                <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"></path>
              </svg> 
              <span> Pages </span>
            </a> 
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-red-500">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clip-rule="evenodd" />
              </svg>
              <span> Video</span>
            </a> 
          </li>
          <li>
            <a href="#"> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-blue-500">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span> Groups </span>
            </a> 
          </li>
          <li>
            <a href="#"> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-pink-500">
                <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <span> Jobs</span>
            </a> 
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-indigo-500">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <span> Course</span>
            </a> 
          </li>
          <li>
            <a href="#"> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-green-500">
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
              <span>Games</span>
            </a> 
          </li>

        </ul>

        <h3 class="side-title">联系人</h3>
        <div class="contact-list my-2 ml-1">
          <a href="#">
            <div class="contact-avatar">
              <img src="https://1008080.xyz/1/images/avatars/avatar-1.jpg" alt="">
              <span class="user_status status_online"></span>
            </div>
            <div class="contact-username">Dennis Han</div>
          </a>
          <a href="#">
            <div class="contact-avatar">
              <img src="https://1008080.xyz/1/images/avatars/avatar-2.jpg" alt="">
              <span class="user_status"></span>
            </div>
            <div class="contact-username">Erica Jones</div>
          </a>
          <a href="#">
            <div class="contact-avatar">
              <img src="https://1008080.xyz/1/images/avatars/avatar-7.jpg" alt="">
            </div>
            <div class="contact-username">Stella Johnson</div>
          </a>
          <a href="#">
            <div class="contact-avatar">
              <img src="https://1008080.xyz/1/images/avatars/avatar-4.jpg" alt="">
            </div>
            <div class="contact-username">Alex Dolgove</div>
          </a>
        </div>

        <div class="footer-links">
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Support</a>
          <a href="#">Contact Us</a>
          <a href="#">Developer</a>
          <a href="#">Terms of service</a>
        </div>
      </div>
    </div>

    <!-- sidebar overly for mobile -->
    <div class="side_overly" @click="toggleSidebar"></div>

    <!-- Main Contents -->
    <div class="main_content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const router = useRouter()
const userStore = useUserStore()

const searchQuery = ref('')
const showSearchBox = ref(false)
const isSidebarCollapsed = ref(false)
const isSidebarActive = ref(false)
const showUserMenu = ref(false)
const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
  isSidebarActive.value = !isSidebarActive.value
}

const toggleUserMenu = (e) => {
  e.stopPropagation()
  showUserMenu.value = !showUserMenu.value
}

const closeUserMenu = (e) => {
  // 检查点击的元素是否在用户菜单内
  if (!e.target.closest('.user-menu') && !e.target.closest('.user-menu-dropdown > a')) {
    showUserMenu.value = false
  }
}

// 退出登录处理函数
const handleLogout = () => {
  userStore.logout()
  showUserMenu.value = false
  router.push('/login')
}

onMounted(() => {
  document.addEventListener('click', closeUserMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeUserMenu)
})
</script>

<style scoped>
/* 用户菜单样式 */
.user-menu-dropdown {
  position: relative;
}

.user-menu {
  position: absolute;
  top: 45px;
  right: 0;
  width: 280px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
}

.user-info {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #f1f1f1;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 500;
  font-size: 16px;
}

.user-handle {
  color: #666;
  font-size: 14px;
}

.menu-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-items li a {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: #333;
  text-decoration: none;
  transition: background 0.2s;
}

.menu-items li a:hover {
  background: #f5f5f5;
}

.menu-items li svg {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: #666;
}

.menu-items li hr {
  margin: 5px 0;
  border: 0;
  border-top: 1px solid #f1f1f1;
}


</style>