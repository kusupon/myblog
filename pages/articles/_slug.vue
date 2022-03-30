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
  width: 100%;
  @include mobile {
    margin: 0 auto;
  }
}

main {
  width: 70%;
  @include mobile {
    width: 90%;
  }
}


p,h1,h2,h3,h4,h5,a,li {
  margin-top: 10px;
}


::v-deep h1 {
  background-color: rgb(207, 213, 213);
  padding: 10px 5px;
  margin-top: 20px;
  border-radius: 8px;
}

::v-deep h2 {
  border-bottom: 1px solid #000;
}
</style>>