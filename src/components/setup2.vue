<!--
 * @Author: your name
 * @Date: 2021-02-01 14:12:34
 * @LastEditTime: 2021-02-01 14:28:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\setup1.vue
-->
<template>
</template>

<script>
import { reactive, ref, h } from "vue";

export default {
  name: "setup2",
  components: {},
  setup() {

    // use ref 更新值需要使用.value
    const refCount = ref(555);
    console.log("refCount =>", refCount.value);

    // use toRefs
    const toRefsCountState = reactive({
      toRefsCount: 666,
    });
    console.log("toRefsCountState =>", toRefsCountState);

    return () => h('div', [refCount.value, toRefsCountState.toRefsCount])
  },
};
</script>

<style></style>
