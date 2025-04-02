<template>
    <div class="cards">
        <v-row>
            <v-col cols="12" sm="6" md="4" v-for="(card, index) in cards" :key="index">
                <v-card class="mx-auto" elevation="10">
                    <v-img class="card-image" :src="card.image" contain></v-img>
                    <v-card-title class="text-h5">{{ card.text2 }}</v-card-title>
                    <v-card-actions class="text-h5">
                        <CustomButton class="btn" :href="'https://wa.me/5493814150688'" :text="card.text">{{ card.text }}
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
    name: "Orthopedics",
    components: {
        CustomButton,
    },
    data() {
        return {
            cards: [
                { image: "/espaldera-universal.jpg", text: "CONSULTAR", text2: "Espaldera Universal" },
                { image: "/faja-post-operatoria.jpg", text: "CONSULTAR", text2: "Faja Post Operatorio" },
                { image: "/inmovilizador.jpg", text: "CONSULTAR", text2: "Inmovilizador de Hombro" },
                { image: "/munequera.png", text: "CONSULTAR", text2: "Muñequera" },
                { image: "/rodillera.jpg", text: "CONSULTAR", text2: "Rodillera" },
                { image: "/codera-elastica.jpg", text: "CONSULTAR", text2: "Codera Elástica" }
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

.btn{
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