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
@import '/assets/scss/main.scss';
main .content {
  margin-top: 50px;
}

* {
  width: 70%;
  @include mobile {
    width: 90%;
    margin: 0 auto;
  }
}



::v-deep h1 {
  margin-top: 20px;
}
</style>>