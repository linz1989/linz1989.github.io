<template>
<div class="page">
  <ul class="article-list">
    <router-link tag="li" v-for="article in list" :to="{ name : article.routerName }">
      <h3>{{ article.title }}</h3>
      <div>{{ article.description }}</div>
      <div>【{{ article.type }}】{{ article.date }}</div>
    </router-link>
  </ul>
</div>
</template>
<script>
  import articleList from '../data/list'
  module.exports = {
    data: function () {
      return {
        list: articleList.list.reverse()
      }
    }
  }
</script>
