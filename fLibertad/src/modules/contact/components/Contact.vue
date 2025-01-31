<template>
    <v-container>
        <v-row justify="center" dense>
            <v-col cols="12" md="6" class="mb-4">
                <v-card class="card">
                    <v-card-text class="text">
                        <v-icon class="icon">mdi-phone</v-icon> Teléfono Fijo:0381-4225059
                    </v-card-text>
                    <v-card-text class="text">
                        <v-icon class="icon">mdi-whatsapp</v-icon> WhatsApp: +543814150688
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-4">
                <v-card class="card">
                    <v-card-title class="title">
                        <v-icon class="icon">mdi-home</v-icon> Dirección
                    </v-card-title>
                    <v-card-text class="text">Jujuy 400 esq. Gral Paz - San Miguel de Tucumán</v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-4">
                <v-card class="card">
                    <v-card-title class="title">
                        <v-icon class="icon">mdi-email</v-icon> Email
                    </v-card-title>
                    <v-card-text class="text">farmacialibetadtuc@yahoo.com.ar</v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6" class="mb-4">
                <v-card class="card">
                    <v-card-title class="title">
                        <v-icon class="icon">mdi-clock</v-icon> Horario de Atención
                    </v-card-title>
                    <v-card-text class="text">
                        Lunes a Viernes de 08:00hs a 12:30hs y de 16:30hs a 20:30hs - Sábados de 08:30hs a 12:30hs
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Contact",
};
</script>

<style scoped>
.card {
    border-width: 2px;
    border-color: green;
    text-align: center;
    margin-top: 5%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 200px;
    /* Altura fija para las tarjetas */
}

.title {
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.8rem;
    /* Ajustamos tamaño de fuente */
}

.text {
    margin-top: 5%;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.2rem;
}

.icon {
    color: green;
}

@media (max-width: 600px) {
    .card {
        margin-top: 1%;
        width: 100%;
        padding: 15px;
        height: 165px;
        /* Ajustamos la altura en pantallas pequeñas */
    }

    .title {
        font-size: 1.5rem;
    }

    .text {
        font-size: 1rem;
    }
}
</style>