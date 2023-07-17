<template>
  <div>
    <Plateau />
    <Challenges />
    <News />
    <PublicRelations />
    <Solutions />
    <OneVsOther />
    <PartnerLogos />
  </div>
</template>

<script setup>
import Plateau from '../components/Plateau.vue'
import Challenges from '../components/Challenges.vue'
import News from '../components/News.vue'
import PublicRelations from "../components/PublicRelations.vue";
import Solutions from '../components/Solutions.vue'
import OneVsOther from "../components/OneVsOther.vue";
import PartnerLogos from "../components/PartnerLogos.vue";
</script>

<script>
export default {
    name: "Landing",
    props: {
    },
    components: {
    }
}
</script>

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
