<template>
  <div class="breadcrumbs">
    <a-breadcrumb :routes="this.$route.meta.routes" style="margin: 16px 0">
      <template slot="itemRender" slot-scope="{ route }">
        <router-link v-if="route.to" :to="route.to">
          {{ route.breadcrumbName }}
        </router-link>
        <span v-else>
          {{ route.breadcrumbName }}
        </span>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
