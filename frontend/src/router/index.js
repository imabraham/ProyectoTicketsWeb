import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VerCategorias from '../views/VerCategorias'
import RegistrarCategoria from '../views/RegistrarCategoria'
import VerEmpleados from '../views/VerEmpleados'
import RegistrarEmpleado from '../views/RegistrarEmpleado'
import EditarEmpleado from '../views/EditarEmpleado'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/VerCategorias',
    name: 'VerCategorias',
    component: VerCategorias
  },
  {
    path: '/RegistrarCategoria',
    name: 'RegistrarCategoria',
    component: RegistrarCategoria
  },
  {
    path: '/VerEmpleados',
    name: 'VerEmpleados',
    component: VerEmpleados
  },
  {
    path: '/RegistrarEmpleado',
    name: 'RegistrarEmpleado',
    component: RegistrarEmpleado
  },
  {
    path: '/EditarEmpleado',
    name: 'EditarEmpleado',
    component: EditarEmpleado
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
