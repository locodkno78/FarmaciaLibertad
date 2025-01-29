<template>
    <v-container class="container">
        <picture>
            <iframe
                src="https://www.google.com/maps/embed?pb=!4v1738190249277!6m8!1m7!1sZlRxqCI4bhnYnV0ghGH-3g!2m2!1d-26.83497046569329!2d-65.21216879935572!3f40.26901350617552!4f-23.4115045167796!5f0.7820865974627469"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </picture>
        <div>
            <v-btn class="btn" :href="googleMapsLink" target="_blank">
                Ver en Google Maps
            </v-btn>
        </div>
    </v-container>
</template>

<script>
import { computed } from "vue";

export default {
    name: "Location",
    setup() {
        const address = "Jujuy 400, San Miguel de Tucumán, Argentina"; // Dirección a buscar

        const googleMapsLink = computed(() => {
            return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        });

        return { googleMapsLink };
    },
};
</script>

<style scoped>
.container {
    text-align: center;
}

.btn {
    background-color: green;
    color: white;
    margin-top: 3%;
}
</style>