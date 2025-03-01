<template>
  <v-toolbar class="toolbar" density="compact">
    <v-container class="d-flex align-center">
      <!-- Logo y título -->
      <router-link to="/" class="text-decoration-none d-flex align-center">
        <v-icon class="text">mdi-hospital</v-icon>
        <v-toolbar-title class="text">Farmacia Libertad</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <!-- Menú desplegable -->
      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn class="icon" v-bind="props" icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list bg-color="#008000">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.route" class="list-item">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      items: [
        { title: "Home", route: "/" },
        { title: "Cargar Recetas", route: "/RecetsView" },
        { title: "Ortopedia", route: "/OrthopedicsView" },
        { title: "Perfumeria", route: "/PerfumeryView" },
        { title: "Cuidado Personal", route: "/PersonalCareView" },
        { title: "Contacto", route: "/ContactView" },
        { title: "Ubicación", route: "/LocationView" },
        { title: "Ofertas", route: "/OffersView" },
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos generales */
.toolbar {
  background-color: green;
}

/* Ajustes de título */
.text {
  color: white;
  font-family: "Monserrat";
  font-weight: bolder;
  align-items: center;
  font-size: 24px;
}

/* Ajuste del tamaño en pantallas grandes */
@media (min-width: 768px) {
  .text {
    font-size: 40px;
  }
}

/* Íconos */
.icon {
  color: white;
}

.list-item {
  color: white;
  font-weight: bold;
  font-family: Monserrat;
  background-color: green;
}

.list-item:hover {
  background-color: #006400;
}
</style>
