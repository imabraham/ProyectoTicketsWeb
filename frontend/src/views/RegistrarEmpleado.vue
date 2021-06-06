<template>
  <div class="RegistrarEmpleado">
    <h1>Registrar empleado</h1>
    <b-form @submit.prevent="guardarEmpleado()">
      <Input
        v-model="empleado.prsnl_nombre"
        id="nombre"
        titulo="Nombre"
        placeholder="Ingrese el nombre"
        :maxlength="50"
        :error="erroresValidacion && !validacionNombre"
        mensajeError="Es necesario ingresar el nombre"
        class="mb-2"
      />
      <Input
        v-model="empleado.prsnl_apellidos"
        id="apellidos"
        titulo="Apellidos"
        placeholder="Ingrese los apellidos"
        :maxlength="80"
        :error="erroresValidacion && !validacionApellidos"
        mensajeError="Es necesario ingresar los apellidos"
        class="mb-2"
      />
      <Input
        v-model="empleado.prsnl_telefono"
        id="telefono"
        titulo="Telefono"
        placeholder="Ingrese el telefono"
        :maxlength="10"
        :error="erroresValidacion && !validacionTelefono"
        mensajeError="El teléfono debe ser de 10 dígitos"
        class="mb-2"
      />
      <Input
        v-model="empleado.prsnl_direccion"
        id="direccion"
        titulo="Direccion"
        placeholder="Ingrese la dirección"
        :maxlength="150"
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
  name: "RegistrarEmpleado",
  components: {
    Input,
  },
  data() {
    return {
      empleado: {
        prsnl_nombre: "",
        prsnl_apellidos: "",
        prsnl_telefono: "",
        prsnl_direccion: ""
      },
      erroresValidacion: false,
    };
  },
  computed: {
    validacionNombre() {
      return (
        this.empleado.prsnl_nombre !== undefined &&
        this.empleado.prsnl_nombre.trim() !== ""
      );
    },
    validacionApellidos() {
      return (
        this.empleado.prsnl_apellidos !== undefined &&
        this.empleado.prsnl_apellidos.trim() !== ""
      );
    },
    validacionTelefono() {
      return (
        this.empleado.prsnl_telefono == undefined ||
        this.empleado.prsnl_telefono.trim() == "" ||
        this.empleado.prsnl_telefono.length == 10
      );
    },
  },
  methods: {
    ...mapActions(["crearEmpleado"]),
    guardarEmpleado() {
      if (this.validacionNombre && this.validacionApellidos && this.validacionTelefono) {
        this.erroresValidacion = false;

        //Guardar
        this.crearEmpleado({
          params: this.empleado,
          onComplete: (response) => {
            console.log(response.data);
            this.$notify({
              type: "success",
              title: response.data.mensaje,
            });
            this.$router.push({
              name: "VerEmpleados",
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