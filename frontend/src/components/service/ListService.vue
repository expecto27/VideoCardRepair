<template>
    <div class="price-list-container">
      <h4 class="price-list-title">Прайс-лист</h4>
      <div class="service-list">
        <div v-for="(service, index) in services" :key="index" class="service-item">
          <h5 class="service-name">{{ service.name }}</h5>
          <p class="service-description">{{ service.description }}</p>
          <p class="service-price">{{ service.price }} ₽</p>
          <button class="service-button">Открыть</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import http from "../../http-common";
  export default {
    name: "ListService",
    data() {
      return {
        services: []
      };
    },
    methods: {
      getServices() {
        http    
          .get("/services")
          .then(response => {
            console.log(response.data);
            this.services = response.data;
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.getServices();
    }
  };
  </script>
  
  <style scoped>
  .price-list-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .price-list-title {
    text-align: center;
    font-size: 32px;
    font-family: 'Arial', sans-serif;
    color: #333;
    margin-bottom: 20px;
  }
  
  .service-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    justify-items: center;
  }
  
  .service-item {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    text-align: center;
    width: 100%;
    max-width: 300px;
  }
  
  .service-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }
  
  .service-name {
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
    margin: 10px 0;
  }
  
  .service-description {
    font-size: 14px;
    color: #7f8c8d;
    margin: 10px 0;
  }
  
  .service-price {
    font-size: 18px;
    font-weight: bold;
    color: #e74c3c;
    margin: 10px 0;
  }
  
  .service-button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .service-button:hover {
    background-color: #2980b9;
  }
  </style>
  