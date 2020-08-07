<template>
  <div>
    <a-row :gutter="[16, 16]" :style="{ padding: '12px' }">
      <a-col :span="24">
        <a-button
          type="dashed"
          :style="{ width: '100%' }"
          @click="pushPollCreatePage"
          >투표 생성</a-button
        >
      </a-col>
    </a-row>
    <a-row :gutter="[16, 16]">
      <a-col
        :xs="{ span: 24 }"
        :lg="{ span: 8 }"
        v-for="poll in polls"
        :key="poll.pollId"
      >
        <a-card hoverable>
          <a-card-meta
            :title="poll.question"
            :description="'made by ' + poll.pollMaker"
          >
          </a-card-meta>
          <a slot="actions" @click="pushVotePage(poll.pollId)">투표하기</a>
          <a slot="actions" @click="pushDetailPage(poll.pollId)">결과보기</a>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_POLLS');
  },
  computed: {
    polls() {
      return this.$store.getters.polls;
    },
  },
  methods: {
    pushDetailPage(id) {
      console.log(id);
      this.$router.push({ name: 'PollDetailPage', params: { id: id } });
    },
    pushVotePage(id) {
      this.$router.push({ name: 'VotePage', query: { poll: id } });
    },
    pushPollCreatePage() {
      this.$router.push({ name: 'PollCreatePage' });
    },
  },
};
</script>

<style></style>
