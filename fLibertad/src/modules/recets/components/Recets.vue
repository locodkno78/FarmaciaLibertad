<template>
  <v-container class="mt-4">
    <v-card class="mx-auto my-8" elevation="16" max-width="500">
      <v-card-title class="title">Formulario Receta</v-card-title>
      <v-card-text>
      <v-form ref="formRef" v-model="valid" class="form">
        <!-- Nombre -->
        <v-text-field v-model="formData.nombre" label="Nombre" :rules="[rules.required]" outlined></v-text-field>

        <!-- Apellido -->
        <v-text-field v-model="formData.apellido" label="Apellido" :rules="[rules.required]" outlined></v-text-field>

        <!-- Domicilio -->
        <v-text-field v-model="formData.domicilio" label="Domicilio" :rules="[rules.required]" outlined></v-text-field>

        <!-- Teléfono -->
        <v-text-field v-model="formData.telefono" label="Teléfono" :rules="[rules.required, rules.phone]"
          outlined></v-text-field>

        <!-- Textarea -->
        <v-textarea v-model="formData.receta" label="Pegue el Link de su Receta" :rules="[rules.required]"
          outlined></v-textarea>
          <!-- Botones -->
          <div class="mt-4 btn">
            <v-btn color="success" @click="submit" :disabled="!valid">
              Enviar
            </v-btn>
            <v-btn color="success" @click="resetForm" class="ms-2">
              Limpiar
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"; // Importar useRouter

export default {
  name: "Recets",
  setup() {
    // Usar el router
    const router = useRouter();

    // Referencia del formulario
    const formRef = ref(null);

    // Formulario reactivo
    const formData = ref({
      nombre: "",
      apellido: "",
      domicilio: "",
      telefono: "",
      receta: "",
    });

    // Validación del formulario
    const valid = ref(false);
    const rules = {
      required: (value) => !!value || "Este campo es obligatorio.",
      phone: (value) =>
        /^[0-9]{7,10}$/.test(value) || "Debe ser un número de teléfono válido.",
    };

    // Función para enviar el formulario
    const submit = () => {
      alert(`Formulario enviado!!!\nEn Breve nos contactaremos con Ud.\nMuchas Gracias!!!`);
      resetForm(); // Limpiar formulario
      router.push("/"); // Redirigir al home
    };

    // Función para limpiar el formulario y reiniciar la validación
    const resetForm = () => {
      // Limpia los datos del formulario
      formData.value = {
        nombre: "",
        apellido: "",
        domicilio: "",
        telefono: "",
        receta: "",
      };
      // Reinicia el estado del formulario
      if (formRef.value) {
        formRef.value.resetValidation(); // Limpia mensajes de error
      }
    };

    return {
      formData,
      valid,
      rules,
      submit,
      resetForm,
      formRef,
    };
  },
};
</script>

<style scoped>
.v-container {
  max-width: 600px;
}
.title{
  font-family: 'Times New Roman', Times, serif;
  font-size:xx-large;
  background-color: green;
  color: white;
  text-align: center;
}
.form{
  padding-top: 2%;
}
.btn{
  text-align: center;  
}
</style>