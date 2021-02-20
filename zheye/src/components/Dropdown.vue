<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="btn btn-outline-light mys-2 dropdown-toggle" href="#" @click="toggleOpen">{{title}}</a>
    <ul class="dropdown-menu" style="display:block" v-if="isOpen">
        <!-- <li><a class="dropdown-item" href="#">新建文章</a></li>
        <li><a class="dropdown-item" href="#">编辑资料</a></li> -->
        <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
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
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const handler = (e: MouseEvent) => {
      if (dropdownRef.value) {
        if (!dropdownRef.value.contains(e.target) && isOpen.value) {
          isOpen.value = false
        }
      }
    }
    onMounted(() => {
      document.addEventListener('click', handler)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handler)
    })
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>

<style>

</style>
