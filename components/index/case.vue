<template>
  <div id="case" class="container">
    <div class="bg">
      <div class="left-cube"></div>
      <div class="right-cube"></div>
    </div>
    <div class="inner">
      <h2 class="title">Use Cases</h2>
      <div class="list-content">
        <div class="line">
          <div class="item">
            <img src="~/assets/image/secret.svg" alt="" class="icon">
            <div class="right">
              <h3 class="sub-title">Secret Management</h3>
              <p class="desc">Secret management is essential in today's microservice architecture. However, the data store of your secret management system becomes a centralized weakness. If it got comprised, all your secrets are in danger. Occlum allows you to fortify the secret store by running it in hardware-encrypted memory.</p>
            </div>
          </div>
          <div class="item">
            <img src="~/assets/image/blockchain.svg" alt="" class="icon">
            <div class="right">
              <h3 class="sub-title">Blockchain Privacy</h3>
              <p class="desc">Privacy in blockchain transactions (smart contracts) is a roadblock for blockchain to enter a serious business market. With Occlum, even a smart contract gets executed at a random node of the chain, the content and details of the contract still remain confidential.</p>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="item">
            <img src="~/assets/image/protect.svg" alt="" class="icon">
            <div class="right">
              <h3 class="sub-title">Data Protection at Edge</h3>
              <p class="desc">With the rise of Edge Computing, more and more code and data are running at heterogeneous remote sites, which means that the IP property (both source and data) are exposed. Occlum allows you to deploy your code/data at those untrusted edges, with the necessary confidence that they are properly protected.</p>
            </div>
          </div>
          <div class="item">
            <img src="~/assets/image/ml.svg" alt="" class="icon">
            <div class="right">
              <h3 class="sub-title">Federated ML</h3>
              <p class="desc">Data exchange among multiple non-mutually-trusted parties is tricky. The problem lies at not only the lack of trust but also very often the jurisdiction requirement. Combing with Occlum, federated ML (Machine Learning) enables different entities to safely share the data, with no one having any access to the data.</p>
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
  padding: 120px 0 100px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (--mobile) {
    padding: 50px 0 50px 0;
  }
  .bg {
    top: 0;
  }
  .inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>
