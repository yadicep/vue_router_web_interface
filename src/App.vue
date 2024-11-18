<template>
   <Navbar />
   <router-view />
   <MediosPago />
   <Footer />
</template>

<script setup>
   import Navbar from '@/components/Navbar.vue'
   import Footer from '@/components/Footer.vue'
   import MediosPago from '@/components/MediosPago.vue'
</script>