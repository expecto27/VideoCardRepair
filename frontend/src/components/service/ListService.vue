<template>
  <div class="price-list-container">
    <h4 class="price-list-title">Прайс-лист</h4>
    <div class="service-list">
      <div v-for="(service, index) in services" :key="index" class="service-item">
        <h5 class="service-name">{{ service.title }}</h5>
        <p class="service-description">{{ service.description }}</p>
        <p class="service-price">{{ service.price }} ₽</p>
        <router-link class="admin-button" v-if="currentUser.isAdmin == 1" :to="{name: 'edit-service', params: {id: service.id}}" ><button class="service-button">Редактировать</button></router-link>
        <router-link :to="{name: 'add-request', params: {id: service.id}}" ><button class="service-button">Открыть</button></router-link>
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
      services: [],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
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
    },
   
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
  font-family: 'Arial', sans-serif;
}

.price-list-title {
  text-align: center;
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 20px;
}

.service-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.service-item {
  background: #2c3338;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 20px;
  flex: 1 1 calc(25% - 20px);
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 250px;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

.service-name {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 10px;
}

.service-description {
  font-size: 1rem;
  color: #b0b0b0;
  margin-bottom: 15px;
  flex-grow: 1;
}

.service-price {
  font-size: 1.25rem;
  color: #ffcc00;
  font-weight: bold;
  margin-bottom: 15px;
}

.service-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  margin-top: auto;
}

.service-button:hover {
  background-color: #0056b3;
}

.admin-button{
  margin-bottom: 10px;
}
</style>