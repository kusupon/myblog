<template>
  <div class="cards">
    <div class="card" v-for="article in articles" :key="article.slug">
      <nuxt-link :to="`/articles/${article.slug}`" class="link">
        {{ article.title }}
        <p>{{ article.updatedAt }}</p>
      </nuxt-link>
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

import '/'
</script>

<style lang="scss">
@import '/assets/scss/main.scss';
* {
  font-family: sans-serif;
  box-sizing: border-box;
}

.link {
  display: block;
  padding: 30px 40px;
}

.wrapper {
  display: flex;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  @include mobile {
    display: block;
  }
}
body {
  background-color: #fafafa;
}

.cards {
  display: block;
  width: 70%;
  @include mobile {
    margin: 0 auto;
    width: 100%;
  }
}

.card {
  display: block;
  margin: 30px 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 20%);
  background-color: #fff;
  clear: left;
  a {
    font-weight: bold;
    font-size: 30px;
  }
  p {
    font-size: 8px;
  }
}

a {
    text-decoration: none;
    color: #000;
}
</style>