<template>
  <div class="quiz-container" id="quiz">
    <div class="progress">
      <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 0%" aria-valuenow="0"
        aria-valuemin="0" :style="{ width: progressNow() + '%' }" :class="(progressNow() == 100 ? 'bg-success' : '')"
        aria-valuemax="100"></div>
    </div>

    <div class="quiz-header" id="question-container">
      <p class="question">{{ current + 1 }} | {{ getQuiz(current).question }}</p>
    </div>

    <div class="options" id="options">
      <AnswerOption v-for="option in getQuiz(current).answers" :key="option.value" @click="selectAnswer" :option="option" />
    </div>
      <PaginationButton :current="current" :quizCnt="quizCnt" @btn-clicked="paginationEventHandler"/>
    <hr>

    <button v-for="i in quizzes.length" :key="i" @click="() => { current = i - 1 }"
      :class="[(isSelected(getQuiz(i - 1)) ? 'selected' : ''), (current == i - 1 ? 'current' : '')]"
      class="list-item">{{ i }}
    </button>

  </div>
</template>

<script>
import AnswerOption from '@/components/AnswerOption.vue';
import PaginationButton from '@/components/PaginationButton.vue';

export default {
  components: { AnswerOption, PaginationButton },
  props: {
    quizzes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      answers: Array(5).fill(null),
      current: 0,
      quizCnt: this.quizzes.length
    }
  },
  methods: {
    paginationEventHandler(e){
      switch (e) {
        case 'pre':
          this.preQuiz();
          break;
        case 'next':
          this.nextQuiz();
          break;
        case 'end':
          this.endQuiz();
          break;
        default:
          break;
      }
    },
    getQuiz(id) {
      return this.quizzes[id];
    },
    selectAnswer(e) {
      this.quizzes[this.current].answers.forEach(q => {
        if (q.value == e.target.value) {
          if (q.selected) this.answers[this.current] = null;
          q.selected = !(q.selected)
          if (q.selected) this.answers[this.current] = q.value;
        }
        else q.selected = false;
      })
    },
    nextQuiz() {
      if (this.current + 1 < this.quizzes.length) this.current++;
    },
    preQuiz() {
      if (this.current > 0) this.current--;
    },
    isSelected(q) {
      let s = 0;
      q.answers.forEach(i => { if (i.selected) s++ });
      return s > 0;
    },
    progressNow(){
      let cnt = 0;
      this.answers.forEach(i => {if(i != null) cnt++})
      let progress = (cnt / this.quizCnt) * 100;
      return progress;
    },
    endQuiz(){
      this.$emit('sessionEnd', true);
      this.$emit('userAnswers', this.answers);
    }
  },
}
</script>

<style></style>
