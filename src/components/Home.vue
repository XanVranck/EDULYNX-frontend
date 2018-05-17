<template>
    <md-content>
        <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                    <div class="md-title">Card with hover effect</div>
                    <div class="md-subhead">It also have a ripple</div>
                </md-card-header>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
                </md-card-content>

                <md-card-actions>
                    <md-button>Action</md-button>
                    <md-button>Action</md-button>
                </md-card-actions>
            </md-ripple>
        </md-card>

        <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                    <div class="md-title">Card with hover effect</div>
                    <div class="md-subhead">It also have a ripple</div>
                </md-card-header>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
                </md-card-content>

                <md-card-actions>
                    <md-button>Action</md-button>
                    <md-button>Action</md-button>
                </md-card-actions>
            </md-ripple>
        </md-card>
    </md-content>
</template>

<script>
    export default {
        name: 'Home'
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