<template>
    <teleport to="#modal">
        <div class="center">
            <h2>this is a modal</h2>
        </div>
    </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        
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