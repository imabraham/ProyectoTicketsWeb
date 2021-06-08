import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categorias: [],
    categoriaFiltro:[],
    personal:[],
    personalFiltro:[],
    persona:{
      id:'',
      nombre:'',
      apellidos:'',
      telefono:'',
      direccion:''
    },
    tikets:[],
    tiket:{
      nombre:'',
      descripcion:'',
      prioridad:'',
      idPersona:'',
      idCategoria:'',
      estatus:''
    }
  },
  mutations: {
    GET_CATEGORIAS(state, categorias) {
      state.categorias = [];
      state.categorias = categorias;
    },
    GET_PERSONAL(state, personal){
      state.personal = [];
      state.personalFiltro = [];
      state.personal = personal,
      personal.map(data=> state.personalFiltro.push({id:data["id"],nombre:data["nombre"]+" "+data["apellidos"]}))
    },
    OB_PERSONA(state,persona){
      state.persona = persona
    },
    GET_TIKETS(state,tikets){
      state.tikets = tikets
    },
    OB_TIKET(state, tiket){
      state.tiket = tiket
    }
  },
  actions: {
    getCategorias({ commit }) {
      axios.get('http://localhost:3000/categorias/')
        .then(response => {
           commit('GET_CATEGORIAS', response.data);
        })
    },
    crearCategoria({ commit }, { params, onComplete, onError }) {
      axios.post('http://localhost:3000/categorias/', params)
        .then(onComplete)
        .catch(onError)
    },
    eliminarCategoria({commit},{id,onComplete,onError}){
      console.log(id);
      axios.delete(`http://localhost:3000/eliminaCategoria/${id}`)
        .then(onComplete)
        .catch(onError)
    },
    getPersonal({ commit }) {
      console.log('entro1');
      axios.get('http://localhost:3000/personal/')
        .then(response => {
          commit('GET_PERSONAL', response.data);
        })
    },
    eliminarEmpleado({ commit }, { id, onComplete, onError }) {
      axios.delete(`http://localhost:3000/personal/${id}`)
        .then(onComplete)
        .catch(onError)
    },
    crearEmpleado({ commit }, { params, onComplete, onError }) {
      axios.post('http://localhost:3000/personal/', params)
        .then(onComplete)
        .catch(onError)
    },
    obPesona({commit},persona){
      console.log(persona);
      commit('OB_PERSONA',persona);
    },
    editarEmpleado({commit}, {params, onComplete, onError }) {
      axios.put(`http://localhost:3000/personal/`, params)
        .then(onComplete)
        .catch(onError)
    },
    obtenerTikets({commit}){
      axios.get('http://localhost:3000/tickets/')
        .then(response => {
          commit('GET_TIKETS',response.data);
        })
    },
    eliminarTiket({ commit }, { id, onComplete, onError }) {
      axios.delete(`http://localhost:3000/tickets/${id}`)
        .then(onComplete)
        .catch(onError)
    },
    crearTiket({ commit }, { params, onComplete, onError }) {
      axios.post('http://localhost:3000/tickets/', params)
        .then(onComplete)
        .catch(onError)
    },
    editarTiket({commit}, {params, onComplete, onError }) {
      axios.put(`http://localhost:3000/tickets/`, params)
        .then(onComplete)
        .catch(onError)
    },
    obTiket({commit},tiket){
      console.log(tiket);
      commit('OB_TIKET',tiket);
    }


  },
  getters:{
    get_categorias: state => state.categorias,
    get_personal:state=> state.personal,
    ob_persona: state=> state.persona,
    get_tikets: state=> state.tikets,
    get_personafiltro: state => state.personalFiltro,
    ob_tiket: state => state.tiket
  }
})
