<template>
  <div class="dropdown">
    <a class="btn btn-outline-light mys-2 dropdown-toggle" href="#">{{title}}</a>
    <ul class="dropdown-menu" style="display:block">
        <li><a class="dropdown-item" href="#">新建文章</a></li>
        <li><a class="dropdown-item" href="#">编辑资料</a></li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style>

</style>
