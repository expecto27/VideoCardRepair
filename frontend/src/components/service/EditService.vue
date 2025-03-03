<template>
    <div class="container">
      <h2 class="title">Редактировать услугу</h2>
      <form @submit.prevent="submitService" class="form-container">
        <div class="form-group">
          <label for="title">Название услуги:</label>
          <input v-model="service.title" type="text" id="title" class="form-control" required />
        </div>
  
        <div class="form-group">
          <label for="description">Описание:</label>
          <textarea v-model="service.description" id="description" class="form-control"></textarea>
        </div>
  
        <div class="form-group">
          <label for="price">Цена:</label>
          <input v-model="service.price" type="number" id="price" class="form-control" required />
        </div>
  
        <button type="submit" class="btn">Обновить услугу</button>
      </form>
    </div>
  </template>
  
  <script>
  import http from "../../http-common";
  
  export default {
    name: "EditService",
    props: ['id'],
    data() {
      return {
        service: {
          id: null,
          title: '',
          description: '',
          price: null,
          estimated_time: null,
        },
      };
    },
    methods: {
      loadService() {
        http.get(`/service/${this.id}`)
          .then(response => {
            this.service = response.data;
          })
          .catch(error => {
            console.error('Ошибка при загрузке данных услуги:', error);
          });
      },
      submitService() {
        http.post(`/updateService/${this.id}`, this.service)
          .then(response => {
            console.log('Услуга успешно обновлена:', response.data);
            this.$router.push({ name: 'services' });
          })
          .catch(error => {
            console.error('Ошибка при обновлении услуги:', error);
          });
      }
    },
    mounted() {
      this.loadService();
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background: #2c3338;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    color: #ffffff;
    font-family: 'Arial', sans-serif;
  }
  
  .title {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .form-control {
    padding: 10px;
    border: 1px solid #444;
    border-radius: 5px;
    background: #3a4147;
    color: #ffffff;
  }
  
  .btn {
    padding: 10px;
    background: #ffc107;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s;
  }
  
  .btn:hover {
    background: #e0a800;
  }
  </style>
  