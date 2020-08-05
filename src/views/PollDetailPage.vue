<template>
  <div>
    <a-row>
      <a-col>
        <poll-info></poll-info>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import PollInfo from '@/components/PollInfo';
export default {
  created() {
    this.$store.dispatch('FETCH_POLL', this.$route.params.id);
  },
  components: {
    PollInfo,
  },
  computed: {
    poll() {
      return this.$store.getters.poll;
    },
  },
};
</script>

<style></style>
