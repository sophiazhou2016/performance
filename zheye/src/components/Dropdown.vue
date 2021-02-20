<template>
  <div class="dropdown">
    <a class="btn btn-outline-light mys-2 dropdown-toggle" href="#" @click="toggleOpen">{{title}}</a>
    <ul class="dropdown-menu" style="display:block" v-if="isOpen">
        <!-- <li><a class="dropdown-item" href="#">新建文章</a></li>
        <li><a class="dropdown-item" href="#">编辑资料</a></li> -->
        <slot></slot>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    return {
      isOpen,
      toggleOpen
    }
  }
})
</script>

<style>

</style>
