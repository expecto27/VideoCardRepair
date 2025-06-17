<template>
  <div class="admin-panel">
    <h2>Управление заказами</h2>

    <!-- Фильтры -->
    <div style="margin-bottom: 20px;">
      <label>
        Фильтр по статусу:
        <select v-model="filter.status">
          <option value="">Все</option>
          <option value="created">Создан</option>
          <option value="in_progress">В процессе</option>
          <option value="completed">Завершен</option>
          <option value="paid">Оплачен</option>
        </select>
      </label>
      <label style="margin-left: 20px;">
        Поиск по пользователю:
        <input type="text" v-model="filter.user" placeholder="Введите имя" />
      </label>
    </div>

    <table>
      <thead>
        <tr>
          <th>Пользователь</th>
          <th>Услуга</th>
          <th>Видеокарта</th>
          <th>Создание</th>
          <th>Изменение</th>
          <th>Статус</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in filteredRequests" :key="request.id">
          <td>{{ request.name }}</td>
          <td>{{ request.title }}</td>
          <td>{{ request.card }}</td>
          <td>{{ request.createdAt }}</td>
          <td>{{ request.updatedAt }}</td>
          <td>
            <select v-model="request.status" @change="updateRequest(request)">
              <option value="created">Создан</option>
              <option value="in_progress">В процессе</option>
              <option value="completed">Завершен</option>
              <option value="paid">Оплачен</option>
            </select>
          </td>
          <td>
            <button @click="deleteRequest(request.id)">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>

    <h2>Управление постаматами</h2>
    <table>
      <thead>
        <tr>
          <th>Адрес</th>
          <th>Широта</th>
          <th>Долгота</th>
          <th>Статус</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="postamat in postamats" :key="postamat.id">
          <td>{{ postamat.address }}</td>
          <td>{{ postamat.latitude }}</td>
          <td>{{ postamat.longitude }}</td>
          <td>
            <select v-model="postamat.availability" @change="updatePostamat(postamat)">
              <option value="active">Активен</option>
              <option value="inactive">Неактивен</option>
            </select>
          </td>
          <td>
            <button @click="deletePostamat(postamat.id)">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Добавить новый постамат</h3>
    <form @submit.prevent="addPostamat">
      <div>
        <label for="address">Адрес:</label>
        <input type="text" id="address" v-model="newPostamat.address" required />
      </div>
      <div>
        <label for="latitude">Широта:</label>
        <input type="number" id="latitude" v-model="newPostamat.latitude" required />
      </div>
      <div>
        <label for="longitude">Долгота:</label>
        <input type="number" id="longitude" v-model="newPostamat.longitude" required />
      </div>
      <div>
        <label for="availability">Статус:</label>
        <select id="availability" v-model="newPostamat.availability" required>
          <option value="active">Активен</option>
          <option value="inactive">Неактивен</option>
        </select>
      </div>
      <button type="submit">Добавить постамат</button>
    </form>
  </div>
</template>

<script>
import http from "../../http-common";

export default {
  name: "AdminRequests",
  data() {
    return {
      requests: [],
      postamats: [],
      filter: {
        status: '',
        user: ''
      },
      newPostamat: {
        address: '',
        latitude: null,
        longitude: null,
        availability: 'active'
      }
    };
  },
  computed: {
    filteredRequests() {
      return this.requests.filter(req => {
        const statusMatch = this.filter.status === '' || req.status === this.filter.status;
        const userMatch = this.filter.user === '' || req.name.toLowerCase().includes(this.filter.user.toLowerCase());
        return statusMatch && userMatch;
      });
    }
  },
  methods: {
    fetchRequests() {
      http.get("/requests")
        .then(response => {
          this.requests = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.error("Ошибка загрузки заказов:", error);
        });
    },
    updateRequest(request) {
      http.post(`/updateRequest/${request.id}`, {
        status: request.status,
        user_id: request.user_id,
        price: request.price
      })
        .then(() => {
          this.fetchRequests();
          console.log("Статус обновлен");
        })
        .catch(error => {
          console.error("Ошибка обновления заказа:", error);
        });
    },
    deleteRequest(id) {
      http.post(`/deleteRequest/${id}`)
        .then(() => {
          this.fetchRequests();
        })
        .catch(error => {
          console.error("Ошибка удаления заказа:", error);
        });
    },
    fetchPostamats() {
      http.get("/postamats")
        .then(response => {
          this.postamats = response.data;
        })
        .catch(error => {
          console.error("Ошибка загрузки постаматов:", error);
        });
    },
    updatePostamat(postamat) {
      http.post(`/updatePostamat/${postamat.id}`, {
        address: postamat.address,
        latitude: postamat.latitude,
        longitude: postamat.longitude,
        availability: postamat.availability
      })
        .then(() => {
          this.fetchPostamats();
          console.log("Статус постамата обновлен");
        })
        .catch(error => {
          console.error("Ошибка обновления постамата:", error);
        });
    },
    deletePostamat(id) {
      http.post(`/deletePostamat/${id}`)
        .then(() => {
          this.fetchPostamats();
        })
        .catch(error => {
          console.error("Ошибка удаления постамата:", error);
        });
    },
    addPostamat() {
      if (this.newPostamat.address && this.newPostamat.latitude && this.newPostamat.longitude) {
        http.post("/addPostamat", this.newPostamat)
          .then(() => {
            this.fetchPostamats();
            this.newPostamat = {
              address: '',
              latitude: null,
              longitude: null,
              availability: 'active'
            };
            console.log("Постамат добавлен");
          })
          .catch(error => {
            console.error("Ошибка добавления постамата:", error);
          });
      }
    }
  },
  mounted() {
    this.fetchRequests();
    this.fetchPostamats();
  }
};
</script>

<style scoped>
.admin-panel {
  width: 80%;
  margin: 40px auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #2c3338;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  color: #b0b0b0;
}
.admin-panel h2, .admin-panel h3 {
  font-size: 1.8rem;
  color: #ffffff;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #202528;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
th, td {
  padding: 12px 15px;
  text-align: left;
  border: 1px solid #333;
  color: #b0b0b0;
}
th {
  background-color: #1e2327;
  color: #ffcc00;
  font-weight: bold;
}
td {
  background-color: #2c3338;
  color: #ccc;
}
td select, td button {
  padding: 6px;
  background-color: #3e454b;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
}
td select:hover, td button:hover {
  background-color: #007bff;
}
button {
  background-color: #FF5733;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #C70039;
}
form {
  margin-top: 30px;
  text-align: left;
  display: grid;
  gap: 15px;
  max-width: 500px;
  margin: 20px auto;
}
form input, form select {
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #3e454b;
  color: #fff;
}
form input:focus, form select:focus {
  outline: none;
  border-color: #007bff;
}
form button {
  background-color: #28a745;
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}
form button:hover {
  background-color: #218838;
}
table tr:hover {
  background-color: #2e353b;
}
form input:focus {
  background-color: #4a565d;
}
</style>
