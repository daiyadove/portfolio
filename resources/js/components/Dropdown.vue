<template>
    <div>
        <div class='all-wrapper'>
            <div class='dropdown-wrapper' @click='isActive = !isActive'>
                <div class='dropdown-text'>
                    {{ label }}
                </div>
                <i class='el-icon-caret-bottom'></i>
            </div>
            <transition>
                <div class="list-items" v-if='isActive'>
                    <template>
                        <template v-for='(value, key) in listItems'>
                            <div class='list-item' :key=key>
                                {{ value }}
                            </div>
                        </template>
                    </template>
                </div>
            </transition>
        </div>
        <div class='dropdown-bg' @click='isActive = false' v-if='isActive'></div>
    </div>
</template>

<script>
export default {
    props: {
            label: {
                type: String,
                required: true,
            },
            listItems: {
                type: Array,
                required: true,
            }
    },
    data() {
        return {
            isActive: false,
        }
    }
}
</script>

<style>
/* .dropdown-bg {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
} */

/* .all-wrapper {
    position: absolute;
}
.all-wrapper {

    .dropdown-wrapper {
        color: #666666;

        display: flex;
        align-items: center;

        &:hover {
            cursor: pointer;
        }

        .dropdown-text {
            font-size: 14px;
        }

        i {
            font-size: 10px;
            margin-left: 6px;
        }
    }

    .list-items {
        width: 260px;
        max-height: 300px;
        background-color: #fff;
        border-radius: 2px;
        border: 1px solid #B9BFC9;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
        position: relative;
        right: 0;
        overflow-y: scroll;
        z-index: 13;
        padding: 0.5rem 0;

        .list-item {
            color: #333;
            font-size: 14px;
            line-height: 16px;
            padding: 0.75rem 1rem;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            position: relative;

            &:not(.active):hover {
                background-color: #F3F4F6;
                cursor: pointer;
            }

            &.active {
                color: #fff;
                background-color: #182A4B;
            }
        }
    }
} */

</style>