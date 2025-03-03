<template>
    <div class="container">
      <h2 class="title">Создать заявку на ремонт</h2>
      <form @submit.prevent="submitRequest" class="form-container">
        <div class="form-group">
          <label for="service">Выберите услугу:</label>
          <select v-model="request.service_id" class="form-control" required>
            <option v-for="service in services" :key="service.id" :value="service.id">
              {{ service.title }}
            </option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="gpu">Выберите видеокарту:</label>
          <select v-model="request.gpu_id" class="form-control" required>
            <option v-for="gpu in gpus" :key="gpu.id" :value="gpu.id">
              {{ gpu.name }}
            </option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="postamat">Выберите постамат:</label>
          <select v-model="request.postamat_id" class="form-control" required>
            <option v-for="postamat in postamats" :key="postamat.id" :value="postamat.id">
              {{ postamat.address }}
            </option>
          </select>
        </div>
  
        <div v-if="request.service_id && getPrice()" class="form-group">
          <p><strong>Стоимость услуги:</strong> {{ formattedPrice }}</p>
        </div>
  
        <button type="submit" class="btn">Создать заявку</button>
      </form>
    </div>
  </template>
  
  <script>
  import http from "../../http-common";
  export default {
    name: "AddRequest",
    props: ['id'],
    data() {
      return {
        request: {
          service_id: this.id,
          postamat_id: null,
          gpu_id: null,
          price: null
        },
        services: [],
        postamats: [],
        gpus: [],
      };
    },
    computed: {
      formattedPrice() {
        const price = this.getPrice();
        if (price !== null) {
          return price.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB"
          });
        }
        return null;
      },
      currentUser() {
            return this.$store.state.auth.user;
       }
    },
    methods: {
      loadData() {
        this.getServices();
        this.getGpus();
        this.getPostamats();
      },
      getServices() {
        http.get("/services")
          .then(response => {
            this.services = response.data;
          })
          .catch(e => {
            console.log(e);
          });
      },
      getGpus() {
        http.get("/gpus")
          .then(response => {
            this.gpus = response.data;
          })
          .catch(e => {
            console.log(e);
          });
      },
      getPostamats() {
        http.get("/postamats")
          .then(response => {
            this.postamats = response.data;
          })
          .catch(e => {
            console.log(e);
          });
      },
      getPrice() {
        const service = this.services.find(service => service.id === this.request.service_id);
        return service ? service.price : null;
      },
      submitRequest() {
        const requestData = {
            service_id: this.request.service_id,
            gpu_id: this.request.gpu_id,
            postamat_id: this.request.postamat_id,
            user_id: this.currentUser.id, 
        };
        console.log(requestData);
         http.post('/addRequest', requestData)
            .then(response => {
                console.log('Заявка успешно создана:', response.data);
                this.$router.push({ name: 'profile-user' });
            })
            .catch(error => {
                console.error('Ошибка при создании заявки:', error);
            });
        }
    },
    mounted() {
      this.loadData();
    },
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
  