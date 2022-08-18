<template>
  <Header/>
  <main class="container">
    <SocialLinks/>
    <Introduction/>
  </main>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import Introduction from "@/components/Introduction";

export default {
  name: 'App',
  components: {
    Header, Footer, SocialLinks, Introduction
  }
}
</script>

<style lang="scss">
@import './assets/styles/index.scss';
@import '~bootstrap/scss/bootstrap.scss';
</style>
