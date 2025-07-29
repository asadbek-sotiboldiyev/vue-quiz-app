<template>
    <div>
        <h1>{{ current + 1 }} | {{ getQuiz(current).question }}</h1>
        <button v-for="answer in getQuiz(current).answers" :key="answer.value" class="btn-ans" @click="selectAnswer"
            :class="(answer.selected ? 'selected' : '')" :value=answer.value>{{ answer.title }}
        </button>

        <button v-if="current > 0" @click="prevQuiz">Prev</button>
        <button @click="nextQuiz">{{ (current + 1 < quizzes.length ? 'Next' : 'Submit') }}</button>

        <hr>

        <button v-for="i in quizzes.length" :key="i" @click="() => { current = i - 1 }"
            :class="[(isSelected(getQuiz(i - 1)) ? 'selected' : ''), (current == i - 1 ? 'current' : '')]"
            class="list-item">{{ i }}
        </button>

    </div>
</template>


<script>
let quizCnt = 5;
export default {
    data() {
        return {
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
            answers: Array(quizCnt).fill(null),
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
        }
    }
}
</script>

<style>
.btn-ans,
.list-item {
    border: none;
}

.btn-ans {
    width: 100%;
    margin: 2px auto;
    padding: 5px;
    font-size: 20px;
    text-align: left;
    border-radius: 5px;
}

.list-item {
    border: 2px solid var(--color-background);
    border-radius: 2px;
    margin: 2px;
}

.selected {
    background-color: var(--green);
}

.current {
    border-color: grey
}
</style>