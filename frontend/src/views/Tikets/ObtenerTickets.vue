<template>
    <div class="container">
        <h3>Tikets</h3>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button 
                @click="addTiket()"
            class="btn btn-success me-md-2" type="button">Agrega Tiket</button>
        </div>

        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Prioridad</th>
            <th scope="col">Persona</th>
            <th scope="col">Categoria</th>
            <th scope="col">Estatus</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="tiket in get_tikets" :key="tiket.id">
                <th scope="row">{{tiket.id}}</th>
                <td>{{tiket.nombre}}</td>
                <td>{{tiket.descripcion}}</td>
                <td>{{tiket.prioridad}}</td>
                <td>{{tiket.idPersona}}</td>
                <td>{{tiket.idCategoria}}</td>
                <td>{{tiket.estatus}}</td>
                <td>{{tiket.acciones}}</td>
            <td>
                <button 
                    @click="editar(tiket)" 
                    type="button" 
                    class="btn btn-primary">Editar</button>
                <button 
                    @click="eliminar(tiket.id)" 
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
  name: 'ObtenerTickets',
  computed:{
      ...mapGetters(['get_tikets'])
  },
  methods:{
      ...mapActions(['obtenerTikets','eliminarTiket','obTiket']),
        eliminar(id){
            this.eliminarTiket({
                id:id,
                onComplete:()=>{
                    this.obtenerTikets();
                },
                onError:()=>{
                    console.log('NO SE ELIMINO')
                }
            })
        },
        editar(tiket){
            this.obTiket(tiket);
            this.$router.push('/EditarTiket');
        },
        addTiket(){
            this.$router.push('/AgregarTiket')
        }
  },
  mounted(){
      this.obtenerTikets();
  }
}
</script>
