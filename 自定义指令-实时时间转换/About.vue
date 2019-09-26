<template>
  <div id="app" v-cloak>
    <div v-time="timeNow"></div>
    <div v-time="timeBefore"></div>
  </div>
</template>

<script>
import './vtime';
export default {
  data () {
    return {
      timeNow: new Date().getTime(),
      timeBefore: 19530694548
    }
  }
}
</script>

<style>
</style>
