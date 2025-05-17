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

      <div class="form-group">
        <label for="photo">Прикрепите фото:</label>
        <input 
          type="file" 
          id="photo" 
          ref="fileInput" 
          @change="handleFileUpload" 
          accept="image/*" 
          class="form-control"
          required
        >
      </div>

      <button type="submit" class="btn" :disabled="isLoading">
        {{ isLoading ? 'Отправка...' : 'Создать заявку' }}
      </button>
      
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
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
      file: null,
      isLoading: false,
      errorMessage: ''
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
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    async submitRequest() {
      if (!this.file) {
        this.errorMessage = 'Пожалуйста, прикрепите фото';
        return;
      }

      this.isLoading = true;
      this.errorMessage = '';

      try {
        const formData = new FormData();
        
        // Добавляем данные формы
        formData.append('user_id', this.currentUser.id);
        formData.append('service_id', this.request.service_id);
        formData.append('gpu_id', this.request.gpu_id);
        formData.append('postamat_id', this.request.postamat_id);
        
        // Добавляем файл
        formData.append('photo', this.file);

        // Отправляем единым запросом
        const response = await http.post('/addRequest', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log('Заявка успешно создана:', response.data);
        this.$router.push({ name: 'profile-user' });
        
      } catch (error) {
        console.error('Ошибка при создании заявки:', error);
        this.errorMessage = 'Произошла ошибка при создании заявки';
        
        if (error.response) {
          if (error.response.status === 413) {
            this.errorMessage = 'Размер файла слишком большой (максимум 5MB)';
          } else if (error.response.data && error.response.data.error) {
            this.errorMessage = error.response.data.error;
          }
        }
      } finally {
        this.isLoading = false;
      }
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

.btn:disabled {
  background: #cccccc;
  cursor: not-allowed;
}

.error-message {
  color: #ff6b6b;
  margin-top: 10px;
  text-align: center;
}
</style>