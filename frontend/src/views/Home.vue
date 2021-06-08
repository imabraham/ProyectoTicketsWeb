<template>
  <div class="container">

    <NavbarComponent/>

    <h2>Tikets</h2>
    <div v-for="tik in get_tikets" :key="tik.id">
      <TarjetaComponent :tiket="tik"/>
    </div>
    
  </div>
</template>

<script>

import TarjetaComponent from '@/components/TarjetaComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'Home',
  components:{
    TarjetaComponent,
    NavbarComponent
  },
  methods:{
    ...mapActions(['obtenerTikets'])
  },
  computed:{
    ...mapGetters(['get_tikets'])
  },
  mounted(){
    this.obtenerTikets();
  }

}
</script>
