import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: () => import('../views/HomeView.vue') // Lazy load para la vista Home
      },
      {
         path: '/productos',
         name: 'productos',
         component: () => import('../views/ProductosView.vue'),
         props: route => ({
            productos: [
               {
                  nombre: 'Desayunos',
                  descripcion: 'Contamos con desayunos nutritivos y deliciosos',
                  precio: '$8.000',
                  cantidad: 'Para dos personas'
               },
               {
                  nombre: 'Colaciones',
                  descripcion: 'Nuestras colaciones son prácticas y saludables',
                  precio: '$6.500',
                  cantidad: 'Por porción individual'
               },
               {
                  nombre: 'Bebidas',
                  descripcion: 'Refrescantes bebidas naturales y energizantes',
                  precio: '$1.500',
                  cantidad: 'Botella de 500ml'
               },
               {
                  nombre: 'Dulces',
                  descripcion: 'Deliciosos postres y dulces tradicionales',
                  precio: '$10.000',
                  cantidad: 'Paquete de 6 piezas'
               },
               {
                  nombre: 'Empanadas',
                  descripcion: 'Empanadas recién horneadas con ingredientes locales',
                  precio: '$3.000',
                  cantidad: 'Por unidad'
               },
               {
                  nombre: 'Verduras',
                  descripcion: 'Verduras surtidas frescas cosechadas localmente',
                  precio: '$2.500',
                  cantidad: 'Bolsa de 1kg'
               }
            ]
         }) 
      },
      {
         path: '/contacto',
         name: 'contacto',
         component: () => import('../views/ContactoView.vue') // Lazy load para la vista Contacto
      }
   ]
})

export default router