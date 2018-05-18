<template>
  <div>
    <md-radio v-model="searchOn" value="title">Title</md-radio>
    <md-radio v-model="searchOn" value="tag">Tags</md-radio>
    <input type="text" class="search-wrapper" placeholder="search..."/>
  </div>
</template>

<script>
    export default {
        name: 'FilterBar',
        data: () => ({
            searchOn: "title"
        })
    }
</script>
