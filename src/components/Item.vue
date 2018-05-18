<template>
  <div>
    <itemDetail/>
    <comments/>
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>

<script>
import router from '../router/router.js'
import axios from "axios";
import comments from './Comments.vue'
import itemDetail from './itemDetail.vue'

export default {
  name: 'Item',
  components: {
    comments,
    itemDetail
  },
  data: () => ({
            router: router
        }),
  created() {
    this.id = this.router.currentRoute.params;
    axios.get('http://HI75840:8080/items/' + this.id, {headers: {"Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json'}}).then(result => {
                this.item = result.data;
            }, error => {
                alert(error);
            });
            return this.item;
  },
}
</script>