<script setup></script>

<template>
<div id="maindiv">
    <nav>
      <router-link to="/">Main</router-link> |
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
