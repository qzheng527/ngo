<template>
  <div id="app">
    <ul class="menu-popup" v-show="menuShow" @click="close">
      <li><a @click="close" href="#why">Why Occlum</a></li>
      <li><a @click="close" href="#how">How to Use</a></li>
      <li><a @click="close" href="#feature">Features</a></li>
      <li><a @click="close" href="#case">Use Cases</a></li>
      <li><a @click="close" href="https://github.com/occlum/occlum" target="_blank">Github</a></li>
      <a class="close">
        <img src="~/assets/image/close.svg" alt="">
      </a>
    </ul>
    <header>
      <a href="/" class="logo">
        <img src="~/assets/image/logo.png" alt="">
      </a>
      <ul class="menu">
        <li><a href="#why">Why Occlum</a></li>
        <li><a href="#how">How to Use</a></li>
        <li><a href="#feature">Features</a></li>
        <li><a href="#case">Use Cases</a></li>
        <li><a href="https://github.com/occlum/occlum" target="_blank">Github</a></li>
      </ul>
      <a class="menu-button" @click="toggleMenu">
        <img src="~/assets/image/menu.svg" alt="">
      </a>
    </header>
    <nuxt />
    <index />
    <why />
    <how />
    <feature />
    <case />
    <footer class="container">
      <div class="inner">
        <a class="github-link" target="_blank" href="https://github.com/occlum/occlum">
          <span class="github">Github</span>
          <a class="github-button" href="https://github.com/occlum/occlum" data-size="large" data-show-count="true" aria-label="Star occlum/occlum on GitHub">Star</a>
        </a>
        <div class="bottom">
          <a class="left github-link" target="_blank" href="https://github.com/occlum/occlum">
            <img src="~/assets/image/logo.png" alt="" class="logo">
          </a>
          <div class="right">A library OS empowering everyone to run every application in secure enclaves.</div>
        </div>
      </div>
    </footer>
    <div class="copyright">© 2020 Occlum</div>
    <script async defer src="https://buttons.github.io/buttons.js"></script>
  </div>
</template>

<script>
import Index from '~/components/index/index.vue'
import Why from '~/components/index/why.vue'
import How from '~/components/index/how.vue'
import Feature from '~/components/index/feature.vue'
import Case from '~/components/index/case.vue'

export default {
  components: {
    Index,
    Why,
    How,
    Feature,
    Case,
  },
  data() {
    return {
      menuShow: false,
    }
  },
  methods: {
    close() {
      this.menuShow = false;
    },
    toggleMenu () {
      this.menuShow = !this.menuShow;
    }
  }
}
</script>

<style lang="postcss">
@import "~/assets/css/base.css";

#app {
  .menu-popup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      text-align: center;
      font-size: 24px;
      margin: 15px 0;
      a {
        color: white;
        font-weight: 600;
      }
    }
    .close {
      position: absolute;
      top: 30px;
      right: 30px;
      img {
        height: 25px;
      }
    }
  }
  header {
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $color-back;
    .logo {
      img {
        height: 50px;
        @media (--mobile) {
          height: 40px;
        }
      }
    }
    .menu {
      display: flex;
      font-size: 16px;
      font-weight: 600;
      @media (--mobile) {
        display: none;
      }
      li {
        margin-left: 30px;
      }
    }
    .menu-button {
      display: none;
      @media (--mobile) {
        display: block;
      }
      img {
        height: 22px;
      }
    }
  }
  footer {
    padding: 180px 0 90px 0;
    display: flex;
    flex-direction: column;
    @media (--mobile) {
      padding: 80px 0 80px 0;
    }
    .inner {
      @media (--mobile) {
        flex-direction: column;
        align-items: center;
      }
      .github-link {
        display: flex;
        align-items: center;
        font-size: 36px;
        font-weight: 800;
        margin-bottom: 20px;
        @media (--mobile) {
          justify-content: center;
        }
        .github {
          display: block;
          margin-right: 15px;
        }
      }
      .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (--mobile) {
          flex-direction: column;
          align-items: center;
        }
        .left {
          cursor: pointer;
          display: block;
          .logo {
            height: 80px;
          }
        }
        .right {
          font-size: 24px;
          font-weight: 800;
          max-width: 550px;
          text-align: right;
          font-style: italic;
          margin-bottom: 30px;
          @media (--mobile) {
            margin-bottom: 0;
            font-size: 22px;
            max-width: 80vw;
            text-align: center;
          }
        }
      }
    }
  }
  .copyright {
    font-size: 16px;
    text-align: center;
    padding: 0 0 20px 0;
    opacity: 0.3;
    font-style: italic;
  }
}
</style>
