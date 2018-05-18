<template>
    <div>
        <filterBar/>
        <add-item-dialog/>
        <md-layout v-for="item in items" :key="item.id">
            <router-link v-bind:to="{name : 'Item', params: {id: item.id}}">
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

                        <star-rating style="float:right;margin-right:10px;margin-bottom:10px" :rating="calculateRating(item.beoordelingen)" :star-size="20" :read-only="true" :increment="0.5"></star-rating>
                    </md-ripple>
                </md-card>
            </router-link>
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
        methods: {
            calculateRating: function (beoordelingen) {
                this.sum = 0;
                this.amount = 0;
                beoordelingen.forEach(beoordeling => {
                    this.sum += beoordeling.rating
                    this.amount += 1;
                })
                if(this.amount === 0){
                    return 0
                } else {
                    return this.sum / this.amount;
                }

            }
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
                items: [],
                sum: Number,
                amount: Number
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