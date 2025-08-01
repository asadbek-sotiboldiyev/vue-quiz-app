<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="p-5 mb-4 bg-light rounded-3 shadow-lg">
    <h1 class="mb-4">Welcome to QuizApp</h1>

    <RouterLink to="/quizzes" class="btn btn-info">Go to quizzes</RouterLink>
  </main>
</template>

<style scoped></style>
