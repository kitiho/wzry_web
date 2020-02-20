<template>
  <div class="head d-flex jc-start ai-center py-3 px-4">
    <i :class="`sprite sprite-${icon}`"></i>
    <span class="fs-lg text-black-1 flex-1 px-2">{{title}}</span>
    <i class="sprite sprite-more"></i>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
  }
};
</script>

<style>
</style>