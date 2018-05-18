<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <md-toolbar>
      <router-link to="/home">
        <md-icon class="fa fa-home"></md-icon>
      </router-link>
      <h3 class="md-title title">EDULYNX</h3>
    </md-toolbar>
  </div>
</template>

<style lang="scss" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }

  .title {
      padding-left: 43%;
}
</style>

<script>
export default {
  name: 'Toolbar'
}
</script>