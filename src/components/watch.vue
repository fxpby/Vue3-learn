<!--
 * @Author: your name
 * @Date: 2021-02-03 11:01:54
 * @LastEditTime: 2021-02-03 11:40:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\watch.vue
-->
<template>
  <div>{{otherCount}}{{count}}</div>
  <button @click="handler">click</button>
</template>

<script>
import { reactive, toRefs, watch, ref, onBeforeUpdate } from 'vue'
export default {
  name: 'watch',
  setup() {
    const state = reactive({
      count: 0
    })

    const otherCount = ref(100)

    const handler = () => {
      state.count += 11
      otherCount.value += 111
    }

    setTimeout(() => {
      state.count = 233
      otherCount.value = 2333
    }, 2000)

    setTimeout(() => {
      state.count = 2331
      otherCount.value = 23331
    }, 2000)

    // watch(() => {
    //   return state.count
    // },
    // (newVal, oldVal) => {
    //   console.log(newVal, oldVal)
    // })

    // 侦听多个数据源
    watch(() => {
      return [state.count, otherCount.value]
    },([newVal1, newVal2], [oldVal1, oldVal2], onInvalidate) => {
      console.log(newVal1, newVal2)
      console.log(oldVal1, oldVal2)
      onInvalidate(() => {
        console.log('onInvalidate..')
      })
    },
    {
      onTrack(e) {
        // console.log('onTrack..', e)
      },
      onTrigger(e) {
        // console.log('onTrigger..', e)
      },
      flush: 'pre'
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate..')
    })

    return {
      ...toRefs(state),
      otherCount,
      handler
    }
  }
}
</script>

<style>

</style>
