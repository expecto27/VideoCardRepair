<template>
  <div class="container profile-container">
    <header>
      <h3 class="profile-header">
        Профиль <strong>{{ currentUser.name }}</strong>
      </h3>
    </header>
    <div class="profile-details">
      <p><strong>Id:</strong> {{ currentUser.id }}</p>
      <p><strong>Логин:</strong> {{ currentUser.name }}</p>
    </div>

    <h4 v-if="requests.length" class="orders-title">Мои заказы</h4>
    <h4 v-else class="no-orders">У вас пока нет заказов :/</h4>

    <table v-if="requests.length" class="table">
      <thead>
        <tr>
          <th>Фото</th>
          <th>Видеокарта</th>
          <th>Услуга</th>
          <th>Дата создания</th>
          <th>Последняя дата изменения</th>
          <th>Статус</th>
          <th>Код сдачи</th>
          <th>Код получения</th>
          <th>Действия</th> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in requests" :key="request.id">
          <td>
            <img
              :src="getImageUrl(request.photo_path)"
              alt="Фото видеокарты"
              class="request-photo"
              @error="handleImageError($event)"
            />
          </td>
          <td>{{ request.card }}</td>
          <td>{{ request.title }}</td>
          <td>{{ request.createdAt }}</td>
          <td>{{ request.updatedAt }}</td>
          <td>{{ request.status }}</td>
          <td>{{ request.postamat_drop_code }}</td>
          <td>{{ request.postamat_pickup_code }}</td>
          <td>
            <router-link
              v-if="request.status === 'completed' && !hasReview(request.service_id)"
                :to="'/add-review/' + request.service_id" >
              <button class="btn btn-primary">Оставить отзыв</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "../../http-common";

export default {
  name: 'ProfileUser',
  data() {
    return {
      requests: [], 
      userReviews: [],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    getRequests() {
      const userId = this.currentUser.id;
      http
        .get(`requests/user/${userId}`)
        .then(response => {
          console.log(response.data);
          this.requests = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    getUserReviews() {
    const userId = this.currentUser.id;
    http.get(`/reviewUser/${userId}`)
      .then(response => {
        this.userReviews = response.data;
      })
      .catch(e => console.error(e));
    },
    getImageUrl(photoPath) {
      console.log(`http://109.206.241.53:3000/${photoPath}`);
      if (!photoPath) return '/default-placeholder.png';
      return `http://109.206.241.53:3000/${photoPath}`;
    },
    handleImageError(event) {
      event.target.src = '/default-placeholder.png';
    },
    hasReview(serviceId) {
      return this.userReviews.some(review => review.service_id === serviceId);
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    } else {
      this.getRequests(); 
      this.getUserReviews();
    }
  }
};
</script>

<style scoped>
.profile-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #fff;
  background-color: #202528;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.profile-header {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ffcc00;
}

.profile-details p {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.orders-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.no-orders {
  font-size: 1.8rem;
  color: #f5a623;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table th, .table td {
  padding: 12px 15px;
  text-align: left;
  border: 1px solid #333;
  color: #b0b0b0;
}

.table th {
  background-color: #1e2327;
  color: #ffcc00;
}

.table td {
  background-color: #2c3338;
  color: #ccc;
}

.table tr:hover {
  background-color: #2e353b;
}

.table button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.table button:hover {
  background-color: #0056b3;
}

.request-photo {
  max-width: 100px;
  max-height: 80px;
  border-radius: 6px;
  object-fit: cover;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
}
</style>
