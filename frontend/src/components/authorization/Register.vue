<template>
    <div class="home">
      <div class="content-container">
        <div class="banner">
          <transition name="fade" mode="out-in">
            <p :key="currentMessage" class="animated-text">{{ currentMessage }}</p>
          </transition>
        </div>
        <div class="experience">
          <div class="experience-content">
            <form name="form" @submit="handleRegister">
              <div v-if="!successful">
                <div class="form-group">
                  <input type="text" class="form-control" name="name" placeholder="Имя" v-model="user.name" required />
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" placeholder="Почта" v-model="user.email" required />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="phone" placeholder="Телефон" v-model="user.phone" required />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" name="password" placeholder="Пароль" v-model="user.password" required />
                </div>
                <div class="form-group">
                  <button class="button">Зарегистрировать</button>
                </div>
              </div>
              <div class="form-group">
                <router-link to="/login" class="login-link">Войти</router-link>
              </div>
              <div class="form-group">
                <div v-if="successMessage" class="alert alert-success" role="alert">{{ successMessage }}</div>
              </div>
              <div class="form-group">
                <div v-if="errorMessage" class="alert alert-danger" role="alert">{{ errorMessage }}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterUser',
    data() {
      return {
        user: {
          name: '',
          password: '',
          email: '',
          phone: '',
        },
        successMessage: '',
        errorMessage: '',
        successful: false,
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
      currentMessage() {
        return this.messages[this.currentMessageIndex];
      },
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    mounted() {
      this.startMessageRotation();
      if (this.loggedIn) {
        window.location.href = '/';
    }
    },
    methods: {
      startMessageRotation() {
        setInterval(() => {
          this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
        }, 3000);
      },
      handleRegister(e) {
        e.preventDefault();
        this.successMessage = '';
        this.errorMessage = '';
        this.$store.dispatch("auth/register", this.user)
          .then(data => {
            this.successMessage = data.message;
            this.successful = true;
          })
          .catch(e => {
            this.errorMessage = e.response.data.message;
          });
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
  }
  
  .animated-text {
    max-width: 80%;
    animation: fadeIn 1s ease-in-out;
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
  