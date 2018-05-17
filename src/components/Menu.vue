<template>
    <div class="list">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <md-list>
        <md-list-item>
          <md-icon class="fa fa-home"></md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon class="fa fa-barcode"></md-icon>
          <span class="md-list-item-text">Items</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset">Book</md-list-item>
            <md-list-item class="md-inset">Movie</md-list-item>
            <md-list-item class="md-inset">Link</md-list-item>
          </md-list>
        </md-list-item>
      </md-list>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
      return {}
    }
}
</script>

<style lang="scss" scoped>
  $list-width: 200px;

  .full-control {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

  .list {
    height: 100%;
    width: $list-width;
  }

  .full-control > .md-list {
    width: $list-width;
    background-color:#000;
    height: 100%;
    display: inline-block;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    vertical-align: top;
  }

  .control {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
</style>