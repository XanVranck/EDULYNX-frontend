<template>
    <div>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>Item</md-dialog-title>
            <md-dialog-actions>
                <md-button class="md-primary" @click="showDialog = false">Submit</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-button class="md-primary md-raised" @click="showDialog = true">Add Item</md-button>
    </div>
</template>

<script>
    export default {
        name: 'AddItemDialog',
        data: () => ({
            showDialog: false
        })
    }
</script>
