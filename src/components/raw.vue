<!--
 * @Author: your name
 * @Date: 2021-02-03 15:58:37
 * @LastEditTime: 2021-02-03 16:25:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\raw.vue
-->
<template>
  <div>
    
  </div>
</template>

<script>
import { isReactive, markRaw, readonly, reactive, toRaw} from 'vue'
export default {
  name: 'raw',
  setup() {
    const foo1 = {}
    const reactiveFoo = reactive(foo1)
    console.log(foo1, reactiveFoo, toRaw(reactiveFoo)) // 把响应式对象转换为普通对象
    console.log(toRaw(reactiveFoo) === foo1) // true

    const foo2 = markRaw({a:1})
    console.log(isReactive(reactive(foo2))) // false
    console.log(foo2) // __v_skip: true 返回非代理对象

    // 标记一个对象，永远不会转换为代理。返回对象本身
    const obj = markRaw({
      a:1
    })
    console.log(isReactive(reactive(obj)))

    const deepObj = reactive({obj})
    console.log(isReactive(reactive(deepObj)))
    console.log(isReactive(reactive(deepObj.obj))) // deepObj为代理，deepObj.obj为普通对象

    const other = reactive({a: 233})
    console.log(markRaw(other)) // 返回本身代理对象  __v_skip: true
    
    return {
      
    }
  }
}
</script>

<style>

</style>
