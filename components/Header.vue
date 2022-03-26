<template>
  <header>
    <div class="title"><nuxt-link to="/">kusuponblog</nuxt-link></div>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
    margin-top: 0;
  padding: 30px 30px;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #000;
  .title {
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
}
nav {
  display: flex;
  align-items: center;
  margin: 0 -15px;
}
nav a {
  font-weight: bold;
  display: block;
  margin: 0 15px;
  color: #fff;
  text-decoration: none;
}
</style>