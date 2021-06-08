<template>
  <div class="container justify-content-right">
          <h3>Editar Tiket</h3>

         <form @submit.prevent="editarTiket()">
            <InputComponent 
                    titulo='nombre'
                    id="nombre" 
                    value="nombre"
                    name="nombre"
                    type="text"
                    :maxlength="maximos.nombre"
                    :disabled="this.dis"
                    placeholder="Nombre..."
                    v-model="tiket.nombre"
            />
            <InputComponent 
                    titulo='descripcion'
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

            <InputComponent 
                    titulo='estatus'
                    id="estatus" 
                    value="estatus"
                    name="estatus"
                    type="text"
                    :maxlength="maximos.descripion"
                    :disabled="this.dis"
                    placeholder="descripcion.."
                    v-model="tiket.estatus"
            />

            <button type="submit" class="btn btn-success">Success</button>
        </form>
      </div>
</template>

<script>

import {mapActions,mapGetters} from 'vuex'
import InputComponent from '@/components/InputComponent.vue'

export default {
  name: 'EditarTiket',
  components:{
      InputComponent
  },
  methods:{
      ...mapActions(['editarTiket','getCategorias','getPersonal'])
  },
  computed:{
      ...mapGetters(['ob_tiket','get_personafiltro','get_categorias'])
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
            },
        dis:true
      }
      
  },
  mounted(){
      this.tiket = this.ob_tiket;
      this.getCategorias();
      this.getPersonal();
  }
}
</script>