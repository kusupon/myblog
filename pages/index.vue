<template>
  <div class="cards">
    <div class="card" v-for="article in articles" :key="article.slug">
      <nuxt-link :to="`/articles/${article.slug}`">
        {{ article.title }}
      </nuxt-link>
      <p>{{ article.updatedAt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles').fetch()
    return { articles }
  }
}
</script>

<style lang="scss" scoped>
@import '/assets/scss/main.scss';
* {
  box-sizing: border-box;
}
body {
  background-color: #fafafa;
}

.cards {
  display: flex;
}

.card {
  margin: 30px 30px;
  width: 25%;
  padding: 40px 0;
  text-align: center;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 20%);
  background-color: #fff;
  clear: left;
  @include mobile {
    width: 100%;
  }
  a {
    font-weight: bold;
    font-size: 30px;
  }
  p {
    font-size: 8px;
  }
}
</style>