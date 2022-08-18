<template>
  <div class="links-container" :class="{active: active}" @click="toggle">
    <div class="links-container__toggle">
      <font-awesome-icon icon="fa-solid fa-globe" class="fa-xl"/>
    </div>

    <div class="links-container__link" style="--iterator:1;">
      <a href="" target="_blank" rel="noopener">
        <font-awesome-icon icon="fa-brands fa-github" class="fa-xl"/>
      </a>
    </div>
    <div class="links-container__link" style="--iterator:2;">
      <a href="" target="_blank" rel="noopener">
        <font-awesome-icon icon="fa-brands fa-linkedin" class="fa-xl"/>
      </a>
    </div>
    <div class="links-container__link" style="--iterator:3;">
      <a href="" target="_blank" rel="noopener">
        <font-awesome-icon icon="fa-brands fa-instagram" class="fa-xl	"/>
      </a>
    </div>
    <div class="links-container__link" style="--iterator:4;">
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
  display: flex;
  align-items: center;
  justify-content: center;
  right: 20px;
  top: 50%;
  cursor: pointer;
  transform: rotate(-60deg);

  .links-container__toggle {
    z-index: 999;
    transform: rotate(60deg);
    box-shadow: 0 0 20px rgb(0, 0, 0, 0.2);
  }

  .links-container__toggle,
  .links-container__link a {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: blue;
    border-radius: 50%;
    color: #ffffff;
  }

  .links-container__link {
    position: absolute;
    transition: all 0.6s ease;

    a {
      transform: rotate(60deg);

      svg {
        transform: rotate(calc((360deg / -6) * (var(--iterator))));
      }
    }
  }

  &.active .links-container__link {
    transform: rotate(calc((360deg / 6) * (var(--iterator)))) translateY(110px);
  }
}
</style>