<template>
  <div>
    <Header />
    <div class="wrapper">
      <Nuxt />
      <Aside />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";

export default {
  components: {
    Header,
    Aside,
  },
};
</script>
