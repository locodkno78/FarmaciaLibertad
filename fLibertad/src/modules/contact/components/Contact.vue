<template>
    <v-container>
        <v-row justify="center" dense>
            <v-col cols="12" md="6">
                <v-card class="card">

                    <v-card-text class="text"><v-icon>mdi-phone</v-icon> Teléfono Fijo:0381-4225059</v-card-text>
                    
                    <v-card-text class="text"><v-icon>mdi-whatsapp</v-icon> WhatsApp: +543814150688</v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card class="card">
                    <v-card-title class="title"><v-icon>mdi-home</v-icon> Dirección</v-card-title>
                    <v-card-text class="text">Jujuy 400 esq. Gral Paz - San Miguel de Tucumán</v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card class="card">
                    <v-card-title class="title"><v-icon>mdi-email</v-icon> Email</v-card-title>
                    <v-card-text class="text">farmacialibetadtuc@yahoo.com.ar</v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card class="card">
                    <v-card-title class="title"><v-icon>mdi-clock</v-icon> Horario de Atención</v-card-title>
                    <v-card-text class="text">Lunes a Viernes de 08:00hs a 12:30hs y de 16:30hs a 20:30hs - Sábados de
                        08:30hs a
                        12:30hs</v-card-text>
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
    height: 100px;
    width: 550px;
    padding-bottom: 50%;
    border-width: 2px;
    border-color: green;
    text-align: center;

}

.title {
    font-family: 'Times New Roman', Times, serif;
    font-size: 45px;
}

.text {
    margin-top: 5%;
    font-family: 'Times New Roman', Times, serif;
    font-size: 35px;
    text-align: center;
}
</style>