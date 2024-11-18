<script setup>
   import Card from '../components/Card.vue'
   // Recibir el array de productos desde la ruta
   const props = defineProps({
      productos: Array
   })
</script>

<template>
   <div class="d-flex justify-content-center align-items-center divContact divProducts"><h1>Conoce nuestros productos</h1></div>
   <div class="container">
      <div class="row g-4">
         <!-- Iterar sobre el array de productos y renderizar una tarjeta por cada producto -->
         <div class="col-lg-4 col-md-6 col-sm-12" v-for="(producto, index) in productos" :key="index" >
            <Card 
               :nombre="producto.nombre"
               :descripcion="producto.descripcion"
               :precio="producto.precio"
               :cantidad="producto.cantidad"
               :imagen="producto.imagen"
            />
         </div>
      </div>
      <div class="d-flex justify-content-center"><router-link to="/" class="btn btn-light m-5 border">Volver al Inicio</router-link></div>
   </div>
</template>

<style scope>
   .divProducts{
      margin-top: 10rem;
      margin-bottom: 5rem;
   }
</style>