<template>
  <div id="edulynx">
    <edulynx-menu/>
  </div>
</template>

<script>
import edulynxMenu from './components/EDULYNX-Menu.vue'
import axios from "axios";


export default {
  name: 'edulynx',
  components: {
    edulynxMenu
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