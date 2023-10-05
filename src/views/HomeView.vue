<!-- 首页 -->
<script setup lang="ts">
  import { ref , defineComponent ,onMounted,onBeforeMount } from 'vue'
  import Menu from '@/components/menu.vue'
  import { getArticleTitle } from '@/api/list'
  import articleList from '@/components/articleList.vue'

  let paginationProps = ref({
    // 每页显示的数据条数
    pageSize: 7,
    // 当前页码
    currentPage: 1,
    // 数据总条数
    total: 0,
  })

  interface currentPageData {  
    tid: number,
    title: string,
    digest: string,
    date: number,
  }  
  let currentPageData = ref<currentPageData[]>([])  
  const handlePagination = function (val:any) {
    let start = (val - 1) * paginationProps.value.pageSize
    let end = val * paginationProps.value.pageSize
    currentPageData.value = articles.value.slice(start, end)
    // console.log('currentPageData is')
    // console.log(currentPageData)
    // paginationProps.value.total = Math.ceil(articles.value.length+1/7)  //向上取整
    paginationProps.value.total = articles.value.length
    console.log(paginationProps.value.total)
  }
  
  interface Article {  
    tid: number,
    title: string,
    digest: string,
    date: number,
  }   
  let articles = ref<Article[]>([])  
  // let articles = ref([])  
  const getArticleData = () => {
    getArticleTitle().then(res => {
      articles.value = res.data.data
      // console.log('articles is')
      console.log(articles)
      handlePagination(1)
    })
  }
  onBeforeMount(async () => {
    getArticleData()  //挂载完组件后执行异步获取数据
  })
</script>

<template>

  <div class="background">
    <Menu></Menu>
    <div class="front">
      <articleList v-for="article in currentPageData" :key="article.tid" :article="article" />
    </div>
    <div class="middle">
      <div class="header">
        <div class="header-img">
          <img alt="" src="../image/hiiro.jpg" />
          <h2>Love Live Sunshine 爱生活,艳阳天！</h2>
        </div>
        <div class="name">
          <h1>ALeo he Nya~</h1>
        </div>
      </div>
        <!-- 发表的文章 -->
        <div class="articleList">
          <articleList v-for="article in currentPageData" :key="article.tid" :article="article" />
      </div>
      <div class="tail-pagination">
        <!-- 分页 -->
        <div class="blogs-show-pagination">
          <el-pagination
            class="pagination"
            :page-size="7"
            @size-change="handlePagination"  
            @current-change="handlePagination"
            v-model:current-page="paginationProps.currentPage"
            layout="prev, pager, next"
            :total= paginationProps.total >
          </el-pagination>
          <!-- /**@size-change页码大小，current-change当前页变动时候触发的事件*/ -->
        </div>
      </div>
      <div class="tail">
        <div>
          <p>
            <a href="https://ixk.me">Home</a> · 
            <a href="https://github.com/ALeoNya">GitHub</a> · 
            <a href="https://status.ixk.me/">Status</a>
          </p>
          <p>© 2017-2023 ALeo He. All rights reserved</p>
          <p>This page designed and built with by <a href="https://ixk.me">ALeo He</a> in 2023</p>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

.background {
  width: 100%;
  height: auto;
  /* background-color: rgb(252, 160, 190); */
  background-attachment:fixed;
  background-image: url('../image/yasuo.jpg');
}
.middle {
  width: 50%;
  height: auto;
  margin-top: 0;
  margin-bottom: 0;
  /* margin-left: 15%;
  margin-right: 15%; */
  margin-left: 25%;
  margin-right: 25%;
  background-color: #f3f6f7;
}
.header {
  height: 250px;
  background-color: white;
}
.tail-pagination {
  height: 40px;
  background-color: white;
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
.blogs-show-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
p {
  font-size: 12px;
}
.header-img {
  height: 65%;
  background-color: transparent;
  display: flex;
}
img {
  margin-left: 7%;
  /* width: 6.25rem;
  height: 6.25rem; */
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  transition: filter 0.3s ease 0s;
}
h1 {
  font-weight: 400;
  font-family: "Comic Sans MS", "Comic Sans", cursive !important;
}
.name {
  padding: 0;
  margin-left: 5%;
  height: 40%;
  background-color: transparent;
}

h2 {
  font-weight: 400;
  font-family: "Comic Sans MS", "Comic Sans", cursive !important;
  color: rgb(134, 142, 150);
  margin: 120px;
}

.front {
  background-color: white;
  height: 100%;
  width: 100%;
}
</style>