<template>
  <div id="app">
    <div>
      <span> Selecione um host: </span>
      <select v-model="selected" @change="filteredUsers(selected)">
        <option :value="host.value" v-for="host in this.hosts" :key="host.name">{{host.name}}</option>
      </select>  
    </div>

    <Usuarios :users='this.usersFiltered'/>
  </div>
</template>

<script>
import Usuarios from './components/Usuarios.vue'
import axios from 'axios';

export default {
  name: 'app',
  mounted () {
    this.carregarUsuarios();
  },
  data: function () {
    return {
      hosts: [
        {
        name: '',
        value: ''
      },
      {
        name: '.org',
        value: '.org'
      },
      {
        name: '.net',
        value: '.net'
      },
      {
        name: '.biz',
        value: '.biz'
      },
      {
        name: '.info',
        value: '.info'
      }
    ],
      users: [],
      usersFiltered: [],
      selected: '',
    }
  },
  methods: {
    carregarUsuarios(){
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
    Usuarios
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
