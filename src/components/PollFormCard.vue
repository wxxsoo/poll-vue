<template>
  <div>
    <a-card>
      <a-form-model
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        v-bind="formItemLayout"
      >
        <a-form-model-item
          label="어떤 투표를 만드실거죠?"
          prop="question"
          required
        >
          <a-input v-model="ruleForm.question" />
        </a-form-model-item>
        <a-form-model-item
          label="만든이의 이름을 입력해주세요."
          prop="pollMaker"
          required
        >
          <a-input v-model="ruleForm.pollMaker" />
        </a-form-model-item>
        <a-form-model-item
          label="비민벌호를 입력해주세요."
          prop="password"
          required
        >
          <a-input v-model="ruleForm.password" type="password" />
        </a-form-model-item>
        <a-form-model-item
          v-for="(choice, index) in ruleForm.choices"
          :key="choice.key"
          v-bind="index === 0 ? formItemLayout : {}"
          :label="index === 0 ? '선택지를 입력해주세요.' : ''"
          :prop="'choices.' + index + '.value'"
          :rules="{
            required: true,
            message: 'choice can not be null',
            trigger: 'blur',
          }"
        >
          <a-input
            v-model="choice.value"
            placeholder="please input choice"
            style="width: 80%; margin-right: 8px"
          />
          <a-icon
            v-if="ruleForm.choices.length > 1"
            class="dynamic-delete-button"
            type="minus-circle-o"
            :disabled="ruleForm.choices.length === 1"
            @click="removeChoice(choice)"
          />
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="dashed" style="width: 100%" @click="addChoice">
            <a-icon type="plus" /> 선택지 추가
          </a-button>
        </a-form-model-item>
        <a-form-model-item align="right">
          <a-button @click="resetForm('ruleForm')">
            Reset
          </a-button>
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
  </div>
</template>

<script>
import { createPoll } from '@/api/poll';
export default {
  data() {
    return {
      formItemLayoutWithOutLabel: {
        layout: 'vertical',
      },
      formItemLayout: {
        layout: 'vertical',
      },
      ruleForm: {
        question: '',
        choices: [],
        password: '',
        pollMaker: '',
      },
      rules: {
        question: [
          {
            required: true,
            message: '투표의 이름을 적어주세요!',
            trigger: 'blur',
          },
        ],
        choices: [
          {
            required: true,
            message: '선택지를 만들어주세요!',
            trigger: 'blur',
          },
        ],
        pollMaker: [
          {
            required: true,
            message: '만든이의 이름을 입력해주세요!',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '비밀번호를 입력해주세요!',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeChoice(item) {
      let index = this.ruleForm.choices.indexOf(item);
      if (index !== -1) {
        this.ruleForm.choices.splice(index, 1);
      }
    },
    addChoice() {
      this.ruleForm.choices.push({
        value: '',
        key: Date.now(),
      });
    },
    async submitForm(formName) {
      let valid;
      await this.$refs[formName].validate(v => {
        valid = v;
      });
      if (valid) {
        console.log(valid);
        console.log(this.ruleForm);
        this.ruleForm.choices = this.ruleForm.choices.map(data => {
          console.log(data.value);
          return data.value;
        });
        await createPoll(this.ruleForm);
        console.log(this.ruleForm.choices);
        // await createVote(this.ruleForm);
        await this.$router.push({
          name: 'PollListPage',
        });
      }
    },
  },
};
</script>

<style></style>
