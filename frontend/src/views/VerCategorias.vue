<template>
  <div>
    <h1>Categorias</h1>
    <b-button variant="primary" to="/RegistrarCategoria"
      >Registrar nueva categoria</b-button
    >
    <Table :items="categorias" :fields="campos" />
  </div>
</template>

<script>
import Table from "../components/Table";
import { mapState, mapActions } from "vuex";
export default {
  name: "VerCategorias",
  components: {
    Table,
  },
  data() {
    return {
      campos: [
        { key: "ctgrs_id", label: "ID" },
        { key: "ctgrs_nombre", label: "Nombre" },
      ],
    };
  },
  methods: {
    ...mapActions(["setCategorias"]),
  },
  computed: {
    ...mapState(["categorias"]),
  },
  mounted() {
    this.setCategorias();
  },
};
</script>

<style>
</style>