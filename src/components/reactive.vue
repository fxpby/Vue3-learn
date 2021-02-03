<!--
 * @Author: your name
 * @Date: 2021-02-03 11:53:19
 * @LastEditTime: 2021-02-03 15:36:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\reactive.vue
-->
<template>
  <div>
    <p>{{shallowState.age}}</p>
    <p>{{shallowState.birth.year}}</p>
    <p>{{state.foo}}, {{state.nested.bar}}</p>
    <button @click="handler">click</button>
  </div>
</template>

<script>
import { isProxy, isReactive, isReadonly, reactive, readonly, shallowReactive, toRefs, shallowReadonly } from 'vue'
export default {
  name: 'reactive',
  setup() {
    // const state = reactive({
    //   name: 'helen'
    // })

    // const readonlyState = readonly({
    //   name: 'also'
    // })

    // const stateCopy = readonly(state)

    // console.log('state... ', isProxy(state), isReactive(state), isReadonly(state))
    // console.log('readonlyState... ', isProxy(readonlyState), isReactive(readonlyState), isReadonly(readonlyState))
    // console.log('stateCopy... ', isProxy(stateCopy), isReactive(stateCopy), isReadonly(stateCopy))

    const shallowState = shallowReactive({
      age: 45,
      birth: {
        year: 1976,
        month: 2
      }
    })

    const stateReadonly = readonly({
      a: 1,
      b: {
        c: 2
      }
    })

    const shallowReadonlyState = shallowReadonly({
      a: 1,
      b: {
        c: 2
      }
    })

    console.log(isReadonly(stateReadonly))
    console.log(isReadonly(stateReadonly.a))
    console.log(isReadonly(stateReadonly.b.c))
    console.log(isReadonly(shallowReadonlyState))
    console.log(isReadonly(shallowReadonlyState.a))
    console.log(isReadonly(shallowReadonlyState.b.c))



    console.log(isReactive(shallowState.age))
    console.log(isReactive(shallowState.birth))

    

    const handler = () => {
      shallowState.age++
      shallowState.birth.year++
      console.log('shallowState =>', shallowState)
      console.log('shallowState.age =>', shallowState.age)
      console.log('shallowState.birth.year =>', shallowState.birth.year)

      
      // 改变状态本身的性质是响应式的
      state.foo++
      // ...但是不转换嵌套对象
      isReactive(state.nested) // false
      state.nested.bar++ // 非响应式
      console.log(state)
    }

    const state = shallowReactive({
      foo: 1,
      nested: {
        bar: 2
      }
    })



    return {
      // ...toRefs(state),
      // ...toRefs(readonlyState),
      // ...toRefs(shallowState),
      state,
      shallowState,
      handler,
      shallowReadonly
    }
  }
}
</script>

<style>

</style>