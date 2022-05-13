<template>
  <div>
      <Home/>
      <About id="about"/>
      <Skills id="skills"/>
      <Portfolio id="portfolio"/>
      <Contact id="contact"/>
  </div>
</template>

<script>
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default {
  name: "Home-Page",
  components: {
    Home,
    About,
    Skills,
    Portfolio,
    Contact,
  },
}
</script>

<style scoped>

</style>