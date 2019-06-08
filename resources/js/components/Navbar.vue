<template>
    <nav class="navbar">
        <div class="navbar__menu">
            <div class="navbar__item">
                <RouterLink class="button button--link" to="/" exact>
                    About Me
                </RouterLink>
            </div>
        </div>
        <div class="navbar__menu">
            <div class="navbar__item">
                <RouterLink class="button--link" to="/contact">
                    Contact
                </RouterLink>
            </div>
        </div>
        <div class="navbar__menu">
            <div class="navbar__item">
                <RouterLink class="button--link" to="/skill">
                    Skill
                </RouterLink>
            </div>
        </div>
        <!-- <div class="navbar__menu">
            <div class="navbar__item">
                <RouterLink class="button--link" to="/try">
                    Try
                </RouterLink>
                <Dropdown v-bind:label='label' :listItems="listItems"></Dropdown>
            </div>
        </div> -->
    </nav>
</template>
        

<script>
import Dropdown from './Dropdown.vue'
export default {
    components: {
        Dropdown
    },
    data() {
        return {
            label: 'Try',
            listItems: [
                'PWA',
                'AR/VR',
                'IoT'
            ]
        }
    }
}
</script>

<style>
.navbar {
    position: relative;
}
</style>
