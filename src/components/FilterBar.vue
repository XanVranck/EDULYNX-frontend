<template>
  <div>
    <md-radio v-model="seachOn" value="title">Title</md-radio>
    <md-radio v-model="seachOn" value="tags">Tags</md-radio>
  </div>
</template>

<script>
    export default {
        name: 'FilterBar',
        data: () => ({
            seachOn: "title"
        })
    }
</script>
