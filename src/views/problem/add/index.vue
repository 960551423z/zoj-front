<template>
  <div class="container-a">
    <Breadcrumb :items="['题库', '题目管理', '添加题目']" />
    <a-spin style="width: 100%">
      <a-card class="general-card">
        <template #title>添加题目</template>
        <div class="wrapper">
          <a-steps v-model:current="step" line-less class="steps">
            <a-space :size="75">
              <a-step description="输入题目基本信息">基本信息</a-step>
              <a-step description="输入题目描述">题目描述</a-step>
              <a-step description="题目的标准答案">题目答案</a-step>
              <a-step description="输入判题用例">判题用例</a-step>
              <a-step description="输入判题配置">判题配置</a-step>
            </a-space>
          </a-steps>
          <a-divider style="margin: 35px" />
          <keep-alive>
            <ProblemBaseInfo
              v-if="step === 1"
              v-model:data="submitModel"
              :add-flag="true"
              @change-step="changeStep"
            />
            <ProblemDesc
              v-else-if="step === 2"
              v-model:data="submitModel"
              @change-step="changeStep"
            />
            <ProblemAnswer
              v-else-if="step === 3"
              v-model:data="submitModel"
              @change-step="changeStep"
            />
            <ProblemJudgeCase
              v-else-if="step === 4"
              v-model:data="submitModel"
              @change-step="changeStep"
            />
            <ProblemJudgeConfig
              v-else-if="step === 5"
              v-model:data="submitModel"
              @change-step="changeStep"
            />
          </keep-alive>
        </div>
      </a-card>
    </a-spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProblemBaseInfo from '@/views/problem/components/problem-base-info.vue';
import { OjProblemAddRequest, OjProblemService } from '@/api/gen-api';
import ProblemDesc from '@/views/problem/components/problem-desc.vue';
import ProblemAnswer from '@/views/problem/components/problem-answer.vue';
import ProblemJudgeCase from '@/views/problem/components/problem-judge-case.vue';
import ProblemJudgeConfig from '@/views/problem/components/problem-judge-config.vue';
import { Message } from '@arco-design/web-vue';
import { useRouter } from 'vue-router';

const step = ref(1);
const submitModel = ref<OjProblemAddRequest>({} as OjProblemAddRequest);
const router = useRouter();

const changeStep = (direction: string | number) => {
  if (typeof direction === 'number') {
    step.value = direction;
    return;
  }

  if (direction === 'forward') {
    step.value += 1;
  } else if (direction === 'submit') {
    handleSubmit();
    return;
  } else {
    step.value -= 1;
  }
};

const handleSubmit = () => {
  OjProblemService.save(submitModel.value).then(() => {
    Message.success('添加成功');
    setTimeout(() => {}, 500);
    router.push({ name: 'Manage' });
  });
};
</script>

<script lang="ts">
export default {
  name: 'ProblemAdd'
};
</script>

<style scoped lang="less">
.container-a {
  padding: 0 20px 20px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background-color: var(--color-bg-2);

  :deep(.arco-form) {
    .arco-form-item {
      &:last-child {
        margin-top: 20px;
      }
    }
  }
}
</style>
