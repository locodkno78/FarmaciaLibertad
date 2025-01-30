<template>
  <v-container class="mt-4">
    <v-card class="mx-auto my-8" elevation="16" max-width="500">
      <v-card-title class="title">Formulario Receta</v-card-title>
      <v-card-text>
        <v-form ref="formRef" v-model="valid" class="form">
          <v-text-field v-model="formData.nombre" label="Nombre" :rules="[rules.required]" outlined></v-text-field>
          <v-text-field v-model="formData.apellido" label="Apellido" :rules="[rules.required]" outlined></v-text-field>
          <v-text-field v-model="formData.domicilio" label="Domicilio" :rules="[rules.required]"
            outlined></v-text-field>
          <v-text-field v-model="formData.telefono" label="Teléfono" :rules="[rules.required, rules.phone]"
            outlined></v-text-field>
          <v-textarea v-model="formData.receta" label="Pegue el Link de su Receta" :rules="[rules.required]"
            outlined></v-textarea>

          <div class="mt-4 btn">
            <v-btn color="success" @click="submit" :disabled="!valid">Enviar</v-btn>
            <v-btn color="success" @click="resetForm" class="ms-2">Limpiar</v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
    <!-- Snackbar de éxito -->
    <v-snackbar v-model="snackbar.success" color="green" location="center">
      {{ snackbar.message }}
      <template v-slot:actions>
        <v-btn color="white" text @click="goHome">Aceptar</v-btn>
      </template>
    </v-snackbar>

    <!-- Snackbar de error -->
    <v-snackbar v-model="snackbar.error" color="red" location="center">
      {{ snackbar.message }}
      <template v-slot:actions>
        <v-btn color="white" text @click="snackbar.error = false">Cerrar</v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "Recets",
  setup() {
    const router = useRouter();
    const formRef = ref(null);
    const formData = ref({
      nombre: "",
      apellido: "",
      domicilio: "",
      telefono: "",
      receta: "",
    });

    const snackbar = ref({ success: false, error: false, message: "" });
    const goHome = () => {
      snackbar.value.success = false; // Cierra el snackbar
      router.push("/"); // Redirige al home
    };

    const valid = ref(false);
    const rules = {
      required: (value) => !!value || "Este campo es obligatorio.",
      phone: (value) => /^[0-9]{7,10}$/.test(value) || "Debe ser un número de teléfono válido.",
    };

    const submit = async () => {
      try {
        await addDoc(collection(db, "recetas"), formData.value);
        snackbar.value = {
          success: true,
          error: false,
          message: "Formulario enviado correctamente. En breve nos contactaremos con Ud.",
        };
        resetForm();
       // router.push("/");
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        snackbar.value = {
          success: false,
          error: true,
          message: "Hubo un error al enviar el formulario. Inténtelo nuevamente.",
        };
      }
    };

    const resetForm = () => {
      formData.value = {
        nombre: "",
        apellido: "",
        domicilio: "",
        telefono: "",
        receta: "",
      };
      if (formRef.value) {
        formRef.value.resetValidation();
      }
    };

    return {
      formData,
      valid,
      rules,
      submit,
      resetForm,
      formRef,
      snackbar,
      goHome
    };
  },
};
</script>

<style scoped>
.v-container {
  max-width: 600px;
}

.title {
  font-family: 'Times New Roman', Times, serif;
  font-size: xx-large;
  background-color: green;
  color: white;
  text-align: center;
}

.form {
  padding-top: 2%;
}

.btn {
  text-align: center;
}
</style>
