<!--
 * @Author: your name
 * @Date: 2021-02-02 17:34:44
 * @LastEditTime: 2021-02-02 17:39:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\readonly.vue
-->
<template>
  <div>

  </div>
</template>

<script>
import { reactive, readonly, watchEffect } from 'vue'
export default {
  name: 'readonly',
  setup() {
    const original = reactive({
      count: 0
    })
    const copy = readonly(original)

    watchEffect(() => {
      console.log(copy.count)
    })

    original.count++

    copy.count++

    return {
      
    }
  }
}
</script>

<style>

</style>