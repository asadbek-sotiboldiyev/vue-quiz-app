<template>
  <div class="quiz-container" id="quiz">
    <ProgresBar :progressNow="progressNow()"/>

    <div class="quiz-header" id="question-container">
      <p class="question">{{ current + 1 }} | {{ getQuiz(current).question }}</p>
    </div>

    <div class="options" id="options">
      <AnswerOption v-for="option in getQuiz(current).answers" :key="option.value" @click="selectAnswer" :option="option" />
    </div>
      <PaginationButton :current="current" :quizCnt="quizCnt" @btn-clicked="paginationEventHandler"/>
    <hr>

    <QuizList :quizCnt="quizCnt" :current="current" :userAnswers="answers"/>
  </div>
</template>

<script>
import AnswerOption from '@/components/AnswerOption.vue';
import PaginationButton from '@/components/PaginationButton.vue';
import ProgresBar from '@/components/ProgresBar.vue';
import QuizList from '@/components/QuizList.vue';

export default {
  components: { AnswerOption, PaginationButton, ProgresBar, QuizList },
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
