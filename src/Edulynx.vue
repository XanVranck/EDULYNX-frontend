<template>
    <div id="edulynx">
        <edulynxtoolbar/>
        <div class="flex-container">
            <div class="view-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import edulynxtoolbar from './components/Toolbar.vue'
    import router from './router/router.js'

    export default {
        name: 'edulynx',
        components: {
            edulynxtoolbar,
            router
        }
    }
</script>

<style scoped lang="scss">
    .flex-container {
        display: flex;
    }

    edulynxtoolbar {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 180px;
    }

    .view-content {
        flex: 1 0 500px;
        margin: 50px;
    }
</style>