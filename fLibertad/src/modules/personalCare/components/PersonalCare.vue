<template>
  <div class="cards">
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(card, index) in cards" :key="index">
        <v-card class="mx-auto card" elevation="10">
          <v-img class="card-image" :src="card.image"></v-img>
          <v-card-title class="text-h5">{{ card.text2 }}</v-card-title>
          <v-card-actions class="text-h5">
            <CustomButton class="btn" :href="'https://wa.me/5493812455794'" :text="card.text">{{ card.text }}
            </CustomButton>
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
        { image: "/nivea.webp", text: "CONSULTAR", text2: "Nivea" },
        { image: "/cicatricure.jpg", text: "CONSULTAR", text2: "Cicatricure" }
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

.card {
  width: 300px;
  /* Fija el ancho de todas las tarjetas */
  height: 400px;
  /* Fija la altura de todas las tarjetas */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-image {
  object-fit: cover;
  /* Asegura que la imagen llene el espacio */
  height: 200px;
  /* Fija la altura de la imagen */
  width: 100%;
  /* Asegura que la imagen ocupe todo el ancho */
}

.btn {
  background-color: green;
  color: white;
  font-family: 'Monserrat';
  border-radius: 0.8em;
  border: 1px solid;
}

@media (max-width: 600px) {
  .cards {
    flex-direction: column;
    align-items: center;
    padding-bottom: 10%;
  }
}
</style>