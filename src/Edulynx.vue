<template>
  <div id="edulynx">
    <edulynxmenu/>
  </div>
</template>

<script>
import edulynxmenu from './components/Menu.vue'
import axios from "axios";

export default {
  name: 'edulynx',
  components: {
    edulynxmenu
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