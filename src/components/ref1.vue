<!--
 * @Author: your name
 * @Date: 2021-02-02 09:37:16
 * @LastEditTime: 2021-02-02 14:45:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\ref1.vue
-->
<template>
  <div>
    <p>{{initData}}</p>
    <p>{{objData.birthday}}</p>
    <p>{{stateData}}</p>
    <p>{{hh}}</p>
    <p>{{birthday}}</p>
  </div>
</template>

<script>
import { isRef, reactive, ref, toRefs, unref, toRef } from 'vue'
function aha(params) {
  return `hahaha---${params}`
} 

export default {
  name: "ref1",

  setup() {
    const initData = ref('早上好~')

    // 深度响应
    const objData = ref({
      name: 'helen',
      age: '45',
      birthday: {
        year: 1976,
        month: 2
      }
    })

    const noRefObj = {
      title: 'hello',
      time: '10:15AM'
    }

    // 判断是否为ref, 返回布尔值
    // console.log(isRef(noRefObj))
    // console.log(isRef(objData))

    // unref  val = isRef(val) ? val.value : val
    // console.log(unref(objData))

    
    objData.value.birthday.day = 23
    // console.log(initData)
    // console.log(objData.value) // proxy

    // toRef
    const stateData = reactive({
      name: 'helen',
      age: 45,
      birthday: {
        year: 1976,
        month: 2,
        day: 23
      }
    })

    const stateAsRefs = toRefs(stateData)
    console.log({...stateAsRefs})
    stateData.age++
    console.log(stateAsRefs.age.value)
    stateAsRefs.age.value++
    console.log(stateData.age)

    const birthRef = toRef(stateData, 'birthday')
    birthRef.value.hobby = 'null'
    console.log(birthRef)

    const hh = aha(birthRef.value.year)

    return {
      stateData,
      initData,
      objData,
      birthRef,
      hh,
      ...stateAsRefs // ...toRefs(stateData) 这样在template里就可以直接使用了
    }
  }
}
</script>

<style>

</style>
