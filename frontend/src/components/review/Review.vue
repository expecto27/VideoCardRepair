<template>
  <div class="reviews-container">
    <div class="banner">
      <img src="@/assets/gpur.jpg" alt="Banner" class="banner-image" />
    </div>

    <div class="reviews-content">
      <div class="review-stats">
        <h4>Статистика отзывов</h4>
        <div class="average-rating">
          <span class="average-value">{{ averageRating }}</span>
          <div class="stars">
            <img src="@/assets/star.svg" alt="star" v-for="n in 5" :key="n" class="star-icon" />
          </div>
        </div>
        <div class="rating-distribution">
          <div v-for="rating in ratingsCount" :key="rating.rating" class="rating-item">
            <div class="rating-text">
              <span>{{ rating.rating }} звезды</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar">
                <div class="progress" :style="{ width: (rating.count / reviews.length) * 100 + '%' }"></div>
              </div>
            </div>
            <span class="rating-count">{{ rating.count }}</span>
          </div>
        </div>
      </div>

      <div class="reviews-list">
        <h4 class="reviews-title">Про нас пишут</h4>
        <div v-for="(review, index) in reviews" :key="index" class="review-item">
          <div class="review-header">
            <span class="review-name">{{ review.name }}</span>
            <div class="review-rating">
              <img src="@/assets/star.svg" alt="star" v-for="n in review.rating" :key="n" class="star-icon" />
            </div>
          </div>
          <p class="review-description">{{ review.opinion }}</p>
          <p class="review-order"><strong>Заказ:</strong> {{ review.title }}</p>
          <p class="review-date"><small><strong>Дата создания:</strong> {{ review.created_at }}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

  
  <script>
  import http from "../../http-common";
  
  export default {
    name: "ReviewPage",
    data() {
      return {
        reviews: [],
        ratingsCount: [
          { rating: 5, count: 0 },
          { rating: 4, count: 0 },
          { rating: 3, count: 0 },
          { rating: 2, count: 0 },
          { rating: 1, count: 0 },
        ]
      };
    },
    computed: {
      averageRating() {
        const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
        return (totalRating / this.reviews.length).toFixed(2);
      }
    },
    methods: {
      fetchReviews() {
        http
          .get("/reviews")
          .then(response => {
            this.reviews = response.data;
            this.calculateRatingsCount();
          })
          .catch(e => {
            console.log(e);
          });
      },
      calculateRatingsCount() {
        this.ratingsCount.forEach(rating => {
          rating.count = this.reviews.filter(review => review.rating === rating.rating).length;
        });
      }
    },
    mounted() {
      this.fetchReviews();
    }
  };
  </script>
  
  <style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.banner {
  width: 100%;
  height: 40vh;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  margin-bottom: 20px;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.reviews-container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  font-family: 'Arial', sans-serif;
}

.reviews-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}

.review-stats {
  background: #2c3338;
  border-radius: 10px;
  padding: 20px;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 20px;
  align-self: flex-start;
  height: fit-content;
  display: flex;
  flex-direction: column;
}

.average-rating {
  text-align: center;
  margin-bottom: 20px;
}

.average-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
}

.stars {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.star-icon {
  width: 20px;
  height: 20px;
  margin: 0 2px;
}

.rating-distribution {
  margin-top: 20px;
}

.rating-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
  width: 100%;
}

.rating-text {
  font-size: 1rem;
  color: #ffffff;
}

.progress-bar-container {
  flex-grow: 1;
  margin: 0 10px;
}

.progress-bar {
  height: 8px;
  background: #444;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #ffc107;
  border-radius: 4px;
}

.rating-count {
  width: 40px;
  text-align: right;
  font-size: 0.875rem;
  color: #ffffff;
}

.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.review-item {
  background: #2c3338;
  border-radius: 10px;
  padding: 20px;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.review-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.review-name {
  font-size: 1.25rem;
  color: #ffffff;
}

.review-rating {
  display: flex;
}

.review-description {
  font-size: 1rem;
  color: #b0b0b0;
  margin-bottom: 15px;
}

.review-order {
  font-size: 0.875rem;
  color: #b0b0b0;
  margin-bottom: 10px;
}

.review-date {
  font-size: 0.875rem;
  color: #666;
}

.reviews-title {
  text-align: center;
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 20px;
}
</style>
