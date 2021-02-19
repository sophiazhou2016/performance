<template>
    <ul>
        <li v-for="column in list" :key="column.id">
            <img :src="column.avatar" alt="">
            <h5>{{column.title}}</h5>
            <p>{{column.description}}</p>
            <a href="javascript:;">进入专栏</a>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface ColumnProps {
    id: number;
    title: string;
    avatar: string;
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
    setup(props) {
        props.list[0].title
    }
})
</script>

<style>

</style>