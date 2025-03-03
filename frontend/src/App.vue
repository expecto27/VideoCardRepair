<template>
  <div id="app">
    <navbar/>
    <router-view />
  </div>
</template>

<script>
    import Navbar from './components/Navbar'

    export default {
        name: 'App',
        components: {
            Navbar: Navbar
        }
    }
</script>


<style>
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    margin-top: 100px;
    font-size: 24px;
    margin-left: 20%; /* Add left margin for better spacing */
    margin-right: 20%; /* Add right margin for better spacing */
  }

  .center-content{
    text-align: center;
  }

  html{
    background-color:#202528;
    color: grey; /* Добавьте цвет текста для читаемости */
    min-height: 100vh; /* Установите высоту равной 100% высоты видимой области (viewport) */
    padding: 20px; /* Добавьте отступы для контента */
  }
  .link{
    position: relative;
    color: grey;
    text-decoration: none
  }
  .link:hover{
    color: white;
    transition: all 500ms;
  }

  .link::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 1px;
    background: white;
  }

  .link::after {
    width: 0;
    transition: 0.3s;
    left: 50%;
    transform: translate(-50%);
  }
  .link:hover:after {
    width: 100%;
  }

  .links{
    display: flex;
    justify-content: space-between;
  }
</style>