<template>
  <div>
    <div @click="showPage" class="float">
      <i class="fas fa-chevron-right my-float"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showPage() {
      let routerLink = this.$route.hash;
      while (routerLink.charAt(0) === "#") {
        routerLink = routerLink.substr(1);
      }
      this.$router.push("/works/" + routerLink);
    }
  }
};
</script>

<style scoped>
@keyframes shadow-pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.35);
  }
  100% {
    box-shadow: 0 0 0 25px rgba(0, 0, 0, 0);
  }
}
.float:hover {
  cursor: pointer;
}
.float {
  animation: shadow-pulse 1.5s infinite;

  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: white;
  color: black;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
}

.my-float {
  margin-top: 22px;
}
</style>