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
    <h3>menu</h3>
    <div class="menu">
        <router-link class="btn" to="/sidebar-vue/">
            <span class="material-icons">home</span>
            <span class="menu-text">início</span>
        </router-link>
        <router-link class="btn" to="/sidebar-vue/about">
            <span class="material-icons">account_circle</span>
            <span class="menu-text">sobre</span>
        </router-link>
        <router-link class="btn" to="/sidebar-vue/search">
            <span class="material-icons">search</span>
            <span class="menu-text">buscar</span>
        </router-link>
        <router-link class="btn" to="/sidebar-vue/email">
            <span class="material-icons">mail</span>
            <span class="menu-text">email</span>
        </router-link>
        <router-link class="btn" to="/sidebar-vue/contact">
            <span class="material-icons">call</span>
            <span class="menu-text">contato</span>
        </router-link>
    </div>
    <div class="flex-menu"></div>
    <div class="menu">
        <router-link class="btn" to="/sidebar-vue/settings">
            <span class="material-icons">settings</span>
            <span class="menu-text">configurações</span>
        </router-link>
    </div>
  </aside>

</template>


<script setup>

    import { ref } from 'vue';

    const  isExpanded = ref(localStorage.getItem('isExpanded') === 'true')

    const toggleMenu = () => {
        isExpanded.value = !isExpanded.value

        localStorage.setItem('isExpanded', isExpanded.value)
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

        .flex-menu {
            margin-block-start: 6rem;
        }

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

        h3 {
            text-transform: capitalize;
            font-size: 1.1rem;
            font-weight: 400;
            color: var(--light-color);
            margin-block-end: 1rem;
        }

        h3, .menu-text {
            transition: var(--transition);
            opacity: 0;
        }

        .menu {
            margin: 0 -1rem;

            .btn {
                display: flex;
                align-content: center;
                gap: .5rem;
                padding: .5rem 1rem;
                margin-block-end: 1rem;
                transition: var(--transition);

                .material-icons {
                    font-size: 1.5rem;
                    color: var(--light-color);
                    transition: var(--transition);
                }

                .menu-text {
                    color: var(--light-color);
                    text-transform: capitalize;
                }

                &:hover, &.router-link-exact-active {
                    background: var(--black-color);

                    .material-icons {
                        color: var(--primary-color);
                    }
                }

                &.router-link-exact-active {
                    border-right: 4px solid var(--primary-color);
                    border-bottom: 1px solid var(--primary-color);
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

            h3, .menu-text {
                opacity: 1;
            }

            
        }

        @media (max-width: 768px) {
            position: fixed;
            z-index: 999;
        }
    }

</style>