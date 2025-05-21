<script lang="ts" setup>
import FooterComponent from '../components/FooterComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import { homeData } from '../data/home';
</script>

<template>
  <!-- Todo el header va dentro de esta sección -->
  <section class="bg-hero-main position-relative">
    <HeaderComponent />
		  <div class="container py-lg-3 my-lg-3">
				<div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
					<div class="col-lg-6 p-3 pt-lg-5 mt-lg-5">
						<span class="display-4 text-uppercase fw-semibold">Conecta</span>
						<h1 class="fw-bold lh-1 text-uppercase text-color-main">Tu Hogar</h1>
						<div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-5">
							<button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Nuestros Planes</button>
						</div>
					</div>
					<div class="col-lg-6 p-0">
							<img class="rounded-lg-3 img-fluid" src="/img/familia2.0.png" alt="">
					</div>
				</div>
    </div>
  </section>
	<section class="bg-jumbotron-main mb-5">
		<div class="container py-5">
			<div class="text-center pt-2">
				<h3 class="display-3 fw-bold lh-1 text-color text-uppercase">Beneficios que conectan</h3>
				<p class="fs-4 fw-bold text-color">Explora nuestros planes</p>
			</div>
			<div class="row g-3 mx-auto">
				<div v-for="benfit in homeData.benfits" class="col-12 col-md-6 col-lg-3">
					<div class="card h-100 d-flex border-color">
						<div class="ratio ratio-1x1 w-50 mx-auto mt-4">
							<img :src="benfit.img" class="card-img-top img-fluid" alt="...">
						</div>
						<div class="card-body text-center">
							<h5 class="card-title fs-3">{{ benfit.titulo }}</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-tailored-main d-flex align-items-center">
		<div class="container">
			<div class="row p-4 g-0">
				<div class="col-lg-6 p-3 pt-lg-5 mt-lg-5">
				</div>
				<div class="col-lg-6 p-3 text-center">
					<h2 class="fw-bold lh-1 text-uppercase text-color-white">Planes a tu medida</h2>
				</div>
				</div>
		</div>
	</section>
	<section class="bg-plans py-5">
		<div class="container pt-lg-5 mt-lg-5">
			<div class="text-center">
				<h2 class="text-uppercase display-1 fw-bold text-color">Internet + Telefonía</h2>
			</div>
			<div class="row p-4 g-4">
				<div v-for="plan in homeData.plansInt" class="col-12 col-md-6 col-xl-3">
					<div class="card text-center border-color-card h-100 d-flex shadow">
						<div class="card-header fs-3 fw-bold">
							Plan {{ plan.nombre }}
						</div>
						<div class="card-body">
							<div class="border-color plan-circle">
								<span class="fw-bold fs-1 lh-1 text-color">{{ plan.mbps }}</span>
            					<small>Mbps</small>
							</div>
							<div class="d-flex gap-2 justify-content-center mb-4 mb-lg-3 mt-3">
								<div class="border icon-circle p-3">
									<img src="/img/icono-internet.png" alt="" class="mx-auto" width="25">
								</div>
								<div class="border icon-circle p-3">
									<img src="/img/icono-telefonia.png" alt="" class="mx-auto" width="25">
								</div>
							</div>
							<p class="fs-5">Internet + Telefonía</p>
							<h5 class="card-title text-color display-3 fw-semibold">
								${{ plan.precio }}<small class="small fs-5">/Mensual</small>
							</h5>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							<p class="card-text fs-4">{{ plan.subida }} Mbps de subida</p>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							  <a href="#" class="btn btn-primary fw-bold pe-4 ps-4">¡Lo quiero!</a>
						</div>
						<div class="card-footer text-secondary bg-transparent border-0 text-uppercase">
							Folio ift: {{ plan.folioIFT }}
						</div>
					</div>
				</div>
			</div>
			<div class="text-center mt-5">
				<h2 class="text-uppercase display-1 fw-bold text-color">Televisión</h2>
			</div>
			<div class="row p-4 g-4 justify-content-center text-center">
				<div v-for="plan in homeData.plansTV" class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
					<div class="card text-center border-color-card h-100 d-flex shadow" style="width: 25rem;">
						<div class="card-header fs-3 fw-bold">
						{{ plan.nombre }}
						</div>
						<div class="card-body">
							<div class="border-color plan-circle">
								<span class="fw-bold fs-1 lh-1 text-color">{{ plan.canales }}</span>
            					<small>Canales</small>
							</div>
							<div class="d-flex gap-2 justify-content-center mb-4 mb-lg-3 mt-3">
								<div class="border icon-circle p-3">
									<img src="/img/icono-television.png" alt="" class="mx-auto" width="25">
								</div>
							</div>
							<p class="fs-5">Televisión</p>
							<h5 class="card-title text-color display-3 fw-semibold">
								${{ plan.precio }}<small class="small fs-5">/Mensual</small>
							</h5>
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							<img :src="plan.img" alt="" class="img-fluid">
							<div class="border-bottom border-black border-1 p-1 w-100 mb-3"></div>
							  <a href="#" class="btn btn-primary fw-bold pe-4 ps-4">¡Lo quiero!</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container-fluid py-5 my-5 pb-5">
		<div class="hero-section container d-flex flex-column flex-md-row align-items-center justify-content-between mx-auto">
			<div class="hero-text col-md-6">
				<h3 class="display-5 fw-bold">¡Conectamos contigo!</h3>
				<p class="fs-4">Cobertura en constante crecimiento, <br> para que nadie se quede sin conexión.</p>
				<a href="#" class="btn btn-light mt-3 fw-semibold">Más información</a>
			</div>
			<div class="col-md-6 position-relative text-end">
				<img src="/img/familia2.1.png" alt="Familia conectada" class="hero-image" />
			</div>
		</div>
  	</section>
	<section class="container-fluid py-5 my-5 pb-5">
		<div class=""></div>
  	</section>
	<section class="bg-new-internet d-flex align-items-center">
		<div class="container">
			<div class="row p-4 g-0">
				<div class="col-lg-6 p-3 pt-lg-4 mt-lg-4">
				</div>
				<div class="col-12 p-3 p-3 pt-lg-5 mt-lg-5 text-center">
					<h3 class="fw-bold lh-1 text-white display-1">¡Tu nuevo internet está a un clic de distancia!</h3>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-contact-main py-5 container-fluid">
		<div class="pt-5 pb-5 text-center">
			<h2 class="fw-bold display-1 text-color ">
				¡Cóntactanos aquí!
				<div class="border-bottom-color border-1 p-2 w-100 mb-3 mx-auto"></div>
			</h2>
			<p class="fs-4 text-color">
				Déjanos tus datos y un asesor se pondrá en contacto contigo lo antes posible.
			</p>
		</div>
		<div class="container rounded-1 shadow p-5">
			<div class="row g-5 p-lg-5">
				<div class="col-12 col-xl-6">
				<form class="pb-3">
					<div class="row g-3 mb-3">
						<div class="col-md-6">
							<div class="form-floating">
								<input type="email" class="form-control rounded-0 border-color" id="floatingInput" placeholder="Nombre">
								<label for="floatingInput" class="text-color">Nombre</label>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-floating mb-3">
								<input type="email" class="form-control rounded-0 border-color" id="floatingInput" placeholder="name@example.com">
								<label for="floatingInput" class="text-color">Correo Electrónico</label>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-floating">
								<input type="tel" class="form-control rounded-0 border-color" id="floatingInput" placeholder="Nombre">
								<label for="floatingInput" class="text-color">Número Telefónico</label>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-floating mb-3">
								<input type="email" class="form-control rounded-0 border-color" id="floatingInput" placeholder="name@example.com">
								<label for="floatingInput" class="text-color">Dirección</label>
							</div>
						</div>
						<div class="col-12">
							<div class="form-floating">
								<textarea class="form-control rounded-0 border-color" placeholder="Leave a comment here" id="floatingTextarea" rows="4" style="height: 130px"></textarea>
								<label for="floatingTextarea" class="text-color">Mensaje</label>
							</div>
						</div>
					</div>
					<button class="w-100 btn btn-lg btn-primary" type="submit">Regístrate</button>
				</form>
				</div>
				<div class="col-12 col-xl-6">
					<img src="/img/familia2.2.png" alt="Familia conectada" class="img-fluid"/>
				</div>
			</div>
		</div>
	</section>
  <FooterComponent />
