<!-- 文章展示页 -->
<script setup lang="ts">
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
    <!-- 发表的文章 -->
    <div class="header"></div>
    <div class="preview">
      <v-md-preview :text="content"></v-md-preview>
    </div>
    <div class="tail">
        <div>
          <p>
            <a href="https://ixk.me">Home</a> · 
            <a href="https://github.com/syfxlin">GitHub</a> · 
            <a href="https://status.ixk.me/">Status</a>
          </p>
          <p>© 2017-2023 Otstar Lin. All rights reserved</p>
          <p>This page designed and built with by <a href="https://ixk.me">Otstar Lin</a> in 2022</p>
        </div>
    </div>
  </div>
</div>
  
</template>

<style scoped>
.background {
  display: flex;
  width: 100%;
  min-height: 100%; 
  max-height: auto;

  background-attachment:fixed;
  background-image: url('../image/yasuo.jpg');
}
.middle {
  width: 70%;
  min-height: 100%;
  max-height: auto;

  margin-top: 0;
  margin-bottom: 0;
  margin-left: 25%;
  margin-right: 25%;
  background-color: #f3f6f7;
}
.header {
  height: 250px;
  background-color: #f3f6f7;
}
.tail {
  height: 108px;
  background-color: white;

  position: relative;
  margin: 0px auto;
  margin-bottom: 20px;
  padding: 1.25rem 2rem;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
}
.preview {
  min-height: 550px;
  max-height: auto;
  width: 100%;
}
p {
  font-size: 12px;
}
</style>