<!--
 * @Author: your name
 * @Date: 2021-02-01 14:12:34
 * @LastEditTime: 2021-02-01 22:14:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\setup1.vue
-->
<template>
    <div>
      <p>{{attrs}}</p>
    </div>
</template>

<script>
import { reactive, ref, h, watchEffect, watch, toRefs } from "vue";

export default {
  name: "setup3",
  props: {
    title: String
  },
  components: {},
  // 注意： props不应进行解构，会丧失响应式
  setup(props, context) {
    // console.log('setup3 =>', props, context)
    console.log('setup3 context.attrs=>', context.attrs)
    // console.log('setup3 context=>', context.attrs, context.slots, context.emit)

    // watchEffect(() => {
    //   console.log('watchEffect =>', props.title)
    // })

    // 侦听getter
    watch(
      ()=> props.title, (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }
    )
    return {
      attrs: context.attrs
    }
  },
};
</script>

<style></style>
