<template>
  <div id="footer">
    <a class="personal-link" href="https://github.com/G0g0l4" target="_blank" rel="noopener">
      Designed & Built by Levan Gogoladze
    </a>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
<style scoped lang="scss">
#footer {
  .social-links {

    ul {
      list-style: none;
    }
  }

  .personal-link {
    text-decoration: none;
    font-size: 12px;
    line-height: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'montserrat-medium';
  }
}
</style>