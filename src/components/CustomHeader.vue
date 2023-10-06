<template>
  <header class="main-header">
    <div class="header-container">
      <div class="branding">
        <h1 class="branding-text">{{ title }}</h1>
      </div>
      <nav class="navigation-menu">
        <router-link to="/Summary" class="navigation-item">Summary</router-link>
        <router-link to="/Projects" class="navigation-item">My Projects</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped>
.main-header {
  background-color: #333;
  color: #fff;
  padding: 1rem 0;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.branding-text {
  font-size: 1.5rem;
}

.navigation-menu {
  display: flex;
  gap: 20px;
}

.navigation-item {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: color 0.3s ease;
}

.navigation-item:hover {
  color: #ff4500;
  /* Change to your preferred hover color */
}
</style>