</template>

<style scoped>
.bg-hero-main {
  background-image: url('/img/fondo-1.png');
  background-size: cover;
	background-position: initial;
  background-repeat: no-repeat;
	min-height: 90vh;
}
.bg-jumbotron-main {
  background-image: url('/img/fondo-2.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 10vh; /* valor base para XS */
}

/* Small devices (≥576px) */
@media (min-width: 576px) {
  .bg-jumbotron-main {
    min-height: 40vh;
  }
}

/* Medium devices (≥768px) */
@media (min-width: 768px) {
  .bg-jumbotron-main {
    min-height: 50vh;
  }
}

/* Large devices (≥992px) */
@media (min-width: 992px) {
  .bg-jumbotron-main {
    min-height: 70vh;
  }
}

/* Extra large devices (≥1200px) */
@media (min-width: 1200px) {
  .bg-jumbotron-main {
    min-height: 40vh;
  }
}

/* Extra extra large devices (≥1400px) */
@media (min-width: 1400px) {
  .bg-jumbotron-main {
    min-height: 10vh;
  }
}

.bg-tailored-main {
  background-image: url('/img/fondo-3.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
	min-height: 65vh;
}
.bg-plans {
	background-image: url('/img/fondo-5.png');
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh; /* valor base para XS */
}
.bg-new-internet {
  background-image: url('/img/fondo-4.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 65vh; /* valor base para XS */
}
.bg-contact-main {
  background-image: url('/img/fondo-6.png');
  background-repeat: no-repeat;
  background-size: cover; /* Asegura que la imagen cubra el área */
  background-position: center; /* Centra la imagen */
  min-height: 100vh; /* Altura mínima base para pantallas pequeñas */
}

/* Para pantallas medianas hacia arriba */
@media (min-width: 768px) {
  .bg-contact-main {
    min-height: 120vh;
  }
}

/* Para pantallas grandes */
@media (min-width: 1200px) {
  .bg-contact-main {
    min-height: 128vh;
  }
}

.text-color-main {
	color: #396E4B;
	font-size: 7rem;
}

.text-color-white {
	color: #ffffff;
	font-size: 6.5rem;
}

@media (max-width: 450px) {
	.text-color-main, 
	.text-color-white {
		font-size: 4rem;
	}
}

.text-color {
	color: #396E4B;
}

.border-color {
	border: 2px solid #396E4B !important;
}

.border-bottom-color {
	border-bottom: 2px solid #396E4B !important;
	width: 50% !important;
}

.border-color-card {
	border: 1px solid #396E4B;
}


.btn-primary {
	background-color: #396E4B;
	border: 1px solid	#396E4B !important;
}

.btn-primary:hover {
	background-color: #ffffff;
	border: 1px solid	#396E4B !important;
	color: #396E4B;
}

.btn-light {
	background-color: #ffffff;
	border: 1px solid	#396E4B !important;
	color: #396E4B;
}

.btn-light:hover {
	background-color: #396E4B;
	border: 1px solid #ffffff !important;
	color: #ffffff;
}

.card-header {
	background-color: #396E4B;
	color: #ffffff;
}

.plan-circle {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	margin: 0 auto 1rem auto;
	flex-direction: column;
}

.icon-circle {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	flex-direction: column;
}


.hero-section {
	background-color: #396E4B; /* Verde oscuro */
	color: white;
	padding: 3rem 2rem;
	position: relative;
	overflow: visible; /* Permite que la imagen se salga */
}

.hero-text h1 {
	font-weight: 700;
}

.hero-text p {
	font-size: 1.1rem;
}

.hero-image {
	max-width: 700px;
	position: absolute;
	right: -110px;
	bottom: -250px;
	z-index: 1;
	
	height: auto;
}

/* Pantallas medianas */
@media (max-width: 1600px) {
	.hero-image {
		max-width: 760px;
		right: -135px;
		bottom: -220px;
	}
}

@media (max-width: 1500px) {
	.hero-image {
		max-width: 800px;
		width: 110%;
		right: -90px;
		bottom: -280px;
	}
}

@media (max-width: 1400px) {
	.hero-image {
		max-width: 860px;
		width: 120%;
		right: -55px;
		bottom: -220px;
	}
}

@media (max-width: 1200px) {
	.hero-image {
		max-width: 760px;
		right: -40px;
		bottom: -220px;
	}
}

/* Pantallas medianas */
@media (max-width: 992px) {
	.hero-image {
		max-width: 500px;
		width: 120%;
		right: -35px;
		bottom: -180px;
	}
}

/* Pantallas pequeñas */
@media (max-width: 768px) {
	.hero-image {
		max-width: 350px;
		right: -150px;
		bottom: -10px;
		margin-top: 50px;
		position: static; 
	}
}

/* Pantallas extra pequeñas */
@media (max-width: 576px) {
	.hero-image {
		position: static;
		max-width: 100%;
		margin: 0 auto;
		display: block;
		margin-top: 50px;
	}
}

@media (max-width: 768px) {
	.hero-section {
	text-align: center;
	}
	.hero-bars {
	display: none;
	}
}
</style>
