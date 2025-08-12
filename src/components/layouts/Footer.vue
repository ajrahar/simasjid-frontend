<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-info">
        <h4>SIMASJID</h4>
        <p>Sistem Informasi Masjid &copy; 2025</p>
      </div>
      <div class="footer-links">
        <ul>
          <li><a href="#">Kebijakan Privasi</a></li>
          <li><a href="#">Ketentuan Layanan</a></li>
          <li><a href="#">Bantuan</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
.main-footer {
  background-color: #333;
  color: #fff;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
}
.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}
.footer-links ul li a {
  color: #fff;
  text-decoration: none;
}
</style>
