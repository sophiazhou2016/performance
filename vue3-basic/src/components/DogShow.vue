<template>
    <img :src="result && result.message" alt="">
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import axios from 'axios';
export default defineComponent({
    async setup() {
        const rawData = await axios.get('https://dog.ceo/api/breeds/image/random')
        return {
            result: rawData.data
        }
    }
})
</script>

<style>

</style>