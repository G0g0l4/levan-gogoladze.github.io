<template>
  <div id="header" class="d-flex justify-content-between">
    <div class="icon"></div>

    <div class="links d-none d-md-block">
      <ul class="d-flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>

    <div class="menu d-md-none d-sm-block">
      <button class="burger-btn" :class="{active: showSideMenu}" @click="ToggleSideMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside :class="{active: showSideMenu}" :aria-hidden="!showSideMenu">
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showSideMenu: false
    }
  },
  methods: {
    ToggleSideMenu() {
      this.showSideMenu = !this.showSideMenu;
    }
  }
}
</script>

<style scoped lang="scss">
#header {
  padding: 0 40px;

  ul {
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;

      a {
        text-decoration: none;
        color: red;
        font-family: "montserrat-regular";
      }
    }
  }

  .links {
  }

  .menu {

    .burger-btn {
      -webkit-box-pack: center;
      -webkit-box-align: center;
      position: relative;
      z-index: 10;
      margin-right: -15px;
      padding: 15px;
      border: 0;
      background-color: transparent;
      color: inherit;
      text-transform: none;
      transition: all .3s;

      span {
        display: block;
        width: 25px;
        height: 2px;
        border-radius: 50px;
        background: red;
        margin-bottom: 4px;
      }

      &.active {
        span:first-of-type {
          transform: rotate(45deg);
        }

        span:nth-of-type(2) {
          transform: translateX(15px);
          visibility: hidden;
        }

        span:last-of-type {
          transform: rotate(-45deg);
        }
      }
    }

    aside {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      padding: 50px 10px;
      width: min(75vw, 400px);
      height: 100vh;
      outline: 0;
      //box-shadow: -10px 0px 30px -15px var(--navy-shadow);
      z-index: 9;
      transform: translateX(100vw);
      visibility: visible;
      transition: .3s;

      &.active {
        transform: translateX(0vw);
      }

      nav {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        flex-direction: column;
        text-align: center;

        ul {
          padding: 0;
          margin: 0;
          width: 100%;

          li {
            position: relative;
            margin: 0 auto 20px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>