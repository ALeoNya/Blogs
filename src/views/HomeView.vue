<!-- 首页 -->
<script setup lang="ts">
  import { ref , defineComponent ,onMounted } from 'vue'
  import Menu from '@/components/menu.vue'
  import { getArticleTitle } from '@/api/list'
  import articleList from '@/components/articleList.vue'
import { ar } from 'element-plus/es/locale/index.mjs';

  let paginationProps = ref({
    // 每页显示的数据条数
    pageSize: 7,
    // 当前页码
    currentPage: 1,
    // 数据总条数
    total: 0,
  })

  let data = ref([
    {
      tid: '',
      title: '',
      digest: '',
      date: '',
    }
  ])
  interface currentPageData {  
    tid: string,
    title: String,
    digest: String,
    date: String,
  }  
  let currentPageData = ref<currentPageData[]>([])  
  const handlePagination = function (val:any) {
    let start = (val - 1) * paginationProps.value.pageSize
    let end = val * paginationProps.value.pageSize
    currentPageData.value = articles.value.slice(start, end)
    // console.log('currentPageData is')
    // console.log(currentPageData)
    paginationProps.value.total = articles.value.length+1/7
    // console.log(paginationProps.value.total)
  }
  
  interface Article {  
    tid: string,
    title: String,
    digest: String,
    date: String,
  }   
  let articles = ref<Article[]>([])  
  const getArticleData = () => {
    getArticleTitle().then(res => {
      articles.value = res.data.data
      // console.log('articles is')
      // console.log(articles)
      handlePagination(1)
    })
  }
  onMounted(async () => {
    getArticleData()  //挂载完组件后执行异步获取数据
  })
</script>

<template>

  <div class="background">
    <Menu></Menu>
    <div class="middle">
      <div class="header"></div>
        <!-- 发表的文章 -->
        <div class="articleList">
          <articleList v-for="article in currentPageData" :key="article.tid" :article="article" />
      </div>
      <div class="tail-pagination">
        <!-- 分页 -->
        <div class="blogs-show-pagination">
          <el-pagination
            class="pagination"
            @size-change="handlePagination"  
            @current-change="handlePagination"
            v-model:current-page="paginationProps.currentPage"
            layout="prev, pager, next"
            :total= paginationProps.total >
          </el-pagination>
          <!-- /**@size-change页码大小，current-change当前页变动时候触发的事件*/ -->
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
  height: auto;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 15%;
  margin-right: 15%;
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
  height: 160px;
  background-color: white;
}
.blogs-show-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>