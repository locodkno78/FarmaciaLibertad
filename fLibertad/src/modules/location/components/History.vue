<template>
    <v-card class="mx-auto card">
        <v-card-item class="item">
            <v-card-title class="title">
                <strong> Nuestra Historia</strong>
            </v-card-title>
        </v-card-item>
        <v-card-text class="bg-surface-light pt-4 text">
            En el corazón de Barrio Sur, San Miguel de Tucumán, donde las calles resguardan historias de esfuerzo y dedicación, nació un sueño el 16 de mayo de 1977. Fue en esa fecha cuando Marta Josefina Rosales e Hipólito Alberto Di Colantonio decidieron dar vida a una farmacia que marcaría la diferencia en la comunidad. Guiados por la pasión y el compromiso con su vocación, establecieron un espacio donde el conocimiento, la ética y la atención profesional se convirtieron en los pilares fundamentales. Desde entonces, en la esquina de Jujuy 400 y General Paz, la farmacia tomó forma y se transformó en una referencia en la región. Bajo la dirección técnica de Marta Josefina Rosales, quien con orgullo porta la Matrícula Profesional N° 656, cada día representa una oportunidad para brindar el mejor servicio a quienes confían en su labor. Con dedicación incansable, se han forjado lazos de confianza y gratitud con la comunidad, consolidando un legado basado en la excelencia y la calidez humana. A lo largo de los años, la farmacia ha crecido, adaptándose a los cambios y desafíos, pero siempre manteniendo la esencia de sus fundadores: un espacio donde la vocación de servicio y la profesionalidad se entrelazan para cuidar la salud y el bienestar de la comunidad. Así, lo que un día fue un sueño, hoy es una realidad que continúa escribiendo su historia en cada persona que recibe atención, en cada gesto de ayuda y en cada sonrisa que refleja la dedicación con la que todo comenzó.
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: "History",
};
</script>

<style scoped>
.card {
  margin-top: 5%;
  border-width: 2px;
  border-color: green;
  width: 100%;
  max-width: 900px; /* Ajuste para pantallas grandes */
}

.text {
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px; /* Ajustar el tamaño de fuente */
  text-align: justify;
  margin: 0 10px;
}

.title {
  font-family: 'Times New Roman', Times, serif;
  font-size: 28px; /* Ajustar tamaño de título */
  text-align: center;
  color: white;
}

.item {
  background-color: green;
  padding: 15px;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .title {
    font-size: 22px; /* Reducir tamaño del título en pantallas pequeñas */
  }

  .text {
    font-size: 16px; /* Reducir el tamaño del texto en pantallas pequeñas */
    margin: 0 15px; /* Ajustar margen en pantallas pequeñas */
  }

  .card {
    margin-top: 10%;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 20px; /* Más pequeño en teléfonos */
  }

  .text {
    font-size: 14px; /* Más pequeño en teléfonos */
    margin: 0 5px;
  }

  .card {
    margin-top: 15%;
    padding: 10px; /* Espaciado reducido */
  }
}
</style>
