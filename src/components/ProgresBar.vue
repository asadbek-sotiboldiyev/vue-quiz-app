<template>
  <div class="progress">
    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 0%" aria-valuenow="0"
      aria-valuemin="0" :style="{ width: progressNow + '%' }" :class="(progressNow == 100 ? 'bg-success' : '')"
      aria-valuemax="100">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    progressNow: {
      type: Number,
      required: true
    }
  }
}
</script>
<style></style>
