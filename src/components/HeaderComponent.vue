<script setup lang="ts">
</script>

<template>
  <header class="position-relative z-3">
    <div class="container">
      <nav class="navbar navbar-expand-lg py-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="logo-header" src="/img/logo-color.png" alt="logo-principal">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                  aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Planes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cobertura</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">¡Quiero contratar!</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.logo-header {
  height: 45px;
}

header {
  background-color: transparent;
}
</style>
