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
                    <v-card-text class="text">
                        <v-icon class="icon">mdi-home</v-icon>
                        Jujuy 400 esq. Gral Paz - San Miguel de Tucumán</v-card-text>
                    <v-card-text class="text">
                        <v-icon class="icon">mdi-email</v-icon>
                        farmacialibetadtuc@yahoo.com.ar</v-card-text>
                    <v-card-text class="text">
                        <v-icon class="icon">mdi-clock</v-icon>
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
    margin-top: 8%;
    border-width: 2px;
    border-color: green;
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.8);
}

.card:hover {
    background-color: rgba(255, 255, 255, 1);
}

.title {
    font-family: 'Montserrat';
    font-size: 1.8rem;
    /* Ajustamos tamaño de fuente */
}

.text {
    font-family: 'Monserrat';
    font-size: 20px;
    margin: 5px 0px;
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
    }

    .title {
        font-size: 1.5rem;
    }

    .text {
        font-size: 1rem;
    }
}
</style>