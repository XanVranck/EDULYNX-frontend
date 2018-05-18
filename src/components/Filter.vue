<template>

  <div>
      <p>Gilliam</p>
    <md-radio v-model="searchOn" value="title">Title</md-radio>
    <md-radio v-model="searchOn" value="tag">Tag</md-radio>
    <small>Model value: {{ searchOn }}</small>
  </div>
</template>

<script>
  export default {
    name: 'Filter',
    data: () => ({
      searchOn: "title"
    })
  }
</script>
