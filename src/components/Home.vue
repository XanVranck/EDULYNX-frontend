<template>
<div id = "Home">
    <filter/>
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
import filter from './Filter.vue'

    export default {
        name: 'Home',
        components: {
            filter
        },
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
                    },
                    {
                        type: 'blogpost',
                        rating: 3.5,
                        title: 'Hard-coding is not a crime',
                        summary: 'Xan Vranckaert explains why hard-coding is always a good idea'
                    },
                    {
                        type: 'book',
                        rating: 5,
                        title: 'Williams diary',
                        summary: 'The Diary of William mia allegria potria vafia tralalia'
                    },
                    {
                        type: 'video',
                        rating: 2,
                        title: 'How to be on time by Bob Reyiers',
                        summary: 'Short video on how to never be late again'
                    },
                    {
                        type: 'article',
                        rating: 5,
                        title: 'How to work efficiently with foreigners',
                        summary: 'Article based on a team consistent of Italians and Portugese scum'
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