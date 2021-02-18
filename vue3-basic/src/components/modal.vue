<template>
    <teleport to="#modal">
        <div class="center" v-if="isOpen">
            <h2><slot> this is a modal</slot></h2>
            <button @click="buttonClick">close modal</button>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        isOpen: Boolean
    },
    emits: {
        'close-modal': null
    },
    setup(props, context) {
        const buttonClick = () => {
            context.emit('close-modal')
        }
        return {
            buttonClick
        }
    }
}) 
</script>

<style>
.center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    background: #fff;
}
</style>