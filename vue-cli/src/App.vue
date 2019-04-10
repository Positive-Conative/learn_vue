<template>
  <div>
    <app-header></app-header>
    {{ str }}
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  data: function() {
    return {
      str: 'HI~!'
    }
  },
  components: {
    'app-header': AppHeader
  }
}
// new Vue({
//   data: {
//     str: 'hi'
//   }
// })
</script>

<style>

</style>