<!--
 * @Author: your name
 * @Date: 2021-02-02 18:07:34
 * @LastEditTime: 2021-02-03 10:55:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\watchEffect.vue
-->
<template>
  <div ref="myRef">
    {{count}}
  </div>
</template>

<script>
import { watchEffect, ref, onBeforeUpdate, onMounted } from 'vue'
export default {
  name: 'watchEffect',
  setup () {
    const count = ref(0)
    const myRef = ref(null)

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onMounted(() => {
      console.log('onMounted')
      // watchEffect(async(onInvalidate) => {
      //   console.log(count.value)
      //   const data = await getData()
      //   console.log(data)
      //   console.log(myRef.value)
      //   onInvalidate(() => {
      //     console.log('onInvalidate 触发 触发..')
      //   })
      // },
      // {
      //   flush: 'pre'
      // })
    })
    // 显式调用返回值以停止侦听
    // const stop = watchEffect(() => {
    //   console.log(count.value)
    // })
    
    function getData() {
      return new Promise((resolve, reject) => {
        resolve(233)
      })
    }

    watchEffect(async(onInvalidate) => {
      console.log(count.value)
      console.log(myRef.value)
      const data = await getData()
      console.log(data)

      onInvalidate(() => {
        console.log('onInvalidate 触发 触发..')
      })
    },
    {
      onTrack(e) {
        console.log('onTrack...', e)
      },
      onTrigger(e) {
        console.log('onTrigger...', e)
      },
      flush: 'pre'
    }
  )

    setTimeout(() => {
      count.value++
    }, 200)

    setTimeout(() => {
      count.value++
    }, 400)

    // stop()
    return {
      count,
      myRef
    }
  }
}
</script>

<style>

</style>