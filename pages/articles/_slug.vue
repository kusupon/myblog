<template>
  <main>
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
* {
  width: 95%;
  margin: 0 auto;
}

::v-deep h1 {
  border-bottom: 2px solid #000;
  margin-top: 20px;
}
</style>>