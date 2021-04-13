<template>
  <div>
      <form>
        <input type="text" v-model="login" placeholder="Login">
        <input type="text" v-model="password" placeholder="Password">
        <button type="submit" v-on:click.prevent="connect" >SEND</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      login: '',
      password: ''
    }
  },
  methods:{
    connect: function(){
      
    }
  }

}
</script>

<style>

</style>