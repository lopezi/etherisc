<script setup>
import Header from './components/Header.vue'
import Plateau from './components/Plateau.vue'
import Challenges from './components/partials/Challenges.vue'
import News from './components/partials/News.vue'
import Solutions from './components/partials/Solutions.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Header />
    <Plateau />
    <Challenges />
    <News />
    <Solutions />
    <Footer />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
