<template>
  <div class="min-h-screen flex flex-col bg-gray-100 text-gray-800 font-sans">
    <AppHeader />

    <main class="flex-grow container mx-auto px-4 lg:px-8 py-12">
      <HeroSection />

      <section class="mt-20">
        <h3 class="text-4xl font-bold text-center text-gray-900 mb-12 tracking-wide">
          Fitur Unggulan Kami
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <h4 class="text-2xl font-bold text-teal-700 mb-4">Jadwal Sholat Akurat</h4>
            <p class="text-gray-600 leading-relaxed">
              Tampilkan jadwal sholat harian yang terintegrasi secara otomatis dan selalu terbarui.
            </p>
          </div>
          <div
            class="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <h4 class="text-2xl font-bold text-teal-700 mb-4">Informasi Kegiatan</h4>
            <p class="text-gray-600 leading-relaxed">
              Publikasikan pengumuman, kajian, dan acara masjid dengan mudah untuk seluruh jamaah.
            </p>
          </div>
          <div
            class="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <h4 class="text-2xl font-bold text-teal-700 mb-4">Laporan Keuangan</h4>
            <p class="text-gray-600 leading-relaxed">
              Sajikan laporan keuangan masjid yang transparan, mudah diakses, dan tepercaya.
            </p>
          </div>
        </div>
      </section>

      <section class="mt-20 text-center p-16 bg-emerald-50 rounded-xl shadow-xl">
        <h3 class="text-4xl font-bold text-gray-900 mb-6">
          Siap Mengoptimalkan Manajemen Masjid Anda?
        </h3>
        <a
          href="#"
          class="inline-block px-10 py-4 text-lg font-semibold text-white bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
        >
          Daftar Sekarang
        </a>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../components/layouts/Header.vue'
import AppFooter from '../components/layouts/Footer.vue'
import HeroSection from '../components/layouts/HeroSection.vue'

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    AppFooter,
    HeroSection,
  },
}
</script>
