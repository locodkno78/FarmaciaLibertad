<template>
  <v-container>
    <div class="cards">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="(card, index) in cards" :key="index">
          <v-card class="mx-auto card" elevation="10">
            <router-link :to="card.route" class="text-decoration-none">
              <v-img class="card-image" height="200" :src="card.image" contain></v-img>
            </router-link>
            <v-card-actions>
              <v-btn color="green" :text="card.text" :to="card.route">
                {{ card.text }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      cards: [
        { image: "../../../../public/recetas.jpg", text: "Cargar Recetas", route: "/RecetsView" },
        { image: "../../../../public/orthopedics.jpg", text: "Ortopedia", route: "/OrthopedicsView" },
        { image: "../../../../public/perfumeria.jpg", text: "Perfumeria", route: "/PerfumeryView" },
        { image: "../../../../public/cuidado-personal.webp", text: "Cuidado Personal", route: "/PersonalCareView" },
        { image: "../../../../public/contacto.jpg", text: "Contactanos", route: "/ContactView" },
        { image: "../../../../public/maps.jpg", text: "Historia & Ubicación", route: "/LocationView" },
        { image: "../../../../public/ofertas.jpg", text: "Promociones", route: "/OffersView" },
      ],
    };
  },
};
</script>

<style scoped>
.cards {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.card {
  width: 100%;
  /* Asegura que las tarjetas ocupen el ancho disponible */
}

.card-image {
  object-fit: cover;
  /* Asegura que las imágenes llenen el espacio */
  height: 200px;
  width: 100%;
}

@media (max-width: 600px) {
  .cards {
    flex-direction: column;
    align-items: center;
    padding-bottom: 10%;
  }
}
</style>
