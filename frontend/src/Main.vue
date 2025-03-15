<template>
    <div class="home">
      <div class="banner">
        <img src="@/assets/gpu.png" alt="GPU" class="banner-image" />
        <div class="banner-content">
          <h1 class="banner-title">CYBER MASTER</h1>
          <router-link :to="{path: 'services'}"><button class="button banner-button">Записаться</button></router-link>
        </div>
      </div>
      <div class="experience">
        <h2 class="experience-title">Опыт сервисного центра<br>по работе с видеокартами</h2>
        <div class="experience-content">
          <p class="experience-description">
            Мы — команда <strong>CYBER MASTER</strong>, и у нас богатый опыт в ремонте и обслуживании видеокарт. 
            За годы работы мы починили тысячи видеокарт, устранив множество неисправностей. 
            Наши специалисты работают с оборудованием любого уровня сложности, 
            обеспечивая высокое качество и надежность ремонта.
          </p>
          <div class="experience-stats">
            <div class="stat-item">
              <img src="@/assets/chip-icon.svg" alt="Chip" class="stat-icon" />
              <span class="stat-value">5000+</span>
              <span class="stat-label">Починенных видеокарт</span>
            </div>
            <div class="stat-item">
              <img src="@/assets/tools-icon.svg" alt="Tools" class="stat-icon" />
              <span class="stat-value">10+</span>
              <span class="stat-label">Лет опыта</span>
            </div>
            <div class="stat-item">
              <img src="@/assets/customer-icon.svg" alt="Customer" class="stat-icon" />
              <span class="stat-value">95%</span>
              <span class="stat-label">Довольных клиентов</span>
            </div>
            <div class="stat-item">
              <img src="@/assets/postamat-icon.svg" alt="Postamat" class="stat-icon" />
              <span class="stat-value">5</span>
              <span class="stat-label">Удобных постаматов</span>
            </div>
            <div class="stat-item">
              <img src="@/assets/trophy-icon.svg" alt="Trophy" class="stat-icon" />
              <span class="stat-value">№1</span>
              <span class="stat-label">В городе</span>
            </div>
          </div>
        </div>
      </div>
  
      <div class="how-it-works">
      <h2 class="how-it-works-title">Как это работает</h2>
      <div class="steps">
        <div class="step">
          <h3 class="step-title">1. Снимите видеокарту</h3>
          <p class="step-description">
            Выключите компьютер, отключите питание и аккуратно извлеките видеокарту.
          </p>
        </div>
        <div class="step">
          <h3 class="step-title">2. Доставьте её в сервис</h3>
          <p class="step-description">
            Отправьте видеокарту в наш сервис через постамат или принесите лично.
          </p>
        </div>
        <div class="step">
          <h3 class="step-title">3. Дождитесь ремонта</h3>
          <p class="step-description">
            Наши специалисты проведут диагностику и устранят неисправность.
          </p>
        </div>
        <div class="step">
          <h3 class="step-title">4. Заберите видеокарту</h3>
          <p class="step-description">
            Как только ремонт будет завершён, получите уведомление и заберите устройство.
          </p>
        </div>
      </div>
      <div class="video-tutorial">
        <h3 class="video-title">Как правильно снять видеокарту</h3>
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/MCgUstUWFsg" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "MainPage"
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Benzin&family=Orbitron:wght@400;700&display=swap');
  /* Общие стили для всех блоков */
.banner,
.experience,
.how-it-works,
.stat-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 30px;
}

/* Эффект поднятия для всех блоков */
.banner:hover,
.experience:hover,
.how-it-works:hover,
.stat-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

/* Стили для баннера */
.banner {
  position: relative;
  width: 100%;
  height: 400px;
  background: #2c3338;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.banner-content {
  position: relative;
  z-index: 1;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
}

.banner-title {
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Benzin', sans-serif;
}

.banner-button {
  align-self: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
}

/* Стили для блока "Опыт" */
.experience {
  background: #2c3338;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 40px;
  margin-top: 20px;
}

.experience-title {
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Orbitron', sans-serif;
  color: #ffffff;
}

.experience-content {
  text-align: left;
  margin-bottom: 30px;
}

.experience-description {
  font-size: 1.1rem;
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 30px;
}

.experience-stats {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1e2327;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  flex: 1 1 calc(20% - 20px);
  min-width: 150px;
  box-sizing: border-box;
}

.stat-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffcc00;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 1rem;
  color: #b0b0b0;
  text-align: center;
}

/* Стили для блока "Как это работает" */
.how-it-works {
  background: #2c3338;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 40px;
  margin-top: 20px;
}

.how-it-works-title {
  font-size: 2rem;
  margin-bottom: 30px;
  font-family: 'Orbitron', sans-serif;
  color: #ffffff;
}
.steps {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.step {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
}

.step-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-icon img {
  width: 100%;
  height: 100%;
}

.step-content {
  text-align: left;
}

.step-title {
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 10px;
}

.step-description {
  font-size: 1rem;
  color: #b0b0b0;
  line-height: 1.5;
}

.step-arrow {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-tutorial {
  margin-top: 30px;
  text-align: center;
}

.video-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #ffffff;
}

.step-arrow img {
  width: 30px;
  height: 30px;
}

/* Стили для кнопок */
.button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}
  </style>