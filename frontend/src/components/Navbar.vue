<template>
  <div id="app">
    <nav class="navbar">
      <h1 class="logo">CYBER MASTER</h1>
      <div class="nav-links">
        <router-link v-if="currentUser.isAdmin == 1" class="nav-link" to="/admin">Админ панель</router-link>
        <router-link class="nav-link" to="/mainPage">Главная</router-link>
        <router-link class="nav-link" to="/listService">Наши услуги</router-link>
        <router-link class="nav-link" to="/postmatMap">Карта постаматов</router-link>
        <router-link class="nav-link" to="/listReview">Отзывы</router-link>
        <div v-if="currentUser">
          <div v-if="currentUser" class="user-menu">
        <router-link class="nav-link" to="/profile">
          {{ currentUser.name }}
        </router-link>
        <a href class="nav-link" @click.prevent="logOut">
          Выйти
        </a>
      </div>
      </div>
      <div v-else>
        <router-link class="nav-link" to="/login">
          Войти
        </router-link>
      </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {};

    },
    computed: { 
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout'); 
            window.location.href = '/login'; 
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  background: #2c3338;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
}
.user-menu {
  display: flex;
  gap: 20px;
  align-items: center;
}
.navbar:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

.logo {
  font-size: 2.5rem;
  font-family: 'Orbitron', sans-serif;
  color: #ffffff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: #007bff;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-link:hover {
  color: #007bff;
  transform: scale(1.1);
}

.nav-link:hover {
  display: inline-block;
  animation: float 1.5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>