<template>
  <li
    class="dropdown-item"
    :class="{'is-disabled': disabled}"
    >
    <slot></slot>
  </li>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      required: false
    }
  }
})
</script>

<style>
.dropdown-item.is-disabled {
    color: #6c757d;
    pointer-events: none;
    background: transparent;
}
</style>
