<template>
    <div class="row">
        <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
            <div class="card h-100 shadow-sm" style="width: 18rem;">
                <div class="card-body text-center">
                    <img :src="column.avatar" class="rounded-circle border border-light w-25 my-3">
                    <h5 class="card-title">{{column.title}}</h5>
                    <p class="card-text text-left">{{column.description}}</p>
                    <a href="#" class="btn btn-outline-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    console.log(props)
    const columnList = computed(() => {
      return props.list.map((column) => {
        if (!column.avatar) {
          column.avatar = 'https://www.tslang.cn/assets/images/clippy.svg'
        }
        return column
      })
    })
    return {
      columnList
    }
  }
})
</script>

<style lang="css">
</style>
