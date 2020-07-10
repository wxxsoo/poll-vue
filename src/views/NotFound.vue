<template>
  <!-- <div align="center" fill-height class="notfound">
    <h1>404</h1>
    <a-button @click="goHome">go home</a-button>
  </div> -->
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <a-button type="primary" @click="goHome">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style scoped>
.notfound {
  margin: 0;

  height: 100%;

  overflow: hidden;
  background-color: yellow;
}
h1 {
  font-size: 150px;
  line-height: 150px;
  font-weight: 700;
  color: #252932;
  text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px,
    rgba(61, 61, 61, 0.3) 3px 3px;
}
</style>
