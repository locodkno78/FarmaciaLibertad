<template>
  <h1></h1>
  <div class="cards" v-bind="$attrs">
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
import CustomButton from "../../perfumery/components/CustomButton.vue";

export default {
  name: "Offers",
  components: {
    CustomButton,
  },
  data() {
    return {
      cards: [
        { image: "/ofertas.jpg", text: "CONSULTAR", text2: "Proximamente" },
        { image: "/ofertas.jpg", text: "CONSULTAR", text2: "Proximamente" },
        { image: "/ofertas.jpg", text: "CONSULTAR", text2: "Proximamente" },
        { image: "/ofertas.jpg", text: "CONSULTAR", text2: "Proximamente" },
        { image: "/ofertas.jpg", text: "CONSULTAR", text2: "Proximamente" },
        { image: "/ofertas.jpg", text: "CONSULTAR", text2: "Proximamente" }
      ]
    };
  },
  mounted() {
    let title = document.querySelector('h1');
    let text = '***PROMOCIONES EXCLUSIVAS PARA LA WEB***';
    let letterStart = 0;
    let letterEnd = 1;
    let write = setInterval(() => {
      if (title) {
        title.innerHTML = text.slice(letterStart, letterEnd);
        letterEnd++;
        if (letterEnd > text.length) {
          letterEnd = 1;
        }
      }
    }, 200);
  }
};
</script>

<style scoped>
.text-h5,
h1 {
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
    padding-bottom: 10%;
  }
}
</style>