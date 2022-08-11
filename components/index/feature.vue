<template>
  <div id="feature" class="container">
    <div class="inner">
      <h2 class="title right">Features</h2>
      <div class="list-content">
        <div class="line">
          <div class="item">
            <img src="~/assets/image/multitasking.png" alt="" class="icon">
            <div class="right">
              <h3 class="sub-title">Efficient Multitasking</h3>
              <p class="desc">Occlum offers light-weight LibOS processes that share the single address space of an enclave. These light-weight LibOS processes can be 1,000X faster on startup and 3X faster on inter-process communication, compared to the traditional heavy-weight, per-enclave LibOS processes.</p>
            </div>
          </div>
          <div class="item">
            <img src="~/assets/image/fs.svg" alt="" class="icon">
            <div class="right">
              <h3 class="sub-title">Multiple File Systems</h3>
              <p class="desc">Occlum supports various types of file systems, e.g., read-only hashed FS (for integrity protection), writable encrypted FS (for confidentiality protection), untrusted host FS (for convenient data exchange between the LibOS and the host OS), etc.</p>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="item">
            <img src="~/assets/image/memory.svg" alt="" class="icon">
            <div class="right">
              <h3 class="sub-title">Memory Safety</h3>
              <p class="desc">Occlum is built from scratch with <a class="bold" href="https://www.rust-lang.org/" target="_blank">Rust</a>, which helps to minimize low-level, memory-safety bugs and thus more trustworthy to host security-critical applications.</p>
            </div>
          </div>
          <div class="item">
            <img src="~/assets/image/easy.svg" alt="" class="icon">
            <div class="right">
              <h3 class="sub-title">Ease of Use</h3>
              <p class="desc">Occlum provides user-friendly build and utility command-line tools. Running applications on Occlum inside SGX enclaves can be as simple as only typing several shell commands.</p>
            </div>
          </div>
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
  padding: 50px 0 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (--mobile) {
    padding: 40px 0 40px 0;
  }
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
}
</style>
