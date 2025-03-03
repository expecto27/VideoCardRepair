<template>
    <div class="home">
      <div class="content-container">
        <div class="banner">
          <img src="@/assets/gpu.png" alt="GPU" class="banner-image" />
          <transition name="fade" mode="out-in">
            <p :key="currentMessage" class="animated-text">{{ currentMessage }}</p>
          </transition>
        </div>
        <div class="experience">
          <div class="experience-content">
            <form name="form" @submit="handleLogin">
                <div class="form-group">
                  <input type="text" class="form-control" name="name" placeholder="Логин" v-model="user.name" required />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" name="password" placeholder="Пароль" v-model="user.password" required />
                </div>
                <div class="form-group">
                  <button class="button">Войти</button>
                </div>
              <div class="form-group">
                <router-link to="/register" class="login-link">Зарегистрироваться</router-link>
              </div>
              <div class="form-group">
                <div v-if="message" class="alert alert-success" role="alert">{{ message }}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginUser',
    data() {
        return {
            user: {
                name: "",
                password: ""
            },
            loading: false,
            message: '',
        messages: [
          'Лучший сервис по ремонту видеокарт!',
          'Ваши GPU в надёжных руках!',
          'Качество и надёжность - наш приоритет!',
          'Мы оживляем ваши видеокарты!'
        ],
        currentMessageIndex: 0
            };
        },
        computed: { 
            loggedIn() {
                return this.$store.state.auth.status.loggedIn; 
            },
            currentMessage() {
                return this.messages[this.currentMessageIndex];
            }
        },
        created() {
            if (this.loggedIn) {
                window.location.href = '/';
            }
        },
    mounted() {
      this.startMessageRotation();
    },
    methods: {
      startMessageRotation() {
        setInterval(() => {
          this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
        }, 3000);
      },
      handleLogin(e) {
        e.preventDefault();
        this.loading = true;
        this.$store.dispatch("auth/login", this.user) 
            .then(() => {
                window.location.href = '/'; 
            })
            .catch( e =>{
                    this.loading = false;
                    this.message = e.response.data.message;
                }
            );
        }
    }
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #1e2327;
  }
  
  .content-container {
    display: flex;
    width: 80%;
    max-width: 1000px;
    gap: 40px;
    align-items: stretch;
  }
  
  .banner, .experience {
    flex: 1;
    background: #2c3338;
    border-radius: 10px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    position: relative;
  }
  
  .banner-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
  }
  
  .animated-text {
    max-width: 80%;
    animation: fadeIn 1s ease-in-out;
    position: relative;
    z-index: 1;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .experience-title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #ffffff;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
  
  .form-control {
    width: 80%;
    max-width: 300px;
    padding: 12px;
    border-radius: 8px;
    background: #1e2327;
    color: #ffffff;
    border: 2px solid #ddd;
  }
  
  .button {
    width: 80%;
    max-width: 300px;
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }
  
  .login-link {
    display: block;
    text-align: center;
    color: #007bff;
  }
  </style>