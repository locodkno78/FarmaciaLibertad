<template>
  <div class="cards">
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(card, index) in cards" :key="index">
        <v-card class="mx-auto" elevation="10">
          <v-img class="card-image" :src="card.image" contain></v-img>
          <v-card-title class="text-h5">{{ card.text2 }}</v-card-title>
          <v-card-actions>
            <CustomButton :href="'https://wa.me/5493814150688'" :text="card.text">{{ card.text }}</CustomButton>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CustomButton from "../../perfumery/components/CustomButton.vue";

export default {
  name: "PersonalCare",
  components: {
    CustomButton,
  },
  data() {
    return {
      cards: [
        { image: "/adermicina.jpg", text: "CONSULTAR", text2: "Adermicina" },
        { image: "/aguamicelar.jpg", text: "CONSULTAR", text2: "Garnier Agua Micelar" },
        { image: "/dermaglos.jpg", text: "CONSULTAR", text2: "Dermaglós" },
        { image: "/la-roche-posay.png", text: "CONSULTAR", text2: "La Roche Posay" },
        { image: "/nivea-q10.webp", text: "CONSULTAR", text2: "Nivea Q-10" },
        { image: "/Tío-Nacho-Ginseng.jpg", text: "CONSULTAR", text2: "Tio Nacho Ginseng" }
      ]
    };
  }
};
</script>

<style scoped>
.text-h5 {
  font-family: 'Montserrat';
  text-align: center;
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