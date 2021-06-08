<template>
    <div class="container">

        <h2>Agrega nuevo personal</h2>

        <form @submit.prevent="aggPersonal()">
            <InputComponent 
                    id="nombre" 
                    value="nombre"
                    name="nombre"
                    type="text"
                    :maxlength="maximos.nombre"
                     :disabled="this.disable"
                    placeholder="Nombre..."
                    v-model="persona.nombre"
            />
            <InputComponent 
                    id="apellidos" 
                    value="apellidos"
                    name="apellidos"
                    type="text"
                    :maxlength="maximos.apellidos"
                    :disabled="this.disable"
                    placeholder="Apellidos.."
                    v-model="persona.apellidos"
            />
            <InputComponent 
                    id="telefono" 
                    value="telefono"
                    name="telefono"
                    type="text"
                    :maxlength="maximos.telefono"
                    :disabled="this.disable"
                    placeholder="telefono..."
                    v-model="persona.telefono"
            />

            <InputComponent 
                    id="direccion" 
                    value="direccion"
                    name="direccion"
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

import InputComponent from '@/components/InputComponent.vue'
import {mapActions} from 'vuex'

export default {
  name: 'AgregarPersona',
  components:{
      InputComponent
  },
  data(){
      return{
          persona:{
              nombre:'',
              apellidos:'',
              telefono:'',
              direccion:''
          },
          disable: false,
          maximos:{
              nombre:50,
              apellidos:80,
              telefono:10,
              direccion:150
          }
      }
  },
  methods:{
      ...mapActions(['crearEmpleado']),
      aggPersonal(){
          this.crearEmpleado({
              params:this.persona,
              onComplete:(response)=>{
                  console.log('AGREGO')
                  this.$router.push('/Personas')
              },
              onError:(err)=>{
                  console.log('error')
              }
          })
          
      }
  }
}
</script>