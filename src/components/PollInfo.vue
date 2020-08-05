<template>
  <div>
    <a-row>
      <a-col :span="24">
        <a-descriptions bordered>
          <a-descriptions-item label="투표명">
            {{ poll.question }}
          </a-descriptions-item>
          <a-descriptions-item label="만든이">
            {{ poll.pollMaker }}
          </a-descriptions-item>
          <a-descriptions-item label="총 투표수">
            {{ poll.totalVoteCount }}
          </a-descriptions-item>
          <a-descriptions-item label="결과">
            <div v-for="choice in poll.choices" :key="choice.choiceId">
              <h4 align="left">
                {{ choice.title }} / {{ choice.voteCount }}표
              </h4>
              <a-progress :percent="getPercent(choice.voteCount)"></a-progress>
            </div>
          </a-descriptions-item>
        </a-descriptions>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  computed: {
    poll() {
      return this.$store.getters.poll;
    },
  },
  methods: {
    getPercent(count) {
      return Math.round((count / this.poll.totalVoteCount) * 100);
    },
  },
};
</script>

<style></style>
