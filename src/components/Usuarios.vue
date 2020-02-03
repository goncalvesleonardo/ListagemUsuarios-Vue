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
  font-family: 'Roboto', sans-serif
  float: left
  min-height: 30%
  margin: 10px 10px
  border-radius: 5px
  background: #696969
  color: #fff
  text-align: left
  line-height: 20px
  padding: 10px
  font-size: 15px
  width: calc(33.3333% - 40px)
  box-shadow: 0 1px 8px rgba(0,0,0,0.2), 0 3px 4px rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12)
  @media screen and (max-width: 700px)
    width: 100%
    margin-left: 0
    margin-right: 0
  p
    margin: 4px
</style>
