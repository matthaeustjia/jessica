<template>
  <div id="app">
    <FloatingButton v-if="showFloat"></FloatingButton>
    <router-view/>
  </div>
</template>

<script>
import FloatingButton from "@/components/FloatingButton";
export default {
  computed: {
    showFloat() {
      if (this.$route.hash == "#Home" || !this.$route.hash) {
        return false;
      } else {
        return true;
      }
    }
  },
  components: {
    FloatingButton
  }
};
</script>
<style>
body {
  font-family: "Montserrat", sans-serif;
}
</style>

