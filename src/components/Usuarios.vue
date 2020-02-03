<template>
  <div>   
    <div class="card" v-for="(user, index) in users" :key="index">
      <p>Nome: {{user.name}}</p>
      <p>Usuario: {{user.username}}</p>
      <p>E-mail: {{user.email}}</p>
      <p>Telefone: {{user.phone}}</p>
      <p>Site: {{user.website}}</p>
      <p>Endereço: {{user.address.street}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Usuarios',
  props: ['users'],
  data () {
    return {      
      selected: '',
    }
  },
}
</script>

<style scoped lang="sass">
.card
  min-width: 20%
  min-height: 25%
  margin: 1%
  display: inline
  float: left
  border-radius: 15px
  background-color: #eee
  color: #000
  p
    margin: 5px  
</style>
