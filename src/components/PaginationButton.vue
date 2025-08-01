<template>
  <div class="quiz-footer">
    <button @click="btnClicked('pre')" class="btn btn-primary" id="next-btn" :disabled="current <= 0">Prev</button>
    <button v-if="current + 1 < quizCnt" @click="btnClicked('next')" class="btn btn-primary" id="next-btn">Next</button>
    <button v-else @click="btnClicked('end')" class="btn btn-primary" id="next-btn">Submit</button>
  </div>
</template>
<script>
export default {
  props:{
    current: {
      type: Number,
      required: true
    },
    quizCnt: {
      type: Number,
      required: true
    },
  },
  methods: {
    btnClicked(e){
      this.$emit('btn-clicked', e);
    }
  }
}
</script>

<style></style>
