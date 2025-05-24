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
            За годы работы мы восстановили работу тысячи видеокарт, устранив множество неисправностей. 
            Наши специалисты работают с оборудованием любого уровня сложности, 
            обеспечивая высокое качество и надежность ремонта.
          </p>
          <div class="experience-stats">
            <div class="stat-item">
              <img src="@/assets/chip-icon.svg" alt="Chip" class="stat-icon" />
              <span class="stat-value">5000+</span>
              <span class="stat-label">Восстановили работу тысячи видеокарт</span>
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
        width="720"
        height="405"
        src="https://rutube.ru/play/embed/52d72094e2e658c32a363ad7feefbd90"
        frameBorder="0"
        allow="clipboard-write; autoplay"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
      ></iframe>
    
      </div>
    </div>

    <div class="documentation">
      <h2 class="documentation-title">Документация сервисного центра</h2>
      <div class="documentation-content">
        <div class="documentation-text">
          <p>Наш сервисный центр CYBER MASTER работает в строгом соответствии с профессиональными стандартами и нормативной документацией:</p>
          
          <div class="documentation-list">
            <div class="documentation-item">
              <img src="@/assets/document-icon.svg" alt="Документ" class="document-icon" />
              <span>Руководства пользователя на устройства</span>
            </div>
            <div class="documentation-item">
              <img src="@/assets/document-icon.svg" alt="Документ" class="document-icon" />
              <span>Технические паспорта на оборудование</span>
            </div>
            <div class="documentation-item">
              <img src="@/assets/document-icon.svg" alt="Документ" class="document-icon" />
              <span>Стандарты и законодательные акты по безопасности</span>
            </div>
            <div class="documentation-item">
              <img src="@/assets/document-icon.svg" alt="Документ" class="document-icon" />
              <span>Инструкции по ремонту и обслуживанию от производителей</span>
            </div>
            <div class="documentation-item">
              <img src="@/assets/document-icon.svg" alt="Документ" class="document-icon" />
              <span>Журналы учета выполненных работ</span>
            </div>
            <div class="documentation-item">
              <img src="@/assets/document-icon.svg" alt="Документ" class="document-icon" />
              <span>Протоколы тестирования и диагностики</span>
            </div>
            <div class="documentation-item">
              <img src="@/assets/document-icon.svg" alt="Документ" class="document-icon" />
              <span>Договоры с клиентами на оказание услуг</span>
            </div>
          </div>

          <p class="additional-info">
            Мы также строго соблюдаем внутреннюю документацию, включая регламенты работы, бланки отчетности 
            и стандарты качества обслуживания. Все работы выполняются квалифицированными специалистами 
            с использованием профессионального оборудования.
          </p>
        </div>
      </div>
    </div>

    <div class="privacy-policy">
      <h2 class="privacy-title">Политика обработки персональных данных</h2>
      <div class="privacy-content">
        <p>Наш сервисный центр соблюдает законодательство о защите персональных данных. Вы можете ознакомиться с нашей политикой обработки данных:</p>
        
        <div class="document-card">
          <div class="document-info">
            <h3>Политика обработки персональных данных</h3>
            <p>PDF, 250 KB</p>
          </div>
          <a 
            href="/documents/privacy_policy.pdf" 
            download="Политика_обработки_персональных_данных_CyberMaster.pdf"
            class="download-button"
          >
            Скачать
          </a>
          <button @click="showPdfModal = true" class="view-button">
            Просмотреть
          </button>
        </div>
      </div>
    </div>

    <div v-if="showPdfModal" class="pdf-modal" @click.self="showPdfModal = false">
    <div class="pdf-modal-content">
      <button @click="showPdfModal = false" class="close-button">
        &times;
      </button>
      <object
        v-if="showPdfModal"
        :data="pdfUrl + '#view=FitH'"
        type="application/pdf"
        class="pdf-viewer"
      >
        <p>Ваш браузер не поддерживает просмотр PDF. Вы можете <a :href="pdfUrl" download>скачать файл</a>.</p>
      </object>
    </div>
  </div>

  </div>
  </template>
  
  <script>
  export default {
    name: "MainPage",
    data() {
    return {
      showPdfModal: false,
      pdfUrl: "/documents/privacy_policy.pdf"
    };
  }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Benzin&family=Orbitron:wght@400;700&display=swap');
  /* Общие стили для всех блоков */

.privacy-policy {
  background: #2c3338;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 40px;
  margin-top: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.privacy-policy:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

.privacy-title {
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Orbitron', sans-serif;
  color: #ffffff;
  text-align: center;
}

.privacy-content {
  color: #ffffff;
  line-height: 1.6;
  text-align: center;
}

/* Стили для карточки документа */
.document-card {
  display: flex;
  align-items: center;
  background: #1e2327;
  border-radius: 8px;
  padding: 15px;
  margin: 20px auto;
  max-width: 600px;
  gap: 15px;
  flex-wrap: wrap;
}

.document-icon {
  width: 40px;
  height: 40px;
}

.document-info {
  flex: 1;
  text-align: left;
}

.document-info h3 {
  color: #ffffff;
  margin: 0 0 5px 0;
}

.document-info p {
  color: #8a8a8a;
  margin: 0;
  font-size: 0.9rem;
}

.download-button,
.view-button {
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.download-button {
  background: #2c3338;
  border: 1px solid #ffcc00;
  color: #ffcc00;
}

.view-button {
  background: #ffcc00;
  border: none;
  color: #000;
}

.download-button:hover {
  background: #ffcc00;
  color: #000;
}

.view-button:hover {
  background: #e6b800;
}

/* Стили для модального окна PDF */
.pdf-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pdf-modal-content {
  position: relative;
  width: 90%;
  height: 90%;
  background: #2c3338;
  border-radius: 10px;
  padding: 20px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff3333;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1.2rem
}

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

.documentation {
  background: #2c3338;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 40px;
  margin-top: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.documentation:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

.documentation-title {
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Orbitron', sans-serif;
  color: #ffffff;
  text-align: center;
}

.documentation-content {
  display: flex;
  gap: 30px;
  align-items: center;
}

.documentation-text {
  flex: 1;
  color: #ffffff;
  line-height: 1.6;
}

.documentation-image {
  flex: 1;
}

.documentation-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.documentation-list {
  margin: 20px 0;
}

.documentation-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  padding: 10px;
  background: rgba(30, 35, 39, 0.7);
  border-radius: 5px;
  transition: background 0.3s ease;
}

.documentation-item:hover {
  background: rgba(30, 35, 39, 1);
}

.document-icon {
  width: 24px;
  height: 24px;
  min-width: 24px;
}

.additional-info {
  margin-top: 25px;
  font-style: italic;
  color: #ffffff;
}

/* Адаптивность */
@media (max-width: 768px) {
  .documentation-content {
    flex-direction: column;
  }
  
  .documentation-image {
    order: -1;
    width: 100%;
    margin-bottom: 20px;
  }
}

  </style>