<template>
    <div ref="elRef" v-show="opened" class="vui__popup" :class="{'vui__popup-closed': closeCls}" :id="id">
        <!-- //蒙层 -->
        <div v-if="JSON.parse(shade)" class="vui__overlay" @click="shadeClicked" :style="{opacity}"></div>
        <div class="vui__wrap">
            <div class="vui__wrap-section">
                <div class="vui__wrap-child" :class="['anim-'+anim, type&&'popupui__'+type, round&&'round', position]" :style="[popupStyle]">
                    <div v-if="title" class="vui__wrap-tit" v-html="title"></div>
                    <div v-if="type=='toast'&&icon" class="vui__toast-icon" :class="['vui__toast-'+icon]" v-html="toastIcon[icon]"></div>
                    <!-- 判断插槽是否存在 -->
                    <template v-if="$slots.content">
                        <div class="vui__wrap-cnt"><slot name="content" /></div>
                    </template>
                    <template v-else>
                        <div v-if="content" class="vui__wrap-cnt" v-html="content"></div>
                    </template>
                    <slot />
                    <div v-if="btns" class="vui__wrap-btns">
                        <span v-for="(btn, index) in btns" :key="index" class="btn" :style="btn.style" @click="btnClicked($event, index)" v-html="btn.text"></span>
                    </div>
                    <span v-if="xclose" class="vui__xclose" :class="xposition" :style="{'color': xcolor}" @click="close"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String
  },
  setup (props, context) {
    console.log(props)
  }
})
</script>

<style>

</style>
