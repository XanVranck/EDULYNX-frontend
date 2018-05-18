<template>
<div>
    <md-layout v-for="item in items" :key="item">
        <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                    <div class="md-title">{{item.title}}</div>
                </md-card-header>

                <md-card-content>
                    {{item.summary}}
                </md-card-content>

                <md-card-footer>
                    <star-rating :rating="item.rating" :star-size="20" :read-only="true" :increment="0.5"></star-rating>
                </md-card-footer>

                <md-card-actions>
                    <md-button>View</md-button>
                </md-card-actions>
            </md-ripple>
        </md-card>
    </md-layout>
</div>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {
                items: [
                    {
                        type: 'book',
                        rating: 1,
                        title: 'Wim is toch niet zo leuk',
                        summary: 'Dit boek gaat over het feit dat we dachten dat Wim leuk was, never have we been so wrong...'
                    },
                    {
                        type: 'video',
                        rating: 4,
                        title: 'Mattias home made video',
                        summary: 'Mattia temptation island edition.'
                    }
                ]
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