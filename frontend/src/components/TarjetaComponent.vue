<template>
  <div class="home">
      <div v-if="tiket.estatus=='ABT'" class="card text-white bg-danger mb-3" style="max-width: 18rem;">
        <div class="card-header">{{this.tiket.nombre}}</div>
        <div class="card-body">
            <h5 class="card-title">{{this.tiket.estatus}}</h5>
            <p class="card-text">{{this.tiket.descripcion}}</p>
        </div>
    </div>

     <div v-else-if="tiket.estatus=='ESP'" class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">{{this.tiket.nombre}}</div>
        <div class="card-body">
            <h5 class="card-title">{{this.tiket.estatus}}</h5>
            <p class="card-text">{{this.tiket.descripcion}}</p>
        </div>
    </div>

     <div v-else-if="tiket.estatus=='FIN'" class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">{{this.tiket.nombre}}</div>
        <div class="card-body">
            <h5 class="card-title">{{this.tiket.estatus}}</h5>
            <p class="card-text">{{this.tiket.descripcion}}</p>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'TarjetaComponent',
  props:{
       tiket:{
            nombre:'',
            descripcion:'',
            prioridad:'',
            idPersona:'',
            idCategoria:'',
            estatus:''
        }
  }

}
</script>