<template>
  <div class="lg:flex lg:space-x-6 py-5">
    <router-link :to="`/blog/${article.id}`">
      <div class="lg:w-60 w-full h-40 overflow-hidden rounded-lg relative shadow-sm"> 
        <img :src="article.image" alt="" class="w-full h-full absolute inset-0 object-cover">
        <div :class="tagClass">
          {{ article.tag }}
        </div>
      </div>
    </router-link>
    <div class="flex-1 lg:pt-0 pt-4"> 
      <router-link :to="`/blog/${article.id}`" class="text-xl font-semibold line-clamp-2">{{ article.title }}</router-link>
      <p class="line-clamp-2 pt-3">{{ article.summary }}</p>
      
      <div class="flex items-center pt-3">
        <div class="flex items-center">
          <ion-icon name="thumbs-up-outline" class="text-xl mr-2"></ion-icon>
          {{ article.likes }}
        </div>
        <div class="flex items-center mx-4"> 
          <ion-icon name="chatbubble-ellipses-outline" class="text-xl mr-2"></ion-icon>
          {{ article.comments }}
          <div class="-space-x-2 flex items-center ml-1">
            <img v-for="(avatar, index) in article.commenters" :key="index" :alt="'User avatar'" :src="avatar" class="border-2 border-white rounded-full w-7">
            <div v-if="article.moreCommenters" class="w-7 h-7 rounded-full flex justify-center items-center bg-red-100 text-red-500 font-semibold text-xs">
              {{ article.moreCommenters }}+
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <ion-icon name="bookmark-outline" class="text-xl mr-2"></ion-icon>
          {{ article.bookmarks }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const tagClass = computed(() => {
  const baseClass = 'absolute font-semibold px-2.5 py-1 rounded-full text-xs top-2.5 left-2.5 '
  
  switch(props.article.tag) {
    case 'JavaScript':
      return baseClass + 'bg-blue-100 text-blue-500'
    case 'Experiments':
      return baseClass + 'bg-yellow-100 text-yellow-500'
    case 'Tools':
      return baseClass + 'bg-purple-100 text-purple-500'
    default:
      return baseClass + 'bg-gray-100 text-gray-500'
  }
})
</script>