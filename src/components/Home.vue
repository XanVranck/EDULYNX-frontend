<template>
    <div>
        <filterBar/>
        <add-item-dialog/>
        <md-layout v-for="item in items" :key="item.id">
            <md-card md-with-hover>
                <md-ripple>
                    <md-card-header>
                        <div class="md-title">{{item.naam}}</div>
                    </md-card-header>

                    <md-card-content>
                        <span style="font-weight:bold">Omschrijving: </span> {{item.omschrijving}} <br/>
                        <span style="font-weight:bold">Level: </span>{{item.niveau}} <br/>
                        <span style="font-weight:bold">Type: </span>{{item.type}} <br/>
                    </md-card-content>

                    <star-rating :rating="item.rating" :star-size="20" :read-only="true" :increment="0.5"></star-rating>

                    <md-card-actions>
                        <md-button>View</md-button>
                    </md-card-actions>
                </md-ripple>
            </md-card>
        </md-layout>
    </div>
</template>

<script>
import FilterBar from './FilterBar.vue'
import AddItemDialog from './AddItemDialog.vue'
import axios from "axios";

    export default {
        name: 'Home',
        components: {
            'filterBar': FilterBar,
            'add-item-dialog': AddItemDialog
        },
        created() {
            axios.get('http://HI75840:8080/items', {headers: {"Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json'}}).then(result => {
                this.items = result.data;
            }, error => {
                alert(error);
            });
            return this.items;
        },
        data () {
            return {
                items: []
            }
        }
    }

</script>

<style lang="scss" scoped>
    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }
</style>