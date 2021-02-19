<template>
  <nav class="navbar navbar-dark bg-primary justiify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">者也专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a class="btn btn-outline-light my-2" href="#">登录</a>
      </li>
      <li class="list-inline-item">
        <a class="btn btn-outline-light my-2" href="#">注册</a>
      </li>
    </ul>
    <ul v-else>
      <li class="list-inline-item">
        <a class="btn btn-outline-light mys-2" href="#">你好 {{user.name}}</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: string;
}
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>

<style>

</style>
