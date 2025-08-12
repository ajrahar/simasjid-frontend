<template>
  <section class="hero-section">
    <div class="hero-text">
      <h2>Selamat Datang di Sistem Informasi Masjid</h2>
      <p>Kelola dan informasikan kegiatan masjid dengan lebih mudah dan transparan.</p>
      <a href="#" class="btn-primary">Pelajari Lebih Lanjut</a>
    </div>
    <div class="hero-image">
      <img :src="imageUrl" alt="Ilustrasi Masjid" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      //imageUrl: require('@/assets/masjid-illustration.jpg') // Path ke gambar Anda
    }
  },
}
</script>

<style scoped>
.hero-section {
  background-color: #e0f2f1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem 2rem;
  border-radius: 10px;
}

.hero-text {
  text-align: left;
  max-width: 50%;
}

.hero-text h2 {
  color: #004d40;
  margin-bottom: 1rem;
}

.hero-text p {
  line-height: 1.6;
  margin-bottom: 2rem;
}

.btn-primary {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  background-color: #00695c;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #005645;
}

.hero-image {
  max-width: 40%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hero-image img {
  display: block;
  width: 100%;
  height: auto;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }

  .hero-text {
    max-width: 80%;
    margin-bottom: 2rem;
  }

  .hero-image {
    max-width: 80%;
  }
}
</style>
