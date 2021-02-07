<!--
 * @Author: your name
 * @Date: 2021-02-03 18:27:30
 * @LastEditTime: 2021-02-04 16:21:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\lifecycle.vue
-->
<template>
  <div>
    <p>{{count}}</p>
    <button @click="handler">click</button>
  </div>
</template>

<script>
import { getCurrentInstance, onUpdated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, reactive, toRefs, watchEffect } from 'vue'
export default {
  /**
   * 0. setup
   * 1. watchEffect
   * 2. onBeforeMount
   * 3. onRenderTracked
   * 4. onMounted
   * 
   * after click button
   * 
   * onRenderTriggered
   * watchEffect
   * onBeforeUpdate
   * onRenderTracked
   * onUpdated
   */
  setup() {
    console.log('setup..')
    onBeforeMount(() => {
      console.log('onBeforeMount..')
    })
    onMounted(() => {
      console.log('onMounted..')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate..')
    })
    onUpdated(() => {
      console.log('onUpdated..')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount..')
    })
    onUnmounted(() => {
      console.log('onUnmounted..')
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured..')
    })
    onRenderTracked(() => {
      console.log('onRenderTracked..')
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered..')
    })

    const state = reactive({
      count: 1
    })

    const handler = () => {
      state.count++
    }
    
    watchEffect(() =>{
      console.log('watchEffect', state.count)
    })

    return {
      ...toRefs(state),
      handler
    }
  }
}
</script>

<style>

</style>
