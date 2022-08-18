<template>
  <Header/>
  <main class="container">
    <SocialLinks/>
  </main>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";

export default {
  name: 'App',
  components: {
    Header, Footer, SocialLinks
  }
}
</script>

<style lang="scss">
@import './assets/styles/index.scss';
@import '~bootstrap/scss/bootstrap.scss';
</style>
