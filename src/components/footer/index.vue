<template>
  <footer class="footer">
    <slot>
      <a-link
        style="font-size: 12px"
        href="https://gitee.com/zhang-rui-xin/oj-serve"
      >
        Online Judge 2024
      </a-link>
      |
      <a-link style="font-size: 12px" href="" target="_blank">
        MIT 使用条款
      </a-link>
    </slot>
  </footer>
</template>

<style lang="less" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: @size-mini;
  color: var(--color-text-2);
  text-align: center;
}
</style>
