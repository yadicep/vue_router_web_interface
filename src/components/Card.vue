<template>
   <div class="card h-100">
      <!-- Imagen dinámica según el nombre del producto -->
      <img :src="getImage()" class="card-img-top img-fluid" :alt="nombre" />
      
      <!-- Contenido de la tarjeta -->
      <div class="card-body d-flex flex-column">
         <h5 class="card-title fw-bold">{{ nombre }}</h5>
         <p class="card-text flex-grow-1">{{ descripcion }}</p>
      </div>
      
      <!-- Detalles adicionales (precio, cantidad) -->
      <ul class="list-group list-group-flush">
         <li class="list-group-item">Precio: {{ precio }}</li>
         <li class="list-group-item">Cantidad: {{ cantidad }}</li>
      </ul>

      <!-- Enlaces para acciones (Ver más, Comprar) -->
      <div class="card-body">
         <a href="#" class="card-link">Ver más</a>
         <a href="#" class="card-link">Comprar</a>
      </div>
   </div>
</template>

<script setup>
   // Importar imágenes desde assets (usando la carpeta 'assets' de Vite)
   import desayunosImg from '../assets/img/desayunos.jpg'
   import colacionesImg from '../assets/img/colaciones.jpg'
   import bebidasImg from '../assets/img/bebidas.jpg'
   import dulcesImg from '../assets/img/dulces.jpg'
   import empanadasImg from '../assets/img/empanadas.jpg'
   import verdurasImg from '../assets/img/verduras.jpg'

   // Recibe los props necesarios
   const props = defineProps({
      nombre: String,
      descripcion: String,
      precio: String,
      cantidad: String
   })

   // Función para devolver la imagen según el nombre del producto
   const getImage = () => {
      switch (props.nombre) {
         case 'Desayunos':
            return desayunosImg
         case 'Colaciones':
            return colacionesImg
         case 'Bebidas':
            return bebidasImg
         case 'Dulces':
            return dulcesImg
         case 'Empanadas':
            return empanadasImg
         case 'Verduras':
            return verdurasImg
         default:
            return '' // Imagen por defecto o placeholder si el nombre no coincide
      }
   }
</script>