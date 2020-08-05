<template>
  <div>
    <a-row>
      <a-col>
        <a-card>
          <a-form-model
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            v-bind="layout"
          >
            <a-form-model-item :label="poll.question" prop="choiceId" required>
              <a-radio-group v-model="ruleForm.choiceId" @change="onChange">
                <a-radio
                  :style="radioStyle"
                  v-for="choice in poll.choices"
                  :value="choice.choiceId"
                  :key="choice.choiceId"
                >
                  {{ choice.title }}
                </a-radio>
              </a-radio-group>
            </a-form-model-item>
            <a-form-model-item label="이유가 있을까요?" prop="reasonForVoting">
              <a-input v-model="ruleForm.reasonForVoting" />
            </a-form-model-item>
            <a-form-model-item align="right">
              <a-button
                key="submit"
                type="primary"
                @click="submitForm('ruleForm')"
                style="margin-left: 10px;"
              >
                저 장
              </a-button>
            </a-form-model-item>
          </a-form-model>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { createVote } from '@/api/vote';
export default {
  created() {
    this.$store.dispatch('FETCH_POLL', this.$route.query.poll);
  },
  computed: {
    poll() {
      return this.$store.getters.poll;
    },
  },
  data() {
    return {
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      },
      ruleForm: {
        pollId: this.$route.query.poll,
        choiceId: '',
        reasonForVoting: '',
      },
      rules: {
        choiceId: [
          {
            required: true,
            message: '투표해 주세요.',
            trigger: 'blur',
          },
        ],
      },
      layout: {
        layout: 'vertical',
      },
    };
  },
  methods: {
    onChange(e) {
      console.log(this.ruleForm.choiceId);
    },

    async submitForm(formName) {
      let valid;
      await this.$refs[formName].validate(v => {
        valid = v;
      });
      if (valid) {
        console.log(valid);
        console.log(this.ruleForm);
        await createVote(this.ruleForm);
        await this.$router.push({
          name: 'PollListPage',
        });
      }
    },
  },
};
</script>

<style></style>
