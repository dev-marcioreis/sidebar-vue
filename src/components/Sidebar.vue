<template>
  <aside :class="`${isExpanded ? 'isExpanded' : ''}`">
    <div class="logo">
        <img src="../assets/logo.png" alt="Logo">
    </div>
    <div class="menu-wrap">
        <button class="menu-toggle" @click="toggleMenu">
            <span class="material-icons">
                keyboard_double_arrow_right
            </span>
        </button>
    </div>
  </aside>
</template>


<script setup>

    import { ref } from 'vue';

    const  isExpanded = ref(false)

    const toggleMenu = () => {
        isExpanded.value = !isExpanded.value
    }

</script>



<style lang="scss" scoped>

    aside {
        display: flex;
        flex-direction: column;
        width: calc(2rem + 32px);
        min-height: 100vh;
        background: var(--dark-color);
        color: var(--light-color);
        padding: 1rem;
        overflow: hidden;
        transition: var(--transition);
        box-shadow: var(--shadow-1);

        .logo {
            margin-block-end: 1rem;

            img {
                width: 2rem;
                filter: invert(1);
            }
        }

        .menu-wrap {
            position: relative;
            top: 0;
            display: flex;
            justify-content: flex-end;
            margin-block-end: 1rem;
            transition: var(--transition);

            .menu-toggle {
                transition: var(--transition);

                .material-icons {
                    font-size: 2rem;
                    color: var(--light-color);
                    transition: var(--transition);
                }

                &:hover {

                    .material-icons {
                        color: var(--primary-color);
                        transform: translateX(.5rem);
                    }
                }
            }
        }

        &.isExpanded {
            width: var(--sidebar-w);

            .menu-wrap {
                top: -3.5rem;

                .menu-toggle {
                    transform: rotate(180deg);
                }
            }
        }

        @media (max-width: 768px) {
            position: fixed;
            z-index: 999;
        }
    }

</style>