<!--
 * @Author: your name
 * @Date: 2021-02-02 18:07:34
 * @LastEditTime: 2021-02-02 18:28:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\watchEffect.vue
-->
<template>
  <div>
    1
  </div>
</template>

<script>
import { watchEffect, ref } from 'vue'
export default {
  name: 'watchEffect',
  setup () {
    const count = ref(0)

    // 显式调用返回值以停止侦听
    // const stop = watchEffect(() => {
    //   console.log(count.value)
    // })

    watchEffect((onInvalidate) => {
      console.log(count.value)
      onInvalidate(() => {
        console.log('onInvalidate 触发 触发..')
      })
    })

    setTimeout(() => {
      count.value++
    }, 200)

    setTimeout(() => {
      count.value++
    }, 400)

    // stop()
    return {

    }
  }
}
</script>

<style>

</style>