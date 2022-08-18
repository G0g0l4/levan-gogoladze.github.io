<template>
  <section id="introduction" class="page">
    <p>Hola, I'm</p>
    <h1>Levan Gogoladze.</h1>
    <p class="description">
      I am software developer, engineer, programmer, it whatever do u want, main thing is that i know hot communicate
      with computer
    </p>
    <Button text="Hire Me"></Button>
  </section>
</template>
<script>
import Button from "@/components/button";

export default {
  name: "Introduction",
  components: {
    Button
  }
}
</script>
<style scoped lang="scss">
#introduction {
  p {
    margin: 0 0 10px;
    font-family: "montserrat-regular";
    color: red;
  }

  h1 {
    font-size: 80px;
    font-family: "montserrat-bold";
    color: blue;
    margin-bottom: 15px;
  }

  .description {
    font-family: "montserrat-bold";
    color: maroon;
    max-width: 540px;
    margin-bottom: 25px;
  }
}
</style>