<template>
  <header>
      <div class="title"><nuxt-link to="/">kusuponblog</nuxt-link></div>
      <nav>
          <nuxt-link to="/">Home</nuxt-link>
      </nav>
  </header>
</template>

<style>
header {
    padding: 15px 30px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #000;
}
header .title {
    color: black;
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
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
    color: #000;
    text-decoration: none;
}

a {
    text-decoration: none;
    color: #000;
}
</style>