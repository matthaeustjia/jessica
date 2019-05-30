<template>
  <div>
    <img class="w-full cover" src="/img/gg.jpg" alt>
    <div class="flex flex-col justify-center content-center items-center">
      <div class="w-1/2 flex flex-wrap justify-center my-20">
        <div class="text-3xl font-semibold w-1/2">
          <h1>Invitation</h1>
          <h1>Design</h1>
        </div>
        <div class="text-gray-800">Invitation Examples bla bla bla</div>
      </div>
      <div class="flex flex-col md:flex-row w-full h-screen invite">
        <img class="xs:w-full md:w-1/2" src="/img/leoneinvite.png" alt>
        <img class="xs:w-full md:w-1/2" src="/img/winny.png" alt>
      </div>
    </div>

    <FloatingButton></FloatingButton>
  </div>
</template>

<script>
import FloatingButton from "@/components/FloatingButtonPrev";
export default {
  components: {
    FloatingButton
  }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  img {
    object-fit: cover;
    margin: auto;
  }
}
.invite {
  object-fit: scale-down;
}
.cover {
  height: 500px;
  object-fit: scale-down;
  background-color: rgb(19, 82, 187);
}
</style>