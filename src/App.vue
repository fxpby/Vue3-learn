<!--
 * @Author: your name
 * @Date: 2021-02-01 11:05:31
 * @LastEditTime: 2021-02-03 10:31:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\App.vue
-->
<template>
  <div>
    <!-- <setup-1/> -->
    <!-- <SetupB/> -->
    <!-- <setup-3 :title="setupState.title" /> -->
  <!-- <div> -->
    <!-- <setup-4/> -->
    <!-- <setup-4 :count="dataCount" @plus="plus"/> -->
    <!-- <ref-1/> -->
    <!-- <ref-2/> -->
    <!-- <ref-3/> -->
    <!-- <computed/> -->
    <!-- <readonly/> -->
    <watch-effect/>
  </div>
</template>

<script>
import { onBeforeUpdate, reactive, ref } from 'vue'
import Setup1 from './components/setup1'
import Setup2 from './components/setup2'
import Setup3 from './components/setup3'
import Setup4 from './components/setup4'
import Ref1 from './components/ref1'
import Ref2 from './components/ref2'
import Ref3 from './components/ref3'
import computed from './components/computed'
import readonly from './components/readonly'
import watchEffect from './components/watchEffect'

export default {
  name: 'App',
  components: {
    Setup1,
    Setup2,
    Setup3,
    Setup4,
    Ref1,
    Ref2,
    Ref3,
    computed,
    readonly,
    watchEffect
  },
  // props 不可以进行解构， context可以进行解构
  // 根据 attrs 或 slots 更改应用副作用, 需要在onUpdated中进行
  // emits: ['plus'],
  setup (props, context) {

    const dataCount = ref(0)
    const countNew = ref(1)
    


    // 在reactive里将一个属性设置为ref, 会自动展开
    const state = reactive({
      dataCount
    })
    state.dataCount = countNew
    
    // console.log(dataCount)

    // console.log(countNew, state.dataCount)
    // console.log(state.dataCount)

    const plus = num => {
      dataCount.value += num
    }

    const proxyObj = reactive({
      a: 1,
      b: 2
    })

    const refObj = ref({
      a: 1,
      b: 2
    })

    // console.log(refObj.value)

    // console.log(proxyObj.a)

    return {
      dataCount,
      plus
    }
  }

}
</script>

<style>
</style>
