<template>
  <div class="container">
      <h2>Agrega nuevos Tikets</h2>

        <form @submit.prevent="aggTiket()">
            <InputComponent 
                    id="nombre" 
                    value="nombre"
                    name="nombre"
                    type="text"
                    :maxlength="maximos.nombre"
                     :disabled="this.disable"
                    placeholder="Nombre..."
                    v-model="tiket.nombre"
            />
            <InputComponent 
                    id="descripcion" 
                    value="descripcion"
                    name="descripcion"
                    type="text"
                    :maxlength="maximos.descripion"
                    :disabled="this.disable"
                    placeholder="descripcion.."
                    v-model="tiket.descripcion"
            />
            <label for="prioridad" class="float-right form-label">Prioridad</label>
            <select v-model="tiket.prioridad" class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <label for="idPersona" class="form-label">Persona</label>
            <select v-model="tiket.idPersona"
                v-for="(persona,index) in get_personafiltro" :key="index"
            class="form-select" aria-label="Default select example">
                    <option :value="persona.id">{{persona.nombre}}</option>
            </select>

             <label for="idCategoria" class="form-label">Categoria</label>
            <select v-model="tiket.idCategoria"
                v-for="(categoria,index) in get_categorias" :key="index"
                class="form-select" aria-label="Default select example">
                    <option :value="categoria.id">{{categoria.nombre}}</option>
            </select>

            <label for="estado" class="float-right form-label">Estado</label>
            <select v-model="tiket.estatus" class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="ABT">Abierto</option>
                <option value="ESP">Espera</option>
                <option value="FIN">Finalizado</option>
            </select>

            <button type="submit" class="btn btn-success">Success</button>
        </form>
  </div>
</template>

<script>

import InputComponent from '@/components/InputComponent.vue'
import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'AgregarTiket',
  components:{
      InputComponent
  },
  data(){
      return{
          maximos:{
            nombre:50,
            descripcion:100,
            estatus:3,
        },
        disable:false,
            tiket:{
                nombre:'',
                descripcion:'',
                prioridad:'',
                idPersona:'',
                idCategoria:'',
                estatus:''
            }
      }
  },
  computed:{
      ...mapGetters(['get_personafiltro','get_categorias'])
      
  },
  methods:{
      ...mapActions(['getPersonal','getCategorias','crearTiket']),
      aggTiket(){
          this.crearTiket({
              params:this.tiket,
              onComplete:(response)=>{
                  console.log('AGREGO')
                  this.$router.push('/Tikets')
              },
              onError:(err)=>{
                  console.log('error')
              }
          })
          
      }
  },
  mounted(){
      this.getPersonal();
      this.getCategorias();
  }
}
</script>
