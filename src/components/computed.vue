<!--
 * @Author: your name
 * @Date: 2021-02-02 16:38:30
 * @LastEditTime: 2021-02-02 17:25:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\computed.vue
-->
<template>
  <div>
    {{plusOne}}{{changeContent}}
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  name: 'computed',
  setup() {
    const content = ref('下午好呢~')
    const changeContent = computed({
      get: () => content.value + '下午下午',
      set: val => {
        content.value = val + 'hhhhhh'
        console.log('edit..')
      }
    })
    // const changeContent = computed(() => 
    //   content.value = '下午真的好~'
    // )
    changeContent.value = 'hello,'
    console.log(content.value)
    console.log(changeContent)


    // changeContent.value = "会不会报错呢"

    // const count = ref(1)
    // const plusOne = computed(() => count.value + 1)

    // console.log(plusOne.value) // 2

    // plusOne.value++ // error
    const count = ref(1)
    const plusOne = computed({
      get: () => count.value + 1,
      set: val => {
        count.value = val - 1
      }
    })

    plusOne.value = 1
    console.log(count.value) // 0
    return {
      plusOne,
      changeContent
    }
  }
}
</script>

<style>

</style>