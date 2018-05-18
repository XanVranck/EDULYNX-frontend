<template>
    <div>
        <md-dialog :md-active.sync="showDialog" class="md-layout-item md-large-size-50">
            <!--<md-dialog-title>Item</md-dialog-title>-->

            <!--//**********************************//-->
            <form novalidate>
                <md-card >
                    <md-card-header>
                        <div class="md-title">Items</div>
                    </md-card-header>

                        <!--<div class="md-layout md-gutter">-->


                        <!--</div>-->
                    <div >
                        <md-field class="md-layout-item">
                            <label for="titel">Titel</label>
                            <md-input name="titel" id="titel" v-model="form.titel"/>
                        </md-field>
                    </div>
                    <div >
                        <md-field>
                            <label for="link">Link</label>
                            <md-input name="link" id="link" v-model="form.link"/>
                        </md-field>
                    </div>
                    <div >
                        <md-field>
                            <label for="omschrijving">Omschrijving</label>
                            <md-textarea name="omschrijving" id="omschrijving" v-model="form.omschrijving"/>
                        </md-field>
                    </div>
                            <div >
                                <md-field>
                                    <label>Type</label>
                                    <md-select name="item-type" id="item-type" v-model="form.itemType" md-dense>
                                        <md-option></md-option>
                                        <md-option value="Book">Boek</md-option>
                                        <md-option value="Video">Video</md-option>
                                        <md-option value="Artikel">Artikel</md-option>
                                    </md-select>
                                </md-field>
                            </div>

                            <div >
                                <md-field>
                                    <label for="tags">Tags</label>
                                    <md-input name="tags" id="tags" autocomplete="family-name" v-model="form.tags"/>
                                </md-field>
                            </div>
                    <md-card-actions>
                        <md-button type="submit" class="md-primary" @click="createUser()">Create item</md-button>
                    </md-card-actions>
                </md-card>
                <!--<md-progress-bar md-mode="indeterminate" v-if="sending"/>-->


                <!--<md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>-->
            </form>
            <!--//**************************//-->

            <!--<md-dialog-actions>-->
                <!--<md-button class="md-primary" @click="showDialog = false">Submit</md-button>-->
            <!--</md-dialog-actions>-->
        </md-dialog>
        <md-button class="md-primary md-raised" @click="showDialog = true">Add Item</md-button>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: 'AddItemDialog',
        data: () => ({
            showDialog: false,
            form: {
                titel: null,
                tags: null,
                omschrijving: null,
                link: null,
                itemType: null
            }
        }),
        methods: {
            createUser: function () {
                axios.post('http://HI75840:8080/items/add', this.form)
                    .then(result => {
                    this.items = result.data;
                }, error => {
                    alert(error);
                });
                this.showDialog = false
            }
        }
    }
</script>
