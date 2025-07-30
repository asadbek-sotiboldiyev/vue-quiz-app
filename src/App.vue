
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <!-- Site Name (Left Side) -->
        <RouterLink class="navbar-brand fw-bold" to="/">QuizApp</RouterLink>

        <!-- Mobile Toggle Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Links (Right Side) -->
        <!-- <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
        </div> -->
      </div>
    </nav>
    <div class="container mt-4">
      <RouterView />
    </div>

  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
}
</script>

<style scoped>
header,
header a {
  margin-top: 10px;
  padding: 5px 20px;
  border-radius: 7px;
  width: 100%;
  background-color: var(--green);
  color: black;
}
</style>
