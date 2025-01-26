<template>
  <v-container>
  <v-carousel height="400" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item">
    </v-carousel-item>
  </v-carousel>
  <div class="cards">
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="../../../../public/recetas.jpg"
            cover
          >
          </v-img>
          <v-card-actions>
            <v-btn color="green" text="Cargar Recetas" to="RecetsView"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="../../../../public/contacto.jpg"
            cover
          >
          </v-img>
          <v-card-actions>
            <v-btn color="green" text="Contactanos"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="../../../../public/maps.jpg"
            cover
          >
          </v-img>
          <v-card-actions>
            <v-btn color="green" text="Ubicación"></v-btn>
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
      items: [
        {
          src: "../../../public/Actron.jpg",
        },
        {
          src: "../../../public/Geniol.jpg",
        },
        {
          src: "../../../public/Hipoglos.jpg",
        },
        {
          src: "../../../public/Tafirol.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1,
p {
  color: green;
}
.cards{
  margin-top: 8px;
}
</style>
