<template>
  <header class="bg-gray-900 text-white shadow-md">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="logo">
        <h1 class="text-2xl font-bold text-teal-400">SIMASJID</h1>
      </div>
      <ul class="nav-links hidden md:flex space-x-6 items-center font-semibold">
        <li>
          <a href="#" class="hover:text-teal-400 transition-colors duration-300">Beranda</a>
        </li>
        <li>
          <a href="#" class="hover:text-teal-400 transition-colors duration-300">Profil Masjid</a>
        </li>
        <li>
          <a href="#" class="hover:text-teal-400 transition-colors duration-300">Jadwal Sholat</a>
        </li>
        <li>
          <a href="#" class="hover:text-teal-400 transition-colors duration-300">Donasi</a>
        </li>
        <li>
          <a href="#" class="hover:text-teal-400 transition-colors duration-300">Kontak</a>
        </li>
        <li>
          <a
            href="#"
            class="btn-login px-5 py-2 bg-teal-600 hover:bg-teal-700 transition-colors duration-300 rounded-full font-bold shadow-lg"
          >
            Masuk
          </a>
        </li>
      </ul>
      <button class="md:hidden text-gray-400 focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
