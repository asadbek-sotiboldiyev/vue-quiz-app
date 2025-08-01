<template>
  <button class="option" :value=option.value :class="(option.selected ? 'selected' : '')">
    {{ option.value }} ) {{option.title }}
  </button>
</template>

<script>
export default {
  props: {
    option: Object,
    required: true
  }
}
</script>
<style>

</style>
