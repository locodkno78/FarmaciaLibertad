<template>
  <div class="cards">
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(card, index) in cards" :key="index">
        <v-card class="mx-auto" elevation="10">
          <v-img class="card-image" :src="card.image" contain></v-img>
          <v-card-title class="text-h5">{{ card.text1 }}</v-card-title>          
          <v-card-text class="text-h5">{{ card.text2 }}</v-card-text>
          <v-card-actions class="text-h5">
            <CustomButton class="btn" :href="'https://wa.me/5493812455794'" :text="card.text">{{ card.text }}</CustomButton>
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
        { image: "/adidas_vibes.jpeg", text: "CONSULTAR", text1: "ADIDAS VIBES"},
        { image: "/benetton_sisterland.jpeg", text: "CONSULTAR", text1: "BENETTON SISTERLAND"},
        { image: "/antonio-banderas.jpg", text: "CONSULTAR", text1: "The Golden Secret"},
        { image: "/benetton_tribe_cool.jpeg", text: "CONSULTAR", text1: "BENETTON TRIBE COOL"},
        { image: "/cher.jpeg", text: "CONSULTAR", text1: "CHER N° 18"},
        { image: "/nina_ricci.jpeg", text: "CONSULTAR", text1: "NINA RICCI"},
        { image: "/paula_alma.jpeg", text: "CONSULTAR", text1: "PAULA ALMA"},
        { image: "/paula_amor.jpeg", text: "CONSULTAR", text1: "PAULA AMOR"},
        { image: "/shakira_dance.jpeg", text: "CONSULTAR", text1: "SHAKIRA DANCE DIAMONDS"}
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
    background-color:
    rgb(8, 92, 8);
}

.text-h4 {
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
  height: 280px;
}
.btn{
  background-color: green;
  color: white;
  font-family: 'Monserrat';
  border-radius: 0.8em;  
  border: 1px solid;
}

.divider {
  height: 2px;
}

@media (max-width: 600px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }
}
</style>