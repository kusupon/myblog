<template>
  <main class="content">
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>

<style lang="scss" scoped>

main .content {
  margin-top: 50px;
}

* {
  width: 75%;
  margin-left: 5%;
}

::v-deep h1 {
  border-bottom: 2px solid #000;
  margin-top: 20px;
}
</style>>