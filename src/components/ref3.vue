<!--
 * @Author: your name
 * @Date: 2021-02-02 15:22:08
 * @LastEditTime: 2021-02-02 17:00:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\ref3.vue
-->
<template>
  <div>
    <p>{{info}}</p>
    <p>{{shallowRefInfo}}</p>
  </div>
</template>

<script>
import { isReactive, reactive, ref, shallowRef, toRefs, triggerRef, watchEffect } from 'vue'
export default {
  name: 'ref3',
  setup() {
    // const state = reactive({
    //   name: 'helen'
    // })
    const info = ref({
      name: 'also'
    })

    const shallowRefInfo = shallowRef({
      name: 'unknown'
    })

      info.value = {
        name: 'also unknown'
      }

      shallowRefInfo.value = {
        name: 'also unknown'
      }

    // console.log(shallowRefInfo)
    // console.log(shallowRefInfo.value) // 不再是ref对象了
    // console.log(isReactive(shallowRefInfo.value)) 

    // console.log(info.value.name)
    info.value = {
      name: 'also'
    }
    // console.log(info.value)
    // console.log(isReactive(info.value)) 


    let changeInfo = ''
    watchEffect(() => {
      // changeInfo = info.value.name
      changeInfo = shallowRefInfo.value.name // 不可追踪
      console.log(changeInfo)
    })

    info.value.name = 'ahahhhh'
    shallowRefInfo.value.name = 'ahhhhhhh'
    triggerRef(shallowRefInfo)

    return {
      // ...toRefs(state)
      shallowRefInfo,
      info
    }
  }
}
</script>

<style>

</style>