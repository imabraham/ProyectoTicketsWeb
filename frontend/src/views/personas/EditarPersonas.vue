<template>
  <div class="container">
    <h1>Edita Personas</h1>

   <form @submit.prevent="ediarPersona()">

            <InputComponent 
                    id="idEditar" 
                    value="idEditar"
                    name="idEditar"
                    type="text"
                    :maxlength="maximos.id"
                    :disabled="this.dis"
                    v-model="persona.id"
            />
            <InputComponent 
                    id="nombreEditar" 
                    value="nombreEditar"
                    name="nombreEditar"
                    type="text"
                    :maxlength="maximos.nombre"
                    :disabled="this.disable"
                    placeholder="Nombre..."
                    v-model="persona.nombre"
            />
            <InputComponent 
                    id="apellidosEditar" 
                    value="apellidosEditar"
                    type="text"
                    name="apellidosEditar"
                    :maxlength="maximos.apellidos"
                    :disabled="this.disable"
                    placeholder="Apellidos.."
                    v-model="persona.apellidos"
            />
            <InputComponent 
                    id="telefonosEditar" 
                    value="telefonosEditar"
                    type="text"
                    name="telefonosEditar"
                    :maxlength="maximos.telefono"
                    :disabled="this.disable"
                    placeholder="telefono..."
                    v-model="persona.telefono"
            />

            <InputComponent 
                    id="direccionEditar" 
                    value="direccionEditar"
                    name="direccionEditar"
                    type="text"
                    :maxlength="maximos.direccion"
                    :disabled="this.disable"
                    placeholder="dirección..."
                    v-model="persona.direccion"
            />
            <button type="submit" class="btn btn-success">Success</button>
        </form>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import InputComponent from '@/components/InputComponent.vue'

export default {
  name: 'EditarPersonas',
  components:{
    InputComponent
  },
  data(){
    return{
      persona:{
              id:'',
              nombre:'',
              apellidos:'',
              telefono:'',
              direccion:''
          },
      disable: false,
      dis:true,
      maximos:{
        nombre:50,
        apellidos:80,
        telefono:10,
        direccion:150
      }
    }
  },
  computed:{
    ...mapGetters(['ob_persona'])
  },
  methods:{
    ...mapActions(['editarEmpleado']),
    ediarPersona(){
      console.log('entro')
      this.editarEmpleado({
        params:this.persona,
        onComplete:(res)=>{
          this.$router.push('/Personas')
        },
        onError:(err)=>{
          console.log('nos se edito');
        }
      });
    }
  },
  mounted(){
    this.persona = this.ob_persona;
  }
}
</script>
