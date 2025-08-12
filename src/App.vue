<template>
  <header>
    <nav>
      <router-link to="/">Beranda</router-link> |
      <router-link to="/about">Tentang</router-link>
    </nav>
  </header>

  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
