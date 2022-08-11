<template>
  <div class="container">
    <div class="bg">
      <div class="left-cube"></div>
      <div class="right-cube"></div>
    </div>
    <h1 class="index-title">
      <img class="logo" src="~/assets/image/logo-icon.png" alt="">
      <div class="tagline">
        <span class="bold">Occlum</span> - A library OS empowering everyone to run every application in secure enclaves
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped lang="postcss">
@import "~/assets/css/base.css";

.container {
  max-width: unset;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px 0 200px 0;
  @media (--mobile) {
    padding: 50px 0 100px 0;
  }
  .index-title {
    display: flex;
    align-items: center;
    font-weight: 800;
    @media (--mobile) {
      flex-direction: column;
    }
    .logo {
      height: 120px;
      margin-right: 40px;
      @media (--mobile) {
        margin-right: 0;
        margin-bottom: 10px;
        height: 100px;
      }
    }
    .tagline {
      font-size: 34px;
      max-width: 850px;
      margin-top: 15px;
      @media (--table) {
        font-size: 30px;
        max-width: 700px;
      }
      @media (--mobile) {
        max-width: 95vw;
        font-size: 22px;
        text-align: center;
      }
      .bold {
        color: $color-main;
      }
    }
  }
}
</style>
