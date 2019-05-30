<template>
  <div data-aos="fade-left" data-aos-easing="linear">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import SectionOne from "@/components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
export default {
  name: "home",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour
  },
  beforeMount() {},
  data() {
    return {
      options: {
        menu: "#menu",
        navigation: true,
        navigationPosition: "right",
        scrollingSpeed: 1000,
        animateAnchor: false,
        anchors: ["Home", "leonesocmed", "invitation", "logo"]
      }
    };
  }
};
</script>

<style>
body {
}
</style>