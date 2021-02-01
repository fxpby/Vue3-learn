<!--
 * @Author: your name
 * @Date: 2021-02-01 14:12:34
 * @LastEditTime: 2021-02-01 21:25:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\setup1.vue
-->
<template>
    <div>
      <p>{{count}}</p>
      <button @click="plus">增加</button>
    </div>
</template>

<script>
export default {
  name: "setup4",
  props: {
    count: Number
  },
  components: {},
  setup(props, context) {
    console.log(props)
    const plus = () => {
      context.emit('plus', 100)
    }

    return {
      plus
    }
  },
};
</script>

<style></style>
