<template>
  <div class="results">
    <div class="result-icon">
      <i class="fas" :class="(corrects > correctAnswers.length / 2 ? 'fa-trophy text-success' : 'fa-times-circle text-danger')"></i>
    </div>
    <div class="score">Your score: {{ corrects }}/{{ correctAnswers.length }}</div>
    <p>{{ corrects > correctAnswers / 2 ? 'Great job!' : 'Better luck next time!' }}</p>
    <button class="btn btn-primary" @click="$router.push({name: 'home'})">Go Home</button>
  </div>
</template>

<script>

export default {
  props: {
    userAnswers: {
      type: Array,
      required: true
    },
    correctAnswers: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      corrects: 0
    }
  },
  methods: {
    checkAnswers(){
      for (let i = 0; i < this.correctAnswers.length; i++) {
        if(this.correctAnswers[i] == this.userAnswers[i]) this.corrects++;
      }
      return this.corrects;
    }
  },
  mounted() {
    this.corrects = this.checkAnswers()
  },
}
</script>

<style></style>
