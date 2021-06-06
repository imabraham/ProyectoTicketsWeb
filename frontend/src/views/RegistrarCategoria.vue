<template>
  <div class="RegistrarCategoria">
    <h1>Registrar categoria</h1>
    <b-form @submit.prevent="guardarCategoria()">
      <Input
        v-model="categoria.ctgrs_nombre"
        id="nombre"
        titulo="Nombre"
        placeholder="Ingrese el nombre"
        :maxlength="50"
        :error="erroresValidacion && !validacionModelo"
        mensajeError="Es necesario ingresar el modelo"
        class="mb-2"
      />
      <b-button type="submit" class="mt-2" variant="primary">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Input from "../components/Input";

export default {
  name: "RegistrarCategoria",
  components: {
    Input,
  },
  data() {
    return {
      categoria: {
        ctgrs_nombre: ""
      },
      erroresValidacion: false,
    };
  },
  computed: {
    validacionNombre() {
      return (
        this.categoria.ctgrs_nombre !== undefined &&
        this.categoria.ctgrs_nombre.trim() !== ""
      );
    },
  },
  methods: {
    ...mapActions(["crearCategoria"]),
    guardarCategoria() {
      if (this.validacionNombre) {
        this.erroresValidacion = false;

        //Guardar
        this.crearCategoria({
          params: this.categoria,
          onComplete: (response) => {
            console.log(response.data);
            this.$notify({
              type: "success",
              title: response.data.mensaje,
            });
            this.$router.push({
              name: "VerCategorias",
            });
          },
          onError: (error) => {
            console.log(error.response.data.mensaje);
            this.$notify({
              type: "error",
              title: error.response.data.mensaje,
            });
          },
        });
      } else {
        this.erroresValidacion = true;
      }
    },
  },
};
</script>

<style>
</style>
