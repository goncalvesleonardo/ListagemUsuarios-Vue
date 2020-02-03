<template>
  <div class="all">   
    <div class="card" v-for="(user, index) in users" :key="index">
      <div class="userData">
        <p>Nome: {{user.name}}</p>
        <p>Usuario: {{user.username}}</p>
        <p>E-mail: {{user.email}}</p>
        <p>Telefone: {{user.phone}}</p>
        <p>Site: {{user.website}}</p>
      </div>
      <div class="addressData">
        <p>Logradouro: {{user.address.street + '' + user.address.suite}}</p>
        <p>Cidade: {{user.address.city}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Users',
  props: ['users']
}
</script>

<style scoped lang="sass">
.card
  float: left
  min-width: 30%
  min-height: 30%
  margin: 10px 10px
  border-radius: 15px
  background: #eee
  color: #000
  text-align: left
  p
    margin: 4px
</style>
