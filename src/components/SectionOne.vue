<template>
  <div class="section">
    <div class="h-full w-full flex flex-col items-center">
      <div class="flex flex-col text-center">
        <h1 class="text-lg text-gray-600 uppercase tracking-widest">Hi I'm jessica</h1>
        <h1 class="text-6xl text-gray-800 tracking-tighter">Graphics Designer</h1>
        <h1 class="text-6xl text-gray-800 tracking-tighter">& Animator</h1>
      </div>
      <div>
        <p class="text-xs text-gray-500">Scroll down to view my work</p>
        <p class="text-center text-xs text-gray-500">
          <a class href="#leonesocmed">
            <i class="scrolldown-animate fas fa-angle-down"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
@keyframes scrolldown {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: 10px;
  }
}

.scrolldown-animate {
  animation: scrolldown 1s infinite alternate;
}

@media only screen and (max-width: 600px) {
  .section {
    background: url("/img/hero.png") no-repeat right fixed;
  }
}

.section {
  background-image: url("/img/hero.png");
  background-repeat: no-repeat;
  background-position: right;
}
</style>