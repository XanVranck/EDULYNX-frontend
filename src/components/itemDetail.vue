<template>
  <div>
    <md-field>
      <label></label>
      
    </md-field>

    <md-field :class="messageClass">
      <label></label>
    </md-field>

    <md-field :class="messageClass">
      <label>Textarea</label>
      <md-textarea v-model="textarea" required></md-textarea>

    </md-field>
  </div>
</template>

<script>
  export default {

  }
</script>