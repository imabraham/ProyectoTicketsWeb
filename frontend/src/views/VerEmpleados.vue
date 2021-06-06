<template>
  <div>
    <h1>Empleados</h1>
    <b-button variant="primary" to="/RegistrarEmpleado"
      >Registrar nuevo empleado</b-button
    >
    <Table :items="empleados" :fields="campos">
      <template slot="actions"  slot-scope="{ item }">
        <b-button class="me-1" @click="onEditar(item)">Editar</b-button>
        <b-button @click="onEliminar(item)">Eliminar</b-button>
      </template>
    </Table>
  </div>
</template>

<script>
import Table from "../components/Table";
import { mapState, mapActions } from "vuex";
export default {
  name: "VerEmpleados",
  components: {
    Table,
  },
  data() {
    return {
      campos: [
        { key: "prsnl_id", label: "ID" },
        { key: "prsnl_nombre", label: "Nombre" },
        { key: "prsnl_apellidos", label: "Apellidos" },
        {
          key: "prsnl_telefono",
          label: "Teléfono",
          formatter: (value) => {
            return value || "-";
          },
        },
        {
          key: "prsnl_direccion",
          label: "Dirección",
          formatter: (value) => {
            return value || "-";
          }
        },
        { key: "actions", label: "Acciones" }
      ],
    };
  },
  methods: {
    ...mapActions(["setEmpleados", "eliminarEmpleado"]),
    onEditar(item) {
      console.log("EditarEmpleado", item.item.id);
      this.$router.push({
        name: "EditarEmpleado",
        params: {
          id: item.item.id,
        },
      });
    },
    onEliminar(item) {
      console.log("EliminarEmpleado", item.id.id);

      this.$bvModal
        .msgBoxConfirm("Esta opción no se puede deshacer.", {
          title: "Eliminar Empleado",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "Aceptar",
          cancelTitle: "Cancelar",
          footerClass: "p-2",
          centered: true,
        })
        .then((value) => {
          if (value) {
            this.eliminarEmpleado({
              id: item.item.id,
              onComplete: (response) => {
                this.$notify({
                  type: "success",
                  title: response.data.mensaje,
                });
                setTimeout(() => this.setEmpleados(), 1000);
              },
            });
          }
        })
        .catch((err) => {
          // An error occurred
        });
    },
  },
  mounted() {
    this.setEmpleados();
  },
  computed: {
    ...mapState(["empleados"]),
  },
};
</script>

<style>
</style>