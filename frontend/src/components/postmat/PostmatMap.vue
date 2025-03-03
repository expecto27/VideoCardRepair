<template>
    <div class="postmats-container">
      <h4 class="postmats-title">Карта постаматов</h4>
      <div class="postmats-content">
        <!-- Карта -->
        <LMap :zoom="zoom" :center="center" style="height: 600px; width: 100%">
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LMarker
            v-for="postmat in postmats"
            :key="postmat.id"
            :lat-lng="[parseFloat(postmat.latitude), parseFloat(postmat.longitude)]"
            @click="openPostmat(postmat.id)"
          >
            <LPopup>
              <div>
                <h3>{{ postmat.address }}</h3>
                <p>Статус: {{ postmat.availability === 'active' ? 'Доступен' : 'Недоступен' }}</p>
              </div>
            </LPopup>
          </LMarker>
        </LMap>
  
        <div class="postmats-list">
          <div v-for="postmat in postmats" :key="postmat.id" class="postmats-item">
            <h5 class="postmats-name">{{ postmat.address }}</h5>
            <p class="postmats-status">
              Статус:
              <span :class="{'available': postmat.availability === 'active', 'unavailable': postmat.availability !== 'active'}">
                {{ postmat.availability === 'active' ? 'Доступен' : 'Недоступен' }}
              </span>
            </p>
            <p class="postmats-coordinates">
              Широта: {{ postmat.latitude }}, Долгота: {{ postmat.longitude }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
  import 'leaflet/dist/leaflet.css';
  import http from "../../http-common";
  
  const zoom = ref(11);
  const center = ref([54.5162, 36.2624]); // Калуга
  const postmats = ref([]); 
  
  const getPostmats = async () => {
    try {
      const response = await http.get("/postamats");
      postmats.value = response.data; 
    } catch (error) {
      console.error("Ошибка при получении постаматов:", error);
    }
  };
  
  const openPostmat = (id) => {
    console.log("Открыть постамат с ID:", id);
  };
  
  onMounted(() => {
    getPostmats();
  });
  </script>
  
  <style scoped>
  .postmats-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }

  
  
  .postmats-title {
    text-align: center;
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 20px;
  }
  
  .postmats-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .postmats-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .postmats-item {
    background: #2c3338;
    border-radius: 10px;
    padding: 15px;
    color: #ffffff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .postmats-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .postmats-name {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
  
  .postmats-status {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  .postmats-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.postmats-content .leaflet-container {
    border-radius: 10px; 
    overflow: hidden; 
}
  .postmats-status .available {
    color: #4caf50;
  }
  
  .postmats-status .unavailable {
    color: #f44336;
  }
  
  .postmats-coordinates {
    font-size: 0.9rem;
    color: #b0b0b0;
    margin-bottom: 10px;
  }
  
  .postmats-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  
  .postmats-button:hover {
    background-color: #0056b3;
  }
  </style>
  