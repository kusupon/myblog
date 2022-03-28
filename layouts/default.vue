<template>
  <div>
  <Header />
  <div class="wrapper">
  <SideBar />
  <Nuxt />
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    Header,
    SideBar
  }
}
</script>
