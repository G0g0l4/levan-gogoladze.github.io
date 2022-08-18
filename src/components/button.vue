<template>
  <button>
    {{ text }}
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    text: String
  }
}
</script>
<style scoped lang="scss">
button {
  font-family: "montserrat-bold";
  font-size: 16px;
  border: 2px solid black;
  border-radius: 8px;
  background: linear-gradient(45deg, #FFF 50%, orange 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding: 8px 15px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, orange 50%, transparent 50%);
    z-index: -1;
  }

  &,
  &:after {
    background-size: 300%;
    background-position: 100%;
    transition: .5s;
  }

  &:hover,
  button:hover:after {
    background-position: 0;
  }
}
</style>