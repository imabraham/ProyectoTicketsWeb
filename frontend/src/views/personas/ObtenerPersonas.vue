<template>
    <div class="container">
        <h3>Personal</h3>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button 
                @click="addPersonal()"
            class="btn btn-success me-md-2" type="button">Agregar Personal</button>
        </div>

        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellids</th>
            <th scope="col">Telefono</th>
            <th scope="col">Dirección</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="persona in get_personal" :key="persona.id">
            <th scope="row">{{persona.id}}</th>
            <td>{{persona.nombre}}</td>
            <td>{{persona.apellidos}}</td>
            <td>{{persona.telefono}}</td>
            <td>{{persona.direccion}}</td>
            <td>
                <button 
                    @click="editar(persona)" 
                    type="button" 
                    class="btn btn-primary">Editar</button>
                <button 
                    @click="eliminar(persona.id)" 
                    type="button" 
                    class="btn btn-danger">Borrar</button>
            </td>
            </tr>
        </tbody>
        </table>

    </div>
    

    
</template>

<script>
import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'ObtenerPersonas',
  computed:{
      ...mapGetters(['get_personal'])
  },
  methods:{
      ...mapActions(['getPersonal','eliminarEmpleado','obPesona']),
        eliminar(id){
            this.eliminarEmpleado({
                id:id,
                onComplete:()=>{
                    this.getPersonal();
                },
                onError:()=>{
                    console.log('NO SE ELIMINO')
                }
            })
        },
        editar(persona){
            this.obPesona(persona);
            this.$router.push('/EditarPersonas');
        },
        addPersonal(){
            this.$router.push('/AgregarPersona')
        }
  },
  mounted(){
      this.getPersonal();
  }
}
</script>
