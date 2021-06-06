import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categorias: [],
    categoria: {},
    empleados: [],
    empleado: {}
  },
  mutations: {
    SET_CATEGORIAS(state, categorias) {
      state.categorias = categorias;
    },
    SET_CATEGORIA(state, categoria) {
      state.categoria = categoria;
    },
    SET_EMPLEADOS(state, empleados) {
      state.empleados = empleados;
    },
    SET_EMPLEADO(state, empleado) {
      state.empleado = empleado;
    }
  },
  actions: {
    setCategorias({ commit }) {
      axios.get('http://localhost:3000/categorias/')
        .then(response => {
          commit('SET_CATEGORIAS', response.data);
        })
    },
    crearCategoria({ commit }, { params, onComplete, onError }) {
      axios.post('http://localhost:3000/categorias/', params)
        .then(onComplete)
        .catch(onError)
    },
    setEmpleados({ commit }) {
      axios.get('http://localhost:3000/personal/')
        .then(response => {
          commit('SET_EMPLEADOS', response.data);
        })
    },
    crearEmpleado({ commit }, { params, onComplete, onError }) {
      axios.post('http://localhost:3000/personal/', params)
        .then(onComplete)
        .catch(onError)
    },
    obtenerEmpleado({ commit }, { id, onComplete, onError }) {
      axios.get(`http://localhost:3000/personal/${id}`)
        .then(response => {
          commit('SET_EMPLEADO', response.data.data);
          onComplete(response)
        })
        .catch(onError)
    },
    editarEmpleado({ commit }, { id, params, onComplete, onError }) {
      axios.put(`http://localhost:3000/personal/${id}`, params)
        .then(onComplete)
        .catch(onError)
    },
    eliminarEmpleado({ commit }, { id, onComplete, onError }) {
      axios.delete(`http://localhost:3000/personal/${id}`)
        .then(onComplete)
        .catch(onError)
    }
  },
  modules: {
  }
})
