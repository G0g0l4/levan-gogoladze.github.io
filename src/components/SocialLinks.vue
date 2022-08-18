<template>
  <div class="links-container" :class="{active: active}" v-on:click="toggle">
    <div class="links-container__toggle">
      <font-awesome-icon icon="fa-solid fa-globe" class="fa-2xl"/>
    </div>

    <div class="links-container__link" style="--iterator:0;">
      <a href="" target="_blank" rel="noopener">
        <font-awesome-icon icon="fa-brands fa-github" class="fa-xl"/>
      </a>
    </div>
    <div class="links-container__link" style="--iterator:1;">
      <a href="" target="_blank" rel="noopener">
        <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-xl"/>
      </a>
    </div>
    <div class="links-container__link" style="--iterator:2;">
      <a href="" target="_blank" rel="noopener">
        <font-awesome-icon icon="fa-brands fa-instagram" class="fa-xl	"/>
      </a>
    </div>
    <div class="links-container__link" style="--iterator:3;">
      <a href="" target="_blank" rel="noopener">
        <font-awesome-icon icon="fa-brands fa-facebook" class="fa-xl"/>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "SocialLinks",
  components: {},
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
    }
  }
}
</script>
<style scoped lang="scss">
.links-container {
  position: fixed;
  width: 200px;
  height: 200px;
  right: 0;
  top: 50%;
  cursor: pointer;
  border-radius: 25% 0 0 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1.25s;

  .links-container__toggle {
    position: absolute;
    width: 60px;
    height: 60px;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    border-radius: 50%;
  }

  .links-container__link {
    transition: .5s;
    transition-delay: calc(0.1s * var(--iterator));
    position: absolute;
    left: 0;
    transform: rotate(0deg) translateX(100px);
    transform-origin: 100px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #FFFFFF;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      transform: rotate(calc(360deg / -8 * var(--iterator))) translateY(120px);

      span {
        transform: rotate(calc(var(--iterator) * (360deg / 8)));
      }
    }
  }

  &.active .links-container__link {
    //transform: rotate(calc(360deg / 4 * var(--iterator)));
    transform: rotate(calc(360deg / 8 * var(--iterator))) translateY(120px);
  }
}
</style>