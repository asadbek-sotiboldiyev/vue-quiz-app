<template>
  <div class="container">
    <div class="quiz-container" id="quiz">
      <div class="progress">
        <div class="progress-bar progress-bar-striped"
          role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0"
          :style="{width: progressNow() + '%'}"
          :class="(progressNow() == 100 ? 'bg-success' : '')"
          aria-valuemax="100"></div>
      </div>

      <div class="quiz-header" id="question-container">
        <p class="question">{{ current + 1 }} | {{ getQuiz(current).question }}</p>
      </div>

      <div class="options" id="options">
        <button v-for="answer in getQuiz(current).answers" :key="answer.value" class="option"
          :class="(answer.selected ? 'selected' : '')" :value=answer.value @click="selectAnswer">{{ answer.title }}
        </button>
      </div>

      <div class="quiz-footer">
        <button @click="prevQuiz" class="btn btn-primary" id="next-btn" :disabled="current <= 0">Prev</button>
        <button
          @click="nextQuiz"
          class="btn btn-primary" id="next-btn"
          :disabled="current == quizCnt">
          {{ (current+1 < quizCnt ? 'Next' : 'Submit') }} </button>
      </div>


      <hr>

      <button v-for="i in quizzes.length" :key="i" @click="() => { current = i - 1 }"
        :class="[(isSelected(getQuiz(i - 1)) ? 'selected' : ''), (current == i - 1 ? 'current' : '')]"
        class="list-item">{{ i }}
      </button>

    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
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
      answers: Array(5).fill(null),
      current: 0,
    }
  },
  methods: {
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
    nextQuiz(e) {
      if (this.current + 1 < this.quizzes.length) this.current++;
    },
    prevQuiz(e) {
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
    }
  }
}
</script>

<style>
.btn-ans,
.list-item {
  border: none;
}

.list-item {
  border: 2px solid white;
  border-radius: 2px;
  margin: 2px;
  padding: 2px 15px;
  font-size: 20px;
}
</style>
