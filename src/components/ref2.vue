<!--
 * @Author: your name
 * @Date: 2021-02-02 14:53:22
 * @LastEditTime: 2021-02-02 15:18:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\ref2.vue
-->
<template>
  <div>
    <span>{{content}}</span>
    <input type="text" v-model="content"/>
  </div>
</template>

<script>
import { customRef, reactive, toRefs } from 'vue'

function useDebouncedRef(value, delay = 200) {
  let timer = null
  return customRef((track, trigger) => {
    return {
      get(){
        track() // 追踪依赖
        return value
      },
      set(newValue){
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger() // 更新触发
        }, delay)
      }
    }
  })
}

export default {
  name: 'ref2',
  setup() {
    const state = reactive({
      content: 'hhhhhhhh'
    })

    state.content = useDebouncedRef('', 500)

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>

</style>