<template>
  <div class="container">
    <ResultView v-if="sessionEnd"
      :userAnswers="userAnswers"
      :correctAnswers="correctAnswers"
      class="quiz-container"
    />
    <QuizFormView v-else
      :quizzes="quizzes"
      @sessionEnd="sessionEndHandler"
      @userAnswers="userAnswersHandler"
    />
  </div>
</template>


<script>
import ResultView from './ResultView.vue';
import QuizFormView from './QuizFormView.vue';

export default {
  components:{ ResultView, QuizFormView },
  data() {
    return {
      sessionEnd: false,
      quizCnt: 5,
      quizzes: [
        {
          id: 1,
          question: 'Solve: 5+4=?',
          answers: [
            { value: 'a', title: 1, selected: false },
            { value: 'b', title: 9, selected: false },
            { value: 'c', title: 7, selected: false },
            { value: 'd', title: 3, selected: false },
          ]
        },
        {
          id: 2,
          question: 'Solve: 8*5=?',
          answers: [
            { value: 'a', title: 13, selected: false },
            { value: 'b', title: 85, selected: false },
            { value: 'c', title: 58, selected: false },
            { value: 'd', title: 40, selected: false },
          ]
        },
        {
          id: 3,
          question: 'if a + b = 5 and a + 2b = 9, then solve the problem:\n 2a + b = ?',
          answers: [
            { value: 'a', title: 13, selected: false },
            { value: 'b', title: 14, selected: false },
            { value: 'c', title: 6, selected: false },
            { value: 'd', title: 7, selected: false },
          ]
        },
        {
          id: 4,
          question: '2x + 5 = 8; x=?',
          answers: [
            { value: 'a', title: 2, selected: false },
            { value: 'b', title: 1, selected: false },
            { value: 'c', title: 2.5, selected: false },
            { value: 'd', title: 1.5, selected: false },
          ]
        },
        {
          id: 5,
          question: 'Solve: 8*5=?',
          answers: [
            { value: 'a', title: 13, selected: false },
            { value: 'b', title: 85, selected: false },
            { value: 'c', title: 58, selected: false },
            { value: 'd', title: 40, selected: false },
          ]
        },
      ],
      userAnswers: null,
      correctAnswers: 'bdcdd',
    }
  },
  methods: {
    sessionEndHandler(x){
      this.sessionEnd = true;
    },
    userAnswersHandler(answers){
      this.userAnswers = answers;
    }
  }
}
</script>

<style></style>
