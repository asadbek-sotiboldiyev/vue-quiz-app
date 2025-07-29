<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <h1>Welcome to QuizApp</h1>

    <RouterLink to="/quizzes" class="btn">Go to quizzes</RouterLink>
  </main>
</template>

<style scoped>

.btn{
  color: var(--green);
  font-size: 22px;
  cursor: pointer;
}
</style>
