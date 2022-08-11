<template>
  <div id="why" class="container">
    <div class="inner">
      <h2 class="title right">Why Occlum</h2>
      <div class="content">
        <img src="~/assets/image/architecture.svg" alt="" class="diagram">
        <div class="desc">
          <p>Modern applications are being increasingly deployed to untrusted infrastructure, e.g., public clouds, IoT devices, blockchain nodes, etc. While a new class of hardware security technology known as enclaves (e.g., <a class="bold" href="https://software.intel.com/en-us/sgx" target="_blank">Intel SGX</a>) can provide the much-needed protection in these scenarios, secure enclaves are well known to be hard to program.</p>
          <p>Occlum makes running applications inside enclaves easy. <span class="italic">It allows one to run unmodified programs inside enclaves with just a few simple commands.</span> And Occlum is open-source and free to use. So, instead of spending months to port your code into enclaves, you can run your applications inside enclaves now!</p>
        </div>
      </div>
    </div>
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
  .inner {
    padding: 80px 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    @media (--mobile) {
      padding: 40px 0 40px 0;
    }
  }
  .content {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (--mobile) {
      flex-direction: column;
    }
    .diagram {
      max-width: 550px;
      @media (--table) {
        max-width: 50vw;
      }
      @media (--mobile) {
        max-width: 100%;
        margin: 0 auto;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
