<script setup></script>

<template>
<div id="maindiv">
    <nav>
      <router-link to="/">Main</router-link> |
      <router-link to="/uk">uk</router-link> |
      <router-link to="/usa">usa</router-link> |
      <router-link to="/countries">countries</router-link> |
      <router-link to="/visaSelection">visaSelection</router-link> |
      <router-link to="/profile">profile</router-link> |
      <router-link to="/canada">canada</router-link> |
      <router-link to="/ireland">ireland</router-link> |
      <router-link to="/australia">australia</router-link> |
      <router-link to="/japan">japan</router-link> |
      <router-link to="/nz">nz</router-link> |
      <router-link to="/taiwan">taiwan</router-link> |
      <router-link to="/singapore">singapore</router-link> |
      <router-link to="/im">im</router-link> |
      <router-link to="/st">st</router-link> |
      <router-link to="/work">work</router-link> |
      <router-link to="/tour">tour</router-link> |
    </nav>


    <router-view />
  </div>
</template>

<style scoped>
#maindiv {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
