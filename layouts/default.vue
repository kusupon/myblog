<template>
  <div>
  <Header />
  <SideBar />
  <Nuxt />
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
