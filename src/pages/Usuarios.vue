<template>
  <div id="app">
    <div class="dropdown">
      <h3> 
        Selecione um host: 
        <select v-model="selected" @change="filteredUsers(selected)">
          <option :value="host.value" v-for="host in this.hosts" :key="host.value">{{host.value}}</option>
        </select>
      </h3>      
    </div>

    <Users class="users" :users='this.usersFiltered'/>
  </div>
</template>

<script>
import Users from '../components/Usuarios'
import axios from 'axios';

export default {
  name: 'app',
  mounted () {
    this.loadUsers();
  },
  data: function () {
    return {
      hosts: [
        {
        value: ''
      },
      {
        value: '.org'
      },
      {
        value: '.net'
      },
      {
        value: '.biz'
      },
      {
        value: '.info'
      }
    ],
      users: [],
      usersFiltered: [],
      selected: '',
    }
  },
  methods: {
    loadUsers(){
      axios.get("http://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.users = response.data
          this.usersFiltered = response.data       
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('error', error)
        })
    },
    filteredUsers(select){
      let usersFiltered = this.users.filter((user) => {    
        return user.email.includes(select)
      })
      this.usersFiltered = usersFiltered
    }  
  },  
  components: {
    Users
  },
}
</script>

<style scoped lang="sass">
#app
  font-family: 'Roboto', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale,
  .dropdown
    text-align: center
  .users
    text-align: center
    align-items: center
    dlex-direction: grid
    justify-content: center
    width: 80%
    margin-left: 10%
  h3
    font-size: 19px
    font-weight: 500
  select
    width: 100px
    height: 30px
    color: #fff
    border-radius: 5px
    overflow: hidden
    background: #696969
    border: 1px solid #ccc
</style>
