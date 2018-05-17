<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>{{helloWorld}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";


export default {
  name: 'app',
  data:function() {return {helloWorld: String}}, 
  components: {
    HelloWorld
  }, created() {
            axios({ method: "GET", "url": "http://localhost:8080/exploration-days-backend" }).then(result => {
                this.helloWorld = result.data;
            }, error => {
                console.error(error);
            });

            return this.helloWorld;
        },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
