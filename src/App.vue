<template>
  <div id="app">
    <Usuarios/>
  </div>
</template>

<script>
import Usuarios from '../src/pages/Usuarios'
export default {
  name: 'App',
  components: {
    Usuarios
  }
}
</script>

<style lang="sass">
  body, html
    background-color: #fafafa
</style>