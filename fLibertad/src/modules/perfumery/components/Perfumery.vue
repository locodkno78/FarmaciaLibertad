<template>
  <div class="cards">
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(card, index) in cards" :key="index">
        <v-card class="mx-auto" elevation="10">
          <v-img class="card-image" :src="card.image" contain></v-img>
          <v-card-title class="text-h5">{{ card.text2 }}</v-card-title>
          <v-card-actions class="text-h5">
            <CustomButton :href="'https://wa.me/5493812455794'" :text="card.text">{{ card.text }}</CustomButton>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";

export default {
  name: "Perfumery",
  components: {
    CustomButton,
  },
  data() {
    return {
      cards: [
        { image: "/sauvage-dior.webp", text: "CONSULTAR", text2: "Sauvage de Dior" },
        { image: "/invictus.webp", text: "CONSULTAR", text2: "Invictus" },
        { image: "/antonio-banderas.jpg", text: "CONSULTAR", text2: "The Golden Secret" },
        { image: "/ch-212-vip.webp", text: "CONSULTAR", text2: "Carolina Herrera 212 Vip Rosé" },
        { image: "/dolce-gabbana-pour-femme.webp", text: "CONSULTAR", text2: "Dolce & Gabbana Pour Femme" },
        { image: "/Versace-Yellow-Diamond.webp", text: "CONSULTAR", text2: "Versace Yellow Diamond" }
      ]
    };
  }
};
</script>

<style scoped>
.text-h5 {
  font-family: 'Monserrat';
    color: white;
    text-align: center;
    background-color: green;
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

.card-image {
  object-fit: contain;
  height: 300px;
}

@media (max-width: 600px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }
}
</style>