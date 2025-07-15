<template>
  <div class="mcontainer">
    <div class="lg:flex lg:space-x-10">
          
      <div class="lg:w-3/4 space-y-5"> 
        
        <div class="card" v-if="article.title">
          <div class="h-44 mb-4 md:h-72 overflow-hidden relative rounded-t-lg w-full">
            <img :src="article.image" alt="" class="w-full h-full absolute inset-0 object-cover">
          </div>
          <div class="p-7">
            <h1 class="lg:text-3xl text-2xl font-semibold mb-6">{{ article.title }}</h1>

            <div class="flex items-center space-x-3 my-4 pb-4 border-b border-gray-100">
              <img src="/src/assets/images/avatars/avatar-2.jpg" alt="" class="w-10 rounded-full">
              <div>
                <div class="text-base font-semibold">{{ article.author?.name || 'Stella Johnson' }}</div>
                <div class="text-xs">Published on {{ article.date || 'Oct 22, 2023' }}</div>
              </div>
            </div>

            <div class="space-y-3">
              <p v-for="(paragraph, index) in article.content" :key="index">{{ paragraph }}</p>
            </div>
          </div>
        </div>

        <div class="card p-6">
          <h1 class="block text-lg font-semibold mb-4">Comments ({{ comments.length }})</h1>

          <div class="space-y-5">
            <div v-for="comment in comments" :key="comment.id" class="flex gap-x-4 relative rounded-md">
              <a href="#" class="bg-gray-100 py-1.5 px-4 rounded-full absolute right-5 top-0">Reply</a>
              <img :src="comment.avatar" alt="" class="rounded-full shadow w-12 h-12">
              <div>
                <h4 class="text-base m-0 font-semibold">{{ comment.author }}</h4>
                <span class="text-gray-700 text-sm">{{ comment.date }}</span>
                <p class="mt-3 md:ml-0 -ml-16">{{ comment.content }}</p>
              </div>
            </div>
          </div>

          <div class="flex justify-center mt-9">
            <a href="#" class="bg-gray-50 border hover:bg-gray-100 px-4 py-1.5 rounded-full text-sm">More Comments ..</a>
          </div>
        </div>
        
        <!-- related articles -->
        <div class="card p-6 relative">
          <h1 class="block text-lg font-semibold mb-4">Related Articles</h1>

          <div class="relative" uk-slider="finite: true">
            <div class="uk-slider-container px-1 py-3">
              <ul class="uk-slider-items uk-child-width-1-3@s uk-child-width-1-2 uk-grid-small uk-grid">
                <li v-for="relatedArticle in relatedArticles" :key="relatedArticle.id">
                  <div>
                    <router-link :to="`/blog/${relatedArticle.id}`" class="w-full md:h-32 h-28 overflow-hidden rounded-lg relative block">
                      <img :src="relatedArticle.image" alt="" class="w-full h-full absolute inset-0 object-cover">
                    </router-link>
                    <div class="pt-3">
                      <router-link :to="`/blog/${relatedArticle.id}`" class="font-semibold line-clamp-2">{{ relatedArticle.title }}</router-link>
                      <div class="flex space-x-2 items-center text-sm pt-2">
                        <div>{{ relatedArticle.date || 'Feb 4, 2023' }}</div>
                        <div class="md:block hidden">·</div>
                        <div class="flex items-center">
                          <ion-icon name="chatbox-ellipses-outline" class="text-base leading-0 mr-2"></ion-icon>
                          {{ relatedArticle.comments }}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <a class="absolute bg-white top-16 flex items-center justify-center p-2 -left-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="previous">
                <ion-icon name="chevron-back-outline"></ion-icon>
              </a>
              <a class="absolute bg-white top-16 flex items-center justify-center p-2 -right-4 rounded-full shadow-md text-xl w-9 z-10 dark:bg-gray-800 dark:text-white" href="#" uk-slider-item="next">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/4 w-full">
        <div uk-sticky="offset:100" class="uk-sticky">
          <h2 class="text-lg font-semibold mb-3">Recently Posted</h2>
          <ul>
            <li v-for="post in recentPosts" :key="post.id">
              <router-link :to="`/blog/${post.id}`" class="hover:bg-gray-100 rounded-md p-2 -mx-2 block">
                <h3 class="font-medium line-clamp-2">{{ post.title }}</h3>
                <div class="flex items-center my-auto text-xs space-x-1.5">
                  <div>{{ post.date }}</div>
                  <div class="pb-1">.</div>
                  <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                  <div>{{ post.comments }}</div>
                </div>
              </router-link>
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
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { blogs, recentPosts, tags } from '../mocks/blogs'

const route = useRoute()
const articleId = ref(parseInt(route.params.id))
const article = ref({})
const relatedArticles = ref([])
const comments = ref([
  {
    id: 1,
    author: 'Stella Johnson',
    avatar: '/src/assets/images/avatars/avatar-4.jpg',
    date: '10th, April 2023',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    author: 'Alex Dolgove',
    avatar: '/src/assets/images/avatars/avatar-3.jpg',
    date: '14th, April 2023',
    content: 'elit, sed diam ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet dolore'
  },
  {
    id: 3,
    author: 'Stella Johnson',
    avatar: '/src/assets/images/avatars/avatar-1.jpg',
    date: '13th, May 2023',
    content: 'elit, sed diam ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet dolore'
  }
])

const loadArticle = () => {
  // 获取当前文章
  const currentArticle = blogs.find(blog => blog.id === articleId.value)
  if (currentArticle) {
    article.value = {
      ...currentArticle,
      author: {
        name: 'Stella Johnson',
        avatar: '/src/assets/images/avatars/avatar-2.jpg'
      },
      content: [
        '详情描述',
      ]
    }
    
    // 获取相关文章（除了当前文章外的其他文章）
    relatedArticles.value = blogs.filter(blog => blog.id !== articleId.value).slice(0, 4)
  } else {
    console.error('Article not found:', articleId.value)
  }
}

onMounted(() => {
  loadArticle()
})

// 监听路由参数变化，重新加载文章
watch(() => route.params.id, (newId) => {
  articleId.value = parseInt(newId)
  loadArticle()
})
</script> 