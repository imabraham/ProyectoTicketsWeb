import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AccionesCategoria from '../views/Categorias/AccionesCategoria.vue'
import ObtenerPersonas from '../views/personas/ObtenerPersonas.vue'
import AgregarPersona from '../views/personas/AgregarPersona.vue'
import EditarPersonas from '../views/personas/EditarPersonas.vue'
import ObtenerTickets from '../views/Tikets/ObtenerTickets.vue'
import AgregarTiket from '../views/Tikets/AgregarTiket.vue'
import EditarTiket from '../views/Tikets/EditarTiket.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Categorias',
    name: 'AccionesCategoria',
    component: AccionesCategoria
  },
  {
    path: '/Personas',
    name: 'ObtenerPersonas',
    component: ObtenerPersonas
  },
  {
    path: '/AgregarPersona',
    name: 'AgregarPersona',
    component: AgregarPersona
  },
  {
    path: '/EditarPersonas',
    name: 'EditarPersonas',
    component: EditarPersonas
  },
  {
    path: '/Tikets',
    name: 'ObtenerTickets',
    component: ObtenerTickets
  },
  {
    path: '/AgregarTiket',
    name: 'AgregarTiket',
    component: AgregarTiket
  },
  {
    path: '/EditarTiket',
    name: 'EditarTiket',
    component: EditarTiket
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
