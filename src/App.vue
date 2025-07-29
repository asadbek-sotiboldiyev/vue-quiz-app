<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper"> 
      <HelloWorld msg="You did it!" />
      
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/link">Link</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
 -->
<template>
  <div>
    <header>
      <RouterLink to="/">QuizApp</RouterLink>
    </header>

    <RouterView />

</div>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
  
}
</script>


<style scoped>
  header, header a{
    margin-top: 10px;
    padding: 5px 20px;
    border-radius: 7px;
    width: 100%;
    background-color: var(--green);
    color: black;
  }

</style>