<template>
  <v-footer class="footer text-center d-flex flex-column ga-2 py-1">
    <div class="d-flex ga-3">
      <v-tooltip v-for="icon in icons" :key="icon.name" location="top">
        <template v-slot:activator="{ props }">
          <a :href="icon.link" target="_blank" rel="noopener noreferrer">
            <v-btn v-bind="props" :icon="icon.name" density="comfortable" variant="text" color="white"></v-btn>
          </a>
        </template>
        <span>{{ icon.tooltip }}</span>
      </v-tooltip>
    </div>
    <strong style="color: white; text-decoration: none; font-family: Monserrat;">
      Lunes a Viernes de 08:00hs a 12:30hs y de 16:30hs a 20:30hs - Sábados de 08:30hs a 12:30hs
    </strong>
    <strong>
      &copy; <a href="mailto:dicolantoniosantiago@gmail.com"
        style="color: white; text-decoration: none; font-family: Monserrat;">
        2025 Santiago Di Colantonio. Todos los derechos reservados.
      </a>
    </strong>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        { name: "mdi-email", link: "mailto:farmacialibertadtuc@yahoo.com.ar", tooltip: "Enviar correo" },
        { name: "mdi-whatsapp", link: "https://wa.me/5493814150688", tooltip: "Farmacia" },
        { name: "mdi-whatsapp", link: "https://wa.me/5493812455794", tooltip: "Perfumeria" },
        { name: "mdi-instagram", link: "https://instagram.com/farmacialibertad", tooltip: "Instagram" },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: green;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 5px;
  z-index: 1000;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

strong {
  color: white;
}
</style>
