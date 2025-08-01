<template>
  <button v-for="i in quizCnt" :key="i" @click="() => { current = i - 1 }"
    :class="[(isSelected(i-1) ? 'selected' : ''), (current == i - 1 ? 'current' : '')]" class="list-item">{{
      i }}
  </button>
</template>
<script>
export default {
  props: {
    quizCnt: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    },
    userAnswers: {
      type: Array,
      required: true
    }
  },
  methods: {
    isSelected(i){
      return this.userAnswers[i] !== null;
    }
  }
}
</script>

<style scoped>
.list-item {
  border: 2px solid white;
  border-radius: 2px;
  margin: 2px;
  padding: 2px 15px;
  font-size: 20px;
}
</style>
