<!--
 * @Author: your name
 * @Date: 2021-02-04 18:12:41
 * @LastEditTime: 2021-02-04 18:35:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\provide-inject.vue
-->
<template>
  <div>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'provide',
  inject: ['provideName'],
  setup() {
    
  }
}
</script>

<style>

</style>