<!--
 * @Author: your name
 * @Date: 2021-02-01 14:12:34
 * @LastEditTime: 2021-02-01 14:29:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\src\components\setup1.vue
-->
<template>
  <div>
    <p>{{ staticCount }}</p>
    <p>{{ state.count }}</p>
    <p>{{ refCount }}</p>
    <p>{{ toRefsCount }}</p>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, reactive, ref, toRefs } from "vue";

export default {
  name: "setup1",
  components: {},
  setup() {
    onMounted(() => {
      console.log("onMounted");
    }),
      onUpdated(() => {
        console.log("onUpdated");
      }),
      onUnmounted(() => {
        console.log("onUnmounted");
      });
    console.log("setup");

    // use reactive
    const state = reactive({
      count: 333,
    });
    console.log("state =>", state);

    // use ref 更新值需要使用.value
    const refCount = ref(555);
    console.log("refCount =>", refCount.value);

    // use toRefs
    const toRefsCountState = reactive({
      toRefsCount: 666,
    });
    console.log("toRefsCountState =>", toRefsCountState);

    return {
      staticCount: 222, // 非响应式数据
      state,
      refCount,
      ...toRefs(toRefsCountState),
    };
  },
};
</script>

<style></style>
