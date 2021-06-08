<template>
    <div class="container">

        <h3>Modifica tus categorías</h3>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" type="button"
                @click="guarda()"
                >Guardar</button>
        </div>

            <InputComponent 
                :id="unicoTexto.id" 
                :value="unicoTexto.values"
                :name="unicoTexto.values"
                :type="unicoTexto.type"
                :maxlength="unicoTexto.maxlength"
                :disabled="unicoTexto.disabled"
                :placeholder="unicoTexto.placeholder"
                v-model="categoria.nombre"
            />

        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Borrar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="categoria in get_categorias" :key="categoria.id">
                <th scope="row">{{categoria.id}}</th>
                <td >{{categoria.nombre}}</td>
                <td >
                    <button type="button" 
                        @click="borrar(categoria.id)"
                        class="btn btn-danger">Borrar</button>
                </td>
                </tr>
            </tbody>
            </table>
        
    </div>
    
</template>

<script>

import {mapActions,mapGetters} from 'vuex'
import InputComponent from '@/components/InputComponent.vue'

export default {
  name: 'AccionesCategoria',
  data(){
      return{
          CategoriaTitulos: ["ID", "NOMBRE"],
          Catergoriaformatos: ["id", "nombre"],
          unicoTexto:{
              id:1,
              values:1,
              type:"text",
              maxlength:15,
              disabled: false,
              placeholder: "Nombra la categoria"
          },
          categoria:{
              nombre:''
          }
      }
  },
  components:{
      InputComponent
  },
  methods:{
      ...mapActions(['getCategorias','crearCategoria','eliminarCategoria']),
      guarda(){
          this.crearCategoria({
              params:{nombre:this.categoria.nombre},
              onComplete:(response)=>{
                  this.getCategorias();
              },
              onError:(res)=>{
                  console.log('error')
              }
          })
      },
      borrar(id){
          console.log(id);
        this.eliminarCategoria({
            id: id,
            onComplete:()=>{
                this.getCategorias();
            },
            onError:()=> {
                console.log('error');
            }
        });
      }
  },
  computed:{
      ...mapGetters(['get_categorias'])
  },
  mounted(){
      this.getCategorias();
  }
}
</script>
