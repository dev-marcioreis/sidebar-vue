<template>
  <div class="app">
    <sidebar />
    <router-view />
  </div>
</template>

<script setup>
  import Sidebar from './components/Sidebar.vue';
</script>

<style lang="scss">

    /*==========Google Fonts==========*/
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

    /*==========Reset==========*/
      *, *::before, *::after {
          margin: 0;
          padding: 0;
          border: 0;
          box-sizing: border-box;
          outline: none;
          text-decoration: none;
          list-style: none;
          appearance: none;
          font-family: 'Poppins', sans-serif;
      }

    /*==========Root==========*/
       :root {

        --primary-color: hsl(347, 100%, 71%);
        --dark-color: hsl(0, 0%, 13%);
        --black-color: hsl(0, 0%, 0%);
        --light-color: hsl(210, 40%, 96%);
        
        --sidebar-w: 300px;
        --transition: all 400ms ease-in-out;
        --shadow: 0px 1px 3px hsla(0, 0%, 0%, 0.5);
        --shadow-1: 0px 3px 6px hsla(0, 0%, 0%, 0.4);

       }

    

    /*==========Base==========*/
      body {
        background: var(--light-color);
      }

      button {
        background: none;
        cursor: pointer;
      }

      /*==========App==========*/
        .app {
          display: flex;
          
          main {
            flex: 1 1 0;
            padding: 2rem;

            @media (max-width: 768px) {
              padding-left: 6rem;
            }
          }

        }
    

</style>