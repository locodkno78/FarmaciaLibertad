<template>
  <v-container>    
    <div class="cards">
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(card, index) in cards" :key="index">
          <v-card class="mx-auto">
            <router-link :to="card.route" class="text-decoration-none">
              <v-img class="align-end text-white" height="200" :src="card.image" contain></v-img>
            </router-link>
            <v-card-actions>
              <v-btn color="green" :text="card.text" :to="card.route"></v-btn>
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
        { image: "../../../../public/cuidado-personal.jpg", text: "Cuidado Personal", route: "/PersonalCareView" },
        { image: "../../../../public/contacto.jpg", text: "Contactanos", route: "/ContactView" },
        { image: "../../../../public/maps.jpg", text: "Historia & Ubicación", route: "/LocationView" },
        { image: "../../../../public/ofertas.jpg", text: "Promociones", route: "/OffersView" }
      ]
    };
  },
};
</script>

<style scoped>
h1,
p {
  color: green;
}

.cards {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-left: 2%;
  margin-right: 2%;
}

@media (max-width: 600px) {
  .cards {
    margin-top: -150px;
    flex-direction: column;
    align-items: center;
  }
}
</style>
