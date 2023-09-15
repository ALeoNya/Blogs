<!-- 文章展示页 -->
<script setup lang="ts">
import article from '@/components/show_article.vue';
import { getContent } from '@/api/list'

import { useRoute } from 'vue-router'
import { ref,onMounted,onBeforeMount } from 'vue'
const route = useRoute()
const content = ref()
const getArticleData = () => {
  getContent(Number(route.query.tid)).then(res=>{
    content.value = res.data.data.content
    console.log(res.data.data.content)
  })
}
onBeforeMount(()=>{
  
  console.log("cid is ")
  console.log(route.query.tid)
  getArticleData()
})
</script>

<template>

  <div class="background">
    <Menu></Menu>
    <div class="middle">
      <div class="header"></div>
        <!-- 发表的文章 -->
      <div class="articleList">
        <!-- <article></article> -->
        <div class="preview">
          <v-md-preview :text="content"></v-md-preview>
        </div>

      </div>
      <div class="tail"></div>
    </div>
  </div>
</template>

<style scoped>
.background {
  width: 100%;
  height: auto;
  background-color: rgb(252, 160, 190);
}
.middle {
  width: 70%;
  /* width: 960px; */
  height: auto;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 15%;
  margin-right: 15%;
  background-color: #f3f6f7;
}
.header {
  height: 150px;
  background-color: white;
}
.tail-pagination {
  height: 40px;
  background-color: white;
}
.tail {
  height: 160px;
  background-color: white;
}
.blogs-show-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.preview {
  height: 100%;
  width: 100%;
}
</style>