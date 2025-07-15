<template>
  <div class="mcontainer">
    <div class="lg:flex lg:space-x-12">
      <div class="lg:w-3/4">
        <div class="flex justify-between items-center relative md:mb-4 mb-3">
          <div class="flex-1">
            <h2 class="text-2xl font-semibold">苦逼日常的急救中心</h2>
            <nav class="responsive-nav md:m-0 -mx-4 style-2">
              <ul>
                <li :class="{ 'active': activeTab === 'suggestions' }">
                  <a href="#" class="lg:px-2" @click.prevent="activeTab = 'suggestions'">大家的</a>
                </li>
                <li :class="{ 'active': activeTab === 'mine' }">
                  <a href="#" class="lg:px-2" @click.prevent="activeTab = 'mine'">自己的</a>
                </li>
                <li :class="{ 'active': activeTab === 'liked' }">
                  <a href="#" class="lg:px-2" @click.prevent="activeTab = 'liked'">点赞的</a>
                </li>
                <li :class="{ 'active': activeTab === 'favorited' }">
                  <a href="#" class="lg:px-2" @click.prevent="activeTab = 'favorited'">收藏的</a>
                </li>
              </ul>
            </nav>
          </div>
          <button class="absolute right-0">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>俺也要问</span>
          </button>
        </div>

        <div class="card divide-y divide-gray-100 px-4">
          <BlogCard v-for="blog in blogs" :key="blog.id" :article="blog" />
        </div>
      </div>
      
      <div class="lg:w-1/4 w-full flex-shrink-0">
        <div class="uk-sticky">
          <h2 class="text-lg font-semibold mb-3">Recently Posted</h2>
          <ul>
            <li v-for="post in recentPosts" :key="post.id">
              <a href="#" class="hover:bg-gray-100 rounded-md p-2 -mx-2 block">
                <h3 class="font-medium line-clamp-2">{{ post.title }}</h3>
                <div class="flex items-center my-auto text-xs space-x-1.5">
                  <div>{{ post.date }}</div>
                  <div class="pb-1">.</div>
                  <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                  <div>{{ post.comments }}</div>
                </div>
              </a>
            </li>
          </ul>
          <br>

          <h4 class="text-lg font-semibold mb-3">Tags</h4>
          <div class="flex flex-wrap gap-2">
            <a v-for="(tag, index) in tags" :key="index" href="#" class="bg-gray-100 py-1.5 px-4 rounded-full">
              {{ tag }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BlogCard from '../components/BlogCard.vue'
import { blogs, recentPosts, tags } from '../mocks/blogs'

const activeTab = ref('suggestions')
</script>

<style scoped>
  button {
    font-family: inherit;
    font-size: 20px;
    background: royalblue;
    color: white;
    padding: 0.5em 0.8em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
    position: relative;
  }

  button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }

  button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
    pointer-events: none;
  }
  
  .svg-wrapper-1, .svg-wrapper {
    pointer-events: none;
  }

  button:hover {
    background: royalblue;
  }
  
  button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  button:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  button:hover span {
    transform: translateX(5em);
  }

  button:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }
</style>