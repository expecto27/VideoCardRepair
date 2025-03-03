<template>
  <div class="container">
    <h2 class="title">Оставить отзыв</h2>
    <form @submit.prevent="submitReview" class="form-container">
      <div class="form-group">
        <label for="rating">Оценка:</label>
        <select v-model="review.rating" class="form-control" required>
          <option value="1">1 - Очень плохо</option>
          <option value="2">2 - Плохо</option>
          <option value="3">3 - Средне</option>
          <option value="4">4 - Хорошо</option>
          <option value="5">5 - Отлично</option>
        </select>
      </div>

      <div class="form-group">
        <label for="description">Комментарий:</label>
        <textarea v-model="review.description" id="description" class="form-control" required></textarea>
      </div>

      <button type="submit" class="btn">Отправить отзыв</button>
    </form>
  </div>
</template>

<script>
import http from "../../http-common";

export default {
  name: "AddReview",
  props: ['serviceId'],
  data() {
    return {
      review: {
        rating: null,
        description: '',
        user_id: null,
        service_id: null
      }
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    submitReview() {
      const reviewData = {
        rating: this.review.rating,
        description: this.review.description,
        user_id: this.currentUser.id, 
        service_id: this.getServiceId()
      };

      http.post('/addReview', reviewData)
        .then(response => {
          console.log('Отзыв успешно добавлен:', response.data);
          this.$router.push('/profile');
        })
        .catch(error => {
          console.error('Ошибка при добавлении отзыва:', error);
        });
    },
    getServiceId() {
      console.log("serviceId" + this.serviceId);
      return this.serviceId; 
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
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
