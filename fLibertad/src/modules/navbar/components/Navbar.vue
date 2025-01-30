<template>
  <v-toolbar class="toolbar" density="compact">
    <router-link to="/" class="text-decoration-none"><v-toolbar-title class="text"><v-icon>mdi-hospital</v-icon>Farmacia
        Libertad</v-toolbar-title></router-link>
    <v-spacer></v-spacer>
    <v-btn class="icon" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <v-btn class="icon" v-bind="props" icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list bg-color="#008000">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.route"  class="list-item">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    items: [
      { title: "Home", route: "/" },
      { title: "Cargar Recetas", route: "/RecetsView" },
      { title: "Contacto", route: "/ContactView" },
      { title: "Ubicación", route: "/LocationView" },
    ],
  }),
};
</script>

<style scoped>
.toolbar {
  background-color: green;
}

.text {
  color: white;
  font-family: "Times New Roman", Times, serif;
  font-size: 40px;
  font-weight: bolder;
  align-items: center;
}

.icon {
  color: white;
}

.list {
  background-color: green;
}
.list-item {
  color: white;
}
</style>
