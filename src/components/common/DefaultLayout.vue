<template>
  <a-layout>
    <app-header></app-header>
    <a-layout-content style="padding: 0 50px">
      <app-breadcrumb></app-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-content :style="{ padding: '0 24px', minHeight: '1000px' }">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      https://github.com/wxxsoo | Created by wxxsoo
    </a-layout-footer>
  </a-layout>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppBreadcrumb from '@/components/common/AppBreadcrumb';
export default {
  components: {
    AppHeader,
    AppBreadcrumb,
  },
};
</script>

<style></style>
